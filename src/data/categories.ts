export interface Category {
  name: string;
  name_es?: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  // Core Categories based on the new structure
  {
    name: 'Business English',
    name_es: 'Inglés para Negocios',
    slug: 'business-english',
    description: 'Vocabulary, grammar, practical usage, common expressions, and industry-specific language'
  },
  {
    name: 'High-Impact Communication',
    name_es: 'Comunicación de Alto Impacto',
    slug: 'high-impact-communication',
    description: 'Interviews, presentations, pitches, stakeholder meetings, and performance evaluations'
  },
  {
    name: 'Career & Leadership',
    name_es: 'Carrera & Liderazgo',
    slug: 'career-leadership',
    description: 'Promotions, role changes, visibility, positioning, and executive presence'
  },
  {
    name: 'English Coaching',
    name_es: 'Coaching en Inglés',
    slug: 'english-coaching',
    description: 'How coaching works, real results, methodology, and performance improvements'
  },
  {
    name: 'Executive English',
    name_es: 'Inglés Ejecutivo',
    slug: 'executive-english',
    description: 'Speaking confidence, persuasion, rhythm, cultural nuances, credibility, and strategic communication'
  },
  
  // Keep some tech categories for website related posts
  {
    name: 'Tech',
    name_es: 'Tecnología',
    slug: 'tech',
    description: 'Latest in technology and software development'
  },
  {
    name: 'Theme Usage',
    name_es: 'Uso del Tema',
    slug: 'theme-usage',
    description: 'Learn how to use the theme'
  }
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}
