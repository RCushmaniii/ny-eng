# Bilingual (i18n) + World-Class Sitemap + SEO Indexing — Implementation & Handoff Guide

This is the complete, portable spec for how NY English Teacher achieves a **100%
technical-SEO audit** with a fully bilingual (EN/ES) Astro site: clean URL routing,
correct hreflang everywhere, a hand-tuned sitemap, and automated submission to Google
Search Console, Bing Webmaster Tools, and IndexNow.

Copy this (and the referenced source files) into any CushLabs Astro site that needs a
bilingual structure + best-in-class indexing.

**Live reference:** https://www.nyenglishteacher.com
**Stack:** Astro 5 (static output) · `@astrojs/sitemap` · Vercel hosting.

---

## Part 1 — The bilingual (i18n) architecture

The whole system rests on **one source of truth**: a typed route map in
`src/lib/i18n.ts`. Everything else (canonical URLs, hreflang tags, the sitemap,
the language switcher) derives from it. This is *the* reason the audit is clean —
there is no place for EN and ES to drift apart.

### 1.1 The route map — `src/lib/i18n.ts`

```typescript
export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

// A "translation key" (TKey) is a stable, language-neutral page identity.
// e.g. "services/executive-english" maps to BOTH the EN and ES URL.
export type TKey =
  | "home"
  | "about"
  | "services/executive-english"
  | "course/intermediate/unit-1"
  // ...one entry per logical page
  ;

// The map: every TKey → its EN path AND its ES path.
export const routeFor: Record<Locale, Record<TKey, string>> = {
  en: {
    home: "/en/",
    "services/executive-english": "/en/services/executive-english/",
    // ...
  },
  es: {
    home: "/es/",
    // NOTE: ES paths use SPANISH slugs, not translated-in-place English:
    "services/executive-english": "/es/servicios/ingles-para-ejecutivos/",
    // ...
  },
};
```

**Key design decisions that make the audit pass:**

1. **Language-neutral `TKey` identity.** A page is "the executive-English service
   page" regardless of language. Both URLs hang off the same key, so they can never
   point at the wrong alternate.

2. **Spanish slugs are genuinely Spanish, not English-in-`/es/`.** `services` →
   `servicios`, `executive-english` → `ingles-para-ejecutivos`, `book` → `reservar`,
   `course` → `curso`, `unit-1` → `unidad-1`. This is a real ranking signal for the
   `es-MX` audience and a credibility signal to native readers. (Mexican Spanish per
   the CushLabs standard — never Iberian.)

3. **Trailing slashes everywhere, consistently.** Every path ends in `/`. Astro is
   configured `trailingSlash: "ignore"` + `build.format: "directory"` so each page
   becomes `index.html` in a directory. Canonicals, hreflang, and sitemap all enforce
   the trailing slash — no `/page` vs `/page/` duplicate-content splits.

### 1.2 Helper functions (also in `i18n.ts`)

```typescript
// hreflang attribute value (hyphen form): "en-US" / "es-MX"
export function getHreflangCode(locale: Locale): string {
  return locale === "en" ? "en-US" : "es-MX";
}

// OG locale meta (underscore form): "en_US" / "es_MX"
export function getLocaleCode(locale: Locale): string {
  return locale === "en" ? "en_US" : "es_MX";
}

// All alternates for a page (used by the language switcher + sitemap)
export function alternates(tkey: TKey) {
  return locales.map((lng) => ({ lang: lng, href: routeFor[lng][tkey] }));
}

// Returns every TKey — consumed by the sitemap's serialize() to attach hreflang.
export function getAllTKeys(): TKey[] { /* explicit array of all keys */ }
```

> **`es-MX`, not `es-ES`.** The hreflang region code is committed at the technical
> layer (`getHreflangCode`). The content must match — Mexican Professional Spanish.

### 1.3 Per-page wiring — `src/layouts/Base.astro`

Every page renders through `Base.astro`, which takes `lang` + `tkey` props and emits
**all** the head SEO automatically. Page authors never hand-write hreflang.

```astro
---
const lang = "en";
const tkey = "services/executive-english"; // must exist in routeFor
---
<Base {lang} {tkey} title="..." description="...">
  <!-- page content -->
</Base>
```

`Base.astro` then:

- **Fails fast** if `lang` is missing, or if neither `tkey` nor `customHreflangs` is
  given (a missing route throws at build time — broken i18n can't ship).
- Computes the **canonical** from `routeFor[lang][tkey]`.
- Builds **hreflang alternates** for every locale from the same key, plus an
  **`x-default`** pointing at the EN (default-locale) URL.
- Emits **Open Graph** (`og:locale` + `og:locale:alternate`), **Twitter Card**,
  article timestamps in **ISO-8601 with `-06:00` (Mexico City)** timezone, robots
  (`index,follow,max-image-preview:large`), canonical, favicons, and
  `<link rel="sitemap" href="/sitemap-index.xml">`.

The head output per page (simplified):

```html
<link rel="canonical" href="https://www.nyenglishteacher.com/en/services/executive-english/" />
<link rel="alternate" hreflang="en-US" href="https://www.nyenglishteacher.com/en/services/executive-english/" />
<link rel="alternate" hreflang="es-MX" href="https://www.nyenglishteacher.com/es/servicios/ingles-para-ejecutivos/" />
<link rel="alternate" hreflang="x-default" href="https://www.nyenglishteacher.com/en/services/executive-english/" />
```

> **The `customCanonical` / `customHreflangs` escape hatch.** Dynamic pages (blog posts
> from content collections, paginated lists) that don't have a static `TKey` pass
> `customCanonical` + `customHreflangs` props instead. Same head output, computed from
> the content's own translation map.

### 1.4 Directory structure

```
src/pages/
├── en/            # English pages
│   ├── services/executive-english.astro
│   └── course/intermediate/unit-1.astro
└── es/            # Spanish MIRROR — Spanish slugs
    ├── servicios/ingles-para-ejecutivos.astro
    └── curso/intermedio/unidad-1.astro
```

The folder names match the `routeFor` paths exactly. Add a page in both trees, then
add its `TKey` to `i18n.ts` — the layout + sitemap pick it up automatically.

### 1.5 Adding a new bilingual page (the whole checklist)

1. Create the page in `src/pages/en/...` **and** `src/pages/es/...` (Spanish slug).
2. Add the `TKey` to the `TKey` union type in `i18n.ts`.
3. Add the EN path to `routeFor.en` and the ES path to `routeFor.es`.
4. Add the `TKey` to the `getAllTKeys()` array (so the sitemap attaches hreflang).
5. Render via `<Base {lang} {tkey} ...>`. Done — canonical, hreflang, OG, sitemap
   entry all generate themselves.

---

## Part 2 — The world-class sitemap

Generated by `@astrojs/sitemap` in `astro.config.mjs`, but heavily customized via
`filter()` and `serialize()`. The default plugin output would **not** pass the audit —
the customization is what earns the 100%.

### 2.1 Plugin config

```js
import sitemap from "@astrojs/sitemap";

sitemap({
  changefreq: "weekly",
  priority: 0.7,
  lastmod: new Date(),
  i18n: {
    defaultLocale: "en",
    locales: { en: "en-US", es: "es-MX" },
  },
  customPages: [],
  filter: (pageUrl) => { /* see 2.2 */ },
  serialize: (item) => { /* see 2.3 */ },
}),
```

Output is a **sitemap index** at `/sitemap-index.xml` referencing `/sitemap-0.xml`.
That index URL is what's referenced in `robots.txt`, in `Base.astro`'s
`<link rel="sitemap">`, and in every submission script.

### 2.2 `filter()` — exclude everything that shouldn't be indexed

This is half the battle for a clean audit: **the sitemap must contain only canonical,
indexable, 200-status pages.** The filter drops:

- `/api/`, `/_*` (internal/Astro), `/dev/`, `/admin/` (critical — never leak admin)
- `/thank-you` (thin content), `/chat` (internal tool)
- Quiz machinery: `/quiz/*/question/N`, `/quiz/*/report`, `/quiz/*/results`
- Blog **pagination** (`/blog/2/`) but NOT blog posts (`/blog/some-post/`)
- Anything with `[` (un-rendered dynamic route), `#`, `-bak` (backups)
- **Redirect sources** — paths like `/blog`, `/services`, `/contact` that 301 to
  `/en/...`. Including a URL that redirects is an audit failure (non-canonical in
  sitemap). They're listed in a `redirectPaths` array and filtered out.
- Double-language-prefix bugs (`/en/.../es/...`)

### 2.3 `serialize()` — normalize URLs, attach hreflang, tune priority

For every surviving URL, `serialize()`:

1. **Normalizes** — forces a single trailing slash, strips `?query` and `#hash`,
   drops the bare root `/` (it redirects to `/en/`).
2. **Attaches `<xhtml:link rel="alternate" hreflang>`** pairs by matching the URL back
   to the i18n system. It walks `getAllTKeys()`, finds the `TKey` whose EN or ES path
   equals this URL, and emits both alternates. **This is the critical bit** — sitemap
   hreflang annotations must agree with the on-page `<head>` hreflang, and because both
   derive from the same `routeFor` map, they always do.
3. Has **dedicated matchers** for dynamic page families that aren't static TKeys, each
   with its own EN↔ES translation map declared at the top of `astro.config.mjs`:
   - **Blog posts** — `blogTranslations` (EN slug → ES path) + auto-generated reverse map.
   - **Category archives** — `categoryTranslations` (`tech-english` ↔ `ingles-para-tecnologia`).
   - **Course unit/exam/capstone pages** — `courseTranslations` (course slug) +
     `courseLeafTranslations` (`unit-1` ↔ `unidad-1`, `exam` ↔ `examen`).
   - **Testimonial industry subpages** — same slug, different path prefix.
4. **Self-referencing fallback** — any `/en/` or `/es/` page that somehow matched no
   map still gets a self-hreflang so no URL ships bare.
5. **Per-content-type `priority` / `changefreq` / `lastmod`:** homepages `1.0` weekly;
   services `0.8` yearly; blog posts/index `0.7`; quizzes/testimonials/resources `0.6`;
   categories `0.5` weekly; legal `0.3` yearly.

> **`lastmod` uses STABLE hard-coded dates per content type, NOT `new Date()`.** Using
> build time would stamp *every* URL with *today* on every deploy — search engines
> learn to distrust a sitemap that claims everything changed at once. Stable dates per
> section keep `lastmod` honest. This is a deliberate, audit-relevant choice.

### 2.4 Redirects live in `vercel.json`, NOT Astro

Astro static mode emits **meta-refresh** redirect HTML, which **Bing flags as an
error**. So all 301s are defined in `vercel.json`'s `redirects` array (real HTTP 301s),
and the sitemap `filter()` excludes the redirect *sources*. Don't use Astro's `redirect`
config on a site you want to audit clean.

### 2.5 `robots.txt` (`public/robots.txt`)

```
User-agent: *
Disallow:

Sitemap: https://www.nyenglishteacher.com/sitemap-index.xml
```

Allow-all + an explicit `Sitemap:` line. The sitemap reference in robots.txt is how
crawlers that don't use the submission APIs still find it.

---

## Part 3 — Search-engine indexing automation

Three independent channels, all driven by Node scripts in `scripts/seo/`. Per the
project's "do the work" standard, Claude runs these automatically after publishing —
they are never a manual to-do for Robert.

| Channel | Script | Reaches |
|---------|--------|---------|
| Google Search Console + Indexing API | `gsc-submit-urls.mjs` | Google |
| Bing Webmaster Tools API | `bing-submit.mjs` | Bing |
| IndexNow protocol | `indexnow-submit.mjs` | Bing, Yandex, DuckDuckGo, Seznam, Naver |

### 3.1 Shared Google auth — `scripts/seo/gsc-client.mjs`

All Google calls authenticate through one client using a **service account**, decoded
from a base64 env var (no credential file on disk):

```js
// Credentials: GOOGLE_SA_KEY_BASE64 in .env.local (base64 of the service-account JSON)
// SA: seo-api-access@seo-automation-489217.iam.gserviceaccount.com
// Scopes: webmasters, webmasters.readonly, indexing
export const SITE_PROPERTY = 'sc-domain:nyenglishteacher.com'; // domain property
```

Setup once per site: create the SA in Google Cloud, enable the **Search Console API**
and **Indexing API**, then add the SA email as an **Owner** in Google Search Console
for the property. The same SA can serve multiple CushLabs domains.

### 3.2 Google submission — `gsc-submit-urls.mjs`

```bash
node scripts/seo/gsc-submit-urls.mjs --sitemap          # (re)submit the sitemap to GSC
node scripts/seo/gsc-submit-urls.mjs --url https://...   # push one URL via Indexing API
node scripts/seo/gsc-submit-urls.mjs --url https://... --removed  # notify URL_DELETED
node scripts/seo/gsc-submit-urls.mjs                     # submit every blog URL
```

`--sitemap` calls `webmasters.sitemaps.submit` then lists registered sitemaps + error
counts. Single-URL uses the Indexing API (`urlNotifications.publish`,
`URL_UPDATED`/`URL_DELETED`).

### 3.3 Bing submission — `bing-submit.mjs`

```bash
node scripts/seo/bing-submit.mjs                 # submit all sitemap URLs (batched ≤500)
node scripts/seo/bing-submit.mjs --url https://...   # single URL
```

POSTs to `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey=...`. Needs
`BING_WEBMASTER_TOOLS_API_KEY`. Reads the live sitemap, expands the sitemap *index* into
its child sitemaps, dedupes, batches by 500 (Bing's per-request cap). Every submission
is appended to `scripts/seo/.submissions/bing-webmaster.jsonl` for an audit trail.

### 3.4 IndexNow submission — `indexnow-submit.mjs`

```bash
node scripts/seo/indexnow-submit.mjs                 # submit all sitemap URLs
node scripts/seo/indexnow-submit.mjs --url https://...   # single URL
```

POSTs to `https://api.indexnow.org/indexnow` **and** `https://www.bing.com/indexnow`
(redundancy). One ping fans out to all participating engines. Needs `INDEXNOW_KEY`, and
the key must be verifiable at a public URL — a text file whose name **is** the key:
`public/<INDEXNOW_KEY>.txt` containing the key. (Ours: `public/68c9...e71.txt`.)

### 3.5 Other SEO scripts in `scripts/seo/`

| Script | Purpose |
|--------|---------|
| `gsc-client.mjs` | Shared Google auth client (import-only) |
| `gsc-performance.mjs` | Pull clicks / impressions / CTR / position from GSC |
| `gsc-index-status.mjs` | Check a URL's index status via the Inspection API |

---

## Part 4 — Environment variables (SEO/indexing)

All server-side / local-only; none are `PUBLIC_`. Live in `.env.local` (or `.env`).

| Variable | Used by | Notes |
|----------|---------|-------|
| `GOOGLE_SA_KEY_BASE64` | `gsc-client.mjs` (all Google scripts) | base64 of the service-account JSON. Decode → JSON → GoogleAuth. |
| `BING_WEBMASTER_TOOLS_API_KEY` | `bing-submit.mjs` | From Bing Webmaster Tools → API Access. |
| `INDEXNOW_KEY` | `indexnow-submit.mjs` | Arbitrary key; must match `public/<key>.txt`. Ours: `68c9a0e54a33fa63d4e4384ebe910e71`. |

> **Secret hygiene:** never print these values; verify by key *name* only. The service
> account JSON is sensitive — keep it only as the base64 env var, never commit the file.

---

## Part 5 — Fully-qualified URLs / endpoints

### Live SEO artifacts

| URL | What |
|-----|------|
| https://www.nyenglishteacher.com/sitemap-index.xml | Sitemap index (the one to submit everywhere) |
| https://www.nyenglishteacher.com/sitemap-0.xml | Child sitemap with the actual `<url>` entries |
| https://www.nyenglishteacher.com/robots.txt | Allow-all + Sitemap reference |
| https://www.nyenglishteacher.com/68c9a0e54a33fa63d4e4384ebe910e71.txt | IndexNow key verification file |

### API endpoints the scripts call

| Endpoint | Channel |
|----------|---------|
| `https://searchconsole.googleapis.com` (via `googleapis` SDK) | GSC sitemaps + URL inspection |
| `https://indexing.googleapis.com` (via `googleapis` SDK) | Google Indexing API |
| `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch` | Bing Webmaster Tools |
| `https://api.indexnow.org/indexnow` | IndexNow (multi-engine) |
| `https://www.bing.com/indexnow` | IndexNow (Bing direct, redundancy) |

### Dashboards & verification (setup / monitoring)

| URL | Purpose |
|-----|---------|
| https://search.google.com/search-console | Google Search Console — add property, add SA as Owner, watch coverage |
| https://www.bing.com/webmasters | Bing Webmaster Tools — verify site, get API key |
| https://console.cloud.google.com/apis/library | Enable Search Console API + Indexing API for the SA's project |
| https://www.indexnow.org/ | IndexNow protocol reference |
| https://search.google.com/test/rich-results | Validate JSON-LD structured data |
| https://validator.schema.org/ | Schema.org structured-data validator |

---

## Part 6 — Post-publish runbook (what runs after new content ships)

This is the mandatory sequence from `CLAUDE.md` "SEO & Marketing Automation":

1. **Build & deploy** — build, commit, push, wait for Vercel.
2. **Google** — `node scripts/seo/gsc-submit-urls.mjs --sitemap`
3. **Bing (API)** — `node scripts/seo/bing-submit.mjs --url <new-url>`
4. **IndexNow** — `node scripts/seo/indexnow-submit.mjs --url <new-url>`
5. **New blog post?** Add the EN↔ES mapping to `blogTranslations` in `astro.config.mjs`
   so the sitemap emits correct hreflang for it.
6. **Verify structured data** — confirm Article / BreadcrumbList / FAQ JSON-LD present.

---

## Part 7 — Why each piece earns audit points (quick reference)

| Audit concern | How this setup satisfies it |
|---------------|-----------------------------|
| Duplicate content (EN/ES, slash variants) | Single `routeFor` map; canonical + hreflang derive from it; forced trailing slashes |
| Missing/incorrect hreflang | `Base.astro` emits per-page; sitemap re-emits from same source; `x-default` present |
| Sitemap contains non-canonical URLs | `filter()` drops redirects, admin, thin/dynamic/internal pages |
| Sitemap `lastmod` distrust | Stable per-section dates, not build-time `new Date()` |
| Redirect/meta-refresh errors (Bing) | All 301s in `vercel.json`, not Astro meta-refresh |
| Slow/partial indexing | Three submission channels (GSC + Bing API + IndexNow) run on every publish |
| Orphaned/unfound sitemap | Referenced in `robots.txt`, `<head>`, and all submitters |
| Social/share correctness | OG + Twitter + locale alternates in `Base.astro` |

---

## Setup checklist for a new bilingual Astro site

1. Copy `src/lib/i18n.ts` → replace the `TKey` union + `routeFor` map with the new
   site's pages (Spanish slugs for ES).
2. Copy the SEO head logic from `src/layouts/Base.astro` into the new layout.
3. Copy the `@astrojs/sitemap` config block from `astro.config.mjs` (filter + serialize
   + the EN↔ES translation maps); adjust the dynamic-page matchers to the new site's
   URL families.
4. Add `public/robots.txt` with the `Sitemap:` line pointing at the new domain.
5. Define all 301s in `vercel.json` `redirects` (not Astro).
6. Copy `scripts/seo/` (gsc-client, gsc-submit-urls, bing-submit, indexnow-submit).
7. Provision: Google service account (+ enable both APIs, add as GSC Owner), Bing
   Webmaster API key, an IndexNow key + `public/<key>.txt`.
8. Set `GOOGLE_SA_KEY_BASE64`, `BING_WEBMASTER_TOOLS_API_KEY`, `INDEXNOW_KEY`.
9. Deploy, then run the Part 6 runbook once for the full site.
