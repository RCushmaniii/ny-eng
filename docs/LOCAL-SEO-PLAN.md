# Local & Off-Page Authority Plan — NY English Teacher

**Created:** 2026-07-01 · **Owner:** Robert Cushman · **Context:** ny-eng

## Why this plan exists

On-page SEO is in strong shape (schema, bilingual content, pillars, local Service markup). The **ceiling is now off-page authority**. GSC shows most queries ranking position 20–75 — not because content is weak, but because the domain isn't yet trusted/linked enough to reach page 1. The one place the site already ranks #1–3 is **local Guadalajara queries**, driven by the Google Business Profile (GBP). That's the lever: compound the local signal and build real authority.

**Business NAP (source of truth = GBP):**
- **Name:** New York English Teacher
- **Address:** C. Cuautitlan 576, Jardines de Los Arcos, 44500 Guadalajara, Jal., Mexico
- **Phone / WhatsApp:** +52 33 1559 0572
- **GBP:** https://www.google.com/maps/place/New+York+English+Teacher/@20.6686216,-103.3979611,17z/
- **Rating:** 4.7 (15 reviews, as of 2026-03-30) · Category: English language school in Guadalajara

---

## Priority 1 — On-site NAP consistency ✅ DONE (2026-07-01)

NAP consistency is a top-3 local ranking factor. The site schema previously carried a **fake placeholder phone** and **no address/geo**, contradicting GBP.

- ✅ Replaced fake `+1-888-888-8888` with real `+52-33-1559-0572` in `OrgSchema.astro` and `ProfessionalServiceSchema.astro`.
- ✅ Added `PostalAddress` + `GeoCoordinates` (matching GBP exactly) + `hasMap`/`sameAs` to `ProfessionalServiceSchema.astro`.
- ✅ Added GBP `sameAs` to `OrgSchema.astro`.
- ✅ Page-scoped `Service` + `areaServed` schema already live on the local landing posts (Chapalita/Zapopan/Guadalajara).

**Decision flag for Robert:** the content positions coaching as "online only," but GBP + schema now assert a physical Guadalajara address. This is correct for local SEO (it matches GBP and is why you rank locally), but if you're deliberately moving away from a physical location, say so and we'll revisit. Recommendation: keep it — the physical NAP is your strongest local asset.

---

## Priority 2 — GBP optimization (Robert, in GBP dashboard — ~30 min)

The GBP is the single highest-leverage local asset. Exact actions:

1. **Reply to every existing review** (all 15). Google explicitly rewards owner responses as a ranking signal. 2–3 sentences each, in the reviewer's language.
2. **Set up review solicitation.** Get the GBP "short link" (GBP dashboard → Home → "Get more reviews" → copy link) and send it to recent happy students. Target: **+2–3 new reviews/month**, steady. Draft request copy is in `content-marketing/review-request-templates.md` (see Priority 5).
3. **Post weekly to GBP.** You already have ready-to-paste posts in `content-marketing/local-gbp-posts.md`. Cadence: 1/week. GBP posts are a freshness + engagement signal.
4. **Add photos** — GBP profiles with fresh photos rank better. Even 1–2 new photos/month (teaching setup, Guadalajara, the OG images we made) helps.
5. **Confirm services/attributes** — ensure "Online appointments" and service list (business/executive English, interview prep) are filled in.

---

## Priority 3 — Local citations / NAP directories (Robert — ~1 hr, batched)

Consistent NAP across directories builds local trust. Use the **exact** NAP block above — identical formatting every time (inconsistency hurts more than absence). Priority directories for a Guadalajara/Mexico business:

- **Waze** (waze.com/business) — big in Mexico
- **Bing Places** (bingplaces.com) — import from GBP directly
- **Apple Business Connect** (businessconnect.apple.com) — Apple Maps
- **Foursquare** (foursquare.com/business)
- **Yelp México** (biz.yelp.com.mx)
- **Sección Amarilla** (seccionamarilla.com.mx) — Mexico's Yellow Pages, strong local signal
- **Facebook Page** — ensure NAP matches exactly (you have a FB presence per the referrer data)
- **LinkedIn Company Page** — NAP + link to site

**Rule:** same name, same address string, same phone (+52 33 1559 0572), same URL every time.

---

## Priority 4 — Backlinks / real authority (mix; ongoing)

This is the slowest but highest-ceiling lever. Realistic, white-hat angles for this business:

1. **Local partnerships** — Guadalajara coworking spaces, startup hubs (e.g., nearshoring/tech communities), business associations. Offer a free workshop → earn a link from their site/event page.
2. **Guest posts / expert quotes** — pitch "business English for nearshoring" angles to Guadalajara tech-scene blogs and Mexican HR/L&D publications. Robert's real dev/IT-manager background is a genuine hook (already used in the Guadalajara/Zapopan articles).
3. **HARO-style / journalist requests** (Qwoted, Featured.com) — respond to queries on ESL, remote work, cross-cultural business communication → earns high-authority links.
4. **Client/company mentions** — the real testimonials (Smarttie, 100 Ladrillos, Driscoll's) are relationships; a case-study link or a mention on their careers/L&D page is gold.
5. **Podcast/interview appearances** — Mexican business/tech podcasts; each typically links back.

Claude can draft every pitch, guest-post, and outreach email on request.

---

## Priority 5 — Assets Claude can produce (say the word)

- `content-marketing/review-request-templates.md` — EN + ES review-request messages (WhatsApp + email) for solicitation.
- Owner-response drafts for the existing 15 GBP reviews (send me the review text/languages).
- Outreach email templates for Priority 4 (partnerships, guest posts, HARO).
- The next content pillar (per the striking-distance data) when the Aug 5 re-check says content is still moving the needle.

---

## Measurement

- **Re-pull striking-distance report ~2026-08-05** (calendar reminder set). Watch: did "coaching de inglés de negocios" climb from position 37? Baselines recorded in the calendar event + the 2026-07-01 session log.
- **GBP Insights** monthly: calls, direction requests, website clicks, review count/rating trend.
- **GSC** monthly: total clicks/impressions trend, and whether local queries ("clases de inglés [area]") gain click volume, not just impressions.

## Honest expectation-setting

Off-page authority compounds over **months, not weeks**. GBP optimization (Priority 2) is the fastest win and should show in local pack visibility within a few weeks. Citations (Priority 3) are a one-time foundation. Backlinks (Priority 4) are the long game and the real ceiling-raiser. Don't expect the domain-authority bottleneck to break from any single action — it's the cumulative effect.
