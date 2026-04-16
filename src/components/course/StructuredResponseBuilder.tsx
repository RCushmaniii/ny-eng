// StructuredResponseBuilder — prompt → model reply in labeled parts.
//
// Shows an executive prompt, a weak attempt, and the model reply broken
// into the parts of a named framework (e.g., Cause / Action / Outcome,
// or Problem / Impact / Solution / Recommendation). The learner reveals
// the structured reply part-by-part, then expands "why it works."
//
// Used in U3 (structured responses), U6 (impromptu), U8 (difficult
// conversations), U9 (driving decisions).

import { useState } from "react";
import { ArrowDown, RotateCcw, Sparkles, Zap } from "lucide-react";
import AudioButton from "./AudioButton";
import type { StructuredResponseItem } from "@data/executive/types";

interface Props {
  items: StructuredResponseItem[];
  lang: "en" | "es";
}

export default function StructuredResponseBuilder({ items, lang }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [whyShown, setWhyShown] = useState(false);

  const current = items[currentIndex];
  const isLast = currentIndex === items.length - 1;

  const framework = lang === "es" ? current.frameworkEs : current.framework;
  const why = lang === "es" ? current.whyItWorksEs : current.whyItWorks;

  // Concatenate all English parts into one spoken model reply
  const fullReply = current.parts.map((p) => p.sentence).join(" ");

  const handleReveal = () => setRevealed(true);
  const handleShowWhy = () => setWhyShown(true);

  const handleNext = () => {
    if (isLast) return;
    setCurrentIndex(currentIndex + 1);
    setRevealed(false);
    setWhyShown(false);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setRevealed(false);
    setWhyShown(false);
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500">
          {lang === "es" ? "Escenario" : "Scenario"} {currentIndex + 1} /{" "}
          {items.length}
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

      <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden">
        {/* Prompt */}
        <div className="px-6 pt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            {lang === "es" ? "La pregunta ejecutiva:" : "The executive prompt:"}
          </p>
          <div className="bg-slate-900 text-white rounded-xl p-4">
            <div className="flex items-start justify-between gap-3">
              <p className="text-base font-medium leading-relaxed flex-1">
                "{current.prompt}"
              </p>
              <div className="shrink-0 mt-1">
                <AudioButton text={current.prompt} size="sm" />
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-1">{current.promptEs}</p>
          </div>
        </div>

        {/* Weak attempt */}
        <div className="px-6 pt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-red-500 mb-2">
            {lang === "es" ? "Respuesta débil:" : "Weak attempt:"}
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-3">
            <p className="text-sm text-red-900 italic leading-relaxed">
              "{current.weak}"
            </p>
            <p className="text-xs text-red-700/70 mt-1">{current.weakEs}</p>
          </div>
        </div>

        <div className="flex justify-center py-4">
          <ArrowDown className="w-5 h-5 text-slate-300" />
        </div>

        {/* Model reply */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 flex items-center gap-1">
              <Zap size={12} />
              {lang === "es" ? "Respuesta modelo:" : "Model reply:"}
            </p>
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
              {framework}
            </span>
          </div>

          {!revealed ? (
            <button
              onClick={handleReveal}
              className="w-full py-4 rounded-xl border-2 border-dashed border-amber-300 text-amber-600 font-medium hover:bg-amber-50 transition-colors"
            >
              {lang === "es"
                ? "Toca para revelar la respuesta estructurada"
                : "Tap to reveal the structured reply"}
            </button>
          ) : (
            <div className="space-y-3">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-xl overflow-hidden">
                <ul className="divide-y divide-amber-200">
                  {current.parts.map((part, idx) => {
                    const label = lang === "es" ? part.labelEs : part.label;
                    return (
                      <li key={idx} className="p-4">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500 text-white">
                            {label}
                          </span>
                        </div>
                        <p className="text-sm text-slate-900 leading-relaxed">
                          {part.sentence}
                        </p>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {part.sentenceEs}
                        </p>
                      </li>
                    );
                  })}
                </ul>
                <div className="px-4 py-3 bg-amber-100 border-t-2 border-amber-300 flex items-center justify-between gap-3">
                  <p className="text-xs font-medium text-amber-800">
                    {lang === "es"
                      ? "Escucha toda la respuesta integrada:"
                      : "Listen to the full integrated reply:"}
                  </p>
                  <AudioButton text={fullReply} size="sm" />
                </div>
              </div>

              {/* Why it works */}
              {!whyShown ? (
                <button
                  onClick={handleShowWhy}
                  className="w-full py-3 rounded-xl border border-dashed border-slate-300 text-slate-500 text-sm hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Sparkles size={12} />
                  {lang === "es" ? "¿Por qué funciona?" : "Why it works"}
                </button>
              ) : (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-700 leading-relaxed flex items-start gap-2">
                    <Sparkles size={12} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>{why}</span>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {revealed && !isLast && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-white font-medium hover:bg-amber-400 transition-colors shadow-sm"
          >
            {lang === "es" ? "Siguiente escenario" : "Next scenario"}
          </button>
        </div>
      )}

      {revealed && isLast && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
          <p className="text-emerald-800 font-medium text-sm">
            {lang === "es"
              ? "Has trabajado los escenarios. El siguiente paso: di las respuestas modelo en voz alta hasta que la estructura se vuelva automática."
              : "You've worked the scenarios. Next step: say the model replies aloud until the structure becomes automatic."}
          </p>
        </div>
      )}
    </section>
  );
}
