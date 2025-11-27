import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$Challenge, a as $$MethodologySection, b as $$FeaturedTestimonial, c as $$CtaSection } from '../../../chunks/CtaSection_0eMfMH1J.mjs';
import { s as services } from '../../../chunks/services_B12aH-xU.mjs';
import { a as testimonials } from '../../../chunks/es_D4JzuYnV.mjs';
export { renderers } from '../../../renderers.mjs';

const $$InglesParaFundadoresDeStartups = createComponent(($$result, $$props, $$slots) => {
  const startupFoundersService = services.find((s) => s.slug === "startup-founders");
  const metodologiaEs = {
    title: "Tu M\xE9todo de Coaching Personalizado",
    subtitle: "Una metodolog\xEDa probada de cuatro pasos dise\xF1ada para entender tus desaf\xEDos \xFAnicos y desarrollar las habilidades espec\xEDficas que necesitas para tener \xE9xito.",
    steps: [
      {
        icon: "lucide:search-check",
        title: "Descubrimiento y Evaluaci\xF3n",
        description: "Ingl\xE9s para fundadores: impulsa tu startup y presenta tu visi\xF3n con confianza ante inversionistas y socios internacionales."
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
  const title = "Coaching de Ingl\xE9s para Fundadores | Perfecciona tu Pitch | NY English";
  const seoDescription = "Coaching de ingl\xE9s para fundadores de startups. Perfecciona tu pitch, comunica tu visi\xF3n y destaca en reuniones con inversores.";
  const heroContent = {
    title: "Asegura el Financiamiento que tu Startup Merece",
    description: "Perfecciona tu pitch para VCs y articula tu visi\xF3n con la claridad que los inversionistas esperan.",
    backgroundImage: startupFoundersService?.backgroundImage,
    overlayOpacity: 0.7
  };
  const challengeContent = {
    headline: "\xBFEnfrentas Estos Desaf\xEDos?",
    painPoints: [
      "Te cuesta articular tu visi\xF3n de negocio de manera convincente en ingl\xE9s durante pitches.",
      "Pierdes oportunidades de financiamiento porque no puedes comunicar el valor de tu startup claramente.",
      "Te sientes inseguro al responder preguntas t\xE9cnicas y financieras de inversionistas en ingl\xE9s."
    ],
    icon: "\u{1F630}",
    image: startupFoundersService?.squareImage
  };
  const ctaContent = {
    eyebrow: "\xBFListo para Asegurar tu Pr\xF3xima Ronda de Financiamiento?",
    title: "Perfecciona tu Pitch en Ingl\xE9s",
    description: "Una sesi\xF3n de estrategia personalizada te mostrar\xE1 exactamente c\xF3mo comunicar tu visi\xF3n de startup con la claridad y confianza que los VCs esperan para invertir en tu empresa.",
    buttonText: "Reserva Mi Sesi\xF3n de Estrategia para Fundadores",
    buttonLink: "/es/book/",
    whatToExpectTitle: "En Tu Sesi\xF3n Gratuita, Haremos:",
    whatToExpectList: [
      "Evaluar tu pitch actual y identificar \xE1reas de mejora en tu comunicaci\xF3n",
      "Desarrollar estrategias para articular tu propuesta de valor con mayor impacto",
      "Crear una hoja de ruta para dominar el lenguaje de los negocios y el fundraising"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": seoDescription, "lang": "es", "tkey": "services/startup-founders", "ogImage": { src: typeof startupFoundersService?.backgroundImage === "string" ? startupFoundersService.backgroundImage : "/images/logos/new-york-english-og.jpg" }, "customHreflangs": [
    { lang: "en-US", href: "https://www.nyenglishteacher.com/en/services/startup-founders/" },
    { lang: "es-MX", href: "https://www.nyenglishteacher.com/es/servicios/ingles-para-fundadores-de-startups/" }
  ], "customCanonical": "https://www.nyenglishteacher.com/es/servicios/ingles-para-fundadores-de-startups/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })}  ${renderComponent($$result2, "Challenge", $$Challenge, { "content": challengeContent, "background": "white", "padding": "lg" })}  ${renderComponent($$result2, "MethodologySection", $$MethodologySection, { "content": metodologiaEs, "background": "light", "padding": "lg" })}  ${featuredTestimonial && renderTemplate`${renderComponent($$result2, "FeaturedTestimonial", $$FeaturedTestimonial, { "testimonial": featuredTestimonial })}`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/ingles-para-fundadores-de-startups.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/ingles-para-fundadores-de-startups.astro";
const $$url = "/es/servicios/ingles-para-fundadores-de-startups";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$InglesParaFundadoresDeStartups,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
