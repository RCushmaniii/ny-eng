import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$Challenge, a as $$MethodologySection, b as $$FeaturedTestimonial, c as $$CtaSection } from '../../../chunks/CtaSection_0eMfMH1J.mjs';
import { s as services } from '../../../chunks/services_B12aH-xU.mjs';
import { a as testimonials } from '../../../chunks/es_D4JzuYnV.mjs';
export { renderers } from '../../../renderers.mjs';

const $$PreparacionParaEntrevistas = createComponent(($$result, $$props, $$slots) => {
  const interviewPrepService = services.find((s) => s.slug === "interview-prep");
  const metodologiaEs = {
    title: "Tu M\xE9todo de Coaching Personalizado",
    subtitle: "Una metodolog\xEDa probada de cuatro pasos dise\xF1ada para entender tus desaf\xEDos \xFAnicos y desarrollar las habilidades espec\xEDficas que necesitas para tener \xE9xito.",
    steps: [
      {
        icon: "lucide:search-check",
        title: "Descubrimiento y Evaluaci\xF3n",
        description: "Ingl\xE9s para entrevistas: prep\xE1rate para destacar y conseguir el empleo que deseas en empresas globales."
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
  const featuredTestimonialSlug = "carolina-martinez-interview-success";
  const featuredTestimonial = testimonials.find((t) => t.slug === featuredTestimonialSlug);
  const title = "Preparaci\xF3n para Entrevistas en Ingl\xE9s | NY English";
  const seoDescription = "Domina las entrevistas en ingl\xE9s. Aprende a contar tu historia y proyectar confianza en cada entrevista.";
  const heroContent = {
    title: "Asegura tu Pr\xF3ximo Rol con Confianza",
    description: "Domina el arte de las entrevistas en ingl\xE9s y destaca entre los candidatos.",
    backgroundImage: interviewPrepService?.backgroundImage,
    overlayOpacity: 0.7
  };
  const challengeContent = {
    headline: "\xBFEnfrentas Estos Desaf\xEDos?",
    painPoints: [
      "Te pones nervioso y pierdes fluidez cuando te hacen preguntas inesperadas en ingl\xE9s.",
      "Te cuesta explicar tus logros de manera convincente y estructurada.",
      "No sabes c\xF3mo manejar preguntas sobre debilidades o situaciones dif\xEDciles en el trabajo."
    ],
    icon: "\u{1F630}",
    image: interviewPrepService?.squareImage
  };
  const ctaContent = {
    eyebrow: "\xBFListo para Destacar en tu Pr\xF3xima Entrevista?",
    title: "Domina las Entrevistas en Ingl\xE9s",
    description: "Una sesi\xF3n de estrategia personalizada te mostrar\xE1 exactamente c\xF3mo prepararte para entrevistas en ingl\xE9s y proyectar la confianza que necesitas para conseguir el trabajo que deseas.",
    buttonText: "Reserva Mi Sesi\xF3n de Estrategia de Entrevistas",
    buttonLink: "/es/book/",
    whatToExpectTitle: "En Tu Sesi\xF3n Gratuita, Haremos:",
    whatToExpectList: [
      "Evaluar tu estilo de comunicaci\xF3n actual en entrevistas",
      "Identificar \xE1reas clave donde mejorar tu presentaci\xF3n personal impulsar\xE1 tus resultados",
      "Crear una hoja de ruta para desarrollar respuestas convincentes y t\xE9cnicas de storytelling"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": seoDescription, "lang": "es", "tkey": "services/interview-prep", "ogImage": { src: typeof interviewPrepService?.backgroundImage === "string" ? interviewPrepService.backgroundImage : "/images/logos/new-york-english-og.jpg" }, "customHreflangs": [
    { lang: "en-US", href: "https://www.nyenglishteacher.com/en/services/interview-prep/" },
    { lang: "es-MX", href: "https://www.nyenglishteacher.com/es/servicios/preparacion-para-entrevistas/" }
  ], "customCanonical": "https://www.nyenglishteacher.com/es/servicios/preparacion-para-entrevistas/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })}  ${renderComponent($$result2, "Challenge", $$Challenge, { "content": challengeContent, "background": "white", "padding": "lg" })}  ${renderComponent($$result2, "MethodologySection", $$MethodologySection, { "content": metodologiaEs, "background": "light", "padding": "lg" })}  ${featuredTestimonial && renderTemplate`${renderComponent($$result2, "FeaturedTestimonial", $$FeaturedTestimonial, { "testimonial": featuredTestimonial })}`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/preparacion-para-entrevistas.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/preparacion-para-entrevistas.astro";
const $$url = "/es/servicios/preparacion-para-entrevistas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PreparacionParaEntrevistas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
