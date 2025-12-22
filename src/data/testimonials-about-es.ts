import type { ImageMetadata } from "astro";

// Import avatar images (paths are relative to src/data/)
import julioTestimonial from "../assets/images/testimonials/julio-testimonial.jpg";
import hugobTestimonial from "../assets/images/testimonials/hugob-testimonial.jpg";
import hugolTestimonial from "../assets/images/testimonials/hugo-l-testimonial.jpg";
import andresTestimonial from "../assets/images/testimonials/andres-testimonial.jpg";
import karlaTestimonial from "../assets/images/testimonials/karla-testimonial.jpg";
import andreaTestimonial from "../assets/images/testimonials/andrea-testimonial.jpg";

export interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
  avatar: ImageMetadata;
}

export const testimonialsAboutEs: Testimonial[] = [
  {
    content:
      "El coaching de Robert no solo mejoró mi inglés, sino que aumentó mi confianza al presentar ante clientes e inversionistas. Nuestras conversaciones sobre negocios, tecnología y temas globales ampliaron mi vocabulario práctico y afinaron mi forma de comunicarme. ¡Un verdadero cambio de juego!",
    author: "Julio Aldana",
    position: "Director de Operaciones (COO)",
    company: "Smarttie",
    avatar: julioTestimonial,
  },
  {
    content:
      "Ser fundador implica presentar, persuadir y liderar constantemente. El coaching de Robert me brindó las herramientas lingüísticas —y la confianza— para hacerlo todo en inglés. Ha marcado una verdadera diferencia al cerrar acuerdos y conectar con mi equipo.",
    author: "Hugo Blum",
    position: "CEO",
    company: "100 Ladrillos",
    avatar: hugobTestimonial,
  },
  {
    content:
      "El coaching con Robert me ayudó a sentirme mucho más seguro y natural al hablar inglés, especialmente con clientes de EE. UU. Ahora me siento más cómodo en las conversaciones y mejor preparado para oportunidades de networking y reuniones internacionales.",
    author: "Andres Guzman Rubio",
    position: "Director de Operaciones – México",
    company: "Driscoll's",
    avatar: andresTestimonial,
  },
  {
    content:
      "El coaching de Robert me ayudó a elevar la forma en que me comunico con ejecutivos de alto nivel en toda Norteamérica. Ahora soy más estratégico y persuasivo en entrevistas, presentaciones y reuniones internacionales, especialmente en situaciones de alta presión. Su enfoque es práctico, enfocado e increíblemente efectivo.",
    author: "Andrea Oliveira",
    position: "Directora de Desarrollo de Negocios",
    company: "CEVA Logistics",
    avatar: andreaTestimonial,
  },
];
