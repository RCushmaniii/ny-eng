# External Footprint — Source of Truth

> **Purpose:** the single authoritative inventory of every external property, service, and
> profile that supports NY English Teacher. Anything not listed here is either not ours or
> not verified. Do not add an entry without verifying it live first, and record the date.
>
> **Last full verification:** 2026-07-25

---

## 1. Owned web properties

| Property | URL | Status | Notes |
|---|---|---|---|
| Main site | https://www.nyenglishteacher.com | ✅ 200 | Astro 5 on Vercel, auto-deploys from `main` |
| Chat subdomain | https://chat.nyenglishteacher.com | ✅ 200 | RAG chatbot widget — repo `ny-ai-chatbot` |
| Chatbot app | https://ny-ai-chatbot.vercel.app | ✅ 200 | Same app, Vercel default domain |
| Booking API | https://plain-mode-42c4.rcushmaniii.workers.dev | ✅ 200 | Cloudflare Worker, Google Calendar integration |

## 2. Search / webmaster properties

| Property | Identifier | Access |
|---|---|---|
| Google Search Console | `sc-domain:nyenglishteacher.com` | Service account `seo-api-access@seo-automation-489217.iam.gserviceaccount.com` |
| Bing Webmaster Tools | `https://www.nyenglishteacher.com` | API key in `CLAUDE.md`; scripts in `scripts/seo/` |
| IndexNow | key `68c9a0e5…` | Notifies Bing, Yandex, DuckDuckGo, Seznam, Naver |
| Google Business Profile | New York English Teacher, Guadalajara | 4.7★ / 15 reviews · activity log in `GMB-LOG.md` |

Other GSC properties on the same service account (**not** this business): `cushlabs.ai`,
`voice.cushlabs.ai`, `marketsignal.cushlabs.ai`.

## 3. Social profiles — VERIFIED STATUS

Checked live 2026-07-25 with a browser user-agent.

| Profile | URL | HTTP | Verdict |
|---|---|---|---|
| Facebook Page | https://www.facebook.com/nyenglishteacher | ✅ 200 | **Confirmed owned by Robert.** The only social account he confirms controlling. |
| Instagram | https://www.instagram.com/nyenglishteacher | ❌ **Not ours** | Page resolves, but **Robert confirmed 2026-07-25 that this account is not his.** Someone else holds the handle. Never add to `sameAs` — claiming it would point our brand entity at a third party. |
| LinkedIn company | https://www.linkedin.com/company/new-york-english-teacher | ❌ **404** | **Dead.** Does not exist. |
| X / Twitter | https://x.com/nyenglishteach | ❌ **404** | **Dead.** Does not exist. |

### Why the dead links mattered

`src/data/config.ts` → `siteConfig.Socials` fed **`schema.org` `sameAs`** on every blog post
(`BlogPostSchema.astro`) and on `ProfessionalServiceSchema.astro`. `sameAs` is an explicit
claim to a search engine that *"these are our verified profiles."* Pointing it at two 404s
weakens entity trust — exactly the wrong signal for a site already fighting low authority.

The Facebook page — the one account actually owned — **was not listed at all.**

Fixed 2026-07-25: dead LinkedIn/X removed, Facebook added, Instagram held out pending
ownership confirmation.

## 4. Supporting repos

| Repo | Role | Relationship |
|---|---|---|
| `ny-eng` | This site | Primary |
| `ny-ai-chatbot` | RAG chatbot widget on `chat.nyenglishteacher.com` | Live dependency |
| `cushlabs-ai-voice-agent` | Vapi voice agents at `voice.cushlabs.ai` — includes **James**, an appointment-booking agent already configured for *Executive Coaching* at `/nyc-coaching` | Relevant to the proposed voice assessment |
| `cushlabs-prod-server` | **The actual production host.** Hetzner CPX21 (`178.156.192.117`), 6 Dockerized services behind Caddy. Migrated off Render in March 2026 | Runs voice, marketsignal, vitals, webscraper, unwatermark, resume-tailor |
| `cushlabs-messenger-bot` | **The Facebook Page control plane.** Meta app `848827908228231`. Bot engine (Messenger DMs + comment auto-replies), the `fb` admin CLI, and the demo-page factory | See §6 — this is how NY English's Page is operated |
| `ny-english-coach` | Next.js 16 app | Relationship to production unclear — **needs a decision** |
| `CEFR-English-Exam`, `cefr-question-generator` | CEFR assessment tooling | Possible feed for the assessment funnel |
| `ny-eng-old` | Contains only `titan-core` — **not** the legacy site content | Legacy content is NOT recoverable from here |

## 5. Analytics & monitoring

- **Vercel Analytics** — script injected in `src/layouts/Base.astro` (toggling it on in the
  dashboard alone does nothing; the tag must be present).
- **Sentry** — `sentry.client.config.mjs` / `sentry.server.config.mjs`, org `cushlabsai`.

## 6. Known gaps / open items

- [x] ~~Instagram ownership~~ — **RESOLVED 2026-07-25: not ours.** Handle is held by a third
      party. Permanently excluded from `sameAs`. If the handle is ever acquired, verify and
      update this file first.
- [ ] **Only one confirmed social channel exists** (Facebook). The LinkedIn and X handles the
      code claimed were never registered. If those channels matter for the B2B corporate
      audience, they need to be created — the site was asserting profiles that did not exist.
- [ ] **`content-marketing/` holds 13 hand-written social kits** with no record of whether they
      were posted. The tooling to publish them exists (see §6 below) — what's missing is the
      habit and a shipped/not-shipped ledger. Wire the blog-publish flow into `pnpm fb`.
- [ ] **Legacy content is gone.** The pre-2025 `/eng-lesson/` and `/toefl/` pages are not in
      `ny-eng-old`. Redirects (PR #218) recover link equity, not the content itself. If those
      topics are worth republishing, they must be rewritten.
- [ ] **`ny-english-coach`** — determine whether it is live, deprecated, or planned.

---

## 6. Facebook Page operations — where the tooling lives

Verified in code 2026-07-25. The Facebook Page is operated from
`cushlabs-messenger-bot`, **not** from this repo. Three-repo split:

| Concern | Repo |
|---|---|
| FB Page + bot engine + provisioning + publishing | `cushlabs-messenger-bot` |
| Gated client-facing web pages (`cushlabs.ai/demo/<company>/`) | `cushlabs` |
| Client survey / voice questionnaire flow | `cushlabs-messenger` |

**The `fb` admin CLI** — `scripts/fb-page/fb-admin.ts`, run as `pnpm fb <command>`.
Raw `fetch()` against **Graph API v21.0** — no SDK, no dashboard clicking. It
**defaults to the New York English page**; other pages need `--page <alias>`
placed *after* any positional arguments.

### Managed pages (all three verified live 2026-07-25)

| Page | ID | CLI target |
|---|---|---|
| **New York English** | `106311940988012` | default (`--page ny`) |
| CushLabs | `1110871555439963` | `--page cushlabs` |
| Boutique Azúcar Azul — Demo | `1240057929189198` | `--page azucardemo` |

`lumiere-demo` is registered in the config-driven registry with
`pageId: FILL_ME_AFTER_GRANT` — it activates as soon as the page exists and the
grant is done. New demo pages cost one JSON file plus one grant checkbox, zero
code edits.

### Credentials

Non-expiring **Page** access tokens, one per page, stored in `.dev.vars` under a
distinct key each, minted by `pnpm fb token:longlived` (short-lived user token →
long-lived user token → `/me/accounts` → page tokens written straight to the
file, never printed).

These come from a **separate least-privilege Meta app — CushLabs Page Assistant
(`1478493230499109`)** — deliberately *not* the bot's messaging app
(`848827908228231`).

All three carry the same 9 scopes: `pages_manage_posts`,
`pages_manage_engagement`, `pages_read_user_content`, `pages_read_engagement`,
`pages_manage_metadata`, `pages_show_list`, `business_management`,
`read_insights`, `public_profile`.

> ⏰ **Data access expires 2026-10-21** for all three. One re-grant refreshes them
> together. Put a reminder in ~mid-October.

### What it can do

- **Publish** — text, single photo, native multi-photo carousels (1–10,
  `posts:create-photos`), **bilingual in one post** via `multi_language_data`
  (Facebook routes each viewer to their language), scheduled posts, unpublished
  drafts that land in Business Suite → Drafts, and `posts:publish` to flip a
  reviewed draft live.
- **Manage** — comment as the Page (`comments:add`, the link-in-first-comment
  pattern), delete single posts or all posts, read feed / scheduled queue / drafts.
- **Page identity** — profile photo, cover photo, About/description, hours,
  location, username, specialties.

Safety rails: every write is **dry-run by default** and needs `--commit`
(`--confirm` for delete-all); token values are never echoed; risky writes
(location) are best-effort so they cannot abort a preceding good write.
Every publish is also logged as a Google Calendar event on **Social-Media-Posting**.

**Publishing internals** — `scripts/demo-factory/publish-posts.mjs` does a real
`POST /{page-id}/feed`, config-driven, publishing in array order (oldest first so
the newest lands on top) and pinning any post flagged `"pinned": true`.
Companions: `dress-page.mjs` (cover/profile art), `gen-cover.mjs`, `gen-cards.mjs`.

### Known gaps (Facebook)

- No insights/metrics command, despite holding `read_insights`.
- No video publishing.
- Meta rejects location writes on non-local page categories.
- `multi_language_data` is not readable back from the API, so bilingual status is
  verified from the `.en.md` source, not the API.
- `docs/META_GRAPH_API.md` still says *"Status: Not started"* and lists scripts
  that shipped months ago — stale enough to mislead a cold-start session.

### Instagram — not connected

Zero capability today: no `instagram_*` scope on any token, no code path. Probing
both real pages returned no `instagram_business_account` field, consistent with
"no IG Business account linked" (not conclusive — reading it needs
`instagram_basic`, which we also lack).

Four steps, in order:

1. **Dashboard (Robert):** the CushLabs IG must be a Business or Creator account
   and linked to the **CushLabs** Facebook Page (`1110871555439963`).
2. **Grant:** add `instagram_basic` + `instagram_content_publish` (plus
   `instagram_manage_insights` for metrics) to the Page Assistant app, re-run the
   mint flow.
3. **No App Review needed for our own IG.** All `instagram_*` permissions are
   Tech-Provider gated, but the check passes when the calling user holds an app
   role — Robert is admin on both. A *client's* Instagram would need Tech Provider
   verification.
4. **Code:** IG publishing is a genuinely different flow, not a page-id swap —
   two-step (create media container → publish), and images must sit at a public
   HTTPS URL (no multipart upload like FB's `/photos`). Needs a `scripts/ig/`
   sibling plus image hosting (R2 or `cushlabs.ai` static). No native scheduling
   either — `scheduled_publish_time` has no IG equivalent, so scheduled IG posts
   need our own cron.

Estimate once the grant exists: ~30–45 min for publish + carousel + image
hosting. The open questions are the hosting decision and whether Meta's newer
`instagram_business_content_publish` scope family has replaced
`instagram_content_publish` for a freshly-configured app — confirm against the
live app's permission list before committing to either.

> **Correction, recorded so it isn't repeated:** an earlier pass concluded this
> capability did not exist. That was wrong — the search was scoped to `src/` and
> `docs/`, and the publishing layer lives in `scripts/demo-factory/`,
> `scripts/fb-page/`, and `fb-content/`. **`src/` is the bot runtime only; the Page
> operations tooling is in `scripts/`.** Search the whole repo before concluding a
> capability is absent.

## Maintenance rule

When any external property is added, removed, or changes URL:

1. Verify it live (`curl -sL -o /dev/null -w "%{http_code}"` with a browser user-agent).
2. Update this file **and** `src/data/config.ts` if it belongs in `sameAs`.
3. Never put an unverified URL in `sameAs` — a dead link there is worse than an absent one.
