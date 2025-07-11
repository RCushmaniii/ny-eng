// src/data/translationMaps.ts

// Define proper types for translation maps
type TranslationMap = {
    [key: string]: string;
};

// --- Static Pages: One-to-One Pages Like About, Contact, Legal, Testimonials, Home, and Service Index ---
export const staticPageMap: TranslationMap = {
    '/': '/en/',
    '/en/': '/es/',
    '/en/about/': '/es/about/',
    '/en/contact/': '/es/contact/',
    '/en/thank-you/': '/es/thank-you/',
    '/en/legal/privacy-policy/': '/es/legal/privacy-policy/',
    '/en/legal/terms-of-service/': '/es/legal/terms-of-service/',
    '/en/testimonials/': '/es/testimonios/',
    '/en/services/': '/es/servicios/',
    '/en/blog/': '/es/blog/',
};

export const reverseStaticPageMap: TranslationMap = Object.fromEntries(
    Object.entries(staticPageMap).map(([en, es]) => [es, en])
);

// --- Service Pages: Slug-Based Translations ---
export const serviceMap: TranslationMap = {
    'executive-english': 'ingles-para-ejecutivos',
    'startup-founders': 'ingles-para-fundadores-de-startups',
    'tech-english': 'ingles-para-tecnologia',
    'logistics-english': 'ingles-para-logistica',
    'professional-english': 'ingles-para-profesionales',
    'high-stakes-english': 'ingles-para-presentaciones',
    // Additional mappings that might be needed
    //'interview-prep': 'preparacion-para-entrevistas',
    //'medical-english': 'ingles-para-medicos',
    //'public-speaking-english': 'hablar-en-publico',
    //'technical-sales-english': 'ingles-para-ventas-tecnicas',
};

export const reverseServiceMap: TranslationMap = Object.fromEntries(
    Object.entries(serviceMap).map(([en, es]) => [es, en])
);

// --- Blog Posts: Slug-Based Translations ---
export const blogTranslationMap: TranslationMap = {
    '4-secrets-executives-use': '4-secretos-que-usan-los-ejecutivos',
    'boost-eng-confidence': 'aumentar-confianza',
    '5-practical-ways-to-boost-business-english': '5-formas-practicas-mejorar-ingles-negocios',
    'executive-english-coaching': 'coaching-ejecutivo',
    'master-business-english': 'dominar-negocios',
    'small-talk-to-smart-talk': 'charla-pequena-habla-inteligente',
    'managers-lose-millions': 'por-que-los-gerentes-de-ti-en-mexico-pierden-clientes',
    //'why-tech-managers-lose-millions': 'por-que-los-gerentes-de-ti-en-mexico-pierden-clientes',
};

export const reverseBlogTranslationMap: TranslationMap = Object.fromEntries(
    Object.entries(blogTranslationMap).map(([en, es]) => [es, en])
);

// --- Category Pages: Slug-Based Translations ---
export const categoryMap: TranslationMap = {
    'business-english': 'ingles-para-negocios',
    'high-impact-communication': 'comunicacion-de-alto-impacto',
    'career-leadership': 'carrera-liderazgo',
    'english-coaching': 'coaching-en-ingles',
    'executive-english': 'ingles-ejecutivo',
    'tech': 'tecnologia',
    'startup-founders': 'ingles-para-fundadores-de-startups',
    // Additional categories that might be needed
    //'business-persuasion': 'ingles-para-negociaciones',
    //'executive-fluency': 'ingles-para-comunicacion',
    //'high-stakes-speaking': 'comunicacion-estrategica',
    //'english-for-career-switch': 'carrera-internacional',
    //'career-switch': 'carrera-internacional',
};

export const reverseCategoryMap: TranslationMap = Object.fromEntries(
    Object.entries(categoryMap).map(([en, es]) => [es, en])
);

// --- Utility Functions ---
/**
 * Get the alternate language URL for a given path
 * @param path - The current path
 * @param type - The type of page (static, service, blog, category)
 * @returns The alternate language URL or null if no translation exists
 */
export function getAlternateLanguageUrl(path: string, type: 'static' | 'service' | 'blog' | 'category'): string | null {
    const cleanPath = path.endsWith('/') ? path : path + '/';

    switch (type) {
        case 'static':
            return staticPageMap[cleanPath] || reverseStaticPageMap[cleanPath] || null;

        case 'service':
            const serviceSlug = cleanPath.split('/').filter(Boolean).pop();
            if (cleanPath.startsWith('/en/services/') && serviceSlug) {
                const esSlug = serviceMap[serviceSlug];
                return esSlug ? `/es/servicios/${esSlug}/` : null;
            } else if (cleanPath.startsWith('/es/servicios/') && serviceSlug) {
                const enSlug = reverseServiceMap[serviceSlug];
                return enSlug ? `/en/services/${enSlug}/` : null;
            }
            return null;

        case 'blog':
            const blogSlug = cleanPath.split('/').filter(Boolean).pop();
            if (cleanPath.startsWith('/en/blog/') && blogSlug) {
                const esSlug = blogTranslationMap[blogSlug];
                return esSlug ? `/es/blog/${esSlug}/` : null;
            } else if (cleanPath.startsWith('/es/blog/') && blogSlug) {
                const enSlug = reverseBlogTranslationMap[blogSlug];
                return enSlug ? `/en/blog/${enSlug}/` : null;
            }
            return null;

        case 'category':
            const categorySlug = cleanPath.split('/').filter(Boolean).pop();
            if (cleanPath.startsWith('/en/category/') && categorySlug) {
                const esSlug = categoryMap[categorySlug];
                return esSlug ? `/es/category/${esSlug}/` : null;
            } else if (cleanPath.startsWith('/es/category/') && categorySlug) {
                const enSlug = reverseCategoryMap[categorySlug];
                return enSlug ? `/en/category/${enSlug}/` : null;
            }
            return null;

        default:
            return null;
    }
}

/**
 * Determine the page type based on the URL
 * @param url - The URL to analyze
 * @returns The page type
 */
export function getPageType(url: string): 'static' | 'service' | 'blog' | 'category' | 'other' {
    if (url.includes('/services/') || url.includes('/servicios/')) {
        return 'service';
    }
    if (url.includes('/blog/') && url !== '/en/blog/' && url !== '/es/blog/') {
        return 'blog';
    }
    if (url.includes('/category/')) {
        return 'category';
    }
    if (staticPageMap[url] || reverseStaticPageMap[url]) {
        return 'static';
    }
    return 'other';
}

/**
 * Check if a URL has a translation available
 * @param url - The URL to check
 * @returns Whether a translation exists
 */
export function hasTranslation(url: string): boolean {
    const type = getPageType(url);
    if (type === 'other') {
        return false;
    }
    return getAlternateLanguageUrl(url, type) !== null;
}