# Phase 4 — Foundation

## Trigger
Architecture plan confirmed. No source code exists yet.

## Files to Read
- `docs/framework/internal/09_build_rules_internal.md` — Phase 4 (Foundation) section
- `docs/framework/internal/21_validation_gates.md` — validation gate system and Phase 4 gates

## What to Build

### Project Setup
- Initialize Next.js with app router, TypeScript, Tailwind CSS
- Configure Prisma with PostgreSQL
- Set up project structure per architecture plan

### Database Schema
- Create Prisma schema from entity plan
- Include all canonical entities (User, Organization, Membership, Subscription, etc.)
- Add app-specific entities
- Set up relationships and indexes

### Shared Infrastructure
- Types and interfaces
- Constants and configuration
- Utility functions
- API route helpers
- Error handling utilities

### Component Discovery (Magic UI MCP, default-on)
- Write `.mcp.json` at the project root registering the Magic UI MCP (see `docs/framework/blocks/README.md` § Discovery Beyond the Library):
  `{ "mcpServers": { "magicui": { "command": "npx", "args": ["-y", "@magicuidesign/mcp@latest"] } } }`
- This enables the component lookup order for all later phases: block library → Magic UI MCP → scratch

### Error Tracking (Sentry, default-on)
- Install and configure `@sentry/nextjs` (instrumentation files, client/server/edge configs, source maps upload in CI when available)
- `SENTRY_DSN` in env validation as optional — boots cleanly without it in dev, reports in production
- Wire the error taxonomy (`17_error_state_taxonomy.md`): error boundaries and API error helpers report to Sentry with structured context (org, route, error type) — never PII or secrets

### Seed Data (default)
- Build `prisma/seed.ts` with **realistic demo data for every entity** — believable names, dates spread over the last 90 days, varied statuses, enough volume that lists paginate and charts have shape (not 2 rows)
- Seed at least: 1 org, 3-5 members across roles, 20-50 of the primary entity, activity history, and whatever the dashboard's metrics need to show non-zero trends
- Wire `prisma db seed`; dev and preview environments run seeded by default — the bento dashboard's entrance animation must land on real-looking data, never an empty grid
- Production never seeds unless the user explicitly asks (Phase 15)

### Verify
- Project builds without errors
- Database migrates successfully
- Seed runs and the data reads as believable
- Dev server starts cleanly

### Run Validation Gates
Run all Phase 4 gates from `docs/framework/internal/21_validation_gates.md`:
- `gate:foundation-builds` — TypeScript compiles
- `gate:foundation-schema` — Prisma validates
- `gate:foundation-entities` — All architecture entities in schema
- `gate:foundation-env` — Env template exists
- `gate:foundation-structure` — Expected directories exist
- `gate:foundation-sentry` — Sentry wired in with env-gated DSN

All gates must pass before proceeding.

## Exit Condition
Foundation is running. All Phase 4 gates pass. Summarize what was set up and ask user to continue to **Phase 5**.
