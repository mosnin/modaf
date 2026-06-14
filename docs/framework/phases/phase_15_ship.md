# Phase 15 — Ship

## Trigger
Polish (Phase 14) is complete. All gates pass.

## Files to Read
- `docs/project/01_project_brief.md` — product name, domain intent
- `docs/project/08_qa_checklist.md` — final pass reference

## What to Do

The product is not done until it is live at a URL. This phase ends with a link.

### Deploy
- Create/link the Vercel project (`vercel link`, or guide the user through the dashboard import)
- Set all production env vars (`DATABASE_URL`, auth secrets, `ANTHROPIC_API_KEY`, Stripe keys + webhook secret, `SENTRY_DSN`, Resend key, realtime provider keys if tier 3)
- Production database: run migrations against the production DB; run the seed script ONLY if the user wants demo data in production (default: no — seed is for dev/preview)
- Configure the custom domain if the user has one; otherwise ship on the `.vercel.app` URL

### Production Wiring
- Stripe: switch to live keys, register the production webhook endpoint, send a test event
- Auth: production URL in the auth config (callback URLs, allowed origins)
- Sentry: confirm the DSN is set and a test error reports with source maps
- Email: verify the sending domain in Resend (SPF/DKIM) or note the sandbox limitation

### Launch Surface Check
- OG image + meta render correctly (test with a link preview)
- `sitemap.xml` and `robots.txt` exist and list the real public routes
- Favicon set; page titles follow the pattern; `theme-color` matches
- Lighthouse pass on the live home page — performance and accessibility ≥ 90, fix what's cheap

### Live Smoke Test (against the production URL)
- Sign up → onboarding → first value event → dashboard, end to end
- One core feature CRUD round-trip
- Checkout flow in Stripe test-clock or live mode per the user's choice
- AI assistant answers one question (verifies key + streaming in prod)

### Verify
- The live URL loads, auth works, no console errors, Sentry shows the test event

## Exit Condition
**Deliver the live URL to the user.** Summarize what's deployed, which env vars were set, and any deferred items (domain pending, email sandbox, etc.). The build is complete.
