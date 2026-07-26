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

1. **Spanish city-level post** — *"clases de inglés gratis en Guadalajara"* →
   points at `/es/cursos/`. Approved, not started.
2. **Granular course entry points** — cheat sheets and "X vs Y" pages for the
   *differentiated* courses, replicating what `/en/course/past-tenses/cheat-sheet/`
   is already doing at position 10.5 unpromoted.
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
