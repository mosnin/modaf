# Block Import Queue

Components received but not yet imported into the library. Say **"continue importing"** to process the next batch (sources are retained in the working session; if starting fresh, re-paste the component code from 21st.dev).

| # | Component | Category | Status |
|---|---|---|---|
| 1 | Agent plan (animated task/subtask tree with MCP tool badges) | ai/ | Source received — pending import |
| 2 | Message dock (expanding character message pill, Apple-dock style) | ai/ | Source received — pending import |
| 3 | AI prompt box (PromptInputBox — files, voice, search/think/canvas modes) | ai/ | Source received — pending import (needs SSR fix for style injection) |
| 4 | Claude-style chat input (files, pasted-content cards, model selector) | ai/ | Source received — pending import (needs id-type fixes) |
| 5 | Feature stat cards (features-8 — decorated SVG stat/illustration bento) | features/ | Source received — pending import (large inline SVGs) |
| 6 | Mega-menu navigation (nav-menu + grid cards + mobile sheet) | navigation/ | Source received — pending import (+ sheet/grid-card primitives) |
| 7 | Avatar uploader (crop modal, responsive dialog/drawer) | ui/ | Source received — pending import (+ modal/drawer/dialog primitives, react-easy-crop, vaul) |
| 8 | Account settings template (sectioned settings page) | settings/ | Source received — pending import (depends on #7) |
| 9 | Success dialog + Quick settings dialog (dialog compositions) | ui/ | Source received — pending import (+ extended dialog primitive) |
| 10 | Popover (extended primitive + share / quick-actions compositions) | ui/ | Source received — pending import |
| 11 | Workspace switcher dropdown (provider/trigger/content, searchable) | navigation/ | Source received — pending import (great fit for the shell's workspace switching) |
| 12 | Hero 195 | heroes/ | **Incomplete** — the paste contained only the shadcn Card dependency; the `Hero195` component source is missing. Re-paste from 21st.dev. |
| 13 | 21st.dev /community/components/s/features link | — | **Needs code** — links can't be imported; paste the component like the others. |
| 14 | Search files dialog (dialog composition with live filter) | ui/ | Source received — pending import (depends on #9 extended dialog) |
| 15 | Feedback popover (star rating + comments) | ui/ | Source received — pending import (depends on #10 extended popover) |
| 16 | Theme color picker dialog (presets + custom color + preview) | ui/ | Source received — pending import (depends on #9 extended dialog) |
| 17 | Edit profile dialog (form-in-dialog composition) | ui/ | Source received — pending import (depends on #9 extended dialog) |
| 18 | Animated feature section (auto-scrolling task loop beside copy + badges) | features/ | Source received — pending import |

Import rules for processing the queue: one self-contained file per block in the matching category folder, header comment with source + adaptation notes, placeholder content marked, runtime fixes only (SSR guards, broken imports like `figma:react`, id types), then a registry row in `README.md`.
