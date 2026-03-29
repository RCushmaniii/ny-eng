# SEO & Marketing Plan — NY English Teacher

> Last updated: 2026-03-29
> Status: Active
> Owner: Claude (execution) + Robert (approval & creative direction)

## Content Roadmap — Long-Tail Blog Posts

Target: Bilingual (EN + ES) posts targeting low-competition, high-intent keywords.
Each post links to a specific service page to drive conversions.

| # | Status | Title (EN) | Target Keyword | Service Page | Notes |
|---|--------|-----------|----------------|-------------|-------|
| 1 | ✅ Written | English for Daily Standups: What to Say | "english phrases for daily standup meetings" | Tech English | Needs hero image: `daily-standup-english.jpg` |
| 2 | ✅ Written | English for Customs & Cross-Border Freight | "english vocabulary for customs freight shipping" | Logistics English | Needs hero image: `customs-freight-english.jpg` |
| 3 | ✅ Written | Ace Your US Company Interview from Mexico | "job interview english american company tips" | Interview Prep | Needs hero image: `us-interview-prep.jpg` |
| 4 | ✅ Written | Slack English: Write Like a Pro, Not a Bot | "professional slack messages in english" | Tech English | Needs hero image: `slack-english-pro.webp` |
| 5 | ⬜ Planned | Present to US Clients on Zoom with Confidence | "present to american clients on zoom" | High-Stakes English | |
| 6 | ⬜ Planned | Pitch Your Startup in English to US VCs | "pitch startup english to investors" | Startup Founders | |
| 7 | ⬜ Planned | Close Deals in English: Technical Sales Phrases | "english technical sales closing deals" | Technical Sales | |
| 8 | ⬜ Planned | Mexico vs. US Work Culture: A Communication Guide | "mexico us cross cultural communication work" | Executive English | Link magnet potential |
| 9 | ⬜ Planned | Performance Reviews in English: A Manager's Guide | "give performance review english phrases" | Executive English | |
| 10 | ⬜ Planned | Ask for a Raise in English: Scripts & Phrases | "ask for raise english phrases" | Executive English | |

## Completed SEO Work

### 2026-03-04 — Foundation Sprint
- [x] Google Search Console API integration (5 scripts)
- [x] IndexNow protocol setup (Bing/Yandex/DuckDuckGo)
- [x] Bing Webmaster Tools verification + API integration
- [x] Sitemap submitted to Google + Bing
- [x] All 53 URLs submitted via IndexNow
- [x] All URLs submitted via Bing Webmaster API
- [x] Old WordPress sitemaps cleaned up from GSC
- [x] CSP fix: contact form (formspree.io)
- [x] CSP fix: quiz submissions (ny-eng.vercel.app)
- [x] Fixed 20 meta descriptions (too long → under 160 chars)
- [x] Fixed 8 blog post titles (too long → under 60 chars)
- [x] Fixed 2 broken category links (5 blog posts)
- [x] Added redirects for broken category URLs
- [x] Internal cross-links added to all 16 EN blog posts
- [x] Internal cross-links added to all 17 ES blog posts
- [x] Structured data verified live (FAQ, Article, Breadcrumb, Organization, etc.)
- [x] SEO automation workflow added to CLAUDE.md

## SEO Automation Checklist (Per New Post)

Claude executes these automatically after every publish:
1. Build, commit, push
2. Wait for Vercel deploy
3. Submit sitemap to Google (`node scripts/seo/gsc-submit-urls.mjs --sitemap`)
4. Submit new URL to Bing (`node scripts/seo/bing-submit.mjs --url <url>`)
5. Submit new URL to IndexNow (`node scripts/seo/indexnow-submit.mjs --url <url>`)
6. Update `astro.config.mjs` blog translation mappings
7. Generate social media content (LinkedIn, Twitter, Facebook)
8. Verify structured data on new page

## Service Pages Without Blog Support

These service pages need blog posts driving traffic to them:

| Service Page | Status | Blog Posts Linking |
|-------------|--------|-------------------|
| `/en/services/technical-sales-english/` | ⬜ No blog support | Post #7 planned |
| `/en/services/logistics-english/` | ✅ Post #2 written | Post #2 |
| `/en/services/interview-prep/` | ✅ Post #3 written | Post #3 |
| `/en/services/startup-founders/` | ⬜ Weak support | Post #6 planned |
| `/en/services/medical-english/` | ⬜ No blog support | Need to plan |
| `/en/services/public-speaking-english/` | ⬜ No blog support | Need to plan |

## Bing API Credentials

- **API Key**: `756a56664bea4d73b3486fd0d44b5fc8`
- **Submit URL**: `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey=<key>`
- **Script**: `scripts/seo/bing-submit.mjs`

## Backlink Content Strategy

Linkable asset posts designed to attract backlinks from ESL blogs, nearshoring publications, HR platforms, and business media.

| # | Status | Title (EN) | Backlink Target | Approach |
|---|--------|-----------|-----------------|----------|
| B1 | ⬜ NotebookLM | The State of English in Mexico's Tech Industry: 2026 Report | HR blogs, nearshoring pubs, Mexican tech media | Needs real data: EF EPI, CSOFT, nearshoring stats |
| B2 | ⬜ Planned | Mexico vs. US Workplace Communication: The Complete Guide | Cross-cultural training sites, relocation blogs | Same as Post #8 — expand into definitive reference |
| B3 | ✅ Written | 50 English Words Mexican Professionals Mispronounce | ESL blogs, language learning sites, Reddit | Reference content — shareable, bookmarkable |
| B4 | ⬜ NotebookLM | The Nearshoring English Gap: Why $12B Gets Lost in Translation | Business media, nearshoring consultancies | Needs real contract loss figures, industry reports |
| B5 | ⬜ NotebookLM | English Proficiency by Industry in Mexico: Sector Rankings | Industry associations, talent acquisition blogs | Needs benchmarking data: EF EPI, IMCO, Deloitte |
| B6 | ⬜ Planned | The Executive English Assessment Framework (Free Tool) | HR departments, executive coaching blogs | Interactive framework — pairs with quiz system |

### NotebookLM Research Sources (for B1, B4, B5)

Feed these into NotebookLM to generate unique data insights:
- EF English Proficiency Index (annual reports, Mexico section)
- Nearshore Americas industry reports
- Deloitte/KPMG nearshoring studies (Mexico talent landscape)
- IMCO labor market reports
- CSOFT International language services reports
- Manpower Group Mexico talent shortage surveys
- Mexican Association of HR Directors (AMEDIRH) data

## Completed SEO Work — 2026-03-29

- [x] Hardened blog SEO validator (requires seo.title when title>60, seo.description when excerpt>160)
- [x] Fixed 22 indexable pages not in sitemap (added noindex to meme portfolio role pages)
- [x] Fixed ES blog index description (47 chars → 134 chars)
- [x] Fixed ES negotiation script description (108 chars → 152 chars)
- [x] Removed stale test-widget.html
- [x] Fixed Python audit script Unicode crash on Windows
- [x] Published B3: 50 English Words Mexican Professionals Mispronounce (EN + ES)

## Future Initiatives

- [ ] Social media API integration (LinkedIn, Twitter/X, Facebook)
- [ ] Automated social media content generation on publish
- [ ] Bing Webmaster performance data pull script
- [ ] Google Business Profile optimization (if applicable)
- [x] Backlink content strategy (see above)
- [ ] Backlink outreach execution (guest posts, HARO, broken link building)
- [ ] Microsoft Clarity integration (free heatmaps/session recording)
- [ ] Template this SEO solution for other CushLabs repos
