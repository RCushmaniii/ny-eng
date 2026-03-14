import type { ImageMetadata } from "astro";

export interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
  avatar: ImageMetadata;
}

import julioTestimonial from "../assets/images/testimonials/julio-testimonial.jpg";
import hugobTestimonial from "../assets/images/testimonials/hugob-testimonial.jpg";
import andresTestimonial from "../assets/images/testimonials/andres-testimonial.jpg";
import andreaTestimonial from "../assets/images/testimonials/andrea-testimonial.jpg";

export const testimonials: Testimonial[] = [
  {
    content:
      "El coaching de Robert no solo mejoró mi inglés, sino que aumentó mi confianza al presentar a clientes e inversionistas. Nuestras conversaciones sobre negocios, tecnología y temas globales <strong>expandieron mi vocabulario del mundo real y mejoraron mi forma de comunicarme.</strong> ¡Un verdadero cambio de juego!",
    author: "Julio Aldana",
    position: "COO",
    company: "Smarttie",
    avatar: julioTestimonial,
  },

  {
    content:
      "Ser fundador significa estar constantemente presentando, persuadiendo y liderando. El coaching de Robert me dio <strong>las herramientas lingüísticas —y la confianza— para hacerlo todo en inglés.</strong> Ha marcado una verdadera diferencia en la presentación de acuerdos y la conexión con mi equipo",
    author: "Hugo Blum",
    position: "CEO",
    company: "100 Ladrillos",
    avatar: hugobTestimonial,
  },
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
      "El coaching de Robert me ayudó a elevar cómo me comunico con ejecutivos senior en Norteamérica. Soy <strong>más estratégica y persuasiva en entrevistas, presentaciones y reuniones transfronterizas</strong>, especialmente en situaciones de alto riesgo. Su enfoque es práctico, enfocado e increíblemente efectivo.",
    author: "Andrea Oliveira",
    position: "Directora de Desarrollo de Negocios",
    company: "CEVA Logistics",
    avatar: andreaTestimonial,
  },
];
