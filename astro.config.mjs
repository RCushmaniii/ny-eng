import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import path from 'path';
import tailwindcss from 'tailwindcss';

// Always use the canonical www domain for SEO purposes
const site = 'https://www.nyenglishteacher.com';

export default defineConfig({
  integrations: [
    tailwind({
      // Let Astro handle the Tailwind config automatically
      applyBaseStyles: false
    }),
    icon({
      include: {
        lucide: ['*'], // Include all lucide icons
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
        // Exclude 404, dev/test, paginated, and category pages
        if (
          page.includes('/404') ||
          page.includes('/components/') ||
          page.includes('/test/') ||
          page.includes('/dev/') ||
          page.includes('/draft/') ||
          page.includes('/preview/') ||
          /\/\[\.\.\.\w+\]/.test(page) || // dynamic catch-all routes
          /\/\d+\/?$/.test(page) || // paginated routes
          page.includes('/category/')
        ) {
          return false;
        }
        return true;
      },
      entryLimit: 10000,
    })
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
  site,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es']
  },
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "aos/dist/aos.css";`
        }
      }
    },
    optimizeDeps: {
      include: ['aos']
    },
    resolve: {
      alias: {
        '~': path.resolve('./src')
      }
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
      langs: [],
      transformers: [],
      showLineNumbers: false,
      lineNumbersPrefix: ''
    }
  },
  // Integrations are defined above
  image: {
    // Allow all remote patterns (https and http)
    remotePatterns: [
      {
        protocol: "https"
      },
      {
        protocol: "http"
      }
    ]
  }
});