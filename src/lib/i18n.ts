export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

// Define valid category slugs
type CategorySlug =
  | "business-english"
  | "high-impact-communication"
  | "career-leadership"
  | "english-coaching"
  | "executive-english"
  | "startup-founders"
  | "tech-english"
  | "logistics-english"
  | "professional-english"
  | "high-stakes-english";

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
  | "faqs"
  | "free"
  | "free/5-questions"
  | "free/5-minute-negotiation-script"
  | "free/7-sentences-leadership-english"
  | "free/5-principles-executive-english"
  | "free/10-common-mistakes-executive-english"
  | "free/5-quick-wins-executive-english"
  | "free/60-second-self-introduction-template"
  | "free/client-call-opening-closing-framework"
  | "free/pushback-playbook"
  | "free/email-templates-difficult-situations"
  | "free/feedback-framework"
  | "free/interview-answer-templates"
  | "free/meeting-rescue-phrases"
  | "free/status-update-script"
  | "free/questions-that-close-deals"
  | "free/technical-explanation-formula"
  | "free/difficult-conversation-checklist"
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
  | "assessments"
  | "quiz"
  | "quiz/start"
  | "quiz/results"
  | "quiz/report"
  | "quiz/it-services"
  | "quiz/executives"
  | "quiz/professional-services"
  | "quiz/high-stakes";

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
    faqs: "/en/faqs/",
    free: "/en/free/",
    "free/5-questions": "/en/free/5-questions/",
    "free/5-minute-negotiation-script": "/en/free/5-minute-negotiation-script/",
    "free/7-sentences-leadership-english":
      "/en/free/7-sentences-leadership-english/",
    "free/5-principles-executive-english":
      "/en/free/5-principles-executive-english/",
    "free/10-common-mistakes-executive-english":
      "/en/free/10-common-mistakes-executive-english/",
    "free/5-quick-wins-executive-english":
      "/en/free/5-quick-wins-executive-english/",
    "free/60-second-self-introduction-template":
      "/en/free/60-second-self-introduction-template/",
    "free/client-call-opening-closing-framework":
      "/en/free/client-call-opening-closing-framework/",
    "free/pushback-playbook": "/en/free/pushback-playbook/",
    "free/email-templates-difficult-situations":
      "/en/free/email-templates-difficult-situations/",
    "free/feedback-framework": "/en/free/feedback-framework/",
    "free/interview-answer-templates": "/en/free/interview-answer-templates/",
    "free/meeting-rescue-phrases": "/en/free/meeting-rescue-phrases/",
    "free/status-update-script": "/en/free/status-update-script/",
    "free/questions-that-close-deals": "/en/free/questions-that-close-deals/",
    "free/technical-explanation-formula": "/en/free/technical-explanation-formula/",
    "free/difficult-conversation-checklist": "/en/free/difficult-conversation-checklist/",
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
    "category/high-impact-communication":
      "/en/category/high-impact-communication/",
    "category/career-leadership": "/en/category/career-leadership/",
    "category/english-coaching": "/en/category/english-coaching/",
    "category/executive-english": "/en/category/executive-english/",
    assessments: "/en/assessments/",
    quiz: "/en/quiz/",
    "quiz/start": "/en/quiz/start/",
    "quiz/results": "/en/quiz/results/",
    "quiz/report": "/en/quiz/report/",
    "quiz/it-services": "/en/quiz/it-services/",
    "quiz/executives": "/en/quiz/executives/",
    "quiz/professional-services": "/en/quiz/professional-services/",
    "quiz/high-stakes": "/en/quiz/high-stakes/",
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
    faqs: "/es/faqs/",
    free: "/es/gratis/",
    "free/5-questions": "/es/gratis/5-preguntas/",
    "free/5-minute-negotiation-script":
      "/es/gratis/guion-negociacion-5-minutos/",
    "free/7-sentences-leadership-english":
      "/es/gratis/7-frases-liderazgo-ingles/",
    "free/5-principles-executive-english":
      "/es/gratis/5-principios-ingles-ejecutivo/",
    "free/10-common-mistakes-executive-english":
      "/es/gratis/10-errores-comunes-ingles-ejecutivo/",
    "free/5-quick-wins-executive-english":
      "/es/gratis/5-victorias-rapidas-ingles-ejecutivo/",
    "free/60-second-self-introduction-template":
      "/es/gratis/plantilla-auto-presentacion-60-segundos/",
    "free/client-call-opening-closing-framework":
      "/es/gratis/marco-apertura-cierre-llamadas/",
    "free/pushback-playbook": "/es/gratis/guia-para-decir-no/",
    "free/email-templates-difficult-situations":
      "/es/gratis/plantillas-email-situaciones-dificiles/",
    "free/feedback-framework": "/es/gratis/marco-retroalimentacion/",
    "free/interview-answer-templates": "/es/gratis/plantillas-respuestas-entrevista/",
    "free/meeting-rescue-phrases": "/es/gratis/frases-rescate-reuniones/",
    "free/status-update-script": "/es/gratis/script-actualizacion-estado/",
    "free/questions-that-close-deals":
      "/es/gratis/preguntas-que-cierran-ventas/",
    "free/technical-explanation-formula": "/es/gratis/formula-explicacion-tecnica/",
    "free/difficult-conversation-checklist": "/es/gratis/checklist-conversaciones-dificiles/",
    "legal/privacy-policy": "/es/legal/privacy-policy/",
    "legal/terms-of-service": "/es/legal/terms-of-service/",
    "services/executive-english": "/es/servicios/ingles-para-ejecutivos/",
    "services/high-stakes-english": "/es/servicios/ingles-para-presentaciones/",
    "services/interview-prep": "/es/servicios/preparacion-para-entrevistas/",
    "services/logistics-english": "/es/servicios/ingles-para-logistica/",
    "services/medical-english": "/es/servicios/ingles-para-medicos/",
    "services/professional-english": "/es/servicios/ingles-para-profesionales/",
    "services/public-speaking-english": "/es/servicios/hablar-en-publico/",
    "services/startup-founders":
      "/es/servicios/ingles-para-fundadores-de-startups/",
    "services/tech-english": "/es/servicios/ingles-para-tecnologia/",
    "services/technical-sales-english":
      "/es/servicios/ingles-para-ventas-tecnicas/",
    "category/startup-founders":
      "/es/categoria/ingles-para-fundadores-de-startups/",
    "category/tech-english": "/es/categoria/ingles-para-tecnologia/",
    "category/logistics-english": "/es/categoria/ingles-para-logistica/",
    "category/professional-english": "/es/categoria/ingles-para-profesionales/",
    "category/high-stakes-english": "/es/categoria/ingles-para-presentaciones/",
    "category/business-english": "/es/categoria/ingles-para-negocios/",
    "category/high-impact-communication":
      "/es/categoria/comunicacion-de-alto-impacto/",
    "category/career-leadership": "/es/categoria/carrera-liderazgo/",
    "category/english-coaching": "/es/categoria/coaching-en-ingles/",
    "category/executive-english": "/es/categoria/ingles-ejecutivo/",
    assessments: "/es/assessments/",
    quiz: "/es/quiz/",
    "quiz/start": "/es/quiz/start/",
    "quiz/results": "/es/quiz/results/",
    "quiz/report": "/es/quiz/report/",
    "quiz/it-services": "/es/quiz/it-services/",
    "quiz/executives": "/es/quiz/executives/",
    "quiz/professional-services": "/es/quiz/professional-services/",
    "quiz/high-stakes": "/es/quiz/high-stakes/",
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
  return locale === "en" ? "en_US" : "es_MX";
}

// For hreflang attributes (uses hyphens)
export function getHreflangCode(locale: Locale): string {
  return locale === "en" ? "en-US" : "es-MX";
}

// Helper to convert absolute URLs
export function toAbsoluteUrl(
  path: string,
  siteUrl: string = "https://www.nyenglishteacher.com"
): string {
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
    "free",
    "free/5-questions",
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
    "assessments",
    "quiz",
    "quiz/start",
    "quiz/results",
    "quiz/report",
    "quiz/it-services",
    "quiz/executives",
    "quiz/professional-services",
    "quiz/high-stakes",
  ];
}
