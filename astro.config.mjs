// astro.config.mjs (pure JS, safe for .mjs)

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import path from "node:path";
import { fileURLToPath } from "node:url";

// i18n helpers (your existing helpers)
import { routeFor, getAllTKeys } from "./src/lib/i18n.ts";

const SITE = "https://www.nyenglishteacher.com";

// Helper usable in serialize()
const ensureSlashPath = (p = "/") =>
  ("/" + (p || "/")).replace(/\/+/g, "/").replace(/\/?$/, "/");

// Blog post translations map (EN slug -> ES path)
// Used by sitemap to generate correct hreflang for blog posts
const blogTranslations = {
  "4-secrets-executives-use": "/es/blog/4-secretos-que-usan-los-ejecutivos/",
  "5-practical-ways-to-boost-business-english": "/es/blog/5-formas-practicas-mejorar-ingles-negocios/",
  "boost-eng-confidence": "/es/blog/aumentar-confianza/",
  "corporate-english-transformation-case-study": "/es/blog/caso-estudio-transformacion-ingles-corporativo/",
  "executive-english-coaching": "/es/blog/coaching-ejecutivo/",
  "executive-video-call": "/es/blog/presencia-ejecutiva-en-videollamadas/",
  "managers-lose-millions": "/es/blog/por-que-los-gerentes-de-ti-en-mexico-pierden-clientes/",
  "master-business-english": "/es/blog/dominar-negocios/",
  "real-cost-weak-english-mexican-companies": "/es/blog/costo-real-ingles-debil-empresas-mexicanas/",
  "small-talk-to-smart-talk": "/es/blog/charla-pequena-habla-inteligente/",
  "why-senior-developers-need-advanced-english": "/es/blog/por-que-desarrolladores-senior-necesitan-ingles-avanzado/",
  "email-phrases-that-make-you-sound-junior": "/es/blog/frases-email-que-te-hacen-sonar-junior/",
  "how-to-negotiate-in-english-framework": "/es/blog/como-negociar-en-ingles-marco/",
  "executive-communication-playbook": "/es/blog/manual-comunicacion-ejecutiva/",
};

// Reverse map (ES slug -> EN path)
const blogTranslationsReverse = Object.fromEntries(
  Object.entries(blogTranslations).map(([enSlug, esPath]) => {
    const esSlug = esPath.replace(/^\/es\/blog\//, "").replace(/\/$/, "");
    return [esSlug, `/en/blog/${enSlug}/`];
  })
);

// __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  site: SITE,
  output: "static",
  // API routes are excluded from build - they won't be included in dist/

  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        limitInputPixels: false,
      },
    },
    domains: ["www.nyenglishteacher.com"],
    remotePatterns: [{ protocol: "https" }],
  },

  // Force trailing slashes for pages, but not API routes
  trailingSlash: "ignore",

  build: {
    format: "directory",
    inlineStylesheets: "never",
  },

  // Redirects for URLs without language prefixes and duplicate category URLs
  redirects: {
    // Root "/" redirect handled by Vercel Edge Middleware (language detection)
    "/blog": "/en/blog/",
    "/services": "/en/services/",
    "/contact": "/en/contact/",
    "/about": "/en/about/",
    "/testimonials": "/en/testimonials/",
    "/book": "/en/book/",
    "/quiz": "/en/quiz/it-services/",
    "/en/quiz": "/en/quiz/it-services/",
    "/es/quiz": "/es/quiz/it-services/",

    // Redirect English paths on Spanish side to proper Spanish URLs
    "/es/testimonials": "/es/testimonios/",
    "/es/services": "/es/servicios/",
    "/es/book": "/es/reservar/",

    // Redirect /es/category/ to /es/categoria/ (Spanish category URLs)
    "/es/category/business-english": "/es/categoria/ingles-para-negocios/",
    "/es/category/career-leadership": "/es/categoria/carrera-liderazgo/",
    "/es/category/carrera-liderazgo": "/es/categoria/carrera-liderazgo/",
    "/es/category/coaching-en-ingles": "/es/categoria/coaching-en-ingles/",
    "/es/category/comunicacion-de-alto-impacto":
      "/es/categoria/comunicacion-de-alto-impacto/",
    "/es/category/english-coaching": "/es/categoria/coaching-en-ingles/",
    "/es/category/executive-english": "/es/categoria/ingles-ejecutivo/",
    "/es/category/high-impact-communication":
      "/es/categoria/comunicacion-de-alto-impacto/",
    "/es/category/high-stakes-english": "/es/categoria/ingles-ejecutivo/",
    "/es/category/ingles-ejecutivo": "/es/categoria/ingles-ejecutivo/",
    "/es/category/ingles-para-fundadores-de-startups":
      "/es/categoria/ingles-para-fundadores-de-startups/",
    "/es/category/ingles-para-logistica":
      "/es/categoria/ingles-para-logistica/",
    "/es/category/ingles-para-negocios": "/es/categoria/ingles-para-negocios/",
    "/es/category/ingles-para-presentaciones":
      "/es/categoria/ingles-para-presentaciones/",
    "/es/category/ingles-para-profesionales":
      "/es/categoria/ingles-para-profesionales/",
    "/es/category/ingles-para-tecnologia":
      "/es/categoria/ingles-para-tecnologia/",
    "/es/category/logistics-english": "/es/categoria/ingles-para-logistica/",
    "/es/category/professional-english":
      "/es/categoria/ingles-para-profesionales/",
    "/es/category/startup-founders":
      "/es/categoria/ingles-para-fundadores-de-startups/",
    "/es/category/tech-english": "/es/categoria/ingles-para-tecnologia/",
  },

  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
        "@components": path.resolve(__dirname, "src/components"),
        "@layouts": path.resolve(__dirname, "src/layouts"),
        "@data": path.resolve(__dirname, "src/data"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@images": path.resolve(__dirname, "src/images"),
        "@utils": path.resolve(__dirname, "src/utils"),
      },
    },
  },

  integrations: [
    react(),
    mdx(),
    tailwind({ applyBaseStyles: false }),
    icon({ include: { lucide: ["*"] } }),

    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),

      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          es: "es-MX",
        },
      },

      // Custom pages - none needed, root URL redirects to /en/
      customPages: [],

      // Filter out unwanted pages
      // INCLUDE: blog index, blog posts, primary testimonial pages, services,
      //          resources, booking/contact/assessment, language homepages, legal pages
      // EXCLUDE: category archives, filtered testimonial pages, quiz results
      filter: (pageUrl) => {
        const p = new URL(pageUrl).pathname;

        // Exclude URLs that redirect (non-canonical)
        const redirectPaths = [
          "/blog",
          "/services",
          "/contact",
          "/about",
          "/testimonials",
        ];

        const isRedirect = redirectPaths.some(
          (prefix) => p === prefix || p.startsWith(prefix),
        );

        // Exclude category archive pages (both EN and ES, including /es/category/ legacy paths)
        const isCategoryPage =
          p.match(/^\/(en|es)\/category\//) || p.match(/^\/es\/categoria\//);

        // Exclude filtered testimonial pages (subpages, not root)
        // Keep: /en/testimonials/ and /es/testimonios/
        // Exclude: /en/testimonials/tech/, /es/testimonios/tech/, etc.
        const isFilteredTestimonialPage =
          p.match(/^\/en\/testimonials\/[^\/]+\/?$/) ||
          p.match(/^\/es\/testimonios\/[^\/]+\/?$/);

        return (
          !p.includes("/api/") &&
          !p.includes("/_") &&
          !p.includes("/dev/") && // Exclude dev documentation from production
          !p.includes("/admin/") && // CRITICAL: Exclude admin pages from sitemap
          !p.includes("/thank-you") && // Exclude thank-you pages (thin content, no SEO value)
          !p.includes("/chat") && // Exclude chat and chat-test pages (internal tools)
          !p.match(/\/quiz\/[^\/]+\/question\/\d+/) && // Exclude quiz question pages (e.g., /quiz/it-services/question/1/)
          !p.match(/\/quiz\/question\/\d+/) && // Exclude OLD quiz question pages (e.g., /quiz/question/1/)
          !p.match(/\/quiz\/[^\/]+\/report/) && // Exclude quiz report pages (dynamically generated)
          !p.match(/\/quiz\/[^\/]+\/results?\/?/) && // Exclude quiz result pages
          !p.match(/\/blog\/\d+\/?$/) && // Exclude blog pagination ONLY (e.g., /blog/2/, not /blog/4-secrets/)
          !p.includes("[") &&
          !p.includes("#") &&
          !isRedirect &&
          !isCategoryPage && // Exclude all category archive pages
          !isFilteredTestimonialPage && // Exclude filtered testimonial pages (keep root only)
          // Prevent duplicate language prefixes
          !p.match(/\/(en|es)\/.*\/(en|es)\//) &&
          // Exclude backup files
          !p.includes("-bak") &&
          // Only include /meme-portfolio/all/ — exclude individual role pages
          !(p.includes("/meme-portfolio/") && !p.match(/\/meme-portfolio\/all\/?$/))
        );
      },

      // Normalize URLs and set priorities
      serialize(item) {
        const u = new URL(item.url, SITE);
        u.pathname = ensureSlashPath(u.pathname);
        u.search = "";
        u.hash = "";

        // Skip the root URL (it redirects to /en/)
        if (u.pathname === "/") {
          return undefined;
        }

        // Skip obvious non-pages (redundant with filter, but safe)
        if (
          u.pathname.includes("/api/") ||
          u.pathname.includes("/_") ||
          u.pathname.includes("/admin/") || // CRITICAL: Never include admin pages
          u.pathname.includes("[") ||
          u.pathname.includes("#")
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
              { rel: "alternate", hreflang: "en-US", url: `${SITE}${enPath}` },
              { rel: "alternate", hreflang: "es-MX", url: `${SITE}${esPath}` },
            ];
            break;
          }
        }

        // Handle blog posts using the translation map
        if (links.length === 0) {
          const enBlogMatch = u.pathname.match(/^\/en\/blog\/([^\/]+)\/$/);
          const esBlogMatch = u.pathname.match(/^\/es\/blog\/([^\/]+)\/$/);

          if (enBlogMatch) {
            const enSlug = enBlogMatch[1];
            const esPath = blogTranslations[enSlug];
            if (esPath) {
              links = [
                { rel: "alternate", hreflang: "en-US", url: `${SITE}${u.pathname}` },
                { rel: "alternate", hreflang: "es-MX", url: `${SITE}${esPath}` },
              ];
            }
          } else if (esBlogMatch) {
            const esSlug = esBlogMatch[1];
            const enPath = blogTranslationsReverse[esSlug];
            if (enPath) {
              links = [
                { rel: "alternate", hreflang: "en-US", url: `${SITE}${enPath}` },
                { rel: "alternate", hreflang: "es-MX", url: `${SITE}${u.pathname}` },
              ];
            }
          }
        }

        // If still no links from i18n or blog translations, use existing item.links
        if (links.length === 0 && item.links && item.links.length > 0) {
          links = item.links.map((alt) => {
            const altURL = new URL(alt.url, SITE);
            altURL.pathname = ensureSlashPath(altURL.pathname);
            altURL.search = "";
            altURL.hash = "";
            return { ...alt, url: altURL.toString() };
          });
        }

        // For pages still without hreflang, add self-referencing hreflang
        if (links.length === 0) {
          const langMatch = u.pathname.match(/^\/(en|es)\//);
          if (langMatch) {
            const lang = langMatch[1];
            const hreflang = lang === "en" ? "en-US" : "es-MX";
            links = [{ rel: "alternate", hreflang, url: u.toString() }];
          }
        }

        // Set priority, changefreq, and lastmod based on content type
        // Use stable dates to avoid batch-generated timestamps (build time)
        let priority = 0.5;
        let changefreq = "monthly";
        let lastmod = new Date("2025-12-01"); // Default stable date for misc pages

        if (u.pathname === "/" || u.pathname.match(/^\/(en|es)\/?$/)) {
          priority = 1.0;
          changefreq = "weekly";
          lastmod = new Date("2026-01-15"); // Homepage updated recently
        } else if (u.pathname.match(/^\/(en|es)\/blog\/?$/)) {
          // Blog index pages
          priority = 0.7;
          changefreq = "weekly";
          lastmod = new Date("2026-01-10"); // Blog index updates with new posts
        } else if (u.pathname.includes("/blog/")) {
          // Individual blog posts
          priority = 0.7;
          changefreq = "monthly";
          lastmod = new Date("2025-11-20"); // Blog posts stable after publishing
        } else if (
          u.pathname.includes("/services/") ||
          u.pathname.includes("/servicios/")
        ) {
          priority = 0.8;
          changefreq = "yearly";
          lastmod = new Date("2025-10-15"); // Service pages rarely change
        } else if (u.pathname.includes("/quiz/")) {
          priority = 0.6;
          changefreq = "monthly";
          lastmod = new Date("2025-11-15"); // Quiz system update date
        } else if (
          u.pathname.includes("/terms") ||
          u.pathname.includes("/privacy")
        ) {
          priority = 0.3;
          changefreq = "yearly";
          lastmod = new Date("2025-09-01"); // Legal pages rarely change
        } else if (
          u.pathname.includes("/testimonial") ||
          u.pathname.includes("/testimonio")
        ) {
          priority = 0.6;
          changefreq = "monthly";
          lastmod = new Date("2025-11-10"); // Testimonials update date
        } else if (
          u.pathname.includes("/resources/") ||
          u.pathname.includes("/recursos/")
        ) {
          priority = 0.6;
          changefreq = "monthly";
          lastmod = new Date("2025-12-05"); // Resources updated periodically
        } else if (
          u.pathname.includes("/book") ||
          u.pathname.includes("/reservar") ||
          u.pathname.includes("/contact")
        ) {
          priority = 0.7;
          changefreq = "monthly";
          lastmod = new Date("2025-11-01"); // Booking/contact pages stable
        } else if (u.pathname.includes("/about")) {
          priority = 0.5;
          changefreq = "yearly";
          lastmod = new Date("2025-10-01"); // About page rarely changes
        } else if (u.pathname.includes("/faqs")) {
          priority = 0.5;
          changefreq = "monthly";
          lastmod = new Date("2025-11-20"); // FAQs updated occasionally
        } else if (u.pathname.includes("/assessments")) {
          priority = 0.6;
          changefreq = "monthly";
          lastmod = new Date("2025-11-01"); // Assessment pages stable
        } else if (u.pathname.includes("/meme-portfolio/")) {
          priority = 0.6;
          changefreq = "weekly";
          lastmod = new Date("2026-02-18"); // Meme gallery actively growing
        }

        return {
          ...item,
          url: u.toString(),
          links,
          priority,
          changefreq,
          lastmod,
        };
      },
    }),
  ],
});
