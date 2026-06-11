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

Add to this table as more registry components are vetted — same adaptation rules below apply to registry installs.

### Rules for MCP-fetched components

The same rules as library blocks apply, plus:
- Fetched components land in `src/components/blocks/` (or `src/components/ui/` for primitives) — copy-owned, never referenced from a registry at runtime
- Restyle to the design direction, replace placeholder content, run the banned-defaults check — an effect being fetchable doesn't make it direction-appropriate
- Check the dependency cost before adopting (some components pull heavy libs); note extra deps in the file header like library blocks do
- A fetched component that proves broadly useful should be **promoted into this library** (file + registry row) so future projects get it without the MCP round-trip

## Adding Blocks

New blocks land as one self-contained file per block in the matching category folder, plus a registry row above. Header comment carries source attribution and adaptation notes. Only runtime-critical fixes are applied on import (SSR guards, broken imports, id types); fidelity to the source otherwise. Pending items are tracked in `BLOCKS_QUEUE.md`.
