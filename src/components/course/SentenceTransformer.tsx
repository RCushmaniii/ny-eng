// SentenceTransformer — reusable component for the advanced course.
//
// Shows a flat/weak/verbose sentence and reveals the strong upgraded version
// with a technique badge and explanation. The learner sees the before/after
// comparison and internalizes the pattern.
//
// Used in: U1 (rewriting flat sentences), U7 (contraction register), U9
// (sentence variety), U10 (natural-sounding rewrites).

import { useState } from "react";
import { ArrowDown, RotateCcw, Sparkles, Zap } from "lucide-react";
import AudioButton from "./AudioButton";
import type { SentenceTransform } from "@data/advanced/types";

interface Props {
  transforms: SentenceTransform[];
  lang: "en" | "es";
}

// Strip prosody notation (CAPS stress marks, "/" pause markers) for clean TTS
function cleanForSpeech(text: string): string {
  return text
    .replace(/\s*\/\s*/g, " ") // remove pause markers
    .replace(/\s+/g, " ")
    .trim();
}

export default function SentenceTransformer({ transforms, lang }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  const current = transforms[currentIndex];
  const isLast = currentIndex === transforms.length - 1;

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
          {lang === "es" ? "Transformación" : "Transform"} {currentIndex + 1} /{" "}
          {transforms.length}
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
          style={{ width: `${((currentIndex + 1) / transforms.length) * 100}%` }}
        />
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden">
        {/* Flat version */}
        <div className="px-6 pt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            {lang === "es" ? "La versión plana:" : "The flat version:"}
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <div className="flex items-start justify-between gap-3">
              <p className="text-base text-slate-700 italic leading-relaxed flex-1">
                "{current.flat}"
              </p>
              <div className="shrink-0 mt-1">
                <AudioButton text={current.flat} size="sm" />
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-1">{current.flatEs}</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center py-3">
          <ArrowDown className="w-5 h-5 text-slate-300" />
        </div>

        {/* Strong version */}
        <div className="px-6 pb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2 flex items-center gap-1">
            <Zap size={12} />
            {lang === "es" ? "La versión con impacto:" : "The version with impact:"}
          </p>

          {!isRevealed ? (
            <button
              onClick={handleReveal}
              className="w-full py-4 rounded-xl border-2 border-dashed border-amber-300 text-amber-600 font-medium hover:bg-amber-50 transition-colors"
            >
              {lang === "es"
                ? "Toca para revelar la versión mejorada"
                : "Tap to reveal the upgraded version"}
            </button>
          ) : (
            <div className="space-y-3">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-xl p-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-base text-slate-900 font-medium leading-relaxed flex-1">
                    "{current.strong}"
                  </p>
                  <div className="shrink-0 mt-1">
                    <AudioButton text={cleanForSpeech(current.strong)} size="sm" />
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-2">{current.strongEs}</p>

                {/* Technique badge + explanation */}
                <div className="mt-3 pt-3 border-t border-amber-200 space-y-2">
                  <span className="inline-flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded-full border bg-violet-100 text-violet-700 border-violet-200">
                    {lang === "es" ? current.techniqueEs : current.technique}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed flex items-start gap-1">
                    <Sparkles size={11} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>{lang === "es" ? current.whyEs : current.why}</span>
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
            {lang === "es" ? "Siguiente" : "Next"}
          </button>
        </div>
      )}

      {isRevealed && isLast && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
          <p className="text-emerald-800 font-medium text-sm">
            {lang === "es"
              ? "¡Excelente! Has visto cómo transformar oraciones planas en oraciones con impacto."
              : "Excellent! You've seen how to transform flat sentences into sentences with impact."}
          </p>
        </div>
      )}
    </section>
  );
}
