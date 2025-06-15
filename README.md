---

```markdown
# NY English Teacher – Website Redesign

Welcome to the codebase for the **NYEnglishTeacher.com** website redesign project. This site is built using the [Astro](https://astro.build) framework with the [Titan theme](https://themes.astro.build/titan). It's designed to be fast, modern, and content-focused.

> **IMPORTANT**: The production domain is **https://www.nyenglishteacher.com/** - Always use this URL for all production references, sitemaps, and structured data.

## 🚀 Project Overview

This is the new version of NYEnglishTeacher.com, redesigned to provide a better user experience, responsive layout, and a clean, professional look. Built with Astro, this project emphasizes performance and simplicity.

## 🛠️ Tech Stack

- [Astro](https://astro.build)
- [TypeScript](https://www.typescriptlang.org/) (with `strict: true` enabled for robust type checking)
- [Tailwind CSS](https://tailwindcss.com/) (for responsive styling)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) (for automatic sitemap generation)
- HTML/CSS
- Markdown (for content)
- JSON-LD Structured Data (for enhanced search engine visibility)

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

This will generate a `dist/` folder with your production-ready static files.

## 📁 Project Structure

```plaintext
.vscode/             # VSCode workspace settings
public/              # Static assets (images, fonts, etc.)
src/                 # Main source files
  └── pages/         # Page content
  └── components/    # Reusable UI components
  └── layouts/       # Page layouts
astro.config.mjs     # Astro configuration
tsconfig.json        # TypeScript configuration
```

## 📝 Blog Functionality & Technical Implementation

### Bilingual Blog Filtering
- English blog page (`/blog`) now only displays posts written in English (`.md` files not ending with `.es.md`).
- Spanish blog page (`/es/blog`) only displays posts written in Spanish (`.es.md` files).
- Filtering is handled in the page frontmatter using:
  ```js
  // English (src/pages/blog/index.astro)
  const filteredPosts = allPosts.filter(post => !post.id.endsWith('.es.md') && post.data.publish === true);

  // Spanish (src/pages/es/blog/index.astro)
  const filteredPosts = allPosts.filter(post => post.id.endsWith('.es.md') && post.data.publish === true);
  ```

### Static Hero Image
- Both `/blog` and `/es/blog` use a static hero background image via a static import:
  ```js
  import blogHero from '../../content/blog/images/blog-hero.jpg';
  ```
- This image is passed as a prop to the layout and displayed in the hero section for visual consistency.

### Robust Image Handling
- All blog post images are referenced using relative paths in frontmatter and imported using Astro’s static import system for optimal performance and compatibility.
- Confirmed that all referenced images exist in `src/content/blog/images/`.

### Category Filters & Post Counts
- The category filter and post count in the blog list now only reflect the currently visible (filtered) posts, not all posts in the collection.
- The `BlogList.astro` component was updated to:
  - Remove its own `getCollection` usage.
  - Use only the `posts` prop for category and count calculations.

### General Bilingual Best Practices
- All changes follow the rule of maintaining structural and functional parity between English and Spanish blog pages.
- All new logic and filtering is locale-agnostic and can be extended for additional languages if needed.

---
package.json         # Project metadata and scripts

## 📌 Notes

- This project uses the **Titan Astro theme** as the foundation.
- Customize `astro.config.mjs` and `tsconfig.json` as needed.

## 🌐 Multilingual & Bilingual Structure

This project supports both English and Spanish, with fully localized homepages and reusable content/data files for each language.

- English pages: `src/pages/en/`
- Spanish pages: `src/pages/es/`
- Reusable content/data: `@data` (e.g., `featureLists`, `statsLists`, `logoLists`, `faqLists`)
- All Titan Core components and layouts are shared, with content objects translated and typed for each locale.

### Legal Pages (Privacy Policy & Terms of Service)

The Privacy Policy and Terms of Service pages are managed as Markdown files within the Astro Content Collections system for type safety and consistency.

-   **English Content:**
    -   Source: `src/content/legal/privacy-policy.md`
    -   Source: `src/content/legal/terms-of-service.md`
-   **Spanish Content:**
    -   Source: `src/content/legal/es/privacy-policy.md`
    -   Source: `src/content/legal/es/terms-of-service.md`
-   **Content Collection Definition:**
    -   The `legal` collection is defined in `src/content/config.ts`, specifying the frontmatter schema (including `title`, `lastUpdated`, and an `seo` object for meta title/description).
-   **Dynamic Rendering:**
    -   English pages are rendered by: `src/pages/en/legal/[...slug].astro`
    -   Spanish pages are rendered by: `src/pages/es/legal/[...slug].astro`
-   **SEO & Layout:**
    -   These dynamic route files ensure that the correct `lang`, `noIndex={true}` (to prevent search engine indexing), `footerCta={{ hideCta: true }}`, and cross-language `translationSlug` props are passed to the main `Layout.astro`.

## 📚 SEO Setup with @astrolib/seo

This project uses `@astrolib/seo` for managing SEO metadata. Key setup steps include:

1.  **Installation**:
    ```bash
    npm install @astrolib/seo
    ```
2.  **Central SEO Configuration**:
    - A configuration file (e.g., `src/config/seo.ts`) defines SEO content (title, description, canonical URL, lang) for each supported language (e.g., `en`, `es`).
3.  **Layout Integration**:
    - The `<AstroSeo />` component from `@astrolib/seo` is used in the main layout file (e.g., `src/layouts/BaseLayout.astro` or `src/layouts/Layout.astro`).
    - The layout accepts a `lang` prop to fetch the correct SEO content from the central configuration.
4.  **Page-Level Language Specification**:
    - Each page (e.g., `src/pages/en/index.astro`, `src/pages/es/index.astro`) passes its language code (e.g., `lang="en"`) to the layout.
5.  **HTML `lang` Attribute**:
    - The root `<html>` tag in the layout has its `lang` attribute dynamically set based on the page's language.
6.  **Hreflang Tags**:
    - `hreflang` tags are implemented (either via `AstroSeo` or manually) to indicate alternate language versions of pages for search engines.

This setup ensures consistent and localized SEO metadata across the bilingual site.

## 🎨 Titan Core Theme & Component Usage

- Built on the Titan Core theme for Astro.
- All pages are wrapped in `@layouts/Layout.astro` for consistent SEO and layout.
- Components (Hero, Features, Stats, Logos, Faqs, etc.) are imported using absolute aliases (`@components`, `@layouts`, `@data`, `@assets`).
- Content objects for each section are typed and passed as props (see `en/index.astro` and `es/index.astro`).
- Button `variant` props are limited to: `"primary"`, `"secondary"`, `"whatsapp"`.

## 🧑‍💻 Type Safety & Linting

- All static config objects (e.g., `heroContent`, `featuresSection`) use `as const` for literal type safety.
- TypeScript is set to `strict: true` in `tsconfig.json`.
- `compilerOptions.types` in `tsconfig.json` includes `"astro/client"` for proper Astro type resolution.
- Component props are typed with interfaces in Astro frontmatter.

## 🛠️ Technical Implementation Details

### Bilingual Blog Post Layouts
- Both English (`/en/blog/[slug]`) and Spanish (`/es/blog/[slug]`) blog post pages use parallel Astro templates for layout and hero image presentation.
- Hero sections use an absolutely positioned, blurred background image with a consistent height (`h-[34rem]`), ensuring the hero starts at the very top of the page for both locales.
- Title and meta information are vertically spaced using `pt-28` and `mb-12` for visual harmony beneath the hero.
- In-body featured images are rendered below the title using Astro's `<Image />` with `object-cover`, `w-full`, and a fixed height (`h-[675px]`) to ensure edge-to-edge coverage without white gaps.

### Featured Image Handling
- Blog post frontmatter uses Astro Content Collections with `featuredImage: image().optional()` for type safety and automatic image optimization.
- The full `ImageMetadata` object is always passed to `<Image />`—never `.src` or a string path—to avoid hydration/runtime errors.
- If you change the schema or add images, always restart the dev server to ensure Astro properly hydrates image fields.

### Layout & Spacing
- Hero backgrounds use grayscale and blurred overlays for a professional look.
- Title spacing is tuned to avoid being cut off by the navbar and to provide comfortable visual balance.
- All blog post layouts are mobile-responsive and maintain consistent spacing across languages.

### Lessons Learned / Gotchas

- Always use the full `ImageMetadata` object with `<Image />` for local images managed by Astro's content collections. Do not use `.src` or string paths.
- Ensure `"strict": true` is set in `tsconfig.json`'s `compilerOptions` for correct type inference of Astro's `ImageMetadata` and other complex types. This was key to resolving persistent image type errors.
- Restart the Astro dev server and the IDE's TypeScript server after any changes to `tsconfig.json` or content collection schemas to ensure changes are applied and types are correctly re-evaluated.
- Keep bilingual templates in sync for a seamless user experience.

### Titan Theme Customizations
- The Titan theme is used as a base, with custom hero, blog, and bilingual layout adjustments.

### External Link Handling
- **Consistent New Tab Behavior**: All external consultation links (footer CTA, testimonials CTA, hero buttons) open in new tabs (`target="_blank"`) with proper security attributes (`rel="noopener noreferrer"`)
- **Component Implementation**: 
  - The `Button.astro` component explicitly handles `target` and `rel` attributes with conditional rendering
  - The `Testimonials-titan.astro` component passes `target` and `rel` attributes from content objects to the Button component
  - All homepage variants (root, `/en/`, `/es/`) maintain consistent button behavior
- **TypeScript Type Safety**:
  - Updated the `Props` interface in `Testimonials-titan.astro` to include optional `target` and `rel` properties in the CTA object
  - Ensures type safety when passing attributes from content objects to UI components
  - Follows the Titan Core Theme's strict TypeScript requirements with proper type definitions
- All layout and component imports use absolute aliases (e.g., `@layouts`, `@components`) for maintainability.

## 🌐 Bilingual Data Structure

### Localized Data Files
- **Language-Specific Data Files**: For content that differs between languages, we maintain separate files:
  - English: `@data/stats.ts`, `@data/footer/en.ts`, `@data/header/en.ts`
  - Spanish: `@data/stats-es.ts`, `@data/footer/es.ts`, `@data/header/es.ts`
- **Importing Strategy**: Each language page imports its corresponding data file:
  ```js
  // English pages
  import { statsLists } from "@data/stats";
  
  // Spanish pages
  import { statsLists } from "@data/stats-es";
  ```

### Component Localization
- **Props-Based Localization**: Components accept a `lang` prop to determine which strings to display:
  ```js
  // Component usage
  <ContactForm lang="es" />
  
  // Inside component
  const { lang = 'en' } = Astro.props;
  const content = localizedContent[lang] || localizedContent.en;
  ```
- **Consistent Styling**: All components maintain consistent styling across languages while displaying localized content.

## 🧰 Code Organization and Maintenance

### Component Structure

- **Shared Components**: Components in `src/components/` are used by both language versions and should accept a `lang` prop when they contain text content
- **Language-Specific Pages**: Pages are organized in `src/pages/en/` and `src/pages/es/` directories
- **Data Files**: Reusable content is stored in `src/data/` with separate exports for English and Spanish
- **Assets**: Images and other static assets are in `src/assets/` and should be imported using the `@assets` alias

### Code Quality Standards

- **TypeScript**: Use strict TypeScript with proper type definitions for all components and data
- **Comments**: Add descriptive comments for complex logic, especially in shared components
- **Debug Logging**: Do not leave `console.log` statements in production code
- **Form Validation**: Ensure all forms have proper client-side validation with translated error messages
- **Accessibility**: Maintain proper ARIA attributes and semantic HTML structure

### Testing and Deployment

- **Local Testing**: Test all changes in both languages before deployment
- **Build Verification**: Run `npm run build` to ensure the site builds successfully
- **Performance**: Monitor page load times and optimize large assets
- **SEO**: Maintain proper meta tags, structured data, and semantic HTML

## ✨ Recent Progress (June 2025)

### Date Formatting Improvements

- **Bilingual Date Support**: 
  - Enhanced the `Date.astro` component to properly format dates based on language context
  - Spanish dates now use 'es-MX' locale with Spanish month names and Mexican date format
  - English dates continue to use 'en-US' locale with ordinal suffixes (e.g., "1st", "2nd", "3rd")
  - This ensures consistent date presentation across both language versions of the blog
  - Removed debug logging statements from components to clean up the codebase

### Bilingual Page Consistency Improvements

- **About Pages**: 
  - Eliminated duplicate testimonial and CTA sections
  - Standardized numbered items with light gray backgrounds (`bg-gray-100`)
  - Applied consistent "Noto Sans KR" font styling across both language versions
  - Fixed "My Values" and "Mis Valores" sections to maintain visual parity

- **Contact Pages**:
  - Enhanced hero sections with proper responsive padding and typography
  - Improved contact form styling with consistent shadows and spacing
  - Applied "Noto Sans KR" font consistently across all text elements
  - Fixed form submission handling and validation messages in both languages
  - Ensured all stats and metrics display in the correct language

- **Spanish Homepage**:
  - Created dedicated Spanish data files for stats and metrics
  - Ensured all statistics display properly translated labels

### TypeScript Improvements

Significant progress has been made in resolving TypeScript errors and ensuring a robust, type-safe codebase:

- **Header Component (`Header.astro`):** Updated `Props` interface to correctly handle `readonly` content properties derived from `as const` data objects. Resolved an invalid comment issue causing prop type errors.
- **Layout & SEO (`Layout.astro`, `src/data/config.ts`):** Added `defaultLang: 'en'` to the SEO configuration in `config.ts` to fix errors in `Layout.astro`.
- **Blog Post Image & Slug Handling:**
    - Corrected logic in blog pages (`en/blog/[...slug].astro`, `es/blog/[...slug].astro`) to use `post.data.featuredImage` instead of `post.data.image` for SEO images, aligning with the content schema.
    - Fixed previous/next post navigation in `en/blog/[slug].astro` to use the correct `post.slug` property.
- **Features Component (`Features.astro`, `src/data/features.ts`):** Aligned `Feature` interface and component `Props` to correctly handle `readonly` data structures resulting from `as const` assertions on feature configuration objects.
- **`tsconfig.json` Configuration:** Enforced `"strict": true` in `compilerOptions`. This was a critical step in resolving persistent `ImageMetadata` type errors for Astro's `<Image />` component by ensuring stricter type checking and inference.
- **General Type Refinements:** Applied `ReadonlyArray` and `readonly` properties where appropriate to match `as const` data sources, improving overall type safety.

These changes have significantly improved the stability and maintainability of the TypeScript implementation within the Astro project.

## 💡 Key Learnings from Bilingual Site Implementation (May 2025)

The process of extending the site to be fully bilingual (English and Spanish) has provided several key technical insights and best practices:

### 1. Bilingual Structure & Navigation
-   **Page Organization**: English pages reside in `src/pages/en/` and Spanish pages in `src/pages/es/`. This clear separation simplifies content management and routing.
-   **Inter-language Linking**: The `Header.astro` component facilitates easy switching between language versions of a page using `translationSlugEn` and `translationSlugEs` props defined in each page's frontmatter.
-   **Layout Language Specification**: The main `Layout.astro` component correctly sets the `lang` attribute on the `<html>` tag based on a prop passed from individual pages, crucial for SEO and accessibility.

### 2. Content Translation Strategies
-   **Page-Specific Content**: For pages like "About Us" (`about.astro`), direct translation of text content, headings, and component props occurs within the respective language-specific Astro files (e.g., `src/pages/es/about.astro`).
-   **Reusable/Data-Driven Content**: For content like testimonials, which might be used across multiple pages or sourced from a dataset, separate TypeScript data files are maintained for each language (e.g., `src/data/testimonials-about.ts` and `src/data/testimonials-about-es.ts`). The appropriate language version is then imported into the corresponding Astro page.
-   **Structural Parity**: A core principle has been to maintain structural and functional parity between English and Spanish pages, ensuring a consistent user experience.

## 🔍 SEO Optimizations

The site implements comprehensive SEO best practices to ensure maximum visibility and performance:

### 1. Technical SEO
- **Domain Consistency**: All references use the production domain `https://www.nyenglishteacher.com` across:
  - `astro.config.mjs` site URL configuration
  - `robots.txt` sitemap reference
  - JSON-LD structured data in blog posts
  - Site configuration in `src/data/config.ts`
- **Dynamic Meta Tags**: All pages use properly structured `<title>` and meta description tags via the SEO component
- **Semantic HTML Structure**: Single `<h1>` per page with proper heading hierarchy throughout
- **Structured Data**: JSON-LD implementation for blog posts with article schema
- **Sitemap Generation**: Automatic sitemap generation via `@astrojs/sitemap` with proper configuration
- **Robots.txt**: Custom robots.txt file with correct sitemap URL reference
- **Performance Focus**: Minimal JavaScript, optimized images, and clean layout for better Core Web Vitals
- **Type Safety**: Using `as const` for configuration objects to ensure type safety

### 2. Bilingual SEO
- **Language Attributes**: Dynamic `lang` attribute on the `<html>` tag based on page language
- **Hreflang Tags**: Proper implementation of hreflang tags for language alternatives
- **Translated Content**: Complete content translation with language-specific URLs
- **Canonical URLs**: Proper canonical URL implementation for both language versions
- **Automatic Language Detection**: Root path (`/`) automatically redirects to `/en/` or `/es/` based on browser language

### 3. Content Optimization
- **Optimized Images**: All images use Astro's image optimization with proper alt text
- **Mobile Optimization**: Responsive design with special attention to mobile layout and spacing
  - Blog post titles use consistent text size (text-3xl/text-4xl) and proper spacing (mt-[5rem]/pt-8) on mobile to prevent overlap with navigation bar
  - Improved title contrast with text-gray-900 and font-bold classes
  - Added mb-4 spacing below titles for better readability on all devices
  - Ensured consistent implementation across both English and Spanish blog templates
- **Gradient Backgrounds**: Smooth gradient transitions for better readability and visual appeal
- **Navigation Cards**: Enhanced navigation with proper contrast and visual hierarchy

### 3. Astro & TypeScript Best Practices
-   **`as const` for Type Safety**: Using `as const` for static configuration objects (e.g., for feature lists, hero content) has been vital for ensuring literal types. This works in tandem with `strict: true` in `tsconfig.json` to prevent type errors when passing these objects as props to components.
-   **Scoped Styles & Global CSS**: Astro components use scoped styles by default, which helps prevent CSS conflicts. For global styles, ensure they are correctly imported into a primary layout component or managed via Astro's configuration if using specific integrations. *(Note: While we didn't encounter major global CSS issues, this remains a general best practice.)*
-   **Development Server & Cache**: Restarting the Astro development server (`npm run dev`) and the IDE's TypeScript server (e.g., VS Code's "TypeScript: Restart TS Server") is often necessary after:
    -   Adding new data files or changing their structure.
    -   Modifying `tsconfig.json` or content collection schemas.
    -   Introducing new import aliases.
    This helps clear caches and ensures type information is correctly updated.
-   **Import Aliases**: Consistent use of import aliases (`@data`, `@components`, `@assets`, `@layouts`) improves code readability and maintainability, especially in a growing project.

### 4. Bilingual Consistency Requirements

-   **Parallel Implementation**: Any feature, functionality, or UI element added to one language version MUST be implemented in the other language version as well. This is a strict requirement.
-   **Component Approach**: Whenever possible, use shared components with language-specific content passed as props to maintain consistent behavior across languages.
-   **Form Handling**: Forms must maintain identical functionality between language versions, with only text content differing (labels, placeholders, validation messages).
-   **Testing Both Languages**: Always test features in both English and Spanish to ensure consistent behavior and appearance.
-   **Language-Specific Customizations**: When language-specific customizations are needed (e.g., date formatting), implement them in shared components using the `lang` prop rather than duplicating code.

### 5. Iterative Process
-   The translation and implementation process is iterative: translate content, implement in the Astro component/page, review in the browser, and make corrections as needed. This cycle ensures accuracy and addresses any layout or display issues promptly.

These practices have helped build a robust and maintainable bilingual website.

## 🏄 Windsurf Cascade Rules

This repo follows robust rules for code quality and consistency. See `.windsurfrules` for details on:
- Import aliases
- Type safety (including `as const` and `strict: true`)
- Data organization
- Button variant restrictions
- SEO and accessibility
- Bilingual/multilingual structure

## 👥 Contributors

- [Your Name](https://your-website.com) - Initial project setup and development

## 📚 Best Practices

- Keep components small and focused on a single task.
- Use Astro’s built-in features for layout and styling.
- Document complex components and props.
- Test for accessibility and responsiveness.
- Follow the Windsurf Cascade rules for code quality and consistency.

## 📫 Contact

For questions or collaboration, visit [nyenglishteacher.com](https://www.nyenglishteacher.com).

## 🚀 Future Roadmap

The following features and improvements are planned for future development:

### 1. Content Expansion
- **Testimonials Page**: Create a dedicated testimonials page showcasing client success stories and feedback
  - Implement a consistent design with the rest of the site
  - Include filtering options by industry/service type
  - Add structured data markup for testimonials
- **Resource Library**: Develop a searchable library of business English resources
- **Interactive Learning Tools**: Add interactive exercises and self-assessment tools

### 2. Technical Enhancements
- **Performance Optimization**: Further optimize Core Web Vitals and page load speeds
- **Advanced Analytics**: Implement more detailed analytics for content performance tracking
- **Newsletter Integration**: Add newsletter signup functionality with proper GDPR compliance
- **Course Platform Integration**: Connect with a learning management system for online courses

### 3. Design Improvements
- **Dark Mode Support**: Implement a toggle for dark/light mode preferences
- **Enhanced Animations**: Add subtle animations for improved user experience
- **Expanded Component Library**: Develop additional reusable components for faster page creation
- **Accessibility Audit**: Conduct a comprehensive accessibility review and implement improvements

### 4. SEO & Marketing
- **Structured Data Expansion**: Add more schema types beyond Article (Course, FAQ, etc.)
- **Content Calendar**: Develop a strategic content calendar for blog posts
- **Social Sharing Optimization**: Enhance social media integration and sharing capabilities
- **Local SEO**: Improve local SEO for New York area targeting

This roadmap will be updated as priorities evolve and new features are implemented.

---
