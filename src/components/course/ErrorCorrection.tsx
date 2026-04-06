import { useState } from "react";
import { AlertTriangle, CheckCircle, ArrowRight, RotateCcw } from "lucide-react";
import AudioButton from "./AudioButton";
import type { ErrorCorrectionSet } from "@data/intermediate/types";

interface Props {
  data: ErrorCorrectionSet;
  lang: "en" | "es";
}

export default function ErrorCorrection({ data, lang }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<"find" | "revealed">("find");
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [tappedCorrectly, setTappedCorrectly] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const current = data.items[currentIndex];

  const handleTapError = (tappedText: string) => {
    if (phase !== "find") return;

    const isCorrectTap =
      tappedText.trim().toLowerCase() ===
      current.incorrectHighlight.trim().toLowerCase();

    if (isCorrectTap) {
      setTappedCorrectly(true);
      setScore((s) => ({ correct: s.correct + 1, total: s.total + 1 }));
    } else {
      setTappedCorrectly(false);
      setScore((s) => ({ ...s, total: s.total + 1 }));
    }
    setPhase("revealed");
  };

  const handleShowAnswer = () => {
    setTappedCorrectly(false);
    setScore((s) => ({ ...s, total: s.total + 1 }));
    setPhase("revealed");
  };

  const handleNext = () => {
    if (currentIndex >= data.items.length - 1) {
      setIsFinished(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setPhase("find");
      setTappedCorrectly(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setPhase("find");
    setTappedCorrectly(false);
    setScore({ correct: 0, total: 0 });
    setIsFinished(false);
  };

  // Split sentence into tappable segments around the highlighted error
  const renderTappableSentence = (sentence: string, highlight: string) => {
    const parts = sentence.split(highlight);
    if (parts.length === 1) {
      // Highlight not found as exact substring — render as one tappable block
      return (
        <button
          onClick={() => handleTapError(sentence)}
          className="text-lg text-slate-800 hover:bg-rose-50 px-1 py-0.5 rounded transition-colors cursor-pointer"
        >
          {sentence}
        </button>
      );
    }

    return (
      <span className="text-lg leading-relaxed">
        {parts.map((part, i) => (
          <span key={i}>
            {part && (
              <button
                onClick={() => handleTapError(part.trim())}
                className="text-slate-800 hover:bg-slate-100 px-0.5 rounded transition-colors cursor-pointer"
              >
                {part}
              </button>
            )}
            {i < parts.length - 1 && (
              <button
                onClick={() => handleTapError(highlight)}
                className="text-slate-800 hover:bg-rose-100 px-0.5 rounded transition-colors cursor-pointer underline decoration-wavy decoration-rose-300 underline-offset-4"
              >
                {highlight}
              </button>
            )}
          </span>
        ))}
      </span>
    );
  };

  if (isFinished) {
    const pct = Math.round((score.correct / score.total) * 100);
    return (
      <div className="text-center py-12 space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100">
          <CheckCircle size={36} className="text-amber-500" />
        </div>
        <div>
          <p className="text-4xl font-bold text-slate-900">{pct}%</p>
          <p className="text-slate-500 mt-1">
            {score.correct} / {score.total}{" "}
            {lang === "es" ? "correctas" : "correct"}
          </p>
        </div>
        <p className="text-lg text-slate-700 max-w-md mx-auto">
          {pct >= 80
            ? lang === "es"
              ? "Excelente. Estás reconociendo los errores como un hablante avanzado."
              : "Excellent! You're spotting errors like an advanced speaker."
            : pct >= 50
              ? lang === "es"
                ? "Buen progreso. Repasa las explicaciones e intenta de nuevo."
                : "Good progress! Review the explanations and try again."
              : lang === "es"
                ? "Sigue practicando. Estos errores son muy comunes para hispanohablantes."
                : "Keep practicing! These errors are very common for Spanish speakers."}
        </p>
        <button
          onClick={handleRestart}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-400 transition-colors shadow-md"
        >
          <RotateCcw size={18} />
          {lang === "es" ? "Intentar de nuevo" : "Try again"}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-slate-400">
        <span>
          {currentIndex + 1} / {data.items.length}
        </span>
        <span>
          {score.correct} {lang === "es" ? "correctas" : "correct"}
        </span>
      </div>

      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-500 rounded-full transition-all duration-300"
          style={{
            width: `${((currentIndex + 1) / data.items.length) * 100}%`,
          }}
        />
      </div>

      {/* Error card */}
      <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden">
        {/* Instruction */}
        <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <AlertTriangle size={16} className="text-rose-500" />
            {phase === "find"
              ? lang === "es"
                ? "Toca la parte incorrecta de la oración"
                : "Tap the incorrect part of the sentence"
              : tappedCorrectly
                ? lang === "es"
                  ? "Correcto!"
                  : "Correct!"
                : lang === "es"
                  ? "Veamos la corrección"
                  : "Let's see the correction"}
          </div>
          {/* Error type badge */}
          <span
            className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${
              current.errorType === "literal-translation"
                ? "bg-rose-100 text-rose-600"
                : current.errorType === "tense-confusion"
                  ? "bg-purple-100 text-purple-600"
                  : current.errorType === "phrasal-verb"
                    ? "bg-orange-100 text-orange-600"
                    : current.errorType === "word-order"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-teal-100 text-teal-600"
            }`}
          >
            {current.errorType.replace("-", " ")}
          </span>
        </div>

        {/* Sentence */}
        <div className="p-6">
          {phase === "find" ? (
            <div className="text-center">
              {renderTappableSentence(
                current.incorrect,
                current.incorrectHighlight
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {/* Incorrect with strikethrough */}
              <div className="text-center">
                <p className="text-lg text-slate-400 line-through">
                  {current.incorrect.split(current.incorrectHighlight).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="text-rose-400 font-semibold">
                          {current.incorrectHighlight}
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>

              {/* Correct with highlight */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <AudioButton text={current.correct} size="sm" />
                  <p className="text-lg text-slate-800">
                    {current.correct.split(current.correctHighlight).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="text-emerald-600 font-bold">
                            {current.correctHighlight}
                          </span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              {/* Explanation */}
              <div
                className={`rounded-xl p-4 ${
                  tappedCorrectly
                    ? "bg-emerald-50 border border-emerald-200"
                    : "bg-amber-50 border border-amber-200"
                }`}
              >
                <p className="text-sm text-slate-700">
                  {lang === "es"
                    ? current.explanationEs
                    : current.explanation}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="px-6 pb-5">
          {phase === "find" ? (
            <button
              onClick={handleShowAnswer}
              className="w-full py-3 rounded-xl bg-slate-100 text-slate-600 font-medium hover:bg-slate-200 transition-colors text-sm"
            >
              {lang === "es" ? "No lo veo — muéstrame" : "I don't see it — show me"}
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-400 transition-colors"
            >
              {currentIndex < data.items.length - 1
                ? lang === "es"
                  ? "Siguiente"
                  : "Next"
                : lang === "es"
                  ? "Ver Resultados"
                  : "See Results"}
              <ArrowRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
