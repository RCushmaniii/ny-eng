import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import path from 'path';

const site = 'https://www.nyenglishteacher.com';

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
        if (
          page.includes('/404') ||
          page.includes('/components/') ||
          page.includes('/test/') ||
          page.includes('/dev/') ||
          page.includes('/draft/') ||
          page.includes('/preview/') ||
          /\/\[\.\.\.\w+\]/.test(page) || // catch-all routes
          /\/\d+\/?$/.test(page) ||       // paginated routes
          page.includes('/category/') ||
          page.includes('/en/blog/en/') ||
          page.includes('/es/blog/es/') ||
          page.includes('/en/services/en/') ||
          page.includes('/es/servicios/es/') ||
          // Also filter out the site root to avoid duplicate entries with the root URL
          page === site || page === `${site}/`
        ) {
          return false;
        }
        return true;
      },
      entryLimit: 10000,
      serialize(item) {
        const url = item.url;
        const defaultEntry = {
          ...item,
          changefreq: 'weekly',
          priority: 0.7,
        };

        // Handle the root URL, treating it as the canonical x-default
        if (url === site || url === `${site}/`) {
          return {
            ...defaultEntry,
            changefreq: 'weekly',
            priority: 0.9,
            links: [
              { url: url, lang: 'x-default' }, // Root URL is the x-default
              { url: `${site}/en/`, lang: 'en-US' }, // Point en-US to /en/
              { url: `${site}/es/`, lang: 'es-MX' },
            ]
          };
        }

        // Handle language root pages with proper alternates
        if (/^https?:\/\/[^\/]+\/en\/?$/.test(url)) {
          return {
            ...defaultEntry,
            changefreq: 'weekly',
            priority: 0.9,
            links: [
              { url: `${site}/`, lang: 'x-default' },
              { url: url, lang: 'en-US' }, // This URL is the en-US version
              { url: `${site}/es/`, lang: 'es-MX' },
            ]
          };
        }
        
        if (/^https?:\/\/[^\/]+\/es\/?$/.test(url)) {
          return {
            ...defaultEntry,
            changefreq: 'weekly',
            priority: 0.9,
            links: [
              { url: `${site}/`, lang: 'x-default' },
              { url: `${site}/en/`, lang: 'en-US' },
              { url: url, lang: 'es-MX' },
            ]
          };
        }

        if (
          url.includes('/legal/') ||
          url.includes('/privacy/') ||
          url.includes('/terms/') ||
          url.includes('/thank-you/')
        ) {
          return {
            ...defaultEntry,
            changefreq: 'monthly',
            priority: 0.3,
          };
        }

        if (
          url.includes('/services/') ||
          url.includes('/servicios/') ||
          url.includes('/testimonials/') ||
          url.includes('/testimonios/')
        ) {
          return {
            ...defaultEntry,
            changefreq: 'monthly',
            priority: 0.5,
          };
        }

        // Handle blog posts with language alternates where possible
        if (url.includes('/blog/')) {
          const entry = {
            ...defaultEntry,
            changefreq: 'weekly',
            priority: 0.6,
          };
          
          // Try to determine language pair for blog post
          const isEnglish = url.includes('/en/blog/');
          const isSpanish = url.includes('/es/blog/');
          
          // For blog posts, we need to properly map between languages
          // This requires accessing the blog collection metadata to match translations
          
          // First, handle blog index pages to avoid the /blog/blog/ duplicate issue
          if (url === `${site}/en/blog/` || url === `${site}/en/blog`) {
            entry.links = [
              { url: url, lang: 'en-US' },
              { url: `${site}/es/blog/`, lang: 'es-MX' } // Fix path to avoid /blog/blog/
            ];
            return entry;
          }
          
          if (url === `${site}/es/blog/` || url === `${site}/es/blog`) {
            entry.links = [
              { url: `${site}/en/blog/`, lang: 'en-US' }, // Fix path to avoid /blog/blog/
              { url: url, lang: 'es-MX' }
            ];
            return entry;
          }
          
          // Extract slugs from URLs to enable translation matching for individual posts
          if (isEnglish || isSpanish) {
            entry.links = [];
            
            // For English blog posts
            if (isEnglish) {
              // Get the English slug
              const pathParts = url.split('/');
              const enSlug = pathParts[pathParts.length - 2] || pathParts[pathParts.length - 1].replace(/\.html$/, '');
              
              entry.links.push({ url: url, lang: 'en-US' });
              
              // Here we would ideally have a translation mapping system
              // For example, mapping "4-secrets-executives-use" to "4-secretos-que-usan-los-ejecutivos"
              // For now, we'll use a simple approach - this would need to be enhanced with real translation mappings
              
              // Check for known translation pairs based on your content
              let esSlug = enSlug;
              
              // Example manual mappings - in a real implementation, this would be a full mapping table
              const translationMap = {
                '4-secrets-executives-use': '4-secretos-que-usan-los-ejecutivos',
                // Add more mappings as needed
              };
              
              if (translationMap[enSlug]) {
                esSlug = translationMap[enSlug];
              }
              
              const esUrl = `${site}/es/blog/${esSlug}/`;
              entry.links.push({ url: esUrl, lang: 'es-MX' });
            } 
            // For Spanish blog posts
            else if (isSpanish) {
              // Get the Spanish slug
              const pathParts = url.split('/');
              const esSlug = pathParts[pathParts.length - 2] || pathParts[pathParts.length - 1].replace(/\.html$/, '');
              
              entry.links.push({ url: url, lang: 'es-MX' });
              
              // Reverse lookup in the translation map
              let enSlug = esSlug;
              
              const reverseTranslationMap = {
                '4-secretos-que-usan-los-ejecutivos': '4-secrets-executives-use',
                // Add more mappings as needed
              };
              
              if (reverseTranslationMap[esSlug]) {
                enSlug = reverseTranslationMap[esSlug];
              }
              
              const enUrl = `${site}/en/blog/${enSlug}/`;
              entry.links.push({ url: enUrl, lang: 'en-US' });
            }
          }
          
          
          return entry;
        }

        return defaultEntry;
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
