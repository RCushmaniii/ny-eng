# Project Context — ny-eng and related repos

> Standing reference. Distilled from `docs/HANDOFF.md` (written 2026-07-26,
> folded in and retired 2026-08-06). This file holds the context that does not
> get checked off — diagnosis history, cross-repo facts, strategy, settled
> decisions, and reusable commands.
>
> **Open work does not live here.** It lives in the `## Open Items` register at
> the top of `docs/SESSION_LOG.md`.

---

## 1. Where the organic-traffic problem came from

Organic traffic on nyenglishteacher.com was diagnosed on 2026-07-25 at **19
clicks / 1,562 impressions on Google in the prior 90 days**. The cause was not
"the content isn't working."

A 2025 rebuild changed the URL structure to `/en/` `/es/` and shipped **no
redirects** for the old `/eng-lesson/`, `/toefl/`, and unprefixed `/blog/`
paths. Bing impressions fell from ~290/day (Mar–May 2025) to ~15/day by Jul 2025
and never recovered. Those URLs were still 404ing 13 months later.

That leak was closed in two stages, because the first stage did not actually
work:

- **2026-07-25 (PR #218)** — 23 legacy redirects declared, each pointing at a
  genuinely equivalent page rather than the homepage.
- **2026-08-05 (PR #231)** — those rules had been **largely inert for 11 days**.
  Vercel matches a redirect `source` literally, and 85 of 90 rules were declared
  without a trailing slash while the indexed form carries one. Both forms are now
  emitted for every rule. Full narrative: `docs/REDIRECT-INCIDENT-2026-08-05.md`.

**The remaining bottleneck is domain authority, not on-page SEO.** On-page is in
good shape. Further gains come from links, distribution, reviews/GBP, and picking
queries the domain can realistically win.

---

## 2. Cross-repo facts that are easy to get wrong

Three false conclusions were reached in a single 2026-07-25 session by reasoning
from repo files instead of live systems. Do not repeat them.

1. **`voice.cushlabs.ai` does NOT run on Render.** The whole stack moved to a
   self-hosted Hetzner VPS (`178.156.192.117`) in March 2026 — repo
   `cushlabs-prod-server`, Docker Compose behind Caddy. The old `render.yaml` was
   deleted because it produced a false "Redis is misconfigured" conclusion. Env
   lives in an env file per service **on the box**, not in any dashboard. Deploy
   is **manual** — there is no Watchtower:

   ```
   ssh deploy@178.156.192.117
   cd ~/apps/cushlabs-prod-server
   docker compose pull voice-agent && docker compose up -d voice-agent
   ```

   Claude has working SSH access. Verify there; never guess from repo config.

2. **`cushlabs-messenger-bot` CAN publish to Facebook Pages.** A search scoped to
   `src/` produced a false "it can't" conclusion. The publishing layer lives in
   `scripts/demo-factory/`, `scripts/fb-page/`, and `fb-content/`. `src/` is the
   bot runtime only. See that repo's `docs/EXTERNAL-FOOTPRINT.md` §6 for the full
   CLI surface.

3. **Upstash Redis IS working in production** (live set/get/del round-trip inside
   the running container, 2026-07-25). `REDIS_URL` also appears in the container
   env as an unused leftover — ignore it.

**The general rule these earned:** verify against the running system, and search
the whole repo before concluding a capability is absent.

---

## 3. What the search data says

Pulled from GSC/Bing 2026-07-25 → 2026-08-05. Use it; don't re-derive it.

- **The Google Business Profile out-earns the website by roughly two orders of
  magnitude.** 337 customer interactions vs 4 organic clicks over 28 days, at 15
  reviews. Local queries rank 1.0–3.3 (`clases de ingles cerca de mi` 1.5,
  `escuela de ingles` 3.3) while course/content pages sit at 30–80. Discovery
  works locally and fails editorially.
- **Local/neighborhood posts are done.** The six existing ones rank at
  **position 2.4–4.0** and produced **12 impressions in 90 days**. That is a
  market-volume ceiling, not an SEO failure.
- **Course pages are the real long-tail engine** — 327 impressions across 92
  pages with no targeted effort, 27× the entire local footprint. Individual
  *lesson* pages rank; hubs do not. `/en/course/past-tenses/cheat-sheet/` sits at
  **position 10.5** completely unpromoted.
- **The `... for spanish speakers` cluster is the single largest pocket of demand
  on the domain** — `online english classes for spanish speakers` alone is 35
  impressions at position 38.8. PR #225 reworked both course hubs onto the actual
  head terms ("classes"/"lessons"/"online") after PR #220 redirected the cluster
  into hubs written entirely around "courses". **Lesson: a 301 moves authority;
  it does not move relevance. After a consolidation redirect, verify the
  destination page contains the head term of the cluster it inherited.**
- **Positioning that Robert and the data agree on:** the A1–C2 leveled ladder is
  a commodity (competing with Duolingo/BBC/British Council; those hubs sit at
  position 56–83). The differentiator is the **combination** — free + interactive
  + audio on every phrase + written for Spanish-speaker interference +
  scenario-based at executive level. Lead with the master classes (Verb Patterns,
  Executive Pushback, Drive the Decision, Past Tenses), not the levels.
- **GSC returns "No queries" for the cheat-sheet pages** because those queries sit
  below the privacy threshold. Page-level data is the correct lens; query-level
  reads as zero and looks like failure to a cold-start session.

---

## 4. Settled decisions — do not re-litigate

- **No more neighborhood-level local posts.** Market-volume ceiling, see §3.
- **The Guadalajara "gratis" post is cancelled — do not revive without new volume
  data.** The site is already **position 1.0** for `clases de inglés guadalajara`
  and that yields 3 impressions / 1 click per 90 days. The existing
  `clases-ingles-guadalajara.md` post returns zero queries in GSC. A `gratis` +
  geo variant targets a fraction of a fraction.
- **No Verb Patterns cheat sheet.** `diagnosis-table` and `top-traps` already are
  that asset; a third would recreate the exact cannibalization PR #220 cleaned up.
- **The root `/` 307 stays a 307.** It is conditional on `accept-language`, and a
  temporary redirect is correct for locale-adaptive routing because the
  destination varies per user. A 308 would cache one language for everyone.
- **Three `H1 too long` warnings stay** — `/en/services/logistics-english/`,
  `/en/course/past-tenses/`, `/es/curso/tiempos-del-pasado/`. Two-sentence
  editorial headlines ("Feel the story. Don't think about the rules."). Trimming
  them is Robert's brand-voice call, not a mechanical fix. Warnings do not block
  the gate.
- **Voice-assessment agent: deferred by agreement.** The text assessment at
  `/en/assessments/` already gets 63 impressions and 0 clicks. A voice version of
  an unfound product is still unfound. Build cost is low
  (`cushlabs-ai-voice-agent` exists, Vapi, bilingual, with an Executive Coaching
  agent) — but discovery is the bottleneck, not conversion.
- **Internal linking needs no dedicated pass yet.** 123 true orphans sounds bad,
  but cross-referencing against GSC showed only 9 under-linked pages carrying real
  demand (123 impressions total).

---

## 5. Commands worth keeping

Full-site href audit — the 100% standard, run after any link change. This is
broader than `npm run validate:links`, which checks a hardcoded pattern list;
this one resolves every `href` against the built output **and** against
`vercel.json` redirects:

```bash
npm run build
node -e "
const fs=require('fs'),path=require('path');
function walk(d,a=[]){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);e.isDirectory()?walk(p,a):e.name==='index.html'&&a.push(p)}return a}
const files=walk('dist');
const v=JSON.parse(fs.readFileSync('vercel.json','utf8'));
const exact=new Set(v.redirects.map(r=>r.source.replace(/\/$/,'')));
const params=v.redirects.filter(r=>r.source.includes(':')).map(r=>new RegExp('^'+r.source.replace(/:[a-z]+/gi,'[^/]+')+'$'));
const broken=new Map();
for(const f of files){const h=fs.readFileSync(f,'utf8');
 for(const m of h.matchAll(/href=\"(\/[a-z0-9\/\-]*\/)\"/g)){const u=m[1],b=u.replace(/\/$/,'');
  if(fs.existsSync('dist'+u+'index.html'))continue;
  if(exact.has(b)||params.some(re=>re.test(b)))continue;
  broken.set(u,(broken.get(u)||0)+1)}}
console.log('pages:',files.length,'| hard-404 targets:',broken.size);
[...broken.entries()].forEach(([t,n])=>console.log('  404',t,'('+n+' links)'));
"
```

Last clean run: **zero hard-404 targets across 574 built pages, 2026-07-26.**
Re-run before claiming it is clean — Robert holds this to a 100% standard.

Redirect audit — fetches every declared rule in **both** slash forms and follows
each chain to its landing page (PR #232). Last production run: 170/170 clean.

```bash
npm run validate:redirects
```

SEO data (all read-only):

```bash
node scripts/seo/gsc-performance.mjs --days 90 --top 40 --by page
node scripts/seo/gsc-striking-distance.mjs --days 90 --min-impr 5
```

After publishing anything (mandatory per `CLAUDE.md`):

```bash
node scripts/seo/gsc-submit-urls.mjs --sitemap
node scripts/seo/bing-submit.mjs --url REPLACE_ME
node scripts/seo/indexnow-submit.mjs --url REPLACE_ME
```

> GSC's API rejects `groupType: "or"` in `dimensionFilterGroups`. Pull all rows
> and filter in JS instead.

---

## 6. Environment gotchas that have cost real time

- **A Vercel deployment in `BUILDING` state answers 200 to every path**,
  including redirect sources. A preview verification that runs against the
  placeholder passes and means nothing. Prove the origin 404s an unknown path
  before trusting any redirect result.
- **The secrets hook matches command TEXT, not just targets.** A commit message or
  PR body containing "token"/"secret"/"credential" piped through
  `tail`/`head`/`grep` gets blocked even though no secret is touched. Use the
  Write tool + `git commit -F <file>` / `gh pr create --body-file`. Never
  heredocs, never backticks inside a `--body` string — they shell-expand and
  corrupt the PR body (this happened on PR #221).
- **First hook block = switch approach entirely.** Do not try variants.
- **`pkill -f server.js` is unreliable on Git Bash/Windows** — a stale process
  kept serving an old build and made a working fix look broken. Test middleware on
  a fresh ephemeral port instead.
- **A red validator silently disarms the whole gate.** `validate:all` chains with
  `&&`, so one permanently-failing script means nothing downstream ever runs. This
  has happened twice: `validate:seo` (PR #226) and `validate:performance`
  (PR #233). If the gate has never blocked anything, suspect it is broken rather
  than assuming the code is clean.
- Robert's terminal is **PowerShell**. Never hand him bash.

---

## 7. The 2026-07-25 → 08-05 recovery run

Full narrative per session is in `docs/SESSION_LOG.md`. Index of what shipped:

| PR | What |
|---|---|
| #218 | 23 legacy redirects + new "Say or Tell" post EN/es-MX |
| #219 | Removed dead LinkedIn + X from schema.org `sameAs`; added verified Facebook on the Organization entity only |
| #220 | Consolidated the free-courses cannibalization into the hubs |
| #221 | Interview post: 5 complete sample answers; fixed its orphan-link problem |
| #222 | Closed every hard 404 sitewide (8 targets / 25 links across 574 pages) |
| #223 | Repointed EN quiz CTAs off the legacy flow that dead-ended in a 404 |
| #224 | Homepage free-course showcase, both languages |
| #225 | Aligned both course hubs with the query cluster #220 redirected into them |
| #226 | Greened the SEO validator — 20 over-length titles, 3 duplicate H1s |
| #227 | Closed a live exposure: 11 internal `/dev/` pages were publicly indexable |
| #228 | Cheat sheets for Executive Pushback and Drive the Decision, EN + ES |
| #231 | Both slash forms for every redirect rule — 85 of 90 had been inert |
| #232 | `redirect-audit.mjs` — fetches every rule in both forms (`npm run validate:redirects`) |
| #233 | Image optimization: shipped weight 12.42 → 8.58 MB; `validate:performance` fixed |
| #234 | Sentry noise filtering |
| voice-agent #41 | Global spend cap on outbound PSTN calls; durable rate limiting |

---

## 8. Closed on verification, 2026-08-06

Recorded so the reasoning is not lost when someone reads an older note.

- **Instagram publishing capability now exists.** The 2026-07-26 handoff said "no
  capability exists; needs a Business account, two scopes, and a separate
  `scripts/ig/` publish flow." That shipped in `cushlabs-messenger-bot` PRs #193
  and #195 on 2026-08-02 — `scripts/ig/ig-admin.ts`, Reels, Stories, a scheduler,
  and the carousel generator, with multi-account targeting and the business
  account as default.

- **The `camila-demo-test@example.com` bounce was a stale manual test booking, not
  a bug.** It was never an email-provider problem, which is why both a repo-wide
  code search and the Resend dashboard came back empty — **the sender was Google
  Calendar, not Resend.**

  `cushlabs/workers/booking-worker.js:409` creates the consultation event with
  `sendUpdates=all` and `attendees: [{ email }]` — the visitor-supplied address —
  plus two email reminder overrides at 24 h and 1 h (`:429`). So Calendar mails the
  invite and both reminders to whatever address was submitted, and every failure
  bounces back to the organizer.

  The record matches exactly. Event `m231a9ge9qqqecrli6mr94t6p8`, *"AI Strategy
  Consultation - CushLabs: DEMO TEST"*, created 2026-07-26 04:14 UTC on Robert's
  primary calendar, description *"Name: DEMO TEST … Notes: please delete this
  event"* — a deliberate test of the CushLabs booking flow. Bounces landed
  2026-07-26 04:14, then 2026-07-27 00:50 and 00:51 after the event was edited,
  then the 24 h and 1 h reminders fired on 07-29 and 07-30.

  **No live path is mailing real leads to a placeholder domain.** The address was
  the input, not a fallback. Nothing in `ny-eng` was ever involved. The booking
  worker's rate limiting is D1-backed at 5/hour (`RATE_LIMIT_MAX`), so this is not
  an open abuse surface either.

  *Residual:* the event still exists on the primary calendar with
  `status: confirmed`, despite its own note asking for deletion. Harmless — it is
  in the past — but it is the reason reminders kept firing after the test.
