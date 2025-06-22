import type { ImageMetadata } from 'astro';

// Import testimonial images - using the same images as English version
import emmanuelTestimonial from '../../assets/images/testimonials/emmanuel-testimonial.jpeg';
import erikaTestimonial from '../../assets/images/testimonials/erika-testimonial.jpg';
import julioTestimonial from '../../assets/images/testimonials/julio-testimonial.jpg';
import hugoTestimonial from '../../assets/images/testimonials/hugo-testimonial.jpeg';
import andresTestimonial from '../../assets/images/testimonials/andres-testimonial.jpeg';
import andreaTestimonial from '../../assets/images/testimonials/andrea-testimonial.jpeg';
import karlaTestimonial from '../../assets/images/testimonials/karla-testimonial.jpg';
import albertoTestimonial from '../../assets/images/testimonials/alberto-testimonial.jpg';

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
    link: "/es/casos-de-exito/founders",
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
    headline: "Presentando con confianza: El viaje de un CEO hacia el dominio del inglés",
    avatarSize: "md",
    link: "/es/casos-de-exito/c-level-executives",
    linkText: "👉 Coaching de Inglés para Ejecutivos de Nivel C",
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
    headline: "Construyendo confianza transfronteriza: Mi viaje ejecutivo en inglés",
    avatarSize: "md",
    link: "/es/casos-de-exito/c-level-executives",
    linkText: "👉 Coaching de Inglés para Ejecutivos de Nivel C",
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
    headline: "Dominando la comunicación empresarial de alto nivel en logística",
    avatarSize: "md",
    link: "/es/casos-de-exito/logistica",
    linkText: "👉 Coaching de Inglés para Profesionales de Logística",
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
    headline: "Elevando habilidades de comunicación ejecutiva en logística global",
    avatarSize: "md",
    link: "/es/casos-de-exito/logistica",
    linkText: "👉 Coaching de Inglés para Profesionales de Logística",
    status: "published"
  }
] as const;

// Filter published testimonials
const publishedTestimonials = testimonials.filter(t => t.status !== "draft");

// Group testimonials by industry for easier filtering
export const testimonialsByIndustry = {
  "all": publishedTestimonials,
  "founders": publishedTestimonials.filter(t => t.industry === "founders"),
  "c-level-executives": publishedTestimonials.filter(t => t.industry === "c-level-executives"),
  "logistics": publishedTestimonials.filter(t => t.industry === "logistics"),
  "attorneys": publishedTestimonials.filter(t => t.industry === "attorneys"),
  "doctors": publishedTestimonials.filter(t => t.industry === "doctors"),
  "it-projects": publishedTestimonials.filter(t => t.industry === "it-projects"),
  "automotive": publishedTestimonials.filter(t => t.industry === "automotive"),
  "business": publishedTestimonials.filter(t => t.industry === "business")
} as const;

// Industry labels for the filter dropdown
export const industryLabels = {
  "all": "Todas las industrias",
  "founders": "Fundadores y emprendedores",
  "c-level-executives": "Ejecutivos de nivel C",
  "logistics": "Profesionales de logística",
  "attorneys": "Abogados y profesionales legales",
  "doctors": "Médicos y profesionales de la salud",
  "it-projects": "Gerentes de TI y proyectos",
  "automotive": "Profesionales automotrices",
  "business": "Líderes empresariales"
} as const;
