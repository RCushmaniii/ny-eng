import { useState } from "react";
import { AlertTriangle, Eye, RotateCcw, Stethoscope, Phone, Pill, Hospital } from "lucide-react";
import AudioButton from "./AudioButton";

export interface SurvivalPhrase {
  /** The situation the learner is in (in their language) */
  situation: string;
  situationEs: string;
  /** The exact phrase to say in English */
  english: string;
  /** Spanish version of the phrase */
  spanish: string;
  /** Why this exact wording matters */
  whyExact: string;
  whyExactEs: string;
  /** Urgency level */
  urgency: "low" | "medium" | "high";
}

export interface SurvivalCategory {
  label: string;
  labelEs: string;
  description: string;
  descriptionEs: string;
  icon: "stethoscope" | "phone" | "pill" | "hospital";
  phrases: SurvivalPhrase[];
}

interface Props {
  categories: SurvivalCategory[];
  lang: "en" | "es";
}

const iconMap = {
  stethoscope: Stethoscope,
  phone: Phone,
  pill: Pill,
  hospital: Hospital,
};

const urgencyStyles: Record<SurvivalPhrase["urgency"], string> = {
  low: "bg-blue-100 text-blue-700 border-blue-200",
  medium: "bg-amber-100 text-amber-700 border-amber-200",
  high: "bg-rose-100 text-rose-700 border-rose-200",
};

const urgencyLabels: Record<SurvivalPhrase["urgency"], { en: string; es: string }> = {
  low: { en: "routine", es: "rutina" },
  medium: { en: "important", es: "importante" },
  high: { en: "urgent", es: "urgente" },
};

export default function SurvivalPhrases({ categories, lang }: Props) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  const current = categories[activeCategory];
  const Icon = iconMap[current.icon];

  const toggle = (key: string) => {
    const next = new Set(revealed);
    if (next.has(key)) {
      next.delete(key);
    } else {
      next.add(key);
    }
    setRevealed(next);
  };

  const revealAll = () => {
    const all = new Set<string>();
    current.phrases.forEach((_, i) => all.add(`${activeCategory}-${i}`));
    setRevealed(all);
  };

  const reset = () => setRevealed(new Set());

  const switchCategory = (idx: number) => {
    setActiveCategory(idx);
    setRevealed(new Set());
  };

  return (
    <section className="space-y-6">
      {/* Category tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {categories.map((cat, i) => {
          const CatIcon = iconMap[cat.icon];
          const isActive = i === activeCategory;
          return (
            <button
              key={i}
              onClick={() => switchCategory(i)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? "bg-rose-500 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <CatIcon size={16} />
              <span className="truncate">
                {lang === "es" ? cat.labelEs : cat.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Category description */}
      <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 flex items-start gap-3">
        <Icon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-slate-900 text-sm">
            {lang === "es" ? current.labelEs : current.label}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mt-1">
            {lang === "es" ? current.descriptionEs : current.description}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={revealAll}
          className="text-xs text-slate-500 hover:text-rose-600 inline-flex items-center gap-1 transition-colors font-medium"
        >
          <Eye size={12} />
          {lang === "es" ? "Mostrar todo" : "Reveal all"}
        </button>
        <button
          onClick={reset}
          className="text-xs text-slate-400 hover:text-rose-600 inline-flex items-center gap-1 transition-colors"
        >
          <RotateCcw size={12} />
          {lang === "es" ? "Reiniciar" : "Reset"}
        </button>
      </div>

      {/* Phrases */}
      <div className="space-y-3">
        {current.phrases.map((phrase, i) => {
          const key = `${activeCategory}-${i}`;
          const isRevealed = revealed.has(key);
          return (
            <div
              key={key}
              className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden"
            >
              {/* Situation */}
              <div className="p-4 bg-slate-50 border-b border-slate-200">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      {lang === "es" ? "La situación:" : "The situation:"}
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {lang === "es" ? phrase.situationEs : phrase.situation}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded-full border shrink-0 ${urgencyStyles[phrase.urgency]}`}
                  >
                    {urgencyLabels[phrase.urgency][lang]}
                  </span>
                </div>
              </div>

              {/* Phrase reveal */}
              <div className="p-4">
                {!isRevealed ? (
                  <button
                    onClick={() => toggle(key)}
                    className="w-full py-3 rounded-lg border-2 border-dashed border-rose-200 text-rose-600 font-medium hover:bg-rose-50 transition-colors text-sm"
                  >
                    {lang === "es"
                      ? "Toca para ver qué decir en inglés"
                      : "Tap to see what to say in English"}
                  </button>
                ) : (
                  <div className="space-y-3">
                    <div className="bg-gradient-to-br from-rose-50 to-rose-100 border-2 border-rose-300 rounded-xl p-4">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-base font-bold text-slate-900 flex-1 leading-relaxed">
                          "{phrase.english}"
                        </p>
                        <div className="shrink-0">
                          <AudioButton text={phrase.english} size="sm" />
                        </div>
                      </div>
                      <p className="text-sm text-slate-500 mt-2">{phrase.spanish}</p>
                    </div>
                    <div className="flex items-start gap-2 px-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {lang === "es" ? phrase.whyExactEs : phrase.whyExact}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
