# Phase 10 — Settings & Billing

## Trigger
Core features (Phase 9) are complete.

## Files to Read
- `docs/framework/internal/05_settings_billing_admin.md` — settings and billing sections

## What to Build

### Settings Pages
- **Profile**: name, email, avatar, password change
- **Workspace/Org**: name, slug, branding (if applicable)
- **Team / Members** (per the Phase 3 account model — see `05_settings_billing_admin.md` § Team & Members): member list with inline role management, pending invites with resend/revoke, multi-email invite modal, transfer ownership, leave workspace, seat awareness on per-seat plans; live surface (tier 1 minimum). Hybrid model builds share/invite surfaces instead; personal-only builds no team UI
- **Notifications**: email preferences, in-app preferences
- **Security**: two-factor setup, session management (if in v1 scope)

### Billing (Stripe Integration)
- **Plan selection**: pricing tiers with feature comparison
- **Checkout**: Stripe Checkout session creation
- **Customer Portal**: link to Stripe Customer Portal for plan management
- **Webhook handling**: subscription created/updated/cancelled/payment failed
- **Usage display**: current plan, billing period, next invoice

### Verify
- Settings save and persist correctly
- Team invites send and resolve
- Stripe Checkout completes successfully
- Webhook events process correctly
- Customer Portal link works
- Plan changes reflect in the UI

### Run Validation Gates
Run all Phase 10 gates from `docs/framework/internal/21_validation_gates.md`:
- `gate:settings-pages` — Settings sub-pages exist
- `gate:billing-stripe` — Stripe integration code present
- `gate:billing-webhook` — Webhook endpoint with signature verification
- `gate:settings-permissions` — Role enforcement on settings routes

Plus regression: re-run all Phase 4–9 gates.

## Exit Condition
Settings and billing are functional. All gates pass. Summarize and ask user to continue to **Phase 11**.
