import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import path from 'path';
import tailwindcss from 'tailwindcss';

// Get the site URL from environment variable or use a default for local development
const site = process.env.PUBLIC_SITE_URL || 'http://localhost:4321';

export default defineConfig({
  integrations: [
    tailwind({
      // Let Astro handle the Tailwind config automatically
      applyBaseStyles: false
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'), // Only exclude 404 page
      entryLimit: 10000, // Increase entry limit if you have many pages
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
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'), // Only exclude 404 page
      entryLimit: 10000, // Increase entry limit if you have many pages
    })
  ],
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