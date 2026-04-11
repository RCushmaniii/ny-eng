// WordPairLab — reusable component for the advanced course.
//
// Shows a "weak" version of a phrase next to its "strong" upgrade. The
// learner reveals the strong version with a tap, sees the highlighted word
// difference, and gets a short explanation of WHY the strong version is
// better.
//
// Used in: U1 (weak verbs vs strong verbs), U2 (word traps), U3 (pronoun
// corrections), U10 (collocations).

import { useState } from "react";
import { ArrowDown, RotateCcw, Sparkles, TrendingUp } from "lucide-react";
import AudioButton from "./AudioButton";
import type { WordPair } from "@data/advanced/types";

interface Props {
  pairs: WordPair[];
  lang: "en" | "es";
}

// Render a sentence with the highlight word visually emphasized. We split on
// the first occurrence of `highlight` so we don't accidentally bold every
// instance of a common word.
function renderHighlighted(
  text: string,
  highlight: string,
  flavor: "weak" | "strong",
): JSX.Element {
  if (!highlight || !text.includes(highlight)) {
    return text;
  }
  const idx = text.indexOf(highlight);
  const before = text.slice(0, idx);
  const after = text.slice(idx + highlight.length);
  const cls =
    flavor === "weak"
      ? "font-bold text-slate-500 line-through decoration-rose-400 decoration-2"
      : "font-bold text-amber-700 bg-amber-100 px-1 rounded";
  return (
    <>
      {before}
      <span className={cls}>{highlight}</span>
      {after}
    </>
  );
}

export default function WordPairLab({ pairs, lang }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  const current = pairs[currentIndex];
  const isLast = currentIndex === pairs.length - 1;

  const handleReveal = () => setIsRevealed(true);

  const handleNext = () => {
    if (!isLast) {
      setCurrentIndex(currentIndex + 1);
      setIsRevealed(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsRevealed(false);
  };

  return (
    <section className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500">
          {lang === "es" ? "Par" : "Pair"} {currentIndex + 1} / {pairs.length}
        </span>
        <button
          onClick={handleRestart}
          className="text-xs text-slate-400 hover:text-amber-600 inline-flex items-center gap-1 transition-colors"
        >
          <RotateCcw size={12} />
          {lang === "es" ? "Reiniciar" : "Restart"}
        </button>
      </div>

      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-500 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / pairs.length) * 100}%` }}
        />
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden">
        {/* Optional category badge */}
        {current.category && (
          <div className="px-6 pt-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {lang === "es" && current.categoryEs
                ? current.categoryEs
                : current.category}
            </span>
          </div>
        )}

        {/* Weak version */}
        <div className={`px-6 ${current.category ? "pt-3" : "pt-6"}`}>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            {lang === "es" ? "Lo que muchos dicen:" : "What many people say:"}
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="text-base text-slate-700 italic leading-relaxed">
              "{renderHighlighted(current.weak, current.weakHighlight, "weak")}"
            </p>
            <p className="text-sm text-slate-400 mt-1">{current.weakEs}</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center py-3">
          <ArrowDown className="w-5 h-5 text-slate-300" />
        </div>

        {/* Strong version */}
        <div className="px-6 pb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2 flex items-center gap-1">
            <TrendingUp size={12} />
            {lang === "es" ? "Lo que dicen los nativos:" : "What native speakers say:"}
          </p>

          {!isRevealed ? (
            <button
              onClick={handleReveal}
              className="w-full py-4 rounded-xl border-2 border-dashed border-amber-300 text-amber-600 font-medium hover:bg-amber-50 transition-colors"
            >
              {lang === "es"
                ? "Toca para revelar la versión fuerte"
                : "Tap to reveal the strong version"}
            </button>
          ) : (
            <div className="space-y-3">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-xl p-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-base text-slate-900 font-medium leading-relaxed flex-1">
                    "{renderHighlighted(current.strong, current.strongHighlight, "strong")}"
                  </p>
                  <div className="shrink-0 mt-1">
                    <AudioButton text={current.strong} size="sm" />
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-2">{current.strongEs}</p>
                <div className="mt-3 pt-3 border-t border-amber-200 flex items-start gap-2">
                  <Sparkles size={12} className="text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === "es" ? current.whyEs : current.why}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Next button */}
      {isRevealed && !isLast && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-white font-medium hover:bg-amber-400 transition-colors shadow-sm"
          >
            {lang === "es" ? "Siguiente par" : "Next pair"}
          </button>
        </div>
      )}

      {isRevealed && isLast && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
          <p className="text-emerald-800 font-medium text-sm">
            {lang === "es"
              ? "¡Bien hecho! Ya conoces los pares fuertes de esta sección."
              : "Well done! You know the strong pairs from this section."}
          </p>
        </div>
      )}
    </section>
  );
}
