interface Category {
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  // Existing categories
  {
    name: 'Tech',
    slug: 'tech',
    description: 'Latest in technology and software development'
  },
  {
    name: 'Web Development',
    slug: 'web-development',
    description: 'Tips and insights for better web development'
  },
  {
    name: 'Design',
    slug: 'design',
    description: 'Exploring design and user experience'
  },
  {
    name: 'Accessibility',
    slug: 'accessibility',
    description: 'Exploring accessibility and user experience'
  },
  {
    name: 'Theme Usage',
    slug: 'theme-usage',
    description: 'Learn how to use the theme'
  },
  {
    name: 'Astro JS',
    slug: 'astro-js',
    description: 'Everything about Astro JS framework and development'
  },
  {
    name: 'SEO',
    slug: 'seo',
    description: 'Search engine optimization strategies and best practices'
  },

  {
    name: 'Business English',
    slug: 'business-english',
    description: 'Master practical English for professional environments'
  },
  
  {
    name: 'Interview Prep',
    slug: 'interview-prep',
    description: 'Ace your next job interview with strategic English skills'
  },
  {
    name: 'Executive Coaching',
    slug: 'executive-coaching',
    description: 'Enhance leadership, communication, and strategic thinking'
  },
  {
    name: 'Career Growth',
    slug: 'career-growth',
    description: 'Level up your career with targeted English communication strategies'
  },
  {
    name: 'Fluency Tips',
    slug: 'fluency-tips',
    description: 'Boost your fluency with focused language practice'
  },
  {
    name: 'Corporate Training',
    slug: 'corporate-training',
    description: 'English coaching and workshops for teams and companies'
  },
  {
    name: 'Public Speaking',
    slug: 'public-speaking',
    description: 'Improve delivery and confidence for presentations and speeches'
  },
  {
    name: 'English for IT',
    slug: 'english-for-it',
    description: 'Tech-specific English for developers, engineers, and IT pros'
  },
  {
    name: 'English for Doctors',
    slug: 'english-for-doctors',
    description: 'Specialized English communication for medical professionals'
  },
  {
    name: 'English for Lawyers',
    slug: 'english-for-lawyers',
    description: 'English skills tailored for legal professionals'
  },
  {
    name: 'Productivity',
    slug: 'productivity',
    description: 'Tools, mindset, and language strategies to work smarter'
  }
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}
