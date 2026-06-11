# Phase 13 — Marketing Site

## Trigger
Email templates (Phase 12) are complete.

## Files to Read
- `docs/project/09_design_direction.md` — MANDATORY FIRST — the project's resolved visual identity
- `docs/framework/website/design_directions.md` — banned defaults and distinctiveness checks
- `docs/framework/website/signature_interactions.md` — motion identity, hero moment, craft details
- `docs/framework/website/site_composition.md` — MANDATORY — section library, page selection, blueprint process
- `docs/framework/blocks/README.md` — block library registry — blocks-first when building selected sections
- `docs/framework/website/saas_home_page_system.md` — section anatomy reference (menu, not checklist)
- `docs/framework/website/saas_website_page_system.md` — multi-page site structure
- `docs/framework/website/design_system_tokens.md` — public site visual tokens
- `docs/framework/website/public_screen_archetypes.md` — page archetypes
- `docs/framework/website/public_component_specs.md` — component visual specs
- `docs/framework/website/public_copy_conversion_rules.md` — copy and CTA rules
- `docs/framework/website/component_library_spec.md` — component inventory
- `docs/framework/website/sitemap_diagram.md` — information architecture
- `docs/framework/website/nextjs_folder_structure.md` — folder structure

## What to Build

### Step 1 — Site Blueprint (before any page code)
Generate `docs/project/site_blueprint.md` per `site_composition.md`: derive the composition inputs from project docs, select pages by condition, compose each page's section sequence with a one-line job per section, plan CTA cadence and nav. **Present the blueprint summary and get user confirmation before building.** The blueprint is a working artifact (like the pattern snapshot) — it does not count toward the 10 project docs.

### Step 2 — Build the Blueprint's Pages
- **Home**: always — the blueprint's bespoke section sequence (typically 5-9 sections, not the full 14)
- **Legal**: always (privacy, terms; cookie/security policy when relevant)
- **Login/Signup**: public auth pages (styled with marketing design system)
- All other pages (pricing, product/features, solutions, case studies, integrations, security, docs landing, blog, about, contact/demo) **only if the blueprint selected them**
- Honest proof rule applies everywhere: never fabricate testimonials, logos, stats, or case studies

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
- Built pages match `docs/project/site_blueprint.md` — no unselected pages, no skipped selected sections, nav links only to existing pages
- No fabricated proof anywhere (testimonials, logos, stats, case studies)
- All 6 distinctiveness checks from `design_directions.md` pass (squint test, banned-defaults sweep, type contrast, signature moments, layout variety, accessibility intact)
- All 4 quality-bar checks from `signature_interactions.md` pass (motion identity, one hero moment at 60fps, craft sweep, default-state sweep)
- Home page renders all blueprint sections correctly
- If pricing page selected: displays plans and links to signup/checkout
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
