import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$Challenge, a as $$MethodologySection, b as $$FeaturedTestimonial, c as $$CtaSection } from '../../../chunks/CtaSection_0eMfMH1J.mjs';
import { s as services } from '../../../chunks/services_B12aH-xU.mjs';
import { a as testimonials } from '../../../chunks/es_D4JzuYnV.mjs';
export { renderers } from '../../../renderers.mjs';

const $$InglesParaMedicos = createComponent(($$result, $$props, $$slots) => {
  const medicalService = services.find((s) => s.slug === "medical-english");
  const metodologiaEs = {
    title: "Tu M\xE9todo de Coaching Personalizado",
    subtitle: "Una metodolog\xEDa probada de cuatro pasos dise\xF1ada para entender tus desaf\xEDos \xFAnicos y desarrollar las habilidades espec\xEDficas que necesitas para tener \xE9xito.",
    steps: [
      {
        icon: "lucide:search-check",
        title: "Descubrimiento y Evaluaci\xF3n",
        description: "Identificamos tus retos m\xE9dicos en ingl\xE9s y tus fortalezas para crear un plan personalizado y enfocado en tu pr\xE1ctica profesional."
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
  const featuredTestimonial = testimonials[7];
  const title = "Coaching de Ingl\xE9s para M\xE9dicos | Comunicaci\xF3n Precisa | NY English";
  const seoDescription = "Domina el ingl\xE9s m\xE9dico para comunicarte con precisi\xF3n. Coaching para profesionales de la salud.";
  const heroContent = {
    title: "Comun\xEDcate con Precisi\xF3n en Entornos M\xE9dicos",
    description: "Domina el ingl\xE9s m\xE9dico para interactuar con confianza con pacientes y colegas internacionales.",
    backgroundImage: medicalService?.backgroundImage,
    overlayOpacity: 0.7
  };
  const challengeContent = {
    headline: "\xBFEnfrentas Estos Desaf\xEDos?",
    painPoints: [
      "Te cuesta explicar diagn\xF3sticos y tratamientos a pacientes internacionales con precisi\xF3n.",
      "Tienes dificultades para comunicarte con colegas m\xE9dicos en conferencias o colaboraciones internacionales.",
      "Te sientes inseguro al leer o escribir documentaci\xF3n m\xE9dica y art\xEDculos de investigaci\xF3n en ingl\xE9s."
    ],
    icon: "\u{1F630}",
    image: medicalService?.squareImage
  };
  const ctaContent = {
    eyebrow: "\xBFListo para Mejorar tu Comunicaci\xF3n M\xE9dica?",
    title: "Domina el Ingl\xE9s M\xE9dico Especializado",
    description: "Ingl\xE9s para m\xE9dicos: mejora la atenci\xF3n al paciente y la colaboraci\xF3n internacional con ingl\xE9s especializado en el sector salud.",
    buttonText: "Reserva Mi Sesi\xF3n de Estrategia M\xE9dica",
    buttonLink: "/es/book/",
    whatToExpectTitle: "En Tu Sesi\xF3n Gratuita, Haremos:",
    whatToExpectList: [
      "Evaluar tu nivel actual de ingl\xE9s m\xE9dico y \xE1reas de especializaci\xF3n",
      "Identificar escenarios clave donde mejorar tu comunicaci\xF3n impactar\xE1 tu pr\xE1ctica",
      "Crear una hoja de ruta para desarrollar tu vocabulario m\xE9dico especializado"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": seoDescription, "lang": "es", "tkey": "services/medical-english", "ogImage": {
    src: medicalService?.backgroundImage?.src || "/images/logos/new-york-english-og.jpg",
    alt: `${title} - Featured Image`,
    width: medicalService?.backgroundImage?.width,
    height: medicalService?.backgroundImage?.height
  }, "customHreflangs": [
    { lang: "en-US", href: "https://www.nyenglishteacher.com/en/services/medical-english/" },
    { lang: "es-MX", href: "https://www.nyenglishteacher.com/es/servicios/ingles-para-medicos/" }
  ], "customCanonical": "https://www.nyenglishteacher.com/es/servicios/ingles-para-medicos/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })}  ${renderComponent($$result2, "Challenge", $$Challenge, { "content": challengeContent, "background": "white", "padding": "lg" })}  ${renderComponent($$result2, "MethodologySection", $$MethodologySection, { "content": metodologiaEs, "background": "light", "padding": "lg" })}  ${featuredTestimonial && renderTemplate`${renderComponent($$result2, "FeaturedTestimonial", $$FeaturedTestimonial, { "testimonial": featuredTestimonial })}`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/ingles-para-medicos.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/ingles-para-medicos.astro";
const $$url = "/es/servicios/ingles-para-medicos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$InglesParaMedicos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
