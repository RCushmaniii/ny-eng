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
  | "chat"
  | "blog"
  | "blog/page"
  | "services"
  | "testimonials"
  | "faqs"
  | "resources"
  | "resources/5-questions"
  | "resources/5-minute-negotiation-script"
  | "resources/7-sentences-leadership-english"
  | "resources/5-principles-executive-english"
  | "resources/10-common-mistakes-executive-english"
  | "resources/5-quick-wins-executive-english"
  | "resources/60-second-self-introduction-template"
  | "resources/client-call-opening-closing-framework"
  | "resources/pushback-playbook"
  | "resources/email-templates-difficult-situations"
  | "resources/executive-summary-formula"
  | "resources/feedback-framework"
  | "resources/interview-answer-templates"
  | "resources/meeting-rescue-phrases"
  | "resources/status-update-script"
  | "resources/questions-that-close-deals"
  | "resources/technical-explanation-formula"
  | "resources/difficult-conversation-checklist"
  | "resources/professional-apology-framework"
  | "resources/phrases-aggressive-clients"
  | "resources/salary-negotiation-script"
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
  | "quiz/high-stakes"
  | "meme-portfolio"
  | "site-index";

export const routeFor: Record<Locale, Record<TKey, string>> = {
  en: {
    "404": "/en/404/",
    "thank-you": "/en/thank-you/",
    home: "/en/",
    about: "/en/about/",
    contact: "/en/contact/",
    book: "/en/book/",
    chat: "/en/chat/",
    blog: "/en/blog/",
    "blog/page": "/en/blog/",
    services: "/en/services/",
    testimonials: "/en/testimonials/",
    faqs: "/en/faqs/",
    resources: "/en/resources/",
    "resources/5-questions": "/en/resources/5-questions/",
    "resources/5-minute-negotiation-script":
      "/en/resources/5-minute-negotiation-script/",
    "resources/7-sentences-leadership-english":
      "/en/resources/7-sentences-leadership-english/",
    "resources/5-principles-executive-english":
      "/en/resources/5-principles-executive-english/",
    "resources/10-common-mistakes-executive-english":
      "/en/resources/10-common-mistakes-executive-english/",
    "resources/5-quick-wins-executive-english":
      "/en/resources/5-quick-wins-executive-english/",
    "resources/60-second-self-introduction-template":
      "/en/resources/60-second-self-introduction-template/",
    "resources/client-call-opening-closing-framework":
      "/en/resources/client-call-opening-closing-framework/",
    "resources/pushback-playbook": "/en/resources/pushback-playbook/",
    "resources/email-templates-difficult-situations":
      "/en/resources/email-templates-difficult-situations/",
    "resources/executive-summary-formula":
      "/en/resources/executive-summary-formula/",
    "resources/feedback-framework": "/en/resources/feedback-framework/",
    "resources/interview-answer-templates":
      "/en/resources/interview-answer-templates/",
    "resources/meeting-rescue-phrases": "/en/resources/meeting-rescue-phrases/",
    "resources/status-update-script": "/en/resources/status-update-script/",
    "resources/questions-that-close-deals":
      "/en/resources/questions-that-close-deals/",
    "resources/technical-explanation-formula":
      "/en/resources/technical-explanation-formula/",
    "resources/difficult-conversation-checklist":
      "/en/resources/difficult-conversation-checklist/",
    "resources/professional-apology-framework":
      "/en/resources/professional-apology-framework/",
    "resources/phrases-aggressive-clients":
      "/en/resources/phrases-aggressive-clients/",
    "resources/salary-negotiation-script":
      "/en/resources/salary-negotiation-script/",
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
    "meme-portfolio": "/en/meme-portfolio/all/",
    "site-index": "/en/site-index/",
  },
  es: {
    "404": "/es/404/",
    "thank-you": "/es/thank-you/",
    home: "/es/",
    about: "/es/about/",
    contact: "/es/contact/",
    book: "/es/reservar/",
    chat: "/es/chat/",
    blog: "/es/blog/",
    "blog/page": "/es/blog/",
    services: "/es/servicios/",
    testimonials: "/es/testimonios/",
    faqs: "/es/faqs/",
    resources: "/es/recursos/",
    "resources/5-questions": "/es/recursos/5-preguntas/",
    "resources/5-minute-negotiation-script":
      "/es/recursos/guion-negociacion-5-minutos/",
    "resources/7-sentences-leadership-english":
      "/es/recursos/7-frases-liderazgo-ingles/",
    "resources/5-principles-executive-english":
      "/es/recursos/5-principios-ingles-ejecutivo/",
    "resources/10-common-mistakes-executive-english":
      "/es/recursos/10-errores-comunes-ingles-ejecutivo/",
    "resources/5-quick-wins-executive-english":
      "/es/recursos/5-victorias-rapidas-ingles-ejecutivo/",
    "resources/60-second-self-introduction-template":
      "/es/recursos/plantilla-auto-presentacion-60-segundos/",
    "resources/client-call-opening-closing-framework":
      "/es/recursos/marco-apertura-cierre-llamadas/",
    "resources/pushback-playbook": "/es/recursos/guia-para-decir-no/",
    "resources/email-templates-difficult-situations":
      "/es/recursos/plantillas-email-situaciones-dificiles/",
    "resources/executive-summary-formula":
      "/es/recursos/formula-resumen-ejecutivo/",
    "resources/feedback-framework": "/es/recursos/marco-retroalimentacion/",
    "resources/interview-answer-templates":
      "/es/recursos/plantillas-respuestas-entrevista/",
    "resources/meeting-rescue-phrases":
      "/es/recursos/frases-rescate-reuniones/",
    "resources/status-update-script":
      "/es/recursos/script-actualizacion-estado/",
    "resources/questions-that-close-deals":
      "/es/recursos/preguntas-que-cierran-ventas/",
    "resources/technical-explanation-formula":
      "/es/recursos/formula-explicacion-tecnica/",
    "resources/difficult-conversation-checklist":
      "/es/recursos/checklist-conversaciones-dificiles/",
    "resources/professional-apology-framework":
      "/es/recursos/marco-disculpa-profesional/",
    "resources/phrases-aggressive-clients":
      "/es/recursos/frases-clientes-agresivos/",
    "resources/salary-negotiation-script":
      "/es/recursos/script-negociacion-salario/",
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
    "meme-portfolio": "/es/meme-portfolio/all/",
    "site-index": "/es/indice-del-sitio/",
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
  siteUrl: string = "https://www.nyenglishteacher.com",
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
    "resources",
    "resources/5-questions",
    "resources/5-minute-negotiation-script",
    "resources/7-sentences-leadership-english",
    "resources/5-principles-executive-english",
    "resources/10-common-mistakes-executive-english",
    "resources/5-quick-wins-executive-english",
    "resources/60-second-self-introduction-template",
    "resources/client-call-opening-closing-framework",
    "resources/pushback-playbook",
    "resources/email-templates-difficult-situations",
    "resources/executive-summary-formula",
    "resources/feedback-framework",
    "resources/interview-answer-templates",
    "resources/meeting-rescue-phrases",
    "resources/status-update-script",
    "resources/questions-that-close-deals",
    "resources/technical-explanation-formula",
    "resources/difficult-conversation-checklist",
    "resources/professional-apology-framework",
    "resources/phrases-aggressive-clients",
    "resources/salary-negotiation-script",
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
    "meme-portfolio",
    "site-index",
  ];
}
