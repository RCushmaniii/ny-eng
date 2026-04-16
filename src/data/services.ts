// src/data/services.ts

import type { ImageMetadata } from "astro";

// Import service images from assets
import executiveEnglishImage from "@assets/images/services/executive-english-services.jpg";
import logisticsImage from "@assets/images/services/logistics-services.jpg";
import medicalImage from "@assets/images/services/medical-services.jpg";
import publicSpeakingImage from "@assets/images/services/public-speaking-services.jpg";
import startupFoundersImage from "@assets/images/services/startup-founders-services.jpg";
import techImage from "@assets/images/services/tech-services.jpg";

// Import industry square images
import executiveEnglishSquareImage from "@assets/images/industries/executive-english.jpg";
import logisticsSquareImage from "@assets/images/industries/logistics.jpg";
import medicalSquareImage from "@assets/images/industries/medical.jpg";
import publicSpeakingSquareImage from "@assets/images/industries/public-speaking.jpg";
import startupFoundersSquareImage from "@assets/images/industries/startup-founders.jpg";
import techSquareImage from "@assets/images/industries/tech.jpg";

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
      "Lead board meetings, deliver strategic updates, and negotiate with the authority your role demands—without translating in your head.",
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
      "Pitch to US investors, recruit across borders, and lead your team in English—with the confidence that closes rounds.",
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
      "Turn technical complexity into clear business value. Explain architecture to non-technical stakeholders without losing precision or credibility.",
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
      "Navigate customs, freight forwarding, and cross-border operations in English. Communicate with US brokers, carriers, and compliance teams with precision.",
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
      "One wrong word changes everything. Precision English for medical and legal professionals who need absolute clarity when the stakes are real.",
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
      "You get one shot. Targeted preparation for the interview, investor pitch, or career-defining presentation you can't afford to fumble.",
    link: "/en/services/high-stakes-english/",
    backgroundImage: publicSpeakingImage,
    squareImage: publicSpeakingSquareImage,
    slug: "high-stakes-english",
  },
] as const;

// Corporate program — rendered as its own section on the services index,
// not in the individual-coaching grid, so it lives as a standalone export.
export const corporatePackage: Service = {
  title: "Courage While Leading in English",
  icon: "🏢",
  description:
    "A 12-week program for senior leadership teams. Individual preparation, group presentation under peer pressure, and a final assessment — designed to close the gap between private fluency and public performance.",
  link: "/en/services/corporate-package/",
  backgroundImage: executiveEnglishImage,
  squareImage: executiveEnglishSquareImage,
  slug: "corporate-package",
};

// Spanish version
export const serviciosEs: Service[] = [
  // 1. Ejecutivos y Directores
  {
    title: "Inglés para Negocios y Ejecutivos",
    icon: "🎯",
    description:
      "Lidera juntas directivas, entrega actualizaciones estratégicas y negocia con la autoridad que tu rol exige—sin traducir en tu cabeza.",
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
      "Presenta ante inversionistas de EE. UU., recluta internacionalmente y lidera tu equipo en inglés—con la confianza que cierra rondas.",
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
      "Convierte la complejidad técnica en valor de negocio claro. Explica arquitectura a stakeholders no técnicos sin perder precisión ni credibilidad.",
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
      "Navega aduanas, transporte de carga y operaciones transfronterizas en inglés. Comunícate con brokers, transportistas y equipos de cumplimiento de EE. UU. con precisión.",
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
      "Una palabra mal elegida cambia todo. Inglés de precisión para profesionales médicos y legales que necesitan claridad absoluta cuando lo que está en juego es real.",
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
      "Tienes una oportunidad. Preparación enfocada para la entrevista, el pitch a inversionistas o la presentación que define tu carrera.",
    link: "/es/servicios/ingles-para-presentaciones/",
    backgroundImage: publicSpeakingImage,
    squareImage: publicSpeakingSquareImage,
    slug: "ingles-para-presentaciones",
  },
] as const;

export const paqueteCorporativo: Service = {
  title: "Valentía al Liderar en Inglés",
  icon: "🏢",
  description:
    "Un programa de 12 semanas para equipos de liderazgo senior. Preparación individual, presentación grupal bajo presión de pares y evaluación final — diseñado para cerrar la brecha entre la fluidez privada y el desempeño público.",
  link: "/es/servicios/paquete-corporativo/",
  backgroundImage: executiveEnglishImage,
  squareImage: executiveEnglishSquareImage,
  slug: "paquete-corporativo",
};

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
