# NY English Teacher

**Executive English coaching platform for professionals who need to command the room.**

[![Astro](https://img.shields.io/badge/Astro-5.5-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Status](https://img.shields.io/badge/Status-Production-success)](https://www.nyenglishteacher.com)

A bilingual (EN/ES) lead generation and conversion platform for executive English coaching. Built for performance, SEO excellence, and conversion optimization.

**Live Site**: [nyenglishteacher.com](https://www.nyenglishteacher.com)

---

## Why This Project?

Most English coaching websites are generic and forgettable. This platform is built to:

- **Convert visitors into qualified leads** through persona-specific assessment funnels
- **Rank in search engines** with perfect hreflang, structured data, and technical SEO
- **Serve two markets** with full bilingual parity (English + Mexican Spanish)
- **Load fast** with static generation, optimized images, and edge caching

---

## Key Features

### Lead Generation System
- **4 Persona-Specific Quizzes** — IT Services, Executives, Professional Services, High-Stakes Communication
- **Instant Score & Premium Report** — Communication Confidence Score with PDF export
- **Email Capture + Notifications** — Resend-powered lead alerts with full score breakdown

### Booking System
- **3-Step Executive Strategy Session** — Date → Details → Confirmation
- **Google Calendar Integration** — Cloudflare Worker API with double-booking prevention
- **Google Meet Auto-Generation** — Video conference links included in confirmation

### SEO & Performance
- **Perfect Sitemap** — 116 URLs with bidirectional hreflang (en-US ↔ es-MX)
- **JSON-LD Structured Data** — Organization, FAQ, Blog, and Service schemas
- **Core Web Vitals Optimized** — Static generation, lazy loading, external stylesheets

### Content Architecture
- **11 Service Pages** — Industry-specific coaching offerings
- **22 Blog Posts** — Bilingual content with cross-language links
- **20+ Lead Magnets** — Downloadable resources for email capture

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Astro 5.5](https://astro.build) — Static site generation with islands architecture |
| UI Components | [React 19](https://react.dev) — For interactive quiz reports |
| Styling | [Tailwind CSS 3.4](https://tailwindcss.com) — Utility-first CSS |
| Language | [TypeScript 5.9](https://typescriptlang.org) — Strict mode enabled |
| Database | MySQL (Hostinger) — Quiz submission storage |
| Email | [Resend](https://resend.com) — Transactional email for lead notifications |
| Calendar | Google Calendar API — Via Cloudflare Worker |
| Hosting | Hostinger (static) + Cloudflare Workers (API) |
| Icons | [Lucide React](https://lucide.dev) — Consistent icon library |

---

## Quick Start

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ny-english-teacher.git
cd ny-english-teacher

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build & Deploy

```bash
# Production build
npm run build

# Preview production build locally
npm run preview

# Run pre-deploy audits (SEO, sitemap, accessibility)
npm run pre-deploy
```

The `dist/` folder contains the static site ready for deployment.

---

## Project Structure

```
src/
├── pages/                  # File-based routing
│   ├── en/                 # English pages
│   └── es/                 # Spanish pages (mirror structure)
├── components/
│   ├── sections/           # Page sections (Hero, Features, etc.)
│   ├── booking/            # 3-step booking wizard
│   ├── chat/               # AI chatbot embed
│   └── seo/                # Structured data components
├── layouts/
│   └── Base.astro          # Master layout with SEO, header, footer
├── data/                   # TypeScript data files
│   ├── services.ts         # Service definitions
│   ├── quiz/               # Quiz config, scoring, questions
│   └── header/             # Navigation (en.ts, es.ts)
├── content/                # Astro content collections
│   ├── blog/               # Markdown blog posts (en/, es/)
│   └── legal/              # Privacy, terms
├── lib/                    # Utilities
│   ├── i18n.ts             # Bilingual routing system
│   └── db.ts               # Quiz submission database
└── styles/                 # Global CSS
```

---

## Configuration

### Environment Variables

Create a `.env` file in the project root:

```env
# Database (Hostinger MySQL)
MYSQL_HOST=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DATABASE=

# Google Calendar (for booking system)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REFRESH_TOKEN=
GOOGLE_CALENDAR_ID=

# Email notifications (Resend)
RESEND_API_KEY=
RESEND_FROM_EMAIL=

# Site URL
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
│  │              Hostinger (Static)               │          │
│  │         .htaccess (redirects, CSP)           │          │
│  └──────────────────────────────────────────────┘          │
└─────────────────────────────────────────────────────────────┘
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
┌─────────────────┐ ┌───────────┐ ┌─────────────────┐
│ Cloudflare      │ │  Resend   │ │    Chatwoot     │
│ Worker (API)    │ │  (Email)  │ │   (Chatbot)     │
│ - Calendar      │ │           │ │                 │
│ - Booking       │ │           │ │                 │
└─────────────────┘ └───────────┘ └─────────────────┘
          │
          ▼
┌─────────────────┐
│ Google Calendar │
│ + Meet          │
└─────────────────┘
```

---

## SEO Implementation

### Sitemap Rules

**Included:**
- Language homepages (`/en/`, `/es/`)
- Blog index and individual posts
- Service pages
- Resource/lead magnet pages
- Primary testimonial pages

**Excluded:**
- Category archives
- Quiz question/result pages
- Filtered testimonial pages
- Thank-you pages

### Hreflang Strategy

Every URL has bidirectional hreflang:
- `/en/*` → points to itself (en-US) + Spanish equivalent (es-MX)
- `/es/*` → points to itself (es-MX) + English equivalent (en-US)

---

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on port 4321 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run pre-deploy` | Run SEO and sitemap audits |
| `npm run build:check` | Build with TypeScript checking |

---

## Contributing

1. Follow the coding standards in [CLAUDE.md](./CLAUDE.md)
2. Ensure bilingual parity — features must work in both EN and ES
3. Run `npm run pre-deploy` before submitting PRs
4. Use TypeScript strict mode — no `any` types

---

## License

Proprietary — All rights reserved.

---

## Acknowledgments

- Built with [Astro](https://astro.build) and the Titan theme
- Icons by [Lucide](https://lucide.dev)
- Hosted on [Hostinger](https://hostinger.com) with [Cloudflare](https://cloudflare.com) edge functions

---

**Maintained by**: Robert Cushman
**Last Updated**: January 2026
