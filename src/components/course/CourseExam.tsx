import { useState, useMemo, useCallback, useEffect } from "react";
import type { ExamQuestion, ExamResult } from "@data/course/exam";
import { calculateExamResult, getScoreTier } from "@data/course/exam";

interface Props {
  questions: ExamQuestion[];
  lang: "en" | "es";
  passingScore: number;
  courseBasePath: string;
}

export default function CourseExam({ questions, lang, passingScore, courseBasePath }: Props) {
  const [phase, setPhase] = useState<"intro" | "exam" | "results">("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [result, setResult] = useState<ExamResult | null>(null);

  const en = lang === "en";

  // Shuffle questions after hydration to avoid server/client mismatch
  const [shuffledQuestions, setShuffledQuestions] = useState(questions);
  useEffect(() => {
    setShuffledQuestions([...questions].sort(() => Math.random() - 0.5));
  }, []);

  const current = shuffledQuestions[currentIndex];
  const totalQuestions = shuffledQuestions.length;
  const progress = ((currentIndex) / totalQuestions) * 100;

  // Shuffle options after hydration — re-shuffle when question changes
  const [shuffledOptions, setShuffledOptions] = useState<Array<{ text: string; correct: boolean; originalIndex: number }>>([]);
  useEffect(() => {
    if (!current) return;
    const indexed = current.options.map((opt, i) => ({ ...opt, originalIndex: i }));
    setShuffledOptions(indexed.sort(() => Math.random() - 0.5));
  }, [current?.id]);

  const handleSelectOption = useCallback(
    (displayIndex: number) => {
      if (showFeedback) return;
      const option = shuffledOptions[displayIndex];
      setSelectedOption(displayIndex);
      setAnswers((prev) => ({
        ...prev,
        [current.id]: current.options.findIndex((o) => o.text === option.text),
      }));
      setShowFeedback(true);
    },
    [showFeedback, shuffledOptions, current]
  );

  const handleNext = useCallback(() => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      const examResult = calculateExamResult(answers);
      setResult(examResult);
      setPhase("results");
    }
  }, [currentIndex, totalQuestions, answers]);

  const handleRestart = useCallback(() => {
    setPhase("intro");
    setCurrentIndex(0);
    setAnswers({});
    setSelectedOption(null);
    setShowFeedback(false);
    setResult(null);
  }, []);

  // ─── Intro Screen ──────────────────────────────────────────────────
  if (phase === "intro") {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-6 py-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            {en ? "Ready for the Final Exam?" : "¿Listo para el Examen Final?"}
          </h2>
          <div className="text-left space-y-3 text-slate-600">
            <p>
              {en
                ? "This exam tests everything you learned across all 10 units:"
                : "Este examen evalúa todo lo que aprendiste en las 10 unidades:"}
            </p>
            <ul className="space-y-1.5 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">20</span>
                {en ? "multiple-choice questions" : "preguntas de opción múltiple"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">3</span>
                {en
                  ? "categories: vocabulary, grammar, translation"
                  : "categorías: vocabulario, gramática, traducción"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">{passingScore}%</span>
                {en ? "to pass" : "para aprobar"}
              </li>
            </ul>
            <p className="text-sm text-slate-500">
              {en
                ? "You'll get instant feedback after each question. Take your time — there's no time limit."
                : "Recibirás retroalimentación instantánea después de cada pregunta. Tómate tu tiempo — no hay límite de tiempo."}
            </p>
          </div>
          <button
            onClick={() => setPhase("exam")}
            className="w-full px-6 py-3.5 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-400 transition-colors shadow-lg text-lg"
          >
            {en ? "Start Exam" : "Comenzar Examen"}
          </button>
        </div>
      </div>
    );
  }

  // ─── Results Screen ────────────────────────────────────────────────
  if (phase === "results" && result) {
    const tier = getScoreTier(result.percentage);
    const passed = result.percentage >= passingScore;
    const unitNumbers = Object.keys(result.unitScores)
      .map(Number)
      .sort((a, b) => a - b);

    return (
      <div className="max-w-2xl mx-auto space-y-8 py-8">
        {/* Score Card */}
        <div
          className={`rounded-2xl p-8 text-center space-y-4 ${
            passed
              ? "bg-gradient-to-b from-emerald-50 to-white border border-emerald-200"
              : "bg-gradient-to-b from-rose-50 to-white border border-rose-200"
          }`}
        >
          <div
            className={`inline-flex items-center justify-center w-24 h-24 rounded-full text-white text-3xl font-bold ${
              tier.color === "emerald"
                ? "bg-emerald-500"
                : tier.color === "amber"
                ? "bg-amber-500"
                : "bg-rose-500"
            }`}
          >
            {result.percentage}%
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            {en ? tier.tier : tier.tierEs}
          </h2>
          <p className="text-slate-600 max-w-md mx-auto">
            {en ? tier.message : tier.messageEs}
          </p>
          <p className="text-sm text-slate-500">
            {result.totalCorrect} / {result.totalQuestions}{" "}
            {en ? "correct" : "correctas"}
          </p>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
          <h3 className="text-lg font-bold text-slate-900">
            {en ? "Score by Category" : "Puntuación por Categoría"}
          </h3>
          <div className="space-y-3">
            {Object.entries(result.categoryScores).map(([cat, score]) => {
              const pct = Math.round((score.correct / score.total) * 100);
              const catLabel =
                cat === "vocabulary"
                  ? en ? "Vocabulary" : "Vocabulario"
                  : cat === "grammar"
                  ? en ? "Grammar" : "Gramática"
                  : en ? "Translation" : "Traducción";
              return (
                <div key={cat}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700">{catLabel}</span>
                    <span className="text-slate-500">
                      {score.correct}/{score.total} ({pct}%)
                    </span>
                  </div>
                  <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        pct >= 80 ? "bg-emerald-500" : pct >= 60 ? "bg-amber-500" : "bg-rose-500"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Unit Breakdown */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
          <h3 className="text-lg font-bold text-slate-900">
            {en ? "Score by Unit" : "Puntuación por Unidad"}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {unitNumbers.map((unit) => {
              const s = result.unitScores[unit];
              const pct = Math.round((s.correct / s.total) * 100);
              return (
                <div
                  key={unit}
                  className={`rounded-xl p-3 text-center border ${
                    pct === 100
                      ? "bg-emerald-50 border-emerald-200"
                      : pct >= 50
                      ? "bg-amber-50 border-amber-200"
                      : "bg-rose-50 border-rose-200"
                  }`}
                >
                  <div className="text-xs text-slate-500 mb-1">
                    {en ? "Unit" : "Unidad"} {unit}
                  </div>
                  <div className="text-lg font-bold text-slate-900">
                    {s.correct}/{s.total}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certificate / Celebration (if passed) */}
        {passed && (
          <div className="bg-gradient-to-b from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">
              {en ? "Course Complete!" : "¡Curso Completado!"}
            </h3>
            <p className="text-amber-100">
              {en
                ? "You passed the First Steps Into English final exam. You have a solid foundation in English — 1,500+ words, 11 modal structures, and all three time frames."
                : "Aprobaste el examen final de Primeros Pasos en Inglés. Tienes una base sólida en inglés — más de 1,500 palabras, 11 estructuras modales y los tres marcos temporales."}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={handleRestart}
            className="px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 transition-colors"
          >
            {en ? "Retake Exam" : "Repetir Examen"}
          </button>
          <a
            href={`${courseBasePath}/`}
            className="px-6 py-3 rounded-xl bg-slate-700 text-white font-medium hover:bg-slate-600 transition-colors"
          >
            {en ? "Review Units" : "Repasar Unidades"}
          </a>
          <a
            href={en ? "/en/contact/" : "/es/contact/"}
            className="px-6 py-3 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-400 transition-colors shadow-lg"
          >
            {en ? "Book a Free Consultation" : "Agenda una Consulta Gratuita"}
          </a>
        </div>
      </div>
    );
  }

  // ─── Exam Screen (Question by Question) ────────────────────────────
  if (!current) return null;

  const correctDisplayIndex = showFeedback
    ? shuffledOptions.findIndex((o) => o.correct)
    : -1;

  return (
    <div className="max-w-2xl mx-auto space-y-6 py-4">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-slate-500">
          <span>
            {en ? "Question" : "Pregunta"} {currentIndex + 1} / {totalQuestions}
          </span>
          <span>
            {en ? "Unit" : "Unidad"} {current.unit}
          </span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
        {/* Category badge */}
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            current.category === "vocabulary"
              ? "bg-blue-100 text-blue-700"
              : current.category === "grammar"
              ? "bg-purple-100 text-purple-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {current.category === "vocabulary"
            ? en ? "Vocabulary" : "Vocabulario"
            : current.category === "grammar"
            ? en ? "Grammar" : "Gramática"
            : en ? "Translation" : "Traducción"}
        </span>

        {/* Question text */}
        <h3 className="text-lg md:text-xl font-semibold text-slate-900 leading-relaxed">
          {en ? current.prompt : current.promptEs}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {shuffledOptions.map((option, i) => {
            const letter = String.fromCharCode(65 + i); // A, B, C, D
            let borderClass = "border-slate-200 hover:border-amber-300 hover:bg-amber-50";
            let bgClass = "";

            if (showFeedback) {
              if (i === correctDisplayIndex) {
                borderClass = "border-emerald-400";
                bgClass = "bg-emerald-50";
              } else if (i === selectedOption && !option.correct) {
                borderClass = "border-rose-400";
                bgClass = "bg-rose-50";
              } else {
                borderClass = "border-slate-100";
                bgClass = "opacity-50";
              }
            } else if (i === selectedOption) {
              borderClass = "border-amber-400 bg-amber-50";
            }

            return (
              <button
                key={i}
                onClick={() => handleSelectOption(i)}
                disabled={showFeedback}
                className={`w-full text-left px-4 py-3.5 rounded-xl border-2 transition-all flex items-start gap-3 ${borderClass} ${bgClass} ${
                  showFeedback ? "cursor-default" : "cursor-pointer"
                }`}
              >
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold ${
                    showFeedback && i === correctDisplayIndex
                      ? "bg-emerald-500 text-white"
                      : showFeedback && i === selectedOption && !option.correct
                      ? "bg-rose-500 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {showFeedback && i === correctDisplayIndex
                    ? "\u2713"
                    : showFeedback && i === selectedOption && !option.correct
                    ? "\u2717"
                    : letter}
                </span>
                <span className="text-slate-700 leading-relaxed">{option.text}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div
            className={`rounded-xl p-4 ${
              shuffledOptions[selectedOption!]?.correct
                ? "bg-emerald-50 border border-emerald-200"
                : "bg-rose-50 border border-rose-200"
            }`}
          >
            <p className="text-sm font-medium mb-1">
              {shuffledOptions[selectedOption!]?.correct
                ? en ? "Correct!" : "¡Correcto!"
                : en ? "Not quite." : "No exactamente."}
            </p>
            <p className="text-sm text-slate-600">
              {en ? current.explanation : current.explanationEs}
            </p>
          </div>
        )}

        {/* Next button */}
        {showFeedback && (
          <button
            onClick={handleNext}
            className="w-full px-6 py-3 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-400 transition-colors"
          >
            {currentIndex < totalQuestions - 1
              ? en ? "Next Question" : "Siguiente Pregunta"
              : en ? "See Results" : "Ver Resultados"}
          </button>
        )}
      </div>

      {/* Running score */}
      <div className="text-center text-sm text-slate-400">
        {Object.values(answers).filter((_, idx) => {
          const qId = Object.keys(answers).map(Number)[idx];
          const q = shuffledQuestions.find((sq) => sq.id === qId);
          return q && q.options[answers[qId]]?.correct;
        }).length}{" "}
        / {Object.keys(answers).length} {en ? "correct so far" : "correctas hasta ahora"}
      </div>
    </div>
  );
}
