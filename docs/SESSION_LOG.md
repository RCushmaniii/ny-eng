# Session Log — ny-eng

Entries are newest-first. Each entry documents one Claude Code working session.
Standing context that never gets checked off — diagnosis history, cross-repo
facts, strategy, settled decisions, reusable commands — lives in
`docs/PROJECT-CONTEXT.md`.

---

## Open Items

Standing register. Pinned above the dated entries, carried forward every session.

**Scope: ny-eng only.** Every repo keeps its own register in its own
`docs/SESSION_LOG.md`. Work belonging to another repo does not get tracked here,
however related it feels — that is how the old `HANDOFF.md` ended up carrying
voice-agent and messenger-bot items inside the website repo, where nobody looking
for them would find them.

**An item leaves this list only when it has been verified end to end.** "Tests
pass" and "the config looks right" are not verification — PR #218's redirects
were verified and still dead for 11 days, and `validate:all` sat green over a
permanently-red sub-validator twice. Each item below names what closing it
actually requires.

Last swept 2026-08-06, when `docs/HANDOFF.md` was folded in and every item it
carried was re-checked. Two closed on verification — Instagram publishing and the
`camila-demo-test@example.com` bounce — and are written up in
`docs/PROJECT-CONTEXT.md` §8. Three were not ny-eng work and moved to the repos
that own them: outbound PSTN calling and Vapi billing to `cushlabs-ai-voice-agent`,
`META_GRAPH_API.md` staleness to `cushlabs-messenger-bot`.

---

- [ ] **Connected-English asset rollout — two pieces still open.**
  *Blocks:* the capture layer of the new blog post (it converts traffic to email only
  once the guide exists) and the distribution of everything shipped 2026-08-13.
  (1) Robert posts the Facebook + GBP drafts from
  `content-marketing/why-correct-english-sounds-disconnected-social.md` — LinkedIn
  section is HOLD pending the LinkedIn Page decision below. (2) Asset 2, the 6–8 page
  executive guide PDF on the two frameworks, reusing the Corporate Audit lead-magnet
  pipeline (`LeadMagnetForm.astro` + `api/corporate-guide/download.ts` pattern),
  embedded in the blog post as its content upgrade.
  *Closes when:* the social posts are live and the guide is downloadable behind the
  form with a delivery email verified end to end.

- [ ] **GSC re-check — two windows, one report.**
  *Added 2026-08-13:* the ~2026-09-02 window now also watches the four comparison
  pages shipped in PR #244 (Past Tenses comparisons entered around position 10) and
  the connected-English blog pair from PR #242.
  *Blocks:* every content decision after this. Two rounds of SEO work are in
  flight and neither has been measured, so any further content work is guessing.
  *Watch at ~2026-08-20* (post PR #225/#228): the course hubs moving off position
  38.5 / 57–61 on the `... for spanish speakers` cluster — the single largest
  pocket of demand on the domain — the interview post off 19.6, and whether the
  four new cheat sheets enter around position 10 the way Past Tenses did.
  *Watch at ~2026-09-02* (post PR #231/#232, the redirect fix): legacy-URL
  impressions **transferring** to `/en/courses/` rather than evaporating, and Bing
  impressions moving off the ~15/day floor held since Jul 2025.
  *Closes when:* both windows have been pulled and the result written into a dated
  entry — including if the answer is "nothing moved," which is itself the finding.

- [ ] **Decide whether to spend Robert's personal name on NY English at all.**
  *Blocks:* the entire off-site authority plan, and whether NY English organic traffic
  has any path above its current floor.
  *Established 2026-08-06:* founder authority is by definition personal, and Robert's
  person is committed to CushLabs AI consulting (first paying client 2026-08-04). The
  two identities do not coexist in this market and the damage runs one direction. So
  NY English's off-site ceiling is **business-entity channels only** — precisely the
  channels already shown not to move anything (local pack won at position 1.0–1.5,
  which yields ~1 click/quarter).
  *Two sub-decisions, both calendared:* HARO — permanent indexed byline, no admin-only
  version, recommendation is to repoint the kit at CushLabs (Wed 2026-08-12 is a
  **decision** slot, not a task). LinkedIn Page — admin-only or skip (Fri 2026-08-07).
  *Closes when:* Robert answers and `docs/OFF-SITE-MARKETING.md` records it.

- [ ] **Cold outreach to Guadalajara HR/L&D leads — approved in principle, unbooked.**
  *Blocks:* the highest-value revenue path available here. One corporate account (the
  April 2026 prospect was 4–6 middle managers) outweighs every organic item combined.
  *Why it survives where HARO does not:* it makes no public, indexed claim about who
  Robert is. **Email from `@nyenglishteacher.com`, never LinkedIn DM** — a DM routes
  the recipient to the personal profile being protected. LinkedIn for research only.
  *Unverified prerequisite:* whether a warmed `@nyenglishteacher.com` sending domain
  exists. Cold email from a cold domain lands in spam — check before the first send.
  *Closes when:* green-lit, domain verified, and a `cold-email`-skill sequence booked.

- [ ] **The NY English ICP file carries a banned claim that keeps re-seeding into copy.**
  *Why this is an ny-eng item despite the file living elsewhere:* `icp-nyet.json` is this
  brand's own ICP, and it nearly put the banned claim into `content-marketing/` in this
  repo on 2026-08-06. The fix is one line in another repo; the damage lands here.
  *Blocks:* every future piece of NY English marketing copy, silently.
  `objections_and_rebuttals.past_failures` says *"a native English speaker with 20 years
  in Fortune 500 boardrooms."* Aggregate career-year counts were purged from all 11
  resume variants on 2026-08-03 as an age signal, then reappeared in marketing. Written
  around by hand on 2026-08-06, which is not a control.
  *Closes when:* fixed in `operating-system/nyet/icp-nyet.json`. Cross-repo.

- [ ] **On-site behaviour is currently unmeasurable.**
  *Blocks:* any conversion question. GSC shows what happens before the click; nothing
  shows what happens after.
  *Verified 2026-08-05:* Vercel Web Analytics returns `404 Web Analytics not found` via
  API for **both** `ny-eng` and `cushlabs-os-dashboard`, while
  `/_vercel/insights/script.js` serves 200 in production. Whether this is a Hobby-plan
  API limitation or a disabled toggle was not guessed either way.
  *Explicitly not GA4:* at 4 clicks/28 days it measures nothing and adds a consent
  banner to a site just made 31% lighter. Robert agreed 2026-08-05.
  *Closes when:* the Vercel dashboard is checked and the answer recorded here.

- [ ] **`GMB-LOG.md` stale since 2026-03-30**, and it is the only record of the
  best-performing channel (337 customer interactions vs 4 organic clicks/28 days).
  *Blocks:* judging whether the review push works — there is no current baseline.
  *Closes when:* Robert supplies current review count, rating and interactions.

> **Scope rule, added 2026-08-06.** This register holds **ny-eng items only.** Work
> belonging to another repo goes in that repo's own log — `cushlabs-ai-voice-agent` and
> `cushlabs-messenger-bot` both have a `SESSION_LOG.md`, and the latter also has
> `docs/OPEN-QUESTIONS.md`. Four cross-repo items (Vapi auto-recharge, outbound PSTN
> calling, `META_GRAPH_API.md`, the `camila-demo-test@example.com` email) were briefly
> re-added here on 2026-08-06 and removed again the same day — they are real and still
> open, they are simply not this repo's business. Their full text is in this file's git
> history at commit `f81fef9` if they need to be moved rather than rewritten.

---

## Session: 2026-08-25/26 — Duplicate quiz submissions fixed, every paid API surface rate limited

Started as consultation prep for a live lead and turned into two production fixes.

### Accomplished

- **Lead prep for Luis E. Garcia** (10:00 consult, executives quiz, 35/100 "Credibility
  Gap"). Reconstructed his exact answers from Neon. The diagnostic that mattered: he
  self-scored **confidence 60 but clarity 15**, picking the rock-bottom option on Q1 —
  "people leave with different interpretations of the same message." Confident and
  unclear, not nervous. There is **no shareable results URL** — `QuizReport.tsx` is
  `client:only` and renders from `sessionStorage`, so the report only ever existed in the
  lead's browser. Reproduced it via a console snippet that seeds the three keys.
- **PR #251 — duplicate quiz submissions.** One lead produced 3 DB rows, 3 admin emails,
  3 emails to the lead, and 3 billed Haiku generations. Two compounding causes: the
  submit handler had no in-flight lock or button disable, and the API generated the AI
  assessment (up to 8s) **before** the INSERT — so the button looked dead long enough to
  invite re-clicks, and a re-click arriving mid-flight found no row to collide with.
  INSERT now runs first with the assessment written back by UPDATE; a same-email +
  same-quiz submission inside 10 minutes short-circuits. Fixed in both `en` and `es`.
- **PR #252 — rate limiting on every paid API surface.** All four `api/` endpoints were
  public, unauthenticated, and spent money per call. Added `api/_lib/rate-limit.ts`,
  a Postgres-backed sliding window, plus `rate_limit_hits` (migration applied to Neon).
  `quiz/submit` and `corporate-guide/download` 5/min + 20/hr, `capstone/blob-upload`
  3/min + 15/hr, `tts/synthesize` 30/min + 300/hr.
- **PR #253 — rate-limit window keys.** Caught by verifying against production rather
  than trusting the build. Every window both reads and writes the counter table and all
  windows of a rule shared one key, so each counted the others' inserts and the rule
  burned its budget N times faster. Window length is now part of the key.
- **Deleted Luis's 2 duplicate rows**, kept `f5aa76e1` (earliest). Verified first: zero
  `quiz_answers` rows referenced them and all three were identical (`status: new`, no
  admin notes, CTA never clicked).

### Decisions Made

- **Postgres instead of the Upstash Redis default for rate limiting.** Provisioning
  Upstash needs an interactive dashboard flow, and the property that actually matters is
  a durable store _shared across serverless instances_ — an in-memory `Map` is worthless
  on Vercel. These endpoints see a handful of requests a day, so Redis latency buys
  nothing. `consume()` swaps to `@upstash/ratelimit` without touching call sites.
- **The limiter fails open.** These are lead-capture endpoints: losing a real lead to a
  limiter hiccup is worse than briefly letting abuse through, and every caller needs the
  same database one line later anyway.
- **`api/capstone/listen.ts` deliberately not limited** — GET playback proxy with strict
  blob-hostname validation; throttling it would break a learner replaying their own
  recording.
- **Imports use the `.js` extension form.** The project is `"type": "module"` and a
  build-time resolution failure in the shared lib would 500 all four endpoints.

### Verified in Production

- Duplicate guard: two identical submissions 3.3s apart (the real incident's interval)
  → 1 row, same `submission_id`, second flagged `duplicate: true`. Test row deleted.
- Rate limiter after #253: `400, 400, 400, 400, 400, 429, 429` — exactly 5 through, 429
  with `Retry-After: 60` on the 6th, and each window key holding its own 5 rows.
  Limiter rows deleted.

### Technical Debt

- `quiz_answers` table is **never written**. `api/quiz/submit.ts` stores per-question data
  in the `answers` JSON column instead, and `src/lib/db.ts`'s `getSubmission()` still joins
  the empty table. Dead schema plus a second copy of the query path.
- The limiter's count-then-insert is one statement but not a true transaction — two
  genuinely simultaneous requests can both pass. Accepted: this stops budget floods, not
  exact quotas.
- Carried from 2026-08-24: `src/lib/db.ts` / `src/lib/neon.ts` remain unimported duplicates
  of the logic `api/quiz/submit.ts` implements inline.

### Immediate Next Steps

- [ ] Delete the two `TEST DELETE ME - dupe guard` emails in the inbox — artifacts of the
      duplicate-guard verification, not leads.
- [ ] Reply to Luis Garcia. He viewed his report but never clicked its CTA — he booked by
      some other path, worth asking how.

### Open Questions / Blockers

- Three different AI assessments were generated for Luis (one per duplicate). Which one his
  browser rendered is unknowable — they are stored per row and only one reached him.

---

## Session: 2026-08-24 — Hostinger decommissioned, leaked DB password redacted

### Accomplished

- PR #247 — redacted live Hostinger MySQL connection values (host, database, user,
  password) from `docs/features/DATABASE_MIGRATION.md`. They were committed in plaintext
  on 2025-12-21 and sat in this **public** repo for ~8 months. Added a HISTORICAL banner.
- PR #248 — HISTORICAL banners on `docs/architecture/HYBRID-ARCHITECTURE.md`,
  `docs/deployment/DEPLOYMENT-GUIDE.md`, `docs/SESSION-SUMMARY-2025-11-27.md`;
  `docs/BUSINESS-CASE.md` hosting line corrected Hostinger → Vercel.
- PR #249 — deleted `public/.htaccess`. It was served publicly at
  `https://www.nyenglishteacher.com/.htaccess` (HTTP 200), exposing the CSP and
  security-header config. Removed the "update BOTH `vercel.json` AND `public/.htaccess`"
  instruction from `CLAUDE.md`, `docs/AZURE-TTS.md`, `docs/BLOG-SYSTEM-PLAYBOOK.md`.
- Robert deleted the Hostinger database, files, and plan. **Verified after:** `/.htaccess`
  → 404, homepage → 200, all six security headers live, 3 Cloudflare MX records intact,
  `api/quiz/submit` → 200. NY English Teacher is fully off Hostinger.

### Decisions Made

- Skipped exporting the MySQL database before deletion: Robert's call, the rows were his
  own test submissions from the Dec 2025–Feb 2026 window.
- No git-history rewrite for the leaked password. Deleting the database it opened is the
  real remediation; force-pushing a public repo's history buys nothing once the target is gone.
- Kept `src/lib/db.ts` / `src/lib/neon.ts` despite having zero importers — `api/quiz/submit.ts`
  uses its own inline `neon()` client. Not deleted this session; noted below.

### Immediate Next Steps

- [ ] Change that password anywhere else it is reused — the only remaining exposure.

### Technical Debt

- `src/lib/db.ts` and `src/lib/neon.ts` are unimported duplicates of the DB logic that
  `api/quiz/submit.ts` implements inline. Two copies of the quiz schema can drift silently.
  Carried since the 2026-02-09 Neon migration; first flagged 2026-06-13.

### Open Questions / Blockers

- None.

---

## Session: 2026-08-13 — connected-English content sprint: blog pair, hero, four comparison pages

### Accomplished

- PR #242 — blog pair "Why Grammatically Correct English Can Still Sound Disconnected"
  (`why-correct-english-sounds-disconnected` / `ingles-correcto-pero-desconectado`), repositioning
  Robert's 30-page academic-writing lesson as executive frameworks (Claim→Evidence→Explanation→Link,
  Look Back→Connect→Move Forward). Live, GSC/Bing/IndexNow submitted, structured data verified.
- PR #243 — hero image (1600×900 webp, 88 KB) on both language versions.
- PR #244 — four X-vs-Y comparison pages EN+ES (8 URLs): `i-hear-you-but-vs-and`,
  `i-disagree-vs-i-see-it-differently` (Executive Pushback); `i-think-vs-my-read-is`,
  `does-that-make-sense` (Drive the Decision). i18n registered, hub-linked, all 200 in production,
  all submitted. **Closed the register's top item, verified end to end.**
- Social drafts at `content-marketing/why-correct-english-sounds-disconnected-social.md`.

### Decisions Made

- Comparison topics pulled from each course's own cheat-sheet material, not keyword tools —
  matches the Past Tenses model that entered around position 10.
- LinkedIn social variant marked HOLD — off-site remains business-entity channels only per 2026-08-06.
- No custom images for comparison pages: the template is icon-based; Robert's image offer declined.

### Immediate Next Steps

- [ ] Robert posts the Facebook + GBP drafts (register item).
- [ ] Asset 2: executive guide PDF on the lead-magnet pipeline (register item).

### Technical Debt

- The two identical blog hero webp files dedupe to one hashed asset carrying the ES filename on
  both pages' og:image — cosmetic only.

### Open Questions / Blockers

- LinkedIn Page decision (admin-only vs skip) still unanswered; blocks the LinkedIn variant.

---

## Session: 2026-08-09 (02:20 MX) — the Sentry MCP was repointed org-wide, and it can write

Robert repointed the Sentry MCP server and asked whether that fixed the access problem. It did — both
halves of it. This closes the Technical Debt item raised in the entry below, which was written two
hours earlier and said no credential in the Projects tree could archive an issue.

### Accomplished

- **Confirmed the project pin is gone.** `~/.claude.json` now reads
  `https://mcp.sentry.dev/mcp/cushlabsai`; the old URL ended `/cushlabs-marketsignal` and refused
  every other project with "Issue is outside the active project constraint."
  `find_projects` returns all **24** projects.
- **Confirmed cross-project READ.** Fetched `NY-ENGLISH-MESSENGER-BOT-2` — the exact issue the pin
  refused two hours earlier — full tags, `psid`, `meta_code=551`, `archived_forever`.
- **Confirmed issue WRITE, which no auth token in any repo has.** Resolved
  `CUSHLABS-INVESTMENT-MODEL-1` and `-2` (both self-labeled "Safe to resolve/delete" smoke tests
  from the Sentry install) with an activity-feed comment on each. Real cleanup, not a synthetic
  probe. **Archiving no longer requires Robert in the UI.**
- **`ny-eng` is clean** — zero unresolved issues in the last 30 days, confirming last night's
  archive of `NY-ENG-8` / `NY-ENG-9` held.
- Updated the `reference-sentry-access` memory: MCP first, env tokens demoted to a documented dead
  fallback, plus the OAuth scopes and the per-session auth behaviour.

### Decisions Made

- **The MCP is now the default path to Sentry; the REST-API-with-env-token route is the fallback.**
  It was only ever a workaround for the project pin, and it never had `event:write`.
- **The auth grant is per-session, not persistent.** When only `authenticate` /
  `complete_authentication` are exposed, the server is unauthenticated — call `authenticate` and
  hand Robert the URL. Don't conclude the pin is back.

### Immediate Next Steps

- [ ] None in this repo. Register below is unchanged.

### Technical Debt

- **Closed:** "No Sentry token in the Projects tree can write an issue" (entry below). Still true of
  the tokens; no longer a blocker, because the MCP has `event:write`.

### Open Questions / Blockers

- None.

---

## Session: 2026-08-08 evening → 2026-08-09 (Sentry triage: two issues, neither ours — and half the filter was never running)

Robert brought two unresolved Sentry issues on `/en/resources/client-call-opening-closing-framework/`.
The messenger-bot half of this session is logged in that repo.

### Accomplished

- **Triaged `NY-ENG-8` (`t.entries.at is not a function`) and `NY-ENG-9` (`this.i.at`) to third-party
  noise.** Single stack frame is `static.cloudflareinsights.com/beacon.min.js` — Cloudflare's RUM
  beacon, injected by the proxy, not shipped by us. The throw is in its vendored `web-vitals` calling
  `entries.at(-1)`; `Array.prototype.at` shipped Chrome 92 / Safari 15.4 / Firefox 90, so only a
  pre-mid-2021 browser can hit it. `src/` has zero `.at(` calls. 4 + 2 events, 0 real users.
- **Found that half the Sentry noise filtering had never run.** `@sentry/astro` injects
  `sentry.client.config.mjs` **instead of** the options passed to the `sentry()` integration when
  that file exists (`integration/index.js:154`). The `ignoreErrors`/`denyUrls` block added to
  `astro.config.mjs` in PR #234 was dead from the day it landed.
- **PR #239** — beacon added to `denyUrls` plus a narrow `/\.at is not a function/`; the entries that
  existed only in the dead list folded into the live config; dead block deleted with a comment naming
  the precedence rule so it does not come back.
- **Verified against production, not the local build** (local skips Sentry — no `SENTRY_DSN` in
  shell): pre-deploy chunk carried `removeHighlight`, a string unique to the client config, proving
  which file ships; post-deploy chunk `page.C5QVN6zM.js` contains the beacon rule.
- Robert archived both forever; verified `archived_forever` via the Sentry API.

### Decisions Made

- **`ignoreErrors` as well as `denyUrls`.** `denyUrls` matches the frame URL and would miss `NY-ENG-9`
  if it resolves to our own bundle — Sentry's own tracing also calls `entries.at(-1)`.
- **Runtime SDK options live in `sentry.client.config.mjs` only.** Build-time options (source maps,
  org/project) stay in `astro.config.mjs`. Splitting them is what created the dead list.

### Immediate Next Steps

- [ ] None. Register below is unchanged by this session.

### Technical Debt

- **No Sentry token in the Projects tree can write an issue** — all four return 403 on status update
  and on `GET /org-auth-tokens/`, so every archive needs Robert in the UI. One org token with
  `event:write` would end this. Cross-repo; recorded in the `reference-sentry-access` memory.

### Open Questions / Blockers

- None.

---

## Session: 2026-08-06 (Off-site marketing gets an operating doc — and hits a brand wall)

Continuation of the 2026-08-05 session across midnight. That entry covers the technical work.

### Accomplished

- **Cut `v3.1.0`**, first release since April, notes from PRs #211–234. Version had drifted three ways — highest tag `v3.0.1`, "Latest" badge on `v2.1.0` (2026-04-17), `package.json` at `2.2.0`. Now aligned. https://github.com/RCushmaniii/ny-eng/releases/tag/v3.1.0
- **`docs/OFF-SITE-MARKETING.md`** — new operating document for everything outside the site. Every item carries an owner, effort, a **closes-when** line, and a booked calendar slot. Includes an explicit "Explicitly not doing" table so rejected tactics stop being re-proposed.
- **Eight calendar events booked** on Robert's primary, all 30 min at 06:30 `America/Mexico_City`, each body carrying the full click-path and exact NAP so the event stands alone. Weekly Friday habit + monthly first-Wednesday review with Claude.
- **`content-marketing/2026-08-gbp-reviews-push.md`** — two es-MX GBP posts (per `google-business-post` skill; QA clean, 0 Iberian markers) and three review-request variants.
- **`content-marketing/haro-featured-pitch-kit.md`** — credential block, four angles, answer template. Verified via Gmail that the Featured account exists (2026-03-23) and has received **zero digests in 12 months**; free tier is 3 answers/month, browse-not-push.
- **Rule added to `CLAUDE.md` (6 lines):** off-site recommendations require a doc entry **and** a booked 06:00–09:00 calendar slot in the same turn. Chat prose is an incomplete deliverable.

### Decisions Made

- **The founder-authority tier is unavailable to NY English, structurally.** Robert has one personal identity and it is committed to CushLabs AI consulting (first paying client 2026-08-04). "English teacher" and "AI consultant" do not coexist in one public identity in this market, and the damage runs one direction — coaching gains nothing from the AI association; AI consulting is harmed by the coaching one. Since founder authority is by definition personal, NY English's off-site ceiling is **business-entity channels only**.
- **HARO blocked, not scheduled.** A placement is a permanent indexed byline under his real name. Unlike a LinkedIn Page there is no admin-only version. Recommendation on record: repoint the pitch kit at **CushLabs**, same free channel, better brand. Robert declined to do that work from this repo — correct call, it belongs in `cushlabs`.
- **LinkedIn Company Page downgraded A→B, admin-only.** Verified 2026-08-06 that Page admins are **not** publicly visible and cannot be listed by outsiders, so ownership without association is mechanically possible — but reach comes from employee amplification, and the only available employee is the one person who cannot be associated. Leaves a `sameAs` target, not a cornerstone.
- **Citations will not move the numbers, and this is now written down.** Local pack already won (positions 1.5 / 1.0 / 3.3); ranking #1 there yielded 3 impressions and 1 click in 90 days. GBP posts are not a ranking factor and Robert has run them with no effect. Corrects the "next push is reviews, GBP and off-page authority" line in the 2026-08-05 entry — reviews still compound, the rest largely does not.

### Immediate Next Steps

- [ ] **Robert decides on HARO** (Wed 2026-08-12 slot is a decision, not a task) and on whether the LinkedIn Page is worth 30 minutes at all.
- [ ] **Cold outreach to Guadalajara HR/L&D leads** — Robert's idea, recorded in `OFF-SITE-MARKETING.md` Tier A+, deliberately **unbooked** pending his go-ahead. It is the strongest remaining channel because it makes no public indexed claim about who he is. Email from `@nyenglishteacher.com`, never LinkedIn DM.
- [ ] Verify a warmed `@nyenglishteacher.com` sending domain exists **before** any first send.

### Technical Debt

- `icp-nyet.json` `objections_and_rebuttals.past_failures` contains **"20 years in Fortune 500 boardrooms"** — a banned aggregate career-year claim the claims policy purged 2026-08-03. It will keep re-seeding into copy until the source file is fixed. Cross-repo (`operating-system`).
- `GMB-LOG.md` still stale since 2026-03-30; blocked on Robert supplying current review count and interactions.

### Open Questions / Blockers

- **Does NY English deserve any 06:30 slots at all?** Coaching bills 500 MXN/hr against CushLabs consulting engagements. Robert is explicitly transitioning out of teaching, and considers the weak organic ceiling "not necessarily a bad thing." Unresolved by design — it is his call, and the doc records it as open.

---

## Session: 2026-08-05 (Redirects were matching only the unslashed form — 85 of 90 were dead)

### Accomplished

- **PR #231 — found and closed the reason the SEO recovery work had not moved the numbers.** Vercel matches a redirect `source` literally. 85 of the 90 rules in `vercel.json` were written without a trailing slash, so they fired on `/path` and returned a **hard 404** on `/path/`. Measured against GSC over a 480-day window, **19 of the top 25 legacy URLs are indexed with the slash**, as are both retired free-courses posts. Emitted both forms for every rule including the six `:slug` catch-alls; 90 → 171 rules. Verified 15/15 land 200 on the preview build, then 15/15 again in production.
- **The single highest-impression page on the site was a 404.** `/en/blog/free-english-courses-spanish-speakers/` — 493 impressions lifetime, 167 in the last 28 days, ~21% of all site impressions — has been serving a hard 404 since PR #220 retired it on 2026-07-25. The intended 301 never matched.
- **PR #218's legacy recovery had been largely inert since 2026-07-25.** Its 23 rules were verified in production at the time, but on the unslashed form while the indexed form is slashed. `/eng-lesson/practice-ed-verbs-p3/` (217 impr) and `/eng-lesson/pronounce-ed-verbs/` (205) were still dead 11 days later.
- **Submitted live:** 16 URLs to IndexNow (16/16 accepted), GSC sitemap resubmitted, 0 errors.
- **Retrofitted `a-140`–`a-145` into `operating-system/strategy/accomplished.json`** — the whole 2026-07-25 → 07-31 ny-eng run (PRs #218–229) had never been logged. Archive rebuilt, 145 total.
- **Repo hygiene:** GitHub topics advertised `supabase` on a public repo that uses Neon. Replaced with `neon-database` + `cloudflare-workers`.

### Decisions Made

- **Emit both slash forms rather than guess at path-to-regexp.** An optional-trailing-slash pattern (`{/}?`, `/?`) would be terser, but I could not confirm Vercel's supported syntax without a deploy to test it, and a wrong pattern fails silently the same way this bug did. 171 explicit rules is well under Vercel's 1,024 limit and has no matching semantics to get wrong.
- **Verified on a real build, not the placeholder.** The first preview check passed against Vercel's build-in-progress page, which answers 200 to every path — including redirect sources. Re-ran the gate on "an unknown path must 404" before trusting any result.

### Immediate Next Steps

- [ ] **Re-check GSC ~2026-09-02** (4 weeks). The measurable signal is legacy-URL impressions transferring to `/en/courses/` rather than evaporating, and Bing impressions moving off the ~15/day floor they have held since Jul 2025.
- [ ] Cut a GitHub release. Version is drifted three ways: highest tag `v3.0.1`, GitHub "Latest" `v2.1.0` (2026-04-17), `package.json` `2.2.0` — with ~20 PRs merged since.
- [ ] "X vs Y" comparison pages for the master classes — still the open half of the cheat-sheet/entry-point work. *(Now tracked in **Open Items** at the top of this file.)*

### Accomplished (continued — maintenance sweep)

- **PR #232 — the guardrail, built before anything else.** `scripts/seo/redirect-audit.mjs` fetches every declared rule in both slash forms, follows each chain to its landing page, and fails on anything not 200. Also warns on multi-hop chains and on a source returning 200 directly (a live page shadowing a retirement rule), and lists any rule it could not expand so a pattern cannot go silently untested. **Production: 170/170 clean.** Wired as `npm run validate:redirects`.
- **Caught a second trap the same day:** a Vercel deployment in `BUILDING` state answers **200 to every path**, including redirect sources. The first preview verification passed against that placeholder and meant nothing. The audit now proves the origin 404s an unknown path before trusting any result.
- **PR #233 — `validate:performance` had been permanently red, so `validate:all` was red, so the whole pre-deploy gate was gating nothing.** Same failure as PR #226, in the script next to it. It was red for the wrong reason (measured *source* bytes, which Astro re-encodes) *and* hiding a real problem it never looked at: **12.42 MB across 204 shipped assets**, 23 over 100 KB, topped by a **2.19 MB PNG on a live blog post**. Built `scripts/optimize-images.mjs`; 89 images re-encoded in place. Shipped weight **12.42 → 8.58 MB**, assets over 200 KB now **zero**. The PNG → webp at 89 KB (**−96%**). Validator now measures `dist/_astro`. **`validate:all` exits 0.**
- **Closed both silent catches** flagged as debt. `report-structure.mjs` swallowed a corrupt history file and discarded every prior run silently; `validate-canonical-urls.mjs` swallowed an unparseable canonical, leaving the raw value so the page validated as if fine.
- **PR #234 — Sentry noise filtering** (`ignoreErrors`, `denyUrls`); the config had none.
- **Trimmed the CLAUDE.md redirect rule 25 lines → 6**, moving the narrative to `docs/REDIRECT-INCIDENT-2026-08-05.md`. CLAUDE.md is loaded every interaction in this repo; a war story does not need to be.
- **Repo hygiene:** GitHub topics advertised `supabase` on a public repo that uses Neon → `neon-database` + `cloudflare-workers`.

### The strategic finding

**GBP: 337 customer interactions. Organic search: 4 clicks / 28 days.** The Google Business Profile out-earns the entire website by roughly two orders of magnitude, and it sits at 15 reviews. Local queries rank 1.0–3.3 (`clases de ingles cerca de mi` 1.5, `escuela de ingles` 3.3) while course/content pages sit at 30–80. Discovery is working locally and failing editorially — which means the next push is reviews, GBP, and off-page authority, not more posts.

### Technical Debt

- **No automated check that a redirect rule actually redirects.** ~~The href audit walks built pages; it has never fetched a `vercel.json` source.~~ **CLOSED by PR #232.** This bug survived two sessions of SEO work and its own verification step because the verification used the same wrong assumption as the code.
- `GMB-LOG.md` last updated 2026-03-30 — four months stale, and it holds the only record of the highest-performing channel.
- Version drift, three ways: highest tag `v3.0.1`, GitHub "Latest" `v2.1.0` (2026-04-17), `package.json` `2.2.0`, with ~20 PRs merged since. Public repo.
- Vercel Web Analytics returns `404 Web Analytics not found` via API for both `ny-eng` and `cushlabs-os-dashboard`, so on-site behaviour is currently unmeasurable from here. The `/_vercel/insights/script.js` tag does serve 200 in production. Unresolved whether this is a plan limitation or a disabled toggle.

---

## Session: 2026-07-26 (Hub/query alignment, validator greened, /dev/ exposure closed, master-class cheat sheets)

### Accomplished

- **PR #225 — finished the #220 consolidation.** #220 correctly 301'd the 415-impression free-courses cluster into `/en/courses/` and `/es/cursos/`, but the hubs were written around "courses" while the demand is `online english classes/lessons for spanish speakers` (35 impr at pos 38.8 on the head term alone). EN hub had `online` ×2 and `classes` ×1. Reworked title, H1, description, hero, first FAQ, and `ItemList` schema on both hubs; coverage went `online` 2→25, `classes` 1→12. ES hub targets its own separate cluster (`clases de ingles` pos 72.3), not a translation of EN's.
- **PR #226 — greened the SEO validator**, which had been red, meaning `validate:all` was gating nothing. 20 titles over 60 chars (the ` | NY English Teacher` suffix costs 20; `&quot;` entities pushed two pages to 82–83) plus 3 ES past-tenses pages carrying a second `<h1>` in their print-only header where EN correctly uses `<h2>`. Now **204/204, 0 errors**.
- **PR #227 — closed a live exposure.** Eleven internal `/dev/` engineering pages (`deployment-checklist`, `dashboard`, and nine more) served HTTP 200 on the production business site with no `noindex`, no canonical, and nothing in `robots.txt`. Root cause was structural: `MarkdownLayout.astro` and `DocsLayout.astro` emit no robots meta at all. Caught before damage — Inspection API reported them "unknown to Google, crawled: never". Added 3 reusable audit scripts (`index-coverage-audit.mjs` found it, plus `internal-link-audit.mjs` and `link-vs-demand.mjs`).
- **PR #228 — cheat sheets for the two master classes that lacked one.** Verified the premise first: `/en/course/past-tenses/cheat-sheet/` is 17 impr at **position 10.5** unpromoted; `/es/.../frases-iniciales/` is 27 at 11.4. Built EN + ES for Executive Pushback and Drive the Decision, linked from all four hubs. Drive's twelve rewrites render from `drillItems` so the page can't drift from the drill.
- **Submitted live:** GSC sitemap resubmitted; **26 URLs accepted by IndexNow** across Bing/Yandex/DuckDuckGo/Seznam/Naver (2 hubs + 20 lesson pages + 4 cheat sheets).

### Decisions Made

- **Cancelled the approved Guadalajara "gratis" post.** The site is already **position 1.0** for `clases de inglés guadalajara` and it yields 3 impressions / 1 click per 90 days; the existing GDL post returns zero queries. Marked do-not-revive without new volume data — recorded in `docs/PROJECT-CONTEXT.md` §4.
- **Skipped a Verb Patterns cheat sheet.** `diagnosis-table` and `top-traps` already are that asset; a third would recreate the exact cannibalization #220 cleaned up.
- **Left the root `/` 307 alone.** It's conditional on `accept-language`; a temporary redirect is correct for locale-adaptive routing because the destination varies per user. A 308 would cache one language for everyone.
- **Left three `H1 too long` warnings alone** — they're two-sentence editorial headlines ("Feel the story. Don't think about the rules."), a brand-voice call, and warnings don't block the gate.

### Immediate Next Steps

- [ ] **2026-08-20 — GSC re-check** (calendared 06:30–07:00). Watch the hubs moving off pos 38.5 / 57–61 on the `for spanish speakers` cluster, the interview post off 19.6, and whether the four new cheat sheets enter around pos 10 like Past Tenses did.
- [ ] Build "X vs Y" comparison pages for the master classes — the remaining half of the granular-entry-point work. Past Tenses has four; Executive Pushback and Drive the Decision have none. *(Now tracked in **Open Items** at the top of this file.)*
- [ ] Add `ignoreErrors`/`beforeSend` to the Sentry config in `astro.config.mjs` — currently zero noise filtering.

### Technical Debt

- **Sentry has no noise filtering** (`astro.config.mjs` sentry block: no `ignoreErrors`, `beforeSend`, or `denyUrls`). Lower risk than the reference case since `replaysOnErrorSampleRate` isn't set to 1.0, but third-party browser noise still creates alert fatigue.
- Silent `catch {}` in two build/validate scripts (`scripts/report-structure.mjs:149`, `scripts/validate-canonical-urls.mjs:273`) — violates the no-silent-catch rule for pipeline scripts.
- 123 true orphan pages, but only 9 carry real demand (123 impressions total) — small, not yet worth a dedicated pass.

### Open Questions / Blockers

- **GSC returns "No queries" for the cheat-sheet pages** because those queries sit below the privacy threshold. Page-level data is the correct lens for them; query-level reads as zero and will look like failure to a cold-start session.

---

## Session: 2026-07-25 (Organic-traffic diagnosis — legacy 404 recovery, cannibalization fix, voice-agent spend cap)

### Accomplished

- **Diagnosed why organic traffic "isn't working."** Pulled GSC + Bing rather than guessing: 19 clicks / 1,562 impressions in 90 days on Google. Bing history showed the cause — impressions fell from ~290/day (Mar–May 2025) to ~15/day by Jul 2025 and never recovered. The Astro rebuild changed URLs to `/en/` `/es/` and shipped **zero redirects** for the old `/eng-lesson/`, `/toefl/`, and `/blog/` paths. Verified live: they still 404'd 13 months later while accumulating 805 impressions across 23 dead URLs.
- **PR #218** — 23 legacy redirects, each mapped to the closest genuinely-equivalent live page (not a homepage dump, which reads as a soft 404). Verified all 11 tested redirects fire 308 → land 200 in production.
- **PR #218** — new post "Say or Tell" (EN + `es-MX`), replacing the second-largest orphan (`/eng-lesson/when-to-use-say-or-tell`, 240 impr, position ~8). Framed on the real cause: Spanish's single `decir` covers two English verbs, and the Spanish structure matches `tell`. Funnels into Verb Pattern Mastery lessons 2 and 9. Robert supplied a language-agnostic hero; optimized 1396 KB PNG → **41 KB** webp.
- **PR #219** — removed dead social profiles from schema.org `sameAs`. `linkedin.com/company/new-york-english-teacher` and `x.com/nyenglishteach` were both **404s being asserted to Google as verified profiles** on every blog post. Facebook — the only owned account — wasn't listed anywhere. Caught a latent bug: `json-ld.ts` had no `.filter(Boolean)` and would have emitted `["", "", ""]`.
- **PR #220** — consolidated the free-courses cannibalization. `/en/blog/free-english-courses-spanish-speakers/` (413 impr, pos 38.6) and `/en/courses/` (69 impr, pos 61.6) competed for ~31% of all site impressions and Google ranked neither. Post was an orphan (zero internal links). Ported its two unique FAQs into both hubs, retired both posts + orphaned images, 301'd each to its hub.
- **`docs/EXTERNAL-FOOTPRINT.md`** — new source of truth for every external property, with verification dates and a maintenance rule.
- **PR #221** — upgraded the interview post (176 impr across 7 queries, position 19.6, zero clicks). The gap was intent, not depth: 30 phrases but zero complete answers. Added "Putting It Together: 5 Complete Answers" assembled from the phrases already taught (2884 → 3238 words), EN + `es-MX`. Also fixed its orphan problem — one contextual inbound link, same pattern as the courses post.
- **PR #222** — full-site link audit across all 574 built pages found **8 broken targets / 25 links**; all closed, re-scan reports 0. The serious one: **the quiz lead funnel dead-ended.** `/en/quiz/` has three CTAs (including the primary button) into `/en/quiz/question/1`, which after question six navigated to `/en/quiz/results/` — a 404 in production, in both languages. Also fixed an ES course page linking to an English services path, and five category slugs generated from post frontmatter with no matching page.
- **Course catalog audit** — 9 courses, **exact EN/ES parity**, matching page counts both languages, consistent A1→C2 labeling, no orphaned or half-published units. Catalog itself is sound; the defects were all in links pointing out of it.
- **Created the Meta re-grant calendar event** (Wed 2026-10-21, 08:00–08:30 America/Mexico_City, email reminder 24h prior + popup 30 min). It did **not** exist before — it had only been listed as a step. Includes the exact commands and all three page IDs.
- **cushlabs-ai-voice-agent PR #41 (merged + deployed)** — `/api/outbound-call` places billed Twilio PSTN calls guarded only by an in-memory `Map` at 1-per-30s **per IP**, trivially bypassed by IP rotation and reset every deploy. Added a **global 50/day ceiling** that rotation cannot bypass, Redis-backed with in-process fallback. 5 new tests, suite 37/37. Deployed to the VPS and verified healthy on the Redis path.

- **PR #223** — repointed the three EN quiz CTAs off the legacy unscoped flow. Turned out not to be a design decision: the ES page already used the correct `/es/quiz/it-services/question/1` pattern, so ES set the convention and EN was simply stale. Full funnel now walks 200 end-to-end in both languages.
- **PR #224** — homepage free-course showcase, both languages. Two-tier by design: the A1–C2 ladder is a compact strip (commodity offer; those hubs sit at position 56–83), while the four master classes get the visual weight. Unit counts read from course data so the section cannot drift from the catalog. Verified in a real browser at 1440×900 and 390×844 — 20/20 links resolve, no horizontal overflow, a11y semantics + reduced-motion handled.
- **Wrote `docs/HANDOFF.md`** — a full pickup document for a cold-start session: verified facts, the three false conclusions reached this session and why, the strategy the data supports, prioritized next actions, and the reusable href-audit command. *(Retired 2026-08-06: open work moved to **Open Items** at the top of this file, standing context to `docs/PROJECT-CONTEXT.md`.)*

### Decisions Made

- **Consolidate, don't differentiate**, on the courses cluster: on a domain whose bottleneck is authority, two weak pages beat one strong page never. Chose the hub over the higher-impression post because the post was an orphan and the hub is the permanent commercial asset.
- **Redirect legacy URLs to genuinely equivalent pages**, one by one, rather than a blanket homepage redirect — an approximate target gets treated as a soft 404 and recovers nothing.
- **Voice assessment agent: deferred, traffic first.** The text assessment at `/en/assessments/` already gets 63 impressions and zero clicks. A voice version of an unfound product is still unfound. Materially cheaper than first assumed — `cushlabs-ai-voice-agent` already exists with an Executive Coaching agent — but the bottleneck is discovery, not conversion.
- **Rate-limit budget degrades rather than fails closed.** Fail-closed is textbook for a spending gate, but it would 503 a client-facing demo on any Upstash blip. The in-process fallback still bounds spend and is strictly stronger than the per-IP map it replaced.

- **Stop writing neighborhood-level local posts.** The six existing ones rank at position 2.4–4.0 and produced 12 impressions in 90 days — a market-volume ceiling, not an SEO failure. One exception approved: a Spanish city-level post for Guadalajara pointing at the course hub.
- **Lead with the master classes, not the levels.** The differentiator is the combination (free + interactive + audio + Spanish-speaker interference + scenario-based), not the topics themselves — verb patterns and interview phrases are well covered by large ESL sites.

### Immediate Next Steps

- [x] **DONE 2026-08-07 — and the instruction was wrong.** Auto reload was ON ($10 at a $5 threshold); Robert turned it off, so the credit balance is now the ceiling. **There is no "Spending Limit" to fall back on — Vapi does not offer one**, nor a monthly budget, nor any way to lower concurrency below 10 (verified against https://docs.vapi.ai/billing/manage-billing-and-credits). The "if ON, set a Spending Limit with a 50% alert" half of this item described a control that has never existed, which made leaving auto reload ON look survivable. The credit balance is the only aggregate spend ceiling on the platform. Full account and the decision rule: `cushlabs-ai-voice-agent/docs/COST-CONTROLS.md` §1 and §4.
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
