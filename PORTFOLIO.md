---
# === CONTROL FLAGS ===
portfolio_enabled: true
portfolio_priority: 6
portfolio_featured: true

# === CARD DISPLAY ===
title: "NY English Teacher"
tagline: "Lead generation website for an English coaching business — replaced 4 roles, runs for $0/month"
slug: "ny-english-teacher"
category: "Client Work"
tech_stack:
  - "Astro 5.5"
  - "React 19"
  - "TypeScript"
  - "Cloudflare Workers"
  - "Neon PostgreSQL"
thumbnail: "/images/portfolio/ny-eng-thumb.jpg"
status: "Production"

# === DETAIL PAGE ===
problem: "Solo professional service providers burn 10-15 hours per week on manual qualification, scheduling ping-pong, and follow-ups. Their websites look identical to commodity competitors, making it impossible to justify premium pricing while the Spanish-speaking professional market remains underserved."
solution: "A fully automated lead generation platform that functions as four digital employees — SDR, marketing department, executive assistant, and brand manager — on free-tier infrastructure. Every conversation steers toward booking, every page justifies premium pricing, and the full EN/ES bilingual system doubles the addressable market from a single codebase."
key_features:
  - "Complete 4-course A1→C2 English curriculum — Beginner, Intermediate, Advanced, Executive — entirely free, bilingual EN/ES"
  - "Executive course alone: 10 units × 3 sections, 8 original React drill components, ~130+ drills, Azure Neural TTS, capstone recorded presentation with direct browser-to-CDN audio upload (Vercel Blob) and 48-hour personal feedback loop"
  - "4 role-specific diagnostic quizzes pre-qualify leads with mapped communication gaps — no discovery calls needed"
  - "3-step booking flow via Cloudflare Workers + Google Calendar OAuth — interest to confirmed Google Meet in under 60 seconds"
  - "Full EN/ES bilingual mirror with localized routing (/es/servicios/, /es/reservar/) and bidirectional hreflang SEO"
  - "Premium positioning hard-coded into UX — named executive testimonials from Driscoll's, CEVA Logistics, no discount codes"
  - "$0/month infrastructure — Astro static, Cloudflare Workers free tier, Neon free tier, Vercel serverless free tier"
metrics:
  - "4 complete courses (A1→C2) — more structured free content than most paid English platforms"
  - "~130+ individual drills in the Executive course alone across 10 drill components"
  - "100 Lighthouse performance score — zero database queries on page load"
  - "$0/month infrastructure cost across all services"
  - "< 60 seconds from interest to confirmed booking with Google Meet link"
  - "2x addressable market from a single codebase via bilingual system"
  - "10-15 hours/week of administrative and sales work automated away"

# === LINKS ===
demo_url: "https://www.nyenglishteacher.com"
live_url: "https://www.nyenglishteacher.com"

# === MEDIA: PORTFOLIO SLIDES ===
slides:
  - src: "/images/portfolio/ny-eng-01.webp"
    alt_en: "The Architecture of Authority — Constructing a multinational agency presence with a team of one"
    alt_es: "La Arquitectura de la Autoridad — Construyendo presencia de agencia multinacional con un equipo de uno"
  - src: "/images/portfolio/ny-eng-02.webp"
    alt_en: "An Automated Performance Engine — Zero manual qualification, 60-second booking flow, 100% gross margin"
    alt_es: "Un Motor de Rendimiento Automatizado — Cero calificacion manual, reserva en 60 segundos, 100% margen bruto"
  - src: "/images/portfolio/ny-eng-03.webp"
    alt_en: "Digital Employee 01: The SDR — Diagnostic intelligence replaces discovery calls with pre-qualified leads"
    alt_es: "Empleado Digital 01: El SDR — Inteligencia diagnostica reemplaza llamadas de descubrimiento con leads precalificados"
  - src: "/images/portfolio/ny-eng-04.webp"
    alt_en: "Digital Employee 02: Marketing Dept — The bilingual mirror doubles addressable market from a single codebase"
    alt_es: "Empleado Digital 02: Depto. de Marketing — El espejo bilingue duplica el mercado alcanzable desde una sola base de codigo"
  - src: "/images/portfolio/ny-eng-05.webp"
    alt_en: "Digital Employee 03: The Executive Assistant — Interest to confirmed Google Meet booking in under 60 seconds"
    alt_es: "Empleado Digital 03: La Asistente Ejecutiva — De interes a reserva confirmada en Google Meet en menos de 60 segundos"
  - src: "/images/portfolio/ny-eng-06.webp"
    alt_en: "Digital Employee 04: The Brand Manager — Premium positioning hard-coded into the UX with named executive testimonials"
    alt_es: "Empleado Digital 04: El Brand Manager — Posicionamiento premium integrado en la UX con testimonios ejecutivos reales"
  - src: "/images/portfolio/ny-eng-07.webp"
    alt_en: "The Speed of Trust — Lighthouse 100 performance score, instant loads signal competence to premium buyers"
    alt_es: "La Velocidad de la Confianza — Puntuacion Lighthouse 100, cargas instantaneas que senalan competencia a compradores premium"
  - src: "/images/portfolio/ny-eng-08.webp"
    alt_en: "The Universal Model — Blueprint for any high-touch expertise business: diagnostic lead magnet + automated booking + premium signals = authority"
    alt_es: "El Modelo Universal — Plano para cualquier negocio de expertise: lead magnet diagnostico + reserva automatizada + senales premium = autoridad"
  - src: "/images/portfolio/ny-eng-09.webp"
    alt_en: "The Zero-Cost Tech Stack — Enterprise-grade performance on a solopreneur budget with $0 monthly infrastructure"
    alt_es: "El Tech Stack de Costo Cero — Rendimiento empresarial con presupuesto de solopreneur y $0 de infraestructura mensual"

# === MEDIA: VIDEO ===
video_url: "/video/ny-eng-brief.mp4"
video_poster: "/video/ny-eng-brief-poster.jpg"

# === OPTIONAL ===
tags:
  - "astro"
  - "react"
  - "typescript"
  - "tailwind"
  - "cloudflare-workers"
  - "google-calendar"
  - "neon-postgresql"
  - "bilingual"
  - "lead-generation"
  - "solopreneur"
date_completed: "2026-04-17"

# === REPO HEALTH STATUS ===
# Last audited: 2026-04-16 (capstone upload, CSP hardening, Sentry install, Clerk chatbot fix)
# Standards defined in: operating-system/delivery/repo-health-baseline.md
health_status:
  sentry: "Y"           # Installed 2026-04-16 — org: cushlabsai, project: ny-eng
  testing: "-"          # No unit/integration framework (vitest/jest); has 7 validators + env smoke tests
  ci_cd: "Y"            # GitHub Actions: build on push/PR to main
  health_endpoint: "n/a"  # Static site — no server runtime
  security_headers: "Y" # vercel.json: CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
  rate_limiting: "n/a"  # Static site; Cloudflare Worker has IP-based rate limiting (5/hr)
  env_validation: "-"   # .env.example exists; no runtime startup validation; manual test:env script
  analytics: "DEFERRED" # No analytics SDK installed
  structured_logging: "-"  # Expected — static site with no server runtime
  dependabot: "Y"       # Weekly: npm deps (max 5 PRs) + GH Actions (max 3 PRs)
  secret_scanning: "Y"  # GitHub secret scanning enabled
  db_backup: "-"        # No Neon PostgreSQL backup automation

# === DEPENDENCY HEALTH ===
# npm audit: 18 vulnerabilities (2 critical, 6 high, 10 moderate) — all transitive, none affect production runtime
#   - Vercel platform internals (ajv, minimatch, path-to-regexp, undici, smol-toml)
#   - Dev-only tooling (esbuild/vite, yaml/@astrojs/check)
#   - Build-time PDF libs (html2pdf.js/jspdf) — not user-facing
# Removed unused @astrojs/node (was never configured as adapter)
# Open Dependabot PRs: 0 — all resolved (5 merged, 1 closed as unused dep, 1 resolved manually)

# === TESTING & VALIDATION SUITE ===
# Pre-build (automatic on `npm run build`):
#   - Blog SEO field validation (title ≤60, description 120-160)
#   - JSON resource schema audit (Python)
#   - Smart-cached PDF generation
# Pre-deploy (`npm run pre-deploy`):
#   - Project health checker (package.json, license, README, .gitignore, .env security, tsconfig, astro config, lockfile, free assets schema, bilingual parity, i18n routes)
#   - Technical SEO audit (meta tags, h1, canonicals, hreflang, OG tags)
#   - Sitemap integrity (URL coverage, hreflang consistency)
#   - Full site HTML scan
# Individual validators (`npm run validate:all` — 7 scripts):
#   - hreflang, 404 patterns, redirects, canonical URLs, internal links, performance, URL structure
# Environment smoke tests (manual):
#   - `npm run test:env` — Google Calendar OAuth env var presence
#   - `npm run test:calendar` — Google Calendar API connectivity
---

## The Architecture of Authority

NY English Teacher is a production lead generation and client conversion platform built for a solo-operated premium coaching business in Guadalajara, Mexico. The platform replaces four roles that a traditional agency would staff with humans — an SDR, a marketing department, an executive assistant, and a brand manager — using automated systems that run on free-tier infrastructure.

The business serves Latin American professionals (executives, engineers, startup founders, logistics managers) who hit a career ceiling not because they lack skill, but because they can't communicate with authority in English. The platform automates the entire journey from discovery through qualification to booking, so a single operator competes with staffed agencies while maintaining 100% gross margin.

## The Challenge

Independent professional service providers face a structural disadvantage against staffed agencies:

- **Manual qualification burns hours.** Without a system, every inbound lead requires a discovery call just to determine fit — 10-15 hours/week of unpaid labor.
- **Scheduling friction kills conversion.** Email ping-pong to find a meeting time loses prospects who were ready to buy right now.
- **Generic websites can't justify premium pricing.** A brochure site with "Contact Us" looks identical to the $5/hour commodity tutors.
- **Content doesn't compound.** Blog posts sit unread instead of driving organic traffic month after month.
- **Bilingual markets are underserved.** Most platforms are English-only, leaving the Spanish-speaking professional market to generic apps.

In the Guadalajara market specifically, the local English tutoring market is saturated at commodity pricing ($5-10/hour). There is virtually no competition in the premium, industry-specific coaching segment targeting working professionals who value results over low prices.

## The Four Digital Employees

**Digital Employee 01: The SDR — Diagnostic Quizzes.** Four role-specific assessments (Executive, IT, Professional Services, High-Stakes) score prospects across five communication categories and identify their primary and secondary gaps. Every lead arrives in the Neon PostgreSQL database with mapped pain points, score tiers, and category breakdowns. No discovery call needed to understand what they need or whether they're a fit.

**Digital Employee 02: Marketing Dept — Bilingual Content Engine.** A full EN/ES mirror site with localized Spanish routing (`/es/servicios/`, `/es/reservar/`, `/es/testimonios/`), 13+ blog articles targeting high-intent keywords, 80 shareable memes across 10 professional roles, and 15+ downloadable communication templates. Each content type serves a different funnel stage: blog drives organic search, memes drive social sharing, resources capture email leads. The bilingual system doubles the addressable market from a single TypeScript codebase with proper hreflang SEO preventing duplicate content penalties.

**Digital Employee 03: The Executive Assistant — Real-Time Booking.** A 3-step booking flow powered by Cloudflare Workers fetches real-time Google Calendar availability, presents 30-minute slots across split business hours, captures contact info, creates a Google Calendar event with auto-generated Google Meet link, and sends automated reminders at 24 hours and 1 hour before the session. Total elapsed time from clicking "Book" to confirmed meeting: under 60 seconds.

**Digital Employee 04: The Brand Manager — Premium Positioning.** The entire UX is engineered to justify 3-5x local market pricing. Six industry-specific service pages signal specialist expertise rather than generic tutoring. Named testimonials from executives at Driscoll's, CEVA Logistics, Smarttie, and 100 Ladrillos provide peer-level social proof. There are no discount codes, no volume pricing, no starter tier. Premium positioning isn't a marketing message — it's hard-coded into the interface.

## Technical Highlights

- **Static-first architecture:** Astro 5.5 pre-renders every page to static HTML at build time. Zero database queries, zero server-side rendering, zero runtime errors. Lighthouse performance score: 100.
- **Edge booking API:** Cloudflare Workers handle Google Calendar OAuth with 1-hour token caching, dual-calendar conflict resolution, and IP-based rate limiting (5 bookings/hour). The worker runs at the edge, eliminating cold start latency.
- **Serverless lead capture:** Quiz submissions hit a Vercel serverless function that writes to Neon PostgreSQL (pooled connection). Schema captures raw scores, category breakdowns, gap analysis, UTM params, referrer, and device metadata.
- **Type-safe bilingual routing:** A central `TKey` system maps every page to its EN/ES path. Adding a new page requires one TKey entry — hreflang tags, sitemap entries, and navigation links generate automatically.
- **Build-time meme status detection:** The 80-meme portfolio uses a detection module that scans image directories at build time and auto-classifies each entry as planned, prompt-ready, image-uploaded, or published based on which language images exist on disk.
- **$0 infrastructure:** Astro on Vercel (static + serverless), Cloudflare Workers (free tier), Neon PostgreSQL (free tier), Formspree (free tier). Every dollar of revenue is profit minus delivery time.

## Results

- Platform serves as the sole sales and marketing operation for a solo coaching business generating revenue from day one
- Automated qualification eliminates 10-15 hours/week of administrative overhead that would otherwise require a virtual assistant or SDR hire
- Premium pricing (500 MXN / $30 USD per session) sustained at 3-5x local market rate, validated by executive-level client roster
- Bilingual system captures both English-language searches (higher purchase intent) and Spanish-language searches (higher volume) across the Guadalajara market

## The Fifth Digital Employee: A Free University

In 2026, the platform grew beyond lead generation to include a complete A1→C2 English curriculum — four full courses offered entirely free. This is not a teaser or a gated demo. It is the productized version of Robert's 1-on-1 executive coaching, built at a depth that most paid platforms don't match.

**The four courses:**

- **Beginner** ("First Steps Into English", A0–A1) — vocabulary, greetings, survival English; full EN/ES mirrors
- **Intermediate** ("Building Fluency", B1–B2) — modal-driven sentence construction; 10 units + 20-question final exam
- **Advanced** ("Speak with Confidence", B2–C1) — error spotting, minimal pairs, sentence transformation; 5 custom React components; Azure Neural TTS
- **Executive** ("Communicate Like a Leader", C1–C2) — 10 units × 3 sections + capstone recorded presentation; 8 original drill components; ~130+ drills across verb precision, filler elimination, structured frameworks, storytelling, impromptu speaking, negotiation, and leadership tone; Azure Neural TTS on every English element

The Executive course pedagogy is built on the Weak→Strong→Elite (C2) progression model with named executive communication frameworks: Cause→Action→Outcome, Problem→Impact→Solution→Recommendation, Context→Tension→Insight→Action→Outcome, Acknowledge→Explain→Action→Prevention. The capstone converts: learners record a 90-second executive update and submit it to Robert by email (48-hour personal feedback) or book a strategy session — the primary conversion event.

This transforms the platform from a lead generation site into a content moat. A learner who completes the free Executive course has already experienced Robert's methodology at depth. The strategy session becomes the obvious next step, not a cold ask.

## The Universal Model

The architecture is a reusable blueprint for any expertise-based solo business — executive coaches, management consultants, financial advisors, legal consultants, medical specialists, corporate trainers. The specific content changes (different quizzes, different blog topics, different service pages), but the engine is identical:

**Diagnostic lead magnet + automated booking + premium signals = authority at scale.**
