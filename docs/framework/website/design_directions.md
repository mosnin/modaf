# Design Directions — Visual Identity System

> **TL;DR:** A catalog of 8 strongly differentiated visual directions, a banned-defaults list, and a mandatory selection process. Every project must choose and commit to one direction — shipping the base token defaults unmodified is a build failure.
> **Covers:** direction catalog, banned defaults, selection process, distinctiveness checks, internal app inheritance | **Depends on:** design_system_tokens.md | **Used by:** phase_01_discovery, phase_02_project_docs, phase_13_marketing, 09_design_direction template | **Phase:** 1, 2, 13

## Purpose

Left to defaults, every AI-generated SaaS site converges on the same look: Inter, blue-600 buttons, gray surfaces, rounded-xl cards in a 3-column grid, gradient text on near-black. Users can identify it on sight. This file exists to make that outcome impossible.

The base token files (`design_system_tokens.md`, `internal/10_design_tokens_internal.md`) define **structure** — scales, spacing rhythm, breakpoints, motion timing. This file defines **personality**. Structure is stable across projects; personality must differ per project. A design direction is a coherent set of personality overrides applied on top of the structural skeleton.

**The rule: the base token defaults are a fallback skeleton, never a shippable look. Every project selects exactly one direction during discovery and records it in `docs/project/09_design_direction.md`. Phase 13 must not exit with the default look.**

---

## The Banned Defaults

These patterns are the "vibecoded" signature. Never ship them regardless of chosen direction:

1. **The untouched fallback** — Inter + blue-600 + neutral gray surfaces exactly as the base tokens define them
2. **Gradient text headlines** — especially purple/indigo/pink gradients on dark backgrounds
3. **Glassmorphism card grids** — `bg-white/5 backdrop-blur border-white/10` repeated across sections
4. **Gradient mesh / floating blob / particle constellation backgrounds**
5. **Emoji as feature icons**
6. **The identical 3-card feature grid** — icon, title, two lines of text, `rounded-xl`, repeated 2-3 times per page with no layout variation
7. **Every section centered** — same max-width container, headline centered, content centered, all the way down the page
8. **One radius everywhere** — every element `rounded-lg`/`rounded-xl` with no intentional contrast
9. **Default shadcn zinc/slate theme** shipped without modification
10. **Typewriter/cursor hero headlines and count-up stats** as the only motion idea
11. **Hero copy that could describe any product** — see `public_copy_conversion_rules.md`; "Supercharge your workflow" is a placeholder, not a headline

Component **behavior** specs (accessibility, states, breakpoints) in `public_component_specs.md` always apply. The banned list governs **styling and layout choices**, which the chosen direction overrides.

---

## The Direction Catalog

Each direction specifies typography, palette strategy, surface treatment, radius posture, background treatment, motion character, and 3 signature moves. Fonts are available on Google Fonts unless noted. Palettes are starting points — adjust hue to the brand, keep the *strategy*.

### 1. Editorial

Print magazine confidence. Type does the selling.

- **Type:** Display: Fraunces (or Newsreader) 600-700, optical size high. Body: Source Sans 3 or Inter at 17px+. Scale contrast extreme: 72-96px heroes against 17px body.
- **Palette:** Cream paper `#FAF7F2`, near-black ink `#1A1815`, one muted accent (oxblood `#7D2A2A`, forest `#2D4A33`, or navy `#1F3A5F`). No grays — tints of ink.
- **Surfaces:** No cards. Hairline rules (`1px` ink at 20%) and whitespace divide content. Numbered sections (01, 02…) in small caps.
- **Radius:** 0-4px. Sharp.
- **Backgrounds:** Flat paper. Occasional full-bleed ink section for contrast.
- **Motion:** Minimal. Fade and small rise only. Underline grow on link hover.
- **Signature moves:** Oversized drop-cap or section numerals; italic serif pull-quotes as social proof; baseline-aligned multi-column layouts.
- **Best for:** Content products, finance, legal, research, anything selling credibility.

### 2. Neo-Brutalist

Loud, confident, hand-built. The anti-glassmorphism.

- **Type:** Display: Archivo Black or Space Grotesk 700. Body: Space Grotesk or Public Sans.
- **Palette:** Off-white `#F5F1E8` or flat color fields; true black `#000000` ink; 2-3 saturated flats (e.g., `#FF5C00`, `#FFD43B`, `#3B82F6` used flat, never as gradient).
- **Surfaces:** 2-3px solid black borders on everything interactive. Hard offset shadows: `4px 4px 0 #000` — no blur, ever.
- **Radius:** 0px, or one deliberately huge exception (pill buttons) for contrast.
- **Backgrounds:** Flat color blocking per section. Visible dotted or ruled grid is allowed.
- **Motion:** Snappy (100-150ms). Hover = element translates -2px/-2px and the shadow grows to 6px. Nothing eases slowly.
- **Signature moves:** Sticker/stamp badges at slight rotation; marquee strips with black borders; oversized cursor-following elements.
- **Best for:** Dev tools, creator economy, products for young audiences, brands that want energy.

### 3. Terminal / Industrial

Built by operators, for operators. Density is the aesthetic.

- **Type:** Display: IBM Plex Mono or JetBrains Mono 600 (yes, mono display). Body: IBM Plex Sans. Uppercase 11px mono microlabels with wide tracking everywhere.
- **Palette:** Near-black graphite `#0C0E0F` (not navy), text `#E6E8E6`, single phosphor accent — green `#4AF626`, amber `#FFB000`, or signal red `#FF4D00`. Accent used at <10% of surface area.
- **Surfaces:** 1px solid borders at low contrast, square corners, no shadows. Tables and definition lists over cards.
- **Radius:** 0-2px.
- **Backgrounds:** Subtle scanline or grain texture; fine dotted grid; ASCII diagrams as illustration.
- **Motion:** Instant or stepped (like a terminal redraw). Blinking block cursor allowed in one place only.
- **Signature moves:** Status dots + uptime-style metadata rows; keyboard-shortcut hints rendered as keycaps; log-line styled activity feeds.
- **Best for:** Infrastructure, security, monitoring, API-first products.

### 4. Soft Luxury

Quiet, expensive, unhurried.

- **Type:** Display: Cormorant Garamond or Marcellus, 400-500 weight, large sizes. Body: Jost or Outfit light. Generous letter-spacing on small caps labels.
- **Palette:** Deep espresso `#1C1714` or charcoal `#17191C` base; warm off-white text `#EDE8E0`; champagne `#C8A96A` or sage accent. Muted, low-saturation throughout.
- **Surfaces:** Soft diffuse shadows (`0 24px 64px rgba(0,0,0,0.25)`), large radius (16-24px), surfaces one tone lighter than base.
- **Radius:** 16-24px, consistent.
- **Backgrounds:** Subtle vignette or slow-moving tonal gradient (same hue family — never multi-hue).
- **Motion:** Slow and silky: 500-700ms entrances, long ease-out curves, crossfades over slides.
- **Signature moves:** Thin-line icons at 1px stroke; full-width photography with text overlay; centered serif statements between sections like chapter breaks.
- **Best for:** Premium B2C, wellness, hospitality, fintech for high-net-worth.

### 5. Swiss / International

The grid is the brand. Nothing decorative survives.

- **Type:** One family only: Inter Tight, Archivo, or Helvetica-adjacent. Weight and size do all hierarchy work: 900-weight 80px headlines against 400-weight 16px body.
- **Palette:** White `#FFFFFF`, black `#0A0A0A`, one accent — classically red `#E63312`. Nothing else. Grays only for rules.
- **Surfaces:** No cards, no borders, no shadows. Layout alone groups content — strict 12-column grid, visible asymmetry, big left-aligned headlines with content offset right.
- **Radius:** 0px.
- **Backgrounds:** Flat white. One inverted (black) section per page maximum.
- **Motion:** Almost none. Instant state changes; one decisive page-load reveal.
- **Signature moves:** Numbered section index (01-06) fixed in a margin; massive single-word headlines cropped by the viewport edge; data presented as bare oversized numerals.
- **Best for:** Design tools, agencies, architecture/engineering products, portfolios.

### 6. Playful Geometric

Memphis energy with adult discipline.

- **Type:** Display: Bricolage Grotesque or Clash Display (Fontshare) 700. Body: DM Sans.
- **Palette:** Warm off-white `#FFF8F0`; ink `#21201C`; 3-4 bright flats — coral `#FF6B5B`, sunshine `#FFC83D`, sky `#43B0FF`, mint `#3DD68C`. Each section leads with a different accent.
- **Surfaces:** Solid 2px ink borders OR flat color fills (pick one per element class); chunky pill buttons.
- **Radius:** Mixed deliberately: pills (9999px) + soft cards (20px) + sharp accents (0px).
- **Backgrounds:** Large geometric shapes (circles, half-circles, squiggles) as section anchors, flat color, slight rotation.
- **Motion:** Springy (spring physics allowed here, nowhere else): hover bounces, shapes that rotate slowly, drag-to-play moments.
- **Signature moves:** Hand-drawn underline or circle annotation on one headline word; shaped image masks (arch, blob, circle); mascot-grade icon style.
- **Best for:** Education, HR/team tools, consumer apps, community products.

### 7. Organic / Warm

Human, grounded, craft over chrome.

- **Type:** Display: Fraunces (soft optical) or Gelica-adjacent serif 500. Body: Nunito Sans or Karla.
- **Palette:** Sand `#F2EBE0`, clay `#C96F4A`, sage `#8A9B7E`, bark ink `#33302A`. Low saturation, warm temperature, no pure white or black.
- **Surfaces:** Tonal layering (each surface a step deeper into sand), 12-16px radius, shadows replaced by tone shifts.
- **Radius:** 12-16px, with fully rounded imagery.
- **Backgrounds:** Paper grain texture at 2-4% opacity; botanical or hand-drawn line illustrations.
- **Motion:** Gentle: 300-400ms, slight scale, nothing snaps.
- **Signature moves:** Squiggle dividers between sections; testimonial cards styled as handwritten notes; arch-shaped image frames.
- **Best for:** Health, sustainability, food, local services, marketplaces with a human touch.

### 8. Blueprint / Technical

The product as an engineering drawing.

- **Type:** Display: Archivo 600. Body: Inter. Annotations: IBM Plex Mono 11px.
- **Palette:** Drafting paper `#F4F5F2` (light) or slate `#10141A` (dark); ink `#1E2530`; blueprint blue `#2456E6` as the single accent; thin red `#E0301E` reserved for one callout per page.
- **Surfaces:** 1px solid borders with corner tick marks; dotted connector lines between related elements; flat, no shadows.
- **Radius:** 2-4px.
- **Backgrounds:** Fine dotted grid (16-24px pitch) across all sections; crosshair registration marks in corners.
- **Motion:** Draw-in effects: borders and connector lines animate like being drawn (SVG stroke-dashoffset); measured 250ms elsewhere.
- **Signature moves:** Dimension-line annotations labeling real UI screenshots ("2.3s → 0.4s"); diagrams as first-class hero content instead of screenshots; mono-labeled figure numbers (FIG. 01).
- **Best for:** Developer platforms, automation, analytics, technical B2B.

---

## Selection Process

**Phase 1 (Discovery):** Ask two brand-personality questions alongside the product questions:
1. "Pick 3 adjectives for how the product should *feel* (e.g., serious, playful, premium, raw, technical, warm)."
2. "Name 1-2 sites or brands whose look you admire — and one look you want to avoid."

**Phase 2 (Project Docs):** Based on the answers and the product's audience, propose **one primary direction and one alternate** from the catalog, each with a one-line rationale. After the user picks, generate `docs/project/09_design_direction.md` from `templates/09_design_direction_template.md` with every value **resolved to concrete fonts and hexes** — a buildable spec, not a mood board. Directions may be tuned (different accent hue, different display font in the same spirit) but not blended into mush: when in doubt, push further toward the direction, not back toward the middle.

**Phase 13 (Marketing Site):** Read `docs/project/09_design_direction.md` before writing any public page. Its values override the personality values (color, type, radius, shadow, background, motion character) in `design_system_tokens.md`. Structural values (spacing scale, breakpoints, layout grid, accessibility rules) always come from the base tokens.

---

## Distinctiveness Checks (Phase 13 exit)

Before declaring the marketing site complete, verify:

1. **Squint test** — At a glance, could the home page screenshot be any other SaaS? If yes, the direction was applied too timidly.
2. **Banned-defaults sweep** — None of the 11 banned patterns present.
3. **Type contrast** — Display and body create obvious contrast (family, weight, or width — not just size).
4. **Signature moments** — At least 2 of the direction's signature moves are implemented on the home page.
5. **Layout variety** — No two adjacent sections share the same layout skeleton; at least one section breaks the centered-container pattern.
6. **Accessibility intact** — Direction styling never sacrifices WCAG AA contrast, focus states, or `prefers-reduced-motion` support from the base specs.

---

## Internal App Inheritance

The authenticated product stays operational — it inherits the direction at **reduced intensity**, never wholesale:

- **Inherit:** accent hue, font family (body font only; mono if the direction uses one), radius posture (sharp vs round), border weight philosophy.
- **Do not inherit:** decorative backgrounds, display typography at scale, expressive motion, texture.

Record the resolved internal values in the "Internal Inheritance" section of `docs/project/09_design_direction.md`. The internal token structure in `internal/10_design_tokens_internal.md` remains authoritative for everything else.

## Final Principle

Generic is the default outcome, not the neutral one. A direction only works if it is applied with commitment — the most common failure is choosing a direction and then sanding off everything that makes it distinct.
