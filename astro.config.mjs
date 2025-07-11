import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import path from 'path';
import fs from 'fs';

// Import centralized translation maps
import {
  staticPageMap,
  reverseStaticPageMap,
  serviceMap,
  reverseServiceMap,
  blogTranslationMap,
  reverseBlogTranslationMap,
  categoryMap,
  reverseCategoryMap
} from './src/data/translationMaps.ts';

const site = 'https://www.nyenglishteacher.com';

// Centralized blacklist configuration
const BLACKLIST_CONFIG = {
  // Pattern-based exclusions
  patterns: [
    // Utility, test, and draft pages
    /[/\\](404|components|test|dev|draft|preview)[/\\]/,
    // Astro's catch-all routes
    /\/\[\.\.\.\w+\]/,
    // Paginated blog/category URLs
    /(?:blog|category)\/\d+\/?$/,
    // Invalid nested language paths
    /\/en\/[^/]+\/en\//,
    /\/es\/[^/]+\/es\//,
    // 'All' testimonials pages
    /\/(testimonials|testimonios)\/all\/$/,
    // Lock down "thank you" page matching to specific language roots
    /^\/(en|es)\/(thank-you|gracias)\/?$/,
    // Legacy non-canonical category slugs
    /\/es\/category\/ingles-para-ejecutivos\//,
    /\/es\/category\/english-coaching\//
  ],
  // Exact path exclusions (handles both with and without trailing slashes)
  exactPaths: [
    // Excluded category slugs - Updated to match your translationMaps.ts
    '/en/category/high-stakes-english',
    '/en/category/logistics-english',
    '/en/category/professional-english',
    '/en/category/startup-founders',
    '/en/category/tech-english',
    '/es/category/ingles-para-fundadores-de-startups',
    '/es/category/ingles-para-logistica',
    '/es/category/ingles-para-presentaciones',
    '/es/category/ingles-para-profesionales',
    '/es/category/ingles-para-tecnologia',
    // Excluded service pages - Updated to match your translationMaps.ts
    '/en/services/interview-prep',
    '/en/services/medical-english',
    '/en/services/public-speaking-english',
    '/en/services/technical-sales-english',
    '/es/servicios/hablar-en-publico',
    '/es/servicios/ingles-para-medicos',
    '/es/servicios/ingles-para-ventas-tecnicas',
    '/es/servicios/preparacion-para-entrevistas'
  ],
  // Custom exclusion functions
  customRules: [
    // Individual testimonials pages (keep only top-level)
    (pathname) => {
      const normalized = pathname.endsWith('/') ? pathname : pathname + '/';
      return (
        (normalized.startsWith('/en/testimonials/') && normalized !== '/en/testimonials/') ||
        (normalized.startsWith('/es/testimonios/') && normalized !== '/es/testimonios/')
      );
    }
  ]
};

// Robust blacklist checker function
function isBlacklisted(pathname) {
  const normalizedPage = pathname.endsWith('/') ? pathname : pathname + '/';

  // Check pattern-based exclusions
  for (const pattern of BLACKLIST_CONFIG.patterns) {
    if (pattern.test(pathname)) {
      return true;
    }
  }

  // Check exact path exclusions (normalize both for comparison)
  for (const exactPath of BLACKLIST_CONFIG.exactPaths) {
    const normalizedExactPath = exactPath.endsWith('/') ? exactPath : exactPath + '/';
    if (normalizedPage === normalizedExactPath) {
      return true;
    }
  }

  // Check custom rules
  for (const rule of BLACKLIST_CONFIG.customRules) {
    if (rule(pathname)) {
      return true;
    }
  }

  return false;
}

// Helper function to check if a file exists in the build output
function pageExists(url) {
  const normalizedUrl = url === '/' ? '/' : url.replace(/\/$/, '');
  const possiblePaths = [
    path.join(process.cwd(), 'dist', normalizedUrl === '/' ? 'index.html' : normalizedUrl.slice(1) + '.html'),
    path.join(process.cwd(), 'dist', normalizedUrl === '/' ? 'index.html' : normalizedUrl.slice(1), 'index.html'),
    path.join(process.cwd(), 'dist', normalizedUrl === '/' ? 'index.html' : normalizedUrl.slice(1))
  ];

  return possiblePaths.some(pathToCheck => fs.existsSync(pathToCheck));
}

// Helper function to generate proper hreflang alternates
function generateHreflangAlternates(url, type = 'generic') {
  const links = [];
  const slug = url.split('/').filter(Boolean).pop();

  switch (type) {
    case 'static':
      // Use staticPageMap for static pages
      if (url.startsWith('/en/')) {
        links.push({ url: `${site}${url}`, lang: 'en-US' });
        const esEquivalent = staticPageMap[url];
        if (esEquivalent && pageExists(esEquivalent)) {
          links.push({ url: `${site}${esEquivalent}`, lang: 'es-MX' });
        }
        links.push({ url: `${site}${url}`, lang: 'x-default' });
      } else if (url.startsWith('/es/')) {
        links.push({ url: `${site}${url}`, lang: 'es-MX' });
        const enEquivalent = reverseStaticPageMap[url];
        if (enEquivalent && pageExists(enEquivalent)) {
          links.push({ url: `${site}${enEquivalent}`, lang: 'en-US' });
          links.push({ url: `${site}${enEquivalent}`, lang: 'x-default' });
        }
      }
      break;

    case 'service':
      if (url.startsWith('/en/services/')) {
        links.push({ url: `${site}${url}`, lang: 'en-US' });
        const esSlug = serviceMap[slug];
        if (esSlug) {
          const esUrl = `/es/servicios/${esSlug}/`;
          if (pageExists(esUrl)) {
            links.push({ url: `${site}${esUrl}`, lang: 'es-MX' });
          }
        }
        links.push({ url: `${site}${url}`, lang: 'x-default' });
      } else if (url.startsWith('/es/servicios/')) {
        links.push({ url: `${site}${url}`, lang: 'es-MX' });
        const enSlug = reverseServiceMap[slug];
        if (enSlug) {
          const enUrl = `/en/services/${enSlug}/`;
          if (pageExists(enUrl)) {
            links.push({ url: `${site}${enUrl}`, lang: 'en-US' });
            links.push({ url: `${site}${enUrl}`, lang: 'x-default' });
          }
        }
      }
      break;

    case 'blog':
      if (url.startsWith('/en/blog/')) {
        links.push({ url: `${site}${url}`, lang: 'en-US' });
        const esSlug = blogTranslationMap[slug];
        if (esSlug) {
          const esUrl = `/es/blog/${esSlug}/`;
          if (pageExists(esUrl)) {
            links.push({ url: `${site}${esUrl}`, lang: 'es-MX' });
          }
        }
        links.push({ url: `${site}${url}`, lang: 'x-default' });
      } else if (url.startsWith('/es/blog/')) {
        links.push({ url: `${site}${url}`, lang: 'es-MX' });
        const enSlug = reverseBlogTranslationMap[slug];
        if (enSlug) {
          const enUrl = `/en/blog/${enSlug}/`;
          if (pageExists(enUrl)) {
            links.push({ url: `${site}${enUrl}`, lang: 'en-US' });
            links.push({ url: `${site}${enUrl}`, lang: 'x-default' });
          }
        }
      }
      break;

    case 'category':
      if (url.startsWith('/en/category/')) {
        links.push({ url: `${site}${url}`, lang: 'en-US' });
        const esSlug = categoryMap[slug];
        if (esSlug) {
          const esUrl = `/es/category/${esSlug}/`;
          if (pageExists(esUrl)) {
            links.push({ url: `${site}${esUrl}`, lang: 'es-MX' });
          }
        }
        links.push({ url: `${site}${url}`, lang: 'x-default' });
      } else if (url.startsWith('/es/category/')) {
        links.push({ url: `${site}${url}`, lang: 'es-MX' });
        const enSlug = reverseCategoryMap[slug];
        if (enSlug) {
          const enUrl = `/en/category/${enSlug}/`;
          if (pageExists(enUrl)) {
            links.push({ url: `${site}${enUrl}`, lang: 'en-US' });
            links.push({ url: `${site}${enUrl}`, lang: 'x-default' });
          }
        }
      }
      break;

    default:
      // Generic fallback - just add self-reference
      const lang = url.startsWith('/es/') ? 'es-MX' : 'en-US';
      links.push({ url: `${site}${url}`, lang });
  }

  return links;
}

export default defineConfig({
  site,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: {
        lucide: ['*'],
      },
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-MX',
        },
      },
      filter: (page) => {
        // Extract pathname from the full URL for Astro sitemap
        const pathname = new URL(page).pathname;
        // Use the robust blacklist checker with the pathname
        return !isBlacklisted(pathname);
      },
      entryLimit: 10000,
      serialize(item) {
        // Ensure consistent trailing slash handling
        const rawUrl = new URL(item.url).pathname;
        const url = rawUrl.endsWith('/') ? rawUrl : `${rawUrl}/`;
        const fullUrl = item.url.endsWith('/') ? item.url : `${item.url}/`;

        // Verify page actually exists before including in sitemap
        if (!pageExists(url)) {
          console.warn(`⚠️ Sitemap warning: URL ${url} doesn't exist in build output. Skipping.`);
          return null; // Skip non-existent pages
        }

        const defaultEntry = {
          ...item,
          url: fullUrl,
          changefreq: 'weekly',
          priority: 0.7,
          links: []
        };

        // --- Sitemap Entry Customization Logic ---

        // 1. Root and language index pages
        if (url === '/' || url === '/en/' || url === '/es/') {
          return {
            ...defaultEntry,
            priority: url === '/' ? 1.0 : 0.9,
            links: [
              { url: `${site}/`, lang: 'x-default' },
              { url: `${site}/en/`, lang: 'en-US' },
              { url: `${site}/es/`, lang: 'es-MX' }
            ]
          };
        }

        // 2. Blog index pages
        if (url === '/en/blog/' || url === '/es/blog/') {
          return {
            ...defaultEntry,
            priority: 0.8,
            links: [
              { url: `${site}/en/blog/`, lang: 'en-US' },
              { url: `${site}/es/blog/`, lang: 'es-MX' },
              { url: `${site}/en/blog/`, lang: 'x-default' }
            ]
          };
        }

        // 3. Services index page (handle like static pages)
        if (url === '/en/services/' || url === '/es/servicios/') {
          return {
            ...defaultEntry,
            priority: 0.8,
            changefreq: 'monthly',
            links: generateHreflangAlternates(url, 'static')
          };
        }

        // 3b. Individual service detail pages
        if (
          (url.startsWith('/en/services/') && url !== '/en/services/') ||
          (url.startsWith('/es/servicios/') && url !== '/es/servicios/')
        ) {
          return {
            ...defaultEntry,
            priority: 0.8,
            changefreq: 'monthly',
            links: generateHreflangAlternates(url, 'service')
          };
        }

        // 4. Static pages (about, contact, etc.)
        const staticPageTypes = ['/about/', '/contact/', '/thank-you/', '/legal/', '/privacy/', '/terms/'];
        if (staticPageTypes.some(type => url.includes(type))) {
          return {
            ...defaultEntry,
            priority: url.includes('/legal/') ? 0.3 : 0.8,
            changefreq: url.includes('/legal/') ? 'yearly' : 'monthly',
            links: generateHreflangAlternates(url, 'static')
          };
        }

        // 5. Blog posts
        if (url.includes('/blog/') && url !== '/en/blog/' && url !== '/es/blog/') {
          return {
            ...defaultEntry,
            priority: 0.8,
            changefreq: 'monthly',
            links: generateHreflangAlternates(url, 'blog')
          };
        }

        // 6. Category pages
        if (url.includes('/category/')) {
          return {
            ...defaultEntry,
            priority: 0.6,
            changefreq: 'weekly',
            links: generateHreflangAlternates(url, 'category')
          };
        }

        // 7. Testimonials pages
        if (url.includes('/testimonials/') || url.includes('/testimonios/')) {
          const links = [];
          if (url === '/en/testimonials/') {
            links.push(
              { url: `${site}/en/testimonials/`, lang: 'en-US' },
              { url: `${site}/es/testimonios/`, lang: 'es-MX' },
              { url: `${site}/en/testimonials/`, lang: 'x-default' }
            );
          } else if (url === '/es/testimonios/') {
            links.push(
              { url: `${site}/es/testimonios/`, lang: 'es-MX' },
              { url: `${site}/en/testimonials/`, lang: 'en-US' },
              { url: `${site}/en/testimonials/`, lang: 'x-default' }
            );
          } else {
            // Individual testimonial pages
            const lang = url.startsWith('/es/') ? 'es-MX' : 'en-US';
            links.push({ url: fullUrl, lang });
          }

          return {
            ...defaultEntry,
            priority: 0.5,
            changefreq: 'monthly',
            links
          };
        }

        // 8. Default fallback for any other pages
        return {
          ...defaultEntry,
          links: generateHreflangAlternates(url, 'generic')
        };
      },
    }),
  ],
  experimental: {
    fonts: [
      {
        provider: 'local',
        name: 'Noto Sans KR',
        cssVariable: '--font-noto-sans-kr',
        variants: [
          {
            weight: 400,
            style: 'normal',
            src: ['./src/assets/fonts/noto-sans-kr-v36-latin-regular.woff2'],
          },
        ],
        fallbacks: ['sans-serif'],
      },
      {
        provider: 'local',
        name: 'Bruno Ace SC',
        cssVariable: '--font-bruno-ace-sc',
        variants: [
          {
            weight: 400,
            style: 'normal',
            src: ['./src/assets/fonts/bruno-ace-sc-v5-latin-regular.woff2'],
          },
        ],
        fallbacks: ['sans-serif'],
      },
    ],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "aos/dist/aos.css";`,
        },
      },
    },
    optimizeDeps: {
      include: ['aos'],
    },
    resolve: {
      alias: {
        '~': path.resolve('./src'),
      },
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
      langs: [],
      transformers: [],
      showLineNumbers: false,
      lineNumbersPrefix: '',
    },
  },
  image: {
    remotePatterns: [
      { protocol: 'https' },
      { protocol: 'http' },
    ],
  },
});

// Export utilities for external use
export {
  BLACKLIST_CONFIG,
  isBlacklisted,
  pageExists,
  generateHreflangAlternates
};