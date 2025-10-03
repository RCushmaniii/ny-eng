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
    name: 'Startup Founders',
    name_es: 'Inglés para Fundadores de Startups',
    slug: 'startup-founders',
    esSlug: 'ingles-para-fundadores-de-startups',
    description: 'English coaching for startup founders focusing on pitches, funding, and international growth.',
    description_es: 'Coaching de inglés para fundadores de startups, enfocado en pitches, financiamiento y crecimiento internacional.'
  },
  {
    name: 'Tech English',
    name_es: 'Inglés para Tecnología',
    slug: 'tech-english',
    esSlug: 'ingles-para-tecnologia',
    description: 'Specialized English for tech professionals, covering software, sales, and technical communication.',
    description_es: 'Inglés especializado para profesionales de la tecnología, cubriendo software, ventas y comunicación técnica.'
  },
  {
    name: 'Logistics English',
    name_es: 'Inglés para Logística',
    slug: 'logistics-english',
    esSlug: 'ingles-para-logistica',
    description: 'English for the logistics and supply chain industry, focusing on clear communication for global operations.',
    description_es: 'Inglés para la industria de logística y cadena de suministro, enfocado en comunicación clara para operaciones globales.'
  },
  {
    name: 'Professional English',
    name_es: 'Inglés para Profesionales',
    slug: 'professional-english',
    esSlug: 'ingles-para-profesionales',
    description: 'General professional English for improving workplace communication, emails, and meetings.',
    description_es: 'Inglés profesional general para mejorar la comunicación en el lugar de trabajo, correos electrónicos y reuniones.'
  },
  {
    name: 'High-Stakes English',
    name_es: 'Inglés para Presentaciones',
    slug: 'high-stakes-english',
    esSlug: 'ingles-para-presentaciones',
    description: 'Advanced communication skills for high-stakes presentations, negotiations, and public speaking.',
    description_es: 'Habilidades de comunicación avanzadas para presentaciones de alto impacto, negociaciones y hablar en público.'
  },
  // Core Categories based on the new structure
  {
    name: 'Business English',
    name_es: 'Inglés para Negocios',
    slug: 'business-english',
    esSlug: 'ingles-para-negocios',
    description: 'Master business vocabulary, professional communication, and industry-specific English for global success.',
    description_es: 'Domina el vocabulario empresarial, la comunicación profesional y el inglés específico de tu industria para alcanzar el éxito global.'
  },
  {
    name: 'High-Impact Communication',
    name_es: 'Comunicación de Alto Impacto',
    slug: 'high-impact-communication',
    esSlug: 'comunicacion-de-alto-impacto',
    description: 'Excel in interviews, presentations, pitches, and high-stakes meetings with confident English communication.',
    description_es: 'Destaca en entrevistas, presentaciones, propuestas y reuniones importantes con una comunicación en inglés segura y efectiva.'
  },
  {
    name: 'Career & Leadership',
    name_es: 'Carrera & Liderazgo',
    slug: 'career-leadership',
    esSlug: 'carrera-liderazgo',
    description: 'Advance your career with leadership English skills for promotions, visibility, and executive presence.',
    description_es: 'Impulsa tu carrera con habilidades de liderazgo en inglés para conseguir promociones, visibilidad y presencia ejecutiva.'
  },
  {
    name: 'English Coaching',
    name_es: 'Coaching en Inglés',
    slug: 'english-coaching',
    esSlug: 'coaching-en-ingles',
    description: 'Discover proven English coaching methods, real client results, and performance-driven learning strategies.',
    description_es: 'Descubre métodos comprobados de coaching en inglés, resultados reales de clientes y estrategias de aprendizaje orientadas al rendimiento.'
  },
  {
    name: 'Executive English',
    name_es: 'Inglés Ejecutivo',
    slug: 'executive-english',
    esSlug: 'ingles-ejecutivo',
    description: 'Master executive presence, strategic communication, and leadership English for C-level professionals and senior managers. Develop the confidence and language skills needed for boardroom presentations, international negotiations, and high-stakes meetings.',
    description_es: 'Domina la presencia ejecutiva, la comunicación estratégica y el inglés de liderazgo para profesionales de nivel C y gerentes senior. Desarrolla la confianza y las habilidades lingüísticas necesarias para presentaciones en sala de juntas, negociaciones internacionales y reuniones de alto impacto.'
  }
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}
