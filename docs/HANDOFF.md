# Handoff — ny-eng and related repos

> **Written 2026-07-26.** Give this to a fresh context as the pickup point.
> Everything below was verified against live systems, not inferred. Where a
> conclusion is uncertain, it says so.

---

## 1. The one-paragraph situation

Organic traffic on nyenglishteacher.com is very low — **19 clicks / 1,562
impressions on Google in the 90 days to 2026-07-25**. The cause was diagnosed
this session and is not "the content isn't working." A 2025 rebuild changed the
URL structure to `/en/` `/es/` and shipped **no redirects** for the old
`/eng-lesson/`, `/toefl/`, and unprefixed `/blog/` paths. Bing impressions fell
from ~290/day (Mar–May 2025) to ~15/day by Jul 2025 and never recovered. Those
URLs were still 404ing 13 months later. That leak is now closed, along with a
keyword-cannibalization problem and every hard 404 on the site.

**The remaining bottleneck is domain authority, not on-page SEO.** On-page is now
in good shape. Further gains come from links, distribution, and picking queries
the domain can realistically win.

---

## 2. What shipped 2026-07-25 → 26 (all merged, deployed, verified live)

| PR | What |
|---|---|
| ny-eng #218 | 23 legacy redirects (each to a genuinely equivalent page, not the homepage) + new "Say or Tell" post EN/es-MX |
| ny-eng #219 | Removed dead LinkedIn + X from schema.org `sameAs`; added verified Facebook on the Organization entity only |
| ny-eng #220 | Consolidated the free-courses cannibalization into the hubs |
| ny-eng #221 | Interview post: added 5 complete sample answers; fixed its orphan-link problem |
| ny-eng #222 | Closed **every hard 404 sitewide** (8 targets / 25 links across 574 pages) |
| ny-eng #223 | Repointed EN quiz CTAs off the legacy flow that dead-ended in a 404 |
| ny-eng #224 | Homepage free-course showcase, both languages |
| voice-agent #41 | Global spend cap on outbound PSTN calls; durable rate limiting |

**Current href status: zero hard-404 targets across all 574 built pages.** Robert
holds this to a 100% standard — re-run the audit in §6 before claiming it's clean.

---

## 3. Hard-won facts that are easy to get wrong

Three false conclusions were reached this session by reasoning from repo files
instead of live systems. Do not repeat them.

1. **`voice.cushlabs.ai` does NOT run on Render.** The whole stack moved to a
   self-hosted Hetzner VPS (`178.156.192.117`) in March 2026 — repo
   `cushlabs-prod-server`, Docker Compose behind Caddy. The old `render.yaml` was
   deleted this session because it produced a false "Redis is misconfigured"
   conclusion. Env lives in an env file per service **on the box**, not in any
   dashboard. Deploy is **manual** — there is no Watchtower:
   ```
   ssh deploy@178.156.192.117
   cd ~/apps/cushlabs-prod-server
   docker compose pull voice-agent && docker compose up -d voice-agent
   ```
   Claude has working SSH access. Verify there; never guess from repo config.

2. **`cushlabs-messenger-bot` CAN publish to Facebook Pages.** A search scoped to
   `src/` produced a false "it can't" conclusion. The publishing layer lives in
   `scripts/demo-factory/`, `scripts/fb-page/`, and `fb-content/`. `src/` is the
   bot runtime only. See `docs/EXTERNAL-FOOTPRINT.md` §6 for the full CLI surface.

3. **Upstash Redis IS working in production** (live set/get/del round-trip inside
   the running container, 2026-07-25). `REDIS_URL` also appears in the container
   env as an unused leftover — ignore it.

**General rule this session earned:** verify against the running system, and
search the whole repo before concluding a capability is absent.

---

## 4. Strategy — what the data actually says

Pulled from GSC/Bing this session. Use it; don't re-derive it.

- **Local/neighborhood posts are done.** The six existing ones rank at
  **position 2.4–4.0** and produced **12 impressions in 90 days**. That is a
  market-volume ceiling, not an SEO failure. Robert agreed to stop writing
  neighborhood posts. **One exception approved:** a single Spanish city-level
  post targeting *"clases de inglés gratis en Guadalajara"* pointing at the
  course hub — city-level has volume where neighborhood does not.
- **Course pages are the real long-tail engine** — 327 impressions across 92
  pages with no targeted effort, 27× the entire local footprint. Individual
  *lesson* pages rank; hubs do not. `/en/course/past-tenses/cheat-sheet/` sits at
  **position 10.5** completely unpromoted. Queries are below GSC's privacy
  threshold, i.e. a long tail of many tiny queries.
- **Positioning that Robert and the data agree on:** the A1–C2 leveled ladder is
  a commodity (competing with Duolingo/BBC/British Council; those hubs sit at
  position 56–83). The differentiator is the **combination** — free + interactive
  + audio on every phrase + written for Spanish-speaker interference +
  scenario-based at executive level. Lead with the master classes (Verb Patterns,
  Executive Pushback, Drive the Decision, Past Tenses), not the levels.
- **The voice-assessment agent idea is deferred, by agreement.** The text
  assessment at `/en/assessments/` already gets 63 impressions and 0 clicks. A
  voice version of an unfound product is still unfound. Infrastructure already
  exists (`cushlabs-ai-voice-agent`, Vapi, bilingual, with an Executive Coaching
  agent), so build cost is low — but discovery is the bottleneck, not conversion.

---

## 5. Next actions, in priority order

> **Updated 2026-07-26 (later session).** Item 1 below was *cancelled* after
> checking it against live GSC. See §9 for what replaced it.

1. ~~**Spanish city-level post** — *"clases de inglés gratis en Guadalajara"*.~~
   **CANCELLED.** The site is already **position 1.0** for
   `clases de inglés guadalajara` and that produced **3 impressions / 1 click in
   90 days**. The existing `clases-ingles-guadalajara.md` post returns **zero
   queries** in GSC. Ranking #1 in that market yields roughly one click per
   quarter, so a `gratis` + geo variant targets a fraction of a fraction. Robert
   agreed to drop it and spend the time on the course hubs instead. **Do not
   revive this without new volume data.**
2. **Granular course entry points** — cheat sheets and "X vs Y" pages for the
   *differentiated* courses, replicating what `/en/course/past-tenses/cheat-sheet/`
   is already doing at position 10.5 unpromoted.
   **Cheat-sheet layer DONE 2026-07-26 (PR #228)** — Executive Pushback and
   Drive the Decision each got one, EN + ES, linked from their hubs. Verb
   Patterns was skipped on purpose: `diagnosis-table` and `top-traps` already
   are that asset, and a third would cannibalize. **Still open here:** the
   "X vs Y" comparison pages, which Past Tenses has four of
   (`knew-vs-found-out`, `there-was-vs-there-has-been`, `top-10-confused-pairs`,
   `story-openers`) and no other course has any of.
3. **Re-check GSC around 2026-08-20** (3–4 weeks post-change). Watch for: course
   hubs moving off 61.6/57.4; the interview post moving off 19.6; first non-zero
   clicks on "business english interview"; legacy-redirect recovery in Bing.
4. **`cushlabs-messenger-bot/docs/META_GRAPH_API.md`** still says *"Status: Not
   started"* for scripts that shipped months ago. Rewrite when next in that repo.
5. **Instagram** — tabled by Robert. No capability exists; needs a Business
   account linked to the CushLabs page, two scopes, and a separate `scripts/ig/`
   publish flow (two-step container + public image URL, no native scheduling).
6. **Bounce email** — something sent a real message to
   `camila-demo-test@example.com` (reserved placeholder domain). Unexamined.
   Harmless if it's demo seed data; a bug if it's a live path with a fallback
   recipient.

---

## 6. Commands worth keeping

Full-site href audit (the 100% standard) — run after any link change:

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

SEO data (all read-only):

```bash
node scripts/seo/gsc-performance.mjs --days 90 --top 40 --by page
node scripts/seo/gsc-striking-distance.mjs --days 90 --min-impr 5
```

After publishing anything (mandatory per CLAUDE.md):

```bash
node scripts/seo/gsc-submit-urls.mjs --sitemap
node scripts/seo/bing-submit.mjs --url <url>
node scripts/seo/indexnow-submit.mjs --url <url>
```

> GSC's API rejects `groupType: "or"` in `dimensionFilterGroups`. Pull all rows
> and filter in JS instead.

---

## 7. Environment gotchas that cost time

- **The secrets hook matches command TEXT, not just targets.** A commit message
  or PR body containing "token"/"secret"/"credential" piped through
  `tail`/`head`/`grep` gets blocked even though no secret is touched. Use the
  Write tool + `git commit -F <file>` / `gh pr create --body-file`. Never
  heredocs, never backticks inside a `--body` string (they shell-expand and
  corrupt the PR body — this happened on #221).
- **First hook block = switch approach entirely.** Do not try variants.
- **`pkill -f server.js` is unreliable on Git Bash/Windows** — a stale process
  kept serving an old build and made a working fix look broken. Test middleware
  on a fresh ephemeral port instead.
- Robert's terminal is **PowerShell**. Never hand him bash.

---

## 8. Open decisions for Robert

- **Outbound calling** (`voice.cushlabs.ai/realestate`, the "David" agent) —
  pre-existing, not added this session. PR #41 only *capped* it at 50 calls/day.
  Robert flagged he may not want outbound at all. To disable: set
  `OUTBOUND_CALLS_PER_DAY=0` in the env file on the box and re-up the container,
  or gate the route behind a feature flag.
- **Vapi billing** — Robert confirmed settings updated and payment method changed
  2026-07-25. Whether auto-recharge is on/off was not re-verified afterward; if
  off, the credit balance is a natural spend ceiling.

---

## 9. Session addendum — 2026-07-26 (later)

Two PRs, both merged and live.

| PR | What |
|---|---|
| #225 | Aligned both course hubs with the query cluster PR #220 redirected into them |
| #226 | Greened the SEO validator — 20 over-length titles, 3 duplicate H1s |

**#225 — the consolidation was only half-done.** PR #220 correctly 301'd the
415-impression free-courses cluster into `/en/courses/` and `/es/cursos/`, but
those hubs were written entirely around the word *"courses"* while the cluster
actually searches for **"classes"** and **"lessons"**, delivered **"online"**:

```
online english classes for spanish speakers        35 impr  pos 38.8
free online english courses for spanish speakers   13 impr  pos 28.2
learn english online for spanish speakers          12 impr  pos 38.4
free english lessons for spanish speakers           8 impr  pos 32.3
```

On the EN hub `"online"` appeared **twice** and `"classes"` **once**. Titles,
H1s, meta descriptions, hero copy, first FAQ, and `ItemList` schema were reworked
on both hubs; EN term coverage went `online` 2→25, `classes` 1→12. The ES hub
targets its own separate cluster (`clases de ingles` pos 72.3,
`cursos de inglés para hispanohablantes` pos 67), not a translation of the EN one.

**Lesson:** after a consolidation redirect, verify the *destination* page
actually contains the head term of the cluster it inherited. A 301 moves
authority; it does not move relevance.

**#226 — the pre-deploy gate was not gating.** `npm run validate:seo` had been
red, so `validate:all` passed nothing. 20 titles were over 60 chars (the
` | NY English Teacher` suffix costs 20; `&quot;` entities cost 6 each and pushed
two pages to 82–83), and three ES past-tenses pages had a second `<h1>` in their
print-only header where the EN counterparts correctly use `<h2>`. Now
**204/204 passing, 0 errors.**

**Still open (deliberately):** three `H1 too long` *warnings* on
`/en/services/logistics-english/`, `/en/course/past-tenses/`, and
`/es/curso/tiempos-del-pasado/`. These are two-sentence editorial headlines
("Feel the story. Don't think about the rules."). Trimming them is a brand-voice
decision for Robert, not a mechanical fix. Warnings do not block the gate.

**Post-deploy submissions done for #225:** GSC sitemap resubmitted; both hub URLs
accepted by IndexNow (Bing, Yandex, DuckDuckGo, Seznam, Naver).

**Watch at the 2026-08-20 GSC re-check** (in addition to §5 item 3): whether the
hubs move off position 38.5 / 57–61 on the `... for spanish speakers` cluster.
That is the single largest pocket of demand on the domain.

### Later the same day — PRs #227 and #228

**#227 — internal `/dev/` docs were publicly indexable.** Eleven engineering
pages (`/dev/dashboard/`, `/dev/docs/deployment-checklist/`, and nine more)
served HTTP 200 on the production business site with no `noindex`, no canonical,
and nothing in `robots.txt`. A client or technical reviewer could read the
deployment checklist on the domain we sell coaching from. Caught before damage —
the Inspection API reported them as *"unknown to Google, crawled: never."*

Root cause was structural: `MarkdownLayout.astro` and `DocsLayout.astro` emit no
robots meta at all, and `dev/dashboard.astro` builds its own `<head>`. All three
now emit `noindex,nofollow`. **Not** a `robots.txt` Disallow — that would stop
Google reading the noindex, which is the opposite of the goal.

Also added three reusable audit scripts: `scripts/seo/index-coverage-audit.mjs`
(built pages vs sitemap, plus noindex/canonical/hreflang coverage — this is what
found the exposure), `internal-link-audit.mjs`, and `link-vs-demand.mjs`.

**#228 — cheat sheets for the two master classes that lacked one.** Verified the
premise first: `/en/course/past-tenses/cheat-sheet/` really is 17 impressions at
position 10.5, and `/es/curso/tiempos-del-pasado/frases-iniciales/` is 27 at
11.4. Note the per-query GSC call returns *"No queries"* for these — the queries
sit below the privacy threshold. Use page-level data, not query-level, to
evaluate these pages.

Built EN + ES for Executive Pushback and Drive the Decision, linked from all
four hubs. Drive the Decision's twelve rewrites render straight from `drillItems`
so the page cannot drift from the drill. The ES Drive page keeps drill prompts
and responses in English on purpose — English is what is being practiced.

**Reviewed and left alone, with reasons:**
- The root `/` 307 to `/en/` or `/es/` is conditional on `accept-language`. A
  temporary redirect is correct for locale-adaptive routing because the
  destination varies by user; a 308 would cache one language for everyone.
- Three `H1 too long` warnings (`/en/services/logistics-english/`,
  `/en/course/past-tenses/`, `/es/curso/tiempos-del-pasado/`) are two-sentence
  editorial headlines. Trimming them is Robert's brand-voice call, not a
  mechanical fix. Warnings do not block the gate.
- Internal linking: 123 true orphans sounds bad, but cross-referencing against
  GSC showed only 9 under-linked pages carrying real demand (123 impressions
  total). Small. Not worth a dedicated pass yet.
