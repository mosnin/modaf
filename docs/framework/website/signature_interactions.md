# Signature Interactions & Craft Details

> **TL;DR:** The layer above the design directions: a per-direction motion vocabulary, one earned "hero moment" per site, scroll choreography rules, a micro-interaction catalog, and the small craft details (selection color, scrollbar, focus rings, 404, loading) that make a site feel hand-built instead of generated.
> **Covers:** motion identity per direction, hero moment, scroll choreography, micro-interactions, craft details checklist, restraint budget | **Depends on:** design_directions.md, design_system_tokens.md | **Used by:** phase_13_marketing, 09_design_direction template | **Phase:** 13

## Purpose

`design_directions.md` fixes the static identity (type, color, surfaces). This file fixes the **kinetic identity** — how the site moves and responds. Generic AI sites fail here twice: either no interaction design at all (static shadcn), or the same recycled set (fade-up-on-scroll everywhere, count-up stats, typewriter hero). Both read as template. Motion must come from the same personality as the visuals.

**The rule: motion is part of the design direction, not a garnish.** Every project's `docs/project/09_design_direction.md` must include a Motion Identity section resolved from this file.

## The Restraint Budget

More effects ≠ next level. The craft is concentration:

- **One hero moment** per site (see below) — not five
- **One scroll choreography pattern** per page maximum
- **Micro-interactions everywhere** — these are cheap, constant, and where "expensive feel" actually lives
- Everything else: the direction's base entrance/hover vocabulary, applied consistently
- Never two attention-seeking animations visible at the same time; respect `prefers-reduced-motion` everywhere

## Motion Identity Per Direction

Each direction has a motion vocabulary. Mixing vocabularies (springy bounces on a Soft Luxury site) breaks the spell faster than a wrong color.

| Direction | Easing & speed | Entrances | Hover language | Signature kinetic move |
|---|---|---|---|---|
| **Editorial** | Slow ease-out, 400-600ms | Fade + small rise; headlines reveal line-by-line behind a mask | Underline draws in; image desaturates → color | Text mask reveals on scroll, like a page printing |
| **Neo-Brutalist** | Snappy, 100-150ms, no easing curves — steps allowed | Elements snap in with 1-frame offset stagger | Translate -2px/-2px, hard shadow grows; sticker rotates ±3° | Marquee strips that reverse direction on scroll direction change |
| **Terminal** | Instant or stepped (8-12 fps deliberate chop) | Lines type/print in, block cursor; sections boot like log output | Invert colors on the hovered row | Live-updating fake feed (build logs, status ticks) in the hero |
| **Soft Luxury** | Long ease-in-out, 500-800ms | Crossfade + scale 0.98→1; never slides | Image zooms 1.03 over 700ms; gold underline fades in | Slow tonal gradient drift in hero; chapter-break statements fade through black |
| **Swiss** | Almost none; instant state changes | One decisive load reveal: grid lines draw, then content appears at once | Color swap only — no movement | Massive headline letters clip/reposition as the grid snaps in |
| **Playful Geometric** | Spring physics (the only direction allowed) | Shapes bounce/settle; cards pop with overshoot | Wobble, squash-and-stretch ≤1.05 | Draggable hero shapes with physics; squiggle draws itself |
| **Organic** | Gentle, 300-400ms, sine easing | Soft fade + 8px rise; nothing snaps | Arch image frames bloom slightly; squiggle underline draws | Hand-drawn annotations sketch themselves in as you scroll |
| **Blueprint** | Measured 250ms + draw-ins | Borders/connectors draw via stroke-dashoffset, then content fades in | Tick marks appear at corners; dimension label fades in | Diagram assembles itself on scroll — lines draw, labels annotate |

## The Hero Moment

Every site gets exactly **one** engineered showpiece — the thing a visitor remembers and screenshots. Pick one, execute it fully, and keep the rest of the page calm around it:

1. **Live product theater** — the actual product running/animating real data in the hero (auto-playing workflow, live feed, real numbers ticking)
2. **Interactive canvas** — a direction-styled generative or reactive background (pointer-reactive grid, draggable shapes, drawing diagram) that never blocks reading
3. **Choreographed load** — a 1-2s entrance sequence so precisely staged it feels like a title card (Swiss grid snap, Terminal boot, Blueprint draw-in)
4. **Scroll-told story** — one pinned section where scrolling assembles the product story (diagram builds, screens swap, steps annotate)

Banned as hero moments (burned-out tropes): typewriter headlines, particle constellations, floating 3D blobs, gradient mesh drift, count-up stats as the centerpiece.

## Scroll Choreography

Scroll-triggered entrances (the base vocabulary) apply everywhere. *Choreography* — scroll driving an animation timeline — is rationed:

- Maximum one pinned/scroll-driven section per page, and only when it explains something sequential (how-it-works, transformation, architecture)
- Scroll must keep native speed — no scroll-jacking, no smoothing that fights the wheel
- The section must degrade to a static stacked layout on mobile and under `prefers-reduced-motion`
- Progress must be legible: the user should sense how much of the moment remains
- Use transform/opacity only; pre-measure layouts (no animated height/width)

## Micro-Interaction Catalog

These are mandatory polish — small, constant, cheap. Style every one of them to the direction (the table above), never leave them at browser/library defaults:

| Element | Requirement |
|---|---|
| Buttons | Distinct hover AND active (pressed) states; active state compresses or offsets — buttons must feel physical |
| Links | Animated underline or color shift consistent with direction — never default blue, never `text-decoration: underline` alone |
| Inputs | Focus transition on border/ring styled to direction; label or placeholder reacts |
| Cards | Hover response from the direction's hover language; cursor change only if clickable |
| Nav | Active section indicator that moves (sliding underline/pill), not just a color swap |
| Accordion/FAQ | Icon rotates/morphs; height animates; content fades in slightly after |
| Copy-to-clipboard | Confirmation state ON the element (checkmark morph, label swap) — not a toast |
| Toggle/theme switch | A designed moment — the one place a gratuitous 400ms animation is encouraged |
| Marquees | Pause on hover; direction-styled edges (hard clip for brutalist, long fade for luxury) |

## Craft Details Checklist

The sub-1% details that signal a human cared. All eight are required in Phase 13; each styled to the direction:

1. **`::selection`** — text selection color from the palette (accent bg + ink text), never browser default blue
2. **Scrollbar** — styled (thin, direction-colored thumb) or deliberately default — a decision, not an accident
3. **Focus-visible rings** — direction-styled (offset ring in accent; square for sharp directions, round for soft) — restyled, never removed
4. **Favicon + OG image** — direction-designed, locally hosted in `public/`, OG at 1200×630 with the display font
5. **404 page** — an in-character moment (Terminal: `ERR 404 — route not found` log; Playful: a lost shape) with a way home; the most-shared page on many sites
6. **Loading states** — preloader/skeletons in direction style; skeleton shapes match real content geometry
7. **Cursor** — default arrows are fine; if customized, only as the direction's signature (e.g. Blueprint crosshair), and never hide the cursor
8. **Title/meta polish** — page titles follow one pattern; theme-color meta matches `bg-page`

## Quality Bar (added to Phase 13 exit)

Alongside the 6 distinctiveness checks in `design_directions.md`:

7. **Motion identity check** — interactions use the chosen direction's vocabulary; no foreign easing (no springs outside Playful, no slow fades on Brutalist)
8. **Hero moment check** — exactly one engineered showpiece exists and runs at 60fps on mid-tier mobile
9. **Craft sweep** — all 8 craft details present and direction-styled
10. **Default-state sweep** — zero browser defaults visible: selection, focus, scrollbar, 404 all touched

## Final Principle

Visitors can't name easing curves, but they feel them. A site whose motion, hover states, and selection color all speak the same language reads as designed by someone with taste — that coherence, not the quantity of effects, is the next level.
