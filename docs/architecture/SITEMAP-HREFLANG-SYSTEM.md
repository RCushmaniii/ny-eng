# Sitemap & Hreflang System — Architecture Guide

How the NY English Teacher platform generates its XML sitemap and hreflang tags for bilingual SEO.

---

## System Overview

Hreflang signals are emitted in **two places**, both required for proper bilingual SEO:

| Layer | Where | Purpose |
|-------|-------|---------|
| HTML `<head>` tags | `src/layouts/Base.astro` | Tells browsers and crawlers visiting a page about its alternate language version |
| XML sitemap | `astro.config.mjs` (`@astrojs/sitemap`) | Tells search engines about all language variants during crawl discovery |

Both layers must agree. If a page has `hreflang="es-MX"` in its HTML pointing to `/es/servicios/`, the sitemap must include the same pairing.

---

## Layer 1: HTML `<head>` Hreflang Tags

**File:** `src/layouts/Base.astro` (lines 84-129)

Every page uses the `Base.astro` layout. It determines hreflang via one of two paths:

### Path A — Static Pages (services, resources, quiz, etc.)

The page passes `lang` and `tkey` props. Base.astro looks up the `routeFor` object in `src/lib/i18n.ts` to find both the EN and ES paths for that `tkey`, then renders:

```html
<link rel="alternate" hreflang="en-US" href="https://www.nyenglishteacher.com/en/services/tech-english/" />
<link rel="alternate" hreflang="es-MX" href="https://www.nyenglishteacher.com/es/servicios/ingles-para-tecnologia/" />
<link rel="alternate" hreflang="x-default" href="https://www.nyenglishteacher.com/en/services/tech-english/" />
```

**How it works** (`src/layouts/Base.astro` lines 100-129):

1. Looks up `routeFor[lang][tkey]` for the canonical URL
2. Iterates all locales in `routeFor` to build the alternates array
3. Sets `x-default` to the English version (default locale)

### Path B — Blog Posts & Dynamic Pages

Blog post slugs aren't registered as TKeys, so blog pages pass `customCanonical` and `customHreflangs` props directly to Base.astro.

**How it works** (`src/layouts/Base.astro` lines 89-99):

1. Uses `customCanonical` as-is for the canonical URL
2. Uses `customHreflangs` array as-is for alternate links
3. Sets `x-default` to whichever alternate starts with `en`

Blog posts get their translation URLs from frontmatter:

```yaml
# src/content/blog/en/slack-english-write-like-a-pro.md
translations:
  en: "/en/blog/slack-english-write-like-a-pro/"
  es: "/es/blog/ingles-para-slack-profesional/"
```

The `[slug].astro` template reads this frontmatter and passes it to Base.astro as `customHreflangs`.

---

## Layer 2: XML Sitemap (Build-Time)

**File:** `astro.config.mjs` (lines 108-357)

Uses `@astrojs/sitemap` with three customization hooks: `filter`, `serialize`, and the `blogTranslations` map.

### The `blogTranslations` Map (lines 23-45)

A manual EN-slug-to-ES-path mapping at the top of `astro.config.mjs`:

```javascript
const blogTranslations = {
  "slack-english-write-like-a-pro": "/es/blog/ingles-para-slack-profesional/",
  "executive-video-call": "/es/blog/presencia-ejecutiva-en-videollamadas/",
  // ... one entry per bilingual blog post
};
```

A reverse map (ES-to-EN) is auto-generated from this object (lines 48-53). This is the **only place** blog translation pairs are registered for the sitemap — the HTML `<head>` hreflangs come from blog post frontmatter instead.

### `filter()` — Which Pages Enter the Sitemap (lines 128-178)

Controls inclusion/exclusion. The filter **removes**:

- API routes (`/api/`)
- Internal pages (`/_`, `/dev/`, `/admin/`)
- Quiz question and result pages (`/quiz/*/question/1/`, `/quiz/*/results/`)
- Blog pagination pages (`/blog/2/`, `/blog/3/`)
- Category archive pages (`/en/category/*`, `/es/categoria/*`)
- Filtered testimonial subpages (`/en/testimonials/tech/`)
- Thank-you, chat, and redirect-only paths
- Meme portfolio role pages (keeps only `/meme-portfolio/all/`)
- Backup files and malformed URLs

### `serialize()` — Transform Each Sitemap Entry (lines 182-356)

For every URL that passes the filter, `serialize()` does two things:

#### A. Generate Hreflang Links (3-tier fallback)

**Tier 1 — `routeFor` lookup** (lines 208-221):
Iterates all TKeys from `getAllTKeys()` in `src/lib/i18n.ts`. If the current URL matches either the EN or ES path for any TKey, it pairs both as alternates.

```xml
<xhtml:link rel="alternate" hreflang="en-US" href="https://www.nyenglishteacher.com/en/services/tech-english/" />
<xhtml:link rel="alternate" hreflang="es-MX" href="https://www.nyenglishteacher.com/es/servicios/ingles-para-tecnologia/" />
```

**Tier 2 — `blogTranslations` map** (lines 224-246):
If Tier 1 didn't match (blog posts won't, since they're not TKeys), checks the `blogTranslations` / `blogTranslationsReverse` maps. If the URL's slug matches, pairs both language versions.

**Tier 3 — Self-referencing fallback** (lines 261-268):
If neither system matched (orphan pages with no translation), adds a single self-referencing hreflang based on the `/en/` or `/es/` prefix in the URL.

#### B. Set Priority, Changefreq, and Lastmod (lines 270-346)

Assigns SEO signals based on URL pattern matching:

| Content Type | Priority | Changefreq | Example Path |
|-------------|----------|------------|--------------|
| Homepage | 1.0 | weekly | `/en/`, `/es/` |
| Services | 0.8 | yearly | `/en/services/*` |
| Blog index | 0.7 | weekly | `/en/blog/` |
| Blog posts | 0.7 | monthly | `/en/blog/post-slug/` |
| Booking/Contact | 0.7 | monthly | `/en/book/` |
| Quiz | 0.6 | monthly | `/en/quiz/*` |
| Resources | 0.6 | monthly | `/en/resources/*` |
| Testimonials | 0.6 | monthly | `/en/testimonials/` |
| Meme portfolio | 0.6 | weekly | `/en/meme-portfolio/all/` |
| About | 0.5 | yearly | `/en/about/` |
| FAQs | 0.5 | monthly | `/en/faqs/` |
| Legal | 0.3 | yearly | `/en/legal/*` |
| Everything else | 0.5 | monthly | — |

Lastmod dates are hardcoded stable dates (not build timestamps) to avoid misleading search engines with batch-updated timestamps.

---

## The i18n Routing System

**File:** `src/lib/i18n.ts`

The central source of truth for all static page routes.

### Key Exports

| Export | Purpose |
|--------|---------|
| `TKey` (type) | Union type of all valid translation keys |
| `routeFor` | `Record<Locale, Record<TKey, string>>` — maps every TKey to its EN and ES path |
| `getAllTKeys()` | Returns array of all TKeys (used by sitemap `serialize()`) |
| `alternates(tkey)` | Returns `[{ lang, href }]` array for a given TKey |
| `canonical(tkey, lang)` | Returns the canonical path for a TKey in a given language |
| `getHreflangCode(locale)` | Converts `"en"` to `"en-US"`, `"es"` to `"es-MX"` |

### How `routeFor` Works

```typescript
export const routeFor = {
  en: {
    home: "/en/",
    "services/tech-english": "/en/services/tech-english/",
    // ... ~75 entries
  },
  es: {
    home: "/es/",
    "services/tech-english": "/es/servicios/ingles-para-tecnologia/",
    // ... ~75 entries (same TKeys, localized paths)
  },
};
```

Both locale objects share the exact same set of TKeys. The EN paths use English slugs; the ES paths use Spanish slugs. This is what enables automatic hreflang pairing — the system finds the same TKey in both locales and links them.

---

## Adding Content — What to Update Where

### New Static Page

1. **`src/lib/i18n.ts`**: Add TKey to the type union, add paths to `routeFor.en` and `routeFor.es`, add to `getAllTKeys()` array
2. **`src/pages/en/` and `src/pages/es/`**: Create both page files using `Base.astro` with `lang` and `tkey` props
3. **Nothing else** — both HTML hreflang and sitemap hreflang resolve automatically from `routeFor`

### New Blog Post (Bilingual)

1. **Blog frontmatter**: Add `translations` object with both `en` and `es` paths in both the EN and ES markdown files
2. **`astro.config.mjs`**: Add the EN slug -> ES path entry to the `blogTranslations` object (line 23)
3. **Nothing else** — frontmatter drives HTML hreflang; `blogTranslations` drives sitemap hreflang

### New Blog Post (Single Language)

1. **Blog frontmatter**: Omit the `translations` field (or include only the current language)
2. **`astro.config.mjs`**: Don't add to `blogTranslations`
3. The sitemap will use the Tier 3 self-referencing fallback

---

## Debugging Hreflang Issues

### Check HTML `<head>` output
View page source and search for `hreflang`. Every page should have:
- `hreflang="en-US"` pointing to the English version
- `hreflang="es-MX"` pointing to the Spanish version
- `hreflang="x-default"` pointing to the English version

### Check sitemap output
After `npm run build`, inspect `dist/sitemap-0.xml`. Each `<url>` entry should have matching `<xhtml:link>` elements.

### Common problems

| Symptom | Cause | Fix |
|---------|-------|-----|
| Blog post hreflang points to `/en/blog/` instead of actual post URL | Using `tkey="blog"` instead of `customHreflangs` | Pass `customCanonical` and `customHreflangs` to Base.astro |
| Sitemap missing hreflang for a blog post | Missing entry in `blogTranslations` in `astro.config.mjs` | Add the EN slug -> ES path mapping |
| Static page missing hreflang | TKey not in `getAllTKeys()` array | Add it to `src/lib/i18n.ts` `getAllTKeys()` |
| Mismatched hreflang between HTML and sitemap | Frontmatter `translations` and `blogTranslations` map disagree | Ensure both use identical paths |
| Page excluded from sitemap | Caught by `filter()` rules | Check filter logic in `astro.config.mjs` (line 128) |

---

## File Reference

| File | Role |
|------|------|
| `src/lib/i18n.ts` | Central i18n routing — TKey definitions, `routeFor` map, helper functions |
| `src/layouts/Base.astro` | HTML `<head>` hreflang rendering (lines 84-129) |
| `astro.config.mjs` | Sitemap generation — `filter()`, `serialize()`, `blogTranslations` (lines 23-357) |
| `src/content/blog/en/*.md` | Blog post frontmatter with `translations` field |
| `src/content/blog/es/*.md` | Spanish blog post frontmatter with `translations` field |
