# NY English Teacher – Website Redesign

Welcome to the codebase for the **NYEnglishTeacher.com** website redesign project. This site is built using the [Astro](https://astro.build) framework with the [Titan theme](https://themes.astro.build/titan). It's designed to be fast, modern, and content-focused.

> **IMPORTANT**: The production domain is **https://www.nyenglishteacher.com/** - Always use this URL for all production references, sitemaps, and structured data. The site is fully configured for proper SEO, including optimized sitemaps and hreflang implementation.

## 🚀 Project Overview

This is the new version of NYEnglishTeacher.com, redesigned to provide a better user experience, responsive layout, and a clean, professional look. Built with Astro, this project emphasizes performance and simplicity with full bilingual support (English/Spanish).

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static site generator with component islands
- [TypeScript](https://www.typescriptlang.org/) - With `strict: true` enabled for robust type checking
- [Tailwind CSS](https://tailwindcss.com/) - For responsive styling
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) - Optimized sitemap generation with hreflang support
- [Titan Theme](https://themes.astro.build/titan) - Professional Astro theme components
- JSON-LD Structured Data - Enhanced search engine visibility

## 📦 Getting Started (Windows / PowerShell)

### 1. Clone the repository

```powershell
git clone https://github.com/your-username/ny-english-teacher.git
Set-Location ny-english-teacher
```

### 2. Install dependencies

```powershell
npm install
```

### 3. Run the development server

```powershell
npm run dev
```

Then open your browser and go to: `http://localhost:4321`

### 4. Build for production

```powershell
npm run build
```

### 5. Preview the production build

```powershell
npm run preview
```

## 🏗️ Project Structure

```
/
├── public/
│   ├── images/           # Static images organized by section
│   │   ├── services/     # Service page images
│   │   ├── blog/         # Blog post images
│   │   └── testimonials/ # Testimonial images
│   └── favicon.ico
├── src/
│   ├── assets/           # Optimized images (processed by Astro)
│   ├── components/       # Reusable UI components
│   │   ├── sections/     # Page section components
│   │   └── ui/           # Basic UI elements
│   ├── content/          # Content collections
│   │   ├── blog/         # Blog posts (en/es)
│   │   └── legal/        # Legal pages (en/es)
│   ├── data/             # Centralized data files
│   │   ├── header/       # Navigation data (en/es)
│   │   ├── testimonials/ # Testimonial data (en/es)
│   │   ├── services.ts   # Service definitions
│   │   └── methodology.ts # Coaching methodology
│   ├── layouts/          # Page layouts
│   ├── pages/            # File-based routing
│   │   ├── en/           # English pages
│   │   └── es/           # Spanish pages
│   └── styles/           # Global styles
└── astro.config.mjs      # Astro configuration
```

## 🌐 Bilingual Architecture

### Language Structure
- **English**: `/en/` prefix for all English pages
- **Spanish**: `/es/` prefix for all Spanish pages
- **Data Files**: Separate data files for each language (e.g., `en.ts`, `es.ts`)
- **Translation Links**: Cross-language navigation via `translationSlugEn`/`translationSlugEs`

### Content Organization
```
src/
├── data/
│   ├── header/
│   │   ├── en.ts         # English navigation
│   │   └── es.ts         # Spanish navigation
│   ├── testimonials/
│   │   ├── en.ts         # English testimonials
│   │   └── es.ts         # Spanish testimonials
│   └── services.ts       # Bilingual service definitions
├── pages/
│   ├── en/
│   │   ├── services/     # English service pages
│   │   ├── blog/         # English blog
│   │   └── testimonials/ # English testimonials
│   └── es/
│       ├── servicios/    # Spanish service pages
│       ├── blog/         # Spanish blog
│       └── testimonios/  # Spanish testimonials
```

## 🔍 SEO & Sitemap Configuration

---

## ⚡ Project Coding Standards ([WindsurfRules.md](./WindsurfRules.md))

- **Structured Data:** All Astro pages must include a `<script type="application/ld+json">` block for organization structured data, using `{JSON.stringify(obj)}`. Do not use `set:head` for static JSON-LD.
- **SEO Meta:** Set `<title>` and `<meta name="description">` using imported constants, not hardcoded strings.
- **Component Imports:** Use absolute imports for shared components/data/assets (e.g., `@components/`, `@data/`). Keep local-only imports relative.
- **Bilingual Content:** Update translation maps in `/data` for both EN→ES and ES→EN. Always keep language alternates, translation slugs, and language switchers in sync.
- **Image Alt Text:** All images must have descriptive, localized `alt` text.
- **Debug Code:** Remove `console.log` and debug code before merging.

See [WindsurfRules.md](./WindsurfRules.md) for full details, rationale, and modification process. All contributors must follow these conventions to ensure code quality and SEO consistency.

---

### Multilingual Sitemap Implementation

The site uses `@astrojs/sitemap` with advanced configuration to ensure proper SEO for both English and Spanish content:

- **Root URL Handling**: The root URL (`https://www.nyenglishteacher.com/`) is configured with `x-default` hreflang tag, with proper language alternatives for `/en/` and `/es/` paths
- **URL Filtering**: Prevents duplicate content by filtering URLs with repeated language prefixes (like `/en/blog/en/`)
- **Dynamic Priority**: Different page types get appropriate SEO priority levels:
  - Homepage paths: `priority: 0.9`, `changefreq: weekly`
  - Blog posts: `priority: 0.6`, `changefreq: weekly`
  - Services pages: `priority: 0.5`, `changefreq: monthly`
  - Legal/Terms pages: `priority: 0.3`, `changefreq: monthly`

### Configuration in astro.config.mjs

```javascript
sitemap({
  i18n: {
    defaultLocale: 'en',
    locales: {
      en: 'en-US',
      es: 'es-MX',
    },
  },
  // Root URL with x-default implementation
  customPages: [
    `${site}`, // Adds root URL explicitly
  ],
  // URL filtering to prevent duplicates
  filter: (page) => { /* filters out URLs with duplicate locale prefixes */ },
  // Custom priority/changefreq based on URL patterns
  serialize: (item) => { /* sets priority based on content type */ }
})
```

### Verification

After building the project (`npm run build`), the generated sitemap files are available in the `dist` directory:

- `sitemap-index.xml` - Main sitemap index
- `sitemap-0.xml` - Primary sitemap with properly formatted URLs and hreflang attributes

### Testing Sitemap Implementation

To verify the sitemap is working correctly:

1. Build the project:
   ```powershell
   Remove-Item -Recurse -Force .\dist\ # Clean previous build
   npm run build
   ```

2. Check the sitemap files in the `dist` directory:
   ```powershell
   Get-Content .\dist\sitemap-index.xml
   Get-Content .\dist\sitemap-0.xml
   ```

3. Verify the sitemap has:
   - Root URL with `x-default` hreflang
   - No duplicate URLs with double language prefixes
   - Correct changefreq and priority values for different page types
   - Proper alternate language links for each page

## 📝 Recent Updates & Changes

### CSS Optimization & Performance Improvements (September 2025)

- **Optimized CSS Delivery**: Updated Astro configuration to force external stylesheets in production
  ```javascript
  // In astro.config.mjs
  build: {
    // Force external stylesheets in production instead of inlining
    inlineStylesheets: 'never',
  }
  ```

- **Component-Scoped Styles**: Improved component-scoped styles to reduce global CSS footprint
- **Button Component Fixes**: Resolved vertical alignment issues in button components
- **Bilingual UI Consistency**: Ensured consistent button styling and text alignment across English and Spanish pages
- **Performance Optimization**: Reduced CSS size through better code splitting and component-scoped styles

### SEO & UI Fixes (September 2025)

- **Fixed Duplicate H1 Tags**: Corrected heading hierarchy on legal pages (Terms of Service, Privacy Policy)
- **Improved Meta Descriptions**: Enhanced category page meta descriptions with compelling, keyword-rich content
- **Fixed Internal Links**: Resolved broken internal links between blog posts and category pages
- **Category Filtering Fix**: Enhanced blog category filtering to properly handle case-insensitive matching
- **Legal Page Spacing**: Improved spacing and layout on legal pages for better readability
- **TypeScript Error Resolution**: Fixed type errors in Spanish homepage components

### Sitemap SEO Improvements (July 2025)

- Fixed duplicate language prefixes in URLs that caused 404 errors
- Implemented proper `x-default` hreflang for root URL
- Added intelligent SEO priorities for different content types
- Configured URL filtering to exclude draft and catch-all routes
- Added custom serialization for sitemap entries
- Set up explicit site URL configuration

## 🎯 Key Features

### Service Pages System
- **Modular Components**: Reusable sections (InnerHero, Challenge, MethodologySection, FeaturedTestimonial, CtaSection)
- **Centralized Image Management**: All service images managed through `services.ts` data file
- **Industry-Specific Content**: Tailored pain points, features, and testimonials for each service
- **Bilingual Parity**: Consistent structure and functionality across English and Spanish versions

### SEO Optimization
- **Unique Meta Tags**: Industry-specific titles and descriptions for each service page
- **Structured Data**: JSON-LD implementation for enhanced search visibility
- **Cross-Language SEO**: Proper hreflang implementation via translation slugs
- **Performance**: Optimized images and static generation for fast loading

### Content Management
- **Type Safety**: Strict TypeScript configuration with proper interfaces
- **Content Collections**: Astro Content Collections for blog posts and legal pages
- **Centralized Data**: Reusable data structures for testimonials, services, and navigation

## 🔧 Development Guidelines

### Code Structure & Organization
1. **Use Absolute Aliases**: Import components using `@layouts`, `@components`, `@data`, `@assets` aliases
2. **Organize by Locale**: Structure pages in `src/pages/en` and `src/pages/es` for multilingual support
3. **Use Astro Extensions**: Create components with `.astro` extensions, avoid `.jsx`/`.tsx` unless necessary
4. **Centralized Data**: Store reusable content in `@data` and export typed objects

### TypeScript & Type Safety
5. **Enforce Type Safety**: Add `as const` to static config objects for literal types
6. **Strict Settings**: Configure `tsconfig.json` with `strict: true`
7. **Typed Props**: Use TypeScript interfaces in Astro component frontmatter
8. **Restrict Variants**: Limit button variants to theme-supported values ("primary", "secondary", "whatsapp")

### Bilingual Implementation
9. **Parallel Implementation**: Any feature added to one language MUST be implemented in the other
10. **Shared Components**: Use language-specific features in shared components with `lang` prop
11. **Centralized Translation**: Localize content in `@data` files for consistency
12. **Test Both Languages**: Verify functionality works in both English and Spanish

### Language Switcher Configuration
**Translation Slugs**: Each page must define proper translation slugs for cross-language navigation:

```astro
<!-- English pages -->
<Layout 
  lang="en"
  translationSlugEs="/es/servicios/service-name"
/>

<!-- Spanish pages -->
<Layout 
  lang="es" 
  translationSlugEn="/en/services/service-name"
/>
```

**Important Notes**:
- Blog pages use full paths: `translationSlugEs="/es/blog"` and `translationSlugEn="/en/blog"`
- Service pages include full directory structure: `/es/servicios/` and `/en/services/`
- Translation slugs must match actual file paths exactly
- Empty translation slugs will hide the language switcher

## 📚 Recent Updates & Lessons Learned

### Open Graph (OG) Image Fixes (June 2025)
**Problem**: Inconsistent OG image display when sharing pages on social media platforms
**Root Cause**: Incorrect image path handling and conditional logic for different page types

**Solutions Implemented**:
1. **Improved Page Type Detection**: Added proper service page detection (`/services/` and `/servicios/` paths)
   ```typescript
   // Before (missing service page detection)
   const isBlogOrArticlePage = Astro.url.pathname.includes('/blog/');
   
   // After (detecting both blog and service pages)
   const isBlogOrArticlePage = Astro.url.pathname.includes('/blog/');
   const isServicePage = Astro.url.pathname.includes('/services/') || Astro.url.pathname.includes('/servicios/');
   ```

2. **Enhanced Image Selection Logic**: Prioritized image selection based on page type
   ```typescript
   // Image selection priority
   const pageImageForSeo = image 
     ? normalizeImage(image, "/images/logos/new-york-english-og.jpg")
     : (isBlogOrArticlePage || isServicePage)
       ? (heroImageSrc || "/images/logos/new-york-english-og.jpg")
       : "/images/logos/new-york-english-og.jpg";
   ```

3. **Improved Path Normalization**: Better handling of relative and absolute paths
   ```typescript
   const ensureAbsoluteUrl = (path: string) => {
     if (path.startsWith('http')) return path;
     const normalizedPath = path.startsWith('/') ? path : `/${path}`;
     return new URL(normalizedPath, canonicalDomain).toString();
   };
   ```

### 404 Error Handling Improvements (June 2025)
**Problem**: Multiple 404 errors appearing in search console, especially for malformed blog URLs
**Root Cause**: Search engines indexing incorrect paths and remnant URLs from old site structure

**Solutions Implemented**:
1. **Comprehensive Redirect Rules**: Added specific redirect patterns to `_redirects` file
   ```
   # Fix malformed blog URLs (double nested paths)
   /en/blog/en/blog/* /en/blog/:splat 301
   /es/blog/es/blog/* /es/blog/:splat 301
   
   # Redirect case studies to testimonials
   /en/case-studies/technology /en/testimonials/all/ 301
   
   # Fix incorrect service URLs
   /es/servicios/ingles-para-hablar-en-publico /es/servicios/hablar-en-publico 301
   ```

2. **Fixed Testimonial Links**: Corrected service page references in testimonial data
   ```typescript
   // Before (incorrect URL)
   link: "/es/servicios/ingles-para-hablar-en-publico",
   
   // After (correct URL)
   link: "/es/servicios/hablar-en-publico",
   ```

3. **Removed Unused Pages**: Cleaned up legacy pages including old style guide and case study pages

### Language Switcher Fixes (June 2025)
**Problem**: Language switcher not appearing on blog pages and incorrect navigation on service pages
**Root Cause**: Inconsistent translation slug configuration and missing path prefixes

**Solutions Implemented**:
1. **Blog Pages**: Fixed translation slugs to use full paths instead of empty strings
   ```astro
   <!-- Before (broken) -->
   translationSlugEs=""
   
   <!-- After (working) -->
   translationSlugEs="/es/blog"
   ```

2. **Service Pages**: Corrected translation slugs to match actual Spanish filenames
   ```astro
   <!-- Before (broken) -->
   translationSlugEs="ingles-tecnologia"
   
   <!-- After (working) -->
   translationSlugEs="/es/servicios/ingles-para-tecnologia"
   ```

3. **Codebase Cleanup**: Removed unused files and directories
   - Deleted `src/content/team/` directory and all team-related content
   - Removed `_pages_unused/` directory with old theme files
   - Cleaned up duplicate data files and unused components
   - Fixed TypeScript errors from missing file references

**Key Lessons**:
- Translation slugs must use full paths including language prefixes
- Empty translation slugs hide the language switcher entirely
- Spanish service page filenames must match exactly in English page translation slugs
- Regular cleanup of unused files prevents build errors and confusion

### Spanish Service Pages Fix (January 2025)
**Problem**: Spanish service pages had image import errors and missing methodology content
**Solution**: Implemented centralized image management pattern
```typescript
// Import services data
import { services } from "@data/services";

// Find specific service by slug
const serviceData = services.find(s => s.slug === 'service-slug');

// Use service properties for images
const heroContent = {
  backgroundImage: serviceData?.backgroundImage
};
const challengeContent = {
  image: serviceData?.squareImage
};
```

**Key Lessons**:
- Always use centralized imports from `services.ts` instead of individual imports
- Define Spanish methodology content directly in each page for reliability
- Maintain strict bilingual parity between English and Spanish service pages
- Use proper service slug mapping: Spanish pages reference English service slugs

### SEO Configuration Best Practices
**Implemented across all Spanish service pages**:
```typescript
// SEO metadata
const title = "Coaching de Inglés para [Industry] | [Value Prop] | NY English";
const seoDescription = "Industry-specific description with keywords and clear value proposition (150-160 chars)";

<Layout
  title={title}
  description={seoDescription}
  lang="es"
  translationSlugEn={`/en/services/${translationSlug}`}
  hideCta={true}
>
```

**SEO Standards**:
- Unique, descriptive titles with brand suffix "| NY English"
- Industry-specific keywords in meta descriptions
- Proper `lang` attribute for each language
- Translation slugs for cross-language SEO
- `hideCta={true}` to avoid duplicate CTAs

### Service Page Architecture
**5-Section Modular Structure**:
1. **InnerHero**: Service-specific background image, no CTA buttons
2. **Challenge**: "Does This Sound Familiar?" with industry pain points
3. **MethodologySection**: 4-step coaching methodology
4. **FeaturedTestimonial**: Industry-specific social proof
5. **CtaSection**: Final conversion with booking link

**Component Reusability**:
- All sections use existing Titan theme components
- Consistent responsive design and AOS animations
- Industry-specific content while maintaining structural consistency

### Testimonial System Enhancement
**Customizable CTA Links**:
```typescript
// In testimonial data
{
  // ... testimonial content
  linkText: "👉 English Coaching for Startup Founders",
  link: "/en/services/startup-founders"
}

// In component
<TestimonialCard testimonial={testimonial} showCtaLink={showCtaLinks} />
```

**Features**:
- Industry-specific CTA text for each testimonial
- Page-level toggle to show/hide all CTA links
- Bilingual implementation with appropriate translations
- Links direct to relevant service pages for conversion

### Content Collections Implementation
**Legal Pages with Astro Content Collections**:
```
src/content/
├── legal/           # English legal content
│   ├── privacy-policy.md
│   └── terms-of-service.md
└── legal/es/        # Spanish legal content
    ├── privacy-policy.md
    └── terms-of-service.md
```

**Dynamic Routing**:
- `src/pages/en/legal/[...slug].astro` for English
- `src/pages/es/legal/[...slug].astro` for Spanish
- Automatic `noIndex={true}` and `hideCta={true}` for legal pages

## 🔍 Troubleshooting

### Common Issues

**Image Import Errors**:
- Always use centralized imports from `services.ts`
- Check that service slugs match between English and Spanish data
- Verify image paths in `/public/images/services/` directory

**TypeScript Errors**:
- Add `as const` to data objects for literal type inference
- Use proper interfaces for component props
- Restart TypeScript service: `Ctrl+Shift+P → TypeScript: Restart TS Server`

**Bilingual Inconsistencies**:
- Compare Spanish pages directly with English counterparts
- Ensure all features exist in both languages
- Verify translation slugs point to correct pages and match actual filenames
- Check that language switcher appears on all pages

**Language Switcher Issues**:
- Ensure translation slugs use full paths (e.g., `/es/servicios/service-name`)
- Blog pages should use `/en/blog` and `/es/blog` (not empty strings)
- Service pages must match Spanish filename exactly in translation slug
- Missing translation slugs will hide the language switcher button

### Development Workflow
1. **Make Changes**: Edit files using absolute aliases
2. **Check Types**: Verify TypeScript compilation
3. **Test Both Languages**: Ensure bilingual parity
4. **Restart Dev Server**: `npm run dev` after major changes
5. **Build Test**: Run `npm run build` before deployment

## 🚀 Deployment

The site is configured for static deployment. Run `npm run build` to generate the static files in the `dist/` directory.

### Production Checklist
- [ ] All images optimized and properly imported
- [ ] TypeScript compilation successful
- [ ] Both English and Spanish versions tested
- [ ] SEO metadata complete for all pages
- [ ] Translation slugs properly configured
- [ ] Build completes without errors

## 🗺️ Future Roadmap

### Planned Features
- [ ] Additional service pages (HR English, Finance English)
- [ ] Enhanced blog functionality with categories
- [ ] Newsletter signup integration
- [ ] Advanced testimonial filtering
- [ ] Performance monitoring dashboard

### Content Expansion
- [ ] More industry-specific case studies
- [ ] Video testimonials integration
- [ ] Interactive coaching assessment tool
- [ ] Resource library for students

---

**Last Updated**: September 2025 - CSS optimization, SEO fixes, and UI improvements
**Contributors**: Development team focused on bilingual business English coaching platform
