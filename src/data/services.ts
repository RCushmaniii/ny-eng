// src/data/services.ts

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

export const services: Service[] = [
  {
    title: "Executive English",
    icon: "🎯",
    description: "Speak with confidence in boardrooms, investor meetings, and high-stakes presentations.",
    link: "/en/services/executive-english",
    backgroundImage: executiveEnglishImage,
    squareImage: executiveEnglishSquareImage,
    slug: "executive-english"
  },
  {
    title: "Technical Sales Fluency",
    icon: "⚙️",
    description: "Explain complex systems, product specs, and software solutions with clarity and impact.",
    link: "/en/services/technical-sales-english",
    backgroundImage: technicalSalesImage,
    squareImage: technicalSalesSquareImage,
    slug: "technical-sales-english"
  },
  {
    title: "English for Logistics",
    icon: "🚚",
    description: "Master the language of supply chain, freight, and international trade documentation.",
    link: "/en/services/logistics-english",
    backgroundImage: logisticsImage,
    squareImage: logisticsSquareImage,
    slug: "logistics-english"
  },
  {
    title: "English for Medical Professionals",
    icon: "⚕️",
    description: "Communicate clearly with patients, colleagues, and at international medical conferences.",
    link: "/en/services/medical-english",
    backgroundImage: medicalImage,
    squareImage: medicalSquareImage,
    slug: "medical-english"
  },
  {
    title: "Interview Preparation",
    icon: "💬",
    description: "Secure your next role by mastering storytelling and answering tough questions with confidence.",
    link: "/en/services/interview-prep",
    backgroundImage: interviewPrepImage,
    squareImage: interviewPrepSquareImage,
    slug: "interview-prep"
  },
  {
    title: "Public Speaking & Presentations",
    icon: "🎤",
    description: "Captivate any audience, from small team meetings to large conference keynotes.",
    link: "/en/services/public-speaking-english",
    backgroundImage: publicSpeakingImage,
    squareImage: publicSpeakingSquareImage,
    slug: "public-speaking-english"
  },
  {
    title: "English for Startup Founders",
    icon: "🚀",
    description: "Perfect your pitch for VCs, articulate your vision, and secure the funding your startup deserves.",
    link: "/en/services/startup-founders",
    backgroundImage: startupFoundersImage,
    squareImage: startupFoundersSquareImage,
    slug: "startup-founders"
  },
  {
    title: "English for Tech",
    icon: "💻",
    description: "Enhance your daily stand-ups, code reviews, and technical documentation in agile environments.",
    link: "/en/services/tech-english",
    backgroundImage: techImage,
    squareImage: techSquareImage,
    slug: "tech-english"
  }
] as const;

// Spanish version
export const serviciosEs: Service[] = [
  {
    title: "Inglés para Ejecutivos",
    icon: "🎯",
    description: "Habla con confianza en salas de juntas, reuniones con inversionistas y presentaciones importantes.",
    link: "/es/servicios/ingles-para-ejecutivos",
    backgroundImage: executiveEnglishImage,
    squareImage: executiveEnglishSquareImage,
    slug: "ingles-para-ejecutivos"
  },
  {
    title: "Inglés para Ventas Técnicas",
    icon: "⚙️",
    description: "Explica sistemas complejos, especificaciones de productos y soluciones de software con claridad e impacto.",
    link: "/es/servicios/ingles-para-ventas-tecnicas",
    backgroundImage: technicalSalesImage,
    squareImage: technicalSalesSquareImage,
    slug: "ingles-para-ventas-tecnicas"
  },
  {
    title: "Inglés para Logística",
    icon: "🚚",
    description: "Domina el lenguaje de la cadena de suministro, transporte y documentación de comercio internacional.",
    link: "/es/servicios/ingles-para-logistica",
    backgroundImage: logisticsImage,
    squareImage: logisticsSquareImage,
    slug: "ingles-para-logistica"
  },
  {
    title: "Inglés para Médicos",
    icon: "⚕️",
    description: "Comunícate claramente con pacientes, colegas y en conferencias médicas internacionales.",
    link: "/es/servicios/ingles-para-medicos",
    backgroundImage: medicalImage,
    squareImage: medicalSquareImage,
    slug: "ingles-para-medicos"
  },
  {
    title: "Preparación para Entrevistas",
    icon: "💬",
    description: "Asegura tu próximo puesto dominando el storytelling y respondiendo preguntas difíciles con confianza.",
    link: "/es/servicios/preparacion-para-entrevistas",
    backgroundImage: interviewPrepImage,
    squareImage: interviewPrepSquareImage,
    slug: "preparacion-para-entrevistas"
  },
  {
    title: "Hablar en Público",
    icon: "🎤",
    description: "Cautiva a cualquier audiencia, desde reuniones de equipo hasta conferencias magistrales.",
    link: "/es/servicios/hablar-en-publico",
    backgroundImage: publicSpeakingImage,
    squareImage: publicSpeakingSquareImage,
    slug: "hablar-en-publico"
  },
  {
    title: "Inglés para Fundadores de Startups",
    icon: "🚀",
    description: "Perfecciona tu pitch para VCs, articula tu visión y asegura el financiamiento que tu startup merece.",
    link: "/es/servicios/ingles-para-fundadores-de-startups",
    backgroundImage: startupFoundersImage,
    squareImage: startupFoundersSquareImage,
    slug: "ingles-para-fundadores-de-startups"
  },
  {
    title: "Inglés para Tecnología",
    icon: "💻",
    description: "Mejora tus daily stand-ups, revisiones de código y documentación técnica en entornos ágiles.",
    link: "/es/servicios/ingles-para-tecnologia",
    backgroundImage: techImage,
    squareImage: techSquareImage,
    slug: "ingles-para-tecnologia"
  }
] as const;

export const professionalProfiles = [
  { name: "Startup Founders", link: "/en/services/startup-founders" },
  { name: "Software Engineers", link: "/en/services/tech-english" }, 
  { name: "Sales Directors", link: "/en/services/technical-sales-english" },
  { name: "Medical Professionals", link: "/en/services/medical-english" },
  { name: "Supply Chain Managers", link: "/en/services/logistics-english" },
  { name: "Product Managers", link: "/en/services/tech-english" },
  { name: "C-Suite Executives", link: "/en/services/executive-english" },
  { name: "Logistics Coordinators", link: "/en/services/logistics-english" }
] as const;

export const professionalProfilesEs = [
  { name: "Fundadores de Startups", link: "/es/servicios/ingles-para-fundadores-de-startups" },
  { name: "Ingenieros de Software", link: "/es/servicios/ingles-para-tecnologia" },
  { name: "Directores de Ventas", link: "/es/servicios/ingles-para-ventas-tecnicas" }, 
  { name: "Profesionales Médicos", link: "/es/servicios/ingles-para-medicos" },
  { name: "Gerentes de Cadena de Suministro", link: "/es/servicios/ingles-para-logistica" },
  { name: "Gerentes de Producto", link: "/es/servicios/ingles-para-tecnologia" },
  { name: "Ejecutivos C-Suite", link: "/es/servicios/ingles-para-ejecutivos" },
  { name: "Coordinadores de Logística", link: "/es/servicios/ingles-para-logistica" }
] as const;
