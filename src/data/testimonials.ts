import type { ImageMetadata } from 'astro';

export interface Testimonial {
    content: string;
    author: string;
    position: string;
    company: string;
    avatar: ImageMetadata;
}

import emmanuelTestimonial from '../assets/images/testimonials/emmanuel-testimonial.jpeg';
import erikaTestimonial from '../assets/images/testimonials/erika-testimonial.jpg';
import julioTestimonial from '../assets/images/testimonials/julio-testimonial.jpg';
import hugoTestimonial from '../assets/images/testimonials/hugo-testimonial.jpeg';
import andresTestimonial from '../assets/images/testimonials/andres-testimonial.jpeg';
import andreaTestimonial from '../assets/images/testimonials/andrea-testimonial.jpeg';
import albertoTestimonial from '../assets/images/testimonials/alberto-testimonial.jpg';

export const testimonials: Testimonial[] = [
    {
        content:
            "Robert’s coaching didn’t just improve my English—it boosted my confidence presenting to clients and investors. Our conversations on business, tech, and global topics expanded my real-world vocabulary and sharpened how I communicate. A true game changer!",
        author: "Julio Aldana",
        position: "COO",
        company: "Smarttie",
        avatar: julioTestimonial,
    },
    
    {
        content:
            "Being a founder means constantly pitching, persuading, and leading. Robert’s coaching gave me the language tools—and the confidence—to do it all in English. It’s made a real difference in pitching deals and connecting with my team",
        author: "Hugo Blum",
        position: "CEO",
        company: "100 Ladrillos",
        avatar: hugoTestimonial,
    },
    {
        content:
            "Coaching with Robert helped me become much more confident and natural when speaking English—especially with U.S. clients. I now feel more at ease in conversations and better prepared for networking opportunities and cross-border meetings.",
        author: "Andres Guzman Rubio",
        position: "COO – Mexico",
        company: "Driscoll's",
        avatar: andresTestimonial,
    },
    {
        content:
            "Robert’s coaching helped me elevate how I communicate with senior executives across North America. I’m more strategic and persuasive in interviews, presentations, and cross-border meetings—especially in high-stakes situations. His approach is practical, focused, and incredibly effective.",
        author: "Andrea Oliveira",
        position: "Director of Business Development",
        company: "CEVA Logistics",
        avatar: andreaTestimonial,
    },
     
];

