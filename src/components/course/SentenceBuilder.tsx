import { useState } from "react";
import { ChevronDown, ChevronUp, Languages, Zap } from "lucide-react";
import AudioButton from "./AudioButton";
import type { SentenceBlock } from "@data/course/unit-1";

interface Props {
  blocks: SentenceBlock[];
  lang: "en" | "es";
  sectionTitle?: string;
  sectionTitleEs?: string;
}

export default function SentenceBuilder({
  blocks,
  lang,
  sectionTitle,
  sectionTitleEs,
}: Props) {
  const [activeBlock, setActiveBlock] = useState(0);
  const [showTranslation, setShowTranslation] = useState(true);
  const [revealedSentences, setRevealedSentences] = useState<Set<number>>(
    new Set([0]),
  );

  const block = blocks[activeBlock];

  const revealNext = () => {
    const nextIdx = revealedSentences.size;
    if (nextIdx < block.sentences.length) {
      setRevealedSentences((prev) => new Set([...prev, nextIdx]));
    }
  };

  const revealAll = () => {
    setRevealedSentences(
      new Set(block.sentences.map((_, i) => i)),
    );
  };

  const handleBlockChange = (idx: number) => {
    setActiveBlock(idx);
    setRevealedSentences(new Set([0]));
  };

  const allRevealed = revealedSentences.size >= block.sentences.length;

  return (
    <section className="space-y-6">
      {sectionTitle && (
        <h3 className="text-2xl font-bold text-slate-900">
          {lang === "es" ? sectionTitleEs : sectionTitle}
        </h3>
      )}

      {/* Block selector — accordion style */}
      <div className="space-y-2">
        {blocks.map((b, i) => {
          const isActive = i === activeBlock;
          const isPast = i < activeBlock;

          return (
            <div key={i}>
              {/* Block header */}
              <button
                onClick={() => handleBlockChange(i)}
                className={`w-full flex items-center justify-between px-5 py-3 rounded-xl text-left transition-all duration-200 ${
                  isActive
                    ? "bg-amber-500 text-white shadow-md"
                    : isPast
                      ? "bg-amber-50 text-amber-800 border border-amber-200"
                      : "bg-slate-50 text-slate-600 border border-slate-200 hover:border-amber-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : isPast
                          ? "bg-amber-200 text-amber-800"
                          : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <span className="font-semibold text-lg">
                      {lang === "es" ? b.labelEs : b.label}
                    </span>
                    {isActive && (
                      <p
                        className={`text-sm mt-0.5 ${isActive ? "text-white/80" : "text-slate-500"}`}
                      >
                        {lang === "es" ? b.descriptionEs : b.description}
                      </p>
                    )}
                  </div>
                </div>
                {isActive ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>

              {/* Block content */}
              {isActive && (
                <div className="mt-3 space-y-2 pl-2">
                  {/* Translation toggle */}
                  <div className="flex items-center justify-between mb-3">
                    <button
                      onClick={() => setShowTranslation(!showTranslation)}
                      className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-amber-600 transition-colors"
                    >
                      <Languages size={14} />
                      {showTranslation
                        ? lang === "es"
                          ? "Ocultar inglés"
                          : "Hide Spanish"
                        : lang === "es"
                          ? "Mostrar inglés"
                          : "Show Spanish"}
                    </button>
                    {!allRevealed && (
                      <button
                        onClick={revealAll}
                        className="text-sm text-amber-600 hover:text-amber-700 font-medium"
                      >
                        {lang === "es" ? "Mostrar todo" : "Show all"}
                      </button>
                    )}
                  </div>

                  {/* Sentences */}
                  {block.sentences.map((sentence, si) => {
                    const isVisible = revealedSentences.has(si);

                    return (
                      <div
                        key={si}
                        className={`transition-all duration-500 ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2 pointer-events-none h-0 overflow-hidden"
                        }`}
                      >
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-200 transition-colors">
                          <AudioButton
                            text={sentence.english}
                            size="md"
                            className="shrink-0 mt-0.5"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-slate-900 text-lg leading-snug">
                              {sentence.highlight ? (
                                <>
                                  {sentence.english
                                    .split(sentence.highlight)
                                    .map((part, pi, arr) => (
                                      <span key={pi}>
                                        {part}
                                        {pi < arr.length - 1 && (
                                          <span className="font-bold text-amber-600 bg-amber-50 px-1 rounded">
                                            {sentence.highlight}
                                          </span>
                                        )}
                                      </span>
                                    ))}
                                </>
                              ) : (
                                sentence.english
                              )}
                            </p>
                            {showTranslation && (
                              <p className="text-slate-500 text-sm mt-1">
                                {sentence.spanish}
                              </p>
                            )}
                          </div>
                          {/* Slow audio */}
                          <AudioButton
                            text={sentence.english}
                            rate={0.7}
                            size="sm"
                            className="shrink-0 mt-0.5 opacity-50 hover:opacity-100"
                            label="Listen slowly"
                          />
                        </div>
                      </div>
                    );
                  })}

                  {/* Reveal next button */}
                  {!allRevealed && (
                    <button
                      onClick={revealNext}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-dashed border-amber-300 text-amber-600 font-medium hover:bg-amber-50 transition-colors"
                    >
                      <Zap size={16} />
                      {lang === "es"
                        ? "Siguiente oración"
                        : "Next sentence"}
                    </button>
                  )}

                  {/* Move to next block */}
                  {allRevealed && i < blocks.length - 1 && (
                    <button
                      onClick={() => handleBlockChange(i + 1)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-400 transition-colors shadow-md"
                    >
                      {lang === "es" ? "Continuar" : "Continue"} →
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
