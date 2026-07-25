# Session Log — ny-eng

Entries are newest-first. Each entry documents one Claude Code working session.

---

## Session: 2026-07-25 (Organic-traffic diagnosis — legacy 404 recovery, cannibalization fix, voice-agent spend cap)

### Accomplished

- **Diagnosed why organic traffic "isn't working."** Pulled GSC + Bing rather than guessing: 19 clicks / 1,562 impressions in 90 days on Google. Bing history showed the cause — impressions fell from ~290/day (Mar–May 2025) to ~15/day by Jul 2025 and never recovered. The Astro rebuild changed URLs to `/en/` `/es/` and shipped **zero redirects** for the old `/eng-lesson/`, `/toefl/`, and `/blog/` paths. Verified live: they still 404'd 13 months later while accumulating 805 impressions across 23 dead URLs.
- **PR #218** — 23 legacy redirects, each mapped to the closest genuinely-equivalent live page (not a homepage dump, which reads as a soft 404). Verified all 11 tested redirects fire 308 → land 200 in production.
- **PR #218** — new post "Say or Tell" (EN + `es-MX`), replacing the second-largest orphan (`/eng-lesson/when-to-use-say-or-tell`, 240 impr, position ~8). Framed on the real cause: Spanish's single `decir` covers two English verbs, and the Spanish structure matches `tell`. Funnels into Verb Pattern Mastery lessons 2 and 9. Robert supplied a language-agnostic hero; optimized 1396 KB PNG → **41 KB** webp.
- **PR #219** — removed dead social profiles from schema.org `sameAs`. `linkedin.com/company/new-york-english-teacher` and `x.com/nyenglishteach` were both **404s being asserted to Google as verified profiles** on every blog post. Facebook — the only owned account — wasn't listed anywhere. Caught a latent bug: `json-ld.ts` had no `.filter(Boolean)` and would have emitted `["", "", ""]`.
- **PR #220** — consolidated the free-courses cannibalization. `/en/blog/free-english-courses-spanish-speakers/` (413 impr, pos 38.6) and `/en/courses/` (69 impr, pos 61.6) competed for ~31% of all site impressions and Google ranked neither. Post was an orphan (zero internal links). Ported its two unique FAQs into both hubs, retired both posts + orphaned images, 301'd each to its hub.
- **`docs/EXTERNAL-FOOTPRINT.md`** — new source of truth for every external property, with verification dates and a maintenance rule.
- **cushlabs-ai-voice-agent PR #41 (merged + deployed)** — `/api/outbound-call` places billed Twilio PSTN calls guarded only by an in-memory `Map` at 1-per-30s **per IP**, trivially bypassed by IP rotation and reset every deploy. Added a **global 50/day ceiling** that rotation cannot bypass, Redis-backed with in-process fallback. 5 new tests, suite 37/37. Deployed to the VPS and verified healthy on the Redis path.

### Decisions Made

- **Consolidate, don't differentiate**, on the courses cluster: on a domain whose bottleneck is authority, two weak pages beat one strong page never. Chose the hub over the higher-impression post because the post was an orphan and the hub is the permanent commercial asset.
- **Redirect legacy URLs to genuinely equivalent pages**, one by one, rather than a blanket homepage redirect — an approximate target gets treated as a soft 404 and recovers nothing.
- **Voice assessment agent: deferred, traffic first.** The text assessment at `/en/assessments/` already gets 63 impressions and zero clicks. A voice version of an unfound product is still unfound. Materially cheaper than first assumed — `cushlabs-ai-voice-agent` already exists with an Executive Coaching agent — but the bottleneck is discovery, not conversion.
- **Rate-limit budget degrades rather than fails closed.** Fail-closed is textbook for a spending gate, but it would 503 a client-facing demo on any Upstash blip. The in-process fallback still bounds spend and is strictly stronger than the per-IP map it replaced.

### Immediate Next Steps

- [ ] Check Vapi **Settings → Billing → Payment method**: if auto-recharge is OFF, the credit balance is the spend ceiling and nothing more is needed; if ON, set a Spending Limit with a 50% alert.
- [ ] Calendar reminder for **2026-10-21** — Meta page data access expires for all three managed pages; one `pnpm fb token:longlived` re-grant refreshes them together.
- [ ] Re-check GSC in ~3–4 weeks: the measurable signal is the course hubs' average position moving from 61.6/57.4 toward 38.6, and impressions consolidating onto one URL.
- [ ] Decide on Instagram — no capability exists today; needs a Business account linked to the CushLabs page, two scopes, and a separate `scripts/ig/` publish flow (two-step container + public image URL).
- [ ] Rewrite `cushlabs-messenger-bot/docs/META_GRAPH_API.md` — still says "Status: Not started" for scripts that shipped months ago.

### Technical Debt

- `/en/blog/business-english-interview-phrases/` sits at position 19.6 with 163+ impressions — bottom of page 2. Upgrading the existing post is higher ROI than any new article.
- The pre-2025 `/eng-lesson/` and `/toefl/` content is **gone** — not in `ny-eng-old` (which holds only `titan-core`). Redirects recover link equity, not content. Republishing those topics means rewriting them.
- `content-marketing/` holds 13 social kits with no shipped/not-shipped ledger, despite full publishing tooling existing.

### Open Questions / Blockers

- **Two stale-docs incidents cost real time this session.** `render.yaml` + `docs/DEPLOYMENT.md` in the voice repo described a Render deploy abandoned in March 2026, which produced a false "Redis is misconfigured in production" conclusion — corrected only by SSHing the box and testing a live Upstash round-trip. Separately, scoping a capability search to `src/` produced a false "the bot can't publish to Facebook" conclusion; the publishing layer lives in `scripts/` and `fb-content/`. **Lesson recorded in both repos: verify against the running system, and search the whole repo before concluding a capability is absent.**

---

## Session: 2026-07-08 (Verb Pattern Mastery — full free course shipped end-to-end)

### Accomplished

- Shipped the complete **Verb Pattern Mastery** course (indigo theme, bilingual EN + es-MX): hub + 3 levels + 10 lessons + 3 exams + 3 reference pages. Targets the #1 fossilized-error class for Spanish speakers (verb complementation: `depend of`, `explain me`, `enjoy to`, `made me to`).
- PR #212 (Level 2 — Patterns): lessons 4–7 (verb+preposition, to-do vs doing, someone+to-do/make/let, someone+preposition) + Patterns exam (20 Q). New data files `lesson-4..7.ts`, `exam-patterns.ts`.
- PR #213 (Level 3 — Mastery, extends beyond source PDFs): lessons 8–10 (meaning-changers stop/remember/try/regret, reporting verbs say-vs-tell + suggest-trap, sounding-natural 3-question diagnosis capstone) + Mastery exam (20 Q). Data `lesson-8..10.ts`, `exam-mastery.ts`.
- PR #214 (bonus refs): The Pattern Diagnosis Table, Gerund or Infinitive?, Top Traps for Spanish Speakers. `verbBonuses` flipped available → hub bonus section live.
- Authored all pedagogical data by hand (correctness-critical); parallelized the templated EN+ES page assembly across subagents (10 lesson pages + 6 bonus/exam pages), each grep-audited for Iberian markers.
- Final build clean: **470 pages**, meta-description gate (120–160) pass, sitemap validation pass.
- SEO: GSC sitemap resubmitted; IndexNow accepted 444 URLs (Bing/Yandex/DuckDuckGo/Seznam/Naver) with Bing IndexNow HTTP 200. Social kit added at `content-marketing/verb-patterns-course-social.md` (X + FB/LinkedIn, EN+ES).
- PR #215 (masterful-SEO hardening): new `CourseLessonSchema.astro` (data-driven BreadcrumbList + LearningResource) wired into all 32 sub-pages EN+ES; BreadcrumbList on both hubs; added Verb Pattern Mastery as the 9th course on `/en/courses/` + `/es/cursos/` (card + ItemList schema + hero/which-one copy, ES warm Mexican Spanish); fixed a pre-existing sitemap hreflang warning (executive-communication-playbook ↔ manual-comunicacion-ejecutiva in blogTranslations + ES post frontmatter). Sitemap now validates with **0 warnings** (444 URLs). Verified all JSON-LD parses + resolves in built HTML (correct localized names, URLs, resource types, es-MX inLanguage).
- Search-engine coverage completed: Google (sitemap), Bing (IndexNow HTTP 200 + direct Webmaster SubmitUrlBatch of 36 course URLs, HTTP 200), Yandex (IndexNow), DuckDuckGo/Seznam/Naver (IndexNow). Confirmed robots.txt references sitemap, 0 noindex on course pages, self-canonical + en-US/es-MX/x-default hreflang.
- PR #217 (pedagogy-review follow-up): added the dropped-preposition verbs `listen to` (escuchar), `look at` (mirar), and the `think in → think about` trap (pensar en) across every surface — Lesson 4 (3 drill + 3 error-correction items in lesson-4.ts, Section-2 trap trio, recap bullet), the Diagnosis Table (3 rows), and Top Traps (15 → 18 cards). EN+ES, build clean, Mexican-Spanish audit clean. Re-pinged the 6 changed URLs to IndexNow. (Skipped the reviewer's taxonomy-reframe and concordance-task ideas by design — the course already implements the Lexical Approach, contrastive analysis, and Pattern Grammar.)
- PR #216 (blog launch): bilingual launch article for the course — EN `/en/blog/master-english-verb-patterns/` + ES `/es/blog/dominar-patrones-verbales-ingles/` (warm Mexican Spanish). Angle: fossilized verb-pattern errors that stick to fluent B1–C1 speakers; emphasizes free/interactive/audio. Each post has Article + BreadcrumbList + FAQPage schema, listen-to-article TTS, internal links to course/lessons/diagnosis-table. Hero (Robert-provided) optimized to 1600×900 WebP, 51KB, placed in both blog image dirs; blogTranslations pair added. Build clean (472 pages, sitemap 0 warnings). Submitted both URLs to GSC + IndexNow + direct Bing (all HTTP 200). Social kit at `content-marketing/master-english-verb-patterns-social.md`.

### Decisions Made

- One hub / 3 progressive levels (not 3 separate CEFR courses); Level 3 written as new B2–C1 material beyond the two source PDFs — per Robert's AskUserQuestion choices.
- Reused `ErrorCorrection` / `SentenceTransformer` / `CourseExam`; built one new component (`PatternDrill`). Parameterized `CourseExam` copy (backward-compatible) so per-course intro/completion strings work.
- Skipped direct Bing Webmaster API submission: IndexNow already delivered to Bing (HTTP 200) and the direct API has only 100 URLs/day quota worth preserving; the 444-URL sitemap exceeded it anyway.
- Realigned local `main` to `origin/main` after each squash-merge (GitHub's fast-forward guard tripped on the pre-existing merge commit); verified `docs/BLOG-SYSTEM-PLAYBOOK.md` survived into origin before any reset.

### Immediate Next Steps

- [ ] Robert: post the social kit (`content-marketing/verb-patterns-course-social.md`) to X + LinkedIn/FB.
- [ ] After ~2 weeks, check GSC impressions/position for the new `verb-patterns` URLs; fold any striking-distance queries back into lesson copy.
- [ ] Consider linking the new course from related blog posts (business-english, register-for-spanish-speakers) for internal-link equity.

### Technical Debt

- None. (`CourseExam` parameterization keeps legacy beginner/intermediate exams on their original hardcoded fallbacks — intentional, no debt.)

### Open Questions / Blockers

- None.

---

## Session: 2026-07-01 (SEO schema hardening + demand-backed content + local-authority kickoff)

### Accomplished

- PR #207: added `offers` block (`price:0 USD`, InStock) to the full Course schema on all 14 course/master-class landing pages (7 EN + 7 ES) that had `isAccessibleForFree` but no offers. Sub-lesson/capstone/unit pages correctly left alone (primary entity is `LearningResource`, Course is only a reference stub).
- PR #208: FAQPage schema on the 6 posts with visible FAQ sections (interview-phrases, free-courses, real-cost — EN+ES) via new `faq` frontmatter field + existing `FAQSchema`; real-cost answers linearized to clean plain text. Local `Service` schema w/ city-level `areaServed` on the 3 geo posts (EN+ES) via new `serviceArea` field + new `LocalServiceSchema.astro`. Fixed a real sitewide ordinal bug in `Date.astro` (forced "th" past day 20 → 21th/22th/31th; now correct).
- PR #209: expanded the thin `/es/blog/dominar-negocios/` into a ~1,700-word ES pillar for "coaching de inglés de negocios" (site's biggest commercial demand: 212 impr/180d, was position 37). EN twin brought to parity + de-crufted. Both gained FAQPage schema. Driven by GSC striking-distance analysis.
- PR #210: fixed NAP consistency — replaced fake `+1-888-888-8888` with real `+52-33-1559-0572` and added GBP address/geo/`sameAs` to Org + ProfessionalService schema. Added `docs/LOCAL-SEO-PLAN.md`.
- PR #211: `Blog`/`ItemList` schema on `/en/blog/` + `/es/blog/` (page-1 only) via `PaginatedBlogLayout`.
- SEO automation after each merge: GSC sitemap + IndexNow, all HTTP 200. All builds clean; JSON-LD verified in `dist`; ES Iberian-marker grep clean.
- Scheduled a Google Calendar reminder (2026-08-05, Guadalajara time) to re-pull the striking-distance report and check if `dominar-negocios` climbs from position 37.

### Decisions Made

- Pillar strategy over new pages: expand the post Google already ranks for a query rather than write a competitor (anti-cannibalization). First test = dominar-negocios.
- Strategic finding: on-page SEO is strong; the real bottleneck is domain authority. Local Guadalajara SEO (GBP + citations + backlinks) is the lever — captured in `docs/LOCAL-SEO-PLAN.md`.
- Declined Review/AggregateRating schema (Google restricts self-serving on-site review markup) and a bulk new-article push (site already has 39 EN / 40 ES posts; volume isn't the gap).
- Kept physical GBP address in site schema despite "online only" content framing — NAP consistency with GBP is the stronger local signal (flagged for Robert to override).

### Immediate Next Steps

- [ ] ~2026-08-05: re-pull striking-distance report; if dominar-negocios climbed, repeat pillar pattern on next high-intent query; if stalled, execute off-page plan.
- [ ] Robert (GBP dashboard): reply to all 15 reviews, set up review solicitation (+2–3/mo), weekly GBP posts — per `docs/LOCAL-SEO-PLAN.md` P2.
- [ ] On request, Claude to draft P5 assets: review-request templates + owner-response drafts for the 15 reviews + outreach emails.

### Technical Debt

- FAQPage rich-result *display* is discretionary (Google curtailed it for low-authority sites) — markup is correct but rendering isn't guaranteed. Low risk, no action.

### Open Questions / Blockers

- Whether the single pillar expansion is enough to move dominar-negocios off page 4 given low domain authority — resolved by the Aug 5 re-check.

---

## Session: 2026-07-01 (cancellation policy — FAQs + dedicated page)

### Accomplished

- PR #202: shipped cancellation & no-show policy. Root cause of the chatbot's non-answer was that the FAQ stated the notice window but never the fee. New dedicated page at `/en/legal/cancellation-policy/` + `/es/legal/cancellation-policy/` (Mexican Professional Spanish), wired through i18n (`TKey`, `routeFor` EN/ES, `getAllTKeys`), `paths.ts`, `translationMaps.ts`, footer legal menu (both langs), and a notice/link on the booking pages. Added FAQPage JSON-LD schema to `/en/faqs/` + `/es/faqs/` (was missing entirely).
- PR #202 (follow-up commit): consolidated cancellation + no-show + reschedule into ONE verbatim block per Robert (RAG-chunk reasoning — any retrieved chunk carries the whole policy). Removed the standalone "What happens if I'm late?" FAQ entries; folded no-show into the combined block. Reschedule treated same as cancellation.
- PR #203: removed the "call directly" contact option (Robert doesn't take direct phone calls) from the policy page + scheduling FAQ (EN+ES); changed policy-page contact email from `privacy@newyorkenglish.com` to `robert@nyenglishteacher.com`.
- SEO automation run after each merge: Google sitemap resubmitted, Bing + IndexNow submitted for the 2 new URLs, IndexNow re-pinged for the 4 changed URLs. All HTTP 200.

### Decisions Made

- Late reschedule charged same as late cancellation: existing copy already lumped "cancellations or rescheduling" under one notice rule; consistent and non-abusable. Confirmed by Robert.
- Appended to single-file `docs/SESSION_LOG.md` (more recently maintained, Jun 13) rather than the older `docs/session-logs/` dir (last touched May 18) — matches global CLAUDE.md standard.
- Kept the verbatim block third-person ("Robert waits…") as Robert specified, even though surrounding page copy is first-person.

### Immediate Next Steps

- [ ] Check `ny-ai-chatbot` repo's knowledge-base source — does it pull from the live site (benefits automatically) or a hand-maintained KB (needs manual update)? The site now answers cancellation; the bot only does if its KB sees it.
- [ ] Decide whether to disable Cloudflare Email Address Obfuscation on the legal route so scrapers/the bot see the plaintext `robert@nyenglishteacher.com` (currently `[email protected]` + `data-cfemail` in raw HTML; humans see it fine in-browser).

### Technical Debt

- Cancellation page mixes voices: verbatim lead block is third-person ("Robert waits"), detailed sections are first-person ("I wait"). Intentional per Robert; align later if it reads oddly.

### Open Questions / Blockers

- None blocking. Two follow-ups above are Robert's call.

---

## Session: 2026-06-13 (neon.ts runtime env fix)

### Accomplished

- PR #193: fixed `src/lib/neon.ts` reading `POSTGRES_URL` via `import.meta.env`, which Vite inlines at build time — a connection string added/rotated after the build would bake in as `undefined` and every query would silently fail. Now reads `process.env` at runtime (import.meta.env as dev fallback), typed via `globalThis` to compile under the `astro/client`-only tsconfig without `@types/node`.
- Found by a cross-repo `import.meta.env` sweep originating in expat-driver-license-prep (same bug class fixed there in PRs #43/#44).

### Decisions Made

- Fixed despite `neon.ts`/`db.ts` being unwired dead code (Supabase→Neon migration leftover, no importers): preemptive — removes the trap before the quiz-submission DB feature is built on top of it. Zero risk to live paths.

### Immediate Next Steps

- [ ] When wiring up the DB-backed quiz-submission feature, confirm `POSTGRES_URL` is set in the host env and reaches `neon.ts` at runtime.

### Technical Debt

- None (this fix reduced it).

### Open Questions / Blockers

- None.

---

## Session: 2026-05-17 (Blog UX + Lightbox)

### Accomplished
- Fixed article card UX: added "Read More →" button with opacity hover transition to clearly signal clickability
- Created BlogImageLightbox.tsx React component for hero image interactivity with full-resolution modal display
- Implemented lightbox close mechanisms: ESC key, click outside image, X button in top-right
- Applied card and lightbox improvements to both EN and ES blog detail pages (`src/pages/en/blog/[slug].astro`, `src/pages/es/blog/[slug].astro`)
- Verified all features working via Playwright testing (5 article cards found, 3 "Read More" elements, hero image interactive)
- Committed changes: `feat(blog): make article cards clickable with clear UX affordance and add hero image lightbox`
- Bumped version: 2.1.0 → 2.2.0 (minor release for new features)

### Decisions Made
- Custom React lightbox component vs. npm package: Custom solution keeps dependencies minimal and avoids dependency bloat for a simple use case
- Opacity transition for "Read More": Maintains card height consistency and avoids layout shift on hover
- Flex layout for cards: Ensures content distribution is consistent and excerpt doesn't overflow when "Read More" appears

### Immediate Next Steps
- [ ] None — feature is complete and live

### Technical Debt
- None

### Open Questions / Blockers
- None

---

## Session: 2026-05-17 (continued — audio pass + blog post)

### Accomplished
- Merged PR #183: completed AudioButton pass across all remaining Past Tenses pages EN+ES (`story-openers`, `top-10-confused-pairs`, `practice-plan` EN; `leccion-5`, `guia-rapida`, `knew-vs-found-out`, `there-was-vs-there-has-been`, `frases-iniciales`, `top-10-pares-confundidos`, `plan-de-practica` ES). 108 AudioButton instances × 2 languages = 216 total buttons across all 14 course pages
- Merged PR #183 — prior commit `d9b7951` (same day) covered EN lesson-5, cheat-sheet, knew-vs-found-out, there-was-vs-there-has-been AudioButton pass
- Merged (earlier, separate commits): free-courses blog post EN+ES (`src/content/blog/en/free-english-courses-spanish-speakers.md`, `src/content/blog/es/cursos-ingles-gratis-hispanohablantes.md`); hero images processed PNG→WebP 1200×675 and placed in both `images/` dirs; `astro.config.mjs` blogTranslations updated; GSC sitemap submitted
- `data-driven` pages (`story-openers`, `top-10-confused-pairs` and ES mirrors): added `audioText` field to pairs data arrays (since `set:html` blocks can't embed React); AudioButton rendered alongside `set:html` paragraph

### Decisions Made
- `print:hidden` wrapping div on AudioButtons (not inline class): keeps markup readable and prevents buttons appearing on print for pages with print stylesheets
- One `audioText: string` field per pair (clean plain-text) alongside `good: string` (HTML-formatted): AudioButton gets clean text, the `set:html` block gets the bold/em formatting — no duplication of the data

### Immediate Next Steps
- [ ] Verify Vercel deploy of PR #183 — spot-check speaker buttons on EN story-openers and ES guia-rapida: https://www.nyenglishteacher.com/en/course/past-tenses/story-openers/
- [ ] Run `node scripts/seo/bing-submit.mjs` and `indexnow-submit.mjs` for the two blog post URLs
- [ ] Re-run Ahrefs full crawl in 3-5 days to verify all 5 issue categories cleared (carried from prior session)

### Technical Debt
- None new

### Open Questions / Blockers
- None

---

## Session: 2026-05-17

### Accomplished
- Merged PR #174: Past Tenses promo + Bonus 1 (cheat sheet EN+ES). Added "Targeted Master Classes" section to `/en/courses/` + `/es/cursos/`, cross-link callouts on intermediate + advanced course landings, ItemList JSON-LD updated
- Merged PR #177: shipped Bonuses 2-5 — `top-10-confused-pairs`, `knew-vs-found-out`, `story-openers`, `there-was-vs-there-has-been` (EN + ES). All flipped to `available: true`, 4 new tkeys registered in `src/lib/i18n.ts`
- Merged PR #181: 6+6 symmetric expansion. NEW Lesson 5 (Used to / Would, the habitual past); old Lesson 5 (Story Flow Map) renumbered to Lesson 6; NEW Bonus 6 (Your 30-Day Practice Plan). Courses index redesigned to 3×2 grid with Past Tenses as 6th card (distinct dark/emerald header). Hero copy updated to "Six free, interactive courses"
- Merged PR #182: fixed misleading CTAs on practice-plan + there-was-vs-there-has-been (EN+ES). "Save the cheat sheet" → "Open the cheat sheet"; "Work 1-on-1 with Robert" → /services/ → "Book a session with Robert" → `/en/book/`
- Submitted all new/changed URLs to Google sitemap, IndexNow (Bing/Yandex/DuckDuckGo/Seznam/Naver), and Bing Webmaster API direct

### Decisions Made
- Lesson 5 = "Used to / Would" (over Past Modals, Third Conditional, or Reported Speech): biggest true gap in a past-tenses-specific master class. Others are modality/irrealis, save for a future master class
- No 301 redirects for lesson-5 → lesson-6 renumber: the `/lesson-5/` URL doesn't go away, it just serves new Used to/Would content. Google re-crawl handles the re-index
- CTA button 2 routed to `/en/book/` over `/services/ongoing-coaching/`: more action-aligned with "Book a session" verb; stronger conversion path from a free-course completer

### Immediate Next Steps
- [ ] Verify production deploy of PR #182 (CTA fix) lands clean on both bonus pages
- [ ] Monitor GSC over next 7 days for re-crawl of `/lesson-5/` (URL content reassigned)

### Technical Debt
- Parallel Claude session running concurrently caused branch-name collisions (3 incidents — one commit ended up on `main` locally, recovered via cherry-pick + reset). Single-session is meaningfully faster

### Open Questions / Blockers
- None

---

## Session: 2026-05-16

### Accomplished
- Merged PR #175: hreflang fixes — removed phantom `executive-communication-playbook` from `astro.config.mjs` blogTranslations, removed broken `translations.en` from `manual-comunicacion-ejecutiva.md`, added 2 missing EN↔ES blog pairs
- Merged PR #176: schema.org fixes on 202 pages — `ContactPoint.contactType` → `"customer support"`, removed invalid `areaServed`, 12 course index + corporate-package `Course.provider` Person→Organization, `BlogPostSchema` publisher logo corrected
- Merged PR #178: lesson-2 titles (EN 69→59, ES 68→57 chars); `validate:seo` added to `validate:all` so title violations now fail the build; `CRITICAL-URLS.txt` expanded 80→222 URLs (all 142 course pages added)
- Merged PR #179: elementary connector data migrated from flat `{example, exampleEs, use, useEs}` to `{example: {english, spanish}}` to match `ConnectorChallenge.tsx` shape
- Merged PR #180: added 2-3 inlinks to all 13 Ahrefs-flagged near-orphan pages — high-stakes service page now cross-links 3 services, assessments page links quiz landing page + course endpoints, 4 ES service pages link related blog posts

### Decisions Made
- `validate:seo` wired into `validate:all` (not just `pre-deploy`): catches title violations in the standard build pipeline, not just a manual gate
- `manual-comunicacion-ejecutiva.md` stays ES-only, no EN counterpart created — removing broken `translations.en` was the correct fix
- Inlinks added as contextual callouts on existing service pages rather than modifying the main nav or services data file

### Immediate Next Steps
- [ ] Re-run Ahrefs full crawl in 3-5 days to verify all 5 issue categories cleared (hreflang, schema, titles, inlinks)
- [ ] Dependabot upgrade session: PRs #156-162 (Tailwind 4, TypeScript 6, PostCSS majors) — read Tailwind 4 migration notes first (`~/.claude/reference/tailwind-4-migration.md`)
- [ ] Submit updated sitemap to GSC: `node scripts/seo/gsc-submit-urls.mjs --sitemap`

### Technical Debt
- `manual-comunicacion-ejecutiva.md` has no EN counterpart — could create an EN version to make it a proper bilingual pair

### Open Questions / Blockers
- Several ES blog inlinks were already present in source but not yet counted by Ahrefs (crawl lag); should self-resolve on next crawl

---

## Session: 2026-05-10

### Accomplished
- Astro 5.5 → 6.3 migration (PR #153) — merged and deployed to production
  - Bumped: astro, @astrojs/mdx 4→5, @astrojs/react →5.0.4, @astrojs/check →0.9.9, @astrojs/netlify 6→7, vite 5→7
  - Removed @astrolib/seo (unused dep, peer-pinned to astro ^5) and @astrojs/tailwind (abandoned, peer-pinned to ^5)
  - Content collections migrated to Content Layer API — `src/content/config.ts` → `src/content.config.ts`, glob loader, `.slug` → `.id`, `entry.render()` → `render(entry)` across 9 files
  - Replaced 4 `Astro.glob()` calls with `import.meta.glob({ eager: true })`
- Bumped GitHub Actions runner Node 20 → 22 (followup commit after CI failed on Astro 6's `>=22.12.0` requirement)
- Closed Dependabot PR #144 (bare astro bump that couldn't land alone)
- Smoke-tested 14 routes locally on Astro 6.3.1 pre-merge; verified production 200s post-deploy

### Decisions Made
- Kept Tailwind 3 via raw PostCSS instead of migrating TW3 → TW4 in the same PR — avoids compounding migration risk (color collisions, `@theme` rewrite). Done since `postcss.config.cjs` was already wired.
- Closed Dependabot's bare astro PR and did the migration on a fresh branch — cleaner than reusing Dependabot's branch when 5+ packages needed coordinated bumps.
- Deferred 18 pre-existing `Connector[]` type mismatches in elementary course unit pages — surfaced by v6's stricter type generation, but `npm run build` doesn't gate on `astro check` and pages render fine. Out of migration scope.

### Immediate Next Steps
- [ ] Blog post #5 — *Present to US Clients on Zoom with Confidence* (next in SEO-MARKETING-PLAN.md queue)
- [ ] Optional: TW3 → TW4 migration as a standalone PR when there's a reason
- [ ] Optional: Fix `Connector[]` type/data mismatch in elementary course units (component interface vs `@data/elementary/unit-*` data shape)

### Technical Debt
- 18 elementary course unit pages fail `astro check` on `Connector[]` shape — passes build, type drift surfaced by v6
- `@astrojs/tailwind` replaced with raw PostCSS; eventual TW4 move still pending

### Open Questions / Blockers
- None

### Process Note
Pre-flight for major version bumps should grep `.github/workflows/` for runner Node version. Missed it pre-merge on Astro 5→6 — caught only when CI failed on Node 20. Local Node 22.17 was fine, but the check is two places, not one.

---

## Session: 2026-05-06

### Accomplished
- Unpublished Emmanuel Ibarra Castillo testimonial (status → draft, EN + ES) — PR #149 merged to main
- Fixed "All Industries" filter button rendering blank on `/en/testimonials/` — PR #150 merged to main (root cause: `bg-primary-600 text-white` with undefined Tailwind color scale produced white text on no background)
- Fixed same undefined `primary-N` Tailwind color bug site-wide — PR #151, 11 files: invisible CTA buttons, broken link colors, broken homepage gradient on `Testimonials-titan.astro`

### Decisions Made
- `bg-primary` / `hover:bg-primary-dark` as replacements for `bg-primary-600` / `hover:bg-primary-700` — only DEFAULT/light/dark are defined in tailwind.config.mjs
- `hover:bg-primary-50` → `hover:bg-gray-50` on outlined ghost buttons — no light tint variant exists, gray is a safe fallback
- Left `src/components/ExpandableTestimonialCard.astro` and `src/components/TestimonialCard.astro` (non-ui/) unfixed — confirmed dead code, not imported anywhere

### Immediate Next Steps
- [ ] Visually verify filter buttons on live site (active = blue fill, white text; inactive = visible gray text)
- [ ] Verify Testimonials-titan.astro CTA gradient renders on the homepage
- [ ] Delete dead-code duplicates: `src/components/ExpandableTestimonialCard.astro` + `src/components/TestimonialCard.astro`
- [ ] Send Julio the updated registro post for native MX review (carry-over from 2026-05-04)

### Technical Debt
- No build-time guard against undefined Tailwind utilities — `astro check` catches TypeScript errors, not CSS class errors; the `primary-N` bug lived undetected across 11 files
- Consider adding a lint step (e.g. `grep -r "primary-[0-9]"`) to CI to catch numeric scale usage before it ships

### Open Questions / Blockers
- None

---

<!-- New entries go above this line -->
