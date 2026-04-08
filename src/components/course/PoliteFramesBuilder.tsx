import { useState } from "react";
import { ArrowRight, RotateCcw, Sparkles, ChevronDown } from "lucide-react";
import AudioButton from "./AudioButton";

export interface PoliteFrame {
  /** The casual / B1 version of the sentence (what learners say now) */
  casual: string;
  casualEs: string;
  /** The polite / B2 upgrade using a modal */
  polite: string;
  politeEs: string;
  /** Which modal is the upgrade about */
  modal: "would" | "could" | "should" | "might" | "may";
  /** Why the polite version is better — short explanation */
  why: string;
  whyEs: string;
  /** What kind of situation is this (invitation, request, suggestion, etc.) */
  situation: string;
  situationEs: string;
}

interface Props {
  frames: PoliteFrame[];
  lang: "en" | "es";
}

const modalColors: Record<PoliteFrame["modal"], string> = {
  would: "bg-violet-100 text-violet-700 border-violet-200",
  could: "bg-blue-100 text-blue-700 border-blue-200",
  should: "bg-emerald-100 text-emerald-700 border-emerald-200",
  might: "bg-amber-100 text-amber-700 border-amber-200",
  may: "bg-rose-100 text-rose-700 border-rose-200",
};

export default function PoliteFramesBuilder({ frames, lang }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showWhy, setShowWhy] = useState(false);

  const current = frames[currentIndex];
  const isLast = currentIndex === frames.length - 1;

  const handleReveal = () => setIsRevealed(true);

  const handleNext = () => {
    if (!isLast) {
      setCurrentIndex(currentIndex + 1);
      setIsRevealed(false);
      setShowWhy(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsRevealed(false);
    setShowWhy(false);
  };

  return (
    <section className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500">
          {lang === "es" ? "Frase" : "Phrase"} {currentIndex + 1} / {frames.length}
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
          style={{ width: `${((currentIndex + 1) / frames.length) * 100}%` }}
        />
      </div>

      {/* Frame card */}
      <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden">
        {/* Situation badge */}
        <div className="px-6 pt-6 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {lang === "es" ? current.situationEs : current.situation}
          </span>
          <span
            className={`text-xs font-mono px-2 py-0.5 rounded-full border ${modalColors[current.modal]}`}
          >
            {current.modal}
          </span>
        </div>

        {/* Casual version */}
        <div className="px-6 pt-4 pb-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            {lang === "es" ? "Lo que dirías ahora:" : "What you'd say now:"}
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="text-lg text-slate-700 italic">"{current.casual}"</p>
            <p className="text-sm text-slate-400 mt-1">{current.casualEs}</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center py-2">
          <div className="w-px h-6 bg-slate-200" />
        </div>

        {/* Polite version (hidden until reveal) */}
        <div className="px-6 pb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2 flex items-center gap-1">
            <Sparkles size={12} />
            {lang === "es" ? "La mejora B2:" : "The B2 upgrade:"}
          </p>

          {!isRevealed ? (
            <button
              onClick={handleReveal}
              className="w-full py-4 rounded-xl border-2 border-dashed border-amber-300 text-amber-600 font-medium hover:bg-amber-50 transition-colors"
            >
              {lang === "es"
                ? "Toca para revelar la versión cortés"
                : "Tap to reveal the polite version"}
            </button>
          ) : (
            <div className="space-y-3">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-xl p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-lg text-slate-900 font-medium">
                      "{current.polite}"
                    </p>
                    <p className="text-sm text-slate-500 mt-1">{current.politeEs}</p>
                  </div>
                  <div className="shrink-0 mt-1">
                    <AudioButton text={current.polite} size="sm" />
                  </div>
                </div>
              </div>

              {/* Why explanation */}
              <button
                onClick={() => setShowWhy(!showWhy)}
                className="w-full flex items-center justify-between text-sm text-slate-500 hover:text-slate-700 transition-colors px-1"
              >
                <span className="font-medium">
                  {lang === "es" ? "¿Por qué esto es mejor?" : "Why is this better?"}
                </span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${showWhy ? "rotate-180" : ""}`}
                />
              </button>
              {showWhy && (
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-600 leading-relaxed">
                  {lang === "es" ? current.whyEs : current.why}
                </div>
              )}
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
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {isRevealed && isLast && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
          <p className="text-emerald-800 font-medium">
            {lang === "es"
              ? "¡Excelente! Has terminado todas las frases corteses."
              : "Excellent! You've finished all the polite frames."}
          </p>
        </div>
      )}
    </section>
  );
}
