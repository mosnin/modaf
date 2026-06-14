# 03 Dashboard System

> **TL;DR:** Defines the canonical dashboard framework — bento grid layout (default), anatomy, summary rows, main work area, animation choreography, role-aware logic, required states, and mobile rules.
> **Covers:** bento grid layout, dashboard anatomy, summary cards, main work area, animation, role-aware logic, required states | **Depends on:** 08, 10, 13, 16 | **Used by:** 09, 11 | **Phase:** 8

## Purpose

Define the canonical dashboard framework for authenticated SaaS users.

## Dashboard Principle

The dashboard must answer:

1. what is happening
2. what needs attention
3. what should happen next
4. what value is being created

## Canonical Dashboard Anatomy

1. page header
2. summary row
3. main work area
4. secondary insights
5. recent activity
6. alerts or recommendations
7. empty states when no data exists

## Bento Grid Layout (Default)

The dashboard's default layout system is a **bento grid**: one composed grid of mixed-size cells rather than stacked full-width rows. The archetype (`16_dashboard_archetypes.md`) decides **what** the cells contain; the bento grid decides **how they sit together**. Cell size = importance — the layout itself communicates hierarchy.

### Grid Spec

- 12-column grid, `space-4` (16px) gap, all cells `radius-xl` (12px) on `surface-raised` with a `border-default` border — consistent radius and gap are what make a bento read as composed instead of cluttered
- Canonical cell sizes: **1×1** (stat), **2×1 wide** (chart strip, list preview), **1×2 tall** (activity feed, alerts), **2×2 feature** (the archetype's main work surface), **full-width row** (tables that genuinely need width)
- The archetype's **main work surface always occupies the dominant cell** (2×2 or larger, top-left region after the summary cells) — the bento never demotes the core job to a corner
- Typical composition: 4-5 stat cells across the top, main work surface dominating the left/center, tall activity/alerts cell on the right, wide insight cells below. 6-9 cells total — beyond ~10 the grid becomes noise
- Avoid two identically-sized cells adjacent where the content allows variety; never leave grid holes — cells stretch to fill their row
- Data-dense archetypes (Monitoring, Admin) may use more full-width row cells; that is still bento, just a calmer composition

### Cell Interior

- Every cell carries a `text-sm`/600 title and optional one-line context; the cell is the card — no cards nested inside cells
- Cells that lead somewhere (list previews, stat drill-downs) are fully clickable with a hover response; purely informational cells have no hover affordance
- Each cell handles its own four states independently — one failed cell shows an inline error while the rest of the grid renders (partial data state)

### Mobile

- Below `lg`, the bento collapses to a single column **in priority order** (summary stats 2-up, then main work surface, then the rest) — not in DOM order if that differs
- Stat cells pair up 2-per-row down to 480px, then stack

## Dashboard Animation Choreography

The dashboard is the post-login preloader's landing surface (`01_app_shell.md`) — its entrance continues that choreography:

1. **Staggered cell entrance**: as the preloader crossfades out, bento cells fade + rise (opacity 0→1, y: 12→0, 300ms ease-out) with a 50ms stagger sweeping top-left → bottom-right; runs once per mount, never on tab return
2. **Stat count-up**: summary numbers count from 0 to value (≤800ms, ease-out decelerate), starting when their cell lands; trend deltas fade in after the number settles
3. **Chart draw-in**: line/bar series animate in over ≤300ms after their cell lands — once, not on every data refresh
4. **Hover lift**: interactive cells respond with y: -2 + `shadow-md` at 150ms (the standard internal hover, applied uniformly)
5. **Live cells**: new activity/alert items slide in at the top (200ms) with a brief `surface-selected` highlight that fades over 1s; existing items shift down smoothly — no full-cell re-render flashes
6. `prefers-reduced-motion`: cells appear instantly, numbers render at final value, charts render complete; hover falls back to border/color change

Skeleton state mirrors the exact bento geometry — same cells, same spans — so the entrance animation lands on a layout the user has already seen.

## Summary Row

Use summary cards for meaningful metrics or statuses.

## Main Work Area

The main work area is the product core.

### Example Patterns

- queue
- pipeline
- inbox
- workflow runner
- content workspace
- feed
- calendar
- task board
- report view

## Analytics Requirement

Most products should have an analytics page or analytics section.

### Standard Analytics Contents

- overview metrics
- trends
- segments
- funnel or flow analysis when relevant
- top entities
- date filters

## Role Aware Logic

Dashboard composition may vary by:

- role
- plan
- setup state
- module access
- data availability

## Required States

Every dashboard must support:

- loading
- empty
- zero data
- partial data
- error
- restricted access
- offline or sync failure when relevant

## Mobile Rules

- stack summary cards predictably
- avoid unnecessary horizontal scroll
- collapse tables intelligently
- keep actions visible

## Dashboard Archetypes

For concrete, buildable dashboard patterns (queue, pipeline, analytics, content workspace, operations, monitoring, admin overview), see `16_dashboard_archetypes.md`. That file defines specific layout, summary cards, secondary insights, activity patterns, alert patterns, empty states, mobile behavior, and common mistakes for each dashboard type.

When building a dashboard, first identify which archetype matches the product, then use the archetype spec as the construction blueprint — rendered in the bento grid layout above (the archetype supplies the cells' content; the bento supplies the composition).

## Final Principle

A dashboard is not a wall of charts. It is an operational control surface centered around the core job the user is trying to accomplish.
