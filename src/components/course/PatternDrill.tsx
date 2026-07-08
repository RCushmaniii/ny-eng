// PatternDrill — the signature interactive drill for the Verb Pattern Mastery course.
//
// The core skill: "you can't choose the pattern by meaning — you have to know the verb."
// Each item shows a slash-prompt or a gap sentence and asks the learner to pick the
// correct completion (to / about / for / — , or to-do / doing). Instant ✓/✗ feedback
// with a one-line diagnosis, the full model answer, and AudioButton on the answer.
//
// Bilingual. Styled to match ErrorCorrection / SentenceTransformer / CourseExam (amber).

import { useState } from "react";
import { Puzzle, CheckCircle, XCircle, ArrowRight, RotateCcw } from "lucide-react";
import AudioButton from "./AudioButton";
import type { PatternDrillSet } from "@data/verb-patterns/types";

interface Props {
  data: PatternDrillSet;
  lang: "en" | "es";
}

export default function PatternDrill({ data, lang }: Props) {
  const es = lang === "es";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const current = data.items[currentIndex];
  const isLast = currentIndex === data.items.length - 1;
  const answered = selected !== null;
  const correctIndex = current.options.findIndex((o) => o.correct);

  const handleSelect = (i: number) => {
    if (answered) return;
    setSelected(i);
    if (current.options[i].correct) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (isLast) {
      setIsFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
    setIsFinished(false);
  };

  // Render the prompt, turning a "___" gap into a visible slot.
  const renderPrompt = (text: string) => {
    if (!text.includes("___")) return <span>{text}</span>;
    const parts = text.split("___");
    return (
      <span>
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < parts.length - 1 && (
              <span className="inline-block min-w-[3.5rem] mx-1 border-b-2 border-dashed border-amber-400 align-bottom">
                &nbsp;
              </span>
            )}
          </span>
        ))}
      </span>
    );
  };

  if (isFinished) {
    const pct = Math.round((score / data.items.length) * 100);
    return (
      <div className="text-center py-12 space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100">
          <CheckCircle size={36} className="text-amber-500" />
        </div>
        <div>
          <p className="text-4xl font-bold text-slate-900">{pct}%</p>
          <p className="text-slate-500 mt-1">
            {score} / {data.items.length} {es ? "correctas" : "correct"}
          </p>
        </div>
        <p className="text-lg text-slate-700 max-w-md mx-auto">
          {pct >= 80
            ? es
              ? "Excelente. Estás eligiendo el patrón por el verbo, no por el significado."
              : "Excellent. You're choosing the pattern by the verb, not by the meaning."
            : pct >= 50
              ? es
                ? "Buen avance. Repasa las diagnosis y vuelve a intentarlo."
                : "Good progress. Review the diagnoses and try again."
              : es
                ? "Sigue practicando. Aprende cada verbo junto con su patrón, como un bloque."
                : "Keep practicing. Learn each verb together with its pattern, as one chunk."}
        </p>
        <button
          onClick={handleRestart}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-400 transition-colors shadow-md"
        >
          <RotateCcw size={18} />
          {es ? "Intentar de nuevo" : "Try again"}
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
          {score} {es ? "correctas" : "correct"}
        </span>
      </div>
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-500 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / data.items.length) * 100}%` }}
        />
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden">
        {/* Instruction */}
        <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <Puzzle size={16} className="text-amber-500" />
            {es ? data.instructionEs : data.instruction}
          </div>
        </div>

        {/* Prompt */}
        <div className="p-6">
          <p className="text-xl text-slate-800 text-center leading-relaxed mb-6">
            {renderPrompt(current.prompt)}
          </p>

          {/* Options */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {current.options.map((opt, i) => {
              let cls = "border-slate-200 hover:border-amber-300 hover:bg-amber-50 text-slate-700";
              if (answered) {
                if (i === correctIndex) cls = "border-emerald-400 bg-emerald-50 text-emerald-800";
                else if (i === selected) cls = "border-rose-400 bg-rose-50 text-rose-700";
                else cls = "border-slate-100 text-slate-400 opacity-60";
              }
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={answered}
                  className={`py-3 px-2 rounded-xl border-2 font-semibold transition-all ${cls} ${
                    answered ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {answered && (
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-center gap-2">
                {current.options[selected].correct ? (
                  <CheckCircle size={18} className="text-emerald-600" />
                ) : (
                  <XCircle size={18} className="text-rose-500" />
                )}
                <p className="text-lg text-slate-800 font-medium">{current.answer}</p>
                <AudioButton text={current.answer} size="sm" />
              </div>
              <div className="rounded-xl p-4 bg-amber-50 border border-amber-200">
                <p className="text-sm text-slate-700">
                  {es ? current.diagnosisEs : current.diagnosis}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Action */}
        <div className="px-6 pb-5">
          <button
            onClick={handleNext}
            disabled={!answered}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isLast ? (es ? "Ver Resultados" : "See Results") : es ? "Siguiente" : "Next"}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
