# Site Health Status — NY English Teacher

**Last updated:** 2026-04-10
**Site:** https://www.nyenglishteacher.com
**Hosting:** Vercel (static + serverless)
**Pages:** 246 (verified via sitemap validation)

---

## Production Readiness

| Area | Status | Notes |
|------|--------|-------|
| **Build** | ✅ | 246 pages, zero errors, zero warnings |
| **Sitemap** | ✅ | 246 URLs validated, hreflang reciprocity verified |
| **Linting** | ✅ | ESLint with strict TypeScript + Astro rules |
| **CI/CD** | ✅ | GitHub Actions: lint → type-check → build on every PR and push to main |
| **Dependabot** | ✅ | Weekly updates for npm and GitHub Actions |
| **Sentry** | ⏳ | SDK installed, config ready. Awaiting DSN from Sentry dashboard to activate. |
| **Env validation** | 🟡 | Basic — validates Google Calendar vars only. Needs expansion. |
| **Unit tests** | 🔴 | No test framework. Validation scripts exist but no unit/integration tests. |
| **Prettier** | 🔴 | No code formatter configured. |

---

## Courses Deployed

| Course | Level | Units | Exam | Status |
|--------|-------|-------|------|--------|
| First Steps Into English | A1 (Beginner) | 10/10 | ✅ | Live |
| Building Fluency | B1-B2 (Intermediate) | 10/10 | ✅ | Live |
| Speak with Confidence | B2-C1 (Advanced) | 2/10 | ❌ | In progress |
| Communicate Like a Leader | C1-C2 (Executive) | 0/10 | ❌ | Planned |

---

## Known Issues

### React #418 hydration warning
- **Where:** Fires on exam pages and some course unit pages during client hydration
- **Impact:** Non-blocking — exams and units function correctly end-to-end
- **Root cause:** Not yet diagnosed. Likely from a `client:load` component rendering differently on SSR vs client. Candidates: CourseProgress (localStorage read), AudioButton, or Astro dev-mode React build.
- **Priority:** Low — investigate when convenient

### Exam crash (RESOLVED — PR #34)
- **What happened:** PR #32 refactored CourseExam to pass functions as island props. Functions don't survive Astro's JSON serialization. Both exams crashed on "See Results" for ~24 hours.
- **Fix:** Pass data (tier definitions array) instead of functions. Compute results inline.
- **Lesson:** React island props in Astro must be JSON-serializable. No functions, no class instances.
- **Full post-mortem:** [docs/INTERMEDIATE-COURSE-RETROSPECTIVE.md](docs/INTERMEDIATE-COURSE-RETROSPECTIVE.md)

---

## Validation Scripts

| Script | Command | What it checks |
|--------|---------|---------------|
| Sitemap validator | `npm run build` (included) | All URLs canonical, hreflang reciprocity, critical URLs covered |
| Hreflang validator | `npm run validate:hreflang` | Hreflang tags match i18n routes |
| 404 validator | `npm run validate:404` | No broken internal links |
| URL structure | `npm run validate:urls` | URL formatting rules |
| Canonical validator | `npm run validate:canonical` | Canonical tags present and correct |
| Link validator | `npm run validate:links` | Internal/external links resolve |
| Performance check | `npm run validate:performance` | Basic performance metrics |
| All validators | `npm run validate:all` | Runs all above |
| Pre-deploy audit | `npm run pre-deploy` | Health + SEO + sitemap (full audit) |
| Lint | `npm run lint` | ESLint for TypeScript/Astro files |
| Env check | `npm run test:env` | Validates Google Calendar env vars |

---

## Deployment Checklist

Before merging to main:

- [ ] `npm run build` passes (zero errors, zero warnings)
- [ ] `npm run lint` passes
- [ ] Sitemap URL count hasn't unexpectedly changed
- [ ] New pages have hreflang tags (EN + ES)
- [ ] No `.env` values in committed code
- [ ] PR description explains what changed and why
- [ ] Manual content review for any new exam questions or course content

---

## Infrastructure

| Service | Purpose | Config location |
|---------|---------|----------------|
| Vercel | Hosting (static + serverless) | `vercel.json` |
| Cloudflare Workers | Booking API (Google Calendar) | `cloudflare-worker.js` |
| Neon PostgreSQL | Quiz submissions | `src/lib/neon.ts` |
| Resend | Transactional email | `api/quiz/submit.ts` |
| Formspree | Contact form | Contact page component |
| Google Calendar | Appointment slots | Cloudflare Worker |
| Titan Email | Inbox for info@nyenglishteacher.com | MX records on domain |
| Sentry (pending) | Error monitoring | `astro.config.mjs` |
