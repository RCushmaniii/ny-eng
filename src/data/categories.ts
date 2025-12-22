export interface Category {
  name: string;
  name_es?: string;
  slug: string;
  esSlug?: string; // Spanish-specific URL slug
  description: string;
  description_es?: string; // Spanish description for SEO
}

export const categories: Category[] = [
  // Service-based categories (ensure these match service pages)
  {
    name: "Startup Founders",
    name_es: "Fundadores de Startups",
    slug: "startup-founders",
    esSlug: "ingles-para-fundadores-de-startups",
    description:
      "Master English for startup founders. Perfect your investor pitch, communicate your vision clearly, and lead international teams with confidence.",
    description_es:
      "Domina el inglés para fundadores. Perfecciona tu pitch para inversores, comunica tu visión con claridad y lidera equipos internacionales con confianza.",
  },
  {
    name: "Tech English",
    name_es: "Inglés para Tecnología",
    slug: "tech-english",
    esSlug: "ingles-para-tecnologia",
    description:
      "Master technical English for IT and engineering. Explain complex concepts clearly, lead code reviews, and advance your tech career with confident communication.",
    description_es:
      "Domina el inglés técnico para IT. Explica conceptos complejos, lidera code reviews y avanza tu carrera tech con comunicación segura.",
  },
  {
    name: "Logistics English",
    name_es: "Inglés para Logística",
    slug: "logistics-english",
    esSlug: "ingles-para-logistica",
    description:
      "English for logistics and supply chain professionals. Master clear communication for global operations, vendor management, and international coordination.",
    description_es:
      "Inglés para profesionales de logística y cadena de suministro. Domina comunicación clara para operaciones globales y coordinación.",
  },
  {
    name: "Professional English",
    name_es: "Inglés para Profesionales",
    slug: "professional-english",
    esSlug: "ingles-para-profesionales",
    description:
      "Professional English for workplace success. Master business communication, write effective emails, and lead meetings to advance your career.",
    description_es:
      "Inglés profesional para el éxito laboral. Domina comunicación empresarial, escribe correos efectivos y lidera reuniones con confianza.",
  },
  {
    name: "High-Stakes English",
    name_es: "Inglés para Presentaciones",
    slug: "high-stakes-english",
    esSlug: "ingles-para-presentaciones",
    description:
      "Master English for critical presentations and negotiations. Build confidence and clarity for high-pressure situations and executive presence.",
    description_es:
      "Domina inglés para presentaciones críticas y negociaciones. Desarrolla confianza y claridad para situaciones de alta presión.",
  },
  // Core Categories based on the new structure
  {
    name: "Business English",
    name_es: "Inglés para Negocios",
    slug: "business-english",
    esSlug: "ingles-para-negocios",
    description:
      "Master business vocabulary, professional communication, and industry-specific English. Build the language skills you need for global business success.",
    description_es:
      "Domina el vocabulario empresarial, la comunicación profesional y el inglés específico de tu industria para alcanzar el éxito global.",
  },
  {
    name: "High-Impact Communication",
    name_es: "Comunicación de Alto Impacto",
    slug: "high-impact-communication",
    esSlug: "comunicacion-de-alto-impacto",
    description:
      "Excel in interviews, presentations, pitches, and high-stakes meetings with confident English communication. Master the skills to influence and persuade.",
    description_es:
      "Destaca en entrevistas, presentaciones, propuestas y reuniones importantes con una comunicación en inglés segura y efectiva.",
  },
  {
    name: "Career & Leadership",
    name_es: "Carrera & Liderazgo",
    slug: "career-leadership",
    esSlug: "carrera-liderazgo",
    description:
      "Advance your career with leadership English skills. Build the communication abilities you need for promotions, visibility, and executive presence.",
    description_es:
      "Impulsa tu carrera con habilidades de liderazgo en inglés para conseguir promociones, visibilidad y presencia ejecutiva.",
  },
  {
    name: "English Coaching",
    name_es: "Coaching en Inglés",
    slug: "english-coaching",
    esSlug: "coaching-en-ingles",
    description:
      "Discover proven English coaching methods, real client results, and performance-driven learning strategies. See how personalized coaching transforms careers.",
    description_es:
      "Descubre métodos comprobados de coaching en inglés, resultados reales de clientes y estrategias de aprendizaje orientadas al rendimiento.",
  },
  {
    name: "Executive English",
    name_es: "Inglés Ejecutivo",
    slug: "executive-english",
    esSlug: "ingles-ejecutivo",
    description:
      "Master executive presence and strategic communication for C-level leaders. Excel in boardroom presentations and high-stakes meetings.",
    description_es:
      "Domina la presencia ejecutiva y comunicación estratégica para líderes de nivel C. Destaca en presentaciones y reuniones importantes.",
  },
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
