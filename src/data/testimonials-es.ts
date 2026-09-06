import type { ImageMetadata } from "astro";

export interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
  avatar: ImageMetadata;
}

import andresTestimonial from "../assets/images/testimonials/andres-testimonial.jpg";
import hugolTestimonial from "../assets/images/testimonials/hugo-l-testimonial.jpg";
import karlaTestimonial from "../assets/images/testimonials/karla-testimonial.jpg";
import andreaTestimonial from "../assets/images/testimonials/andrea-testimonial.jpg";

// Estas cuatro tarjetas deben coincidir, en orden, con las empresas nombradas en
// la línea de confianza del hero en src/pages/es/index.astro. Si cambias una,
// cambia la otra: nombrar una empresa que no aparece abajo destruye la prueba.
export const testimonials: Testimonial[] = [
  {
    content:
      "El coaching con Robert me ayudó a sentirme mucho más seguro y natural al hablar inglés, especialmente con clientes estadounidenses. Ahora me siento <strong>más cómodo en las conversaciones y mejor preparado para reuniones transfronterizas.</strong>",
    author: "Andres Guzman Rubio",
    position: "COO – México",
    company: "Driscoll's",
    avatar: andresTestimonial,
  },
  {
    content:
      "Pasé de sentirme inseguro en conversaciones de alto nivel a <strong>hablar con seguridad en reuniones de alta dirección</strong> y presentar actualizaciones complejas con claridad y persuasión. Gracias a su coaching, mi fluidez, pronunciación y presencia general han mejorado notablemente, y ahora enfrento <strong>conversaciones críticas con verdadera confianza.</strong>",
    author: "Hugo Lopez",
    position: "Gerente de Testing y EPM",
    company: "Continental",
    avatar: hugolTestimonial,
  },
  {
    content:
      "Necesitaba asistir a reuniones con ejecutivos de alto nivel de clientes para presentar propuestas, soluciones o explicar información relacionada con la logística. El coaching de Robert no solo me ha permitido superar estos desafíos, sino que también <strong>me ha dado la confianza para presentarme de manera más profesional.</strong>",
    author: "Karla Bernal",
    position: "Gerente Sr. de Logística",
    company: "Sanmina Corporation",
    avatar: karlaTestimonial,
  },
  {
    content:
      "El coaching de Robert me ayudó a elevar cómo me comunico con ejecutivos senior en Norteamérica. Soy <strong>más estratégica y persuasiva en entrevistas, presentaciones y reuniones transfronterizas</strong>, especialmente en situaciones de alto riesgo. Su enfoque es práctico, enfocado e increíblemente efectivo.",
    author: "Andrea Oliveira",
    position: "Directora de Desarrollo de Negocios",
    company: "CEVA Logistics",
    avatar: andreaTestimonial,
  },
];
