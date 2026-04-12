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
      "Robert’s coaching didn’t just improve my English—it boosted my confidence presenting to clients and investors. Our conversations on business, tech, and global topics <strong>expanded my real-world vocabulary and sharpened how I communicate.</strong> A true game changer!",
    author: "Julio Aldana",
    position: "COO",
    company: "Smarttie",
    avatar: julioTestimonial,
  },

  {
    content:
      "Being a founder means constantly pitching, persuading, and leading. Robert’s coaching gave me <strong>the language tools—and the confidence—to do it all in English.</strong> It’s made a real difference in pitching deals and connecting with my team.",
    author: "Hugo Blum",
    position: "CEO",
    company: "100 Ladrillos",
    avatar: hugobTestimonial,
  },
  {
    content:
      "Coaching with Robert helped me become much more confident and natural when speaking English—especially with U.S. clients. I now feel <strong>more at ease in conversations and better prepared for cross-border meetings.</strong>",
    author: "Andres Guzman Rubio",
    position: "COO – Mexico",
    company: "Driscoll's",
    avatar: andresTestimonial,
  },
  {
    content:
      "Robert’s coaching helped me elevate how I communicate with senior executives across North America. I’m <strong>more strategic and persuasive in interviews, presentations, and cross-border meetings</strong>—especially in high-stakes situations. His approach is practical, focused, and incredibly effective.",
    author: "Andrea Oliveira",
    position: "Director of Business Development",
    company: "CEVA Logistics",
    avatar: andreaTestimonial,
  },
];
