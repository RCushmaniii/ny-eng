import { useState } from "react";
import { ArrowDown, RotateCcw, Target, Sparkles } from "lucide-react";
import AudioButton from "./AudioButton";

export interface SpecifierExample {
  /** Vague version with too little information */
  vague: string;
  vagueEs: string;
  /** Specific version using a relative clause */
  specific: string;
  specificEs: string;
  /** The relative pronoun being used */
  relativePronoun: "that" | "which" | "who" | "whose" | "where" | "when";
  /** Highlight the relative clause portion (just the words to bold) */
  clauseHighlight: string;
  /** Why this relative pronoun is the right choice */
  whyPronoun: string;
  whyPronounEs: string;
  /** A real-world situation where this matters */
  situation: string;
  situationEs: string;
}

interface Props {
  examples: SpecifierExample[];
  lang: "en" | "es";
}

const pronounColors: Record<SpecifierExample["relativePronoun"], string> = {
  that: "bg-amber-100 text-amber-700 border-amber-200",
  which: "bg-blue-100 text-blue-700 border-blue-200",
  who: "bg-emerald-100 text-emerald-700 border-emerald-200",
  whose: "bg-violet-100 text-violet-700 border-violet-200",
  where: "bg-rose-100 text-rose-700 border-rose-200",
  when: "bg-teal-100 text-teal-700 border-teal-200",
};

// Helper to highlight the relative clause portion in a sentence
function renderHighlighted(sentence: string, highlight: string): React.ReactNode {
  if (!highlight || !sentence.includes(highlight)) {
    return sentence;
  }
  const parts = sentence.split(highlight);
  return (
    <>
      {parts[0]}
      <span className="font-bold text-amber-700 bg-amber-100 px-1 rounded">
        {highlight}
      </span>
      {parts[1]}
    </>
  );
}

export default function SpecifierBuilder({ examples, lang }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  const current = examples[currentIndex];
  const isLast = currentIndex === examples.length - 1;

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
          {lang === "es" ? "Ejemplo" : "Example"} {currentIndex + 1} / {examples.length}
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
          style={{ width: `${((currentIndex + 1) / examples.length) * 100}%` }}
        />
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden">
        {/* Situation */}
        <div className="px-6 pt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            {lang === "es" ? "La situación:" : "The situation:"}
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            {lang === "es" ? current.situationEs : current.situation}
          </p>
        </div>

        {/* Vague */}
        <div className="px-6 pt-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            {lang === "es" ? "Demasiado vago:" : "Too vague:"}
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <div className="flex items-start gap-2">
              <Target className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
              <div className="flex-1">
                <p className="text-base text-slate-700 italic">"{current.vague}"</p>
                <p className="text-sm text-slate-400 mt-1">{current.vagueEs}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center py-3">
          <ArrowDown className="w-5 h-5 text-slate-300" />
        </div>

        {/* Specific (hidden until reveal) */}
        <div className="px-6 pb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2 flex items-center gap-1">
            <Sparkles size={12} />
            {lang === "es" ? "Específico (con cláusula relativa):" : "Specific (with relative clause):"}
          </p>

          {!isRevealed ? (
            <button
              onClick={handleReveal}
              className="w-full py-4 rounded-xl border-2 border-dashed border-amber-300 text-amber-600 font-medium hover:bg-amber-50 transition-colors"
            >
              {lang === "es"
                ? "Toca para revelar la versión específica"
                : "Tap to reveal the specific version"}
            </button>
          ) : (
            <div className="space-y-3">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-xl p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-base text-slate-900 leading-relaxed">
                      "{renderHighlighted(current.specific, current.clauseHighlight)}"
                    </p>
                    <p className="text-sm text-slate-500 mt-2">{current.specificEs}</p>
                  </div>
                  <div className="shrink-0 mt-1">
                    <AudioButton text={current.specific} size="sm" />
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-amber-200 flex items-start gap-2">
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded-full border shrink-0 ${pronounColors[current.relativePronoun]}`}
                  >
                    {current.relativePronoun}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === "es" ? current.whyPronounEs : current.whyPronoun}
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
              ? "¡Bien hecho! Ya sabes cómo usar cláusulas relativas para ser específico."
              : "Well done! You now know how to use relative clauses to be specific."}
          </p>
        </div>
      )}
    </section>
  );
}
