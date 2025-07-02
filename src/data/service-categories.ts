// Service categories source of truth
// This file centralizes all category slugs and labels to ensure consistency across the site

export interface ServiceCategory {
  slug: string;
  label: string;
  esSlug: string;
  esLabel: string;
}

// The 6 official service categories - the single source of truth for the entire site
// Ordered by business priority: high-value clients first, lead generation categories last
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "executive-english",
    label: "Executives & Directors",
    esSlug: "ingles-para-ejecutivos",
    esLabel: "Ejecutivos y Directores"
  },
  {
    slug: "startup-founders",
    label: "Startup Founders",
    esSlug: "ingles-para-fundadores-de-startups",
    esLabel: "Fundadores de Startups"
  },
  {
    slug: "tech-english",
    label: "Engineers & Tech Leads",
    esSlug: "ingles-para-tecnologia",
    esLabel: "Ingenieros y Líderes Técnicos"
  },
  {
    slug: "logistics-english",
    label: "Logistics & Operations",
    esSlug: "ingles-para-logistica",
    esLabel: "Logística y Operaciones"
  },
  {
    slug: "professional-english",
    label: "Medical & Legal Professionals",
    esSlug: "ingles-para-profesionales",
    esLabel: "Profesionales Médicos y Legales"
  },
  {
    slug: "high-stakes-english",
    label: "Public Speaking & Interviews",
    esSlug: "ingles-para-presentaciones",
    esLabel: "Presentaciones y Entrevistas"
  }
] as const;

// Helper function to convert old industry categories to new standardized categories
export const mapLegacyIndustry = (oldIndustry: string): string => {
  const mapping: Record<string, string> = {
    // Map old categories to new slugs
    "founders": "startup-founders",
    "c-level-executives": "executive-english",
    "business": "executive-english",
    "logistics": "logistics-english",
    "attorneys": "professional-english",
    "doctors": "professional-english",
    "engineering": "tech-english",
    "technology": "tech-english",
    "it-projects": "tech-english",
    "automotive": "logistics-english",
    // Include the new categories as-is for direct mapping
    "executive-english": "executive-english",
    "startup-founders": "startup-founders",
    "tech-english": "tech-english",
    "logistics-english": "logistics-english",
    "professional-english": "professional-english",
    "high-stakes-english": "high-stakes-english"
  };

  return mapping[oldIndustry] || "executive-english"; // Default to executive-english if no mapping
};

// Create lookup maps for convenience
export const categoryBySlug: Record<string, ServiceCategory> = 
  Object.fromEntries(serviceCategories.map(cat => [cat.slug, cat]));

export const categoryByEsSlug: Record<string, ServiceCategory> = 
  Object.fromEntries(serviceCategories.map(cat => [cat.esSlug, cat]));

// Export the industry labels for English and Spanish for dropdowns and filters
export const industryLabels = Object.fromEntries([
  ["all", "All Industries"],
  ...serviceCategories.map(cat => [cat.slug, cat.label])
]) as Record<string, string>;

export const industryLabelsEs = Object.fromEntries([
  ["all", "Todas las Industrias"],
  ...serviceCategories.map(cat => [cat.esSlug, cat.esLabel])
]) as Record<string, string>;
