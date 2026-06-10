# Phase 1 — Discovery Interview

## Trigger
App idea has been provided but `docs/project/` does not exist yet.

## Files to Read
- `docs/framework/templates/*` — scan structure to know what questions to ask

## What to Do

Analyze the app idea for gaps. Ask targeted follow-up questions, 2-4 at a time. Adapt based on answers. Skip anything already addressed.

### Areas to Cover

| Area | Key Questions |
|------|--------------|
| **Users & roles** | Who uses this? Multiple roles (admin, member, viewer)? |
| **Core action** | What's the single most important thing a user does? |
| **First value event** | What makes a new user say "this is useful"? |
| **Key entities** | What are the main objects? (projects, invoices, tickets, etc.) |
| **Dashboard shape** | What do users see on login? Queue? Analytics? Feed? |
| **Monetization** | Free? Freemium? Paid tiers? Per-seat? |
| **Integrations** | External connections? (Slack, email, APIs) |
| **Brand personality** | 3 adjectives for how it should feel? 1-2 admired sites/brands, and one look to avoid? (feeds `docs/framework/website/design_directions.md`) |
| **AI assistant scope** | What should the built-in assistant answer and do? (default-on — see `docs/framework/internal/23_ai_module.md`; note an explicit opt-out) |
| **V1 scope level** | Lean v1 (fastest path to live: phases 4-9 + ship; billing/admin/marketing deferred) or Full v1 (all 12 build phases)? |
| **Non-goals for v1** | What's explicitly out of scope? |

### Interview Style
- Conversational, not interrogative
- 2-4 questions per message, not a wall
- Acknowledge answers before asking more
- Stop when you have enough to fill all 10 project docs confidently

## Exit Condition
Enough information gathered. Tell the user: "I have enough to generate the project docs. Ready to proceed?" → **Phase 2**.
