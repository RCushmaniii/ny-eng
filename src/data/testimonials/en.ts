import type { ImageMetadata } from "astro";
import { serviceCategories } from "@data/service-categories.js";

// Import testimonial images
import emmanuelTestimonial from "../../assets/images/testimonials/emmanuel-testimonial.jpg";
import erikaTestimonial from "../../assets/images/testimonials/erika-testimonial.jpg";
// Avoid importing a malformed image through Astro metadata pipeline; use a public image path instead
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
  shortContent?: string;
  author: string;
  position: string;
  company: string;
  avatar: ImageMetadata | string;
  stars?: number;
  industries: string[]; // The new standardized array of category slugs
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
      "Robert's coaching didn't just improve my English—it boosted my confidence presenting to clients and investors. Our conversations on business, tech, and global topics expanded my real-world vocabulary and sharpened how I communicate. A true game changer!",
    author: "Julio Aldana",
    position: "COO",
    company: "Smarttie",
    avatar: julioTestimonial,
    stars: 5,
    industries: ["executive-english", "startup-founders"],
    slug: "julio-smarttie",
    headline:
      "From Good to Great: How Coaching Transformed My Leadership Communication",
    avatarSize: "md",
    link: "/en/services/startup-founders/",
    linkText: "👉 English Coaching for Startup Founders",
    status: "published",
  },
  {
    content:
      "Being a founder means constantly pitching, persuading, and leading. Robert's coaching gave me the language tools—and the confidence—to do it all in English. It's made a real difference in pitching deals and connecting with my team",
    author: "Hugo Blum",
    position: "CEO",
    company: "100 Ladrillos",
    avatar: hugobTestimonial,
    stars: 5,
    industries: ["executive-english", "startup-founders"],
    slug: "hugo-blum-100-ladrillos",
    headline: "From Founder to CEO: Leading with Confidence in English",
    avatarSize: "md",
    link: "/es/servicios/ingles-para-fundadores-de-startups/",
    linkText: "👉 Coaching de Inglés para Fundadores y CEOs de Startups",

    status: "published",
  },
  {
    content:
      "Coaching with Robert helped me become much more confident and natural when speaking English—especially with U.S. clients. I now feel more at ease in conversations and better prepared for networking opportunities and cross-border meetings.",
    author: "Andres Guzman Rubio",
    position: "COO – Mexico",
    company: "Driscoll's",
    avatar: andresTestimonial,
    stars: 5,
    industries: ["executive-english"],
    slug: "andres-driscolls",
    headline: "Building Cross-Border Confidence: My Executive English Journey",
    avatarSize: "md",
    link: "/en/services/executive-english/",
    linkText: "👉 English Coaching for Executives",
    status: "published",
  },
  {
    content: `Working with Robert has been one of the most impactful steps I’ve taken in advancing my professional communication. As a CTO, I already work in technical and strategic environments, but his coaching gave me the tools to project true executive presence in English. I’ve learned to structure presentations for impact, handle impromptu speaking under pressure, and lead conversations with clarity and confidence. Robert’s approach is practical, challenging, and always aligned with my role as a global executive. I now feel better prepared to represent my company internationally and position myself for future leadership opportunities.`,
    shortContent:
      "Working with Robert has been one of the most impactful steps I’ve taken in advancing my professional communication as a CTO—his practical coaching helped me structure presentations for impact, handle impromptu speaking, and lead with confidence…",
    author: "Luis Manuel Becerra Lucatero",
    position: "Chief Technology Officer",
    company: "Skysense",
    avatar: luislTestimonial,
    stars: 5,
    industries: ["executive-english", "tech-english", "high-stakes-english"],
    slug: "luis-manuel-becerra-lucatero-skysense",
    headline: "Executive Presence & High-Impact Communication for a Global CTO",
    avatarSize: "md",
    link: "/en/services/executive-english/",
    linkText: "👉 English Coaching for Executives",
    status: "published",
  },
  {
    content: `More than just an English coach, Robert has been a true business coach. Each session blends language with practical tools that drive my professional growth.`,
    author: "Noé Martínez",
    position: "Sales Director",
    company: "Grupo Kopar",
    avatar: noeTestimonial,
    stars: 5,
    industries: ["executive-english", "high-stakes-english"],
    slug: "noe-martinez-high-stakes-english",
    headline: "Blending Language and Business Coaching for Real Growth",
    avatarSize: "md",
    link: "/en/services/high-stakes-english/",
    linkText: "👉 English Coaching for High-Stakes Career Success",
    status: "published",
  },
  {
    content:
      "Robert's coaching helped me elevate how I communicate with senior executives across North America. I'm more strategic and persuasive in interviews, presentations, and cross-border meetings—especially in high-stakes situations. His approach is practical, focused, and incredibly effective.",
    author: "Andrea Oliveira",
    position: "Director of Business Development",
    company: "CEVA Logistics",
    avatar: andreaTestimonial,
    stars: 5,
    industries: [
      "logistics-english",
      "executive-english",
      "high-stakes-english",
    ],
    slug: "andrea-ceva-logistics",
    headline: "Mastering High-Stakes Business Communication in Logistics",
    avatarSize: "md",
    link: "/en/services/high-stakes-english/",
    linkText: "👉 English Coaching for High-Stakes Career Success",
    status: "published",
  },
  {
    content: `Taking classes with Robert has undoubtedly been a very enriching experience. I needed to attend meetings with high-level client executives to present proposals, solutions, or explain information related to logistics. My limited vocabulary and areas such as pronunciation, listening comprehension, intonation, and presentation skills required significant improvement for my professional growth.

Robert's coaching has not only enabled me to overcome these challenges but has also given me the confidence to present more professionally. Robert has provided guidance on presenting and publishing my work in a corporate environment and has also introduced me to, and facilitated my learning of, many cutting-edge topics that have positively impacted both my professional and personal life.`,
    shortContent:
      "Taking classes with Robert has undoubtedly been a very enriching experience. I needed to attend meetings with high-level client executives to present proposals, solutions, or explain information related to logistics....",
    author: "Karla Bernal",
    position: "Sr. Logistics Manager",
    company: "Sanmina Corporation",
    avatar: karlaTestimonial,
    stars: 5,
    industries: ["executive-english", "logistics-english"],
    slug: "karla-sanmina-corporation",
    headline: "Elevating Executive Communication Skills in Global Logistics",
    avatarSize: "md",
    link: "/en/services/logistics-english/",
    linkText: "👉 English Coaching for Logistics Professionals",
    status: "published",
  },
  {
    content:
      "With Robert's support, I became more fluent and natural when speaking English. This has helped me care for international patients more effectively and communicate clearly during medical discussions and travel. I've noticed my English-speaking patients feel more at ease and trust me more.",
    author: "Dra. Erika Itzel",
    position: "Medical Doctor",
    company: "",
    avatar: erikaTestimonial,
    stars: 5,
    industries: ["professional-english"],
    slug: "dra-erika-itzel-medical-doctor",
    headline: "Building Confidence and Clarity for International Patient Care",
    avatarSize: "md",
    link: "/en/services/professional-english/",
    linkText: "👉 English Coaching for Medical Professionals",
    status: "published",
  },
  {
    content:
      "Robert helped me strengthen my English communication for high-stakes client interactions. I now feel confident managing legal conversations, explaining complex issues, and building trust with U.S. clients. It's made a significant difference in my day-to-day work consulting international clients.",
    author: "Emmanuel Ibarra Castillo",
    position: "Partner",
    company: "Ramos, Ripoll & Schuster",
    avatar: emmanuelTestimonial,
    stars: 5,
    industries: ["professional-english"],
    slug: "emmanuel-ibarra-castillo-ramos-ripoll-schuster",
    headline: "Confident Legal Communication with International Clients",
    avatarSize: "md",
    link: "/en/services/professional-english/",
    linkText: "👉 English Coaching for Medical & Legal Professionals",
    status: "draft",
  },
  {
    content:
      "Working with Robert gave me a much stronger command of business English. I lead meetings more confidently, communicate more clearly with international partners, and get better results across the board. Internally, our communication is smoother—and our suppliers notice the difference.",
    author: "Alberto Escobar USA",
    position: "COO",
    company: "Terramar Brands",
    avatar: albertoTestimonial,
    stars: 5,
    industries: ["executive-english"],
    slug: "alberto-escobar-terramar-brands",
    headline: "Mastering Business English for Stronger Global Leadership",
    avatarSize: "md",
    link: "/en/services/executive-english/",
    linkText: "👉 English Coaching for Executives",
    status: "published",
  },
  {
    content: `I am pleased to recommend Robert as an exceptional language teacher and executive-communication coach. Under his guidance, I moved from feeling hesitant in senior-level discussions to speaking with assurance in top-management meetings and presenting complex updates with clarity and persuasion.

Robert’s deep corporate experience meant that every session went far beyond grammar and pronunciation: he simulated real board-room scenarios, anticipated tough questions, and equipped me with concise, impactful responses. Thanks to his coaching, my fluency, pronunciation, and overall presence have improved markedly, and I now approach high-stakes conversations with genuine confidence.

Robert will be an outstanding asset to anyone seeking to elevate their professional communication.`,
    shortContent:
      "I am pleased to recommend Robert as an exceptional language teacher and executive-communication coach. Under his guidance, I moved from feeling hesitant in senior-level discussions to speaking with assurance in top-management meetings and presenting complex updates with clarity and persuasion...",
    author: "Hugo Lopez",
    position: "Testing & EPM Manager",
    company: "Continental",
    avatar: hugolTestimonial,
    stars: 5,
    industries: ["executive-english", "high-stakes-english"],
    slug: "hugo-lopez-continental",
    headline: "Mastering Executive Communication in Global Engineering",
    avatarSize: "md",
    link: "/en/services/high-stakes-english/",
    linkText: "👉 English Coaching for High Pressure Presentations",
    status: "published",
  },
  {
    content: `Working with Robert has helped me improve how I communicate in technical sales situations. I often explain automation systems, PLC programming, and product specs to international clients, and I wanted to sound more fluent and confident.

With Robert's coaching, I've become more natural in conversations, better at structuring my explanations, and more persuasive in demos and follow-ups. It's made a clear difference in how I interact with clients and represent my company in English.`,
    shortContent:
      "Working with Robert has helped me improve how I communicate in technical sales situations. I often explain automation systems, PLC programming, and product specs to international clients...",
    author: "Ricardo Mendoza",
    position: "Automation and Control Engineer",
    company: "Mountz Torque",
    avatar: ricardoTestimonial,
    stars: 5,
    industries: ["tech-english"],
    slug: "ricardo-mendoza-mountz-torque",
    headline: "Fluent Technical Sales for Factory Automation",
    avatarSize: "md",
    link: "/en/services/tech-english/",
    linkText: "👉 English Coaching for Engineers & Tech Leads",
    status: "draft",
  },
  {
    content:
      "The lessons with Robert have helped me develop confidence when speaking in meetings with English-speaking clients and prospects. They've also aided me in expanding my vocabulary and correcting grammatical errors.",
    author: "Humberto Grimaldo",
    position: "Founder and President",
    company: "TC Logistics",
    avatar: humbertoTestimonial,
    stars: 5,
    industries: ["executive-english", "logistics-english"],
    slug: "humberto-grimaldo-tc-logistics",
    headline: "Confident Communication for International Logistics Success",
    avatarSize: "md",
    link: "/en/services/logistics-english/",
    linkText: "👉 English Coaching for Logistics Professionals",
    status: "published",
  },
  {
    content: `Robert helped me strengthen my English communication for project management interactions. I now feel confident in managing legal conversations, explaining complex issues, and building trust with U.S. colleagues. It's made a significant difference in my day-to-day international work.`,
    shortContent:
      "Robert helped me strengthen my English communication for project management interactions. I now feel confident in managing legal conversations and building trust with U.S. colleagues...",
    author: "Javier Ramírez",
    position: "Program Manager",
    company: "Sophia",
    avatar: javierTestimonial,
    stars: 5,
    industries: ["executive-english", "professional-english"],
    slug: "javier-ramirez-sophia",
    headline: "Fluent, Confident English for Global Project Management",
    avatarSize: "md",
    link: "/en/services/executive-english/",
    linkText: "👉 English Coaching for Executives",
    status: "draft",
  },
  {
    content: `The main challenge I faced when I started working in global environments was the lack of fluency to express my technical ideas effectively to both leaders and colleagues from different nationalities. Robert has been coaching me, and we've practiced various scenarios together. Now I feel much more fluent and confident. I've been able to mobilize multinational teams and align them around strategies that make sense for everyone.`,
    shortContent:
      "The main challenge I faced when I started working in global environments was the lack of fluency to express my technical ideas effectively to both leaders and colleagues from different nationalities...",
    author: "Jonathan Emmaus Campos Navarro",
    position: "Data Lead",
    company: "Infosys",
    avatar: jonathanTestimonial,
    stars: 5,
    industries: ["tech-english"],
    slug: "jonathan-emmaus-infosys",
    headline: "Confident Communication Across Global Tech Teams",
    avatarSize: "md",
    link: "/en/services/tech-english/",
    linkText: "👉 English Coaching for Engineers & Tech Leads",
    status: "published",
  },
  {
    content: `Before working with Robert, I sometimes felt unsure presenting in English during high-stakes calls and real-time meetings, especially with international customers.
  
  His coaching has helped me build greater confidence in speaking, expand my vocabulary, and give structure to my ideas. His approach is practical and modern, using real-life examples that make learning engaging.
  
  Now, I feel more secure and fluent in my communication and I perform better in technical discussions and negotiations.`,
    shortContent:
      "Before working with Robert, I sometimes felt unsure presenting in English during high-stakes calls and real-time meetings with international customers…",
    author: "Tania Ruelas",
    position: "Quality Key Account Manager",
    company: "FORVIA HELLA",
    avatar: taniaTestimonial,
    stars: 5,
    industries: ["tech-english", "executive-english"],
    slug: "tania-ruelas-forvia-hella",
    headline: "Fluent English for Global Clients",
    avatarSize: "md",
    link: "/en/services/tech-english/",
    linkText: "👉 English Coaching for Engineers & Tech Leads",
    status: "published",
  },
] as const;

// Only published testimonials should be filtered for display/pages
export const publishedTestimonials = testimonials.filter(
  (t) => t.status !== "draft",
);

// Group testimonials by industry using the standardized categories in priority order
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
} as const;

// Updated industry labels using standardized categories from service-categories.ts
export const industryLabels = {
  all: "All Industries",
  "executive-english": serviceCategories[0].label,
  "startup-founders": serviceCategories[1].label,
  "tech-english": serviceCategories[2].label,
  "logistics-english": serviceCategories[3].label,
  "professional-english": serviceCategories[4].label,
  "high-stakes-english": serviceCategories[5].label,
} as const;

// Spanish version of industry labels for the filter dropdown
export const industryLabelsEs = {
  all: "Todas las Industrias",
  "executive-english": serviceCategories[0].esLabel,
  "startup-founders": serviceCategories[1].esLabel,
  "tech-english": serviceCategories[2].esLabel,
  "logistics-english": serviceCategories[3].esLabel,
  "professional-english": serviceCategories[4].esLabel,
  "high-stakes-english": serviceCategories[5].esLabel,
} as const;
