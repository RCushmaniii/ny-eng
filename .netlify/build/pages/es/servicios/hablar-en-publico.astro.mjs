import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$Challenge, a as $$MethodologySection, b as $$FeaturedTestimonial, c as $$CtaSection } from '../../../chunks/CtaSection_0eMfMH1J.mjs';
import { a as serviciosEs } from '../../../chunks/services_B12aH-xU.mjs';
import { a as testimonials } from '../../../chunks/es_D4JzuYnV.mjs';
export { renderers } from '../../../renderers.mjs';

const $$HablarEnPublico = createComponent(($$result, $$props, $$slots) => {
  const publicSpeakingService = serviciosEs.find(
    (s) => s.slug === "ingles-para-presentaciones"
  );
  const metodologiaEs = {
    title: "Tu M\xE9todo de Coaching Personalizado",
    subtitle: "Una metodolog\xEDa probada de cuatro pasos dise\xF1ada para entender tus desaf\xEDos \xFAnicos y desarrollar las habilidades espec\xEDficas que necesitas para tener \xE9xito.",
    steps: [
      {
        icon: "lucide:search-check",
        title: "Descubrimiento y Evaluaci\xF3n",
        description: "Ingl\xE9s para presentaciones: domina el arte de hablar en p\xFAblico y comunica tus ideas con seguridad y claridad ante cualquier audiencia."
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
  const featuredTestimonialSlug = "maria-gonzalez-presentation-success";
  const featuredTestimonial = testimonials.find(
    (t) => t.slug === featuredTestimonialSlug
  );
  const title = "Coaching para Hablar en P\xFAblico | Presenta con Confianza | NY English";
  const seoDescription = "Domina el arte de hablar en p\xFAblico en ingl\xE9s. Supera la ansiedad, cautiva a tu audiencia y proyecta autoridad en presentaciones y reuniones internacionales.";
  const heroContent = {
    title: "Cautiva a Cualquier Audiencia",
    description: "Domina el arte de hablar en p\xFAblico en ingl\xE9s, desde reuniones de equipo hasta conferencias internacionales.",
    backgroundImage: publicSpeakingService?.backgroundImage,
    overlayOpacity: 0.7
  };
  const challengeContent = {
    headline: "\xBFEnfrentas Estos Desaf\xEDos?",
    painPoints: [
      "Te pones nervioso al presentar en ingl\xE9s frente a audiencias internacionales.",
      "Te cuesta estructurar tus ideas de manera clara y convincente durante presentaciones.",
      "Pierdes la atenci\xF3n de tu audiencia porque no sabes c\xF3mo mantener el engagement en ingl\xE9s."
    ],
    icon: "\u{1F630}",
    image: publicSpeakingService?.squareImage,
    quizCta: {
      text: "\xBFQuieres saber exactamente d\xF3nde est\xE1n tus brechas de comunicaci\xF3n de alto impacto?",
      link: "/es/quiz/high-stakes/question/1",
      linkLabel: "Toma nuestra evaluaci\xF3n gratuita de 90 segundos \u2192"
    }
  };
  const ctaContent = {
    eyebrow: "\xBFListo para Cautivar a tu Audiencia?",
    title: "Domina el Arte de Hablar en P\xFAblico",
    description: "Una sesi\xF3n de estrategia personalizada te mostrar\xE1 exactamente c\xF3mo desarrollar la confianza y las t\xE9cnicas necesarias para presentar con impacto en ingl\xE9s ante cualquier audiencia.",
    buttonText: "Reserva Mi Sesi\xF3n de Estrategia de Presentaciones",
    buttonLink: "/es/book/",
    whatToExpectTitle: "En Tu Sesi\xF3n Gratuita, Haremos:",
    whatToExpectList: [
      "Evaluar tu estilo actual de presentaci\xF3n y nivel de confianza",
      "Identificar t\xE9cnicas espec\xEDficas para mejorar tu presencia y engagement",
      "Crear una hoja de ruta para desarrollar habilidades de storytelling y manejo de audiencias"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": seoDescription, "lang": "es", "tkey": "services/public-speaking-english", "ogImage": {
    src: publicSpeakingService?.backgroundImage?.src || "/images/logos/new-york-english-og.jpg",
    alt: `${title} - Featured Image`,
    width: publicSpeakingService?.backgroundImage?.width,
    height: publicSpeakingService?.backgroundImage?.height
  }, "customHreflangs": [
    {
      lang: "en-US",
      href: "https://www.nyenglishteacher.com/en/services/public-speaking-english/"
    },
    {
      lang: "es-MX",
      href: "https://www.nyenglishteacher.com/es/servicios/hablar-en-publico/"
    }
  ], "customCanonical": "https://www.nyenglishteacher.com/es/servicios/hablar-en-publico/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })}  ${renderComponent($$result2, "Challenge", $$Challenge, { "content": challengeContent, "background": "white", "padding": "lg" })}  ${renderComponent($$result2, "MethodologySection", $$MethodologySection, { "content": metodologiaEs, "background": "light", "padding": "lg" })}  ${featuredTestimonial && renderTemplate`${renderComponent($$result2, "FeaturedTestimonial", $$FeaturedTestimonial, { "testimonial": featuredTestimonial })}`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/hablar-en-publico.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/hablar-en-publico.astro";
const $$url = "/es/servicios/hablar-en-publico";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HablarEnPublico,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
