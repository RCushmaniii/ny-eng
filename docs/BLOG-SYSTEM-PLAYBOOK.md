# World-Class Bilingual Blog System — Build Playbook

> **What this is.** A complete, reproducible specification of the blog system built for
> **NY English Teacher** (`https://www.nyenglishteacher.com`) — an Astro-based, fully
> bilingual (EN + es-MX), SEO-maximized, great-UX blogging engine. It is written two ways
> at once:
>
> 1. **Reference documentation** — every subsystem, every file, every fully-qualified path.
> 2. **A copy-paste build brief for an AI assistant** in a *new* repo. Hand the AI this
>    file and it can scaffold an equivalent blog from zero.
>
> **Source repo (the reference implementation):** `C:\Users\Robert Cushman\Projects\ny-eng`
> All paths in this document are given fully-qualified against that repo root so the AI can
> read the originals directly if the repo is available, or reconstruct them if not.
>
> **Authoritative companion docs already in the source repo:**
> - `C:\Users\Robert Cushman\Projects\ny-eng\docs\BILINGUAL-SEO-SITEMAP.md` — the portable spec for the whole bilingual SEO system (best single reference).
> - `C:\Users\Robert Cushman\Projects\ny-eng\docs\architecture\SITEMAP-HREFLANG-SYSTEM.md` — sitemap + hreflang internals.
> - `C:\Users\Robert Cushman\Projects\ny-eng\docs\architecture\BLOG-I18N-EDGE-CASES.md` — blog i18n edge cases.

---

## 0. Design goals (why this is "world-class")

A blog is world-class when it wins on **three axes simultaneously**. Every design decision
below traces to one of these.

| Axis | What it means here | How this system delivers it |
|---|---|---|
| **Search visibility** | Rank, get crawled, get indexed, earn rich results | Per-post JSON-LD (Article + Breadcrumb + optional FAQ + optional local Service), hand-tuned hreflang sitemap, automated GSC/Bing/IndexNow submission, hard build-time SEO gates |
| **User experience** | Fast, readable, navigable, shareable | `astro:assets` image optimization, `@tailwindcss/typography` prose, related posts, prev/next, share bar, category filtering, click-to-zoom images, optional TTS |
| **Operability** | A non-expert can publish safely; drift can't ship | Content Collection schema (typed frontmatter), a build that *fails* on bad SEO, a documented per-post publishing checklist, validators for hreflang/canonical/links |

**Core architectural principle:** *the build refuses to ship broken SEO.* Title too long,
meta description outside 120–160 chars, canonical/sitemap mismatch, or a missing critical
URL → `npm run build` exits non-zero → Vercel deploy is blocked. SEO quality is enforced by
CI, not by discipline.

---

## 1. Tech stack & prerequisites

The reference implementation uses:

- **Astro 6** (`astro ^6.3.1`), `output: "static"`, `trailingSlash: "ignore"`, `build.format: "directory"`
- **React 19 islands** via `@astrojs/react` — only for interactive bits (lightbox, video hero, flip cards, TTS)
- **MDX** via `@astrojs/mdx` — most posts are `.md`; MDX only when a post embeds a component
- **Tailwind CSS 3.4** + `@tailwindcss/typography` (+ `forms`, `aspect-ratio`)
- **`@astrojs/sitemap ^3.7.2`** — with a heavily customized `serialize()` for hreflang
- **TypeScript 5.9 strict**
- **Content parsing:** `gray-matter`, `marked`, `node-html-parser`, `js-yaml`
- **SEO APIs:** `googleapis` (GSC + Indexing), Bing Webmaster API, IndexNow protocol
- **Images:** `sharp`
- **Hosting:** Vercel (static + serverless), redirects/headers via `vercel.json`
- **Package manager:** the reference repo uses `npm`. For a *new* CushLabs repo, use `pnpm`.

> **AI build note:** You do **not** need `zod` as a direct dependency — Astro re-exports it
> from `astro:content`. The reference repo has no `@astrojs/rss` and **no RSS feed** — add
> one in the new repo (see §12, "Improvements to make").

---

## 2. The 8-layer build order (dependency-sorted)

Build in exactly this order. Each layer depends only on the ones above it.

```
1. Config & settings        → src/data/config.ts
2. i18n routing map         → src/lib/i18n.ts
3. Content Collection schema→ src/content.config.ts
4. Structured-data (JSON-LD)→ src/components/seo/*.astro
5. Base layout (SEO hub)    → src/layouts/Base.astro
6. Blog pages (list/detail) → src/pages/{en,es}/blog/*.astro
7. Blog UI components       → src/components/blog/*, src/components/ui/*
8. Sitemap + automation     → astro.config.mjs, scripts/seo/*, validators
```

The rest of this document walks each layer with the exact files, paths, and patterns.

---

## 3. Layer 1 — Config & settings

**File:** `C:\Users\Robert Cushman\Projects\ny-eng\src\data\config.ts`

Holds the single-source constants the whole blog reads:

- `siteConfig.companyName`, `siteConfig.siteUrl` (`https://www.nyenglishteacher.com`)
- `siteConfig.Socials` (LinkedIn / Instagram / X — consumed by author schema)
- `blogSetting.postsPerPage = 6`

> **Gotcha carried forward:** in the reference repo, `siteConfig.Socials.Location` and
> `.Phone` are **stale/decorative** — the *real* NAP (business name, address, phone) is
> hard-coded in the schema components (Layer 4). In the new repo, make `config.ts` the
> single NAP source of truth and have the schema components import from it. Don't repeat the
> split-brain.

---

## 4. Layer 2 — i18n routing map (the backbone)

**File:** `C:\Users\Robert Cushman\Projects\ny-eng\src\lib\i18n.ts`

This is the **single source of truth for every translatable *page*** (not blog posts —
those are handled separately, see below). It defines:

- `locales = ["en", "es"]`, `defaultLocale = "en"`
- **`TKey`** — a string-literal union, one key per translatable page (`home`, `about`,
  `blog`, `blog/page`, `services/*`, `resources/*`, `legal/*`, `category/${slug}`, `quiz/*`,
  `course/*`, etc.). **Blog *posts* are deliberately NOT in `TKey`** — they use per-page
  `customHreflangs` instead (see Layer 6).
- **`routeFor: Record<Locale, Record<TKey, string>>`** — maps each `TKey` to its EN and ES
  path. ES paths use *Spanish slugs* (`/es/servicios/`, `/es/recursos/`, `/es/categoria/`).
- Helper functions:
  - `alternates(tkey)` → `[{lang, href}]` for all locales
  - `canonical(tkey, lng)` → the path
  - `getLocaleCode(locale)` → `en_US` / `es_MX` (Open Graph, **underscores**)
  - `getHreflangCode(locale)` → `en-US` / `es-MX` (hreflang, **hyphens**)
  - `toAbsoluteUrl(path, siteUrl)`
  - `getAllTKeys()` → curated list consumed by the sitemap serializer

**How hreflang is generated for a normal static page:** the page passes its `tkey`;
`Base.astro` loops the locales in `routeFor`, builds `SITE + routeFor[locale][tkey]` for
each, and emits one `<link rel="alternate" hreflang={getHreflangCode(locale)}>` per locale,
plus an `x-default` pointing at the EN route.

> **es-MX, not es-ES.** The hreflang code is `es-MX` because the audience is Mexican
> professionals. All Spanish content must be **Mexican Professional Spanish** — never
> Iberian. (No `vosotros`, `vale`, `coger`, `móvil` for phone, `ordenador`, etc.) When you
> translate EN→ES with any AI tool, the prompt **must literally say "Mexican Professional
> Spanish."** See the source repo's `CLAUDE.md` for the full forbidden-marker list.

---

## 5. Layer 3 — Content Collection schema (typed frontmatter)

**File:** `C:\Users\Robert Cushman\Projects\ny-eng\src\content.config.ts`
(Note: it is `src/content.config.ts`, **not** `src/content/config.ts`.)

Uses the Astro **glob loader** so post IDs are language-prefixed by folder:

```ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      featuredImage: image().optional(),
      imageAlt: z.string().optional(),
      heroVideo: z.string().optional(),
      heroVideoPoster: z.string().optional(),
      publishDate: z.string().transform((str) => new Date(str)),
      lastmod: z.string().transform((str) => new Date(str)).optional(),
      publish: z.boolean().optional().default(true),
      categories: z.array(z.string()).optional().default([]),
      readingTime: z.string().optional(),
      audience: z.string().optional(),
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          image: z.string().optional(),
        })
        .optional(),
      ttsVoice: z.string().optional(),
      // When present → post emits FAQPage structured data
      faq: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
      // When present → post emits local Service structured data (geo landing posts)
      serviceArea: z.array(z.string()).optional(),
      translations: z.object({ en: z.string().optional(), es: z.string().optional() }).optional(),
    }),
});

export const collections = { blog: blogCollection /*, legal: ... */ };
```

**Field reference:**

| Field | Type | Req | Default | Drives |
|---|---|---|---|---|
| `title` | string | ✅ | — | H1 + fallback SEO title |
| `excerpt` | string | ✅ | — | Card text + fallback meta description |
| `publishDate` | string→Date | ✅ | — | Sort order, `datePublished` |
| `categories` | string[] | ⛔ | `[]` | Filtering, related posts, `articleSection` |
| `featuredImage` | `image()` | ⛔ | — | Card + hero + OG image (optimized) |
| `imageAlt` | string | ⛔ | — | Alt text |
| `lastmod` | string→Date | ⛔ | — | `dateModified` |
| `publish` | boolean | ⛔ | `true` | Excludes drafts from listing/detail/sitemap |
| `readingTime` | string | ⛔ | — | Meta line (hand-authored, e.g. `"8 min read"`) |
| `audience` | string | ⛔ | — | Meta line |
| `seo.title` | string | ⛔ | — | Overrides `<title>` (use to keep ≤60 chars) |
| `seo.description` | string | ⛔ | — | Overrides meta description (keep 120–160) |
| `seo.image` | string | ⛔ | — | OG image fallback |
| `faq` | {question,answer}[] | ⛔ | — | **Emits FAQPage JSON-LD** |
| `serviceArea` | string[] | ⛔ | — | **Emits local Service JSON-LD** |
| `heroVideo` / `heroVideoPoster` | string | ⛔ | — | Video hero instead of image |
| `ttsVoice` | string | ⛔ | — | Azure TTS voice override |
| `translations` | {en?,es?} | ⛔ | — | Cross-language hreflang link (opposite lang only) |

**Content directory layout:**

```
src/content/blog/
├── en/            # English posts (*.md / *.mdx). id = "en/<slug>"
├── es/            # Spanish posts.               id = "es/<slug>"
└── images/        # shared images (referenced ./images/... from frontmatter)
```

Language is derived from `post.id.startsWith("en/")` / `"es/"` — there is **one flat `blog`
collection**, not one collection per language.

**Example post frontmatter** (`...\src\content\blog\en\master-business-english.md`):

```yaml
---
title: "Business English Coaching: Speak With Authority & Grow Your Career"
excerpt: "One-on-one online business English coaching for professionals in Mexico. Train meetings, presentations, negotiation, and interviews with a New York coach."
publishDate: "2025-04-03"
lastmod: "2026-07-01"
categories:
  - "Business English"
readingTime: "8 min read"
featuredImage: "./images/business-english-coaching.jpg"
imageAlt: "Online business English coaching session"
translations:
  es: "/es/blog/dominar-negocios"
publish: true
faq:
  - question: "What is business English coaching?"
    answer: "It is one-on-one training focused on how you use English in your real job..."
seo:
  title: "Business English Coaching Online | NY English"
  description: "One-on-one business English coaching for professionals in Mexico. Train meetings, presentations, and negotiation with a New York coach. Free first session."
---
```

Note: an EN post carries only `translations.es` (the opposite language); the ES post carries
`translations.en`. The value may be a full path (`/es/blog/dominar-negocios`) or a bare slug.

---

## 6. Layer 4 — Structured data (JSON-LD)

**Directory:** `C:\Users\Robert Cushman\Projects\ny-eng\src\components\seo\`

Nine `.astro` components, each emitting one `<script type="application/ld+json">` via
`set:html={JSON.stringify(schema)}`. Three are **global** (injected by `Base.astro` on every
page); the rest are **opt-in per page**.

| File | `@type` | Scope | Notes |
|---|---|---|---|
| `OrgSchema.astro` | `Organization` | Global | NAP, contactPoint (phone/email), areaServed. `@id` `#org` |
| `WebsiteSchema.astro` | `WebSite` + `SearchAction` | Global | `@id` `#website`, sitelinks searchbox |
| `ProfessionalServiceSchema.astro` | `ProfessionalService` | Global | Full NAP + PostalAddress + GeoCoordinates + `OfferCatalog`. `@id` `#professional-service` |
| `BlogPostSchema.astro` | `Article` | Blog detail | author Person (`#robert-cushman`) + publisher Org (`#org`) |
| `BreadcrumbSchema.astro` | `BreadcrumbList` | Detail + others | generic, takes `items[]` |
| `FAQSchema.astro` | `FAQPage` | Conditional (`faq` frontmatter) | |
| `LocalServiceSchema.astro` | `Service` | Conditional (`serviceArea` frontmatter) | city-level `areaServed`, geo landing posts |
| `HowToSchema.astro` | `HowTo` | Opt-in | resource/course pages, not blog |
| `QuizSchema.astro` | `LearningResource` | Quiz pages | |

**The graph cross-links by `@id`:** `BlogPostSchema` references publisher `#org` and author
`#robert-cushman`; `LocalServiceSchema` references provider `#professional-service`. This
tells Google these are one connected entity, not three unrelated blobs.

**`BlogPostSchema.astro` — the Article node** (emits `Article`, not `BlogPosting`):

```js
const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description: description,
  image: imageUrl,
  datePublished: formatDate(publishDate),
  dateModified: modifiedDate ? formatDate(modifiedDate) : formatDate(publishDate),
  inLanguage: lang === "es" ? "es-MX" : "en-US",
  ...(categories.length ? { articleSection: categories[0] } : {}),
  author: {
    "@type": "Person",
    "@id": `${cleanSiteUrl}/#robert-cushman`,
    name: authorName,
    url: `${cleanSiteUrl}/en/about/`,
    jobTitle: "Business English Coach",
    worksFor: { "@type": "Organization", name: siteConfig.companyName, url: cleanSiteUrl },
    sameAs: [siteConfig.Socials.LinkedIn, siteConfig.Socials.Instagram, siteConfig.Socials.xSocial].filter(Boolean),
    knowsAbout: ["Business English", "Executive Communication", "English Coaching", "Cross-Cultural Communication", "Professional Development"],
  },
  publisher: {
    "@type": "Organization",
    "@id": `${cleanSiteUrl}/#org`,
    name: siteConfig.companyName,
    logo: { "@type": "ImageObject", url: `${cleanSiteUrl}/images/logos/logo-512.png`, width: 512, height: 512 },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": url },
  ...(categories.length ? { keywords: categories.join(", ") } : {}),
};
```

**`BreadcrumbSchema.astro`** (whole logic):

```js
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem", position: i + 1, name: item.name, item: item.url,
  })),
};
```

`FAQSchema` → `FAQPage` with `mainEntity[]` of `Question`/`acceptedAnswer`.
`LocalServiceSchema` → `Service` with `areaServed` mapped to `AdministrativeArea[]` + a
free-session `Offer` (`price: "0"`), rendered only when `serviceArea.length > 0`.

> **NAP consistency is a ranking factor.** Name/Address/Phone must be *byte-identical*
> across `OrgSchema`, `ProfessionalServiceSchema`, your Google Business Profile, and every
> citation. A prior PR in the source repo (#210) existed solely to fix NAP drift. In the new
> repo: put NAP in `config.ts`, import it everywhere, never hand-type it twice.

---

## 7. Layer 5 — Base layout (the SEO hub)

**File:** `C:\Users\Robert Cushman\Projects\ny-eng\src\layouts\Base.astro`

Every page routes through `Base`. It computes canonical + hreflang **two ways** and emits
the entire `<head>`.

**Canonical / hreflang logic:**

```js
if (customCanonical && customHreflangs) {
  // Blog posts, pagination, category pages pass these explicitly
  canonicalUrl = ensureSlash(customCanonical);
  alternates = customHreflangs.map((a) => ({ lang: a.lang, href: ensureSlash(a.href) }));
  xDefault = ensureSlash(customHreflangs.find((a) => a.lang.startsWith("en"))?.href || canonicalUrl);
} else {
  // Normal static pages derive everything from routeFor[lang][tkey]
  const relPath = i18n.routeFor[lang]?.[tkey];
  canonicalUrl = SITE + ensureSlash(relPath);
  alternates = Object.keys(i18n.routeFor).map((l) => ({
    lang: l, href: SITE + ensureSlash(i18n.routeFor[l]?.[tkey] ?? ""),
  })).filter((a) => a.href.endsWith("/"));
  xDefault = SITE + ensureSlash(i18n.routeFor[i18n.defaultLocale]?.[tkey] ?? "/en/");
}
```

`Base` **throws at build time** if `lang` is missing, or if neither `tkey` nor
`customHreflangs` is provided — fail-fast so a page can never ship without hreflang.

**Head output includes:**

- `<title>` + `<meta name="description">`
- `<link rel="canonical">` (and `og:url` reuses it)
- hreflang loop: one `<link rel="alternate" hreflang>` per locale + `x-default`
  (custom path uses `a.lang` verbatim; i18n path runs through `getHreflangCode`)
- **Open Graph:** `og:type` (`website`|`article`), conditional `article:published_time` /
  `article:modified_time` / `article:author` (article only), `og:title/description/image`
  (forced absolute), `og:image:alt/width/height` (default 800×800), `og:locale` +
  `og:locale:alternate`, `og:site_name`
- **Twitter:** `summary_large_image` card
- **Robots:** `noindex ? "noindex,follow" : "index,follow,max-image-preview:large"`
- Dates normalized to Mexico City TZ (`...-06:00`)
- `<link rel="sitemap" href="/sitemap-index.xml">`
- **Global JSON-LD:** `<OrgSchema />`, `<WebsiteSchema />`, `<ProfessionalServiceSchema />`
- Vercel Analytics: `<script defer src="/_vercel/insights/script.js">` just before `</body>`

> **Analytics gotcha (documented lesson):** toggling Analytics "on" in the Vercel dashboard
> only makes Vercel *serve* the script — it does not inject it. You must add the
> `<script defer src="/_vercel/insights/script.js">` tag to the layout yourself or you
> collect zero data.

---

## 8. Layer 6 — Blog pages (routing)

**Directory:** `C:\Users\Robert Cushman\Projects\ny-eng\src\pages\en\blog\` (mirrored at `...\es\blog\`)

**Keep exactly three route files per language** (the clean design):

| File | Role |
|---|---|
| `index.astro` | Listing **page 1** (`/en/blog/`) |
| `[...page].astro` | Pagination (`/en/blog/2/`, `/3/`…) via Astro's `paginate()` |
| `[slug].astro` | Post **detail** (`/en/blog/<slug>/`) |

> **Do NOT also add `[page].astro` and `[...slug].astro`.** In the reference repo those exist
> but are stubbed to return `[]` from `getStaticPaths` to prevent duplicate routes — and the
> ES `[page].astro` was left half-active, creating a real route-collision hazard for page 2+.
> In the new repo, just don't create them. Three files per language, period.

**Listing (`index.astro`):**

```ts
const allPosts = await getCollection("blog");
const filtered = allPosts.filter((p) => p.id.startsWith("en/") && p.data.publish === true); // "es/" in ES
const sorted = filtered.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
const totalPages = Math.ceil(sorted.length / blogSetting.postsPerPage); // postsPerPage = 6
// slice for the current page → pass to <PaginatedBlogLayout>
```

**Pagination (`[...page].astro`):**

```ts
export async function getStaticPaths({ paginate }) {
  const posts = await getCollection("blog");
  const filtered = posts.filter((p) => p.id.startsWith("en/") && p.data.publish === true);
  const sorted = filtered.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
  return paginate(sorted, { pageSize: blogSetting.postsPerPage });
}
```

**Detail (`[slug].astro`)** — the heart of the system. `getStaticPaths`:

```ts
export async function getStaticPaths() {
  const posts = await getCollection("blog");
  const enPosts = posts.filter((p) => p.id.startsWith("en/") && p.data.publish !== false);
  return enPosts.map((post) => {
    const { segments } = normalizeBlogSlug(post.id);   // from src/utils/i18nRoutes.ts
    const slug = segments[0] || "";
    const canonicalUrl = buildPostUrl("en", slug);      // -> /en/blog/<slug>/
    return { params: { slug }, props: { post, canonicalUrl } };
  });
}
```

The detail page then, in its component body:

1. **Renders content:** `const { Content } = await render(post)`.
2. **Derives SEO:** `seoTitle = post.data.seo?.title || post.data.title`, etc.
3. **Builds OG image URL** by extracting a public path from the hashed `astro:assets` object
   (regex `/images/(.+)$` → `/en/blog/images/...`), fallback `post.data.seo.image`.
4. **Prev/Next:** by index in the date-sorted same-language array — `[i+1]` = older, `[i-1]` = newer.
5. **Related posts:** category-overlap scoring (see below), top 3.
6. **Builds `customHreflangs`** from `post.data.translations.es` (EN) / `.en` (ES):

```ts
const spanishTranslation = post.data.translations?.es;       // "/es/blog/dominar-negocios" or "dominar-negocios"
const extractSlug = (p) => (p?.startsWith("/") ? p.split("/").filter(Boolean).pop() : p) || null;
const spanishSlug = extractSlug(spanishTranslation);
const customHreflangs = [
  { lang: "en-US", href: currentUrl },
  ...(spanishSlug ? [{ lang: "es-MX", href: cleanBlogUrl(`${SITE}/es/blog/${spanishSlug}/`) }] : []),
];
```

7. **Wires schema components** as children of `<Base>`:

```jsx
<Base lang="en" customCanonical={currentUrl} customHreflangs={customHreflangs}
      title={seoTitle} description={seoDescription} ogType="article"
      articlePublishedTime={post.data.publishDate.toISOString()}
      articleModifiedTime={(post.data.lastmod ?? post.data.publishDate).toISOString()}
      articleAuthor="Robert Cushman"
      ogImage={featuredUrl ? { src: featuredUrl, alt: post.data.imageAlt, width: 1200, height: 675 } : undefined}>

  <BlogPostSchema title={post.data.title} description={post.data.excerpt}
    publishDate={post.data.publishDate} image={featuredUrl} url={postUrl}
    authorName="Robert Cushman" categories={post.data.categories} lang="en" />

  <BreadcrumbSchema items={[
    { name: "Home", url: `${SITE}/en/` },
    { name: "Blog", url: `${SITE}/en/blog/` },
    { name: post.data.title, url: `${SITE}${postUrl}` },
  ]} />

  {post.data.faq?.length > 0 && <FAQSchema faqs={post.data.faq} />}
  {post.data.serviceArea?.length > 0 &&
    <LocalServiceSchema name={post.data.title} description={post.data.excerpt}
      url={`${SITE}${postUrl}`} areaServed={post.data.serviceArea} lang="en" />}

  {/* ...visual page below... */}
</Base>
```

**Net JSON-LD per post:** Article + BreadcrumbList (always) + FAQPage (if `faq`) + Service
(if `serviceArea`) + the 3 global schemas from `Base`.

**Related-posts scoring:**

```ts
const current = new Set(post.data.categories || []);
const related = allPosts
  .filter((p) => p.id !== post.id)
  .map((p) => ({ post: p, score: (p.data.categories || []).filter((c) => current.has(c)).length }))
  .filter((x) => x.score > 0)
  .sort((a, b) => b.score - a.score || b.post.data.publishDate.valueOf() - a.post.data.publishDate.valueOf())
  .slice(0, 3)
  .map((x) => x.post);
```

**Defensive URL helpers** — `src/utils/i18nRoutes.ts`: `buildPostUrl`, `normalizeBlogSlug`,
`stripLangPrefix`, `assertNoDoubleLang`, `ensureNoDoubleLang`. These exist to prevent the
`/en/blog/en/...` double-language-segment bug. Port them.

**Category archive pages** (separate route tree, *not* under `/blog/`):
`src\pages\en\category\[category].astro` and `src\pages\es\categoria\[category].astro`,
driven by `src\data\categories.ts` (bilingual `{name, name_es, slug, esSlug, description, description_es}`).
**There is no tag system — only categories.**

---

## 9. Layer 7 — Blog UI components (the UX)

**Directory:** `C:\Users\Robert Cushman\Projects\ny-eng\src\components\blog\` (+ `src\components\ui\`, `src\components\sections\`)

| Component | Path | Purpose |
|---|---|---|
| Listing shell | `src\components\blog\PaginatedBlogLayout.astro` | Hero + `BlogList` + pagination nav. **Emits `Blog`+`BlogPosting[]` archive JSON-LD on page 1 only** (guarded to avoid duplicate schema across pages) |
| Filter bar + grid | `src\components\blog\BlogList.astro` | Category pill filter ("Show All" + one pill per non-empty category), live post count, responsive `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` |
| Blog card | `src\components\blog\BlogPost.astro` | 16:9 optimized image w/ hover zoom, date, title, `line-clamp-4` excerpt, `readingTime · audience` OR hashtag categories |
| Recent posts | `src\components\sections\RecentPosts.astro` | Homepage "recent 3" reusing `BlogPost` |
| Inner hero | `src\components\sections\InnerHero.astro` | Full-width hero band, `astro:assets` WebP bg, overlay opacity |
| Date | `src\components\ui\Date.astro` | Timezone-safe date w/ EN ordinal suffix + ES long format |
| Breadcrumbs (visual) | `src\components\ui\Breadcrumbs.astro` | Microdata `BreadcrumbList` UI (separate from JSON-LD) |
| Category pill / hashtag | `src\components\ui\CategoryPill.astro`, `HashtagCategory.astro` | accent-insensitive category matching |
| TTS | `src\components\blog\SpeakEnglish.astro` | Speaker buttons on `.speak-en` spans; Azure Neural TTS via `/api/tts/synthesize`, falls back to Web Speech API; `ttsVoice` override |
| Lightbox | `src\components\blog\BlogImageLightbox.tsx` | Click-to-zoom featured image (React island) |
| Video hero | `src\components\blog\VideoHero.tsx` | Play-on-click hero video (React island) |
| Flip cards | `src\components\blog\FlipCard.tsx`, `FlipCardGrid.tsx` | Interactive Q&A cards for MDX posts |

**Detail page UX features (in `[slug].astro`):** fixed gradient background, visual
breadcrumbs, centered H1, date + category pills row, three-way hero (video → lightbox image
→ plain img fallback), `prose` article body, TTS, a **share bar** (WhatsApp / Facebook /
LinkedIn / X + Copy-Link with "Copied!" flash), **prev/next "Continue Reading" cards**, and
**3-up related articles**.

**Two intentional non-features** (know these so you can *add* them in the new repo if wanted):

- **Reading time is hand-authored**, not computed — it's just an optional `readingTime`
  string in frontmatter. There is no words-per-minute calculation anywhere.
- **No table of contents** and **no visible author byline** — the author exists only in OG
  meta and JSON-LD, never rendered on-page.

**Typography:** the Markdown body is styled by **`@tailwindcss/typography`** via the `prose`
class on `<article>`. Theme overrides map prose colors to CSS variables in
`C:\Users\Robert Cushman\Projects\ny-eng\tailwind.config.mjs`:

```js
typography: (theme) => ({
  DEFAULT: { css: {
    color: "var(--color-body-base)",
    a: { color: "var(--color-primary)", "&:hover": { color: "var(--color-primary-light)" } },
    h1: { color: "var(--color-headline)" },
    strong: { color: "var(--color-headline)" },
  }},
}),
```

Use `not-prose` on any widget wrapper (flip cards, CTA boxes) to escape prose styling.
Container widths (`--container-small: 1000px`) live in `src\styles\global.css`.

**Image optimization sizes** (all `astro:assets` `<Image>`, WebP): cards 600×338 (q?),
detail hero 1200×675 (q80), inner hero 1920×1080 (q70). Featured-image frontmatter uses
`image()` so Astro hashes + optimizes at build; string paths (posters) get a plain `<img>`
fallback.

---

## 10. Layer 8 — Sitemap + hreflang serialization

**File:** `C:\Users\Robert Cushman\Projects\ny-eng\astro.config.mjs`

The sitemap is where the *whole* hreflang story comes together. Config:

```js
integrations: [
  sitemap({
    changefreq: "weekly",
    priority: 0.7,
    i18n: { defaultLocale: "en", locales: { en: "en-US", es: "es-MX" } },
    filter: (pageUrl) => { /* exclude /api/, /_, /dev/, /admin/, /thank-you, /chat,
                              quiz question/report pages, blog pagination /blog/N/,
                              bracket/hash URLs, redirect source paths, -bak files */ },
    serialize: (item) => { /* hand-build hreflang links[] per page — see below */ },
  }),
],
```

`serialize()` builds hreflang alternates by cascading matchers, in order:

1. **Static pages** — match `pathname` against `routeFor.en[tkey]` / `routeFor.es[tkey]`.
2. **Blog posts** — via the **`blogTranslations`** object (EN slug → ES path) + auto-derived reverse map.
3. **Category pages** — `categoryTranslations`.
4. **Course pages** — `courseTranslations` + `courseLeafTranslations`.
5. Fallbacks: `item.links` → self-referencing hreflang.

Then it assigns per-type `priority` / `changefreq` / **stable hard-coded `lastmod`** (fixed
dates, not build timestamps, to avoid churn that makes crawlers re-fetch unchanged pages).

**The `blogTranslations` map — the one manual step per post:**

```js
const blogTranslations = {
  "master-business-english": "/es/blog/dominar-negocios/",
  "english-classes-chapalita": "/es/blog/clases-ingles-chapalita/",
  // ...one entry per EN post...
};
const blogTranslationsReverse = Object.fromEntries(
  Object.entries(blogTranslations).map(([enSlug, esPath]) => {
    const esSlug = esPath.replace(/^\/es\/blog\//, "").replace(/\/$/, "");
    return [esSlug, `/en/blog/${enSlug}/`];
  }),
);
```

> **⚠️ Two sources of truth for translation linking.** Per-post `translations` frontmatter
> drives *on-page* hreflang; `blogTranslations` in `astro.config.mjs` drives the *sitemap*.
> They must stay in sync. This is the single most error-prone manual step. **Improvement for
> the new repo:** derive `blogTranslations` from the collection at build time
> (`getCollection("blog")` → read each post's `translations`) so there's one source. See §12.

**`public/` SEO files:**

| File | Purpose |
|---|---|
| `public\robots.txt` | `User-agent: *` / `Disallow:` / `Sitemap: https://.../sitemap-index.xml` |
| `public\<indexnow-key>.txt` | IndexNow key verification (filename = the public key) |
| `public\BingSiteAuth.xml` | Bing Webmaster ownership verification |
| `public\llms.txt`, `public\llms-full.txt` | AI-crawler guidance (emerging llms.txt standard) |
| `public\images\logos\*-og.{jpg,webp}` | Default OG images |

---

## 11. SEO automation scripts

**Directory:** `C:\Users\Robert Cushman\Projects\ny-eng\scripts\seo\`

All `.mjs`, invoked `node scripts/seo/<file> [flags]`. They load env via `dotenv`
(`.env.local` then `.env`). **No secret values are ever hard-coded** — Google auth decodes a
base64 service-account key from `GOOGLE_SA_KEY_BASE64`.

| Script | Service | Key usage |
|---|---|---|
| `gsc-client.mjs` | — | Shared Google auth factory (not run directly). Exports `SITE_URL`, `SITE_PROPERTY`, `getSearchConsole()`, `getWebmasters()` |
| `gsc-submit-urls.mjs` | Google Indexing API + GSC | `--sitemap` submits sitemap; `--url <u>` one URL; `--url <u> --removed`; no args = all blog URLs |
| `gsc-index-status.mjs` | GSC URL Inspection | `--url <u>` / `--pages` (core only) / no args (all blog) → verdict, coverageState, lastCrawl |
| `gsc-performance.mjs` | GSC Search Analytics | `--days N --query <q> --top N --by query\|page\|country\|device` |
| `gsc-striking-distance.mjs` | GSC Search Analytics | Finds queries at position 8–20 w/ impressions → ranked opportunities |
| `gsc-page-queries.mjs` | GSC Search Analytics | Per-URL query breakdown |
| `gsc-test.mjs` | GSC | Auth smoke test |
| `bing-submit.mjs` | Bing Webmaster API | `--url` / `--sitemap`; batches of 500; logs JSONL to `scripts/seo/.submissions/bing-webmaster.jsonl` |
| `bing-batch-schedule.mjs` | Bing Webmaster API | Daily-quota batcher (90/day); `--day N` / `--plan` |
| `bing-submission-report.mjs` | — | Diffs sitemap vs submitted log |
| `indexnow-submit.mjs` | IndexNow (Bing/Yandex/DuckDuckGo/…) | `--url` / `--sitemap`; POSTs to api.indexnow.org + bing.com/indexnow |
| `seo-audit.mjs` | — | Source-level meta audit |
| `fixed-sitemap-audit.mjs` | — | Bilingual symmetry audit (EN↔ES parity, reciprocal translations) |

**Credentials referenced (names only — never commit values):**
`GOOGLE_SA_KEY_BASE64`, `BING_WEBMASTER_TOOLS_API_KEY`, `INDEXNOW_KEY`.
GSC property: `sc-domain:nyenglishteacher.com`. Service account:
`seo-api-access@seo-automation-489217.iam.gserviceaccount.com`.

---

## 12. Build gates & validators (the safety net)

**`package.json` build pipeline** (`npm run build`):

```
prebuild (scripts/prebuild.js → validate-blog-seo + JSON audit + PDF cache)
  → astro build (NODE_OPTIONS=--max-old-space-size=7168)
  → scripts/pre-deploy/audits/sitemap-validator.js   ← HARD GATE
  → scripts/pre-deploy/audits/meta-description-gate.mjs ← HARD GATE
```

If any gate exits non-zero, the Vercel deploy is blocked. The gates:

| Gate | File | Rule |
|---|---|---|
| Blog SEO (prebuild) | `scripts\validate-blog-seo.mjs` | Title ≤60 (`seo.title\|\|title`); desc ≤160 (`seo.description\|\|excerpt`); desc <120 = warning; required fields `title, excerpt, publishDate, categories`; title must not contain the site-name suffix |
| Meta description (post-build) | `scripts\pre-deploy\audits\meta-description-gate.mjs` | Every `dist/**/*.html` meta description 120–160 chars (excludes quiz/404/thank-you) |
| Sitemap (post-build) | `scripts\pre-deploy\audits\sitemap-validator.js` | Each sitemap URL's canonical matches; hreflang + x-default present; all CRITICAL-URLS present |

**On-demand validators** (`npm run validate:all`):
`validate-404s`, `validate-canonical-urls` (live HTTP), `validate-internal-links`,
`validate-performance`, `validate-url-structure`, `validate:seo`
(`scripts\pre-deploy\audits\seo-validator.js`), plus `validate-hreflang.mjs`.

> **Threshold note:** the reference repo has *inconsistent* thresholds across validators
> (blog gate: title ≤60, desc 120–160; older `seo-audit.mjs`: desc 80–155; dist validators:
> title 30–60). **In the new repo pick ONE canonical rule set** — recommended:
> **title 30–60, meta description 120–160** — and use it everywhere.

---

## 13. Per-post publishing workflow (run this every time)

This is the operational checklist. In the source repo, `CLAUDE.md` mandates the AI does all
of this automatically — never handing the human a task list.

**Authoring:**
1. Create `src/content/blog/en/<slug>.md` (and the ES mirror `src/content/blog/es/<es-slug>.md`).
2. Fill required frontmatter: `title, excerpt, publishDate, categories`.
3. Keep `seo.title` ≤60 and `seo.description` 120–160 (the build enforces this).
4. Add `featuredImage` (→ `src/content/blog/en/images/`) + `imageAlt`.
5. Set `translations.es` on the EN post and `translations.en` on the ES post (opposite lang).
6. Categories must match a `name`/`name_es` in `src/data/categories.ts`.
7. Optional: `faq[]` (→ FAQPage rich result), `serviceArea[]` (→ local Service), `readingTime`.
8. Write ES content in **Mexican Professional Spanish** (prompt the translator explicitly).

**Wiring:**
9. Add the EN-slug→ES-path pair to `blogTranslations` in `astro.config.mjs` (until this is automated — see §14).

**Ship:**
10. `npm run build` locally — the SEO gates must pass.
11. Commit on a feature branch → PR → squash-merge to `main` → Vercel auto-deploys.

**Post-publish SEO (automated):**
12. `node scripts/seo/gsc-submit-urls.mjs --sitemap` (resubmit sitemap to Google)
13. `node scripts/seo/bing-submit.mjs --url <new-url>` (Bing)
14. `node scripts/seo/indexnow-submit.mjs --url <new-url>` (Bing/Yandex/DuckDuckGo)
15. Verify JSON-LD present (Article, Breadcrumb, FAQ if applicable) — Rich Results Test.
16. Generate social copy → `content-marketing/<slug>-social.md`.
17. Add internal links from related existing posts.

**CSP maintenance:** if the post calls any new external endpoint via fetch/XHR, add the
domain to `connect-src` in `vercel.json`.

---

## 14. Known debt & improvements to make in the NEW repo

Don't copy the reference repo's rough edges. Fix these while scaffolding:

1. **Single source of truth for translation links.** Derive `blogTranslations` from
   `getCollection("blog")` at config/build time instead of maintaining a hand-edited map in
   `astro.config.mjs`. Eliminates the #1 manual-error step.
2. **NAP in `config.ts`, imported everywhere.** Never hand-type name/address/phone in more
   than one file. The reference repo's `siteConfig.Socials.Location/Phone` are stale relative
   to the schema files — a split-brain you should not reproduce.
3. **Three blog route files per language only** — `index.astro`, `[...page].astro`,
   `[slug].astro`. Never create `[page].astro` / `[...slug].astro`.
4. **One canonical validator threshold set** (title 30–60, desc 120–160) across all gates.
5. **Add an RSS feed** — `@astrojs/rss` + `src/pages/{en,es}/blog/rss.xml.js`. The reference
   repo has none.
6. **Compute reading time** from word count if you want it accurate (reference repo
   hand-authors it).
7. **Add a table of contents + visible author byline** if the content is long-form / E-E-A-T
   matters — the reference repo renders neither.
8. **Declare every dependency.** `js-yaml` is imported by audit scripts but not in
   `package.json` in the reference repo — it resolves transitively and will break on a clean
   install. Declare it.
9. **Vercel `ignoreCommand`** — add the docs-only-skip `vercel.json` so documentation commits
   don't burn deploy quota (CushLabs standard):
   ```json
   { "$schema": "https://openapi.vercel.sh/vercel.json",
     "ignoreCommand": "git rev-parse --verify HEAD^ > /dev/null 2>&1 && git diff --quiet HEAD^ HEAD -- . ':!docs/' ':!README.md' ':!CLAUDE.md' ':!LICENSE' ':!.gitignore'" }
   ```
10. **Security headers + CSP** in `vercel.json` from day one (X-Content-Type-Options,
    X-Frame-Options, Referrer-Policy, Permissions-Policy, HSTS, and a locked-down CSP).

---

## 15. Master file index (copy these from the source repo)

| Concern | File (fully qualified) |
|---|---|
| Settings / postsPerPage | `C:\Users\Robert Cushman\Projects\ny-eng\src\data\config.ts` |
| i18n routing / hreflang codes | `C:\Users\Robert Cushman\Projects\ny-eng\src\lib\i18n.ts` |
| URL guard helpers | `C:\Users\Robert Cushman\Projects\ny-eng\src\utils\i18nRoutes.ts` |
| Content schema | `C:\Users\Robert Cushman\Projects\ny-eng\src\content.config.ts` |
| Categories registry | `C:\Users\Robert Cushman\Projects\ny-eng\src\data\categories.ts` |
| JSON-LD components | `C:\Users\Robert Cushman\Projects\ny-eng\src\components\seo\*.astro` |
| Base layout (SEO hub) | `C:\Users\Robert Cushman\Projects\ny-eng\src\layouts\Base.astro` |
| Blog listing page | `C:\Users\Robert Cushman\Projects\ny-eng\src\pages\en\blog\index.astro` |
| Blog pagination | `C:\Users\Robert Cushman\Projects\ny-eng\src\pages\en\blog\[...page].astro` |
| Blog detail page | `C:\Users\Robert Cushman\Projects\ny-eng\src\pages\en\blog\[slug].astro` |
| Category archive | `C:\Users\Robert Cushman\Projects\ny-eng\src\pages\en\category\[category].astro` |
| Listing layout | `C:\Users\Robert Cushman\Projects\ny-eng\src\components\blog\PaginatedBlogLayout.astro` |
| Filter bar + grid | `C:\Users\Robert Cushman\Projects\ny-eng\src\components\blog\BlogList.astro` |
| Blog card | `C:\Users\Robert Cushman\Projects\ny-eng\src\components\blog\BlogPost.astro` |
| Date formatting | `C:\Users\Robert Cushman\Projects\ny-eng\src\components\ui\Date.astro` |
| Visual breadcrumbs | `C:\Users\Robert Cushman\Projects\ny-eng\src\components\ui\Breadcrumbs.astro` |
| Category pill / hashtag | `C:\Users\Robert Cushman\Projects\ny-eng\src\components\ui\CategoryPill.astro`, `HashtagCategory.astro` |
| TTS | `C:\Users\Robert Cushman\Projects\ny-eng\src\components\blog\SpeakEnglish.astro` |
| React islands | `C:\Users\Robert Cushman\Projects\ny-eng\src\components\blog\{BlogImageLightbox,VideoHero,FlipCard,FlipCardGrid}.tsx` |
| Prose typography | `C:\Users\Robert Cushman\Projects\ny-eng\tailwind.config.mjs` |
| Global CSS / containers | `C:\Users\Robert Cushman\Projects\ny-eng\src\styles\global.css` |
| Astro config + sitemap | `C:\Users\Robert Cushman\Projects\ny-eng\astro.config.mjs` |
| Vercel headers / CSP / redirects | `C:\Users\Robert Cushman\Projects\ny-eng\vercel.json` |
| SEO automation | `C:\Users\Robert Cushman\Projects\ny-eng\scripts\seo\*.mjs` |
| Blog SEO build gate | `C:\Users\Robert Cushman\Projects\ny-eng\scripts\validate-blog-seo.mjs` |
| Meta-desc build gate | `C:\Users\Robert Cushman\Projects\ny-eng\scripts\pre-deploy\audits\meta-description-gate.mjs` |
| Sitemap build gate | `C:\Users\Robert Cushman\Projects\ny-eng\scripts\pre-deploy\audits\sitemap-validator.js` |
| Portable bilingual SEO spec | `C:\Users\Robert Cushman\Projects\ny-eng\docs\BILINGUAL-SEO-SITEMAP.md` |

---

## 16. One-paragraph brief for the new repo's AI assistant

> Build an Astro (static, `trailingSlash: "ignore"`) bilingual blog. One flat `blog` Content
> Collection loaded by glob from `src/content/blog/{en,es}/`, language derived from the
> `en/`|`es/` id prefix. Typed frontmatter (see §5) where `faq[]` and `serviceArea[]`
> conditionally emit FAQPage / local-Service JSON-LD. Centralize all page routing + hreflang
> codes (`en-US`/`es-MX`) in `src/lib/i18n.ts`; route every page through a `Base.astro` that
> emits title, meta description, canonical, hreflang + x-default, Open Graph, Twitter card,
> robots, and three global JSON-LD schemas (Organization, WebSite, ProfessionalService), and
> throws if hreflang can't be resolved. Three blog routes per language only: `index.astro`,
> `[...page].astro` (Astro `paginate()`, 6/page), `[slug].astro` (renders Article +
> Breadcrumb + conditional FAQ/Service JSON-LD, builds per-post `customHreflangs` from
> frontmatter `translations`, computes related-by-category and prev/next). Style the Markdown
> body with `@tailwindcss/typography` `prose`; optimize images with `astro:assets` WebP; add
> a category filter, share bar, related posts, and click-to-zoom. Generate the sitemap with
> `@astrojs/sitemap` and a custom `serialize()` that emits EN↔ES hreflang for every URL
> (derive blog translation pairs from the collection, not a hand-edited map). Gate the build:
> fail on title >60 or meta description outside 120–160 or canonical/sitemap mismatch. Add
> `scripts/seo/` for Google Search Console (Indexing API), Bing Webmaster, and IndexNow
> submission. All Spanish is **Mexican Professional Spanish** (es-MX) — prompt every
> translation with that literal phrase. Put NAP in one config file and import it everywhere.

---

*Generated 2026-07-07 from the live `ny-eng` codebase. Confidence this reproduces a
functionally equivalent world-class blog: 90%. The remaining 10% is repo-specific glue
(exact `astro.config.mjs` filter regexes, the full redirect table in `vercel.json`, and the
Azure TTS endpoint) that a rebuild will re-derive rather than copy verbatim.*
