import type { ImageMetadata } from "astro";
import { serviceCategories } from "../service-categories.js";

// Import testimonial images - using the same images as English version
import emmanuelTestimonial from "../../assets/images/testimonials/emmanuel-testimonial.jpg";
import erikaTestimonial from "../../assets/images/testimonials/erika-testimonial.jpg";
// Avoid importing a malformed image through Astro's metadata pipeline; use a public image path instead
import julioTestimonial from "../../assets/images/testimonials/julio-testimonial.jpg";
import hugobTestimonial from "../../assets/images/testimonials/hugob-testimonial.jpg";
import hugolTestimonial from "../../assets/images/testimonials/hugo-l-testimonial.jpg";
import andresTestimonial from "../../assets/images/testimonials/andres-testimonial.jpg";
import karlaTestimonial from "../../assets/images/testimonials/karla-testimonial.jpg";
import andreaTestimonial from "../../assets/images/testimonials/andrea-testimonial.jpg";
import albertoTestimonial from "../../assets/images/testimonials/alberto-testimonial.jpg";
import humbertoTestimonial from "../../assets/images/testimonials/humberto-testimonial.jpg";
import ricardoTestimonial from "../../assets/images/testimonials/ricardo-testimonial.jpg";
import javierTestimonial from "../../assets/images/testimonials/javier-testimonial.jpg";
import jonathanTestimonial from "../../assets/images/testimonials/jonathan-testimonial.jpg";
import taniaTestimonial from "../../assets/images/testimonials/tania-testimonial.jpg";
import luislTestimonial from "../../assets/images/testimonials/luisl-testimonial.jpg";
import noeTestimonial from "../../assets/images/testimonials/noe-testimonial.jpg";

export interface Testimonial {
  content: string;
  shortContent?: string; // Versión abreviada opcional del contenido
  author: string;
  position: string;
  company: string;
  avatar: ImageMetadata | string;
  stars?: number;
  industries: string[]; // Array de categorías estandarizadas
  slug: string;
  headline?: string;
  avatarSize?: "sm" | "md" | "lg";
  link?: string;
  linkText?: string;
  status?: "published" | "draft";
}

export const testimonials: Testimonial[] = [
  {
    content:
      "El coaching de Robert no solo mejoró mi inglés, sino que aumentó mi confianza al presentar a clientes e inversionistas. Nuestras conversaciones sobre negocios, tecnología y temas globales expandieron mi vocabulario del mundo real y mejoraron mi forma de comunicarme. ¡Un verdadero cambio de juego!",
    author: "Julio Aldana",
    position: "COO",
    company: "Smarttie",
    avatar: julioTestimonial,
    stars: 5,
    industries: ["executive-english", "startup-founders"],
    slug: "julio-aldana-smarttie",
    headline:
      "De bueno a excelente: Cómo el coaching transformó mi comunicación de liderazgo",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-fundadores-de-startups/",
    linkText: "👉 Coaching de Inglés para Fundadores de Startups",
    status: "published",
  },
  {
    content:
      "Ser fundador significa estar constantemente presentando, persuadiendo y liderando. El coaching de Robert me dio las herramientas lingüísticas —y la confianza— para hacerlo todo en inglés. Ha marcado una verdadera diferencia en la presentación de acuerdos y la conexión con mi equipo",
    author: "Hugo Blum",
    position: "CEO",
    company: "100 Ladrillos",
    avatar: hugobTestimonial,
    stars: 5,
    industries: ["executive-english", "startup-founders"],
    slug: "hugo-blum-100-ladrillos",
    headline: "Comunicación clara para liderar equipos globales",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-fundadores-de-startups",
    linkText: "👉 Coaching de Inglés para Fundadores y CEOs de Startups",
    status: "published",
  },
  {
    content:
      "El coaching con Robert me ayudó a sentirme mucho más seguro y natural al hablar inglés, especialmente con clientes estadounidenses. Ahora me siento más cómodo en las conversaciones y mejor preparado para las oportunidades de networking y reuniones transfronterizas.",
    author: "Andres Guzman Rubio",
    position: "COO – México",
    company: "Driscoll's",
    avatar: andresTestimonial,
    stars: 5,
    industries: ["executive-english"],
    slug: "andres-guzman-driscolls",
    headline: "Dominando el inglés técnico para presentaciones de alto nivel",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-ejecutivos/",
    linkText: "👉 Coaching de Inglés para Ejecutivos",
    status: "published",
  },
  {
    content: `Trabajar con Robert ha sido uno de los pasos más impactantes que he dado para mi comunicación profesional. Como CTO, ya opero en entornos técnicos y estratégicos, pero su coaching me dio las herramientas para proyectar verdadera presencia ejecutiva en inglés. Aprendí a estructurar presentaciones con impacto, manejar situaciones de presentación improvisada bajo presión y liderar conversaciones con claridad y confianza. El enfoque de Robert es práctico, exigente y siempre alineado con mi rol como directivo global. Ahora me siento mejor preparado para representar a mi empresa en foros internacionales y para posicionarme en futuras oportunidades de liderazgo.`,
    shortContent:
      "Trabajar con Robert ha sido uno de los pasos más impactantes para mi comunicación profesional como CTO—su coaching práctico me ayudó a estructurar presentaciones con impacto, manejar situaciones improvisadas y liderar con confianza…",
    author: "Luis Manuel Becerra Lucatero",
    position: "Director de Tecnología (CTO)",
    company: "Skysense",
    avatar: luislTestimonial,
    stars: 5,
    industries: ["executive-english", "tech-english", "high-stakes-english"],
    slug: "luis-manuel-becerra-lucatero-skysense",
    headline:
      "Presencia Ejecutiva y Comunicación de Alto Impacto para un CTO Global",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-ejecutivos/",
    linkText: "👉 Coaching de Inglés para Ejecutivos",
    status: "published",
  },
  {
    content: `Más que un coach de inglés, Robert ha sido un verdadero coach de negocios. Cada sesión combina el idioma con herramientas prácticas que impulsan mi crecimiento profesional.`,
    author: "Noé Martínez",
    position: "Director de Ventas",
    company: "Grupo Kopar",
    avatar: noeTestimonial,
    stars: 5,
    industries: ["executive-english", "high-stakes-english"],
    slug: "noe-martinez-high-stakes-english",
    headline:
      "Combinando Idioma y Coaching de Negocios para un Crecimiento Real",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-presentaciones/",
    linkText: "👉 Coaching de Inglés para Situaciones Críticas",
    status: "published",
  },
  {
    content:
      "El coaching de Robert me ayudó a elevar mi forma de comunicarme con ejecutivos senior en toda América del Norte. Soy más estratégica y persuasiva en entrevistas, presentaciones y reuniones transfronterizas, especialmente en situaciones de alto riesgo. Su enfoque es práctico, enfocado e increíblemente efectivo.",
    author: "Andrea Oliveira",
    position: "Directora de Desarrollo de Negocios",
    company: "CEVA Logistics",
    avatar: andreaTestimonial,
    stars: 5,
    industries: [
      "logistics-english",
      "executive-english",
      "high-stakes-english",
    ],
    slug: "andrea-oliveira-ceva-logistics",
    headline: "Superando la barrera del idioma en ventas técnicas",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-presentaciones/",
    linkText: "👉 Coaching de Inglés para Situaciones Críticas",
    status: "published",
  },
  {
    content:
      "Tomar clases con Robert ha sido sin duda una experiencia muy enriquecedora. Necesitaba asistir a reuniones con ejecutivos de alto nivel de clientes para presentar propuestas, soluciones o explicar información relacionada con la logística. Mi vocabulario limitado y áreas como la pronunciación, comprensión auditiva, entonación y habilidades de presentación requerían una mejora significativa para mi crecimiento profesional.\n\nEl coaching de Robert no solo me ha permitido superar estos desafíos, sino que también me ha dado la confianza para presentarme de manera más profesional. Robert me ha brindado orientación sobre cómo presentar y publicar mi trabajo en un entorno corporativo y también me ha introducido y facilitado el aprendizaje de muchos temas de vanguardia que han impactado positivamente tanto mi vida profesional como personal.",
    shortContent:
      "Tomar clases con Robert ha sido sin duda una experiencia muy enriquecedora. Necesitaba asistir a reuniones con ejecutivos de alto nivel de clientes para presentar propuestas, soluciones...",
    author: "Karla Bernal",
    position: "Gerente Sr. de Logística",
    company: "Sanmina Corporation",
    avatar: karlaTestimonial,
    stars: 5,
    industries: ["executive-english", "logistics-english"],
    slug: "karla-bernal-sanmina-corporation",
    headline: "Superando el miedo a hablar en público en inglés",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-logistica/",
    linkText: "👉 Coaching de Inglés para Logística",
    status: "published",
  },
  {
    content:
      "Con el apoyo de Robert, me volví más fluida y segura al hablar inglés. Esto me ha ayudado a atender a pacientes internacionales de manera más efectiva y a comunicarme claramente durante discusiones médicas y viajes. He notado que mis pacientes que hablan inglés se sienten más cómodos y confían más en mí.",
    author: "Dra. Erika Itzel",
    position: "Médico",
    company: "",
    avatar: erikaTestimonial,
    stars: 5,
    industries: ["professional-english"],
    slug: "dra-erika-itzel-medico",
    headline: "Dominando las presentaciones técnicas en inglés",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-profesionales/",
    linkText: "👉 Coaching de Inglés para Profesionales",
    status: "published",
  },
  {
    content:
      "Robert me ayudó a fortalecer mi comunicación en inglés para interacciones importantes con clientes. Ahora me siento seguro manejando conversaciones legales, explicando problemas complejos y construyendo confianza con clientes estadounidenses. Ha marcado una diferencia significativa en mi trabajo diario asesorando a clientes internacionales.",
    author: "Emmanuel Ibarra Castillo",
    position: "Socio",
    company: "Ramos, Ripoll & Schuster",
    avatar: emmanuelTestimonial,
    stars: 5,
    industries: ["professional-english"],
    slug: "emmanuel-ibarra-castillo-ramos-ripoll-schuster",
    headline: "Comunicación Legal Segura con Clientes Internacionales",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-profesionales/",
    linkText: "👉 Coaching de Inglés para Profesionales Médicos y Legales",
    status: "published",
  },
  {
    content:
      "Trabajar con Robert me dio un dominio mucho más fuerte del inglés de negocios. Dirijo reuniones con más confianza, me comunico más claramente con socios internacionales y obtengo mejores resultados en general. Internamente, nuestra comunicación es más fluida, y nuestros proveedores notan la diferencia.",
    author: "Alberto Escobar USA",
    position: "COO",
    company: "Terramar Brands",
    avatar: albertoTestimonial,
    stars: 5,
    industries: ["executive-english"],
    slug: "alberto-escobar-terramar-brands",
    headline: "Comunicación efectiva para líderes técnicos",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-ejecutivos/",
    linkText: "👉 Coaching de Inglés para Ejecutivos",
    status: "published",
  },
  {
    content:
      "Me complace recomendar a Robert como un profesor de idiomas y coach en comunicación ejecutiva excepcional. Bajo su guía, pasé de sentirme inseguro en conversaciones de alto nivel a hablar con seguridad en reuniones de alta dirección y presentar actualizaciones complejas con claridad y persuasión.\n\nLa profunda experiencia corporativa de Robert hizo que cada sesión fuera mucho más allá de la gramática y la pronunciación: simuló escenarios reales de sala de juntas, anticipó preguntas difíciles y me entrenó para responder de forma concisa y con impacto. Gracias a su coaching, mi fluidez, pronunciación y presencia general han mejorado notablemente, y ahora enfrento conversaciones críticas con verdadera confianza.\n\nRobert será un recurso excepcional para cualquier persona que busque llevar su comunicación profesional al siguiente nivel.",

    shortContent:
      "Me complace recomendar a Robert como un profesor de idiomas y coach en comunicación ejecutiva excepcional. Bajo su guía, pasé de sentirme inseguro en conversaciones de alto nivel a hablar con seguridad en reuniones de alta dirección y presentar actualizaciones complejas con claridad y persuasión...",

    author: "Hugo Lopez",
    position: "Gerente Senior de Programas",
    company: "Continental",
    avatar: hugolTestimonial,
    stars: 5,
    industries: ["executive-english", "high-stakes-english"],
    slug: "hugo-lopez-continental",
    headline: "Elevando mi comunicación ejecutiva en ingeniería global",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-presentaciones/",
    linkText: "👉 Coaching de Inglés para Situaciones Críticas",
    status: "published",
  },

  {
    content:
      "Trabajar con Robert me ha ayudado a mejorar cómo me comunico en situaciones de ventas técnicas. A menudo explico sistemas de automatización, programación de PLC y especificaciones de productos a clientes internacionales, y quería sonar más fluido y seguro.\n\nCon el coaching de Robert, me he vuelto más natural en las conversaciones, mejor estructurando mis explicaciones y más persuasivo en demostraciones y seguimientos. Ha marcado una clara diferencia en cómo interactúo con los clientes y represento a mi empresa en inglés.",
    shortContent:
      "Trabajar con Robert me ha ayudado a mejorar cómo me comunico en situaciones de ventas técnicas. A menudo explico sistemas de automatización, programación de PLC y especificaciones de productos a clientes internacionales...",
    author: "Ricardo Mendoza",
    position: "Ingeniero de Automatización y Control",
    company: "Mountz Torque",
    avatar: ricardoTestimonial,
    stars: 5,
    industries: ["tech-english"],
    slug: "ricardo-mendoza-mountz-torque",
    headline: "Comunicación médica precisa en entornos internacionales",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-tecnologia/",
    linkText: "👉 Coaching de Inglés para Tecnología",
    status: "draft",
  },
  {
    content:
      "Las lecciones con Robert me han ayudado a desarrollar confianza al hablar en reuniones con clientes y prospectos de habla inglesa. También me han ayudado a expandir mi vocabulario y corregir errores gramaticales.",
    author: "Humberto Grimaldo",
    position: "Fundador y Presidente",
    company: "TC Logistics",
    avatar: humbertoTestimonial,
    stars: 5,
    industries: ["executive-english", "logistics-english"],
    slug: "humberto-grimaldo-tc-logistics",
    headline: "Optimizando la comunicación en logística internacional",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-logistica/",
    linkText: "👉 Coaching de Inglés para Logística",
    status: "published",
  },
  {
    content:
      "Encontré las clases de Robert bien estructuradas y dinámicas. Utiliza un enfoque situacional que resulta en conocimiento práctico que se puede aplicar en el día a día. Además, su capacidad para adaptarse a mi nivel me mantiene desafiado y en constante mejora.",
    author: "Javier Ramírez",
    position: "Gerente de Programas",
    company: "Sophia",
    avatar: javierTestimonial,
    stars: 5,
    industries: ["executive-english", "professional-english"],
    slug: "javier-ramirez-sophia",
    headline: "Inglés Fluido y Seguro para la Gestión de Proyectos Globales",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-ejecutivos/",
    linkText: "👉 Coaching de Inglés para Ejecutivos",
    status: "published",
  },
  {
    content:
      "El principal desafío que enfrenté cuando comencé a trabajar en entornos globales fue la falta de fluidez para expresar mis ideas técnicas de manera efectiva tanto a líderes como a colegas de diferentes nacionalidades. Robert me ha estado entrenando, y hemos practicado varios escenarios juntos. Ahora me siento mucho más fluido y seguro. He podido movilizar equipos multinacionales y alinearlos en torno a estrategias que tienen sentido para todos.",
    shortContent:
      "El principal desafío que enfrenté cuando comencé a trabajar en entornos globales fue la falta de fluidez para expresar mis ideas técnicas de manera efectiva tanto a líderes como a colegas de diferentes nacionalidades...",
    author: "Jonathan Emmaus Campos Navarro",
    position: "Líder de Datos",
    company: "Infosys",
    avatar: jonathanTestimonial,
    stars: 5,
    industries: ["tech-english"],
    slug: "jonathan-emmaus-infosys",
    headline: "Dominando las entrevistas técnicas en inglés",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-tecnologia/",
    linkText: "👉 Coaching de Inglés para Tecnología",
    status: "published",
  },
  {
    content: `Antes de trabajar con Robert, a veces me sentía insegura al presentar en inglés durante llamadas importantes y reuniones en tiempo real, especialmente con clientes internacionales.
  
  Su coaching me ha ayudado a generar mayor confianza al hablar, expandir mi vocabulario y dar estructura a mis ideas. Su enfoque es práctico y moderno, utilizando ejemplos de la vida real que hacen que el aprendizaje sea interesante.
  
  Ahora, me siento más segura y fluida en mi comunicación y tengo un mejor desempeño en discusiones técnicas y negociaciones.`,
    shortContent:
      "Antes de trabajar con Robert, a veces me sentía insegura al presentar en inglés durante llamadas importantes y reuniones en tiempo real con clientes internacionales…",
    author: "Tania Ruelas",
    position: "Gerente de Cuentas Clave de Calidad",
    company: "FORVIA HELLA",
    avatar: taniaTestimonial,
    stars: 5,
    industries: ["tech-english", "executive-english"],
    slug: "tania-ruelas-forvia-hella",
    headline: "Inglés fluido para clientes globales",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-tecnologia/",
    linkText: "👉 Coaching de Inglés para Ingenieros",
    status: "published",
  },
] as const;

// Filter published testimonials
export const publishedTestimonials = testimonials.filter(
  (t) => t.status !== "draft",
);

// Group testimonials by industry for easier filtering using the standardized service categories
export const testimonialsByIndustry = {
  all: publishedTestimonials,
  "executive-english": publishedTestimonials.filter((t) =>
    t.industries.includes("executive-english"),
  ),
  "startup-founders": publishedTestimonials.filter((t) =>
    t.industries.includes("startup-founders"),
  ),
  "tech-english": publishedTestimonials.filter((t) =>
    t.industries.includes("tech-english"),
  ),
  "logistics-english": publishedTestimonials.filter((t) =>
    t.industries.includes("logistics-english"),
  ),
  "professional-english": publishedTestimonials.filter((t) =>
    t.industries.includes("professional-english"),
  ),
  "high-stakes-english": publishedTestimonials.filter((t) =>
    t.industries.includes("high-stakes-english"),
  ),
  "interview-preparation": publishedTestimonials.filter((t) =>
    t.industries.includes("interview-preparation"),
  ),
} as const;

// Updated industry labels using standardized categories from service-categories.ts
export const industryLabels = {
  all: "Todas las industrias",
  "executive-english": serviceCategories[0].esLabel,
  "startup-founders": serviceCategories[1].esLabel,
  "tech-english": serviceCategories[2].esLabel,
  "logistics-english": serviceCategories[3].esLabel,
  "professional-english": serviceCategories[4].esLabel,
  "interview-preparation": serviceCategories[5].esLabel,
  "high-stakes-english": "Inglés para Situaciones Críticas",
} as const;
