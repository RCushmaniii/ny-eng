import { useState } from "react";
import { Sparkles, ChevronRight, Eye, EyeOff } from "lucide-react";
import AudioButton from "./AudioButton";
import type { CognateWord } from "@data/course/unit-1";

interface CognateWave {
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  words: CognateWord[];
}

interface Props {
  waves: CognateWave[];
  lang: "en" | "es";
}

export default function CognateDiscovery({ waves, lang }: Props) {
  const [activeWave, setActiveWave] = useState(0);
  const [revealedWords, setRevealedWords] = useState<Set<string>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const wave = waves[activeWave];

  const toggleReveal = (word: string) => {
    setRevealedWords((prev) => {
      const next = new Set(prev);
      if (next.has(word)) next.delete(word);
      else next.add(word);
      return next;
    });
  };

  const toggleShowAll = () => {
    if (showAll) {
      setRevealedWords(new Set());
    } else {
      setRevealedWords(new Set(wave.words.map((w) => w.english)));
    }
    setShowAll(!showAll);
  };

  const isRevealed = (word: string) => showAll || revealedWords.has(word);

  return (
    <section className="space-y-6">
      {/* Wave tabs */}
      <div className="flex gap-2 flex-wrap">
        {waves.map((w, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveWave(i);
              setRevealedWords(new Set());
              setShowAll(false);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              i === activeWave
                ? "bg-amber-500 text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <span className="flex items-center gap-1.5">
              {i < activeWave && (
                <Sparkles size={14} className="text-amber-300" />
              )}
              {lang === "es" ? w.titleEs : w.title}
            </span>
          </button>
        ))}
      </div>

      {/* Wave description */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5">
        <p className="text-slate-700 text-base leading-relaxed">
          {lang === "es" ? wave.descriptionEs : wave.description}
        </p>
      </div>

      {/* Reveal all toggle */}
      <div className="flex justify-end">
        <button
          onClick={toggleShowAll}
          className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-amber-600 transition-colors"
        >
          {showAll ? <EyeOff size={14} /> : <Eye size={14} />}
          {showAll
            ? lang === "es"
              ? "Ocultar todo"
              : "Hide all"
            : lang === "es"
              ? "Revelar todo"
              : "Reveal all"}
        </button>
      </div>

      {/* Word grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {wave.words.map((word) => (
          <div
            key={word.english}
            onClick={() => toggleReveal(word.english)}
            className={`group relative flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
              isRevealed(word.english)
                ? "bg-white border-amber-300 shadow-md shadow-amber-100"
                : "bg-slate-50 border-slate-200 hover:border-amber-200 hover:bg-amber-50/50"
            }`}
          >
            {/* Audio */}
            <AudioButton
              text={word.english}
              size="sm"
              className="shrink-0"
            />

            {/* Word pair */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900 text-lg">
                  {word.english}
                </span>
                <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                  {word.category}
                </span>
              </div>

              {/* Spanish (revealed on click) */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isRevealed(word.english)
                    ? "max-h-20 opacity-100 mt-1"
                    : "max-h-0 opacity-0"
                }`}
              >
                <span className="text-amber-700 text-base">
                  {word.spanish}
                </span>
                {word.pronunciationNote && (
                  <p className="text-sm text-slate-500 mt-1 leading-snug">
                    {lang === "es"
                      ? word.pronunciationNoteEs
                      : word.pronunciationNote}
                  </p>
                )}
              </div>
            </div>

            {/* Reveal indicator */}
            <ChevronRight
              size={16}
              className={`shrink-0 text-slate-400 transition-transform duration-200 ${
                isRevealed(word.english) ? "rotate-90" : ""
              }`}
            />
          </div>
        ))}
      </div>

      {/* Counter */}
      <p className="text-center text-sm text-slate-500">
        {lang === "es" ? (
          <>
            <span className="font-semibold text-amber-600">
              {wave.words.length}
            </span>{" "}
            palabras que ya conoces en esta categoría
          </>
        ) : (
          <>
            <span className="font-semibold text-amber-600">
              {wave.words.length}
            </span>{" "}
            words you already know in this category
          </>
        )}
      </p>
    </section>
  );
}
