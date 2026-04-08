import { useState } from "react";
import { Search, RotateCcw, Sparkles, CheckCircle2, XCircle } from "lucide-react";
import AudioButton from "./AudioButton";

export interface DeductionScenario {
  /** The observation/clue */
  clue: string;
  clueEs: string;
  /** Possible deductions, each using a different modal */
  deductions: {
    text: string;
    textEs: string;
    modal: "must" | "can't" | "might" | "could" | "must have" | "can't have" | "might have";
    isMostLikely: boolean;
    why: string;
    whyEs: string;
  }[];
}

interface Props {
  scenarios: DeductionScenario[];
  lang: "en" | "es";
}

const modalColors: Record<DeductionScenario["deductions"][number]["modal"], string> = {
  must: "bg-emerald-100 text-emerald-700 border-emerald-200",
  "can't": "bg-rose-100 text-rose-700 border-rose-200",
  might: "bg-amber-100 text-amber-700 border-amber-200",
  could: "bg-blue-100 text-blue-700 border-blue-200",
  "must have": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "can't have": "bg-rose-100 text-rose-700 border-rose-200",
  "might have": "bg-amber-100 text-amber-700 border-amber-200",
};

export default function DeductionLab({ scenarios, lang }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDeduction, setSelectedDeduction] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const current = scenarios[currentIndex];
  const isLast = currentIndex === scenarios.length - 1;

  const handleSelect = (i: number) => {
    if (showResult) return;
    setSelectedDeduction(i);
    setShowResult(true);
  };

  const handleNext = () => {
    if (!isLast) {
      setCurrentIndex(currentIndex + 1);
      setSelectedDeduction(null);
      setShowResult(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedDeduction(null);
    setShowResult(false);
  };

  return (
    <section className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500">
          {lang === "es" ? "Escenario" : "Scenario"} {currentIndex + 1} /{" "}
          {scenarios.length}
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
          style={{ width: `${((currentIndex + 1) / scenarios.length) * 100}%` }}
        />
      </div>

      {/* Clue card */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
        <div className="flex items-start gap-3">
          <Search className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              {lang === "es" ? "La pista:" : "The clue:"}
            </p>
            <p className="text-base leading-relaxed">
              {lang === "es" ? current.clueEs : current.clue}
            </p>
          </div>
        </div>
      </div>

      {/* Question */}
      <p className="text-sm font-semibold text-slate-700 text-center">
        {lang === "es"
          ? "¿Qué deducción es la más probable?"
          : "Which deduction is most likely?"}
      </p>

      {/* Deduction options */}
      <div className="space-y-3">
        {current.deductions.map((d, i) => {
          const isSelected = selectedDeduction === i;
          const isCorrect = d.isMostLikely;
          const showCorrectness = showResult;

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                showCorrectness
                  ? isCorrect
                    ? "border-emerald-400 bg-emerald-50"
                    : isSelected
                      ? "border-rose-400 bg-rose-50"
                      : "border-slate-200 bg-white opacity-60"
                  : "border-slate-200 bg-white hover:border-amber-300 hover:bg-amber-50"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`text-xs font-mono px-2 py-0.5 rounded-full border shrink-0 ${modalColors[d.modal]}`}
                >
                  {d.modal}
                </span>
                <div className="flex-1">
                  <p className="text-base text-slate-900 leading-relaxed">"{d.text}"</p>
                  <p className="text-sm text-slate-500 mt-1">{d.textEs}</p>
                </div>
                {showCorrectness && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                )}
                {showCorrectness && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                )}
              </div>
              {showCorrectness && (isSelected || isCorrect) && (
                <div className="mt-3 pt-3 border-t border-slate-200 flex items-start gap-2">
                  <Sparkles size={12} className="text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === "es" ? d.whyEs : d.why}
                  </p>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Audio for the most likely deduction */}
      {showResult && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center justify-between">
          <p className="text-sm text-slate-700">
            {lang === "es" ? "Escucha la deducción correcta:" : "Hear the correct deduction:"}
          </p>
          <AudioButton
            text={current.deductions.find((d) => d.isMostLikely)?.text || ""}
            size="sm"
          />
        </div>
      )}

      {/* Next button */}
      {showResult && !isLast && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-white font-medium hover:bg-amber-400 transition-colors shadow-sm"
          >
            {lang === "es" ? "Siguiente escenario" : "Next scenario"}
          </button>
        </div>
      )}

      {showResult && isLast && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
          <p className="text-emerald-800 font-medium text-sm">
            {lang === "es"
              ? "¡Has terminado! Ahora puedes razonar en voz alta como un nativo."
              : "You've finished! You can now reason out loud like a native speaker."}
          </p>
        </div>
      )}
    </section>
  );
}
