const serviceCategories = [
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
];
Object.fromEntries(serviceCategories.map((cat) => [cat.slug, cat]));
Object.fromEntries(serviceCategories.map((cat) => [cat.esSlug, cat]));
Object.fromEntries([
  ["all", "All Industries"],
  ...serviceCategories.map((cat) => [cat.slug, cat.label])
]);
Object.fromEntries([
  ["all", "Todas las Industrias"],
  ...serviceCategories.map((cat) => [cat.esSlug, cat.esLabel])
]);

export { serviceCategories as s };
