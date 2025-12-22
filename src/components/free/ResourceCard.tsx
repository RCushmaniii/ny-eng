/**
 * ResourceCard.tsx
 * Individual resource card component for Free Resources Hub
 * Corporate, modern design aligned with NY English brand
 */

import {
  FileText,
  Download,
  ArrowRight,
  Clock,
  Users,
  Sparkles,
} from "lucide-react";
import type { FreeAsset } from "@/types/free-asset";

interface ResourceCardProps {
  asset: FreeAsset;
  lang: "en" | "es";
}

export default function ResourceCard({ asset, lang }: ResourceCardProps) {
  const content = asset[lang];

  // Safety check - if content is missing, don't render
  if (!content || !content.title) {
    console.warn(`Missing ${lang} content for asset:`, asset.metadata?.id);
    return null;
  }
  const slug = lang === "en" ? asset.slugEn : asset.slugEs;
  const basePath = lang === "en" ? "/en/resources" : "/es/recursos";
  const resourceUrl = `${basePath}/${slug}/`;

  // Determine badge
  const getBadge = () => {
    if (asset.analytics?.downloadCount && asset.analytics.downloadCount > 500) {
      return {
        text: lang === "en" ? "Most Popular" : "Más Popular",
        color: "bg-amber-500",
      };
    }

    const publishDate = new Date(asset.metadata.datePublished);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    if (publishDate > thirtyDaysAgo) {
      return { text: lang === "en" ? "New" : "Nuevo", color: "bg-green-500" };
    }

    return null;
  };

  const badge = getBadge();

  // Get icon based on content type
  const getIcon = () => {
    switch (asset.classification.contentType) {
      case "questions":
      case "sentences":
      case "guide":
        return FileText;
      default:
        return FileText;
    }
  };

  const Icon = getIcon();

  // Format personas for display
  const getPersonaLabel = (persona: string) => {
    const labels: Record<string, { en: string; es: string }> = {
      executive: { en: "Executive", es: "Ejecutivo" },
      manager: { en: "Manager", es: "Gerente" },
      founder: { en: "Founder", es: "Fundador" },
      engineer: { en: "Engineer", es: "Ingeniero" },
      sales: { en: "Sales", es: "Ventas" },
      "job-seeker": { en: "Job Seeker", es: "Buscador de Empleo" },
    };
    return labels[persona]?.[lang] || persona;
  };

  // Format scenarios for display
  const getScenarioLabel = (scenario: string) => {
    const labels: Record<string, { en: string; es: string }> = {
      leadership: { en: "Leadership", es: "Liderazgo" },
      meetings: { en: "Meetings", es: "Reuniones" },
      negotiations: { en: "Negotiations", es: "Negociaciones" },
      presentations: { en: "Presentations", es: "Presentaciones" },
      interviews: { en: "Interviews", es: "Entrevistas" },
    };
    return labels[scenario]?.[lang] || scenario;
  };

  return (
    <a
      href={resourceUrl}
      className="resource-card group bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          {/* Badges & Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            {badge && (
              <span
                className={`${badge.color} text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1`}
              >
                <Sparkles className="w-3 h-3" />
                {badge.text}
              </span>
            )}
            <span className="text-slate-500 text-sm flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {asset.classification.timeToComplete}
            </span>
            <span className="text-slate-400 text-sm capitalize">
              {asset.classification.format.replace("pdf-", "PDF ")}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            {content.title}
          </h3>

          {/* Subtitle */}
          <p className="text-slate-500 font-medium mb-3">{content.subtitle}</p>

          {/* Intro paragraph - use intro.paragraph if available, otherwise use description */}
          <p className="text-slate-600 leading-relaxed mb-4">
            {content.intro?.paragraph || content.description}
          </p>

          {/* Tags: Personas & Scenarios */}
          <div className="flex flex-wrap gap-2 mb-4">
            {(
              (asset.targeting as any)?.primaryPersona ||
              (asset.targeting as any)?.primaryPersonas ||
              []
            )
              .slice(0, 3)
              .map((persona: string) => (
                <span
                  key={persona}
                  className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-lg font-medium"
                >
                  {getPersonaLabel(persona)}
                </span>
              ))}
            {(asset.targeting?.scenarios || []).slice(0, 2).map((scenario) => (
              <span
                key={scenario}
                className="bg-slate-100 text-slate-600 text-sm px-3 py-1 rounded-lg"
              >
                {getScenarioLabel(scenario)}
              </span>
            ))}
          </div>

          {/* Stats & CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            {/* Download count */}
            {asset.analytics?.downloadCount &&
              asset.analytics.downloadCount > 0 && (
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Users className="w-4 h-4" />
                  <span>
                    {asset.analytics.downloadCount.toLocaleString()}{" "}
                    {lang === "en" ? "downloads" : "descargas"}
                  </span>
                </div>
              )}

            {/* CTA */}
            <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform ml-auto">
              {lang === "en" ? "Access Resource" : "Acceder al Recurso"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
