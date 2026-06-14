# 24 Real-Time & Data Connectors

> **TL;DR:** Two data-layer systems every product gets: a tiered real-time strategy (polling → SSE → managed websockets) behind one swap-friendly hook, and a standard connector pattern for wiring external APIs into the product quickly and safely.
> **Covers:** realtime tiers, selection conditions, live UI rules, presence, external API connector pattern, inbound webhooks | **Depends on:** 03, 04, 13, 17 | **Used by:** 08, 09 | **Phase:** 3 (plan), 8-9 (build)

## Purpose

Generated SaaS apps default to request/response and feel static; adding external data sources usually devolves into ad-hoc fetch calls scattered through routes. This file makes both first-class: every product is **real-time by default** at the appropriate tier, and external APIs plug in through one connector pattern instead of improvisation.

---

## Real-Time System

### The Tiers

Pick the lowest tier that delivers the product's liveness needs — decided in Phase 3, recorded in the architecture summary. Higher tiers cost more (infra + complexity); the abstraction below makes upgrading later cheap.

| Tier | Mechanism | Latency | Use when |
|---|---|---|---|
| **1 — Live polling (default)** | TanStack Query `refetchInterval` (15-30s on dashboards/feeds, 5-10s on active work surfaces) + refetch on window focus | seconds | Single-user-at-a-time data, dashboards, most v1 products |
| **2 — Server push (SSE)** | Route-handler `ReadableStream` SSE per channel; client `EventSource` with auto-reconnect | sub-second | Notifications, AI assistant streaming (already SSE), job/import progress, activity feeds that must feel instant |
| **3 — Managed websockets** | Pusher or Ably (hosted; serverless-compatible) — channels per org, auth endpoint enforcing membership | instant, bidirectional | Presence ("who's online"), collaborative editing, multiplayer cursors, chat between users |

Every product ships **at least Tier 1** — `refetchOnWindowFocus` plus sensible intervals is the floor; a dashboard that only updates on hard refresh is a build failure. Tier 3 is never the default: presence and collaboration must be justified by the product's core job.

### The Abstraction Rule

All live data flows through one hook — `useLiveQuery(key, fetcher, liveness)` — that wraps TanStack Query. Tier 1 implements it with intervals; Tiers 2/3 implement it by **invalidating the same query keys** when an event arrives (`queryClient.invalidateQueries`). Feature code never knows which tier is active, so upgrading a product from polling to push touches one file, not every view.

Rules:
- Server remains the source of truth — events trigger refetch/invalidate; never patch client caches from event payloads except for ephemeral data (presence, typing, cursors)
- Mutations use optimistic updates with rollback on error (TanStack Query `onMutate`/`onError`)
- All channels are org-scoped and auth-checked server-side (Tier 2: session check on the SSE route; Tier 3: private channels via the auth endpoint) — never a global channel
- SSE on serverless: set route `maxDuration`, send a heartbeat comment every 15s, and rely on `EventSource` auto-reconnect; the client must tolerate reconnects silently

### Live UI Rules

Real-time must be **visible but calm** — these connect to the dashboard choreography in `03_dashboard_system.md`:

- New items slide into feeds/lists with the brief highlight-fade (200ms in, 1s highlight decay); counts and badges tick, they don't flash
- Rows update in place — never re-render a whole table because one row changed
- A subtle "live" indicator (pulsing dot + "Live" microlabel) on surfaces with Tier 2/3 push; show "Reconnecting…" state when the stream drops, and fall back to polling after 3 failed reconnects
- Presence (Tier 3 only): stacked avatars on the shared surface, capped at 5 + overflow count; join/leave fades, no toasts
- Never move content the user is interacting with — if the user has a row's menu open, queue the update until it closes

---

## External API Connector Pattern

For pulling third-party data into the product (market data, shipping rates, enrichment, weather, LLM-adjacent services — anything with an HTTP API). This is the **code-level** pattern; the user-facing Integrations module in `04_feature_modules.md` (connect/disconnect UI, OAuth) sits on top of it when end users own the connection.

### Structure

One connector per service, one shape for all of them:

```
src/lib/connectors/
  <service>.ts        — typed client: auth, endpoints, response schemas
  index.ts            — re-exports
src/app/api/webhooks/<service>/route.ts   — inbound events (if the service pushes)
```

### Connector Rules

1. **Server-only.** Keys live in env (T3 Env-validated), connectors are imported only from server code. A connector imported into a client component is a build failure.
2. **Typed edges.** Every response is parsed through a Zod schema before it enters the app — external APIs change shapes; the connector is where that breaks loudly instead of corrupting views silently.
3. **One fetch wrapper per connector** handling: auth header injection, timeout (10s default), retry with exponential backoff on 429/5xx (max 3, honor `Retry-After`), and mapping failures to the error taxonomy in `17_error_state_taxonomy.md` (external-service-error → the standard degraded-data UI, never a blank page).
4. **Cache deliberately.** Wrap reads in Next's `unstable_cache`/`fetch` revalidation with a per-connector TTL chosen by data volatility (rates: minutes; enrichment: days). Views show data age ("as of 12:04") when staleness is user-relevant per `13_internal_data_display_rules.md`.
5. **Inbound webhooks** get one route per provider: verify the signature first, return 2xx immediately, process async, dedupe on event ID — then invalidate the relevant live-query keys so Tier 1/2 surfaces update.
6. **Plan in Phase 3.** The architecture summary lists each external API as a connector with: purpose, endpoints used, auth style, cache TTL, and whether it pushes webhooks. Adding one later = one new file in `connectors/` + env keys — nothing else changes shape.

### Anti-Patterns

- `fetch` calls to third-party APIs inline in route handlers or components
- Returning unparsed external JSON to the client
- Exposing provider keys client-side "just for one call" — proxy through a route instead
- Polling an external API per page view when a cached TTL or webhook works
