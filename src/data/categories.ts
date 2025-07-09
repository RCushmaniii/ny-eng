export interface Category {
  name: string;
  name_es?: string;
  slug: string;
  esSlug?: string; // Spanish-specific URL slug
  description: string;
}

export const categories: Category[] = [
  // Core Categories based on the new structure
  {
    name: 'Business English',
    name_es: 'Inglés para Negocios',
    slug: 'business-english',
    esSlug: 'ingles-para-negocios',
    description: 'Vocabulary, grammar, practical usage, common expressions, and industry-specific language'
  },
  {
    name: 'High-Impact Communication',
    name_es: 'Comunicación de Alto Impacto',
    slug: 'high-impact-communication',
    esSlug: 'comunicacion-de-alto-impacto',
    description: 'Interviews, presentations, pitches, stakeholder meetings, and performance evaluations'
  },
  {
    name: 'Career & Leadership',
    name_es: 'Carrera & Liderazgo',
    slug: 'career-leadership',
    esSlug: 'carrera-liderazgo',
    description: 'Promotions, role changes, visibility, positioning, and executive presence'
  },
  {
    name: 'English Coaching',
    name_es: 'Coaching en Inglés',
    slug: 'english-coaching',
    esSlug: 'coaching-en-ingles',
    description: 'How coaching works, real results, methodology, and performance improvements'
  },
  {
    name: 'Executive English',
    name_es: 'Inglés Ejecutivo',
    slug: 'executive-english',
    esSlug: 'ingles-ejecutivo',
    description: 'Speaking confidence, persuasion, rhythm, cultural nuances, credibility, and strategic communication'
  }
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}
