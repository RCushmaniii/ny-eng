/**
 * FreeResourcesHub.tsx
 * Main container for Free Resources Hub
 * Auto-discovers and displays all free assets with corporate design
 */

import { useState, useMemo } from "react";
import { Search, Filter, SlidersHorizontal, X, Info } from "lucide-react";
import ResourceCard from "./ResourceCard";
import SearchableSelect from "@components/ui/SearchableSelect";
import { formatLabel } from "@/lib/utils/labelFormatter";
import type { FreeAsset } from "@/types/free-asset";

interface FreeResourcesHubProps {
  resources: FreeAsset[];
  lang: "en" | "es";
}

type SortOption = "popular" | "newest" | "title";

export default function FreeResourcesHub({
  resources,
  lang,
}: FreeResourcesHubProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPersona, setSelectedPersona] = useState<string>("");
  const [selectedScenario, setSelectedScenario] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("popular");
  const [showFilters, setShowFilters] = useState(false);

  // Get unique personas and scenarios from all resources
  const { personas, scenarios } = useMemo(() => {
    const personaSet = new Set<string>();
    const scenarioSet = new Set<string>();

    resources.forEach((resource) => {
      const personaList =
        (resource.targeting as any)?.primaryPersona ||
        (resource.targeting as any)?.primaryPersonas ||
        [];
      personaList.forEach((p: string) => personaSet.add(p));

      const scenarioList = resource.targeting?.scenarios || [];
      scenarioList.forEach((s: string) => scenarioSet.add(s));
    });

    return {
      personas: Array.from(personaSet).sort(),
      scenarios: Array.from(scenarioSet).sort(),
    };
  }, [resources]);

  // Filter and sort resources
  const filteredAndSortedResources = useMemo(() => {
    let filtered = [...resources];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((resource) => {
        const content = resource[lang];
        return (
          content.title?.toLowerCase().includes(query) ||
          content.subtitle?.toLowerCase().includes(query) ||
          content.description?.toLowerCase().includes(query)
        );
      });
    }

    // Apply persona filter
    if (selectedPersona) {
      filtered = filtered.filter((resource) => {
        const personaList =
          (resource.targeting as any)?.primaryPersona ||
          (resource.targeting as any)?.primaryPersonas ||
          [];
        return personaList.includes(selectedPersona);
      });
    }

    // Apply scenario filter
    if (selectedScenario) {
      filtered = filtered.filter((resource) => {
        const scenarioList = resource.targeting?.scenarios || [];
        return scenarioList.includes(selectedScenario as any);
      });
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "popular":
          const aDownloads = a.analytics?.downloadCount || 0;
          const bDownloads = b.analytics?.downloadCount || 0;
          if (bDownloads !== aDownloads) return bDownloads - aDownloads;
          return (
            new Date(b.metadata.datePublished).getTime() -
            new Date(a.metadata.datePublished).getTime()
          );

        case "newest":
          return (
            new Date(b.metadata.datePublished).getTime() -
            new Date(a.metadata.datePublished).getTime()
          );

        case "title":
          return a[lang].title.localeCompare(b[lang].title);

        default:
          return 0;
      }
    });

    return filtered;
  }, [resources, searchQuery, selectedPersona, selectedScenario, sortBy, lang]);

  const labels = {
    en: {
      availableNow: "Available Now",
      usedBy: "Used by 200+ professionals",
      noResources: "No resources match your filters.",
      comingSoon: "Try adjusting your search or filters.",
      search: "Search resources...",
      searchTooltip:
        "Search by title, subtitle, or description. Results update as you type.",
      filters: "Filters",
      sortBy: "Sort by",
      persona: "Role",
      scenario: "Situation",
      allPersonas: "All Roles",
      allScenarios: "All Situations",
      clearFilters: "Clear all",
      showing: "Showing",
      of: "of",
      resources: "resources",
      sortPopular: "Most Popular",
      sortNewest: "Newest First",
      sortTitle: "A-Z",
    },
    es: {
      availableNow: "Disponible Ahora",
      usedBy: "Usado por más de 200 profesionales",
      noResources: "No hay recursos que coincidan con tus filtros.",
      comingSoon: "Intenta ajustar tu búsqueda o filtros.",
      search: "Buscar recursos...",
      searchTooltip:
        "Busca por título, subtítulo o descripción. Los resultados se actualizan mientras escribes.",
      filters: "Filtros",
      sortBy: "Ordenar por",
      persona: "Rol",
      scenario: "Situación",
      allPersonas: "Todos los Roles",
      allScenarios: "Todas las Situaciones",
      clearFilters: "Limpiar todo",
      showing: "Mostrando",
      of: "de",
      resources: "recursos",
      sortPopular: "Más Popular",
      sortNewest: "Más Reciente",
      sortTitle: "A-Z",
    },
  };

  const t = labels[lang];

  const hasActiveFilters = searchQuery || selectedPersona || selectedScenario;

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedPersona("");
    setSelectedScenario("");
  };

  // Format persona options for dropdown
  const personaOptions = useMemo(
    () => [
      { value: "", label: t.allPersonas },
      ...personas.map((persona) => ({
        value: persona,
        label: formatLabel(persona),
      })),
    ],
    [personas, t.allPersonas],
  );

  // Format scenario options for dropdown
  const scenarioOptions = useMemo(
    () => [
      { value: "", label: t.allScenarios },
      ...scenarios.map((scenario) => ({
        value: scenario,
        label: formatLabel(scenario),
      })),
    ],
    [scenarios, t.allScenarios],
  );

  return (
    <section className="resources-section pb-12 md:pb-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              {t.availableNow}
            </h2>
          </div>

          {/* Search and Controls Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {/* Info tooltip */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 group">
                <Info className="w-5 h-5 text-slate-400 cursor-help" />
                <div className="absolute right-0 top-8 w-64 bg-slate-900 text-white text-sm rounded-lg p-3 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  <div className="absolute -top-2 right-3 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-slate-900"></div>
                  {t.searchTooltip}
                </div>
              </div>
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 rounded-lg hover:bg-white transition-colors"
            >
              <Filter className="w-5 h-5" />
              {t.filters}
            </button>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="popular">{t.sortPopular}</option>
              <option value="newest">{t.sortNewest}</option>
              <option value="title">{t.sortTitle}</option>
            </select>
          </div>

          {/* Filters (Desktop always visible, Mobile toggle) */}
          <div className={`${showFilters ? "block" : "hidden"} sm:block`}>
            <div className="flex flex-wrap gap-3 items-center">
              {/* Persona Filter - Searchable */}
              <SearchableSelect
                value={selectedPersona}
                onChange={setSelectedPersona}
                options={personaOptions}
                placeholder={t.allPersonas}
                emptyMessage={
                  lang === "en" ? "No roles found" : "No se encontraron roles"
                }
                className="w-full sm:w-48"
              />

              {/* Scenario Filter - Searchable */}
              <SearchableSelect
                value={selectedScenario}
                onChange={setSelectedScenario}
                options={scenarioOptions}
                placeholder={t.allScenarios}
                emptyMessage={
                  lang === "en"
                    ? "No situations found"
                    : "No se encontraron situaciones"
                }
                className="w-full sm:w-48"
              />

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <X className="w-4 h-4" />
                  {t.clearFilters}
                </button>
              )}

              {/* Results Count */}
              <span className="ml-auto text-sm text-slate-500">
                {t.showing} {filteredAndSortedResources.length} {t.of}{" "}
                {resources.length} {t.resources}
              </span>
            </div>
          </div>
        </div>

        {/* Resource Grid */}
        {filteredAndSortedResources.length > 0 ? (
          <div className="grid gap-6 md:gap-8">
            {filteredAndSortedResources.map((resource: FreeAsset) => (
              <ResourceCard
                key={resource.metadata.id}
                asset={resource}
                lang={lang}
              />
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              {t.noResources}
            </h3>
            <p className="text-slate-500 mb-4">{t.comingSoon}</p>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {t.clearFilters}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
