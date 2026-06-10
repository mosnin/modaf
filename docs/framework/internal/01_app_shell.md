# 01 App Shell

> **TL;DR:** Defines the authenticated app frame — top bar, floating sidebar with animated dock collapse, mobile bottom tabs + full-screen nav sheet, page header, user menu, post-login preloader, and responsive shell behavior.
> **Covers:** layout, floating sidebar, dock, bottom tabs, user menu, post-login preloader, responsive shell | **Depends on:** 08, 10, 12, 15 | **Used by:** 03, 09, 11 | **Phase:** 7

## Purpose

Define the canonical authenticated application shell for SaaS products. This file governs layout, navigation, header behavior, drawer behavior, user access entry points, and shell level state handling.

## Core Principle

The app shell is the persistent operating frame of the product. Feature pages change inside it, but the shell itself should remain stable.

## Canonical Shell Structure

1. Top bar
2. Desktop navigation: floating sidebar ↔ collapsed dock
3. Mobile navigation: bottom tabs + full-screen nav sheet
4. Main content area
5. Page header
6. Optional utility panel
7. User menu
8. Post-login preloader

## Top Bar Requirements

The top bar must support:

- product identity
- workspace identity when relevant
- global search when relevant
- notifications when relevant
- user menu

## Desktop Navigation — Floating Sidebar ↔ Dock

The default desktop navigation is a **floating sidebar** that collapses into an **animated icon dock** (Apple-Dock-like). The two are one component with two states, morphing between them — never two separate nav systems that fall out of sync.

### Floating Sidebar (default expanded state)

- Detached from the viewport edges: inset 12px top/left/bottom, `radius-xl` (12px), `surface-raised` with `shadow-md` — it floats over `surface-sunken`, it is not a full-height flush column
- Width: `sidebar-width` (240px); main content offsets accordingly
- Contents top→bottom: logo/workspace block, primary nav items (icon + label), secondary group (Settings, Admin for authorized roles), user block pinned at bottom
- **Collapse button**: at the sidebar's bottom edge (chevron-left icon, labeled "Collapse"); also bound to `[` keyboard shortcut

### Recommended Nav Items

- Dashboard
- Core feature modules
- Analytics / Integrations / API / Webhooks when relevant
- AI assistant entry point
- Settings
- Admin for authorized roles only

### Collapsed Dock

Triggering collapse morphs the sidebar into a compact vertical dock:

- **Morph, don't swap**: the floating panel animates width 240px → 64px while labels fade out (180ms ease-out, opacity+transform only); icons remain in place so the eye tracks them
- Dock shows icon-only nav items, same order, active item indicated by a filled pill behind the icon
- **Magnification on hover** (the Apple Dock feel): the hovered icon scales to 1.35, its immediate neighbors to ~1.15, falling off with pointer distance — CSS/Motion transform-only, 120-150ms response, no layout shift (scale only). Tooltip with the item label appears beside the magnified icon
- **Expand button**: pinned at the dock's bottom (chevron-right), always visible — it reopens the sidebar via the reverse morph; `[` toggles both ways
- Collapsed/expanded state persists per user (localStorage or settings) and restores on next session
- `prefers-reduced-motion`: no magnification (tooltip only), morph becomes an instant width change with a 100ms opacity fade

## Mobile Navigation — Bottom Tabs + Full-Screen Sheet

Mobile must not reuse the desktop sidebar. Two pieces:

### Bottom Tab Bar

- Fixed bottom bar with **3-5 tabs tailored to this product** — the user's most frequent destinations from the route plan (e.g. invoicing app: Dashboard, Invoices, Clients, Menu), not a generic mirror of the sidebar
- Tab anatomy: icon + 11px label; active tab uses the filled/solid icon variant and accent color, inactive tabs stroke icons in `text-secondary`
- The last tab is always **Menu** — it opens the full-screen nav sheet
- Respects safe-area insets; hides on scroll-down / reveals on scroll-up only if content density demands it (default: always visible)
- The page's primary action (FAB or header button) must never be obscured by the tab bar

### Full-Screen Nav Sheet

- Opens from the Menu tab as a full-screen takeover (slide-up + fade, 250ms ease-out), not a skinny drawer
- Contents: logo/workspace block, complete nav list (everything the desktop sidebar has, in large 48px-tap-target rows), settings, billing, theme toggle, logout, user block
- Close affordance top-right + swipe-down to dismiss; route selection auto-closes
- The sheet is the only place secondary destinations live on mobile — bottom tabs stay reserved for the top 3-4

## Main Content Area

The main content area is where authenticated pages render.

### Rules

1. Use a consistent container system.
2. Support both dense and wide views intentionally.
3. Every page must support loading, empty, success, and error states.
4. Permission denied and not found states must be supported when relevant.

## Page Header Pattern

Every authenticated page should begin with a page header.

### Required Page Header Fields

- page title
- brief context when useful
- primary action
- secondary actions when relevant
- filters or controls when appropriate

## User Menu

The user menu is the canonical access point for account level actions.

### Required Items

- profile
- workspace or organization settings when relevant
- billing
- security
- logout

## Workspace Switching

Only include workspace switching when the product genuinely supports multiple organizations or workspaces.

## Shell State Requirements

The shell must support:

- authenticated state
- unauthenticated redirect behavior
- shell loading state
- restricted access state
- incomplete setup state when relevant
- shell data failure state when relevant

## Post-Login Preloader

A short, clean branded moment between successful login and the dashboard — the internal counterpart of the marketing site's preloader.

### Sequence

1. On auth success, render a full-screen surface in `surface-base` with the **logo mark centered** (mark only, not the wordmark lockup)
2. Logo animates in character with the design direction's motion identity (draw-in, fade+scale, or boot-style — resolved in `docs/project/09_design_direction.md`), ≤ 800ms
3. While it plays, **prefetch the dashboard payload** — the preloader is a masked loading window, not dead time
4. Exit: logo scales up slightly and fades as the dashboard content fades in underneath (300ms crossfade) — one continuous transition, never a white flash between

### Rules

- Total duration 1.0-1.5s when data is ready; if the dashboard payload takes longer, hold the logo with a subtle pulse rather than adding spinners
- Plays **once per login** — never on route changes, refreshes, or tab restores (gate on the auth event, not on dashboard mount)
- `prefers-reduced-motion`: static logo, simple opacity crossfade
- Skippable by interaction after 1.5s (any click/keypress jumps to the dashboard)

## Responsive Rules

- desktop ≥1024px: floating sidebar / dock (user-toggled, persisted)
- below 1024px: bottom tabs + full-screen nav sheet; no sidebar variant
- page headers stack cleanly
- dense layouts must degrade intentionally
- primary actions remain visible and tappable, never obscured by the tab bar

## Final Principle

Build the shell once, reuse it everywhere, and do not allow feature work to invent competing shell systems.
