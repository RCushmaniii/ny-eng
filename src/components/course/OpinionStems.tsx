import { useState } from "react";
import { ChevronRight, MessageSquareQuote } from "lucide-react";
import AudioButton from "./AudioButton";

export interface OpinionStem {
  /** The sentence starter / frame */
  stem: string;
  stemEs: string;
  /** A complete example using the stem */
  example: string;
  exampleEs: string;
  /** Tone/register hint */
  register: "neutral" | "soft" | "strong" | "academic";
}

export interface OpinionCategory {
  /** Category label like "State your opinion", "Soften disagreement", etc. */
  label: string;
  labelEs: string;
  /** What this category is for, in plain language */
  description: string;
  descriptionEs: string;
  /** Icon hint (passed to the parent for rendering) */
  intent: "state" | "soften" | "agree" | "disagree" | "concede" | "challenge";
  /** The frames in this category */
  stems: OpinionStem[];
}

interface Props {
  categories: OpinionCategory[];
  lang: "en" | "es";
}

const intentColors: Record<OpinionCategory["intent"], string> = {
  state: "from-blue-500 to-blue-600",
  soften: "from-violet-500 to-violet-600",
  agree: "from-emerald-500 to-emerald-600",
  disagree: "from-rose-500 to-rose-600",
  concede: "from-amber-500 to-amber-600",
  challenge: "from-slate-600 to-slate-700",
};

const registerLabels: Record<OpinionStem["register"], { en: string; es: string }> = {
  neutral: { en: "neutral", es: "neutral" },
  soft: { en: "soft", es: "suave" },
  strong: { en: "strong", es: "fuerte" },
  academic: { en: "academic", es: "académico" },
};

const registerColors: Record<OpinionStem["register"], string> = {
  neutral: "bg-slate-100 text-slate-600 border-slate-200",
  soft: "bg-violet-100 text-violet-700 border-violet-200",
  strong: "bg-rose-100 text-rose-700 border-rose-200",
  academic: "bg-blue-100 text-blue-700 border-blue-200",
};

export default function OpinionStems({ categories, lang }: Props) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedExamples, setExpandedExamples] = useState<Set<string>>(new Set());

  const current = categories[activeCategory];

  const toggleExample = (key: string) => {
    const next = new Set(expandedExamples);
    if (next.has(key)) {
      next.delete(key);
    } else {
      next.add(key);
    }
    setExpandedExamples(next);
  };

  return (
    <section className="space-y-6">
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              i === activeCategory
                ? `bg-gradient-to-r ${intentColors[cat.intent]} text-white shadow-sm`
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {lang === "es" ? cat.labelEs : cat.label}
          </button>
        ))}
      </div>

      {/* Category description */}
      <div
        className={`bg-gradient-to-br ${intentColors[current.intent]} rounded-2xl p-5 text-white`}
      >
        <div className="flex items-start gap-3">
          <MessageSquareQuote className="w-5 h-5 shrink-0 mt-0.5 opacity-80" />
          <div>
            <h3 className="font-bold mb-1">
              {lang === "es" ? current.labelEs : current.label}
            </h3>
            <p className="text-sm opacity-90 leading-relaxed">
              {lang === "es" ? current.descriptionEs : current.description}
            </p>
          </div>
        </div>
      </div>

      {/* Stems list */}
      <div className="space-y-3">
        {current.stems.map((stem, i) => {
          const key = `${activeCategory}-${i}`;
          const isExpanded = expandedExamples.has(key);
          return (
            <div
              key={key}
              className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:border-amber-300 transition-colors"
            >
              <button
                onClick={() => toggleExample(key)}
                className="w-full flex items-start justify-between gap-3 p-4 text-left"
              >
                <div className="flex-1">
                  <p className="text-base font-medium text-slate-900 leading-relaxed">
                    "{stem.stem}..."
                  </p>
                  <p className="text-sm text-slate-500 mt-0.5">{stem.stemEs}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded-full border ${registerColors[stem.register]}`}
                  >
                    {registerLabels[stem.register][lang]}
                  </span>
                  <ChevronRight
                    size={18}
                    className={`text-slate-300 transition-transform ${isExpanded ? "rotate-90" : ""}`}
                  />
                </div>
              </button>
              {isExpanded && (
                <div className="border-t border-slate-100 bg-slate-50 p-4 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {lang === "es" ? "Ejemplo completo:" : "Full example:"}
                  </p>
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-base text-slate-900 italic flex-1">
                      "{stem.example}"
                    </p>
                    <div className="shrink-0 mt-0.5">
                      <AudioButton text={stem.example} size="sm" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-500">{stem.exampleEs}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
