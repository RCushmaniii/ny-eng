import type { ImageMetadata } from 'astro';

// Import testimonial images - using the same images as English version
import emmanuelTestimonial from '../../assets/images/testimonials/emmanuel-testimonial.jpeg';
import erikaTestimonial from '../../assets/images/testimonials/erika-testimonial.jpg';
import julioTestimonial from '../../assets/images/testimonials/julio-testimonial.jpg';
import hugoTestimonial from '../../assets/images/testimonials/hugo-testimonial.jpeg';
import hugolTestimonial from '../../assets/images/testimonials/hugo-l-testimonial.jpg';
import andresTestimonial from '../../assets/images/testimonials/andres-testimonial.jpeg';
import karlaTestimonial from '../../assets/images/testimonials/karla-testimonial.jpg';
import andreaTestimonial from '../../assets/images/testimonials/andrea-testimonial.jpeg';
import albertoTestimonial from '../../assets/images/testimonials/alberto-testimonial.jpg';
import humbertoTestimonial from '../../assets/images/testimonials/humberto-testimonial.jpg';
import ricardoTestimonial from '../../assets/images/testimonials/ricardo-testimonial.jpg';
import javierTestimonial from '../../assets/images/testimonials/javier-testimonial.jpg';
import jonathanTestimonial from '../../assets/images/testimonials/jonathan-testimonial.jpg';

export interface Testimonial {
  content: string;
  shortContent?: string; // Versión abreviada opcional del contenido
  author: string;
  position: string;
  company: string;
  avatar: ImageMetadata;
  stars?: number;
  industry: string;
  slug: string;
  headline?: string;
  avatarSize?: 'sm' | 'md' | 'lg';
  link?: string;
  linkText?: string;
  status?: 'published' | 'draft';
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
    industry: "founders",
    slug: "julio-aldana-smarttie",
    headline: "De bueno a excelente: Cómo el coaching transformó mi comunicación de liderazgo",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-fundadores-de-startups",
    linkText: "👉 Coaching de Inglés para Fundadores de Startups",
    status: "published"
  },
  {
    content:
      "Ser fundador significa estar constantemente presentando, persuadiendo y liderando. El coaching de Robert me dio las herramientas lingüísticas —y la confianza— para hacerlo todo en inglés. Ha marcado una verdadera diferencia en la presentación de acuerdos y la conexión con mi equipo",
    author: "Hugo Blum",
    position: "CEO",
    company: "100 Ladrillos",
    avatar: hugoTestimonial,
    stars: 5,
    industry: "c-level-executives",
    slug: "hugo-blum-100-ladrillos",
    headline: "Comunicación clara para liderar equipos globales",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-ejecutivos",
    linkText: "👉 Coaching de Inglés para Ejecutivos",
    status: "published"
  },
  {
    content:
      "El coaching con Robert me ayudó a sentirme mucho más seguro y natural al hablar inglés, especialmente con clientes estadounidenses. Ahora me siento más cómodo en las conversaciones y mejor preparado para las oportunidades de networking y reuniones transfronterizas.",
    author: "Andres Guzman Rubio",
    position: "COO – México",
    company: "Driscoll's",
    avatar: andresTestimonial,
    stars: 5,
    industry: "c-level-executives",
    slug: "andres-guzman-driscolls",
    headline: "Dominando el inglés técnico para presentaciones de alto nivel",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-tecnologia",
    linkText: "👉 Coaching de Inglés para Tecnología",
    status: "published"
  },
  {
    content:
      "El coaching de Robert me ayudó a elevar mi forma de comunicarme con ejecutivos senior en toda América del Norte. Soy más estratégica y persuasiva en entrevistas, presentaciones y reuniones transfronterizas, especialmente en situaciones de alto riesgo. Su enfoque es práctico, enfocado e increíblemente efectivo.",
    author: "Andrea Oliveira",
    position: "Directora de Desarrollo de Negocios",
    company: "CEVA Logistics",
    avatar: andreaTestimonial,
    stars: 5,
    industry: "logistics",
    slug: "andrea-oliveira-ceva-logistics",
    headline: "Superando la barrera del idioma en ventas técnicas",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-ventas-tecnicas",
    linkText: "👉 Coaching de Inglés para Ventas Técnicas",
    status: "published"
  },
  {
    content:
      "Tomar clases con Robert ha sido sin duda una experiencia muy enriquecedora. Necesitaba asistir a reuniones con ejecutivos de alto nivel de clientes para presentar propuestas, soluciones o explicar información relacionada con la logística. Mi vocabulario limitado y áreas como la pronunciación, comprensión auditiva, entonación y habilidades de presentación requerían una mejora significativa para mi crecimiento profesional.\n\nEl coaching de Robert no solo me ha permitido superar estos desafíos, sino que también me ha dado la confianza para presentarme de manera más profesional. Robert me ha brindado orientación sobre cómo presentar y publicar mi trabajo en un entorno corporativo y también me ha introducido y facilitado el aprendizaje de muchos temas de vanguardia que han impactado positivamente tanto mi vida profesional como personal.",
    shortContent: "Tomar clases con Robert ha sido sin duda una experiencia muy enriquecedora. Necesitaba asistir a reuniones con ejecutivos de alto nivel de clientes para presentar propuestas, soluciones...",
    author: "Karla Bernal",
    position: "Gerente Sr. de Logística",
    company: "Sanmina Corporation",
    avatar: karlaTestimonial,
    stars: 5,
    industry: "logistics",
    slug: "karla-bernal-sanmina-corporation",
    headline: "Superando el miedo a hablar en público en inglés",
    avatarSize: "md",
    link: "/es/servicios/hablar-en-publico",
    linkText: "👉 Coaching de Inglés para Hablar en Público",
    status: "published"
  },
  {
    content:
      "Con el apoyo de Robert, me volví más fluida y segura al hablar inglés. Esto me ha ayudado a atender a pacientes internacionales de manera más efectiva y a comunicarme claramente durante discusiones médicas y viajes. He notado que mis pacientes que hablan inglés se sienten más cómodos y confían más en mí.",
    author: "Dra. Erika Itzel",
    position: "Médico",
    company: "",
    avatar: erikaTestimonial,
    stars: 5,
    industry: "doctors",
    slug: "dra-erika-itzel-medico",
    headline: "Dominando las presentaciones técnicas en inglés",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-tecnologia",
    linkText: "👉 Coaching de Inglés para Tecnología",
    status: "published"
  },
  {
    content:
      "Robert me ayudó a fortalecer mi comunicación en inglés para interacciones importantes con clientes. Ahora me siento seguro manejando conversaciones legales, explicando problemas complejos y construyendo confianza con clientes estadounidenses. Ha marcado una diferencia significativa en mi trabajo diario asesorando a clientes internacionales.",
    author: "Emmanuel Ibarra Castillo",
    position: "Socio",
    company: "Ramos, Ripoll & Schuster",
    avatar: emmanuelTestimonial,
    stars: 5,
    industry: "attorneys",
    slug: "emmanuel-ibarra-castillo-ramos-ripoll-schuster",
    headline: "Mejorando la comunicación con equipos globales",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-logistica",
    linkText: "👉 Coaching de Inglés para Logística",
    status: "draft"
  },
  {
    content:
      "Trabajar con Robert me dio un dominio mucho más fuerte del inglés de negocios. Dirijo reuniones con más confianza, me comunico más claramente con socios internacionales y obtengo mejores resultados en general. Internamente, nuestra comunicación es más fluida, y nuestros proveedores notan la diferencia.",
    author: "Alberto Escobar USA",
    position: "COO",
    company: "Terramar Brands",
    avatar: albertoTestimonial,
    stars: 5,
    industry: "c-level-executives",
    slug: "alberto-escobar-terramar-brands",
    headline: "Comunicación efectiva para líderes técnicos",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-tecnologia",
    linkText: "👉 Coaching de Inglés para Tecnología",
    status: "published"
  },
  {
    content: "Trabajar con Robert ha sido una experiencia transformadora para mi comunicación profesional. En mi rol, regularmente lidero equipos de ingeniería multifuncionales y gestiono proyectos de alto impacto que involucran a clientes y proveedores internacionales. Antes del coaching, luchaba con la fluidez y claridad durante las reuniones ejecutivas, particularmente al presentar actualizaciones técnicas complejas o planes estratégicos en inglés.\n\nEl coaching de Robert me ayudó a mejorar significativamente mi pronunciación, fluidez y confianza al hablar en situaciones de alta presión. Su enfoque personalizado me ayudó a estructurar mis mensajes con más claridad, adaptar mi tono a diferentes audiencias y expresar ideas con más precisión e impacto. Estas mejoras han hecho que mi participación en reuniones globales sea más efectiva y han elevado la forma en que me comunico con la alta dirección y las partes interesadas en diferentes países.\n\nMás allá de las habilidades lingüísticas, Robert también me presentó marcos clave de comunicación empresarial que he integrado en mis prácticas de liderazgo de equipo e informes. Las mejoras en mi forma de hablar y presentar han tenido un efecto notable en la forma en que lidero y son reconocidas por colegas y clientes por igual.",
    shortContent: "Trabajar con Robert ha sido una experiencia transformadora para mi comunicación profesional. En mi rol, regularmente lidero equipos de ingeniería multifuncionales y gestiono proyectos de alto impacto que involucran a clientes y proveedores internacionales...",
    author: "Hugo Lopez",
    position: "Gerente Senior de Programas",
    company: "Continental",
    avatar: hugolTestimonial,
    stars: 5,
    industry: "business",
    slug: "hugo-lopez-continental",
    headline: "Elevando mi carrera con inglés técnico especializado",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-ventas-tecnicas",
    linkText: "👉 Coaching de Inglés para Ventas Técnicas",
    status: "draft"
  },
  {
    content: "Trabajar con Robert me ha ayudado a mejorar cómo me comunico en situaciones de ventas técnicas. A menudo explico sistemas de automatización, programación de PLC y especificaciones de productos a clientes internacionales, y quería sonar más fluido y seguro.\n\nCon el coaching de Robert, me he vuelto más natural en las conversaciones, mejor estructurando mis explicaciones y más persuasivo en demostraciones y seguimientos. Ha marcado una clara diferencia en cómo interactúo con los clientes y represento a mi empresa en inglés.",
    shortContent: "Trabajar con Robert me ha ayudado a mejorar cómo me comunico en situaciones de ventas técnicas. A menudo explico sistemas de automatización, programación de PLC y especificaciones de productos a clientes internacionales...",
    author: "Ricardo Mendoza",
    position: "Ingeniero de Automatización y Control",
    company: "Mountz Torque",
    avatar: ricardoTestimonial,
    stars: 5,
    industry: "engineering",
    slug: "ricardo-mendoza-mountz-torque",
    headline: "Comunicación médica precisa en entornos internacionales",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-medicos",
    linkText: "👉 Coaching de Inglés para Médicos",
    status: "draft"
  },
  {
    content:
      "Las lecciones con Robert me han ayudado a desarrollar confianza al hablar en reuniones con clientes y prospectos de habla inglesa. También me han ayudado a expandir mi vocabulario y corregir errores gramaticales.",
    author: "Humberto Grimaldo",
    position: "Fundador y Presidente",
    company: "TC Logistics",
    avatar: humbertoTestimonial,
    stars: 5,
    industry: "logistics",
    slug: "humberto-grimaldo-tc-logistics",
    headline: "Optimizando la comunicación en logística internacional",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-logistica",
    linkText: "👉 Coaching de Inglés para Logística",
    status: "published"
  },
  {
    content: "Robert me ayudó a fortalecer mi comunicación en inglés para interacciones de gestión de proyectos. Ahora me siento seguro manejando conversaciones legales, explicando problemas complejos y construyendo confianza con colegas estadounidenses. Ha marcado una diferencia significativa en mi trabajo internacional diario.",
    shortContent: "Robert me ayudó a fortalecer mi comunicación en inglés para interacciones de gestión de proyectos. Ahora me siento seguro manejando conversaciones legales y construyendo confianza con colegas estadounidenses...",
    author: "Javier Ramírez",
    position: "Gerente de Programas",
    company: "Sophia",
    avatar: javierTestimonial,
    stars: 5,
    industry: "business",
    slug: "javier-ramirez-sophia",
    headline: "De nervioso a confiado en entrevistas técnicas",
    avatarSize: "md",
    link: "/es/servicios/preparacion-para-entrevistas",
    linkText: "👉 Coaching para Preparación de Entrevistas",
    status: "draft"
  },
  {
    content: "El principal desafío que enfrenté cuando comencé a trabajar en entornos globales fue la falta de fluidez para expresar mis ideas técnicas de manera efectiva tanto a líderes como a colegas de diferentes nacionalidades. Robert me ha estado entrenando, y hemos practicado varios escenarios juntos. Ahora me siento mucho más fluido y seguro. He podido movilizar equipos multinacionales y alinearlos en torno a estrategias que tienen sentido para todos.",
    shortContent: "El principal desafío que enfrenté cuando comencé a trabajar en entornos globales fue la falta de fluidez para expresar mis ideas técnicas de manera efectiva tanto a líderes como a colegas de diferentes nacionalidades...",
    author: "Jonathan Emmaus Campos Navarro",
    position: "Líder de Datos",
    company: "Infosys",
    avatar: jonathanTestimonial,
    stars: 5,
    industry: "technology",
    slug: "jonathan-emmaus-infosys",
    headline: "Dominando las entrevistas técnicas en inglés",
    avatarSize: "md",
    link: "/es/servicios/preparacion-para-entrevistas",
    linkText: "👉 Coaching para Preparación de Entrevistas",
    status: "published"
  },
] as const;

// Filter published testimonials
const publishedTestimonials = testimonials.filter(t => t.status !== "draft");

// Group testimonials by industry for easier filtering
export const testimonialsByIndustry = {
  "all": publishedTestimonials,
  "founders": publishedTestimonials.filter(t => t.industry === "founders"),
  "c-level-executives": publishedTestimonials.filter(t => t.industry === "c-level-executives"),
  "logistics": publishedTestimonials.filter(t => t.industry === "logistics"),
  // "attorneys": publishedTestimonials.filter(t => t.industry === "attorneys"),
  "doctors": publishedTestimonials.filter(t => t.industry === "doctors"),
  "it-projects": publishedTestimonials.filter(t => t.industry === "it-projects"),
  // "automotive": publishedTestimonials.filter(t => t.industry === "automotive"),
  "business": publishedTestimonials.filter(t => t.industry === "business"),
  "engineering": publishedTestimonials.filter(t => t.industry === "engineering"),
  "technology": publishedTestimonials.filter(t => t.industry === "technology"),
} as const;

// Industry labels for the filter dropdown
export const industryLabels = {
  "all": "Todas las industrias",
  "founders": "Fundadores y emprendedores",
  "c-level-executives": "Ejecutivos de nivel C",
  "logistics": "Profesionales de logística",
  // "attorneys": "Abogados y profesionales legales",
  "doctors": "Médicos y profesionales de la salud",
  "it-projects": "Gerentes de TI y proyectos",
  // "automotive": "Profesionales automotrices",
  "business": "Líderes empresariales",
  "engineering": "Ingenieros",
  "technology": "Profesionales de tecnología"
} as const;
