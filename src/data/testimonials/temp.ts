// Updated testimonialsByIndustry using standardized categories
// Group testimonials by industry using the standardized categories in priority order
export const testimonialsByIndustry = {
  "all": publishedTestimonials,
  // 1. Executives & Directors - highest priority
  "executive-english": publishedTestimonials.filter(t => t.industries.includes("executive-english")),
  // 2. Startup Founders - high referral potential
  "startup-founders": publishedTestimonials.filter(t => t.industries.includes("startup-founders")),
  // 3. Engineers & Tech Leads - growing tech sector
  "tech-english": publishedTestimonials.filter(t => t.industries.includes("tech-english")),
  // 4. Logistics & Operations - differentiated niche
  "logistics-english": publishedTestimonials.filter(t => t.industries.includes("logistics-english")),
  // 5. Medical & Legal Professionals - trust-driven
  "professional-english": publishedTestimonials.filter(t => t.industries.includes("professional-english")),
  // 6. Public Speaking & Interviews - lead gen category
  "high-stakes-english": publishedTestimonials.filter(t => t.industries.includes("high-stakes-english")),
} as const;

// Updated industry labels using standardized categories from service-categories.ts
export const industryLabels = {
  "all": "All Industries",
  // Follow the same order as in testimonialsByIndustry for consistency
  "executive-english": serviceCategories[0].label, // Executives & Directors
  "startup-founders": serviceCategories[1].label, // Startup Founders
  "tech-english": serviceCategories[2].label, // Engineers & Tech Leads
  "logistics-english": serviceCategories[3].label, // Logistics & Operations
  "professional-english": serviceCategories[4].label, // Medical & Legal Professionals
  "high-stakes-english": serviceCategories[5].label // Public Speaking & Interviews
} as const;

// Spanish version of industry labels for the filter dropdown
export const industryLabelsEs = {
  "all": "Todas las Industrias",
  "executive-english": serviceCategories[0].esLabel, // Ejecutivos y Directores
  "startup-founders": serviceCategories[1].esLabel, // Fundadores de Startups
  "tech-english": serviceCategories[2].esLabel, // Ingenieros y Líderes Técnicos
  "logistics-english": serviceCategories[3].esLabel, // Logística y Operaciones
  "professional-english": serviceCategories[4].esLabel, // Profesionales Médicos y Legales
  "high-stakes-english": serviceCategories[5].esLabel // Presentaciones y Entrevistas
} as const;
