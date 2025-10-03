// astro.config.mjs (pure JS, safe for .mjs)

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// i18n helpers (your existing helpers)
import { routeFor, alternates, getAllTKeys } from './src/lib/i18n.ts';

const SITE = 'https://www.nyenglishteacher.com';

// Helper usable in serialize()
const ensureSlashPath = (p = '/') =>
  ('/' + (p || '/')).replace(/\/+/g, '/').replace(/\/?$/, '/');

// __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  site: SITE,
  output: 'static',
  
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  
  // Force trailing slashes and directory-style URLs
  trailingSlash: 'always',
  
  build: {
    format: 'directory',
    inlineStylesheets: 'never',
  },

  // Avoid 302s in hreflang chains
  redirects: {
    '/': '/en/',
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  },

  integrations: [
    tailwind({ applyBaseStyles: false }),
    icon({ include: { lucide: ['*'] } }),

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

      // Custom pages
      customPages: [
        `${SITE}`, // Root URL with x-default
      ],
      
      // Filter out unwanted pages
      filter: (pageUrl) => {
        const p = new URL(pageUrl).pathname;
        return !p.includes('/api/') && 
               !p.includes('/_') && 
               !p.includes('[') && 
               !p.includes('#') &&
               // Prevent duplicate language prefixes
               !p.match(/\/(en|es)\/.*\/(en|es)\//);
      },

      // Normalize URLs and set priorities
      serialize(item) {
        const u = new URL(item.url, SITE);
        u.pathname = ensureSlashPath(u.pathname);
        u.search = '';
        u.hash = '';

        // Skip obvious non-pages (redundant with filter, but safe)
        if (
          u.pathname.includes('/api/') ||
          u.pathname.includes('/_') ||
          u.pathname.includes('[') ||
          u.pathname.includes('#')
        ) {
          return undefined;
        }

        // Normalize alternates if present
        const links = (item.links || []).map((alt) => {
          const altURL = new URL(alt.url, SITE);
          altURL.pathname = ensureSlashPath(altURL.pathname);
          altURL.search = '';
          altURL.hash = '';
          return { ...alt, url: altURL.toString() };
        });

        // Set priority and changefreq based on content type
        let priority = 0.5;
        let changefreq = 'monthly';
        
        if (u.pathname === '/' || u.pathname.match(/^\/(en|es)\/?$/)) {
          priority = 0.9;
          changefreq = 'weekly';
        } else if (u.pathname.includes('/blog/')) {
          priority = 0.6;
          changefreq = 'weekly';
        } else if (u.pathname.includes('/services/')) {
          priority = 0.7;
          changefreq = 'monthly';
        } else if (u.pathname.includes('/terms') || u.pathname.includes('/privacy')) {
          priority = 0.3;
          changefreq = 'yearly';
        }

        return {
          ...item,
          url: u.toString(),
          links,
          priority,
          changefreq,
        };
      },
    }),
  ],
});