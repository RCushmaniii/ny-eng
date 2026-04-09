// ErrorSpotter — reusable component for the advanced course.
//
// Shows a sentence with one weak/wrong word inside it. The learner clicks
// the offending word. If they pick correctly, they see a green checkmark
// and the improved version. If they pick wrong, the wrong choice flashes
// red and they can try again.
//
// Used in: U2 (word traps), U3 (pronoun errors), U4 (relative pronouns),
// U5 (article errors), U9 (word order traps).

import { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw, Sparkles } from "lucide-react";
import AudioButton from "./AudioButton";
import type { ErrorSpotterItem } from "@data/advanced/types";

interface Props {
  items: ErrorSpotterItem[];
  lang: "en" | "es";
}

// Tokenize a sentence into clickable word chunks. We split on whitespace
// but preserve trailing punctuation so the visible text matches the input.
// Each chunk also gets a "stripped" form (lowercased, punctuation removed)
// for matching against `errorWord`.
interface Token {
  display: string;
  stripped: string;
  isWord: boolean;
}

function tokenize(sentence: string): Token[] {
  // Split into word vs non-word groups, preserving punctuation/spaces.
  // Pattern: capture sequences of word chars (incl. apostrophes) OR
  // sequences of non-word chars.
  const parts = sentence.match(/[\w'’-]+|[^\w'’-]+/g) ?? [];
  return parts.map((part) => {
    const isWord = /[\w'’-]/.test(part);
    return {
      display: part,
      stripped: part
        .toLowerCase()
        .replace(/[^a-zà-ÿ' -]/gi, "")
        .trim(),
      isWord,
    };
  });
}

export default function ErrorSpotter({ items, lang }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // null = no choice yet, string = the stripped token the user clicked
  const [pickedToken, setPickedToken] = useState<string | null>(null);
  const [wrongAttempts, setWrongAttempts] = useState<Set<string>>(new Set());

  const current = items[currentIndex];
  const isLast = currentIndex === items.length - 1;

  // Pre-compute the expected (correct) token form for matching
  const correctToken = current.errorWord.toLowerCase().trim();
  const tokens = tokenize(current.sentence);
  const isResolved = pickedToken === correctToken;

  const handleClick = (stripped: string) => {
    if (isResolved) return;
    if (stripped === correctToken) {
      setPickedToken(stripped);
    } else {
      setWrongAttempts((prev) => new Set(prev).add(stripped));
    }
  };

  const handleNext = () => {
    if (!isLast) {
      setCurrentIndex(currentIndex + 1);
      setPickedToken(null);
      setWrongAttempts(new Set());
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setPickedToken(null);
    setWrongAttempts(new Set());
  };

  return (
    <section className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500">
          {lang === "es" ? "Oración" : "Sentence"} {currentIndex + 1} / {items.length}
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
          style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
        />
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl border-2 border-slate-200 p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
          {lang === "es"
            ? "Toca la palabra que sobra o suena débil:"
            : "Tap the word that is unnecessary or sounds weak:"}
        </p>

        {/* Clickable sentence */}
        <p className="text-lg leading-relaxed text-slate-900">
          {tokens.map((token, i) => {
            if (!token.isWord) {
              return <span key={i}>{token.display}</span>;
            }
            const isCorrect = token.stripped === correctToken;
            const wasWronglyPicked = wrongAttempts.has(token.stripped);
            const isResolvedAndThis = isResolved && isCorrect;

            let cls = "rounded transition-colors px-0.5";
            if (isResolvedAndThis) {
              cls += " bg-emerald-200 text-emerald-900 line-through";
            } else if (wasWronglyPicked) {
              cls += " bg-rose-100 text-rose-700";
            } else if (!isResolved) {
              cls += " hover:bg-amber-100 cursor-pointer";
            } else {
              cls += " text-slate-400";
            }

            return (
              <span
                key={i}
                onClick={() => handleClick(token.stripped)}
                className={cls}
              >
                {token.display}
              </span>
            );
          })}
        </p>

        <p className="text-sm text-slate-400 mt-2 italic">{current.sentenceEs}</p>

        {/* Hint state for wrong picks */}
        {wrongAttempts.size > 0 && !isResolved && (
          <div className="mt-4 flex items-start gap-2 text-sm text-rose-600">
            <XCircle size={16} className="shrink-0 mt-0.5" />
            <p>
              {lang === "es"
                ? "Esa no es. Sigue intentando — busca la palabra que no aporta nada."
                : "Not that one. Keep trying — look for the word that doesn't add anything."}
            </p>
          </div>
        )}

        {/* Resolved state */}
        {isResolved && (
          <div className="mt-5 space-y-3">
            <div className="flex items-start gap-2 text-sm text-emerald-700">
              <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
              <p className="font-medium">
                {lang === "es" ? "¡Correcto!" : "Correct!"}
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-300 rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
                {lang === "es" ? "Versión mejorada:" : "Improved version:"}
              </p>
              <div className="flex items-start justify-between gap-3">
                <p className="text-base text-slate-900 font-medium flex-1 leading-relaxed">
                  "{current.improved}"
                </p>
                <div className="shrink-0 mt-0.5">
                  <AudioButton text={current.improved} size="sm" />
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-2">{current.improvedEs}</p>
            </div>

            <div className="flex items-start gap-2">
              <Sparkles size={12} className="text-amber-500 shrink-0 mt-1" />
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === "es" ? current.explanationEs : current.explanation}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Next button */}
      {isResolved && !isLast && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-white font-medium hover:bg-amber-400 transition-colors shadow-sm"
          >
            {lang === "es" ? "Siguiente oración" : "Next sentence"}
          </button>
        </div>
      )}

      {isResolved && isLast && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
          <p className="text-emerald-800 font-medium text-sm">
            {lang === "es"
              ? "¡Excelente! Has detectado todos los errores."
              : "Excellent! You've spotted all the errors."}
          </p>
        </div>
      )}
    </section>
  );
}
