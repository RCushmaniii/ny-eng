# Session Log — ny-eng

Entries are newest-first. Each entry documents one Claude Code working session.

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
