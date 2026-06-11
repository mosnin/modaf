# Block Library

> **TL;DR:** Pre-built, copy-paste React blocks (shadcn structure, Tailwind, TypeScript) that ship with the framework import. **Always check here first** — when a block matches a section or surface being built, adapt the block instead of building from scratch. Pending imports live in `BLOCKS_QUEUE.md`.
> **Covers:** block registry, usage rules, adaptation requirements, how blocks are added | **Used by:** phase_08, phase_09, phase_13 | **Phase:** 8, 9, 13

## Purpose

Hand-built sections drift in quality; these blocks start from proven, polished compositions. They arrive in every project via the framework import (`docs/framework/blocks/`) and get copied into the project's `src/components/blocks/` when used, then adapted.

**The default rule: before building any marketing section, auth page, pricing page, AI surface, or matching internal component, scan the registry below. If a block fits the blueprint's section type, start from it.** Building from scratch is the fallback, not the default.

## Registry

### Marketing sections — features & content

| Block | File | Use for |
|---|---|---|
| Feature split with media | `features/feature-split-media.tsx` | Headline + icon checklist beside a large product screenshot |
| Feature overview banner | `features/feature-overview-banner.tsx` | Headline pair over full-width visual + 4-up mini grid (breadth story) |
| Feature cards, illustrated | `features/feature-cards-illustrated.tsx` | Features paired with rich in-card product illustrations (AI chat, meeting, review) |
| Feature AI spotlight | `features/feature-ai-spotlight.tsx` | Image-backed hero card with floating assistant illustration + 3-up text grid |
| Grid-pattern feature cards | `features/feature-grid-pattern-cards.tsx` | Dashed icon grid with generative pattern backgrounds and blur-in reveal (motion) |
| Feature showcase cards | `features/feature-showcase-cards.tsx` | Corner-tick decorated cards with dual-mode screenshots + statement card |
| Feature showcase with table | `features/feature-showcase-table.tsx` | Headline over a live data table + 2-up features + pull quote (needs `tables/customers-table-card`) |
| Content editor split | `features/content-editor-split.tsx` | Divided rows pairing live-UI illustrations (toolbar, mono list) with copy |
| Content split with quote | `features/content-split-quote.tsx` | Image + prose + inset customer blockquote |
| Feature rotating gradient | `features/feature-rotating-gradient.tsx` | Conic-glow spinning behind a floating status card (check banned defaults; retheme) |
| Feature accordion with images | `features/feature-accordion-images.tsx` | Compact accordion expanding to large product screenshots |

### Marketing sections — heroes, stats, testimonials, FAQ, pricing, integrations

| Block | File | Use for |
|---|---|---|
| Hero screenshot + trust | `heroes/hero-screenshot-trust.tsx` | Centered headline/CTAs, framed screenshot, logo strip (real logos only) |
| Hero animated screenshot | `heroes/hero-animated-screenshot.tsx` | Blur-in entrance, scroll-aware header, framed screenshot, hover-reveal logo grid (AnimatedGroup inlined) |
| Stats sections (2 variants) | `stats/stats-sections.tsx` | `StatsTrio` centered band / `StatsSplitQuote` gradient numerals + quote (real numbers only) |
| Testimonials (2 variants) | `testimonials/testimonials-sections.tsx` | `TestimonialsGrid` 4-card bento / `TestimonialSpotlight` single statement (real quotes only) |
| FAQ accordion | `faq/faq-accordion.tsx` | Carded accordion FAQ with support link |
| FAQ two-column | `faq/faq-two-column.tsx` | Editorial dashed-divided FAQ (good for accordion-averse directions) |
| Pricing cards | `pricing/pricing-cards.tsx` | Glassy plan-card primitives + 3-plan composition (wire CTAs to Stripe) |
| Integrations grid | `integrations/integrations-grid.tsx` | 6-up logo cards with Learn More CTAs |
| Integrations slider | `integrations/integrations-slider.tsx` | Counter-scrolling logo rows around the product mark (extra dep: react-use-measure) |
| Integrations panel + quote | `integrations/integrations-panel-quote.tsx` | Copy + featured-integration quote beside a masked mini-grid panel |

### App surfaces — auth & AI (pairs with internal/23_ai_module.md)

| Block | File | Use for |
|---|---|---|
| Auth page | `auth/auth-page.tsx` | Split auth layout: animated floating-paths brand panel, social + email-first sign-in |
| Shining text | `ai/shining-text.tsx` | "Assistant is thinking…" shimmer status text |
| AI voice input | `ai/ai-voice-input.tsx` | Mic button with timer + visualizer bars (UI only) |
| AI image generation reveal | `ai/ai-image-generation.tsx` | Shimmer status + progressive blur-unveil over generated images |
| Glowing prompt input | `ai/prompt-input-glow.tsx` | Sticky expanding pill input with glow/ripple effects + mode tags (see header caveats) |
| Pulse voice recorder | `ai/pulse-voice-recorder.tsx` | Record button with ping rings + duration timer (UI only; wire to MediaRecorder) |
| Floating dock nav | `navigation/floating-dock-nav.tsx` | macOS-style dock with distance-falloff magnification — reference implementation of the shell's collapsed dock (01_app_shell.md) |

### Backgrounds & utility (decorative backgrounds: direction-sanctioned hero moments ONLY)

| Block | File | Use for |
|---|---|---|
| Wave path | `backgrounds/wave-path.tsx` | Cursor-elastic hairline divider (Editorial/Organic accent) |
| Falling pattern | `backgrounds/falling-pattern.tsx` | CSS rain-streak backdrop behind a dot mask |
| Gradient dots | `backgrounds/gradient-dots.tsx` | Hue-cycling gradient dot field (pin to direction palette when adapting) |
| Dotted surface | `backgrounds/dotted-surface.tsx` | three.js particle wave — banned-list item; only as an explicit direction signature; lazy-load, extra dep: three |
| Customers table card | `tables/customers-table-card.tsx` | Polished table-in-card: dashboard bento cell, list preview, marketing visual |
| Copy button | `ui/copy-button.tsx` | Icon-morph copy confirmation (per micro-interaction catalog) |
| Spinner | `ui/spinner.tsx` | Five-bar token-aware loader |
| Lazy image | `ui/lazy-image.tsx` | Skeletoned aspect-ratio image with in-view loading (needs shadcn aspect-ratio) |
| Menu toggle | `ui/menu-toggle.tsx` | Hamburger ↔ arrow stroke morph for the mobile nav sheet |
| Dynamic toolbar | `ui/toolbar-dynamic.tsx` | Icon toolbar that springs open into an inline search input — contextual search over a work surface |

## Usage Rules

1. **Copy, don't import in place.** Copy the block into `src/components/blocks/`, then adapt. `docs/framework/*` is never imported at runtime and never modified.
2. **Blocks are skeletons, not final art.** They use shadcn semantic tokens (`bg-background`, `text-muted-foreground`, `border-border`) so they pick up the project theme automatically — but the chosen design direction (`docs/project/09_design_direction.md`) still applies on top: radius posture, borders/shadows, type, motion. Restyle every block to the direction; never ship one that visibly belongs to a different aesthetic.
3. **Replace ALL placeholder content.** Demo copy, stock avatars/images, fake stats/quotes/logos must be replaced with this product's real content — placeholders are marked with `PLACEHOLDER` / "Replace" in each file. The honest-proof rule (`site_composition.md`) applies; placeholder proof in production is a build failure.
4. **Keep the structure, change the skin.** The value is the composition and responsive behavior — preserve those; adapt colors, type, spacing personality, and content.
5. **Banned-defaults check still applies.** Some blocks carry effects on the banned list (glassmorphism, particle fields, full-spectrum gradients) — their headers say so. Use them only when the design direction explicitly sanctions the effect as a signature; retheme to the direction's palette.
6. **Dependencies:** blocks assume the standard stack (shadcn/ui primitives in `src/components/ui/`, `cn` in `src/lib/utils`, `lucide-react`, `motion`, Radix). Extra deps are named in each block's header (e.g. `react-use-measure`, `three`). Install missing shadcn primitives via the shadcn CLI.
7. **Section entrances** follow the site's scroll-reveal vocabulary (`signature_interactions.md`) — wrap blocks in the project's reveal component unless the block carries its own (noted in header); never double-wrap.

## Discovery Beyond the Library — Magic UI MCP

The static library can't hold everything. Every generated project also registers the **Magic UI MCP server**, which lets the agent search and fetch Magic UI components (animated effects, text effects, buttons, backgrounds, device mocks, and more) on demand.

**Component lookup order (always):**
1. **Block library** (this folder) — proven, pre-adapted compositions
2. **Magic UI MCP** — search it when no block matches the needed component/effect
3. **Build from scratch** — last resort

### Setup (done in Phase 4)

Register the MCP project-scoped so every session in the project gets it — write `.mcp.json` at the project root:

```json
{
  "mcpServers": {
    "magicui": {
      "command": "npx",
      "args": ["-y", "@magicuidesign/mcp@latest"]
    }
  }
}
```

Equivalent one-liner (installs into Claude Code for the current user instead):

```bash
pnpm dlx @magicuidesign/cli@latest install claude
```

### Curated Magic UI registry components

These are vetted Magic UI components installable directly from the shadcn registry — no source copying needed. Install on demand with:

```bash
pnpm dlx shadcn@latest add @magicui/<component>
```

| Component | Install | Use for |
|---|---|---|
| Hero video dialog | `pnpm dlx shadcn@latest add @magicui/hero-video-dialog` | Hero demo-video lightbox — a strong "live product theater" hero moment (`site_composition.md`); thumbnail must be a real product frame |
| Animated list | `pnpm dlx shadcn@latest add @magicui/animated-list` | Auto-animating notification/activity list — feature illustrations and live dashboard feed cells (pairs with the live UI rules in `24_realtime_and_data.md`) |
| Avatar circles | `pnpm dlx shadcn@latest add @magicui/avatar-circles` | Overlapping avatar stack with +N count — social proof microcopy under hero CTAs (real users only) and presence stacks (tier 3 realtime) |
| Text reveal | `pnpm dlx shadcn@latest add @magicui/text-reveal` | Scroll-driven word-by-word text reveal — statement sections between content; counts as the page's one scroll-choreography moment (`signature_interactions.md`), best for Editorial/Luxury directions |
| Dia text reveal | `pnpm dlx shadcn@latest add @magicui/dia-text-reveal` | Alternate text-reveal treatment — same usage rules as text-reveal above: one scroll-choreography moment per page, pick ONE reveal style per site (never mix both) |

Add to this table as more registry components are vetted — same adaptation rules below apply to registry installs.

### Curated Motion Primitives registry components

[Motion Primitives](https://motion-primitives.com) is a second copy-in registry (Motion/framer-motion based, code lands in the project like shadcn). Install on demand with:

```bash
npx motion-primitives@latest add <component>
```

| Component | Install | Use for |
|---|---|---|
| Border trail | `npx motion-primitives@latest add border-trail` | Animated light tracing a container's border — signals "live/working" on exactly ONE element (active AI-assistant card, processing state, or the highlighted pricing tier). Counts against the restraint budget (`signature_interactions.md`); on every card it reads as the vibecoded glow the banned-defaults list exists to kill. Retheme the trail to the direction's accent. |

Same adaptation rules as Magic UI registry installs: retheme to the design direction, replace placeholder content, run the banned-defaults check.

### Vetted external library components

For complex primitives the block library and shadcn don't cover well, these packaged libraries are vetted — **scoped to the listed use only**, never adopted as a second design system.

#### HeroUI (vetted suite)

Install: `pnpm add @heroui/react framer-motion` (or slimmer individual packages, e.g. `@heroui/date-picker @heroui/calendar`). All imports below come from `@heroui/react`.

**What earns HeroUI a place in a project** — components shadcn has no real answer to:

| Component(s) | Use for |
|---|---|
| `DatePicker`, `DateField`, `Calendar` (+ `Label`) | Date inputs — booking forms, scheduling, date-range filters. The strongest accessible date stack available off the shelf. |
| `TimeField` | Time-of-day input with segment-based keyboard editing — pairs with `DateField` for appointment/scheduling forms |
| `TagGroup` | Selectable/removable tag collections — filter chips, label pickers, recipient lists |
| `ListBox` | Accessible single/multi-select option lists with full keyboard navigation — assignment pickers, visible-option settings where a collapsed Select hides too much |
| `Toolbar` | Accessible grouped-action toolbars with arrow-key navigation — editor headers, bulk-action bars |

**Once HeroUI is already in the project**, these are also vetted — prefer them over mixing in shadcn equivalents on the same surface, so each form or panel reads as one system. In projects *without* HeroUI, use the shadcn/block-library version and don't pull the dependency for these alone:

| Component(s) | Use for |
|---|---|
| `Breadcrumbs` | Page-header breadcrumbs with overflow collapsing |
| `Switch`, `SwitchGroup` (+ `Label`) | Boolean toggles and grouped toggle lists — settings panels, notification preferences |
| `RadioGroup`, `Radio` | Mutually exclusive choice sets — plan selection, visibility options |
| `Tabs` | In-page tabbed sections |
| `Table` | Sortable, selectable data tables — for heavy data grids the framework's TanStack-based table blocks remain the default |
| `TextField` | Single-line text inputs with built-in label/description/error wiring |
| `TextArea` | Multiline input with the same field wiring |
| `ErrorMessage` | Validation error text wired to HeroUI fields — use alongside `TextField`/`DateField` etc. so errors announce correctly |
| `ComboBox` | Autocomplete/typeahead selects with field wiring — overlaps shadcn's Command+Popover combobox pattern; prefer HeroUI's when its fields are already in the form |
| `Accordion` | Expandable disclosure sections — FAQ panels, settings groups; overlaps shadcn `Accordion` |
| `Dropdown` | Action menus on a trigger — row actions, account menus; overlaps shadcn `DropdownMenu` |
| `Popover` | Anchored floating panels — filter popovers, inline pickers |
| `Tooltip` | Hover/focus tooltips |
| `Toast` + `toast()` | Transient notifications — an app gets exactly ONE toast system; if sonner is already wired, keep sonner |
| `ToggleButtonGroup`, `ToggleButton` | Segmented controls — view switchers, density toggles, single/multi-select option rows |
| `Surface` | Elevated container surfaces — overlaps shadcn `Card`; pick one container language per app |
| `Drawer` | Edge-anchored slide-over panels — detail views, mobile filters; overlaps shadcn `Sheet`/vaul (trigger buttons stay shadcn) |
| `Meter` (+ `Label`) | Value-within-range gauges with proper meter semantics — storage quota, usage limits, capacity; not for task progress |
| `Kbd` | Keyboard-shortcut hints in menus, tooltips, and command palettes |

HeroUI integration requirements:
- Wrap the app (or just the subtree that uses it) in `HeroUIProvider`, and add HeroUI's `heroui()` plugin to the Tailwind config per its docs
- **Scope discipline:** HeroUI earns its place via the first table; the second table only prevents system-mixing once it's there. Buttons, cards, dialogs etc. stay shadcn/block-library so the product has ONE design language
- **One source per primitive, app-wide:** never two toast systems, two tooltip styles, or a shadcn switch next to a HeroUI switch — pick a source per primitive and hold the line
- Retheme via HeroUI's theme tokens to match `docs/project/09_design_direction.md` (radius posture, accent, focus rings) — an unthemed HeroUI component visibly belongs to a different system
- Weigh the bundle cost: prefer individual packages over the full `@heroui/react` when only a few components are needed

### Rules for MCP-fetched components

The same rules as library blocks apply, plus:
- Fetched components land in `src/components/blocks/` (or `src/components/ui/` for primitives) — copy-owned, never referenced from a registry at runtime
- Restyle to the design direction, replace placeholder content, run the banned-defaults check — an effect being fetchable doesn't make it direction-appropriate
- Check the dependency cost before adopting (some components pull heavy libs); note extra deps in the file header like library blocks do
- A fetched component that proves broadly useful should be **promoted into this library** (file + registry row) so future projects get it without the MCP round-trip

## Adding Blocks

New blocks land as one self-contained file per block in the matching category folder, plus a registry row above. Header comment carries source attribution and adaptation notes. Only runtime-critical fixes are applied on import (SSR guards, broken imports, id types); fidelity to the source otherwise. Pending items are tracked in `BLOCKS_QUEUE.md`.
