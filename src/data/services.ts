// src/data/services.ts

// Import from the central service categories using proper Astro alias pattern
import { serviceCategories } from "@data/service-categories.js";
import type { ImageMetadata } from "astro";

// Import service images from assets
import executiveEnglishImage from "@assets/images/services/executive-english-services.jpg";
import technicalSalesImage from "@assets/images/services/technical-sales-services.jpg";
import logisticsImage from "@assets/images/services/logistics-services.jpg";
import medicalImage from "@assets/images/services/medical-services.jpg";
import interviewPrepImage from "@assets/images/services/interview-prep-services.jpg";
import publicSpeakingImage from "@assets/images/services/public-speaking-services.jpg";
import startupFoundersImage from "@assets/images/services/startup-founders-services.jpg";
import techImage from "@assets/images/services/tech-services.jpg";

// Import industry square images
import executiveEngSquareImage from "@assets/images/industries/executive-eng.jpg";
import executiveEnglishSquareImage from "@assets/images/industries/executive-english.jpg";
import interviewPrepSquareImage from "@assets/images/industries/interview-prep.jpg";
import logisticsSquareImage from "@assets/images/industries/logistics.jpg";
import medicalSquareImage from "@assets/images/industries/medical.jpg";
import publicSpeakingSquareImage from "@assets/images/industries/public-speaking.jpg";
import startupFoundersSquareImage from "@assets/images/industries/startup-founders.jpg";
import techSquareImage from "@assets/images/industries/tech.jpg";
import technicalSalesSquareImage from "@assets/images/industries/technical-sales.jpg";

export interface Service {
  title: string;
  icon: string;
  description: string;
  link: string;
  backgroundImage: ImageMetadata;
  squareImage: ImageMetadata;
  slug: string;
  ogImage?: { src: string; alt?: string; width?: number; height?: number };
}

// Structured based on the 6 standardized categories in priority order
export const services: Service[] = [
  // 1. Executives & Directors
  {
    title: "Business & Executive English",
    icon: "🎯",
    description:
      "Speak confidently in meetings, lead strategic updates, and advance your career with powerful executive communication.",
    link: "/en/services/executive-english/",
    backgroundImage: executiveEnglishImage,
    squareImage: executiveEnglishSquareImage,
    slug: "executive-english",
  },
  // 2. Startup Founders
  {
    title: "English for Startup Founders",
    icon: "🚀",
    description:
      "Pitch your vision, win investor trust, and grow your startup across international markets—in English.",
    link: "/en/services/startup-founders/",
    backgroundImage: startupFoundersImage,
    squareImage: startupFoundersSquareImage,
    slug: "startup-founders",
  },
  // 3. Engineers & Tech Leads
  {
    title: "English for Tech",
    icon: "💻",
    description:
      "Boost your salary potential and career growth by communicating technical ideas clearly with global teams and clients.",
    link: "/en/services/tech-english/",
    backgroundImage: techImage,
    squareImage: techSquareImage,
    slug: "tech-english",
  },
  // 4. Logistics & Operations
  {
    title: "English for Logistics",
    icon: "🚚",
    description:
      "Master international shipping, customs, and supply chain communication to expand your reach and secure top logistics roles.",
    link: "/en/services/logistics-english/",
    backgroundImage: logisticsImage,
    squareImage: logisticsSquareImage,
    slug: "logistics-english",
  },
  // 5. Medical & Legal Professionals
  {
    title: "English for Doctors, Lawyers & Professionals",
    icon: "⛑️",
    description:
      "Expand your international client base, build trust across borders, and work confidently in global professional settings.",
    link: "/en/services/professional-english/",
    backgroundImage: medicalImage,
    squareImage: medicalSquareImage,
    slug: "professional-english",
  },
  // 6. Public Speaking & Interviews
  {
    title: "Interview & Presentation Coaching",
    icon: "🎤",
    description:
      "Ace job interviews, deliver high-impact presentations, and persuade decision-makers with clarity and confidence.",
    link: "/en/services/high-stakes-english/",
    backgroundImage: publicSpeakingImage,
    squareImage: publicSpeakingSquareImage,
    slug: "high-stakes-english",
  },
] as const;

// Spanish version
export const serviciosEs: Service[] = [
  // 1. Ejecutivos y Directores
  {
    title: "Inglés para Negocios y Ejecutivos",
    icon: "🎯",
    description:
      "Habla con confianza en reuniones, lidera actualizaciones estratégicas y haz crecer tu carrera con una comunicación ejecutiva impactante.",
    link: "/es/servicios/ingles-para-ejecutivos/",
    backgroundImage: executiveEnglishImage,
    squareImage: executiveEnglishSquareImage,
    slug: "ingles-para-ejecutivos",
  },
  // 2. Fundadores de Startups
  {
    title: "Inglés para Fundadores de Startups",
    icon: "🚀",
    description:
      "Perfecciona tu pitch, gana la confianza de inversionistas y haz crecer tu startup en mercados internacionales.",
    link: "/es/servicios/ingles-para-fundadores-de-startups/",
    backgroundImage: startupFoundersImage,
    squareImage: startupFoundersSquareImage,
    slug: "ingles-para-fundadores-de-startups",
  },
  // 3. Ingenieros y Líderes Técnicos
  {
    title: "Inglés para Tecnología",
    icon: "💻",
    description:
      "Mejora tu perfil profesional y tu salario al comunicar ideas técnicas con claridad a equipos y clientes globales.",
    link: "/es/servicios/ingles-para-tecnologia/",
    backgroundImage: techImage,
    squareImage: techSquareImage,
    slug: "ingles-para-tecnologia",
  },
  // 4. Logística y Operaciones
  {
    title: "Inglés para Logística",
    icon: "🚚",
    description:
      "Domina el lenguaje del comercio internacional, aduanas y cadena de suministro para crecer profesionalmente en logística global.",
    link: "/es/servicios/ingles-para-logistica/",
    backgroundImage: logisticsImage,
    squareImage: logisticsSquareImage,
    slug: "ingles-para-logistica",
  },
  // 5. Profesionales Médicos y Legales
  {
    title: "Inglés para Doctores, Abogados y Profesionales",
    icon: "⛑️",
    description:
      "Amplía tu cartera de clientes, genera confianza internacional y trabaja con seguridad en entornos profesionales globales.",
    link: "/es/servicios/ingles-para-profesionales/",
    backgroundImage: medicalImage,
    squareImage: medicalSquareImage,
    slug: "ingles-para-profesionales",
  },
  // 6. Presentaciones y Entrevistas
  {
    title: "Coaching para Entrevistas y Presentaciones",
    icon: "🎤",
    description:
      "Domina entrevistas laborales, presenta con impacto y convence a líderes con claridad y seguridad.",
    link: "/es/servicios/ingles-para-presentaciones/",
    backgroundImage: publicSpeakingImage,
    squareImage: publicSpeakingSquareImage,
    slug: "ingles-para-presentaciones",
  },
] as const;

// Updated professional profiles to match standardized categories
export const professionalProfiles = [
  { name: "C-Suite Executives", link: "/en/services/executive-english/" },
  { name: "Directors & VPs", link: "/en/services/executive-english/" },
  { name: "Startup Founders", link: "/en/services/startup-founders/" },
  { name: "Software Engineers", link: "/en/services/tech-english/" },
  { name: "Tech Team Leads", link: "/en/services/tech-english/" },
  { name: "Supply Chain Managers", link: "/en/services/logistics-english/" },
  { name: "Logistics Coordinators", link: "/en/services/logistics-english/" },
  { name: "Medical Professionals", link: "/en/services/professional-english/" },
  { name: "Legal Professionals", link: "/en/services/professional-english/" },
  { name: "Public Speakers", link: "/en/services/high-stakes-english/" },
  { name: "Job Seekers", link: "/en/services/high-stakes-english/" },
] as const;

// Updated Spanish professional profiles to match standardized categories
export const professionalProfilesEs = [
  { name: "Ejecutivos C-Suite", link: "/es/servicios/ingles-para-ejecutivos/" },
  { name: "Directores y VPs", link: "/es/servicios/ingles-para-ejecutivos/" },
  {
    name: "Fundadores de Startups",
    link: "/es/servicios/ingles-para-fundadores-de-startups/",
  },
  {
    name: "Ingenieros de Software",
    link: "/es/servicios/ingles-para-tecnologia/",
  },
  {
    name: "Líderes de Equipos Técnicos",
    link: "/es/servicios/ingles-para-tecnologia/",
  },
  {
    name: "Gerentes de Cadena de Suministro",
    link: "/es/servicios/ingles-para-logistica/",
  },
  {
    name: "Coordinadores de Logística",
    link: "/es/servicios/ingles-para-logistica/",
  },
  {
    name: "Profesionales Médicos",
    link: "/es/servicios/ingles-para-profesionales/",
  },
  {
    name: "Profesionales Legales",
    link: "/es/servicios/ingles-para-profesionales/",
  },
  {
    name: "Conferencistas",
    link: "/es/servicios/ingles-para-presentaciones/",
  },
  {
    name: "Buscadores de Empleo",
    link: "/es/servicios/ingles-para-presentaciones/",
  },
] as const;
