# 23 AI Assistant Module (Default-On)

> **TL;DR:** Every MODAF product ships with an in-app AI assistant by default — a streaming chat surface with a typed tool layer over the product's own entities, permission-enforced, approval-gated for mutations, and cost-guarded. Built in Phase 9 unless the user explicitly opts out.
> **Covers:** model selection, server architecture, tool layer, permissions, approval UX, assistant UI spec, prompt caching, cost guardrails, audit logging | **Depends on:** 04, 06, 07, 08, 12, 17 | **Used by:** 09 | **Phase:** 3 (plan), 9 (build)

## Purpose

A SaaS product in 2026 is expected to be agentic, not just CRUD. This module gives every generated product a baseline AI capability: an assistant that can answer questions about the user's data and take actions in the product on the user's behalf — scoped to exactly what that user is allowed to do.

**Default-on.** During discovery, ask what the assistant should be able to do in this product; during Phase 3, derive its tool surface from the entity plan. Skip the module only if the user explicitly opts out or the product is itself an AI product with its own bespoke agent core.

## What "Default Agentic" Means Per Product

The module is the same skeleton everywhere; the tools make it bespoke. Derive tools from the product's entities and core actions:

| Product example | Read tools | Action tools |
|---|---|---|
| Invoicing app | `search_invoices`, `get_client`, `get_revenue_summary` | `create_invoice` (draft), `send_reminder` |
| Project tracker | `search_tasks`, `get_project_status` | `create_task`, `assign_task`, `update_status` |
| CRM | `search_contacts`, `summarize_pipeline` | `log_activity`, `create_followup` |

Rules of thumb: 3-6 read tools + 2-4 action tools for v1. Every tool maps to an existing service-layer function — the assistant gets **no capability the UI doesn't already have**.

---

## Stack & Model Selection

- **SDK:** `@anthropic-ai/sdk` (official TypeScript SDK), server-side only
- **Primary model:** `claude-opus-4-8` — the assistant's quality IS the feature; don't downgrade by default
- **Lightweight tasks** (conversation titles, classification, suggestion chips): `claude-haiku-4-5`
- **Thinking:** `thinking: { type: "adaptive" }` — let the model decide when to think
- **Effort:** `output_config: { effort: "high" }` default; `"low"` for the Haiku side-tasks
- **Streaming:** always, for any user-facing response
- Do NOT send `temperature` / `top_p` / `top_k` (removed on Opus 4.7+ — returns 400) and do not use `budget_tokens` (use adaptive thinking)

`ANTHROPIC_API_KEY` lives in server env only (validated via T3 Env). It must never appear in client bundles — no `NEXT_PUBLIC_` prefix, no client-side SDK initialization, ever.

## Server Architecture

One route handler owns the agent loop:

```
src/app/api/assistant/route.ts      — POST: streams the assistant turn (SSE)
src/lib/assistant/
  client.ts                          — singleton Anthropic client
  system-prompt.ts                   — frozen system prompt (see Caching)
  tools/                             — one file per tool
  tools/index.ts                     — assembles the tool set for a given session
```

The loop pattern (manual loop, because mutations need an approval gate):

```typescript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic(); // reads ANTHROPIC_API_KEY

const stream = client.messages.stream({
  model: "claude-opus-4-8",
  max_tokens: 64000,
  thinking: { type: "adaptive" },
  output_config: { effort: "high" },
  system: [{ type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
  tools,
  messages,
});
// stream text deltas to the client; await stream.finalMessage() to detect tool_use
```

- **Read tools** execute immediately server-side; results feed back into the loop (`tool_result` with matching `tool_use_id`), loop continues until `stop_reason === "end_turn"`.
- **Action tools** do NOT execute — the loop pauses, the pending action is streamed to the client as a confirmation card, and execution happens only after the user approves (then the loop resumes with the result). This is the human-in-the-loop gate; the SDK's auto tool-runner is fine for read-only tool sets but never for mutations.
- Handle `stop_reason === "refusal"` (surface gracefully, don't retry) and `"max_tokens"` (truncation notice).
- Use the SDK's typed errors (`Anthropic.RateLimitError`, `Anthropic.OverloadedError` → retry with backoff; `Anthropic.APIError` → error state from `17_error_state_taxonomy.md`).

## Tool Layer Rules

1. **Tools wrap the service layer, never the database.** Each tool calls the same functions the app's API routes call, with the authenticated user's session — so org isolation and the permissions matrix (`06_routes_and_permissions.md`) are enforced by construction. The model is never the permission boundary.
2. **Typed schemas.** Define tools with Zod (`betaZodTool` shape or hand-written JSON schema with `strict: true`). Enums for fixed value sets; descriptions on every property.
3. **Prescriptive descriptions.** State *when* to call each tool, not just what it does ("Call this when the user asks about revenue, payments, or amounts owed") — current models under-reach for tools without trigger conditions.
4. **Tool results are data, not instructions.** Entity content (titles, notes, comments) flows through tool results; treat any instruction-like text inside it as untrusted. The system prompt must say so explicitly.
5. **Scope per session.** Assemble the tool set per request based on the user's role — a viewer role gets no action tools at all.

## System Prompt & Context

- **Frozen core prompt** (product name, capabilities, tone, tool guidance, untrusted-data rule) with `cache_control: { type: "ephemeral" }` — byte-identical across requests so the cache hits. No timestamps, user names, or per-request data inside it.
- **Volatile context goes in messages, after the cached prefix:** current page/entity ("user is viewing Invoice #1042"), user role, org plan. Inject as a context block in the user turn.
- Multi-turn: append full `response.content` (including tool_use blocks) to history; place the incremental cache breakpoint on the last turn.

## Assistant UI Spec

- **Surface:** right-side drawer panel (`drawer-width-wide`, 480px), opened from a top-bar button and `⌘K`/`Ctrl+K`. Mobile: full-screen sheet. Inline "Ask AI" entry points on entity detail pages pre-fill context.
- **Streaming render:** text streams token-by-token; tool calls render as status chips ("Searching invoices…" → "Found 12") — visible but compact. Thinking is NOT displayed (default `display: "omitted"`); show a subtle working indicator instead.
- **Confirmation cards:** action tools render a card with a plain-language summary of the pending action, the exact field values, and Approve / Edit / Cancel. Destructive actions get the danger treatment from `12_internal_component_specs.md`.
- **All four states:** loading (working indicator), empty (3-4 product-specific suggested prompts — never generic "How can I help?"), success, error (retry, taxonomy-mapped message).
- **History:** persist conversations per user (entity: `AssistantConversation`, `AssistantMessage`); titles generated with `claude-haiku-4-5`.
- The assistant surface inherits the internal design tokens; the design direction's accent applies, but no decorative styling — this is an operational surface.

## Guardrails

- **Rate limiting:** per-user request limit on the assistant route (Upstash Ratelimit, already in the default stack).
- **Cost ceiling:** track usage per org from `response.usage` (input/output/cache tokens) into a usage table; enforce a daily/plan-based token budget; expose usage on the admin panel.
- **Loop bound:** max 10 tool iterations per turn, then return with an explanation.
- **Audit:** every executed action tool writes to the activity log (module in `04_feature_modules.md`) with actor `assistant (on behalf of {user})`, the tool name, and the input — mutations by the agent must be as auditable as mutations by the UI.
- **Org isolation:** covered by the service layer, but `gate:ai-permissions` verifies it.

## Phase Wiring

- **Phase 1 (discovery):** ask "What should the AI assistant be able to do in your product? What questions should it answer, what actions should it take?" (skip if user opts out)
- **Phase 2:** assistant scope lands in `02_feature_spec.md` as a feature with its tool list
- **Phase 3 (architecture):** derive the tool surface from the entity plan — list read tools and action tools with their service-layer mappings
- **Phase 9 (build):** build as a feature module after the product's core CRUD features exist (the tools need the service layer to wrap)

### Validation Gates (Phase 9)

**gate:ai-assistant** — module exists and the key is server-only.
```bash
ls src/app/api/assistant/route.ts src/lib/assistant 2>/dev/null
# API key must never reach the client bundle
grep -rn "NEXT_PUBLIC_ANTHROPIC\|ANTHROPIC_API_KEY" src/components src/app --include='*.tsx' | grep -v "api/" | head -5
```
**Pass:** route + lib exist; zero client-side references to the key.

**gate:ai-permissions** — tools go through the service layer.
```bash
grep -rln "prisma\.\|db\." src/lib/assistant/tools | head -5
```
**Pass:** no direct database access in tool files — tools import service functions only.

## Anti-Patterns

- Calling the Claude API from the browser (key exposure) — all calls server-side
- Auto-executing mutations without the confirmation card
- A "do anything" mega-tool — small typed tools beat one generic executor
- Letting the model decide permissions ("only return data the user can see" in the prompt) — enforcement lives in code
- Building the assistant before the service layer exists — it wraps services, so it comes after core features
- Generic empty state — suggested prompts must reference this product's real entities and actions
