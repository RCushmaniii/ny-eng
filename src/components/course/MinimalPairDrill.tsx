// MinimalPairDrill — reusable component for the advanced course.
//
// Shows two words that differ by a single sound (ship/sheep, walk/work).
// The learner sees both, plays audio for each, and reads the distinction
// tip. Used primarily in Unit 6 (Pronunciation) but available for any
// unit that needs sound discrimination practice.

import { useState } from "react";
import { RotateCcw, Volume2 } from "lucide-react";
import AudioButton from "./AudioButton";
import type { MinimalPair } from "@data/advanced/types";

interface Props {
  pairs: MinimalPair[];
  lang: "en" | "es";
}

export default function MinimalPairDrill({ pairs, lang }: Props) {
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
          className="text-xs text-slate-400 hover:text-violet-600 inline-flex items-center gap-1 transition-colors"
        >
          <RotateCcw size={12} />
          {lang === "es" ? "Reiniciar" : "Restart"}
        </button>
      </div>

      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-violet-500 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / pairs.length) * 100}%` }}
        />
      </div>

      {/* The two words side by side */}
      <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden">
        {/* Distinction label */}
        <div className="px-6 pt-6 pb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-600">
            {lang === "es" ? current.distinctionEs : current.distinction}
          </span>
        </div>

        {/* Word pair cards */}
        <div className="grid grid-cols-2 gap-4 px-6 pb-4">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-center space-y-3">
            <p className="text-2xl font-bold text-blue-900">{current.wordA}</p>
            <AudioButton text={current.wordA} size="md" />
            <p className="text-xs text-blue-600 leading-relaxed italic">
              "{current.exampleA}"
            </p>
          </div>
          <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4 text-center space-y-3">
            <p className="text-2xl font-bold text-amber-900">{current.wordB}</p>
            <AudioButton text={current.wordB} size="md" />
            <p className="text-xs text-amber-600 leading-relaxed italic">
              "{current.exampleB}"
            </p>
          </div>
        </div>

        {/* Tip reveal */}
        <div className="px-6 pb-6">
          {!isRevealed ? (
            <button
              onClick={handleReveal}
              className="w-full py-3 rounded-xl border-2 border-dashed border-violet-300 text-violet-600 font-medium hover:bg-violet-50 transition-colors text-sm"
            >
              <Volume2 size={14} className="inline mr-1" />
              {lang === "es"
                ? "Toca para ver el tip de pronunciación"
                : "Tap to see the pronunciation tip"}
            </button>
          ) : (
            <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                {lang === "es" ? current.tipEs : current.tip}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Next button */}
      {isRevealed && !isLast && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-500 text-white font-medium hover:bg-violet-400 transition-colors shadow-sm"
          >
            {lang === "es" ? "Siguiente par" : "Next pair"}
          </button>
        </div>
      )}

      {isRevealed && isLast && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
          <p className="text-emerald-800 font-medium text-sm">
            {lang === "es"
              ? "¡Bien hecho! Has practicado todos los pares mínimos."
              : "Well done! You've practiced all the minimal pairs."}
          </p>
        </div>
      )}
    </section>
  );
}
