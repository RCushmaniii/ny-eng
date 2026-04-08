import { useState } from "react";
import { ArrowDown, RotateCcw, Heart, Sparkles } from "lucide-react";
import AudioButton from "./AudioButton";

export interface WishTransformation {
  /** Reality — what is true */
  reality: string;
  realityEs: string;
  /** Wish/regret — how to express the unrealized version */
  wish: string;
  wishEs: string;
  /** Type of wish */
  wishType: "present" | "past" | "future" | "regret";
  /** Why this transformation */
  whyTransform: string;
  whyTransformEs: string;
  /** Emotional context — what feeling this captures */
  feeling: string;
  feelingEs: string;
}

interface Props {
  transformations: WishTransformation[];
  lang: "en" | "es";
}

const wishTypeColors: Record<WishTransformation["wishType"], string> = {
  present: "bg-blue-100 text-blue-700 border-blue-200",
  past: "bg-violet-100 text-violet-700 border-violet-200",
  future: "bg-emerald-100 text-emerald-700 border-emerald-200",
  regret: "bg-rose-100 text-rose-700 border-rose-200",
};

const wishTypeLabels: Record<WishTransformation["wishType"], { en: string; es: string }> = {
  present: { en: "wish about present", es: "deseo sobre el presente" },
  past: { en: "wish about past", es: "deseo sobre el pasado" },
  future: { en: "wish for future", es: "deseo para el futuro" },
  regret: { en: "regret", es: "arrepentimiento" },
};

export default function WishTransformer({ transformations, lang }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  const current = transformations[currentIndex];
  const isLast = currentIndex === transformations.length - 1;

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
          {lang === "es" ? "Transformación" : "Transformation"} {currentIndex + 1} /{" "}
          {transformations.length}
        </span>
        <button
          onClick={handleRestart}
          className="text-xs text-slate-400 hover:text-rose-500 inline-flex items-center gap-1 transition-colors"
        >
          <RotateCcw size={12} />
          {lang === "es" ? "Reiniciar" : "Restart"}
        </button>
      </div>

      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-rose-400 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / transformations.length) * 100}%` }}
        />
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden">
        {/* Feeling badge */}
        <div className="px-6 pt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart size={14} className="text-rose-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {lang === "es" ? current.feelingEs : current.feeling}
            </span>
          </div>
          <span
            className={`text-xs font-mono px-2 py-0.5 rounded-full border ${wishTypeColors[current.wishType]}`}
          >
            {wishTypeLabels[current.wishType][lang]}
          </span>
        </div>

        {/* Reality */}
        <div className="px-6 pt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            {lang === "es" ? "La realidad:" : "The reality:"}
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="text-base text-slate-700">{current.reality}</p>
            <p className="text-sm text-slate-400 mt-1">{current.realityEs}</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center py-3">
          <ArrowDown className="w-5 h-5 text-slate-300" />
        </div>

        {/* Wish/regret */}
        <div className="px-6 pb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose-500 mb-2 flex items-center gap-1">
            <Sparkles size={12} />
            {lang === "es" ? "Cómo expresarlo:" : "How to express it:"}
          </p>

          {!isRevealed ? (
            <button
              onClick={handleReveal}
              className="w-full py-4 rounded-xl border-2 border-dashed border-rose-300 text-rose-500 font-medium hover:bg-rose-50 transition-colors"
            >
              {lang === "es"
                ? "Toca para ver la transformación"
                : "Tap to see the transformation"}
            </button>
          ) : (
            <div className="space-y-3">
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 border-2 border-rose-300 rounded-xl p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-base text-slate-900 font-medium leading-relaxed">
                      "{current.wish}"
                    </p>
                    <p className="text-sm text-slate-500 mt-2">{current.wishEs}</p>
                  </div>
                  <div className="shrink-0 mt-1">
                    <AudioButton text={current.wish} size="sm" />
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-rose-200">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === "es" ? current.whyTransformEs : current.whyTransform}
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-500 text-white font-medium hover:bg-rose-400 transition-colors shadow-sm"
          >
            {lang === "es" ? "Siguiente" : "Next"}
          </button>
        </div>
      )}

      {isRevealed && isLast && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
          <p className="text-emerald-800 font-medium text-sm">
            {lang === "es"
              ? "¡Bien hecho! Has visto cómo expresar deseos y arrepentimientos en inglés."
              : "Well done! You've seen how to express wishes and regrets in English."}
          </p>
        </div>
      )}
    </section>
  );
}
