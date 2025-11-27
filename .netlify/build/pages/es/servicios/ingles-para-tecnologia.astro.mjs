import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$Challenge, a as $$MethodologySection, b as $$FeaturedTestimonial, c as $$CtaSection } from '../../../chunks/CtaSection_0eMfMH1J.mjs';
import { s as services } from '../../../chunks/services_B12aH-xU.mjs';
import { a as testimonials } from '../../../chunks/es_D4JzuYnV.mjs';
export { renderers } from '../../../renderers.mjs';

const $$InglesParaTecnologia = createComponent(($$result, $$props, $$slots) => {
  const techService = services.find((s) => s.slug === "tech-english");
  const metodologiaEs = {
    title: "Tu M\xE9todo de Coaching Personalizado",
    subtitle: "Una metodolog\xEDa probada de cuatro pasos dise\xF1ada para entender tus desaf\xEDos \xFAnicos y desarrollar las habilidades espec\xEDficas que necesitas para tener \xE9xito.",
    steps: [
      {
        icon: "lucide:search-check",
        title: "Descubrimiento y Evaluaci\xF3n",
        description: "Identificamos tus retos t\xE9cnicos en ingl\xE9s y tus fortalezas para crear un plan personalizado y enfocado en tus objetivos profesionales."
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
  const featuredTestimonial = testimonials[0];
  const title = "Coaching de Ingl\xE9s para Tecnolog\xEDa | NY English";
  const seoDescription = "Domina el ingl\xE9s t\xE9cnico para comunicar conceptos complejos con claridad. Code reviews, arquitectura y colaboraci\xF3n global en tecnolog\xEDa.";
  const heroContent = {
    title: "Domina el Ingl\xE9s T\xE9cnico para Impacto Global",
    description: "Comunica conceptos t\xE9cnicos complejos con claridad y precisi\xF3n en entornos tecnol\xF3gicos internacionales.",
    backgroundImage: techService?.backgroundImage,
    overlayOpacity: 0.7
  };
  const challengeContent = {
    headline: "\xBFEnfrentas Estos Desaf\xEDos?",
    painPoints: [
      "Te cuesta explicar conceptos t\xE9cnicos complejos claramente en ingl\xE9s durante reuniones.",
      "Las revisiones de c\xF3digo y discusiones t\xE9cnicas se sienten abrumadoras en un segundo idioma.",
      "Evitas participar en reuniones de arquitectura debido a barreras del idioma."
    ],
    icon: "\u{1F630}",
    image: techService?.squareImage,
    quizCta: {
      text: "\xBFQuieres saber exactamente d\xF3nde est\xE1n tus brechas de comunicaci\xF3n?",
      link: "/es/quiz/it-services/question/1",
      linkLabel: "Toma nuestra evaluaci\xF3n gratuita de 90 segundos \u2192"
    }
  };
  const ctaContent = {
    eyebrow: "\xBFListo para Transformar tu Comunicaci\xF3n T\xE9cnica?",
    title: "Domina el Ingl\xE9s para Tecnolog\xEDa",
    description: "Ingl\xE9s para tecnolog\xEDa: explica conceptos t\xE9cnicos y colabora eficazmente en equipos globales de IT.",
    buttonText: "Reserva Mi Sesi\xF3n de Estrategia T\xE9cnica",
    buttonLink: "/es/book/",
    whatToExpectTitle: "En Tu Sesi\xF3n Gratuita, Haremos:",
    whatToExpectList: [
      "Evaluar tus fortalezas y brechas actuales en comunicaci\xF3n t\xE9cnica",
      "Practicar explicando conceptos t\xE9cnicos complejos con claridad",
      "Crear un plan personalizado para aumentar tu confianza en discusiones t\xE9cnicas"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": seoDescription, "lang": "es", "tkey": "services/tech-english", "ogImage": {
    src: typeof techService?.backgroundImage === "string" ? techService.backgroundImage : "/images/logos/new-york-english-og.jpg"
  }, "customHreflangs": [
    {
      lang: "en-US",
      href: "https://www.nyenglishteacher.com/en/services/tech-english/"
    },
    {
      lang: "es-MX",
      href: "https://www.nyenglishteacher.com/es/servicios/ingles-para-tecnologia/"
    }
  ], "customCanonical": "https://www.nyenglishteacher.com/es/servicios/ingles-para-tecnologia/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })}  ${renderComponent($$result2, "Challenge", $$Challenge, { "content": challengeContent, "background": "white", "padding": "lg" })}  ${renderComponent($$result2, "MethodologySection", $$MethodologySection, { "content": metodologiaEs, "background": "light", "padding": "lg" })}  ${featuredTestimonial && renderTemplate`${renderComponent($$result2, "FeaturedTestimonial", $$FeaturedTestimonial, { "testimonial": featuredTestimonial })}`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/ingles-para-tecnologia.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/ingles-para-tecnologia.astro";
const $$url = "/es/servicios/ingles-para-tecnologia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$InglesParaTecnologia,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
