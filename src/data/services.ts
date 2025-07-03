// src/data/services.ts

// Import from the central service categories using proper Astro alias pattern
import { serviceCategories } from "@data/service-categories.js";

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
  backgroundImage: any; // ImageMetadata from Astro assets
  squareImage: any; // Square image for industry pages
  slug: string;
}

// Structured based on the 6 standardized categories in priority order
export const services: Service[] = [
  // 1. Executives & Directors - highest priority, highest budget audience
  {
    title: "Executive English",
    icon: "🎯",
    description: "Speak with confidence in boardrooms, investor meetings, and high-stakes presentations.",
    link: "/en/services/executive-english",
    backgroundImage: executiveEnglishImage,
    squareImage: executiveEnglishSquareImage,
    slug: "executive-english"
  },
  // 2. Startup Founders - ambitious, referral-prone audience
  {
    title: "English for Startup Founders",
    icon: "🚀",
    description: "Win over VCs, pitch your vision, and secure the funding your startup deserves—in English.",
    link: "/en/services/startup-founders",
    backgroundImage: startupFoundersImage,
    squareImage: startupFoundersSquareImage,
    slug: "startup-founders"
  },
  // 3. Engineers & Tech Leads - tech sector growth area
  {
    title: "English for Tech",
    icon: "💻",
    description: "Improve your daily stand-ups, code reviews, and technical documentation in Agile environments.",
    link: "/en/services/tech-english",
    backgroundImage: techImage,
    squareImage: techSquareImage,
    slug: "tech-english"
  },
  // 4. Logistics & Operations - differentiated niche with growth
  {
    title: "English for Logistics",
    icon: "🚚",
    description: "Master the language of supply chain, freight, and international trade documentation.",
    link: "/en/services/logistics-english",
    backgroundImage: logisticsImage,
    squareImage: logisticsSquareImage,
    slug: "logistics-english"
  },
  // 5. Medical & Legal Professionals - trust-driven, word-of-mouth audience
  {
    title: "English for Professional Fields",
    icon: "⚕️",
    description: "Communicate clearly with patients, clients, colleagues, and at industry conferences.",
    link: "/en/services/professional-english",
    backgroundImage: medicalImage,
    squareImage: medicalSquareImage,
    slug: "professional-english"
  },
  // 6. Public Speaking & Interviews - lead generation category
  {
    title: "High-Stakes English",
    icon: "🎤",
    description: "Captivate any audience, ace interviews, and deliver powerful presentations with confidence.",
    link: "/en/services/high-stakes-english",
    backgroundImage: publicSpeakingImage,
    squareImage: publicSpeakingSquareImage,
    slug: "high-stakes-english"
  }
] as const;

// Spanish version
// Spanish services following the same standardized categories and priority order
export const serviciosEs: Service[] = [
  // 1. Ejecutivos y Directores
  {
    title: "Inglés para Ejecutivos",
    icon: "🎯",
    description: "Habla con confianza en salas de juntas, reuniones con inversionistas y presentaciones de alto nivel.",
    link: "/es/servicios/ingles-para-ejecutivos",
    backgroundImage: executiveEnglishImage,
    squareImage: executiveEnglishSquareImage,
    slug: "ingles-para-ejecutivos"
  },
  // 2. Fundadores de Startups
  {
    title: "Inglés para Fundadores de Startups",
    icon: "🚀",
    description: "Perfecciona tu pitch para VCs, articula tu visión y asegura el financiamiento que tu startup merece.",
    link: "/es/servicios/ingles-para-fundadores-de-startups",
    backgroundImage: startupFoundersImage,
    squareImage: startupFoundersSquareImage,
    slug: "ingles-para-fundadores-de-startups"
  },
  // 3. Ingenieros y Líderes Técnicos
  {
    title: "Inglés para Tecnología",
    icon: "💻",
    description: "Mejora tus daily stand-ups, revisiones de código y documentación técnica en entornos ágiles.",
    link: "/es/servicios/ingles-para-tecnologia",
    backgroundImage: techImage,
    squareImage: techSquareImage,
    slug: "ingles-para-tecnologia"
  },
  // 4. Logística y Operaciones
  {
    title: "Inglés para Logística",
    icon: "🚚",
    description: "Domina el lenguaje de la cadena de suministro, transporte y documentación de comercio internacional.",
    link: "/es/servicios/ingles-para-logistica",
    backgroundImage: logisticsImage,
    squareImage: logisticsSquareImage,
    slug: "ingles-para-logistica"
  },
  // 5. Profesionales Médicos y Legales
  {
    title: "Inglés para Profesionales",
    icon: "⚕️",
    description: "Comunícate claramente con pacientes, clientes, colegas y en conferencias profesionales internacionales.",
    link: "/es/servicios/ingles-para-profesionales",
    backgroundImage: medicalImage,
    squareImage: medicalSquareImage,
    slug: "ingles-para-profesionales"
  },
  // 6. Presentaciones y Entrevistas
  {
    title: "Inglés para Situaciones Cruciales",
    icon: "🎤",
    description: "Cautiva a cualquier audiencia, domina entrevistas y realiza presentaciones poderosas con confianza.",
    link: "/es/servicios/ingles-para-presentaciones",
    backgroundImage: publicSpeakingImage,
    squareImage: publicSpeakingSquareImage,
    slug: "ingles-para-presentaciones"
  }
] as const;

// Updated professional profiles to match standardized categories
export const professionalProfiles = [
  { name: "C-Suite Executives", link: "/en/services/executive-english" },
  { name: "Directors & VPs", link: "/en/services/executive-english" },
  { name: "Startup Founders", link: "/en/services/startup-founders" },
  { name: "Software Engineers", link: "/en/services/tech-english" },
  { name: "Tech Team Leads", link: "/en/services/tech-english" },
  { name: "Supply Chain Managers", link: "/en/services/logistics-english" },
  { name: "Logistics Coordinators", link: "/en/services/logistics-english" },
  { name: "Medical Professionals", link: "/en/services/professional-english" },
  { name: "Legal Professionals", link: "/en/services/professional-english" },
  { name: "Public Speakers", link: "/en/services/high-stakes-english" },
  { name: "Job Seekers", link: "/en/services/high-stakes-english" }
] as const;

// Updated Spanish professional profiles to match standardized categories
export const professionalProfilesEs = [
  { name: "Ejecutivos C-Suite", link: "/es/servicios/ingles-para-ejecutivos" },
  { name: "Directores y VPs", link: "/es/servicios/ingles-para-ejecutivos" },
  { name: "Fundadores de Startups", link: "/es/servicios/ingles-para-fundadores-de-startups" },
  { name: "Ingenieros de Software", link: "/es/servicios/ingles-para-tecnologia" },
  { name: "Líderes de Equipos Técnicos", link: "/es/servicios/ingles-para-tecnologia" },
  { name: "Gerentes de Cadena de Suministro", link: "/es/servicios/ingles-para-logistica" },
  { name: "Coordinadores de Logística", link: "/es/servicios/ingles-para-logistica" },
  { name: "Profesionales Médicos", link: "/es/servicios/ingles-para-profesionales" },
  { name: "Profesionales Legales", link: "/es/servicios/ingles-para-profesionales" },
  { name: "Oradores Públicos", link: "/es/servicios/ingles-para-presentaciones" },
  { name: "Candidatos a Empleos", link: "/es/servicios/ingles-para-presentaciones" }
] as const;
