import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$Challenge, a as $$MethodologySection, b as $$FeaturedTestimonial, c as $$CtaSection } from '../../../chunks/CtaSection_0eMfMH1J.mjs';
import { s as services } from '../../../chunks/services_B12aH-xU.mjs';
import { a as testimonials } from '../../../chunks/es_D4JzuYnV.mjs';
export { renderers } from '../../../renderers.mjs';

const $$InglesParaPresentaciones = createComponent(($$result, $$props, $$slots) => {
  const highStakesService = services.find(
    (s) => s.slug === "high-stakes-english"
  );
  const metodologiaEs = {
    title: "Tu M\xE9todo de Coaching Personalizado",
    subtitle: "Una metodolog\xEDa probada de cuatro pasos dise\xF1ada para entender tus desaf\xEDos \xFAnicos y desarrollar las habilidades espec\xEDficas que necesitas para tener \xE9xito.",
    steps: [
      {
        icon: "lucide:search-check",
        title: "Descubrimiento y Evaluaci\xF3n",
        description: "Ingl\xE9s para presentaciones: comunica tus ideas con impacto y claridad en reuniones y conferencias."
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
  const featuredTestimonial = testimonials[9];
  const title = "Coaching de Ingl\xE9s para Presentaciones | NY English";
  const seoDescription = "Domina presentaciones de alto impacto en ingl\xE9s. Comunica ideas complejas, maneja preguntas dif\xEDciles y cautiva audiencias globales.";
  const heroContent = {
    title: "Ingl\xE9s para Situaciones Importantes",
    description: "Cautiva a cualquier audiencia, supera entrevistas y realiza presentaciones poderosas con confianza.",
    backgroundImage: highStakesService?.backgroundImage,
    overlayOpacity: 0.7
  };
  const challengeContent = {
    headline: "\xBFEnfrentas Estos Desaf\xEDos?",
    painPoints: [
      "Te sientes nervioso y pierdes confianza al presentar ante audiencias de habla inglesa.",
      "Las situaciones de entrevista en ingl\xE9s te generan ansiedad y no puedes mostrar tus verdaderas habilidades.",
      "Tienes dificultades para mantener el inter\xE9s de tu audiencia y transmitir tu mensaje con impacto y autoridad."
    ],
    icon: "\u{1F630}",
    image: highStakesService?.squareImage,
    quizCta: {
      text: "\xBFQuieres saber exactamente d\xF3nde est\xE1n tus brechas de comunicaci\xF3n de alto impacto?",
      link: "/es/quiz/high-stakes/question/1",
      linkLabel: "Toma nuestra evaluaci\xF3n gratuita de 90 segundos \u2192"
    }
  };
  const ctaContent = {
    eyebrow: "\xBFListo para Dominar la Comunicaci\xF3n de Alto Impacto?",
    title: "Destaca en Situaciones de Alta Presi\xF3n",
    description: "Una sesi\xF3n de estrategia gratuita y sin compromiso es la mejor manera de entender c\xF3mo el coaching personalizado puede aumentar tu confianza y efectividad en la comunicaci\xF3n.",
    buttonText: "Reserva Mi Sesi\xF3n de Estrategia Gratuita",
    buttonLink: "/es/book/",
    whatToExpectTitle: "En Tu Sesi\xF3n Gratuita, Haremos:",
    whatToExpectList: [
      "Evaluar tus habilidades actuales de presentaci\xF3n y entrevista",
      "Identificar \xE1reas espec\xEDficas de mejora en escenarios de alta presi\xF3n",
      "Crear un plan personalizado para superar la ansiedad al hablar y desarrollar confianza"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": seoDescription, "lang": "es", "tkey": "services/high-stakes-english", "ogImage": {
    src: typeof highStakesService?.backgroundImage === "string" ? highStakesService.backgroundImage : "/images/logos/new-york-english-og.jpg"
  }, "customHreflangs": [
    {
      lang: "en-US",
      href: "https://www.nyenglishteacher.com/en/services/high-stakes-english/"
    },
    {
      lang: "es-MX",
      href: "https://www.nyenglishteacher.com/es/servicios/ingles-para-presentaciones/"
    }
  ], "customCanonical": "https://www.nyenglishteacher.com/es/servicios/ingles-para-presentaciones/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })}  ${renderComponent($$result2, "Challenge", $$Challenge, { "content": challengeContent, "background": "white", "padding": "lg" })}  ${renderComponent($$result2, "MethodologySection", $$MethodologySection, { "content": metodologiaEs, "background": "light", "padding": "lg" })}  ${featuredTestimonial && renderTemplate`${renderComponent($$result2, "FeaturedTestimonial", $$FeaturedTestimonial, { "testimonial": featuredTestimonial })}`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/ingles-para-presentaciones.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/ingles-para-presentaciones.astro";
const $$url = "/es/servicios/ingles-para-presentaciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$InglesParaPresentaciones,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
