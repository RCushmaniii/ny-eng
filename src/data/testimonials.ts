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

// These four cards must match, in order, the companies named in the hero trust
// line in src/pages/en/index.astro. Change one, change the other: naming a
// company that does not appear below destroys the proof it was meant to give.
export const testimonials: Testimonial[] = [
  {
    content:
      "Coaching with Robert helped me become much more confident and natural when speaking English — especially with U.S. clients. I now feel <strong>more at ease in conversations and better prepared for cross-border meetings.</strong>",
    author: "Andres Guzman Rubio",
    position: "COO – Mexico",
    company: "Driscoll's",
    avatar: andresTestimonial,
  },
  {
    content:
      "I moved from feeling hesitant in senior-level discussions to <strong>speaking with assurance in top-management meetings</strong> and presenting complex updates with clarity and persuasion. Thanks to his coaching, my fluency, pronunciation and overall presence have improved markedly, and I now approach <strong>high-stakes conversations with genuine confidence.</strong>",
    author: "Hugo Lopez",
    position: "Testing & EPM Manager",
    company: "Continental",
    avatar: hugolTestimonial,
  },
  {
    content:
      "I needed to attend meetings with high-level client executives to present proposals, solutions, or explain information related to logistics. Robert's coaching has not only enabled me to overcome these challenges but has also <strong>given me the confidence to present more professionally.</strong>",
    author: "Karla Bernal",
    position: "Sr. Logistics Manager",
    company: "Sanmina Corporation",
    avatar: karlaTestimonial,
  },
  {
    content:
      "Robert's coaching helped me elevate how I communicate with senior executives across North America. I'm <strong>more strategic and persuasive in interviews, presentations, and cross-border meetings</strong> — especially in high-stakes situations. His approach is practical, focused, and incredibly effective.",
    author: "Andrea Oliveira",
    position: "Director of Business Development",
    company: "CEVA Logistics",
    avatar: andreaTestimonial,
  },
];
