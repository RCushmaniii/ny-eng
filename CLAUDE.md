# NY English Teacher - Claude Code Guidelines

## Project Overview

Professional English coaching and training platform for Robert Cushman's "NY English Teacher" business. A lead generation and conversion platform targeting executive professionals, tech workers, startup founders, and corporate clients.

**Live Site**: https://www.nyenglishteacher.com

## Spanish Content — Mexican Professional Spanish ONLY (CRITICAL)

**All Spanish content on this site must be Mexican Professional Spanish** (`es-MX`). The audience is Mexico-based corporate professionals. Iberian/Spain Spanish reads as foreign and damages credibility — flagged by a native Mexican reviewer (Julio Aldana, 2026-05-03) on the "registro" blog post.

**When translating EN → ES, the prompt must explicitly say "Mexican Professional Spanish"** — never just "Spanish" or "Latin American Spanish" (still ambiguous).

**Forbidden Iberian markers — never appear in our ES content:**
- `vosotros` / `vuestro` / vosotros conjugations (`habláis`, `tenéis`, `sois`, `vosotras`) — Mexico uses `ustedes` for ALL plural; possessive `su / sus`. Never include `vosotros` even as a contrastive example — Mexicans don't think of it as part of their language.
- `vale` (as "okay") → use `está bien`, `de acuerdo`, `ok`
- `coger` (to take/grab) — vulgar in Mexico → use `tomar`, `agarrar`, `recoger`
- `móvil` → `celular` · `ordenador` → `computadora` · `coche` → `carro`/`auto` · `conducir` → `manejar` · `aparcar` → `estacionar`
- `jersey` → `suéter` · `gafas` → `lentes` · `patata` → `papa` · `zumo` → `jugo` · `ascensor` → `elevador` · `piso` (apartment) → `departamento`
- Spain slang: `tío/tía` (as friend), `guay`, `molar`, `flipar`, `chaval` — none of this in professional MX
- `Vd.` abbreviation → Mexico writes `Ud.` if abbreviating; spelling out `usted` is more common in formal copy
- `leísmo` (using `le` for direct objects of people) — Mexican standard is `lo/la` as direct object, `le` only as indirect object

**Mexican-preferred phrasings:**
- "Right now": `ahora mismo` (formal), `ahorita` (slightly more colloquial / common in MX speech)
- "Approximately": `aproximadamente`, `como` — Spain often uses `unos/unas`
- "Take a look": `revisar`, `echar un ojo`, `ver` — Spain's `echar un vistazo` is understood but less natural in MX professional copy
- Diminutives (`ahorita`, `un momentito`) are warmer in MX professional speech — fine in casual register, avoid in C-suite copy unless tone calls for warmth

**When auditing existing ES content for Iberian drift**, grep for: `vosotros`, `vosotras`, `vuestr`, `vale\.`, `coger`, `móvil`, `ordenador`, `coche`, `aparcar`, `habéis`, `sois`, `tenéis`, `gafas`, `jersey`, `patata`, `zumo`, `tío\b`. Any hit → fix on the spot.

The site's hreflang is already `es-MX` (`src/lib/i18n.ts` `getHreflangCode`). The variant is committed at the technical layer; the content layer must match.

## Tech Stack

- **Framework**: Astro 5.5 with React 19 for interactive components
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript 5.9 (strict)
- **Database**: Neon PostgreSQL (via Vercel integration)
- **APIs**: Google Calendar, Formspree, Resend
- **Hosting**: Vercel (static + serverless functions) + Cloudflare Workers (booking API)
- **Content**: Markdown via Astro Content Collections

## Directory Structure

```
src/
├── pages/              # File-based routing
│   ├── en/             # English pages
│   └── es/             # Spanish pages (mirror structure)
├── components/
│   ├── sections/       # Hero, Features, Testimonials, etc.
│   ├── forms/          # Contact form (Formspree)
│   ├── booking/        # 3-step booking wizard
│   ├── chat/           # AI chatbot embed
│   └── seo/            # Structured data components
├── layouts/
│   └── Base.astro      # Master layout with i18n, SEO, header/footer
├── data/               # TypeScript data files
│   ├── services.ts     # Service definitions
│   ├── quiz/           # Quiz config, scoring, questions
│   ├── header/         # Navigation (en.ts, es.ts)
│   └── footer/         # Footer links
├── content/            # Astro content collections
│   ├── blog/en/        # English blog posts (markdown)
│   ├── blog/es/        # Spanish blog posts
│   └── legal/          # Privacy, terms
├── lib/                # Utilities
│   ├── i18n.ts         # Bilingual routing system
│   ├── db.ts           # Quiz submission database
│   └── neon.ts         # Neon PostgreSQL client
├── types/              # TypeScript definitions
└── styles/             # Global CSS
```

## Key Patterns

### Internationalization (i18n)

All pages must define `lang` and `tkey` for hreflang generation:

```astro
---
const lang = "en";
const tkey = "home"; // Must match TKey type in src/lib/i18n.ts
---
<Base {lang} {tkey} title="..." description="...">
```

The `routeFor` object in `src/lib/i18n.ts` maps each `TKey` to its EN/ES paths.

### Page Structure

Every page uses `Base.astro` layout which handles:
- HTML head (meta, OG tags, hreflang)
- Header and Footer components
- JSON-LD structured data

### Interactive Components

React components use `client:load` or `client:visible` directives:
- `HomepageFAQ.tsx` - FAQ accordion
- `QuizReport.tsx` - Quiz results display
- `FreeResourcesHub.tsx` - Filterable resource gallery

### Data Files

Structured data lives in `src/data/`:
- Services, testimonials, FAQs as TypeScript arrays
- Language-specific variants use separate files (en.ts, es.ts)

### Content Collections

Blog posts in `src/content/blog/{en,es}/` with frontmatter:
```yaml
---
title: "Post Title"
excerpt: "Brief description"
publishDate: "2025-01-15"
categories: ["business-english"]
translations:
  en: "/en/blog/post-slug/"
  es: "/es/blog/post-slug-es/"
---
```

## Development Commands

```bash
npm run dev           # Start dev server (port 4321)
npm run build         # Production build
npm run build:check   # Build with type checking
npm run preview       # Preview production build
npm run validate:all  # Run SEO validators
```

## Environment Variables

Required in `.env`:
```
POSTGRES_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REFRESH_TOKEN=
GOOGLE_CALENDAR_ID=
RESEND_API_KEY=
RESEND_FROM_EMAIL=
SITE_URL=
```

## Important Files

| File | Purpose |
|------|---------|
| `src/lib/i18n.ts` | Bilingual routing, TKey definitions |
| `src/layouts/Base.astro` | Master layout with SEO |
| `src/data/quiz/` | Quiz configuration and scoring |
| `cloudflare-worker.js` | Booking API (Google Calendar) |
| `astro.config.mjs` | Astro configuration, sitemap |
| `tailwind.config.mjs` | Tailwind theme customization |

## Adding New Pages

1. Create page in `src/pages/en/` and `src/pages/es/`
2. Add TKey to `src/lib/i18n.ts` type definition
3. Add routes to `routeFor.en` and `routeFor.es` objects
4. Use `Base.astro` layout with proper `lang` and `tkey`

## Quiz System

Quiz flow: `/en/quiz/[quizType]/` → questions → report

- Quiz types defined in `src/data/quiz/types.ts`
- Scoring logic in `src/data/quiz/scoring.ts`
- Results stored in Neon PostgreSQL via `src/lib/db.ts`

## Booking System

3-step wizard at `/en/book/`:
1. Date selection (fetches slots from Cloudflare Worker)
2. Time slot selection
3. Contact info + confirmation

Cloudflare Worker handles Google Calendar integration.

## SEO Checklist

- Every page needs unique title and description
- Use `tkey` for automatic hreflang generation
- Blog posts need `translations` in frontmatter
- JSON-LD components in `src/components/seo/`

## SEO & Marketing Automation (MANDATORY)

Claude MUST execute these steps automatically. Never ask Robert to run scripts or do manual SEO work.

### After Publishing Any New Content (Blog Post, Page, etc.)

1. **Build & Deploy**: Build, commit, push — wait for Vercel deploy
2. **Submit to Google**: Run `node scripts/seo/gsc-submit-urls.mjs --sitemap` to resubmit sitemap
3. **Submit to Bing (API)**: Run `node scripts/seo/bing-submit.mjs --url <new-url>` for direct Bing submission
4. **Submit to IndexNow**: Run `node scripts/seo/indexnow-submit.mjs --url <new-url>` for Bing/Yandex/DuckDuckGo
4. **Update sitemap config**: If new blog post, add EN↔ES translation mapping to `astro.config.mjs` `blogTranslations` object
5. **Verify structured data**: Confirm JSON-LD schemas are present (Article, BreadcrumbList, FAQ if applicable)

### After Publishing a New Blog Post (Additional Steps)

6. **Generate social media content** for the new post:
   - **Twitter/X thread**: 3-5 tweets, hook + key points + CTA, use relevant hashtags
   - **Facebook post**: Conversational tone, 1-2 paragraphs with link
   - Output these in a markdown file at `content-marketing/<slug>-social.md` for Robert to review and post (until social media APIs are integrated)
7. **Update internal links**: Check if the new post should be linked from existing related posts or pages

### CSP Maintenance

When adding ANY new external service or API endpoint that the browser calls via fetch/XHR:
- Add the domain to `connect-src` in BOTH `vercel.json` AND `public/.htaccess`
- Current allowed domains: `formspree.io`, `plain-mode-42c4.rcushmaniii.workers.dev`, `ny-ai-chatbot.vercel.app`, `ny-eng-api.netlify.app`, `ny-eng.vercel.app`, `www.google-analytics.com`

### SEO Scripts Reference

| Script | Purpose |
|--------|---------|
| `scripts/seo/gsc-client.mjs` | Shared GSC auth client |
| `scripts/seo/gsc-performance.mjs` | Pull search performance data (clicks, impressions, CTR, position) |
| `scripts/seo/gsc-submit-urls.mjs` | Submit sitemap or individual URLs to Google |
| `scripts/seo/gsc-index-status.mjs` | Check URL index status via Inspection API |
| `scripts/seo/indexnow-submit.mjs` | Submit URLs to Bing/Yandex/DuckDuckGo via IndexNow |
| `scripts/seo/bing-submit.mjs` | Submit URLs directly to Bing Webmaster Tools API |

### SEO Credentials

- **Google Cloud Project**: `seo-automation-489217` (project number: 645749861804)
- **Service Account**: `seo-api-access@seo-automation-489217.iam.gserviceaccount.com`
- **Credentials file**: `scripts/seo/gsc-credentials.json` (gitignored, NEVER commit)
- **IndexNow key**: `68c9a0e54a33fa63d4e4384ebe910e71`
- **GSC Property**: `sc-domain:nyenglishteacher.com`
- **Bing API Key**: `756a56664bea4d73b3486fd0d44b5fc8`
- **Hosting**: Vercel (NOT Hostinger — CLAUDE.md tech stack section is outdated on this)

## Vercel Analytics

Analytics is enabled on this project. The tracking script is injected via `src/layouts/Base.astro` (just before `</body>`):

```html
<script defer src="/_vercel/insights/script.js"></script>
```

**Lesson learned:** Toggling Analytics "on" in the Vercel dashboard only tells Vercel to *serve* the script at that path. It does **not** inject the script into your pages. You must explicitly load it in your layout. Without this tag, zero data is collected even if the dashboard shows Analytics as "enabled."

The `@vercel/analytics` npm package is installed but we use the direct script tag because the package's Astro component export has resolution issues with this version of Astro/Vite. The script tag approach is equivalent and more reliable.

## Marketing Plan

See **[SEO-MARKETING-PLAN.md](./SEO-MARKETING-PLAN.md)** for the full content roadmap, completed work log, and upcoming initiatives. Claude should consult this file at the start of every session and update it as work is completed.

## Session Logs

Every working session creates / updates a log at `docs/session-logs/YYYY-MM-DD-NNN.md` (NNN = zero-padded sequence number for that day). See the global CLAUDE.md "Session Logs" section for the required format. Logs are committed to the repo. The log captures: accomplishments (with PR numbers), technical debt accumulated, work remaining, future ideas, files touched, and lessons/surprises. Updated as work happens, not just at session end.
