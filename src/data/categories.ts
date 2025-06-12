export interface Category {
  name: string;
  name_es?: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  // Existing categories
  {
    name: 'Tech',
    name_es: 'Tecnología',
    slug: 'tech',
    description: 'Latest in technology and software development'
  },
  {
    name: 'Web Development',
    name_es: 'Desarrollo Web',
    slug: 'web-development',
    description: 'Tips and insights for better web development'
  },
  {
    name: 'Design',
    name_es: 'Diseño',
    slug: 'design',
    description: 'Exploring design and user experience'
  },
  {
    name: 'Accessibility',
    name_es: 'Accesibilidad',
    slug: 'accessibility',
    description: 'Exploring accessibility and user experience'
  },
  {
    name: 'Theme Usage',
    name_es: 'Uso del Tema',
    slug: 'theme-usage',
    description: 'Learn how to use the theme'
  },
  {
    name: 'Astro JS',
    name_es: 'Astro JS',
    slug: 'astro-js',
    description: 'Everything about Astro JS framework and development'
  },
  {
    name: 'SEO',
    name_es: 'SEO',
    slug: 'seo',
    description: 'Search engine optimization strategies and best practices'
  },

  {
    name: 'Business English',
    name_es: 'Inglés de Negocios',
    slug: 'business-english',
    description: 'Master practical English for professional environments'
  },
  
  {
    name: 'Interview Prep',
    name_es: 'Preparación para Entrevistas',
    slug: 'interview-prep',
    description: 'Ace your next job interview with strategic English skills'
  },
  {
    name: 'Executive Coaching',
    name_es: 'Coaching Ejecutivo',
    slug: 'executive-coaching',
    description: 'Enhance leadership, communication, and strategic thinking'
  },
  {
    name: 'Career Growth',
    name_es: 'Crecimiento Profesional',
    slug: 'career-growth',
    description: 'Level up your career with targeted English communication strategies'
  },
  {
    name: 'Communication Skills',
    name_es: 'Habilidades de Comunicación',
    slug: 'communication-skills',
    description: 'Sharpen your speaking, listening, and overall communication for professional success'
  },
  {
    name: 'Presentation & Public Speaking',
    name_es: 'Presentaciones y Oratoria',
    slug: 'presentation-public-speaking',
    description: 'Master public speaking and presentations with confidence and clarity'
  },
  {
    name: 'Grammar & Vocabulary',
    name_es: 'Gramática y Vocabulario',
    slug: 'grammar-vocabulary',
    description: 'Improve your grammar and expand your vocabulary for effective communication'
  },
  {
    name: 'Fluency Tips',
    name_es: 'Consejos de Fluidez',
    slug: 'fluency-tips',
    description: 'Boost your fluency with focused language practice'
  },
  {
    name: 'Corporate Training',
    name_es: 'Capacitación Corporativa',
    slug: 'corporate-training',
    description: 'English coaching and workshops for teams and companies'
  },
  {
    name: 'Public Speaking',
    name_es: 'Oratoria',
    slug: 'public-speaking',
    description: 'Improve delivery and confidence for presentations and speeches'
  },
  {
    name: 'English for IT',
    name_es: 'Inglés para TI',
    slug: 'english-for-it',
    description: 'Tech-specific English for developers, engineers, and IT pros'
  },
  {
    name: 'English for Doctors',
    name_es: 'Inglés para Médicos',
    slug: 'english-for-doctors',
    description: 'Specialized English communication for medical professionals'
  },
  {
    name: 'English for Lawyers',
    name_es: 'Inglés para Abogados',
    slug: 'english-for-lawyers',
    description: 'English skills tailored for legal professionals'
  },
  {
    name: 'Productivity',
    name_es: 'Productividad',
    slug: 'productivity',
    description: 'Tools, mindset, and language strategies to work smarter'
  }
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}
