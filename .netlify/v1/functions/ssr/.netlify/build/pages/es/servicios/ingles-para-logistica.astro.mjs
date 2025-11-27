import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$Challenge, a as $$MethodologySection, b as $$FeaturedTestimonial, c as $$CtaSection } from '../../../chunks/CtaSection_0eMfMH1J.mjs';
import { s as services } from '../../../chunks/services_B12aH-xU.mjs';
import { a as testimonials } from '../../../chunks/es_D4JzuYnV.mjs';
export { renderers } from '../../../renderers.mjs';

const $$InglesParaLogistica = createComponent(($$result, $$props, $$slots) => {
  const logisticsService = services.find((s) => s.slug === "logistics-english");
  const metodologiaEs = {
    title: "Tu M\xE9todo de Coaching Personalizado",
    subtitle: "Una metodolog\xEDa probada de cuatro pasos dise\xF1ada para entender tus desaf\xEDos \xFAnicos y desarrollar las habilidades espec\xEDficas que necesitas para tener \xE9xito.",
    steps: [
      {
        icon: "lucide:search-check",
        title: "Descubrimiento y Evaluaci\xF3n",
        description: "Analizamos tu rol log\xEDstico y comunicaci\xF3n en ingl\xE9s para definir fortalezas y \xE1reas de mejora, creando un plan enfocado en tus metas laborales."
      },
      {
        icon: "lucide:map",
        title: "Mapeo Estrat\xE9gico de Objetivos",
        description: "Juntos, definimos objetivos claros y medibles directamente vinculados con tu \xE9xito profesional, creando un plan estrat\xE9gico enfocado en tus metas espec\xEDficas."
      },
      {
        icon: "lucide:settings",
        title: "Curr\xEDculum Personalizado y Pr\xE1ctica",
        description: "Tu programa est\xE1 construido para ti, enfoc\xE1ndose en el vocabulario espec\xEDfico, frases y matices culturales relevantes para tu industria y tareas diarias."
      },
      {
        icon: "lucide:message-square-text",
        title: "Simulaci\xF3n del Mundo Real y Retroalimentaci\xF3n",
        description: "Aqu\xED es donde la teor\xEDa se convierte en instinto. Realizamos presentaciones simuladas y juegos de rol de negociaciones dif\xEDciles, proporcionando retroalimentaci\xF3n directa y accionable para que est\xE9s confiado y preparado."
      }
    ]
  };
  const featuredTestimonial = testimonials[11];
  const title = "Coaching de Ingl\xE9s para Log\xEDstica | Comunicaci\xF3n Global | NY English";
  const seoDescription = "Optimiza la comunicaci\xF3n en log\xEDstica internacional. Domina terminolog\xEDa de cadena de suministro, aduanas y negociaciones en ingl\xE9s.";
  const heroContent = {
    title: "Optimiza la Comunicaci\xF3n en Log\xEDstica Global",
    description: "Domina el lenguaje de la cadena de suministro, transporte y documentaci\xF3n de comercio internacional.",
    backgroundImage: logisticsService?.backgroundImage,
    overlayOpacity: 0.7
  };
  const challengeContent = {
    headline: "\xBFEnfrentas Estos Desaf\xEDos?",
    painPoints: [
      "Te cuesta comunicarte con proveedores y clientes internacionales sobre env\xEDos y entregas.",
      "Tienes dificultades para entender y completar documentaci\xF3n internacional en ingl\xE9s.",
      "Te sientes inseguro al negociar con transportistas y agentes aduanales en ingl\xE9s."
    ],
    icon: "\u{1F630}",
    image: logisticsService?.squareImage
  };
  const ctaContent = {
    eyebrow: "\xBFListo para Optimizar tu Comunicaci\xF3n en Log\xEDstica?",
    title: "Domina el Ingl\xE9s para Log\xEDstica Global",
    description: "Ingl\xE9s para log\xEDstica: optimiza tu comunicaci\xF3n en la cadena de suministro y conecta con clientes y proveedores globales.",
    buttonText: "Reserva Mi Sesi\xF3n de Estrategia Log\xEDstica",
    buttonLink: "/es/book/",
    whatToExpectTitle: "En Tu Sesi\xF3n Gratuita, Haremos:",
    whatToExpectList: [
      "Evaluar tu nivel actual de ingl\xE9s para log\xEDstica y cadena de suministro",
      "Identificar \xE1reas clave donde mejorar tu comunicaci\xF3n impulsar\xE1 tus operaciones",
      "Crear una hoja de ruta para desarrollar tu vocabulario especializado en log\xEDstica"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": seoDescription, "lang": "es", "tkey": "services/logistics-english", "ogImage": { src: typeof logisticsService?.backgroundImage === "string" ? logisticsService.backgroundImage : "/images/logos/new-york-english-og.jpg" }, "customHreflangs": [
    { lang: "en-US", href: "https://www.nyenglishteacher.com/en/services/logistics-english/" },
    { lang: "es-MX", href: "https://www.nyenglishteacher.com/es/servicios/ingles-para-logistica/" }
  ], "customCanonical": "https://www.nyenglishteacher.com/es/servicios/ingles-para-logistica/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })}  ${renderComponent($$result2, "Challenge", $$Challenge, { "content": challengeContent, "background": "white", "padding": "lg" })}  ${renderComponent($$result2, "MethodologySection", $$MethodologySection, { "content": metodologiaEs, "background": "light", "padding": "lg" })}  ${featuredTestimonial && renderTemplate`${renderComponent($$result2, "FeaturedTestimonial", $$FeaturedTestimonial, { "testimonial": featuredTestimonial })}`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/ingles-para-logistica.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/ingles-para-logistica.astro";
const $$url = "/es/servicios/ingles-para-logistica";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$InglesParaLogistica,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
