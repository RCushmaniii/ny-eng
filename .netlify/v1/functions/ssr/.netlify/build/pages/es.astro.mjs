import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../chunks/Base_D0GHnMc8.mjs';
import { $ as $$Hero } from '../chunks/Eyebrow_Dor9w_17.mjs';
import { $ as $$Features, a as $$QuizPromotion, b as $$TestimonialsTitan, c as $$RecentPosts, d as $$SplitPanel, s as styleGuideImage } from '../chunks/developer_kVYivP1i.mjs';
import { j as julioTestimonial, h as hugobTestimonial, a as andresTestimonial, b as andreaTestimonial } from '../chunks/andrea-testimonial_BIhra1AV.mjs';
import { h as heroSkyline } from '../chunks/new-york-city-skyline_CadNYtE4.mjs';
import { $ as $$Briefcase, b as $$Presentation, a as $$GraduationCap } from '../chunks/Presentation_Dj_9idFW.mjs';
import { $ as $$Users } from '../chunks/Users_B0SoIB-o.mjs';
export { renderers } from '../renderers.mjs';

const testimonials = [
  {
    content: "El coaching de Robert no solo mejoró mi inglés, sino que aumentó mi confianza al presentar a clientes e inversionistas. Nuestras conversaciones sobre negocios, tecnología y temas globales expandieron mi vocabulario del mundo real y mejoraron mi forma de comunicarme. ¡Un verdadero cambio de juego!",
    author: "Julio Aldana",
    position: "COO",
    company: "Smarttie",
    avatar: julioTestimonial
  },
  {
    content: "Ser fundador significa estar constantemente presentando, persuadiendo y liderando. El coaching de Robert me dio las herramientas lingüísticas —y la confianza— para hacerlo todo en inglés. Ha marcado una verdadera diferencia en la presentación de acuerdos y la conexión con mi equipo",
    author: "Hugo Blum",
    position: "CEO",
    company: "100 Ladrillos",
    avatar: hugobTestimonial
  },
  {
    content: "El coaching con Robert me ayudó a sentirme mucho más seguro y natural al hablar inglés, especialmente con clientes estadounidenses. Ahora me siento más cómodo en las conversaciones y mejor preparado para las oportunidades de networking y reuniones transfronterizas.",
    author: "Andres Guzman Rubio",
    position: "COO – México",
    company: "Driscoll's",
    avatar: andresTestimonial
  },
  {
    content: "El coaching de Robert me ayudó a elevar cómo me comunico con ejecutivos senior en Norteamérica. Soy más estratégica y persuasiva en entrevistas, presentaciones y reuniones transfronterizas, especialmente en situaciones de alto riesgo. Su enfoque es práctico, enfocado e increíblemente efectivo.",
    author: "Andrea Oliveira",
    position: "Directora de Desarrollo de Negocios",
    company: "CEVA Logistics",
    avatar: andreaTestimonial
  }
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const tkey = "home";
  const testimonialsBlock = {
    eyebrow: "Resultados Reales",
    title: "Coaching de Ingl\xE9s para Profesionales | Robert Cushman",
    description: "Ejecutivos, emprendedores y expertos de diversas industrias conf\xEDan en New York English para elevar su fluidez, confianza e impacto global.",
    testimonials,
    cta: {
      heading: "Para Ejecutivos que Lideran en Ingl\xE9s",
      description: "Comienza con una sesi\xF3n de coaching gratuita de 30 minutos para mejorar tu claridad, confianza y autoridad.",
      text: "Reservar Mi Llamada Estrat\xE9gica Gratuita",
      link: "/es/book/",
      rel: "noopener noreferrer"
    }
  };
  const seoTitle = "Coaching de Ingl\xE9s Profesional";
  const seoDescription = "Mejora tu fluidez y confianza en ingl\xE9s con coaching personalizado para ejecutivos. Clases 1-a-1 adaptadas a tu industria y objetivos espec\xEDficos.";
  const heroContent = {
    eyebrow: "Tu Ventaja de Comunicaci\xF3n Global",
    title: "Domina el Ingl\xE9s de Negocios y Avanza en tu Carrera",
    description: "Entreno a l\xEDderes internacionales para comunicarse con autoridad tranquila, claridad m\xE1s aguda y presencia ejecutiva\u2014para que puedas liderar reuniones de alto riesgo y ganar confianza m\xE1s r\xE1pido.",
    trustLine: "Confiado por l\xEDderes en empresas Fortune 500 y startups globales",
    trustLineLink: "/es/testimonios/",
    buttons: [
      {
        text: "Reserva una Consulta Privada",
        link: "/es/book/",
        variant: "primary"
      },
      {
        text: "Inicia la Evaluaci\xF3n Ejecutiva",
        link: "/es/assessments/",
        variant: "secondary"
      }
    ],
    backgroundImage: heroSkyline,
    backgroundImageMobile: heroSkyline,
    overlayOpacity: 0.3,
    fullHeight: true
  };
  const featuresSection = {
    eyebrow: "NY ENGLISH OFRECE",
    title: "Coaching de Ingl\xE9s Personalizado para Profesionales",
    description: "Ya sea que necesites mejorar tu fluidez, destacar en una entrevista o comunicarte m\xE1s eficazmente en reuniones de negocios, te ayudar\xE9 a lograrlo.",
    features: [
      {
        title: "Ingl\xE9s para Negocios y Ejecutivos",
        description: "Lidera con autoridad en salas de juntas, pitches a inversionistas y negociaciones de alto riesgo\u2014sin traducir en tu cabeza.",
        icon: $$Briefcase,
        link: "/es/quiz/executives/"
      },
      {
        title: "Ingl\xE9s para Equipos de Tecnolog\xEDa y TI",
        description: "Aumenta tu potencial salarial y crecimiento profesional comunicando ideas t\xE9cnicas claramente con equipos y clientes globales.",
        icon: $$Presentation,
        link: "/es/quiz/it-services/"
      },
      {
        title: "Ingl\xE9s para Profesionales",
        description: "Expande tu base de clientes internacional y trabaja con confianza en entornos profesionales globales\u2014m\xE9dicos, abogados, consultores.",
        icon: $$Users,
        link: "/es/quiz/professional-services/"
      },
      {
        title: "Ingl\xE9s para Situaciones de Alto Riesgo",
        description: "Domina entrevistas laborales, presenta con alto impacto y persuade a tomadores de decisiones con claridad y confianza.",
        icon: $$GraduationCap,
        link: "/es/quiz/high-stakes/"
      }
    ]
  };
  const styleGuideSection = {
    eyebrow: "Mi Enfoque de Ense\xF1anza",
    headline: "Coaching de Ingl\xE9s Personalizado y Orientado a Objetivos",
    description: "Utilizo un enfoque estructurado pero flexible, adaptado a tus necesidades profesionales. Ya sea que est\xE9s preparando una entrevista, liderando una reuni\xF3n o mejorando tu fluidez, mi coaching est\xE1 dise\xF1ado para el \xE9xito en el mundo real.",
    descriptionPoints: [
      "Lecciones construidas en torno a tu propio trabajo y metas",
      "Retroalimentaci\xF3n clara e instant\xE1nea sobre pronunciaci\xF3n, fraseo y tono",
      "Pr\xE1ctica de tareas reales (presentaciones, llamadas a clientes, informes) tal como las haces en el trabajo"
    ],
    image: {
      src: styleGuideImage,
      alt: "Sesi\xF3n de coaching de ingl\xE9s profesional"
    },
    buttons: [
      {
        text: "Explora Mi Enfoque de Coaching",
        link: "/es/about",
        variant: "primary"
      }
    ]
  };
  const recentPostsSection = {
    eyebrow: "\xDALTIMAS ENTRADAS DEL BLOG",
    title: "Perspectivas para Profesionales de Negocios",
    description: "Consejos pr\xE1cticos sobre Ingl\xE9s de Negocios, crecimiento profesional y comunicaci\xF3n efectiva.",
    button: {
      text: "Ver Todos los Art\xEDculos",
      link: "/es/blog"
    }
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "lang": "es", "tkey": tkey, "title": seoTitle, "description": seoDescription, "heroImage": heroContent.backgroundImage, "heroImageMobile": heroContent.backgroundImageMobile, "ogImage": { src: "/images/logos/new-york-english-sq-og.jpg" } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative bg-background-light"> ${renderComponent($$result2, "Hero", $$Hero, { "content": heroContent })} ${renderComponent($$result2, "Features", $$Features, { "content": featuresSection, "padding": "small", "background": "light" })} ${renderComponent($$result2, "QuizPromotion", $$QuizPromotion, { "lang": "es" })} <div class="mb-16 pb-0"> ${renderComponent($$result2, "Testimonials", $$TestimonialsTitan, { "content": testimonialsBlock, "background": "base", "padding": "small" })} </div> <div class="pt-10 border-t border-gray-200 dark:border-gray-700" style="padding-bottom: var(--spacing-small);"> ${renderComponent($$result2, "RecentPosts", $$RecentPosts, { "content": recentPostsSection, "background": "base", "postsToShow": 3 })} </div> ${renderComponent($$result2, "SplitPanel", $$SplitPanel, { "content": styleGuideSection, "imagePosition": "right", "background": "light", "padding": "base", "lang": "es" })} <!-- Stats temporarily removed --> <!-- <Stats content={sideBySideStats} background="dark" padding="base" /> --> </div> ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/index.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
