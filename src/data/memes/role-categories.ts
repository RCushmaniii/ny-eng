import type { RoleCategory, RoleCategoryConfig } from "./types";

/** Tier 1 role category configurations */
export const roleCategoryConfigs: RoleCategoryConfig[] = [
  {
    slug: "software-engineer",
    labelEn: "Software Engineers",
    labelEs: "Ingenieros de Software",
    descriptionEn:
      "Executive communication memes for software engineers navigating code reviews, standups, architecture discussions, and career conversations in English.",
    descriptionEs:
      "Memes de comunicación ejecutiva para ingenieros de software que navegan code reviews, standups, discusiones de arquitectura y conversaciones de carrera en inglés.",
    seoDescriptionEn:
      "Funny, relatable English memes for software engineers — from code review pushback to explaining technical debt to non-technical stakeholders. Learn executive communication through humor.",
    seoDescriptionEs:
      "Memes divertidos y relatable de inglés para ingenieros de software — desde pushback en code reviews hasta explicar deuda técnica a stakeholders no técnicos. Aprende comunicación ejecutiva con humor.",
  },
  {
    slug: "project-manager",
    labelEn: "Project Managers",
    labelEs: "Gerentes de Proyecto",
    descriptionEn:
      "Executive communication memes for project managers handling scope creep, stakeholder updates, resource negotiations, and cross-functional alignment in English.",
    descriptionEs:
      "Memes de comunicación ejecutiva para gerentes de proyecto manejando scope creep, actualizaciones a stakeholders, negociaciones de recursos y alineación cross-funcional en inglés.",
    seoDescriptionEn:
      "Funny, relatable English memes for project managers — from scope creep battles to status updates nobody wants to give. Master executive English through workplace humor.",
    seoDescriptionEs:
      "Memes divertidos y relatable de inglés para gerentes de proyecto — desde batallas de scope creep hasta actualizaciones de estado que nadie quiere dar. Domina el inglés ejecutivo con humor.",
  },
  {
    slug: "it-manager",
    labelEn: "IT Managers",
    labelEs: "Gerentes de IT",
    descriptionEn:
      "Executive communication memes for IT managers handling security incidents, vendor negotiations, change management, and translating IT wins into business language.",
    descriptionEs:
      "Memes de comunicación ejecutiva para gerentes de IT manejando incidentes de seguridad, negociaciones con proveedores, gestión del cambio y traduciendo logros de IT al lenguaje de negocios.",
    seoDescriptionEn:
      "Funny, relatable English memes for IT managers — from explaining breaches without causing panic to making the CFO understand why servers matter. Executive English through tech humor.",
    seoDescriptionEs:
      "Memes divertidos y relatable de inglés para gerentes de IT — desde explicar brechas sin causar pánico hasta hacer que el CFO entienda por qué importan los servidores. Inglés ejecutivo con humor tech.",
  },
  {
    slug: "sales-account-executive",
    labelEn: "Sales & Account Executives",
    labelEs: "Ejecutivos de Ventas y Cuentas",
    descriptionEn:
      "Executive communication memes for sales and account executives mastering cold outreach, objection handling, forecast accuracy, and partnership proposals in English.",
    descriptionEs:
      "Memes de comunicación ejecutiva para ejecutivos de ventas y cuentas dominando outreach en frío, manejo de objeciones, precisión de pronósticos y propuestas de alianzas en inglés.",
    seoDescriptionEn:
      "Funny, relatable English memes for sales professionals — from cold outreach that actually works to avoiding the discount trap. Sharpen your executive English through sales humor.",
    seoDescriptionEs:
      "Memes divertidos y relatable de inglés para profesionales de ventas — desde outreach en frío que realmente funciona hasta evitar la trampa del descuento. Mejora tu inglés ejecutivo con humor de ventas.",
  },
  {
    slug: "executive-csuite",
    labelEn: "Executives & C-Suite",
    labelEs: "Ejecutivos y C-Suite",
    descriptionEn:
      "Executive communication memes for C-suite leaders presenting to boards, managing crises, communicating strategy, and conducting media interviews in English.",
    descriptionEs:
      "Memes de comunicación ejecutiva para líderes C-suite presentando ante juntas directivas, manejando crisis, comunicando estrategia y conduciendo entrevistas con medios en inglés.",
    seoDescriptionEn:
      "Funny, relatable English memes for C-suite executives — from board presentations to crisis communication to media interviews. Master the language of leadership through humor.",
    seoDescriptionEs:
      "Memes divertidos y relatable de inglés para ejecutivos C-suite — desde presentaciones a juntas directivas hasta comunicación de crisis y entrevistas con medios. Domina el lenguaje del liderazgo con humor.",
  },
];

/** Look up a role category config by slug */
export function getRoleCategoryConfig(
  slug: RoleCategory,
): RoleCategoryConfig | undefined {
  return roleCategoryConfigs.find((c) => c.slug === slug);
}

/** All valid role category slugs */
export const allRoleCategories: RoleCategory[] = roleCategoryConfigs.map(
  (c) => c.slug,
);
