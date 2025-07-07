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
      customPages: [
        `${site}`, // Adds root URL explicitly
      ],
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
          page.includes('/es/servicios/es/')
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

        if (url === site || url === `${site}/`) {
          return {
            ...defaultEntry,
            changefreq: 'weekly',
            priority: 0.9,
            links: [
              { url: url, lang: 'x-default' },
              { url: `${site}/en/`, lang: 'en-US' },
              { url: `${site}/es/`, lang: 'es-MX' },
            ]
          };
        }

        if (/^https?:\/\/[^\/]+\/(en|es)?\/?$/.test(url)) {
          return {
            ...defaultEntry,
            changefreq: 'weekly',
            priority: 0.9,
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

        if (url.includes('/blog/')) {
          return {
            ...defaultEntry,
            changefreq: 'weekly',
            priority: 0.6,
          };
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
