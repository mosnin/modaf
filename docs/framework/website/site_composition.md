# Site Composition — Bespoke Page Assembly

> **TL;DR:** Replaces one-size-fits-all page templates with a composition system: section library with use/skip conditions, page selection conditions, an honest-proof rule, and a per-project site blueprint that Claude generates and the user confirms before building.
> **Covers:** composition inputs, section library, page spine, CTA cadence, proof selection, page selection, site blueprint process | **Depends on:** design_directions.md, saas_home_page_system.md, saas_website_page_system.md | **Used by:** phase_13_marketing, 20_subagent_dispatch | **Phase:** 13

## Purpose

The other website docs define what sections and pages *can* look like. This file defines **which ones this product actually needs, in what order, and why**. The fixed 14-section home page and 13-page sitemap in those docs are a **menu, not a checklist** — applying them wholesale to every product is a build failure. A pre-launch dev tool, a sales-led enterprise platform, and a self-serve B2C app need structurally different sites.

**The rule: at the start of Phase 13, before writing any page code, generate `docs/project/site_blueprint.md` — the bespoke page list and per-page section sequences for this product — and get user confirmation. Build only what the blueprint specifies.**

---

## Composition Inputs

Derive these from `docs/project/*` (brief, feature spec, design direction). Ask the user only for what the docs don't answer:

| Input | Values | What it changes |
|-------|--------|-----------------|
| **Funnel motion** | self-serve / sales-led / waitlist / open-source+paid | Primary CTA ("Start free" vs "Book a demo" vs "Join waitlist"), whether pricing is public, contact vs signup emphasis |
| **Audience** | developers / business buyers / consumers / mixed | Proof types that land (benchmarks vs case studies vs ratings), copy density, docs prominence |
| **Proof inventory** | what ACTUALLY exists: testimonials, customer logos, usage metrics, case studies, benchmarks, certifications, stars | Which proof sections are allowed — see Honest Proof Rule |
| **Product maturity** | pre-launch / early (first users) / established | Site size (3 pages vs 10+), proof strategy, waitlist vs trial |
| **Product visual** | screenshot-worthy UI / API-CLI / service / physical outcome | Hero visual type: screenshot, terminal/code, diagram, outcome imagery |
| **Offering shape** | single product / multi-persona / multi-product | Whether solutions/use-case pages exist, nav complexity |

## The Honest Proof Rule

**Never fabricate proof.** No invented testimonials, fake customer logos, made-up stats, or placeholder case studies — these are the fastest way to make a site feel AI-generated and erode trust. If the proof inventory is empty, use pre-traction proof instead:

- A concrete founder note (why this exists, what it replaces)
- Live product demo, interactive sandbox, or real screenshots with annotated claims
- Benchmarks or technical comparisons you can defend
- Open-source signals (stars, contributors, changelog velocity) if real
- Security/compliance posture, build-in-public metrics
- A specific roadmap and "who this is for / not for" honesty block

A site with zero testimonials and a great demo converts better than a site with fake testimonials.

---

## Section Library

Each entry: the job it does, when to use it, when to skip it. Visual specs live in `public_component_specs.md`; conversion copy in `public_copy_conversion_rules.md`; detailed section anatomy in `saas_home_page_system.md`.

### Orientation (every page starts here)

| Section | Use when | Skip when |
|---------|----------|-----------|
| **Hero — product visual** | UI is screenshot-worthy | UI is thin or product is an API |
| **Hero — terminal/code** | Developer product; the API *is* the product | Non-technical buyers |
| **Hero — diagram** | Value is a pipeline/architecture/before-after | A real screenshot tells it better |
| **Hero — outcome imagery** | Consumer/service products where the result sells | B2B tools (reads as stock-photo filler) |
| **Announcement bar** | There's a real announcement (launch, release, event) | Nothing to announce — never ship placeholder |

### Demonstration (the selling middle)

| Section | Use when | Skip when |
|---------|----------|-----------|
| **Split feature sections** | 2-4 features each need mechanism explained | Features are thin — don't pad; use one strong section |
| **Bento feature grid** | Many small capabilities, breadth is the story | Few deep features (splits explain better) |
| **Annotated diagram/walkthrough** | Workflow or architecture is the differentiator | Product is visually self-evident |
| **Interactive demo / sandbox** | Product can be felt in 30 seconds in-browser | Demo requires setup or data to make sense |
| **How it works (numbered steps)** | Onboarding simplicity is a selling point | Steps are generic ("sign up, use it, profit") |
| **Comparison table (vs alternatives)** | Switching product; users actively compare | No clear incumbent, or comparison invites bad-faith reading |
| **Integrations strip/grid** | Ecosystem fit drives adoption; integrations are real | Few or aspirational integrations |

### Proof (only from the real inventory)

| Section | Use when | Skip when |
|---------|----------|-----------|
| **Logo marquee/strip** | ≥5 real, recognizable customer logos | Fewer or unrecognizable — a weak logo wall is worse than none |
| **Testimonials (rail/wall/featured)** | Real quotes with names and specifics | None exist — use pre-traction proof, never invent |
| **Case study cards** | Real outcomes with numbers | Pre-launch |
| **Stats band** | 3-5 real, impressive, defensible metrics | Metrics are small or padded ("99% uptime" alone is filler) |
| **Founder note** | Pre-launch/early; founder credibility is the trust anchor | Established product with stronger proof available |
| **Community/open-source signals** | Real stars, contributors, active Discord | Numbers are unimpressive |

### Conversion & objection handling

| Section | Use when | Skip when |
|---------|----------|-----------|
| **Pricing section (on home)** | Self-serve with simple public pricing | Sales-led, complex, or non-public pricing — link to pricing page or demo instead |
| **Mid-page CTA** | Page has ≥6 sections (capture mid-scroll intent) | Short pages — hero CTA + final CTA is enough |
| **FAQ** | Real objections exist (security, migration, pricing mechanics) | You'd be inventing questions to fill it |
| **Final CTA** | Always — every page ends with one decisive ask | Never skip |
| **Waitlist capture** | Pre-launch | Product is available — ask for the real action |

## Composition Rules

1. **Page spine** — every marketing page covers four jobs in order: *Orient* (what is this, for whom) → *Demonstrate* (how it works) → *Prove* (why believe it) → *Close* (what to do next). How many sections each job gets is the bespoke part.
2. **Right-size the page** — home pages typically need 5-9 sections. Use the full 14-section sequence in `saas_home_page_system.md` only when the product genuinely has the proof and feature depth to fill it. Padding a thin product to 14 sections produces exactly the generic template feel this framework exists to prevent.
3. **Every section earns its place** — for each section in the blueprint, write one line: what it does for *this* product's funnel. Can't write the line → cut the section.
4. **CTA cadence** — hero CTA, then one CTA roughly every 2-3 sections, final CTA always. One primary action per page; secondary CTA (docs, demo) may differ.
5. **Adjacency** — no two consecutive sections with the same layout skeleton (two card grids in a row, two split sections with the same direction). Alternate density and shape.
6. **Proof placement** — at least one proof element within the first two viewports; never stack all proof in one block.
7. **Design direction wins** — section *selection* comes from this file; section *styling* comes from `docs/project/09_design_direction.md`. A direction's signature moves may restyle any section and override generic taste rules in other website docs.
8. **Blocks first** — when building a selected section, check the block library (`docs/framework/blocks/README.md`) before writing from scratch: if a block matches the section type, copy it into `src/components/blocks/`, replace its placeholder content, and restyle it to the direction. Scratch-building is the fallback.

---

## Page Selection

From `saas_website_page_system.md`'s catalog, include pages by condition — never build all 13 by default:

| Page | Include when |
|------|-------------|
| **Home** | Always |
| **Pricing** | Pricing is public. Self-serve: always. Sales-led: only as "talk to sales" framing or skip |
| **Product / Features** | Home page can't hold the feature depth (many features or multi-step workflow) |
| **Solutions / Use cases** | Distinct personas or industries buy for different reasons (one page per persona, min 2) |
| **Case studies** | ≥2 real case studies exist |
| **Integrations** | Integrations are real and a buying factor |
| **Security** | Selling to companies with procurement/security review |
| **Docs landing** | Developer product — docs are part of the funnel |
| **Blog / Resources** | Content exists or SEO is a v1 strategy — never ship an empty blog |
| **About** | Brand trust matters to the audience (consumer, services); optional otherwise |
| **Contact / Demo** | Sales-led: required. Self-serve: simple contact or support link suffices |
| **Legal** | Always (privacy, terms; cookie/security policy when relevant) |

Minimum viable site (pre-launch): Home + Legal (+ waitlist). Typical self-serve v1: Home, Pricing, 1-2 feature/use-case pages, Legal. Sales-led adds Demo/Contact and Security. Update nav and sitemap (`sitemap_diagram.md`) to match the selected set — nav links only to pages that exist.

---

## The Site Blueprint

Generate `docs/project/site_blueprint.md` at the start of Phase 13, present a summary, and get user confirmation before building. Format:

```markdown
# Site Blueprint — [App Name]

## Composition Inputs
Funnel motion: … | Audience: … | Maturity: … | Proof inventory: [only what's real]
Product visual: … | Offering shape: …

## Pages
[Selected pages with one-line reason each; pages deliberately excluded with reason]

## Home Page Sequence
1. [Section type — variant] — [one line: the job it does for THIS product]
2. …
CTA plan: primary action, cadence positions, secondary action

## [Other Page] Sequence
…

## Nav & Sitemap
[Resulting nav structure and routes]
```

Like the pattern snapshot, the blueprint is a generated working artifact — it does not count toward the 10 project docs in phase detection.

## Final Principle

The framework provides the vocabulary; the product dictates the sentence. Two MODAF sites should share craft and conversion logic but never structure — if the blueprint for a developer CLI and a B2C wellness app look interchangeable, the composition step failed.
