# Phase 8 — Dashboard

## Trigger
App shell (Phase 7) is complete.

## Files to Read
- `docs/project/pattern_snapshot.md` — **MANDATORY** — read before writing any code, follow established conventions
- `docs/framework/internal/03_dashboard_system.md` — dashboard anatomy
- `docs/framework/internal/16_dashboard_archetypes.md` — concrete dashboard types
- `docs/framework/internal/13_internal_data_display_rules.md` — data display rules
- `docs/framework/internal/24_realtime_and_data.md` — live data tiers (dashboard is a live surface: tier 1 minimum)

## What to Build

### Dashboard Type Selection
Choose the appropriate archetype from `16_dashboard_archetypes.md`:
- **Queue**: task/ticket/order processing
- **Pipeline**: stage-based workflow
- **Analytics**: metrics and trends
- **Content Workspace**: content creation/management
- **Operations**: system/team oversight
- **Monitoring**: real-time system health
- **Admin Overview**: platform-wide admin view

### Bento Grid Layout (default)
Compose the dashboard as a bento grid per `03_dashboard_system.md`: 12-column grid, mixed cell sizes (1×1 stats, 2×1 wide, 1×2 tall, 2×2 feature), consistent radius/gap, 6-9 cells, the archetype's main work surface in the dominant cell. Mobile collapses to a single column in priority order.

### Dashboard Components (as bento cells)
- **Summary stats**: 3-5 key metric cells with trend indicators
- **Main work surface**: primary content for the chosen archetype — the dominant cell
- **Secondary insights**: supporting chart/list cells
- **Activity feed**: tall cell with recent actions (if applicable)

### Animation Choreography
Per `03_dashboard_system.md` § Dashboard Animation Choreography: staggered cell entrance continuing from the post-login preloader crossfade, stat count-ups (≤800ms, once), chart draw-ins, uniform hover lift on interactive cells, live items sliding into feed cells, full `prefers-reduced-motion` fallback.

### Four States
- **Loading**: skeleton placeholders matching layout
- **Empty**: first-use guidance with clear CTA
- **Success**: populated with data
- **Error**: graceful error with retry option

### Verify
- Dashboard renders with mock/seed data as a composed bento grid (no grid holes, main work surface dominant)
- Entrance stagger plays once per mount; skeletons match the bento geometry exactly
- A single failed cell shows an inline error while the rest of the grid renders
- All four states display correctly
- Responsive at all breakpoints; mobile stacks in priority order
- Metrics update correctly

### Run Validation Gates
Run all Phase 8 gates from `docs/framework/internal/21_validation_gates.md`:
- `gate:dashboard-page` — Dashboard route exists
- `gate:dashboard-four-states` — Loading, empty, success, and error states present
- `gate:dashboard-metrics` — Summary metrics implemented

Plus regression: re-run all Phase 4–7 gates.

### Update Pattern Snapshot
Update `docs/project/pattern_snapshot.md` Section D with dashboard-specific component patterns (data display, metrics, etc.).

## Exit Condition
Dashboard is functional with all states. All gates pass. Pattern snapshot updated. Summarize and ask user to continue to **Phase 9**.
