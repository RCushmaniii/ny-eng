/**
 * Enhanced sitemap configuration for New York English Teacher website.
 * Use this configuration by replacing the sitemap section in astro.config.mjs
 */

export const sitemapConfig = {
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
    // Exclude utility, test, and draft pages.
    if (/[/\\](404|components|test|dev|draft|preview)[/\\]/.test(page)) {
      return false;
    }
    // Exclude Astro's catch-all routes.
    if (/\/\[\.\.\.\w+\]/.test(page)) {
      return false;
    }
    // A more precise regex to exclude only paginated blog/category URLs.
    if (/(?:blog|category)\/\d+\/?$/.test(page)) {
      return false;
    }
    // Exclude invalid nested language paths.
    if (/\/en\/(blog|services)\/en\/|\/es\/(blog|servicios|category)\/es\//.test(page)) {
      return false;
    }
    
    // ⚠️ Filter out non-canonical category slugs from the sitemap
    // This removes the duplicate URLs you identified.
    if (
      page.includes('/es/category/ingles-para-ejecutivos/') || 
      page.includes('/es/category/english-coaching/')
    ) {
        return false;
    }
    
    return true;
  },
  entryLimit: 10000,
  serialize(item) {
    const url = new URL(item.url).pathname;
    const fullUrl = item.url;
    const defaultEntry = { ...item, changefreq: 'weekly', priority: 0.7 };

    // --- MANUAL TRANSLATION MAPS (SINGLE SOURCE OF TRUTH) ---
    // All translation rules are now in one place for easy management.

    // ✅ Services Map: Links English and Spanish service pages
    const serviceMap = {
        'executive-english': 'ingles-para-ejecutivos',
        'interview-prep': 'preparacion-para-entrevistas',
        'medical-english': 'ingles-para-medicos',
        // TODO: Add all other service page slug translations here
    };
    const reverseServiceMap = Object.fromEntries(Object.entries(serviceMap).map(([k, v]) => [v, k]));
    
    // ✅ Canonical Category Map: Enforces ONE Spanish slug per English slug
    const categoryMap = {
        'business-english': 'ingles-para-negocios',
        'high-impact-communication': 'comunicacion-de-alto-impacto',
        'career-leadership': 'carrera-liderazgo',
        'english-coaching': 'coaching-en-ingles',
        'executive-english': 'ingles-ejecutivo', // This is the CANONICAL slug
        'tech': 'tecnologia',
        'startup-founders': 'ingles-para-fundadores-de-startups',
        // TODO: Add all other category translations here
    };
    const reverseCategoryMap = Object.fromEntries(Object.entries(categoryMap).map(([k, v]) => [v, k]));
    
    // ✅ Blog Post Map
    const blogTranslationMap = {
        '4-secrets-executives-use': '4-secretos-que-usan-los-ejecutivos',
        'boost-eng-confidence': 'aumentar-confianza',
        'why-tech-managers-lose-millions': 'por-que-los-gerentes-de-ti-en-mexico-pierden-clientes',
        // TODO: Add all other blog post translations here
    };
    const reverseBlogTranslationMap = Object.fromEntries(Object.entries(blogTranslationMap).map(([k, v]) => [v, k]));

    // --- LOGIC ---

    // 1. Handle Root and Language Index Pages
    if (url === '/') return { ...defaultEntry, priority: 1.0, links: [{ url: `${site}/`, lang: 'x-default' }, { url: `${site}/en/`, lang: 'en-US' }, { url: `${site}/es/`, lang: 'es-MX' }] };
    if (url === '/en/') return { ...defaultEntry, priority: 0.9, links: [{ url: `${site}/`, lang: 'x-default' }, { url: `${site}/en/`, lang: 'en-US' }, { url: `${site}/es/`, lang: 'es-MX' }] };
    if (url === '/es/') return { ...defaultEntry, priority: 0.9, links: [{ url: `${site}/`, lang: 'x-default' }, { url: `${site}/en/`, lang: 'en-US' }, { url: `${site}/es/`, lang: 'es-MX' }] };
    if (url === '/en/blog/' || url === '/es/blog/') return { ...defaultEntry, priority: 0.8, links: [{ url: `${site}/en/blog/`, lang: 'en-US' }, { url: `${site}/es/blog/`, lang: 'es-MX' }] };
    
    // 2. Handle Low-Priority Pages
    if (url.includes('/legal/') || url.includes('/privacy/') || url.includes('/terms/') || url.includes('/thank-you/')) return { ...defaultEntry, changefreq: 'monthly', priority: 0.3 };
    if (url.includes('/testimonials/') || url.includes('/testimonios/')) return { ...defaultEntry, changefreq: 'monthly', priority: 0.5 };
    
    // 3. ✨ Handle Service Pages with Alternates (FIX)
    if (url.startsWith('/en/services/') || url.startsWith('/es/servicios/')) {
        const entry = { ...defaultEntry, changefreq: 'monthly', priority: 0.8, links: [] };
        const slug = url.split('/').filter(Boolean).pop();

        if (url.startsWith('/en/services/')) {
            entry.links.push({ url: fullUrl, lang: 'en-US' });
            const esSlug = serviceMap[slug];
            if (esSlug) entry.links.push({ url: `${site}/es/servicios/${esSlug}/`, lang: 'es-MX' });
        } else if (url.startsWith('/es/servicios/')) {
            entry.links.push({ url: fullUrl, lang: 'es-MX' });
            const enSlug = reverseServiceMap[slug];
            if (enSlug) entry.links.push({ url: `${site}/en/services/${enSlug}/`, lang: 'en-US' });
        }
        return entry;
    }

    // 4. Handle Category Pages with Alternates (FIX)
    if (url.includes('/category/')) {
        const entry = { ...defaultEntry, priority: 0.6, links: [] };
        const slug = url.split('/').filter(Boolean).pop();

        if (url.startsWith('/en/')) {
            entry.links.push({ url: fullUrl, lang: 'en-US' });
            const esSlug = categoryMap[slug];
            if (esSlug) entry.links.push({ url: `${site}/es/category/${esSlug}/`, lang: 'es-MX' });
        } else if (url.startsWith('/es/')) {
            entry.links.push({ url: fullUrl, lang: 'es-MX' });
            const enSlug = reverseCategoryMap[slug];
            if (enSlug) entry.links.push({ url: `${site}/en/category/${enSlug}/`, lang: 'en-US' });
        }
        return entry;
    }

    // 5. Handle Blog Posts with Alternates
    if (url.includes('/blog/')) {
        const entry = { ...defaultEntry, priority: 0.8, links: [] };
        const slug = url.split('/').filter(Boolean).pop();

        if (url.startsWith('/en/')) {
            entry.links.push({ url: fullUrl, lang: 'en-US' });
            const esSlug = blogTranslationMap[slug];
            if (esSlug) entry.links.push({ url: `${site}/es/blog/${esSlug}/`, lang: 'es-MX' });
        } else if (url.startsWith('/es/')) {
            entry.links.push({ url: fullUrl, lang: 'es-MX' });
            const enSlug = reverseBlogTranslationMap[slug];
            if (enSlug) entry.links.push({ url: `${site}/en/blog/${enSlug}/`, lang: 'en-US' });
        }
        return entry.links.length > 0 ? entry : defaultEntry;
    }
    
    return defaultEntry;
  }
};
