# Phase 13 — Marketing Site

## Trigger
Email templates (Phase 12) are complete.

## Files to Read
- `docs/project/09_design_direction.md` — MANDATORY FIRST — the project's resolved visual identity
- `docs/framework/website/design_directions.md` — banned defaults and distinctiveness checks
- `docs/framework/website/saas_home_page_system.md` — home page structure
- `docs/framework/website/saas_website_page_system.md` — multi-page site structure
- `docs/framework/website/design_system_tokens.md` — public site visual tokens
- `docs/framework/website/public_screen_archetypes.md` — page archetypes
- `docs/framework/website/public_component_specs.md` — component visual specs
- `docs/framework/website/public_copy_conversion_rules.md` — copy and CTA rules
- `docs/framework/website/component_library_spec.md` — component inventory
- `docs/framework/website/sitemap_diagram.md` — information architecture
- `docs/framework/website/nextjs_folder_structure.md` — folder structure

## What to Build

### Core Pages (minimum v1)
- **Home**: 14-section conversion funnel (hero, social proof, features, pricing, CTA)
- **Pricing**: plan comparison, FAQ, CTA
- **Login/Signup**: public auth pages (styled with marketing design system)

### Additional Pages (if in v1 scope)
- Features, About, Contact, Legal (privacy, terms)
- Blog index and post template
- Case studies, integrations, security

### Design System
- Use PUBLIC design tokens (different from internal product tokens)
- Apply the chosen direction from `docs/project/09_design_direction.md` — it overrides personality values (type, color, radius, shadow, backgrounds, motion character); base tokens keep structure (spacing, breakpoints, accessibility)
- Never ship the base token defaults unmodified, and never use the banned defaults from `design_directions.md`
- Marketing-grade typography, spacing, and color
- Conversion-focused CTAs and copy patterns

### Key Rules
- Every page follows its archetype from `public_screen_archetypes.md`
- Copy follows rules from `public_copy_conversion_rules.md`
- Components follow specs from `public_component_specs.md`
- Mobile responsive from the start

### Verify
- All 6 distinctiveness checks from `design_directions.md` pass (squint test, banned-defaults sweep, type contrast, signature moments, layout variety, accessibility intact)
- Home page renders all sections correctly
- Pricing page displays plans and links to signup/checkout
- All pages responsive at all breakpoints
- CTAs link to correct destinations
- Page load performance is acceptable

### Run Validation Gates
Run all Phase 13 gates from `docs/framework/internal/21_validation_gates.md`:
- `gate:marketing-pages` — Core public pages exist
- `gate:marketing-responsive` — Responsive utility classes present
- `gate:marketing-cta` — CTAs link to auth routes
- `gate:marketing-separate-tokens` — No internal component imports in public pages

Plus regression: re-run all Phase 4–12 gates.

## Exit Condition
Marketing site is live-ready. All gates pass. Summarize and ask user to continue to **Phase 14**.
