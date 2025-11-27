import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$Challenge, a as $$MethodologySection, b as $$FeaturedTestimonial, c as $$CtaSection } from '../../../chunks/CtaSection_0eMfMH1J.mjs';
import { s as services } from '../../../chunks/services_B12aH-xU.mjs';
import { a as testimonials } from '../../../chunks/es_D4JzuYnV.mjs';
export { renderers } from '../../../renderers.mjs';

const $$InglesParaProfesionales = createComponent(($$result, $$props, $$slots) => {
  const professionalService = services.find(
    (s) => s.slug === "professional-english"
  );
  const metodologiaEs = {
    title: "Tu M\xE9todo de Coaching Personalizado",
    subtitle: "Una metodolog\xEDa probada de cuatro pasos dise\xF1ada para entender tus desaf\xEDos \xFAnicos y desarrollar las habilidades espec\xEDficas que necesitas para tener \xE9xito.",
    steps: [
      {
        icon: "lucide:search-check",
        title: "Descubrimiento y Evaluaci\xF3n",
        description: "Ingl\xE9s para profesionales: avanza en tu carrera con clases enfocadas en comunicaci\xF3n efectiva y networking internacional."
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
  const title = "Coaching de Ingl\xE9s Profesional | M\xE9dicos y Abogados | NY English";
  const seoDescription = "Mejora tu comunicaci\xF3n profesional en ingl\xE9s. Coaching para interacciones con clientes, reuniones ejecutivas y networking internacional.";
  const heroContent = {
    title: "Ingl\xE9s para Campos Profesionales",
    description: "Domina la terminolog\xEDa especializada y comun\xEDcate con claridad en cada interacci\xF3n con clientes y entornos profesionales.",
    backgroundImage: professionalService?.backgroundImage,
    overlayOpacity: 0.7
  };
  const challengeContent = {
    headline: "\xBFEnfrentas Estos Desaf\xEDos?",
    painPoints: [
      "Te sientes menos seguro al explicar temas complejos a clientes o pacientes de habla inglesa.",
      "La terminolog\xEDa especializada y la pronunciaci\xF3n crean barreras durante las interacciones profesionales.",
      "Te preocupa que la falta de comunicaci\xF3n afecte las relaciones con los clientes y la confianza."
    ],
    icon: "\u{1F630}",
    image: professionalService?.squareImage,
    quizCta: {
      text: "\xBFQuieres saber exactamente d\xF3nde est\xE1n tus brechas de comunicaci\xF3n profesional?",
      link: "/es/quiz/professional-services/question/1",
      linkLabel: "Toma nuestra evaluaci\xF3n gratuita de 90 segundos \u2192"
    }
  };
  const ctaContent = {
    eyebrow: "\xBFListo para Transformar tu Comunicaci\xF3n Profesional?",
    title: "Comun\xEDcate con Confianza y Precisi\xF3n",
    description: "Una sesi\xF3n de estrategia gratuita y sin compromiso es la mejor manera de entender c\xF3mo el coaching personalizado puede mejorar tus interacciones con clientes y aumentar tu confianza.",
    buttonText: "Reserva Mi Sesi\xF3n de Estrategia Gratuita",
    buttonLink: "/es/book/",
    whatToExpectTitle: "En Tu Sesi\xF3n Gratuita, Haremos:",
    whatToExpectList: [
      "Evaluar tus habilidades actuales de comunicaci\xF3n en ingl\xE9s profesional",
      "Identificar \xE1reas espec\xEDficas de mejora en las interacciones con clientes",
      "Crear un plan de aprendizaje personalizado para tu campo profesional"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": seoDescription, "lang": "es", "tkey": "services/professional-english", "ogImage": {
    src: typeof professionalService?.backgroundImage === "string" ? professionalService.backgroundImage : "/images/logos/new-york-english-og.jpg"
  }, "customHreflangs": [
    {
      lang: "en-US",
      href: "https://www.nyenglishteacher.com/en/services/professional-english/"
    },
    {
      lang: "es-MX",
      href: "https://www.nyenglishteacher.com/es/servicios/ingles-para-profesionales/"
    }
  ], "customCanonical": "https://www.nyenglishteacher.com/es/servicios/ingles-para-profesionales/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })}  ${renderComponent($$result2, "Challenge", $$Challenge, { "content": challengeContent, "background": "white", "padding": "lg" })}  ${renderComponent($$result2, "MethodologySection", $$MethodologySection, { "content": metodologiaEs, "background": "light", "padding": "lg" })}  ${featuredTestimonial && renderTemplate`${renderComponent($$result2, "FeaturedTestimonial", $$FeaturedTestimonial, { "testimonial": featuredTestimonial })}`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/ingles-para-profesionales.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/ingles-para-profesionales.astro";
const $$url = "/es/servicios/ingles-para-profesionales";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$InglesParaProfesionales,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
