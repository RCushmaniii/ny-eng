import { useState, useMemo } from "react";
import {
  RotateCcw,
  Eye,
  ArrowRight,
  Trophy,
  Languages,
} from "lucide-react";
import AudioButton from "./AudioButton";
import type { VocabItem } from "@data/course/unit-1";

interface Props {
  vocabulary: VocabItem[];
  lang: "en" | "es";
}

type TestMode = "es-to-en" | "en-to-es";

export default function SelfTest({ vocabulary, lang }: Props) {
  const [mode, setMode] = useState<TestMode>("es-to-en");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [isFinished, setIsFinished] = useState(false);

  // Shuffle vocabulary
  const shuffled = useMemo(
    () => [...vocabulary].sort(() => Math.random() - 0.5),
    [],
  );

  const current = shuffled[currentIndex];

  const prompt = mode === "es-to-en" ? current.spanish : current.english;
  const answer = mode === "es-to-en" ? current.english : current.spanish;

  const handleKnew = () => {
    setScore((s) => ({ correct: s.correct + 1, total: s.total + 1 }));
    advance();
  };

  const handleDidntKnow = () => {
    setScore((s) => ({ ...s, total: s.total + 1 }));
    advance();
  };

  const advance = () => {
    if (currentIndex >= shuffled.length - 1) {
      setIsFinished(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setIsRevealed(false);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setIsRevealed(false);
    setScore({ correct: 0, total: 0 });
    setIsFinished(false);
  };

  if (isFinished) {
    const pct = Math.round((score.correct / score.total) * 100);
    return (
      <div className="text-center py-12 space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100">
          <Trophy size={36} className="text-amber-500" />
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
              ? "Excelente trabajo. Estás listo para la siguiente unidad."
              : "Excellent work! You're ready for the next unit."
            : pct >= 60
              ? lang === "es"
                ? "Buen progreso. Repasa los que fallaste e intenta de nuevo."
                : "Good progress! Review the ones you missed and try again."
              : lang === "es"
                ? "Sigue practicando. Escucha el audio y repasa la unidad."
                : "Keep practicing! Listen to the audio and review the unit."}
        </p>
        <button
          onClick={restart}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-400 transition-colors shadow-md"
        >
          <RotateCcw size={18} />
          {lang === "es" ? "Intentar de nuevo" : "Try again"}
        </button>
      </div>
    );
  }

  return (
    <section className="space-y-6">
      {/* Mode toggle + progress */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex bg-slate-100 rounded-lg p-1">
          <button
            onClick={() => {
              setMode("es-to-en");
              restart();
            }}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              mode === "es-to-en"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            ES → EN
          </button>
          <button
            onClick={() => {
              setMode("en-to-es");
              restart();
            }}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              mode === "en-to-es"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            EN → ES
          </button>
        </div>
        <span className="text-sm text-slate-400">
          {currentIndex + 1} / {shuffled.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-500 rounded-full transition-all duration-300"
          style={{
            width: `${((currentIndex + 1) / shuffled.length) * 100}%`,
          }}
        />
      </div>

      {/* Flashcard */}
      <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden min-h-[260px] flex flex-col">
        {/* Prompt */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            {mode === "es-to-en"
              ? lang === "es"
                ? "¿Cómo se dice en inglés?"
                : "How do you say this in English?"
              : lang === "es"
                ? "¿Cómo se dice en español?"
                : "How do you say this in Spanish?"}
          </span>
          <p className="text-3xl font-bold text-slate-900 mb-4">{prompt}</p>
          {mode === "es-to-en" && (
            <AudioButton text={current.english} size="md" />
          )}

          {/* Type badge */}
          <span
            className={`mt-3 text-xs px-2 py-0.5 rounded-full ${
              current.type === "modal"
                ? "bg-purple-100 text-purple-700"
                : current.type === "verb"
                  ? "bg-blue-100 text-blue-700"
                  : current.type === "phrase"
                    ? "bg-green-100 text-green-700"
                    : "bg-slate-100 text-slate-600"
            }`}
          >
            {current.type}
          </span>
        </div>

        {/* Answer area */}
        <div className="border-t border-slate-200 bg-slate-50 p-6">
          {!isRevealed ? (
            <button
              onClick={() => setIsRevealed(true)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-200 text-slate-700 font-medium hover:bg-slate-300 transition-colors"
            >
              <Eye size={18} />
              {lang === "es" ? "Revelar respuesta" : "Reveal answer"}
            </button>
          ) : (
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-600">{answer}</p>
                {mode === "en-to-es" && (
                  <div className="mt-2">
                    <AudioButton text={current.english} size="sm" />
                  </div>
                )}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleDidntKnow}
                  className="flex-1 py-3 rounded-xl border-2 border-rose-200 text-rose-600 font-medium hover:bg-rose-50 transition-colors"
                >
                  {lang === "es" ? "No lo sabía" : "Didn't know"}
                </button>
                <button
                  onClick={handleKnew}
                  className="flex-1 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-400 transition-colors"
                >
                  {lang === "es" ? "Lo sabía" : "Got it!"} ✓
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
