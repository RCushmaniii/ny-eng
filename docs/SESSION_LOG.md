# Session Log — ny-eng

Entries are newest-first. Each entry documents one Claude Code working session.

---

## Session: 2026-05-17

### Accomplished
- Merged PR #174: Past Tenses promo + Bonus 1 (cheat sheet EN+ES). Added "Targeted Master Classes" section to `/en/courses/` + `/es/cursos/`, cross-link callouts on intermediate + advanced course landings, ItemList JSON-LD updated
- Merged PR #177: shipped Bonuses 2-5 — `top-10-confused-pairs`, `knew-vs-found-out`, `story-openers`, `there-was-vs-there-has-been` (EN + ES). All flipped to `available: true`, 4 new tkeys registered in `src/lib/i18n.ts`
- Merged PR #181: 6+6 symmetric expansion. NEW Lesson 5 (Used to / Would, the habitual past); old Lesson 5 (Story Flow Map) renumbered to Lesson 6; NEW Bonus 6 (Your 30-Day Practice Plan). Courses index redesigned to 3×2 grid with Past Tenses as 6th card (distinct dark/emerald header). Hero copy updated to "Six free, interactive courses"
- Merged PR #182: fixed misleading CTAs on practice-plan + there-was-vs-there-has-been (EN+ES). "Save the cheat sheet" → "Open the cheat sheet"; "Work 1-on-1 with Robert" → /services/ → "Book a session with Robert" → `/en/book/`
- Submitted all new/changed URLs to Google sitemap, IndexNow (Bing/Yandex/DuckDuckGo/Seznam/Naver), and Bing Webmaster API direct

### Decisions Made
- Lesson 5 = "Used to / Would" (over Past Modals, Third Conditional, or Reported Speech): biggest true gap in a past-tenses-specific master class. Others are modality/irrealis, save for a future master class
- No 301 redirects for lesson-5 → lesson-6 renumber: the `/lesson-5/` URL doesn't go away, it just serves new Used to/Would content. Google re-crawl handles the re-index
- CTA button 2 routed to `/en/book/` over `/services/ongoing-coaching/`: more action-aligned with "Book a session" verb; stronger conversion path from a free-course completer

### Immediate Next Steps
- [ ] Verify production deploy of PR #182 (CTA fix) lands clean on both bonus pages
- [ ] Monitor GSC over next 7 days for re-crawl of `/lesson-5/` (URL content reassigned)

### Technical Debt
- Parallel Claude session running concurrently caused branch-name collisions (3 incidents — one commit ended up on `main` locally, recovered via cherry-pick + reset). Single-session is meaningfully faster

### Open Questions / Blockers
- None

---

## Session: 2026-05-16

### Accomplished
- Merged PR #175: hreflang fixes — removed phantom `executive-communication-playbook` from `astro.config.mjs` blogTranslations, removed broken `translations.en` from `manual-comunicacion-ejecutiva.md`, added 2 missing EN↔ES blog pairs
- Merged PR #176: schema.org fixes on 202 pages — `ContactPoint.contactType` → `"customer support"`, removed invalid `areaServed`, 12 course index + corporate-package `Course.provider` Person→Organization, `BlogPostSchema` publisher logo corrected
- Merged PR #178: lesson-2 titles (EN 69→59, ES 68→57 chars); `validate:seo` added to `validate:all` so title violations now fail the build; `CRITICAL-URLS.txt` expanded 80→222 URLs (all 142 course pages added)
- Merged PR #179: elementary connector data migrated from flat `{example, exampleEs, use, useEs}` to `{example: {english, spanish}}` to match `ConnectorChallenge.tsx` shape
- Merged PR #180: added 2-3 inlinks to all 13 Ahrefs-flagged near-orphan pages — high-stakes service page now cross-links 3 services, assessments page links quiz landing page + course endpoints, 4 ES service pages link related blog posts

### Decisions Made
- `validate:seo` wired into `validate:all` (not just `pre-deploy`): catches title violations in the standard build pipeline, not just a manual gate
- `manual-comunicacion-ejecutiva.md` stays ES-only, no EN counterpart created — removing broken `translations.en` was the correct fix
- Inlinks added as contextual callouts on existing service pages rather than modifying the main nav or services data file

### Immediate Next Steps
- [ ] Re-run Ahrefs full crawl in 3-5 days to verify all 5 issue categories cleared (hreflang, schema, titles, inlinks)
- [ ] Dependabot upgrade session: PRs #156-162 (Tailwind 4, TypeScript 6, PostCSS majors) — read Tailwind 4 migration notes first (`~/.claude/reference/tailwind-4-migration.md`)
- [ ] Submit updated sitemap to GSC: `node scripts/seo/gsc-submit-urls.mjs --sitemap`

### Technical Debt
- `manual-comunicacion-ejecutiva.md` has no EN counterpart — could create an EN version to make it a proper bilingual pair

### Open Questions / Blockers
- Several ES blog inlinks were already present in source but not yet counted by Ahrefs (crawl lag); should self-resolve on next crawl

---

## Session: 2026-05-10

### Accomplished
- Astro 5.5 → 6.3 migration (PR #153) — merged and deployed to production
  - Bumped: astro, @astrojs/mdx 4→5, @astrojs/react →5.0.4, @astrojs/check →0.9.9, @astrojs/netlify 6→7, vite 5→7
  - Removed @astrolib/seo (unused dep, peer-pinned to astro ^5) and @astrojs/tailwind (abandoned, peer-pinned to ^5)
  - Content collections migrated to Content Layer API — `src/content/config.ts` → `src/content.config.ts`, glob loader, `.slug` → `.id`, `entry.render()` → `render(entry)` across 9 files
  - Replaced 4 `Astro.glob()` calls with `import.meta.glob({ eager: true })`
- Bumped GitHub Actions runner Node 20 → 22 (followup commit after CI failed on Astro 6's `>=22.12.0` requirement)
- Closed Dependabot PR #144 (bare astro bump that couldn't land alone)
- Smoke-tested 14 routes locally on Astro 6.3.1 pre-merge; verified production 200s post-deploy

### Decisions Made
- Kept Tailwind 3 via raw PostCSS instead of migrating TW3 → TW4 in the same PR — avoids compounding migration risk (color collisions, `@theme` rewrite). Done since `postcss.config.cjs` was already wired.
- Closed Dependabot's bare astro PR and did the migration on a fresh branch — cleaner than reusing Dependabot's branch when 5+ packages needed coordinated bumps.
- Deferred 18 pre-existing `Connector[]` type mismatches in elementary course unit pages — surfaced by v6's stricter type generation, but `npm run build` doesn't gate on `astro check` and pages render fine. Out of migration scope.

### Immediate Next Steps
- [ ] Blog post #5 — *Present to US Clients on Zoom with Confidence* (next in SEO-MARKETING-PLAN.md queue)
- [ ] Optional: TW3 → TW4 migration as a standalone PR when there's a reason
- [ ] Optional: Fix `Connector[]` type/data mismatch in elementary course units (component interface vs `@data/elementary/unit-*` data shape)

### Technical Debt
- 18 elementary course unit pages fail `astro check` on `Connector[]` shape — passes build, type drift surfaced by v6
- `@astrojs/tailwind` replaced with raw PostCSS; eventual TW4 move still pending

### Open Questions / Blockers
- None

### Process Note
Pre-flight for major version bumps should grep `.github/workflows/` for runner Node version. Missed it pre-merge on Astro 5→6 — caught only when CI failed on Node 20. Local Node 22.17 was fine, but the check is two places, not one.

---

## Session: 2026-05-06

### Accomplished
- Unpublished Emmanuel Ibarra Castillo testimonial (status → draft, EN + ES) — PR #149 merged to main
- Fixed "All Industries" filter button rendering blank on `/en/testimonials/` — PR #150 merged to main (root cause: `bg-primary-600 text-white` with undefined Tailwind color scale produced white text on no background)
- Fixed same undefined `primary-N` Tailwind color bug site-wide — PR #151, 11 files: invisible CTA buttons, broken link colors, broken homepage gradient on `Testimonials-titan.astro`

### Decisions Made
- `bg-primary` / `hover:bg-primary-dark` as replacements for `bg-primary-600` / `hover:bg-primary-700` — only DEFAULT/light/dark are defined in tailwind.config.mjs
- `hover:bg-primary-50` → `hover:bg-gray-50` on outlined ghost buttons — no light tint variant exists, gray is a safe fallback
- Left `src/components/ExpandableTestimonialCard.astro` and `src/components/TestimonialCard.astro` (non-ui/) unfixed — confirmed dead code, not imported anywhere

### Immediate Next Steps
- [ ] Visually verify filter buttons on live site (active = blue fill, white text; inactive = visible gray text)
- [ ] Verify Testimonials-titan.astro CTA gradient renders on the homepage
- [ ] Delete dead-code duplicates: `src/components/ExpandableTestimonialCard.astro` + `src/components/TestimonialCard.astro`
- [ ] Send Julio the updated registro post for native MX review (carry-over from 2026-05-04)

### Technical Debt
- No build-time guard against undefined Tailwind utilities — `astro check` catches TypeScript errors, not CSS class errors; the `primary-N` bug lived undetected across 11 files
- Consider adding a lint step (e.g. `grep -r "primary-[0-9]"`) to CI to catch numeric scale usage before it ships

### Open Questions / Blockers
- None

---

<!-- New entries go above this line -->
