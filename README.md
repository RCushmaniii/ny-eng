---

```markdown
# NY English Teacher – Website Redesign

Welcome to the codebase for the **NYEnglishTeacher.com** website redesign project. This site is built using the [Astro](https://astro.build) framework with the [Titan theme](https://themes.astro.build/titan). It's designed to be fast, modern, and content-focused.

## 🚀 Project Overview

This is the new version of NYEnglishTeacher.com, redesigned to provide a better user experience, responsive layout, and a clean, professional look. Built with Astro, this project emphasizes performance and simplicity.

## 🛠️ Tech Stack

- [Astro](https://astro.build)
- [TypeScript](https://www.typescriptlang.org/)
- HTML/CSS
- Markdown (for content)
- Optional: Integrations/plugins via Astro ecosystem

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
```

## 📌 Notes

- This project uses the **Titan Astro theme** as the foundation.
- Customize `astro.config.mjs` and `tsconfig.json` as needed.

## 🌐 Multilingual & Bilingual Structure

This project supports both English and Spanish, with fully localized homepages and reusable content/data files for each language.

- English pages: `src/pages/en/`
- Spanish pages: `src/pages/es/`
- Reusable content/data: `@data` (e.g., `featureLists`, `statsLists`, `logoLists`, `faqLists`)
- All Titan Core components and layouts are shared, with content objects translated and typed for each locale.

## 🎨 Titan Core Theme & Component Usage

- Built on the Titan Core theme for Astro.
- All pages are wrapped in `@layouts/Layout.astro` for consistent SEO and layout.
- Components (Hero, Features, Stats, Logos, Faqs, etc.) are imported using absolute aliases (`@components`, `@layouts`, `@data`, `@assets`).
- Content objects for each section are typed and passed as props (see `en/index.astro` and `es/index.astro`).
- Button `variant` props are limited to: `"primary"`, `"secondary"`, `"whatsapp"`.

## 🧑‍💻 Type Safety & Linting

- All static config objects (e.g., `heroContent`, `featuresSection`) use `as const` for literal type safety.
- TypeScript is set to `strict: true` in `tsconfig.json` and includes `"astro"` in `compilerOptions.types`.
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
- Always use the full `ImageMetadata` object with `<Image />` for local images managed by Astro's content collections.
- Do not use `.src` or string paths, as this will break image rendering and optimization.
- Restart the dev server after any schema or image changes to avoid stale hydration issues.
- Keep bilingual templates in sync for a seamless user experience.

### Titan Theme Customizations
- The Titan theme is used as a base, with custom hero, blog, and bilingual layout adjustments.
- All layout and component imports use absolute aliases (e.g., `@layouts`, `@components`) for maintainability.

## 📊 Data & Content Organization

- Data files in `@data` provide reusable, localized content for features, stats, logos, FAQs, and more.
- Content is translated and exported as typed objects for each locale.
- For new languages, copy and translate the relevant data files.

## 🏆 SEO & Accessibility

- Each page provides unique, descriptive, and localized `seoTitle` and `seoDescription` props.
- All images use meaningful `alt` text for accessibility and SEO.
- Images are optimized via Astro’s `<Image />` component or `astro:assets`, with mobile-specific versions where needed.

## 🛠️ Development & Contribution

- Restart the dev environment (`npm run dev`) and the TypeScript server (Ctrl+Shift+P → TypeScript: Restart TS Server) after major changes.
- Test responsiveness on mobile and desktop.
- Run `astro build` to verify static site generation before deployment.
- Avoid inline styles; use component props and theme classes for customization.
- Remove duplicated components to optimize performance.
- Document any new components or complex props in this README or in the component files.

## 🏄 Windsurf Cascade Rules

This repo follows robust rules for code quality and consistency. See `.windsurfrules` for details on:
- Import aliases
- Type safety
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

For questions or collaboration, visit [nyenglishteacher.com](https://nyenglishteacher.com).

---
