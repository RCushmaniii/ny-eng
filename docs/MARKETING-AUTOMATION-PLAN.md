# Marketing Automation Workflow — Operational Plan

> Created: 2026-03-07
> Status: Planning
> Goal: End-to-end automated content marketing from article creation to indexed, distributed, tracked content

---

## Current State (What Works Today)

| Step | Status | Tool |
|------|--------|------|
| Write blog post (EN + ES) | Manual via Claude | Claude Code |
| Build & deploy | Automated | Vercel (auto-deploys on push) |
| Submit sitemap to Google | Script exists | `gsc-submit-urls.mjs` |
| Submit to Bing | Script exists | `bing-submit.mjs` |
| Submit to IndexNow (Bing/Yandex/DDG) | Script exists | `indexnow-submit.mjs` |
| Check Google index status | Script exists | `gsc-index-status.mjs` |
| Pull GSC performance data | Script exists | `gsc-performance.mjs` |
| Generate social media content | Manual markdown files | Claude writes to `content-marketing/` |
| Post to social media | Fully manual | Robert copies text to each platform |
| Request Google indexing | Fully manual | GSC web UI, 10-20/day |
| Track what's indexed vs not | Manual spot checks | `gsc-index-status.mjs` |
| Internal cross-linking | Manual per post | Claude edits related posts |

---

## Target State (Fully Operational Workflow)

### Phase 1: Fix the Google Indexing Gap (Next Session)

**Problem:** 30 of 41 blog posts aren't indexed by Google. No API access to request indexing.

**Actions:**
1. Grant Owner-level GSC access to service account `seo-api-access@seo-automation-489217.iam.gserviceaccount.com`
   - Robert does this once in GSC → Settings → Users and permissions
2. Enable the Google Indexing API in the Google Cloud project `seo-automation-489217`
   - Claude does this via `gcloud` CLI or Cloud Console API
3. Write `scripts/seo/gsc-request-indexing.mjs` — batch submit URLs for indexing
4. Run against all 30 unindexed URLs
5. Add to the per-publish automation checklist

**Success metric:** 20+ blog posts indexed within 2 weeks.

---

### Phase 2: Single-Command Publish Workflow

**Problem:** After writing a post, Claude runs 5-6 separate scripts and manual steps. Should be one command.

**Build:** `scripts/publish.mjs` — a single orchestrator that runs after `git push`:

```
node scripts/publish.mjs --slug slack-english-write-like-a-pro --lang en,es
```

**What it does (in order):**
1. Waits for Vercel deploy to complete (polls Vercel API)
2. Submits sitemap to Google
3. Submits new URLs to Bing
4. Submits new URLs to IndexNow
5. Requests Google indexing (Phase 1 script)
6. Verifies structured data is present (fetch page, check for JSON-LD)
7. Outputs a summary of what succeeded/failed

**Dependencies:** Vercel MCP or Vercel API token for deploy status polling.

---

### Phase 3: Index Health Monitoring

**Problem:** No visibility into which pages are indexed, which dropped, or when things change. We check manually.

**Build:** `scripts/seo/index-health-report.mjs`

**What it does:**
1. Checks index status of ALL site URLs (not just blog) via URL Inspection API
2. Compares against previous run (stored in `scripts/seo/.index-cache.json`)
3. Flags:
   - Newly indexed pages (wins)
   - Pages that dropped out of index (problems)
   - Pages stuck in "discovered but not indexed" for 14+ days
   - Pages Google crawled but chose not to index (content quality signal)
4. Outputs a summary report

**Run cadence:** Weekly (manual or scheduled). Could later be a GitHub Action on a cron.

---

### Phase 4: Performance Dashboard

**Problem:** GSC performance data exists but isn't tracked over time. No way to see trends, identify winning content, or spot drops.

**Build:** `scripts/seo/weekly-report.mjs`

**What it does:**
1. Pulls last 7 days of GSC data (clicks, impressions, CTR, avg position)
2. Pulls last 7 days of Bing data (if Bing API supports it)
3. Compares to previous 7 days
4. Groups by:
   - Top performing pages (by clicks)
   - Biggest movers (position changes)
   - New keywords appearing
   - Pages with high impressions but low CTR (title/description optimization opportunities)
5. Saves to `reports/weekly/YYYY-MM-DD.md`
6. Outputs summary to terminal

**Stretch:** Push weekly summary to a Slack channel or email via Resend.

---

### Phase 5: Social Media Semi-Automation

**Problem:** Social media content is generated as markdown files but Robert has to manually copy-paste to each platform. This creates friction and posts don't go out consistently.

**Approach — phased, not all-at-once:**

**5a. LinkedIn (highest value, do first)**
- LinkedIn API requires app approval and OAuth — complex but doable
- Alternative: Use a scheduling tool API (Buffer, Typefully, or similar) that supports LinkedIn
- Claude generates the post content, pushes to scheduling tool, Robert approves in the tool's UI

**5b. Twitter/X**
- Twitter API v2 free tier allows posting
- Could automate directly from Claude Code via API
- Thread creation is more complex but possible

**5c. Facebook**
- Facebook Pages API requires app review
- Lowest priority — audience overlap with LinkedIn is high

**Recommended tool:** Typefully or Buffer as an intermediary. Claude pushes draft posts to a scheduling tool via API. Robert reviews and approves in one place. Avoids dealing with each platform's OAuth nightmare individually.

**Not recommended:** Full direct API integration with each platform — too much maintenance for one person's content operation.

---

### Phase 6: Content Pipeline Intelligence

**Problem:** No data-driven way to decide what to write next. Currently using gut feel and keyword research.

**Build:** `scripts/seo/content-opportunities.mjs`

**What it does:**
1. Pulls GSC query data — find keywords the site is getting impressions for but NOT ranking well (position 10-30)
2. Groups queries by topic cluster
3. Cross-references with existing blog posts
4. Identifies:
   - Keywords with no matching blog post (new content opportunities)
   - Keywords where existing content ranks poorly (optimization opportunities)
   - Keywords where you rank on page 2 (close to breaking through)
5. Outputs prioritized list of content ideas

**This closes the loop:** Write content → Publish → Track performance → Find new opportunities → Write more content.

---

## Priority Order

| Phase | Effort | Impact | When |
|-------|--------|--------|------|
| Phase 1: Google Indexing API | Low | High | Next session |
| Phase 2: Single publish command | Medium | High | After Phase 1 |
| Phase 3: Index health monitoring | Medium | Medium | Week 2 |
| Phase 4: Performance dashboard | Medium | High | Week 2-3 |
| Phase 5: Social media | High | Medium | Week 3-4 |
| Phase 6: Content intelligence | Medium | High | Week 4+ |

---

## Architecture Principles

1. **Scripts, not services.** Everything runs as Node.js scripts from the repo. No separate infrastructure to maintain. No databases beyond local JSON cache files.

2. **Incremental, not big-bang.** Each phase is independently useful. Phase 1 works without Phase 2. Phase 4 works without Phase 5.

3. **Claude executes, Robert approves.** Social media is the only step that needs human review before publishing. Everything else runs autonomously.

4. **Data stays in the repo.** Reports, cache files, and logs live in gitignored directories within the project. No external dashboards to maintain.

5. **Vercel-native.** No new hosting infrastructure. If we need scheduled tasks later, use Vercel Cron Functions or GitHub Actions.

---

## Credentials & Access Needed

| What | Status | Who |
|------|--------|-----|
| GSC service account (Full access) | Done | Already configured |
| GSC service account (Owner access) | Needed for Phase 1 | Robert grants in GSC UI |
| Google Indexing API enabled | Needed for Phase 1 | Claude enables in Cloud Console |
| Vercel API token | Needed for Phase 2 | Robert generates in Vercel dashboard |
| Buffer/Typefully API key | Needed for Phase 5 | Robert signs up and generates |
| Twitter API key (free tier) | Optional for Phase 5b | Robert applies at developer.twitter.com |

---

## What This Looks Like When It's Done

**Robert's workflow for a new blog post:**

1. Tells Claude "write the next post on the roadmap"
2. Claude writes EN + ES, adds images, cross-links, commits, pushes
3. Claude runs `node scripts/publish.mjs` — handles all SEO submission automatically
4. Claude generates social media drafts and pushes to scheduling tool
5. Robert reviews social posts in Buffer/Typefully and clicks "approve"
6. Done. Total Robert involvement: ~5 minutes of review.

**Weekly:**
- Claude runs the weekly report, surfaces wins and problems
- If pages dropped from index or new keyword opportunities appear, Claude flags them
- Robert decides whether to action or ignore

**Monthly:**
- Claude runs content intelligence script
- Recommends next 3-5 blog topics based on actual search data
- Updates SEO-MARKETING-PLAN.md with data-backed priorities
