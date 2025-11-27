import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$Challenge, a as $$MethodologySection, b as $$FeaturedTestimonial, c as $$CtaSection } from '../../../chunks/CtaSection_0eMfMH1J.mjs';
import { s as services } from '../../../chunks/services_B12aH-xU.mjs';
import { a as testimonials } from '../../../chunks/es_D4JzuYnV.mjs';
export { renderers } from '../../../renderers.mjs';

const $$InglesParaVentasTecnicas = createComponent(($$result, $$props, $$slots) => {
  const technicalSalesService = services.find((s) => s.slug === "technical-sales-english");
  const metodologiaEs = {
    title: "Tu M\xE9todo de Coaching Personalizado",
    subtitle: "Una metodolog\xEDa probada de cuatro pasos dise\xF1ada para entender tus desaf\xEDos \xFAnicos y desarrollar las habilidades espec\xEDficas que necesitas para tener \xE9xito.",
    steps: [
      {
        icon: "lucide:search-check",
        title: "Descubrimiento y Evaluaci\xF3n",
        description: "Ingl\xE9s para ventas t\xE9cnicas: impulsa tus resultados y negocia con \xE9xito en mercados internacionales."
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
  const featuredTestimonialSlug = "erika-sanchez-microsoft";
  const featuredTestimonial = testimonials.find((t) => t.slug === featuredTestimonialSlug);
  const title = "Coaching de Ingl\xE9s para Ventas T\xE9cnicas | NY English";
  const seoDescription = "Domina el ingl\xE9s para ventas t\xE9cnicas. Explica productos complejos con claridad y cierra m\xE1s ventas.";
  const heroContent = {
    title: "Explica lo Complejo con Claridad",
    description: "Comunica el valor de tus soluciones t\xE9cnicas con confianza y precisi\xF3n para cerrar m\xE1s ventas.",
    backgroundImage: technicalSalesService?.backgroundImage,
    overlayOpacity: 0.7
  };
  const challengeContent = {
    headline: "\xBFEnfrentas Estos Desaf\xEDos?",
    painPoints: [
      "Te cuesta explicar caracter\xEDsticas t\xE9cnicas complejas de manera que resalten sus beneficios.",
      "Pierdes oportunidades porque no puedes responder preguntas t\xE9cnicas con fluidez.",
      "Te sientes inseguro al negociar o manejar objeciones en ingl\xE9s durante el proceso de venta."
    ],
    icon: "\u{1F630}",
    image: technicalSalesService?.squareImage
  };
  const ctaContent = {
    eyebrow: "\xBFListo para Vender con Impacto?",
    title: "Domina las Ventas T\xE9cnicas en Ingl\xE9s",
    description: "Una sesi\xF3n de estrategia personalizada te mostrar\xE1 exactamente c\xF3mo comunicar el valor de tus soluciones t\xE9cnicas para cerrar m\xE1s ventas.",
    buttonText: "Reserva Mi Sesi\xF3n de Estrategia de Ventas",
    buttonLink: "/es/book/",
    whatToExpectTitle: "En Tu Sesi\xF3n Gratuita, Haremos:",
    whatToExpectList: [
      "Evaluar tu estilo de comunicaci\xF3n actual en situaciones de ventas t\xE9cnicas",
      "Identificar \xE1reas clave donde mejorar tu comunicaci\xF3n t\xE9cnica impulsar\xE1 tus resultados",
      "Crear una hoja de ruta para desarrollar tu vocabulario t\xE9cnico y habilidades de persuasi\xF3n"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": seoDescription, "lang": "es", "tkey": "services/technical-sales-english", "ogImage": {
    src: technicalSalesService?.backgroundImage?.src || "/images/logos/new-york-english-og.jpg",
    alt: `${title} - Featured Image`,
    width: technicalSalesService?.backgroundImage?.width,
    height: technicalSalesService?.backgroundImage?.height
  }, "customHreflangs": [
    { lang: "en-US", href: "https://www.nyenglishteacher.com/en/services/technical-sales-english/" },
    { lang: "es-MX", href: "https://www.nyenglishteacher.com/es/servicios/ingles-para-ventas-tecnicas/" }
  ], "customCanonical": "https://www.nyenglishteacher.com/es/servicios/ingles-para-ventas-tecnicas/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })}  ${renderComponent($$result2, "Challenge", $$Challenge, { "content": challengeContent, "background": "white", "padding": "lg" })}  ${renderComponent($$result2, "MethodologySection", $$MethodologySection, { "content": metodologiaEs, "background": "light", "padding": "lg" })}  ${featuredTestimonial && renderTemplate`${renderComponent($$result2, "FeaturedTestimonial", $$FeaturedTestimonial, { "testimonial": featuredTestimonial })}`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/ingles-para-ventas-tecnicas.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/ingles-para-ventas-tecnicas.astro";
const $$url = "/es/servicios/ingles-para-ventas-tecnicas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$InglesParaVentasTecnicas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
