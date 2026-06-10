# 09 Design Direction

> **TL;DR:** Template for the project's resolved visual identity — chosen direction from the catalog with every personality value pinned to concrete fonts, hexes, and treatments.
> **Covers:** direction choice, typography, palette, surfaces, backgrounds, motion, signature moves, internal inheritance | **Depends on:** docs/framework/website/design_directions.md | **Phase:** 2 (generate), 13 (consume)

## Instructions

Generate this during Phase 2 after the user confirms a direction from `docs/framework/website/design_directions.md`. Every value must be buildable as written — real font names, real hex values, real CSS treatments. No placeholders, no "TBD", no vague adjectives without an implementation. This file overrides the personality values in `design_system_tokens.md`; structural values (spacing scale, breakpoints, accessibility rules) stay with the base tokens.

## Chosen Direction

> Example: **Blueprint / Technical** — chosen because DeployBot's audience is platform engineers who distrust marketing gloss; the alternate considered was Terminal/Industrial, rejected as too dark for a brand that emphasizes clarity.

## Typography

> Example:
> | Role | Font | Weights | Usage |
> |------|------|---------|-------|
> | Display | Archivo | 600, 700 | Headlines h1-h3, stat numerals |
> | Body | Inter | 400, 500 | Paragraphs, UI text |
> | Annotation | IBM Plex Mono | 400, 500 | Microlabels (11px uppercase, 0.08em tracking), figure numbers, code |
>
> Hero headline: 72px/600 desktop, 40px mobile. Scale contrast is the identity — never use display font below 24px.

## Palette

> Example:
> | Token | Value | Usage |
> |-------|-------|-------|
> | bg-page | #F4F5F2 | Drafting-paper page background |
> | ink | #1E2530 | All text, borders |
> | accent | #2456E6 | Blueprint blue — links, primary buttons, draw-in lines |
> | callout | #E0301E | Thin red — maximum one element per page |
>
> No grays: secondary text is ink at 64% opacity, hairlines at 18%. Status colors inherit from base tokens unchanged.

## Surfaces, Borders, Radius

> Example: Cards use 1px solid ink-18% borders with 4px corner tick marks (pseudo-elements), radius 3px, no shadows. Related elements connect with 1px dotted lines. Buttons: accent fill, 3px radius, ink 1px border.

## Backgrounds & Texture

> Example: All sections carry a 20px-pitch dotted grid (ink at 6%). Hero adds crosshair registration marks in two corners. No gradients anywhere.

## Motion Identity

Resolve from the direction's row in `docs/framework/website/signature_interactions.md` — easing/speed, entrance style, hover language, and the chosen **hero moment** (exactly one) plus the micro-interaction treatments.

> Example: Borders and connector lines draw in via SVG stroke-dashoffset (400ms ease-out, once per element). Everything else: 200ms opacity/transform only. No springs, no parallax. `prefers-reduced-motion` replaces draw-ins with instant render.
> Hero moment: scroll-told story — the architecture diagram assembles itself in one pinned how-it-works section.
> Craft details: ink-on-blueprint-blue `::selection`; square accent focus rings; crosshair 404 ("COORDINATES NOT FOUND"); skeletons as dashed-outline drawings.

## Signature Moves (implement at least 2 on the home page)

> Example:
> 1. Dimension-line annotations on the product screenshot labeling real metrics ("build: 41s → 6s")
> 2. Sections numbered as figures — "FIG. 01 — PIPELINE" in mono microlabel
> 3. Architecture diagram as hero visual instead of a screenshot

## Banned-Defaults Confirmation

> Example: Confirmed none of the 11 banned patterns from `design_directions.md` apply: no gradient text, no glass cards, no emoji icons, no identical 3-card grids (features render as an annotated diagram + numbered list), no centered-everything (hero and FIG sections are left-aligned on a 12-col grid).

## Internal App Inheritance

> Example: Internal product inherits: accent #2456E6 as primary-600 equivalent, Inter body font, IBM Plex Mono for IDs/timestamps/code, radius posture sharp (4px buttons, 6px cards). Does NOT inherit: dotted grid background, tick-mark borders, draw-in motion. Everything else follows `internal/10_design_tokens_internal.md`.
