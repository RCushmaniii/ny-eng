# NY English Teacher - Claude Code Guidelines

## Project Overview

Professional English coaching and training platform for Robert Cushman's "NY English Teacher" business. A lead generation and conversion platform targeting executive professionals, tech workers, startup founders, and corporate clients.

**Live Site**: https://www.nyenglishteacher.com

## Tech Stack

- **Framework**: Astro 5.5 with React 19 for interactive components
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript 5.9 (strict)
- **Database**: MySQL (Hostinger)
- **APIs**: Google Calendar, Formspree, Resend
- **Hosting**: Hostinger (static) + Cloudflare Workers (booking API)
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
│   └── mysql.ts        # MySQL connection pool
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
MYSQL_HOST=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DATABASE=
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
- Results stored in MySQL via `src/lib/db.ts`

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
