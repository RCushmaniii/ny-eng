export const locales = ["en", "es"] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = "en";

// Define valid category slugs
type CategorySlug =
  | 'business-english'
  | 'high-impact-communication'
  | 'career-leadership'
  | 'english-coaching'
  | 'executive-english'
  | 'startup-founders'
  | 'tech-english'
  | 'logistics-english'
  | 'professional-english'
  | 'high-stakes-english';

// Build a translation key per content page and map to per-locale paths
export type TKey =
  | "404"
  | "home"
  | "about"
  | "contact"
  | "book"
  | "blog"
  | "blog/page"
  | "services"
  | "testimonials"
  | "legal/privacy-policy"
  | "legal/terms-of-service"
  | "thank-you"
  | "services/executive-english"
  | "services/high-stakes-english"
  | "services/interview-prep"
  | "services/logistics-english"
  | "services/medical-english"
  | "services/professional-english"
  | "services/public-speaking-english"
  | "services/startup-founders"
  | "services/tech-english"
  | "services/technical-sales-english"
  | `category/${CategorySlug}`
  | "quiz"
  | "quiz/start"
  | "quiz/results"
  | "quiz/report";

export const routeFor: Record<Locale, Record<TKey, string>> = {
  en: {
    "404": "/en/404/",
    "thank-you": "/en/thank-you/",
    home: "/en/",
    about: "/en/about/",
    contact: "/en/contact/",
    book: "/en/book/",
    blog: "/en/blog/",
    "blog/page": "/en/blog/",
    services: "/en/services/",
    testimonials: "/en/testimonials/",
    "legal/privacy-policy": "/en/legal/privacy-policy/",
    "legal/terms-of-service": "/en/legal/terms-of-service/",
    "services/executive-english": "/en/services/executive-english/",
    "services/high-stakes-english": "/en/services/high-stakes-english/",
    "services/interview-prep": "/en/services/interview-prep/",
    "services/logistics-english": "/en/services/logistics-english/",
    "services/medical-english": "/en/services/medical-english/",
    "services/professional-english": "/en/services/professional-english/",
    "services/public-speaking-english": "/en/services/public-speaking-english/",
    "services/startup-founders": "/en/services/startup-founders/",
    "services/tech-english": "/en/services/tech-english/",
    "services/technical-sales-english": "/en/services/technical-sales-english/",
    "category/startup-founders": "/en/category/startup-founders/",
    "category/tech-english": "/en/category/tech-english/",
    "category/logistics-english": "/en/category/logistics-english/",
    "category/professional-english": "/en/category/professional-english/",
    "category/high-stakes-english": "/en/category/high-stakes-english/",
    "category/business-english": "/en/category/business-english/",
    "category/high-impact-communication": "/en/category/high-impact-communication/",
    "category/career-leadership": "/en/category/career-leadership/",
    "category/english-coaching": "/en/category/english-coaching/",
    "category/executive-english": "/en/category/executive-english/",
    quiz: "/en/quiz/",
    "quiz/start": "/en/quiz/start/",
    "quiz/results": "/en/quiz/results/",
    "quiz/report": "/en/quiz/report/",
  },
  es: {
    "404": "/es/404/",
    "thank-you": "/es/thank-you/",
    home: "/es/",
    about: "/es/about/",
    contact: "/es/contact/",
    book: "/es/reservar/",
    blog: "/es/blog/",
    "blog/page": "/es/blog/", 
    services: "/es/servicios/",
    testimonials: "/es/testimonios/",
    "legal/privacy-policy": "/es/legal/privacy-policy/",
    "legal/terms-of-service": "/es/legal/terms-of-service/",
    "services/executive-english": "/es/servicios/ingles-para-ejecutivos/",
    "services/high-stakes-english": "/es/servicios/ingles-para-presentaciones/",
    "services/interview-prep": "/es/servicios/preparacion-para-entrevistas/",
    "services/logistics-english": "/es/servicios/ingles-para-logistica/",
    "services/medical-english": "/es/servicios/ingles-para-medicos/",
    "services/professional-english": "/es/servicios/ingles-para-profesionales/",
    "services/public-speaking-english": "/es/servicios/hablar-en-publico/",
    "services/startup-founders": "/es/servicios/ingles-para-fundadores-de-startups/",
    "services/tech-english": "/es/servicios/ingles-para-tecnologia/",
    "services/technical-sales-english": "/es/servicios/ingles-para-ventas-tecnicas/",
    "category/startup-founders": "/es/categoria/ingles-para-fundadores-de-startups/",
    "category/tech-english": "/es/categoria/ingles-para-tecnologia/",
    "category/logistics-english": "/es/categoria/ingles-para-logistica/",
    "category/professional-english": "/es/categoria/ingles-para-profesionales/",
    "category/high-stakes-english": "/es/categoria/ingles-para-presentaciones/",
    "category/business-english": "/es/categoria/ingles-para-negocios/",
    "category/high-impact-communication": "/es/categoria/comunicacion-de-alto-impacto/",
    "category/career-leadership": "/es/categoria/carrera-liderazgo/",
    "category/english-coaching": "/es/categoria/coaching-en-ingles/",
    "category/executive-english": "/es/categoria/ingles-ejecutivo/",
    quiz: "/es/quiz/",
    "quiz/start": "/es/quiz/start/",
    "quiz/results": "/es/quiz/results/",
    "quiz/report": "/es/quiz/report/",
  },
};

export function alternates(tkey: TKey) {
  return locales.map((lng) => ({ lang: lng, href: routeFor[lng][tkey] }));
}

export function canonical(tkey: TKey, lng: Locale = defaultLocale) {
  return routeFor[lng][tkey];
}

// For OG locale meta tags (uses underscores)
export function getLocaleCode(locale: Locale): string {
  return locale === 'en' ? 'en_US' : 'es_MX';
}

// For hreflang attributes (uses hyphens)
export function getHreflangCode(locale: Locale): string {
  return locale === 'en' ? 'en-US' : 'es-MX';
}

// Helper to convert absolute URLs
export function toAbsoluteUrl(path: string, siteUrl: string = 'https://www.nyenglishteacher.com'): string {
  return new URL(path, siteUrl).toString();
}

// Get all translation keys for sitemap generation
export function getAllTKeys(): TKey[] {
  return [
    "404",
    "thank-you",
    "home",
    "about", 
    "contact",
    "book",
    "blog",
    "services",
    "testimonials",
    "legal/privacy-policy",
    "legal/terms-of-service",
    "services/executive-english",
    "services/high-stakes-english",
    "services/interview-prep",
    "services/logistics-english",
    "services/medical-english",
    "services/professional-english",
    "services/public-speaking-english",
    "services/startup-founders",
    "services/tech-english",
    "services/technical-sales-english",
    "category/startup-founders",
    "category/tech-english",
    "category/logistics-english",
    "category/professional-english",
    "category/high-stakes-english",
    "category/business-english",
    "category/high-impact-communication",
    "category/career-leadership",
    "category/english-coaching",
    "category/executive-english",
    "quiz",
    "quiz/start",
    "quiz/results",
    "quiz/report",
  ];
}
