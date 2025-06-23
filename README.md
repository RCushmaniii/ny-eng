# NY English Teacher – Website Redesign

Welcome to the codebase for the **NYEnglishTeacher.com** website redesign project. This site is built using the [Astro](https://astro.build) framework with the [Titan theme](https://themes.astro.build/titan). It's designed to be fast, modern, and content-focused.

> **IMPORTANT**: The production domain is **https://www.nyenglishteacher.com/** - Always use this URL for all production references, sitemaps, and structured data.

## 🚀 Project Overview

This is the new version of NYEnglishTeacher.com, redesigned to provide a better user experience, responsive layout, and a clean, professional look. Built with Astro, this project emphasizes performance and simplicity with full bilingual support (English/Spanish).

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static site generator with component islands
- [TypeScript](https://www.typescriptlang.org/) - With `strict: true` enabled for robust type checking
- [Tailwind CSS](https://tailwindcss.com/) - For responsive styling
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) - Automatic sitemap generation
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
10. **Shared Components**: Use language props rather than duplicating code
11. **Translate Data**: Localize content in `@data` files for all languages
12. **Compare Directly**: Always compare Spanish pages with English counterparts for parity
13. **Test Both Languages**: Verify functionality in both English and Spanish before completion

### Component Usage & Styling
14. **Use Titan Layout**: Wrap pages in `@layouts/Layout.astro` with consistent SEO props
15. **Structured Content**: Pass content objects to Titan components (Hero, Features, CtaBanner)
16. **Minimize Inline Styles**: Use component props instead of inline CSS
17. **Avoid Duplication**: Remove redundant component renders

### Content Writing Guidelines
18. **First-Person Voice**: Always use "I, my, me" instead of "we, our, us"
19. **Mexican Spanish**: Use culturally appropriate Mexican Spanish localization
20. **Industry-Specific**: Tailor content to specific industries and use cases
21. **Benefit-Driven**: Focus on clear value propositions and outcomes

## 📚 Recent Updates & Lessons Learned

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
- Verify translation slugs point to correct pages

**SEO Issues**:
- Check that all pages have unique titles and descriptions
- Verify `lang` attribute matches page language
- Ensure translation slugs are properly configured

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

**Last Updated**: January 2025
**Contributors**: Development team focused on bilingual business English coaching platform
