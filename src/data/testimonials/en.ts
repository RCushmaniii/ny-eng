import type { ImageMetadata } from 'astro';

// Import testimonial images
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
  shortContent?: string; // Optional shortened version of content
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
      "Robert's coaching didn't just improve my English—it boosted my confidence presenting to clients and investors. Our conversations on business, tech, and global topics expanded my real-world vocabulary and sharpened how I communicate. A true game changer!",
    author: "Julio Aldana",
    position: "COO",
    company: "Smarttie",
    avatar: julioTestimonial,
    stars: 5,
    industry: "founders",
    slug: "julio-smarttie",
    headline: "From Good to Great: How Coaching Transformed My Leadership Communication",
    avatarSize: "md",
    link: "/en/case-studies/founders",
    linkText: "👉 English Coaching for Startup Founders",
    status: "published"
  },
  {
    content:
      "Being a founder means constantly pitching, persuading, and leading. Robert's coaching gave me the language tools—and the confidence—to do it all in English. It's made a real difference in pitching deals and connecting with my team",
    author: "Hugo Blum",
    position: "CEO",
    company: "100 Ladrillos",
    avatar: hugoTestimonial,
    stars: 5,
    industry: "c-level-executives",
    slug: "hugo-blum-100-ladrillos",
    headline: "Pitching with Confidence: A CEO's Journey to English Mastery",
    avatarSize: "md",
    link: "/en/case-studies/c-level-executives",
    linkText: "👉 English Coaching for C-Level Executives",
    status: "published"
  },
  {
    content:
      "Coaching with Robert helped me become much more confident and natural when speaking English—especially with U.S. clients. I now feel more at ease in conversations and better prepared for networking opportunities and cross-border meetings.",
    author: "Andres Guzman Rubio",
    position: "COO – Mexico",
    company: "Driscoll's",
    avatar: andresTestimonial,
    stars: 5,
    industry: "c-level-executives",
    slug: "andres-driscolls",
    headline: "Building Cross-Border Confidence: My Executive English Journey",
    avatarSize: "md",
    link: "/en/case-studies/c-level-executives",
    linkText: "👉 English Coaching for C-Level Executives",
    status: "published"
  },
  {
    content:
      "Robert's coaching helped me elevate how I communicate with senior executives across North America. I'm more strategic and persuasive in interviews, presentations, and cross-border meetings—especially in high-stakes situations. His approach is practical, focused, and incredibly effective.",
    author: "Andrea Oliveira",
    position: "Director of Business Development",
    company: "CEVA Logistics",
    avatar: andreaTestimonial,
    stars: 5,
    industry: "logistics",
    slug: "andrea-ceva-logistics",
    headline: "Mastering High-Stakes Business Communication in Logistics",
    avatarSize: "md",
    link: "/en/case-studies/logistics",
    linkText: "👉 English Coaching for Logistics Professionals",
    status: "published"
  },
  {
    content: `Taking classes with Robert has undoubtedly been a very enriching experience. I needed to attend meetings with high-level client executives to present proposals, solutions, or explain information related to logistics. My limited vocabulary and areas such as pronunciation, listening comprehension, intonation, and presentation skills required significant improvement for my professional growth.
  
  Robert's coaching has not only enabled me to overcome these challenges but has also given me the confidence to present more professionally. Robert has provided guidance on presenting and publishing my work in a corporate environment and has also introduced me to, and facilitated my learning of, many cutting-edge topics that have positively impacted both my professional and personal life.`,
    shortContent: "Taking classes with Robert has undoubtedly been a very enriching experience. I needed to attend meetings with high-level client executives to present proposals, solutions, or explain information related to logistics....",
    author: "Karla Bernal",
    position: "Sr. Logistics Manager",
    company: "Sanmina Corporation",
    avatar: karlaTestimonial,
    stars: 5,
    industry: "logistics",
    slug: "karla-sanmina-corporation",
    headline: "Elevating Executive Communication Skills in Global Logistics",
    avatarSize: "md",
    link: "/en/case-studies/logistics",
    linkText: "👉 English Coaching for Logistics Professionals",
    status: "published"
  },
 {
  content:
    "With Robert’s support, I became more fluent and confident when speaking English. This has helped me care for international patients more effectively and communicate clearly during medical discussions and travel. I’ve noticed my English-speaking patients feel more at ease and trust me more.",
  author: "Dra. Erika Itzel",
  position: "Medical Doctor",
  company: "", // Optional – you can fill this in or leave it null
  avatar: erikaTestimonial,
  stars: 5,
  industry: "doctors",
  slug: "dra-erika-itzel-medical-doctor",
  headline: "Building Confidence and Clarity for International Patient Care",
  avatarSize: "md",
  link: "/en/case-studies/healthcare",
  linkText: "👉 English Coaching for Doctors and Healthcare Professionals",
  status: "published"
},

{
  content:
    "Robert helped me strengthen my English communication for high-stakes client interactions. I now feel confident managing legal conversations, explaining complex issues, and building trust with U.S. clients. It’s made a significant difference in my day-to-day work consulting international clients.",
  author: "Emmanuel Ibarra Castillo",
  position: "Partner",
  company: "Ramos, Ripoll & Schuster",
  avatar: emmanuelTestimonial,
  stars: 5,
  industry: "attorneys",
  slug: "emmanuel-ibarra-castillo-ramos-ripoll-schuster",
  headline: "Confident Legal Communication with International Clients",
  avatarSize: "md",
  link: "/en/case-studies/legal",
  linkText: "👉 English Coaching for Attorneys and Legal Professionals",
  status: "draft"
},
{
  content:
    "Working with Robert gave me a much stronger command of business English. I lead meetings more confidently, communicate more clearly with international partners, and get better results across the board. Internally, our communication is smoother—and our suppliers notice the difference.",
  author: "Alberto Escobar USA",
  position: "COO",
  company: "Terramar Brands",
  avatar: albertoTestimonial, // Make sure to import this image where used
  stars: 5,
  industry: "c-level-executives",
  slug: "alberto-escobar-terramar-brands",
  headline: "Mastering Business English for Stronger Global Leadership",
  avatarSize: "md",
  link: "/en/case-studies/business",
  linkText: "👉 English Coaching for Business Leaders",
  status: "published"
},

{
  content: `Working with Robert has been a transformative experience for my professional communication. In my role, I regularly lead cross-functional engineering teams and manage high-stakes projects involving international clients and suppliers. Before coaching, I struggled with fluency and clarity during executive meetings, particularly when presenting complex technical updates or strategic plans in English.

Robert’s coaching helped me significantly improve my pronunciation, fluency, and confidence when speaking in high-pressure situations. His personalized approach helped me structure my messages more clearly, adapt my tone to different audiences, and express ideas with more precision and impact. These improvements have made my participation in global meetings more effective and elevated how I communicate with senior leadership and stakeholders across countries.

Beyond language skills, Robert also introduced me to key business communication frameworks that I’ve integrated into my team leadership and reporting practices. The improvements in how I speak and present have had a noticeable effect on the way I lead and are recognized by colleagues and clients alike.`,
  
  shortContent: "Working with Robert has been a transformative experience for my professional communication. In my role, I regularly lead cross-functional engineering teams and manage high-stakes projects involving international clients and suppliers. Before coaching, I struggled with fluency and clarity during executive meetings....",

  author: "Hugo Lopez",
  position: "Senior Program Manager",
  company: "Continental",
  avatar: hugolTestimonial, // Replace with actual import
  stars: 5,
  industry: "business",
  slug: "hugo-lopez-continental",
  headline: "Mastering Executive Communication in Global Engineering",
  avatarSize: "md",
  link: "/en/case-studies/automotive",
  linkText: "👉 English Coaching for Business Leaders",
  status: "draft"
},
{
  content: `Working with Robert has helped me improve how I communicate in technical sales situations. I often explain automation systems, PLC programming, and product specs to international clients, and I wanted to sound more fluent and confident. 

With Robert’s coaching, I’ve become more natural in conversations, better at structuring my explanations, and more persuasive in demos and follow-ups. It’s made a clear difference in how I interact with clients and represent my company in English.`,
  
  shortContent: "Working with Robert has helped me improve how I communicate in technical sales situations. I often explain automation systems, PLC programming, and product specs to international clients...",
  
  author: "Ricardo Mendoza",
  position: "Automation and Control Engineer",
  company: "Mountz Torque",
  avatar: ricardoTestimonial, // Replace with actual import
  stars: 5,
  industry: "engineering",
  slug: "ricardo-mendoza-mountz-torque",
  headline: "Fluent Technical Sales for Factory Automation",
  avatarSize: "md",
  link: "/en/case-studies/industrial-automation",
  linkText: "👉 English Coaching for Engineers",
  status: "published"
},

{
  content:
    "The lessons with Robert have helped me develop confidence when speaking in meetings with English-speaking clients and prospects. They've also aided me in expanding my vocabulary and correcting grammatical errors.",
  author: "Humberto Grimaldo",
  position: "Founder and President",
  company: "TC Logistics",
  avatar: humbertoTestimonial, // Import this image where the testimonial is used
  stars: 5,
  industry: "logistics",
  slug: "humberto-grimaldo-tc-logistics",
  headline: "Confident Communication for International Logistics Success",
  avatarSize: "md",
  link: "/en/case-studies/logistics",
  linkText: "👉 English Coaching for Logistics Professionals",
  status: "published"
},

{
  content: `Robert helped me strengthen my English communication for project management interactions. I now feel confident in managing legal conversations, explaining complex issues, and building trust with U.S. colleagues. It’s made a significant difference in my day-to-day international work.`,
  
  shortContent: "Robert helped me strengthen my English communication for project management interactions. I now feel confident in managing legal conversations and building trust with U.S. colleagues...",
  
  author: "Javier Ramírez",
  position: "Program Manager",
  company: "Sophia",
  avatar: javierTestimonial, // Replace with actual import
  stars: 5,
  industry: "business",
  slug: "javier-ramirez-sophia",
  headline: "Fluent, Confident English for Global Project Management",
  avatarSize: "md",
  link: "/en/case-studies/project-management",
  linkText: "👉 English Coaching for Project Managers",
  status: "published"
},
{
  content: `The main challenge I faced when I started working in global environments was the lack of fluency to express my technical ideas effectively to both leaders and colleagues from different nationalities. Robert has been coaching me, and we've practiced various scenarios together. Now I feel much more fluent and confident. I've been able to mobilize multinational teams and align them around strategies that make sense for everyone.`,
  
  shortContent: "The main challenge I faced when I started working in global environments was the lack of fluency to express my technical ideas effectively to both leaders and colleagues from different nationalities...",
  
  author: "Jonathan Emmaus Campos Navarro",
  position: "Data Lead",
  company: "Infosys",
  avatar: jonathanTestimonial, // Replace with actual import
  stars: 5,
  industry: "technology",
  slug: "jonathan-emmaus-infosys",
  headline: "Confident Communication Across Global Tech Teams",
  avatarSize: "md",
  link: "/en/case-studies/data-strategy",
  linkText: "👉 English Coaching for Data Scientists",
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
  //"automotive": publishedTestimonials.filter(t => t.industry === "automotive"),
  "business": publishedTestimonials.filter(t => t.industry === "business"),
  "engineering": publishedTestimonials.filter(t => t.industry === "engineering"),
} as const;

// Industry labels for the filter dropdown
export const industryLabels = {
  "all": "All Industries",
  "founders": "Founders & Entrepreneurs",
  "c-level-executives": "C-Level Executives",
  "logistics": "Logistics Professionals",
  //"attorneys": "Attorneys & Legal Professionals",
  "engineering": "Engineers",
  "doctors": "Doctors & Healthcare Professionals",
  "it-projects": "IT & Project Managers",
  "automotive": "Automotive Professionals",
  "business": "Business Leaders"
} as const;
