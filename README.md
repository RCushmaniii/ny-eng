# NY English Teacher

**Executive English coaching platform for professionals who need to command the room.**

[![Astro](https://img.shields.io/badge/Astro-5.5-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Status](https://img.shields.io/badge/Status-Production-success)](https://www.nyenglishteacher.com)

A bilingual (EN/ES) lead generation, conversion, and self-study platform for executive English coaching. Built for performance, SEO excellence, conversion optimization, and free-tier learner education at a scale most paid platforms don't match.

**Live Site**: [nyenglishteacher.com](https://www.nyenglishteacher.com)

---

## Why This Project?

Most English coaching websites are generic and forgettable. This platform is built to:

- **Convert visitors into qualified leads** through persona-specific assessment funnels
- **Rank in search engines** with perfect hreflang, structured data, and technical SEO
- **Serve two markets** with full bilingual parity (English + Mexican Spanish)
- **Load fast** with static generation, optimized images, and edge caching
- **Educate at scale** with a full 4-course, drill-based curriculum — completely free

---

## Key Features

### Free Course Curriculum — All Four Levels, Completely Free

The platform ships a complete A1→C2 English curriculum — the productized version of Robert's 1-on-1 executive coaching, offered entirely for free as a lead generation and authority engine.

| Course | Level | Focus | Drills |
|--------|-------|-------|--------|
| **Beginner** — "First Steps Into English" | A0–A1 | Vocabulary, greetings, survival English | Interactive matching + pronunciation |
| **Intermediate** — "Building Fluency" | B1–B2 | Sentence construction, modals, fluency | Modal-driven sentence builder, 10 units + final exam |
| **Advanced** — "Speak with Confidence" | B2–C1 | Precision, error spotting, minimal pairs | 5 components: WordPairLab, ErrorSpotter, SentenceTransformer, MinimalPairDrill, WordBuilder |
| **Executive** — "Communicate Like a Leader" | C1–C2 | Executive frameworks, negotiation, storytelling, leadership voice | 10 components, ~130+ drills, capstone recorded presentation with direct upload |

The Executive course contains 10 units × 3 sections, 8 original drill components (VerbUpgradeLab, WeakStrongElite, StructuredResponseBuilder, ConnectorDrill, StoryBuilder, ImpromptuScenario, RapidRepeat, FinalShiftCard), Azure Neural TTS on every English element, and a capstone funnel that converts to a strategy session booking. Pedagogy: Weak→Strong→Elite (C2) progression with named frameworks (Cause→Action→Outcome, Problem→Impact→Solution→Recommendation, Context→Tension→Insight→Action→Outcome).

### Capstone Submission System

Learners record a 90-second executive presentation and upload it directly to Vercel Blob storage (browser-to-CDN, no server body limit, up to 25 MB). Robert receives a branded Resend email with a one-click listen link and can reply directly with personal feedback within 48 hours.

### Lead Generation System
- **4 Persona-Specific Quizzes** — IT Services, Executives, Professional Services, High-Stakes Communication
- **Instant Score & Premium Report** — Communication Confidence Score with PDF export
- **Email Capture + Notifications** — Resend-powered lead alerts with full score breakdown
- **Corporate Lead Magnet — "The Corporate English Training Audit"** — Bilingual PDF + video download targeting HR managers and corporate decision-makers. Branded delivery email with dual format CTAs (read or watch), three-bullet preview, and dedicated booking CTA. Stored in Neon with `delivered_at` tracking and full UTM attribution.

### Booking System
- **3-Step Executive Strategy Session** — Date → Details → Confirmation
- **Google Calendar Integration** — Cloudflare Worker API with double-booking prevention
- **Google Meet Auto-Generation** — Video conference links included in confirmation
- **Context Pre-fill** — Capstone page passes learner context to the booking form via URL params

### SEO & Performance
- **Perfect Sitemap** — 130+ URLs with bidirectional hreflang (en-US ↔ es-MX)
- **JSON-LD Structured Data** — Organization, FAQ, Blog, and Service schemas
- **Core Web Vitals Optimized** — Static generation, lazy loading, edge caching

### Content Architecture
- **12 Service Pages** — Industry-specific coaching offerings
- **22 Blog Posts** — Bilingual content with cross-language links
- **20+ Lead Magnets** — Downloadable resources for email capture

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Astro 5.5](https://astro.build) — Static site generation with islands architecture |
| UI Components | [React 19](https://react.dev) — Interactive drills, quizzes, booking wizard |
| Styling | [Tailwind CSS 3.4](https://tailwindcss.com) — Utility-first CSS |
| Language | [TypeScript 5.9](https://typescriptlang.org) — Strict mode enabled |
| Database | [Neon PostgreSQL](https://neon.tech) — Quiz submission storage (serverless) |
| File Storage | [Vercel Blob](https://vercel.com/docs/storage/vercel-blob) — Capstone audio uploads (direct browser upload) |
| Email | [Resend](https://resend.com) — Lead notifications + capstone feedback delivery |
| Calendar | Google Calendar API — Via Cloudflare Worker |
| Hosting | [Vercel](https://vercel.com) (static + serverless) + Cloudflare Workers (booking API) |
| TTS | Azure Neural TTS — en-US-AvaNeural (EN) + es-MX-DaliaNeural (ES) |
| Icons | [Lucide React](https://lucide.dev) — Consistent icon library |
| Monitoring | [Sentry](https://sentry.io) — Error tracking (org: cushlabsai) |

---

## Quick Start

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/RCushmaniii/ny-eng.git
cd ny-eng
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build & Deploy

```bash
npm run build         # Production build
npm run preview       # Preview production build locally
npm run build:check   # Build with TypeScript type checking
npm run validate:all  # Run all SEO validators
```

---

## Project Structure

```
src/
├── pages/                  # File-based routing
│   ├── en/                 # English pages
│   └── es/                 # Spanish pages (mirror structure)
├── components/
│   ├── sections/           # Page sections (Hero, Features, etc.)
│   ├── course/             # 10 drill components + CourseProgress
│   ├── booking/            # 3-step booking wizard
│   ├── chat/               # AI chatbot embed
│   └── seo/                # Structured data (JSON-LD)
├── layouts/
│   └── Base.astro          # Master layout with SEO, header, footer
├── data/                   # TypeScript data files
│   ├── services.ts         # Service definitions
│   ├── quiz/               # Quiz config, scoring, questions
│   ├── executive/          # Executive course data (10 units)
│   └── header/             # Navigation (en.ts, es.ts)
├── content/                # Astro content collections
│   ├── blog/               # Markdown blog posts (en/, es/)
│   └── legal/              # Privacy, terms
├── lib/                    # Utilities
│   ├── i18n.ts             # Bilingual routing system (TKey)
│   └── db.ts               # Quiz submission database
└── styles/                 # Global CSS
api/
├── capstone/
│   └── upload-token.ts     # Vercel Blob client upload handler + Resend email
├── corporate-guide/
│   └── download.ts         # Corporate audit lead magnet — Neon insert + dual Resend send
├── quiz/
│   └── submit.ts           # Quiz submission → Neon PostgreSQL
└── tts/
    └── synthesize.ts       # Azure Neural TTS proxy
```

---

## Environment Variables

```env
# Database
POSTGRES_URL=

# Google Calendar (booking system)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REFRESH_TOKEN=
GOOGLE_CALENDAR_ID=

# Email (Resend)
RESEND_API_KEY=
RESEND_FROM_EMAIL=

# File storage (Vercel Blob — capstone uploads)
BLOB_READ_WRITE_TOKEN=

# Site
SITE_URL=https://www.nyenglishteacher.com
```

### Adding New Pages

1. Create the page in `src/pages/en/` and `src/pages/es/`
2. Add the route key to `src/lib/i18n.ts`
3. Use the `Base.astro` layout with `lang` and `tkey` props

```astro
---
const lang = "en";
const tkey = "new-page";
---
<Base {lang} {tkey} title="Page Title" description="...">
  <!-- Content -->
</Base>
```

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        STATIC SITE                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   Astro     │  │   React     │  │  Tailwind   │         │
│  │   Pages     │  │  Islands    │  │     CSS     │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│                         │                                   │
│                         ▼                                   │
│  ┌──────────────────────────────────────────────┐          │
│  │              Vercel (Static + Serverless)     │          │
│  │         vercel.json (redirects, CSP headers) │          │
│  └──────────────────────────────────────────────┘          │
└─────────────────────────────────────────────────────────────┘
                          │
          ┌───────────────┼──────────────────┐
          ▼               ▼                  ▼
┌─────────────────┐ ┌───────────┐ ┌──────────────────┐
│ Cloudflare      │ │  Resend   │ │  Vercel Blob     │
│ Worker (API)    │ │  (Email)  │ │  (Audio uploads) │
│ - Calendar      │ │           │ │                  │
│ - Booking       │ │           │ │                  │
└─────────────────┘ └───────────┘ └──────────────────┘
          │
          ▼
┌─────────────────┐
│ Google Calendar │
│ + Meet          │
└─────────────────┘
```

---

## SEO Implementation

Every URL has bidirectional hreflang:
- `/en/*` → points to itself (en-US) + Spanish equivalent (es-MX)
- `/es/*` → points to itself (es-MX) + English equivalent (en-US)

Sitemap covers 130+ URLs. JSON-LD structured data on every page (Organization, FAQ, Article, BreadcrumbList, Service schemas).

---

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on port 4321 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run build:check` | Build with TypeScript checking |
| `npm run validate:all` | Run all 7 SEO validators |

---

## License

Proprietary — All rights reserved.

---

**Maintained by**: Robert Cushman  
**Last Updated**: April 2026
