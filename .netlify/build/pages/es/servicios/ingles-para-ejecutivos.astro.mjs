import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$Challenge, a as $$MethodologySection, b as $$FeaturedTestimonial, c as $$CtaSection } from '../../../chunks/CtaSection_0eMfMH1J.mjs';
import { s as services } from '../../../chunks/services_B12aH-xU.mjs';
import { a as testimonials } from '../../../chunks/es_D4JzuYnV.mjs';
export { renderers } from '../../../renderers.mjs';

const $$InglesParaEjecutivos = createComponent(($$result, $$props, $$slots) => {
  const executiveService = services.find((s) => s.slug === "executive-english");
  if (!executiveService) {
    throw new Error("Executive English service data not found");
  }
  const metodologiaEs = {
    title: "Tu M\xE9todo de Coaching Personalizado",
    subtitle: "Una metodolog\xEDa probada de cuatro pasos dise\xF1ada para entender tus desaf\xEDos \xFAnicos y desarrollar las habilidades espec\xEDficas que necesitas para tener \xE9xito.",
    steps: [
      {
        icon: "lucide:search-check",
        title: "Descubrimiento y Evaluaci\xF3n",
        description: "Evaluamos tu perfil ejecutivo y comunicaci\xF3n en ingl\xE9s para identificar fortalezas y dise\xF1ar un plan personalizado hacia tus objetivos de liderazgo."
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
  const featuredTestimonial = testimonials[1];
  if (!featuredTestimonial) {
    throw new Error("Featured testimonial not found");
  }
  const title = "Coaching de Ingl\xE9s para Ejecutivos | NY English";
  const seoDescription = "Coaching de ingl\xE9s personalizado para ejecutivos. Mejora tu liderazgo y comunicaci\xF3n estrat\xE9gica para destacar en entornos globales.";
  const heroContent = {
    title: "Lidera con Autoridad en Entornos Globales",
    description: "Domina el ingl\xE9s ejecutivo para comunicarte con el impacto y la presencia que tu posici\xF3n requiere.",
    backgroundImage: executiveService.backgroundImage,
    overlayOpacity: 0.7
  };
  const challengeContent = {
    headline: "\xBFEnfrentas Estos Desaf\xEDos?",
    painPoints: [
      "Te cuesta proyectar autoridad y confianza durante reuniones ejecutivas en ingl\xE9s.",
      "Tienes dificultades para comunicar estrategias complejas a equipos internacionales.",
      "Te sientes limitado al negociar acuerdos importantes o presentar a la junta directiva en ingl\xE9s."
    ],
    icon: "\u{1F630}",
    image: executiveService.squareImage,
    quizCta: {
      text: "\xBFQuieres saber exactamente d\xF3nde est\xE1n tus brechas de comunicaci\xF3n ejecutiva?",
      link: "/es/quiz/executives/question/1",
      linkLabel: "Toma nuestra evaluaci\xF3n gratuita de 90 segundos \u2192"
    }
  };
  const ctaContent = {
    eyebrow: "\xBFListo para Liderar con Mayor Impacto?",
    title: "Domina el Ingl\xE9s Ejecutivo",
    description: "Una sesi\xF3n de estrategia personalizada te mostrar\xE1 exactamente c\xF3mo desarrollar la presencia ejecutiva y las habilidades de comunicaci\xF3n necesarias para liderar con autoridad en entornos globales.",
    buttonText: "Reserva Mi Sesi\xF3n de Estrategia Ejecutiva",
    buttonLink: "/es/book/",
    whatToExpectTitle: "En Tu Sesi\xF3n Gratuita, Haremos:",
    whatToExpectList: [
      "Evaluar tu estilo de liderazgo actual y presencia ejecutiva",
      "Identificar oportunidades para aumentar tu impacto en comunicaciones estrat\xE9gicas",
      "Crear una hoja de ruta para desarrollar tu voz de liderazgo global"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": seoDescription, "lang": "es", "tkey": "services/executive-english", "ogImage": {
    src: typeof executiveService.backgroundImage === "string" ? executiveService.backgroundImage : "/images/logos/new-york-english-og.jpg"
  }, "hideCta": true, "customHreflangs": [
    {
      lang: "en-US",
      href: "https://www.nyenglishteacher.com/en/services/executive-english/"
    },
    {
      lang: "es-MX",
      href: "https://www.nyenglishteacher.com/es/servicios/ingles-para-ejecutivos/"
    }
  ], "customCanonical": "https://www.nyenglishteacher.com/es/servicios/ingles-para-ejecutivos/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })}  ${renderComponent($$result2, "Challenge", $$Challenge, { "content": challengeContent, "background": "white", "padding": "lg" })}  ${renderComponent($$result2, "MethodologySection", $$MethodologySection, { "content": metodologiaEs, "background": "light", "padding": "lg" })}  ${featuredTestimonial && renderTemplate`${renderComponent($$result2, "FeaturedTestimonial", $$FeaturedTestimonial, { "testimonial": featuredTestimonial })}`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/ingles-para-ejecutivos.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/ingles-para-ejecutivos.astro";
const $$url = "/es/servicios/ingles-para-ejecutivos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$InglesParaEjecutivos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
