---
# === CONTROL FLAGS ===
portfolio_enabled: true
portfolio_priority: 2
portfolio_featured: true

# === CARD DISPLAY ===
title: "NY English Teacher"
tagline: "Lead generation platform replacing 4 roles on $0/month infrastructure"
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
  - "4 role-specific diagnostic quizzes pre-qualify leads with mapped communication gaps — no discovery calls needed"
  - "3-step booking flow via Cloudflare Workers + Google Calendar OAuth — interest to confirmed Google Meet in under 60 seconds"
  - "Full EN/ES bilingual mirror with localized routing (/es/servicios/, /es/reservar/) and bidirectional hreflang SEO"
  - "Premium positioning hard-coded into UX — named executive testimonials from Driscoll's, CEVA Logistics, no discount codes"
  - "$0/month infrastructure — Astro static, Cloudflare Workers free tier, Neon free tier, Vercel serverless free tier"
metrics:
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
date_completed: "2026-02"
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
- **$0 infrastructure:** Astro on Hostinger (static), Cloudflare Workers (free tier), Neon PostgreSQL (free tier), Vercel serverless (free tier), Formspree (free tier). Every dollar of revenue is profit minus delivery time.

## Results

- Platform serves as the sole sales and marketing operation for a solo coaching business generating revenue from day one
- Automated qualification eliminates 10-15 hours/week of administrative overhead that would otherwise require a virtual assistant or SDR hire
- Premium pricing (500 MXN / $25 USD per session) sustained at 3-5x local market rate, validated by executive-level client roster
- Bilingual system captures both English-language searches (higher purchase intent) and Spanish-language searches (higher volume) across the Guadalajara market

## The Universal Model

The architecture is a reusable blueprint for any expertise-based solo business — executive coaches, management consultants, financial advisors, legal consultants, medical specialists, corporate trainers. The specific content changes (different quizzes, different blog topics, different service pages), but the engine is identical:

**Diagnostic lead magnet + automated booking + premium signals = authority at scale.**