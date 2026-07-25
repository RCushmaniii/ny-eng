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
| `cushlabs-messenger-bot` | Meta app `848827908228231`. Handles Messenger **DMs and comment auto-replies** on the Facebook Page | See the correction below — it does **not** publish Page posts |
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
- [ ] **NO automated path exists to publish Facebook Page posts.** Verified 2026-07-25.
      `cushlabs-messenger-bot` was expected to cover this, but it does not:

      - Every Graph API call in `src/` targets `/me/messages` — the Messenger **Send** API
        (replying to DMs). There is no `POST /{page-id}/feed` anywhere.
      - `grep` for `/feed`, `/photos`, `publish_time`, `createPost`, `publishPost` across
        `cushlabs-messenger-bot/src` and `cushlabs-messenger` returns **zero** hits.
      - The live `SCOPES` array in `src/lib/oauth.ts` does **not** request
        `pages_manage_posts` — the permission needed to publish. (The 31 `pages_manage_posts`
        matches in that repo are all in planning/app-review markdown, not code.)

      **What the bot actually does:** Messenger DM replies and comment auto-replies
      (`pages_messaging`, `pages_read_user_content`, `pages_manage_engagement`).

      Publishing Page posts would require adding `pages_manage_posts` **and** writing the
      feed-publish code. ⚠️ Adding a scope to that app is a blast-radius change — an
      unapproved scope killed the entire OAuth dialog once already (see the comments in
      `oauth.ts`). Verify the permission is `live` via `GET /{app-id}/permissions` **before**
      touching `SCOPES`.

- [ ] **`content-marketing/` holds 13 hand-written social kits** that were never confirmed as
      posted — consistent with the finding above: there is no automation to post them, so
      distribution is manual or has not happened. No tracking exists for what shipped and when.
- [ ] **Legacy content is gone.** The pre-2025 `/eng-lesson/` and `/toefl/` pages are not in
      `ny-eng-old`. Redirects (PR #218) recover link equity, not the content itself. If those
      topics are worth republishing, they must be rewritten.
- [ ] **`ny-english-coach`** — determine whether it is live, deprecated, or planned.

---

## Maintenance rule

When any external property is added, removed, or changes URL:

1. Verify it live (`curl -sL -o /dev/null -w "%{http_code}"` with a browser user-agent).
2. Update this file **and** `src/data/config.ts` if it belongs in `sameAs`.
3. Never put an unverified URL in `sameAs` — a dead link there is worse than an absent one.
