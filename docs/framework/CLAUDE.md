# CLAUDE.md

## What This Repository Is

This is a reusable SaaS framework pack. It contains no code — only structured documentation that guides Claude Code through planning and building SaaS products. It is designed to be cloned into `docs/framework/` of any new project repository.

## How It Works

This framework uses a **phased, interactive process**. Claude does not read all files upfront or try to do everything at once. Instead, it works through phases, reads only the files needed for each phase, and pauses between phases for user input.

### For New Projects

1. Create your new project repository
2. Import the framework pack from the project root: `npx degit mosnin/modaf/docs/framework docs/framework`
3. Reference it from the project's root `CLAUDE.md`: `echo "@docs/framework/CLAUDE.md" >> CLAUDE.md`
4. Start a Claude Code session — the framework activates automatically

## Session Startup — Phase Detection

When a session starts, detect the current phase and resume from there.

**Check this in order:**

1. If `docs/project/` does not exist → start at **Phase 0**
2. If `docs/project/` exists but has fewer than 10 files → resume at **Phase 2**
3. If `docs/project/` has all 10 files but no source code exists → resume at **Phase 3**
4. If source code exists → resume at the appropriate **Build Phase (4+)** using these checks:
   - If no Prisma schema or only boilerplate → **Phase 4**
   - If schema exists but no auth routes → **Phase 5**
   - If auth exists but no onboarding flow → **Phase 6**
   - If no authenticated layout/shell → **Phase 7**
   - If shell exists but no dashboard → **Phase 8**
   - If dashboard exists but core features incomplete → **Phase 9**
   - If features exist but no settings/billing → **Phase 10**
   - If settings exist but no admin panel → **Phase 11**
   - If admin exists but no email templates → **Phase 12**
   - If emails exist but no marketing site → **Phase 13**
   - If marketing site exists but polish incomplete → **Phase 14** (polish)
   - If polish is complete but the product is not live → **Phase 15** (ship)

When resuming, read `docs/project/*` to restore app context, then read `docs/project/pattern_snapshot.md` if it exists (Phase 8+). Briefly tell the user where you're picking up and what comes next.

### Quick Reference

- **`docs/framework/MANIFEST.md`** — one-line description of every file with phase associations
- **`docs/framework/phases/`** — detailed index file for each phase (what to read, what to build, exit conditions)

Read the manifest first if you need to locate a file. Read the phase index file for your current phase to get specific instructions.

---

## Phase 0 — Welcome

**Do not read any framework files yet.**

Introduce the framework to the user:

> This project uses a SaaS framework that will guide us through planning and building your product step by step.
>
> Before I write any code, we'll go through a short discovery process to define your app, generate project documentation, and plan the architecture.
>
> What's your app idea? Describe it in as much detail as you'd like — the problem it solves, who it's for, and what the core experience looks like.

If the user has already provided an app idea in this message or a previous one, skip the question and proceed to **Phase 1**.

Wait for the user's response before continuing.

---

## Phase 1 — Discovery Interview

**Read now:** `docs/framework/templates/` (all 10 template files — scan for structure, not content)

Purpose: Understand the product well enough to generate project docs. Ask targeted questions based on gaps in the user's description. Do not ask questions the user has already answered.

Cover these areas (skip any the user already addressed):

- **Users & roles**: Who uses this? Are there multiple roles (admin, member, viewer)?
- **Core action**: What's the single most important thing a user does?
- **First value event**: What happens that makes a new user say "this is useful"?
- **Key entities**: What are the main objects in the system? (e.g., projects, invoices, tickets)
- **Dashboard shape**: When a user logs in, what do they see? A queue? Analytics? A feed?
- **Monetization**: Free? Freemium? Paid tiers? Per-seat pricing?
- **Integrations**: Does it connect to anything external? (Slack, email, APIs)
- **Brand personality**: 3 adjectives for how the product should feel? 1-2 admired sites/brands, and one look to avoid? (feeds the design direction choice — see `docs/framework/website/design_directions.md`)
- **AI assistant scope**: What should the built-in AI assistant answer and do in this product? (default-on — see `docs/framework/internal/23_ai_module.md`; skip only if the user opts out)
- **V1 scope level**: **Lean v1** (fastest path to live — Phases 4-9 + 15: auth, light onboarding, shell, dashboard, 1-2 core features; billing/admin/emails/full marketing deferred, landing page only) or **Full v1** (all 12 build phases)?
- **Non-goals for v1**: Anything explicitly out of scope?

Keep the interview conversational and concise — 2-4 questions at a time, not a wall of questions. Adapt based on answers. When you have enough to fill the project docs confidently, tell the user you're ready to move to Phase 2 and ask for confirmation.

---

## Phase 2 — Generate Project Docs

**Read now (if not already read):** `docs/framework/templates/` (all 10 template files for structure and example tone)

Create `docs/project/` and generate these 10 files populated with concrete, app-specific content:

- `00_app_idea.md`
- `01_project_brief.md`
- `02_feature_spec.md`
- `03_user_flows.md`
- `04_edge_cases.md`
- `05_tech_stack.md`
- `06_permissions_matrix.md`
- `07_acceptance_criteria.md`
- `08_qa_checklist.md`
- `09_design_direction.md`

**Rules:**
- Do not leave any file generic — every entry must be specific to this app
- Use template examples as reference for tone and depth
- For `09_design_direction.md`: read `docs/framework/website/design_directions.md`, propose one primary + one alternate direction with rationale, let the user pick, then resolve every value to concrete fonts and hexes
- After generating, present a brief summary of what was created (app name, core features, roles, entities, v1 scope, chosen design direction)
- Ask the user to review and confirm, or flag anything to adjust

Wait for user confirmation before proceeding to Phase 3.

---

## Phase 3 — Architecture Plan

**Read now:**
- `docs/framework/internal/07_data_models.md` — entity patterns
- `docs/framework/internal/06_routes_and_permissions.md` — route structure
- `docs/framework/internal/04_feature_modules.md` — available module types
- `docs/framework/internal/09_build_rules_internal.md` — build order and constraints
- `docs/project/*` — the project docs you just generated

Produce an architecture summary:
- **Entities & account model**: List with key fields and relationships; decide workspace / personal+invites / personal-only (`05_settings_billing_admin.md` § Team & Members)
- **Routes**: Full route table (public, authenticated, admin)
- **Modules**: Which optional modules apply (analytics, integrations, API, webhooks, etc.)
- **AI assistant tool surface**: read tools and action tools derived from the entities, each mapped to a service-layer function (see `docs/framework/internal/23_ai_module.md`) — or record the explicit opt-out
- **Real-time tier & connectors**: pick tier 1/2/3 with justification and list each external API connector (purpose, auth, cache TTL, webhooks) per `docs/framework/internal/24_realtime_and_data.md`
- **Build order**: The 12 build phases (4–15) with app-specific notes on what each phase includes. Apply the chosen scope level: **Lean v1** runs 4-9 then jumps to 15 (ship) — billing, admin, full email set, and the multi-page marketing site are deferred to post-launch (auth emails and a single landing page still ship); **Full v1** runs all phases in order. Either way the build ends at Phase 15 with a live URL.
- **Custom validation gates**: Read `docs/framework/internal/21_validation_gates.md`, then define app-specific gates based on entities and features. Write custom gates to `docs/project/custom_gates.md`.

Present this to the user. Ask for confirmation before starting to build.

---

## Build Phases (4–15)

Each build phase is a discrete step. At the start of each phase:
1. Announce what you're about to build
2. Read only the framework files relevant to that phase (listed below)
3. Build it
4. Summarize what was completed
5. Ask the user if they want to review, adjust, or continue to the next phase

### Phase 4 — Foundation
**Read now:** `docs/framework/internal/09_build_rules_internal.md` (Phase 1 section), `docs/framework/internal/21_validation_gates.md`
- Project setup (Next.js, TypeScript, Tailwind, Prisma)
- Database schema from entity plan
- Shared utilities, types, constants
- Sentry error tracking (default-on, env-gated DSN)
- Seed script with realistic demo data for every entity (dev/preview run seeded — views must never demo empty)
- `.mcp.json` registering the Magic UI MCP for component discovery (lookup order: block library → Magic UI MCP → scratch; see `docs/framework/blocks/README.md`)
- **Run Phase 4 validation gates before proceeding**

### Phase 5 — Auth
**Read now:** `docs/framework/internal/02_auth_and_onboarding.md` (Section A: Auth)
- Login, signup, password reset, email verification
- Auth middleware and session management
- Protected route wrappers

### Phase 6 — Onboarding
**Read now:** `docs/framework/internal/02_auth_and_onboarding.md` (Section B: Onboarding)
- Multi-step onboarding flow — full-screen, animated step transitions, welcome beat, visual card answers (see Section B's Design Quality Bar)
- First value event
- Workspace/org setup if applicable
- Celebratory finish handing off to the post-login preloader → dashboard

### Phase 7 — App Shell
**Read now:**
- `docs/framework/internal/01_app_shell.md`
- `docs/framework/internal/08_ui_system_internal.md` (component behavior — foundational for all authenticated UI)
- `docs/framework/internal/10_design_tokens_internal.md`
- `docs/framework/internal/12_internal_component_specs.md` (component visual specs)
- `docs/framework/internal/15_canonical_breakpoints.md`
- `docs/framework/internal/22_pattern_snapshot.md` (for snapshot generation)
- Top bar, page header, user menu
- Floating sidebar that collapses into an animated icon dock (Apple-Dock hover magnification, expand button, persisted state)
- Mobile: bottom tab bar with 3-5 product-tailored tabs + full-screen nav sheet
- Post-login preloader: logo-mark animation, once per login, crossfades into the dashboard
- Responsive layout, dark mode tokens
- Navigation structure from route plan
- **Generate pattern snapshot** at `docs/project/pattern_snapshot.md` before proceeding

### Phase 8 — Dashboard
**Read now:**
- `docs/project/pattern_snapshot.md` (MANDATORY — read before writing any code)
- `docs/framework/internal/03_dashboard_system.md`
- `docs/framework/internal/16_dashboard_archetypes.md`
- `docs/framework/internal/13_internal_data_display_rules.md`
- Bento grid layout (default): mixed-size cells, archetype's main work surface in the dominant cell, 6-9 cells
- Summary metric cells, main work surface, activity feed cell
- Select and implement the appropriate dashboard archetype (rendered as bento cells)
- Animation choreography: staggered cell entrance from the preloader crossfade, stat count-ups, chart draw-ins, hover lift
- **Update pattern snapshot** with dashboard conventions after building

### Phase 9 — Core Features
**Read now:**
- `docs/project/pattern_snapshot.md` (MANDATORY — read before writing any code)
- `docs/framework/internal/08_ui_system_internal.md`
- `docs/framework/internal/11_internal_screen_archetypes.md`
- `docs/framework/internal/12_internal_component_specs.md`
- `docs/framework/internal/17_error_state_taxonomy.md`
- `docs/framework/internal/23_ai_module.md` (default-on AI assistant — build after core features)
- Product-specific feature modules from project docs
- CRUD views, detail pages, forms, filters
- All four states: loading, empty, success, error
- AI assistant module: streaming route + permission-enforced tools over the product's entities + confirmation-gated actions (unless user opted out)
- **Update pattern snapshot** with feature module template after first feature is built

### Phase 10 — Settings & Billing
**Read now:** `docs/framework/internal/05_settings_billing_admin.md`
- Profile, workspace, team settings
- Stripe integration (Checkout + Customer Portal)
- Plan management, invoices

### Phase 11 — Admin
**Read now:** `docs/framework/internal/05_settings_billing_admin.md` (admin sections)
- Admin dashboard, user management
- Billing overview, system logs
- Admin-only routes and permissions

### Phase 12 — Email Templates
**Read now:** `docs/framework/internal/14_email_system.md`
- Auth emails (verification, password reset, invite)
- Billing emails (receipt, subscription change)
- Onboarding emails (welcome, activation nudge)
- Product notification emails

### Phase 13 — Marketing Site
**Read now:**
- `docs/project/09_design_direction.md` (MANDATORY FIRST — the project's resolved visual identity; overrides personality values in the public tokens)
- `docs/framework/website/design_directions.md` (banned defaults + distinctiveness checks)
- `docs/framework/website/signature_interactions.md` (motion identity, hero moment, craft details)
- `docs/framework/website/site_composition.md` (MANDATORY — section library, page selection conditions, blueprint process)
- `docs/framework/blocks/README.md` (block library — blocks-first; if no block matches, search the Magic UI MCP before building from scratch)
- `docs/framework/website/saas_home_page_system.md` (section anatomy reference — menu, not checklist)
- `docs/framework/website/saas_website_page_system.md`
- `docs/framework/website/design_system_tokens.md`
- `docs/framework/website/public_screen_archetypes.md`
- `docs/framework/website/public_component_specs.md`
- `docs/framework/website/public_copy_conversion_rules.md`
- `docs/framework/website/component_library_spec.md`
- `docs/framework/website/sitemap_diagram.md`
- `docs/framework/website/nextjs_folder_structure.md`
- **First**: generate `docs/project/site_blueprint.md` (bespoke page list + per-page section sequences per `site_composition.md`) and confirm it with the user before writing page code
- Then build only the blueprint's pages — home and legal always; everything else by the blueprint's selection. Never fabricate proof (testimonials, logos, stats)

### Phase 14 — Edge Cases & Polish
**Read now:**
- `docs/framework/internal/17_error_state_taxonomy.md`
- `docs/framework/internal/18_testing_strategy.md`
- `docs/framework/internal/19_i18n_posture.md`
- `docs/project/04_edge_cases.md`
- `docs/project/07_acceptance_criteria.md`
- `docs/project/08_qa_checklist.md`
- Error states, edge case handling, QA checklist pass
- Accessibility review, responsive testing
- Dark mode polish, loading states audit

### Phase 15 — Ship
**Read now:** `docs/framework/phases/phase_15_ship.md`
- Deploy to Vercel: production env vars, migrations, domain
- Production wiring: Stripe live keys + webhook, auth URLs, Sentry DSN, email domain
- Launch surface: OG/meta, sitemap, robots, favicon, Lighthouse ≥ 90
- Live smoke test: signup → onboarding → first value → dashboard, one CRUD round-trip, assistant answers
- **The phase ends by delivering the live URL** — the build is not done until it is

---

## Source of Truth Hierarchy

When docs conflict, follow this priority:

1. `docs/project/*` (app-specific, highest priority)
2. `docs/framework/internal/*`
3. `docs/framework/website/*`
4. `docs/framework/templates/*` (lowest priority)

## Default Tech Stack

Unless the user specifies otherwise, assume:

- **Frontend**: Next.js (app router) with TypeScript and Tailwind CSS
- **UI Components**: shadcn/ui (Radix primitives, copy-paste ownership) with Huge Icons (@hugeicons/react + style packages — stroke for low emphasis, solid for active/high emphasis, duotone/bulk for empty states and decorative)
- **Styling Utilities**: tailwind-merge, class-variance-authority (CVA) for component variants
- **Animation**: Motion (framer-motion) for page transitions, toasts, drawers
- **Forms**: react-hook-form + zod for validation (shared schemas between client and API)
- **State**: Tanstack Query for server state, nuqs for URL state, React Context for auth/theme, server components where possible
- **Auth**: Auth.js (NextAuth v5) with email/password, optional social OAuth and magic links
- **Database**: PostgreSQL with Prisma ORM
- **Billing**: Stripe (Checkout + Customer Portal), stripe-event-types for typed webhooks
- **Email**: Resend for delivery, React Email for JSX templates
- **AI**: Anthropic Claude API via `@anthropic-ai/sdk` (server-side only) — `claude-opus-4-8` for the default-on assistant module, `claude-haiku-4-5` for lightweight tasks; adaptive thinking + streaming (see `internal/23_ai_module.md`)
- **Hosting**: Vercel
- **Dark Mode**: next-themes for toggle and system preference detection
- **Env Validation**: T3 Env for type-safe environment variables with runtime checks
- **Toasts**: Sonner (shadcn default toast component)
- **Charts**: Recharts (wrapped via shadcn chart component) — when dashboard requires charts
- **Tables**: Tanstack Table — when complex sorting/filtering/virtual scroll is needed
- **Testing**: Vitest (unit/integration), Playwright (E2E), MSW (API mocking), Faker (test data)
- **Background Jobs**: Trigger.dev or Inngest — when webhook processing, email sequences, or async work is needed
- **Rate Limiting**: Upstash Ratelimit — when auth rate limiting or API throttling is needed
- **Error Tracking**: Sentry (`@sentry/nextjs`) — default-on, wired in Phase 4 with env-gated DSN
- **Real-Time**: TanStack Query live polling (tier 1 default); SSE route handlers for server push (tier 2); Pusher or Ably for presence/collaboration (tier 3) — see `internal/24_realtime_and_data.md`
- **File Uploads**: uploadthing + react-dropzone — when file upload features are needed
- **Server Actions**: next-safe-action for type-safe server actions with built-in validation
- **Serialization**: superjson for Date/BigInt across server→client boundary
- **Date Formatting**: date-fns for relative time, ranges, and formatting beyond Intl API

## Global Build Rules

These apply to every build phase:

- Do not start coding until project docs are generated and confirmed (Phases 0–2 complete)
- Build only v1 scope unless explicitly asked otherwise
- Reuse shared patterns from the framework before creating new ones
- Every page must be mobile responsive from the start
- Every data-driven view must handle four states: loading, empty, success, error
- Permissions must be enforced at both the routing layer and the UI layer
- Do not add features outside the defined v1 scope
- Do not modify files in `docs/framework/` — those are reusable defaults
- English-first for v1
- **Run validation gates** (`docs/framework/internal/21_validation_gates.md`) after every build phase — all gates must pass before proceeding
- **Read the pattern snapshot** (`docs/project/pattern_snapshot.md`) before writing code in Phase 8+ — follow established conventions exactly
- **All sub-agents** must read the pattern snapshot before building (see `docs/framework/internal/22_pattern_snapshot.md`)

## Repository Structure

```
docs/
  framework/
    website/
      saas_home_page_system.md        # Home page conversion funnel
      saas_website_page_system.md      # Multi-page site structure
      design_system_tokens.md          # Public site visual tokens (light + dark mode)
      design_directions.md             # 8 visual identity directions, banned defaults, distinctiveness checks
      site_composition.md              # Bespoke page assembly — section library, page selection, site blueprint
      signature_interactions.md        # Motion identity per direction, hero moment, craft details
      component_library_spec.md        # Component inventory and rules
      public_screen_archetypes.md      # Canonical page patterns for public pages
      public_component_specs.md        # Visual specs for website components
      public_copy_conversion_rules.md  # Copy, CTA, and conversion rules
      nextjs_folder_structure.md       # Recommended folder structure
      sitemap_diagram.md               # Information architecture
    internal/
      01_app_shell.md                  # Authenticated app frame
      02_auth_and_onboarding.md        # Auth flows and activation
      03_dashboard_system.md           # Dashboard framework
      04_feature_modules.md            # Optional module specs
      05_settings_billing_admin.md     # Settings, billing, admin
      06_routes_and_permissions.md     # Route system and roles
      07_data_models.md                # Core entity definitions
      08_ui_system_internal.md         # Component behavior system
      09_build_rules_internal.md       # Build order and constraints
      10_design_tokens_internal.md     # Internal visual tokens
      11_internal_screen_archetypes.md # Canonical page patterns
      12_internal_component_specs.md   # Component visual specs
      13_internal_data_display_rules.md # Data presentation rules
      14_email_system.md               # Email templates and rules
      15_canonical_breakpoints.md      # Unified responsive breakpoints
      16_dashboard_archetypes.md       # Concrete dashboard patterns
      17_error_state_taxonomy.md       # Error handling patterns
      18_testing_strategy.md           # Testing expectations
      19_i18n_posture.md               # Internationalization stance
      20_subagent_dispatch.md          # Sub-agent recipes for parallel phases
      21_validation_gates.md           # 54 machine-checkable structural assertions per phase
      22_pattern_snapshot.md           # Pattern capture system — prevents drift across phases
      23_ai_module.md                  # Default-on AI assistant — tools, permissions, approval UX, guardrails
      24_realtime_and_data.md          # Real-time tiers (polling/SSE/websockets) + external API connector pattern
    blocks/                            # Block library — copy-paste React blocks (see blocks/README.md); blocks-first when building sections
    templates/                         # Blank templates with examples for project docs
    prompts/                           # Kickoff sequence and master execution prompt
    phases/                            # Phase-specific index files (what to read, build, verify per phase)
    MANIFEST.md                        # Quick reference — every file with one-line description and phase
  project/                             # Generated app-specific docs (created during Phase 2)
```

## Important Conventions

- File numbering indicates read/build order within each directory
- Template files contain example entries — use them as reference for tone and depth
- Framework philosophy: website docs govern acquisition, internal docs govern the product, templates define document shape, prompts define execution sequence
- Internal and website use separate design tokens (different visual density) but share the same breakpoint scale and primary color
- This repo should remain static and reusable — never commit app-specific content here
