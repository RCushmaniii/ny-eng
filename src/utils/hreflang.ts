// src/utils/hreflang.ts
export const hreflangMappings: Record<string, {
  en?: string; es?: string; xDefault?: string;
}> = {
  '/':                      { en: '/en/', es: '/es/', xDefault: '/en/' },
  '/en/':                      { en: '/en/', es: '/es/', xDefault: '/en/' },
  '/en/about/':                { en: '/en/about/', es: '/es/about/', xDefault: '/en/about/' },
  '/en/services/':             { en: '/en/services/', es: '/es/servicios/', xDefault: '/en/services/' },
  '/en/testimonials/':         { en: '/en/testimonials/', es: '/es/testimonios/', xDefault: '/en/testimonials/' },
  '/en/blog/':                 { en: '/en/blog/', es: '/es/blog/', xDefault: '/en/blog/' },
  '/en/contact/':              { en: '/en/contact/', es: '/es/contact/', xDefault: '/en/contact/' },
  '/en/legal/privacy-policy/': { en: '/en/legal/privacy-policy/', es: '/es/legal/privacy-policy/', xDefault: '/en/legal/privacy-policy/' },
  '/en/legal/terms-of-service/': { en: '/en/legal/terms-of-service/', es: '/es/legal/terms-of-service/', xDefault: '/en/legal/terms-of-service/' },

  // Spanish keys too (so Spanish pages serialize themselves)
  '/es/':                      { en: '/en/', es: '/es/', xDefault: '/en/' },
  '/es/about/':                { en: '/en/about/', es: '/es/about/', xDefault: '/en/about/' },
  '/es/servicios/':            { en: '/en/services/', es: '/es/servicios/', xDefault: '/en/services/' },
  '/es/testimonios/':          { en: '/en/testimonials/', es: '/es/testimonios/', xDefault: '/en/testimonials/' },
  '/es/blog/':                 { en: '/en/blog/', es: '/es/blog/', xDefault: '/en/blog/' },
  '/es/contact/':              { en: '/en/contact/', es: '/es/contact/', xDefault: '/en/contact/' },
  '/es/legal/privacy-policy/': { en: '/en/legal/privacy-policy/', es: '/es/legal/privacy-policy/', xDefault: '/en/legal/privacy-policy/' },
  '/es/legal/terms-of-service/': { en: '/en/legal/terms-of-service/', es: '/es/legal/terms-of-service/', xDefault: '/en/legal/terms-of-service/' },
  
  // Temporary: map detail requests to the index (keeps hreflang valid and avoids 404s)
  // Service pages - English URLs
  '/en/services/executive-english/': { en: '/en/services/executive-english/', es: '/es/servicios/ingles-para-ejecutivos/', xDefault: '/en/services/executive-english/' },
  '/en/services/tech-english/': { en: '/en/services/tech-english/', es: '/es/servicios/ingles-para-tecnologia/', xDefault: '/en/services/tech-english/' },
  '/en/services/logistics-english/': { en: '/en/services/logistics-english/', es: '/es/servicios/ingles-para-logistica/', xDefault: '/en/services/logistics-english/' },
  '/en/services/professional-english/': { en: '/en/services/professional-english/', es: '/es/servicios/ingles-para-profesionales/', xDefault: '/en/services/professional-english/' },
  '/en/services/high-stakes-english/': { en: '/en/services/high-stakes-english/', es: '/es/servicios/ingles-para-presentaciones/', xDefault: '/en/services/high-stakes-english/' },
  '/en/services/interview-prep/': { en: '/en/services/interview-prep/', es: '/es/servicios/preparacion-para-entrevistas/', xDefault: '/en/services/interview-prep/' },
  '/en/services/medical-english/': { en: '/en/services/medical-english/', es: '/es/servicios/ingles-para-medicos/', xDefault: '/en/services/medical-english/' },
  '/en/services/public-speaking-english/': { en: '/en/services/public-speaking-english/', es: '/es/servicios/hablar-en-publico/', xDefault: '/en/services/public-speaking-english/' },
  '/en/services/startup-founders/': { en: '/en/services/startup-founders/', es: '/es/servicios/ingles-para-fundadores-de-startups/', xDefault: '/en/services/startup-founders/' },
  '/en/services/technical-sales-english/': { en: '/en/services/technical-sales-english/', es: '/es/servicios/ingles-para-ventas-tecnicas/', xDefault: '/en/services/technical-sales-english/' },

  // Service pages - Spanish URLs
  '/es/servicios/ingles-para-ejecutivos/': { en: '/en/services/executive-english/', es: '/es/servicios/ingles-para-ejecutivos/', xDefault: '/en/services/executive-english/' },
  '/es/servicios/ingles-para-tecnologia/': { en: '/en/services/tech-english/', es: '/es/servicios/ingles-para-tecnologia/', xDefault: '/en/services/tech-english/' },
  '/es/servicios/ingles-para-logistica/': { en: '/en/services/logistics-english/', es: '/es/servicios/ingles-para-logistica/', xDefault: '/en/services/logistics-english/' },
  '/es/servicios/ingles-para-profesionales/': { en: '/en/services/professional-english/', es: '/es/servicios/ingles-para-profesionales/', xDefault: '/en/services/professional-english/' },
  '/es/servicios/ingles-para-presentaciones/': { en: '/en/services/high-stakes-english/', es: '/es/servicios/ingles-para-presentaciones/', xDefault: '/en/services/high-stakes-english/' },
  '/es/servicios/preparacion-para-entrevistas/': { en: '/en/services/interview-prep/', es: '/es/servicios/preparacion-para-entrevistas/', xDefault: '/en/services/interview-prep/' },
  '/es/servicios/ingles-para-medicos/': { en: '/en/services/medical-english/', es: '/es/servicios/ingles-para-medicos/', xDefault: '/en/services/medical-english/' },
  '/es/servicios/hablar-en-publico/': { en: '/en/services/public-speaking-english/', es: '/es/servicios/hablar-en-publico/', xDefault: '/en/services/public-speaking-english/' },
  '/es/servicios/ingles-para-fundadores-de-startups/': { en: '/en/services/startup-founders/', es: '/es/servicios/ingles-para-fundadores-de-startups/', xDefault: '/en/services/startup-founders/' },
  '/es/servicios/ingles-para-ventas-tecnicas/': { en: '/en/services/technical-sales-english/', es: '/es/servicios/ingles-para-ventas-tecnicas/', xDefault: '/en/services/technical-sales-english/' },

  // Thank you pages
  '/en/thank-you/': { en: '/en/thank-you/', es: '/es/thank-you/', xDefault: '/en/thank-you/' },
  '/es/thank-you/': { en: '/en/thank-you/', es: '/es/thank-you/', xDefault: '/en/thank-you/' },
};

// --- helpers & APIs ---

/** Ensure consistent trailing slash for route-like paths (not files/fragments) */
export function normalizeUrlPath(p: string): string {
  if (!p) return '/';
  // Do not force trailing slash for files or fragments
  if (p.includes('#') || /\.[a-z0-9]+$/i.test(p)) return p;
  return p.endsWith('/') ? p : p + '/';
}

/** Build <link rel="alternate" hreflang="..."> set for the current pathname */
export function getHreflangAlternates(
  pathname: string,
  siteUrl: string
): Array<{ hreflang: string; href: string }> {
  const normalized = normalizeUrlPath(pathname);
  const site = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;

  // direct match
  let mapping = hreflangMappings[normalized];

  // fallback: swap language prefix to find the sibling
  if (!mapping) {
    if (normalized.startsWith('/en/')) {
      mapping = hreflangMappings[normalized.replace(/^\/en\//, '/es/')];
    } else if (normalized.startsWith('/es/')) {
      mapping = hreflangMappings[normalized.replace(/^\/es\//, '/en/')];
    } else if (normalized === '/') {
      mapping = hreflangMappings['/'];
    }
  }

  if (!mapping) return [];

  const links: Array<{ hreflang: string; href: string }> = [];
  if (mapping.en) links.push({ hreflang: 'en-US', href: site + mapping.en });
  if (mapping.es) links.push({ hreflang: 'es-MX', href: site + mapping.es });

  const xDefault = mapping.xDefault || mapping.en || mapping.es;
  if (xDefault) links.push({ hreflang: 'x-default', href: site + xDefault });

  return links;
}

/** URLs used by your language switcher */
export function getTranslationUrls(pathname: string): { en: string; es: string } {
  const normalized = normalizeUrlPath(pathname);
  const mapping = hreflangMappings[normalized];

  if (mapping) {
    return {
      en: mapping.en || '/en/',
      es: mapping.es || '/es/',
    };
  }

  // fallback: prefix swap
  if (normalized.startsWith('/es/')) {
    return { en: normalized.replace(/^\/es\//, '/en/'), es: normalized };
  }
  return {
    en: normalized.startsWith('/en/') ? normalized : `/en${normalized}`,
    es: normalized.replace(/^\/en\//, '/es/'),
  };
}

/** Quick language detector for the current path */
export function getPageLanguage(pathname: string): 'en' | 'es' {
  return normalizeUrlPath(pathname).startsWith('/es/') ? 'es' : 'en';
}
