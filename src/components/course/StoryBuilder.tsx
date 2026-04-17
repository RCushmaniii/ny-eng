// StoryBuilder — the 5-step executive narrative drill.
//
// Shows a prompt, a flat/fact-only attempt, then reveals the strategic
// narrative step by step: Context → Tension → Insight → Action → Outcome.
// The learner sees each step labeled and can play the full integrated
// story as one audio clip.
//
// Used in Unit 5 (Strategic Storytelling).

import { useState } from "react";
import { ArrowDown, BookOpen, RotateCcw, Sparkles } from "lucide-react";
import AudioButton from "./AudioButton";
import type { StoryBuilderItem } from "@data/executive/types";

interface Props {
  items: StoryBuilderItem[];
  lang: "en" | "es";
}

const stepColors: Record<string, string> = {
  Context: "bg-slate-600",
  Tension: "bg-red-600",
  Insight: "bg-violet-600",
  Action: "bg-amber-600",
  Outcome: "bg-emerald-600",
};

export default function StoryBuilder({ items, lang }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [whyShown, setWhyShown] = useState(false);

  const current = items[currentIndex];
  const isLast = currentIndex === items.length - 1;

  const why = lang === "es" ? current.whyItWorksEs : current.whyItWorks;
  const fullStory = current.steps.map((s) => s.sentence).join(" ");

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
          {lang === "es" ? "Narrativa" : "Narrative"} {currentIndex + 1} /{" "}
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
            {lang === "es" ? "La situación:" : "The situation:"}
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

        {/* Flat attempt */}
        <div className="px-6 pt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-red-500 mb-2">
            {lang === "es" ? "La versión plana:" : "The flat version:"}
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-3">
            <p className="text-sm text-red-900 italic leading-relaxed">
              "{current.flat}"
            </p>
            <p className="text-sm text-red-700/70 mt-1">{current.flatEs}</p>
          </div>
        </div>

        <div className="flex justify-center py-4">
          <ArrowDown className="w-5 h-5 text-slate-300" />
        </div>

        {/* Strategic narrative */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 flex items-center gap-1">
              <BookOpen size={12} />
              {lang === "es" ? "La narrativa estratégica:" : "The strategic narrative:"}
            </p>
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
              5-Step Story
            </span>
          </div>

          {!revealed ? (
            <button
              onClick={handleReveal}
              className="w-full py-4 rounded-xl border-2 border-dashed border-amber-300 text-amber-600 font-medium hover:bg-amber-50 transition-colors"
            >
              {lang === "es"
                ? "Toca para revelar la narrativa estratégica"
                : "Tap to reveal the strategic narrative"}
            </button>
          ) : (
            <div className="space-y-3">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-xl overflow-hidden">
                <ul className="divide-y divide-amber-200">
                  {current.steps.map((step, idx) => (
                    <li key={idx} className="p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded text-white ${stepColors[step.label] || "bg-slate-500"}`}
                        >
                          {step.label}
                        </span>
                      </div>
                      <p className="text-sm text-slate-900 leading-relaxed">
                        {step.sentence}
                      </p>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                        {step.sentenceEs}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="px-4 py-3 bg-amber-100 border-t-2 border-amber-300 flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-amber-800">
                    {lang === "es"
                      ? "Escucha toda la narrativa integrada:"
                      : "Listen to the full integrated narrative:"}
                  </p>
                  <AudioButton text={fullStory} size="sm" />
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
                    <Sparkles
                      size={12}
                      className="text-amber-500 shrink-0 mt-0.5"
                    />
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
            {lang === "es" ? "Siguiente narrativa" : "Next narrative"}
          </button>
        </div>
      )}

      {revealed && isLast && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
          <p className="text-emerald-800 font-medium text-sm">
            {lang === "es"
              ? "Has trabajado las narrativas. Ya no solo reportas — moldeas decisiones."
              : "You've worked the narratives. You no longer just report — you shape decisions."}
          </p>
        </div>
      )}
    </section>
  );
}
