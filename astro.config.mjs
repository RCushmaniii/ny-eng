// astro.config.mjs (pure JS, safe for .mjs)

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
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
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
    domains: ['www.nyenglishteacher.com'],
    remotePatterns: [{ protocol: 'https' }],
  },
  
  // Force trailing slashes for pages, but not API routes
  trailingSlash: 'ignore',
  
  build: {
    format: 'directory',
    inlineStylesheets: 'never',
  },

  // Redirects for URLs without language prefixes and duplicate category URLs
  redirects: {
    '/': '/en/',
    '/blog': '/en/blog/',
    '/services': '/en/services/',
    '/contact': '/en/contact/',
    '/about': '/en/about/',
    '/testimonials': '/en/testimonials/',
    '/book': '/en/book/',
    
    // Redirect English paths on Spanish side to proper Spanish URLs
    '/es/testimonials': '/es/testimonios/',
    '/es/services': '/es/servicios/',
    '/es/book': '/es/reservar/',
    
    // Redirect /es/category/ to /es/categoria/ (Spanish category URLs)
    '/es/category/business-english': '/es/categoria/ingles-para-negocios/',
    '/es/category/career-leadership': '/es/categoria/carrera-liderazgo/',
    '/es/category/carrera-liderazgo': '/es/categoria/carrera-liderazgo/',
    '/es/category/coaching-en-ingles': '/es/categoria/coaching-en-ingles/',
    '/es/category/comunicacion-de-alto-impacto': '/es/categoria/comunicacion-de-alto-impacto/',
    '/es/category/english-coaching': '/es/categoria/coaching-en-ingles/',
    '/es/category/executive-english': '/es/categoria/ingles-ejecutivo/',
    '/es/category/high-impact-communication': '/es/categoria/comunicacion-de-alto-impacto/',
    '/es/category/high-stakes-english': '/es/categoria/ingles-ejecutivo/',
    '/es/category/ingles-ejecutivo': '/es/categoria/ingles-ejecutivo/',
    '/es/category/ingles-para-fundadores-de-startups': '/es/categoria/ingles-para-fundadores-de-startups/',
    '/es/category/ingles-para-logistica': '/es/categoria/ingles-para-logistica/',
    '/es/category/ingles-para-negocios': '/es/categoria/ingles-para-negocios/',
    '/es/category/ingles-para-presentaciones': '/es/categoria/ingles-para-presentaciones/',
    '/es/category/ingles-para-profesionales': '/es/categoria/ingles-para-profesionales/',
    '/es/category/ingles-para-tecnologia': '/es/categoria/ingles-para-tecnologia/',
    '/es/category/logistics-english': '/es/categoria/ingles-para-logistica/',
    '/es/category/professional-english': '/es/categoria/ingles-para-profesionales/',
    '/es/category/startup-founders': '/es/categoria/ingles-para-fundadores-de-startups/',
    '/es/category/tech-english': '/es/categoria/ingles-para-tecnologia/',
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
        
        // Exclude URLs that redirect (non-canonical)
        const redirectPaths = [
          '/blog', '/services', '/contact', '/about', '/testimonials',
          '/es/category/'
        ];
        
        const isRedirect = redirectPaths.some(prefix => 
          p === prefix || p.startsWith(prefix)
        );
        
        return !p.includes('/api/') && 
               !p.includes('/_') && 
               !p.includes('/dev/') &&  // Exclude dev documentation from production
               !p.includes('[') && 
               !p.includes('#') &&
               !isRedirect &&
               // Prevent duplicate language prefixes
               !p.match(/\/(en|es)\/.*\/(en|es)\//) &&
               // Exclude /es/category/ URLs (use /es/categoria/ instead)
               !p.match(/^\/es\/category\//) &&
               // Exclude backup files
               !p.includes('-bak');
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

        // Generate hreflang links using our i18n system
        let links = [];
        
        // Try to find matching tkey for this URL
        const allTKeys = getAllTKeys();
        for (const tkey of allTKeys) {
          const enPath = routeFor.en[tkey];
          const esPath = routeFor.es[tkey];
          
          // If this URL matches either EN or ES path, add both as alternates
          if (u.pathname === enPath || u.pathname === esPath) {
            links = [
              { rel: 'alternate', hreflang: 'en-US', url: `${SITE}${enPath}` },
              { rel: 'alternate', hreflang: 'es-MX', url: `${SITE}${esPath}` }
            ];
            break;
          }
        }
        
        // Handle testimonial category pages (they use customHreflangs, not tkey)
        if (links.length === 0) {
          const testimonialMatch = u.pathname.match(/^\/(en|es)\/testimoni(als|os)\/([^\/]+)\/?$/);
          if (testimonialMatch) {
            const [, lang, , industry] = testimonialMatch;
            const enPath = `/en/testimonials/${industry}/`;
            const esPath = `/es/testimonios/${industry}/`;
            links = [
              { rel: 'alternate', hreflang: 'en-US', url: `${SITE}${enPath}` },
              { rel: 'alternate', hreflang: 'es-MX', url: `${SITE}${esPath}` }
            ];
          }
        }
        
        // If no links generated from i18n, use existing item.links if present
        if (links.length === 0 && item.links) {
          links = item.links.map((alt) => {
            const altURL = new URL(alt.url, SITE);
            altURL.pathname = ensureSlashPath(altURL.pathname);
            altURL.search = '';
            altURL.hash = '';
            return { ...alt, url: altURL.toString() };
          });
        }

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