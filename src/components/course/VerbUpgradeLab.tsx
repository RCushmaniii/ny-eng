// VerbUpgradeLab — the signature drill of the Executive Communication course.
//
// Shows a weak / vague sentence, 2-3 stronger options each with a usage note,
// and an integrated model reply that uses all options in one fluent sentence.
// Optional C2 Elite tier reveals a sharper single phrasing plus a C2 Insight
// callout naming the strategic distinction.
//
// This mirrors Robert's proven pedagogy: the learner hears the weak version,
// studies the usage distinctions, then reveals the integrated model reply and
// can optionally push past Strong (C1) into Elite (C2).

import { useState } from "react";
import {
  ArrowDown,
  Lightbulb,
  RotateCcw,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import AudioButton from "./AudioButton";
import type { VerbUpgradeItem } from "@data/executive/types";

interface Props {
  items: VerbUpgradeItem[];
  lang: "en" | "es";
}

export default function VerbUpgradeLab({ items, lang }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [eliteRevealed, setEliteRevealed] = useState(false);

  const current = items[currentIndex];
  const isLast = currentIndex === items.length - 1;
  const hasElite = Boolean(current.elite);

  const handleReveal = () => setRevealed(true);
  const handleRevealElite = () => setEliteRevealed(true);

  const handleNext = () => {
    if (isLast) return;
    setCurrentIndex(currentIndex + 1);
    setRevealed(false);
    setEliteRevealed(false);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setRevealed(false);
    setEliteRevealed(false);
  };

  const weak = lang === "es" ? current.weakEs : current.weak;
  const modelReply = lang === "es" ? current.modelReplyEs : current.modelReply;
  const why = lang === "es" ? current.whyItWorksEs : current.whyItWorks;

  return (
    <section className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500">
          {lang === "es" ? "Drill" : "Drill"} {currentIndex + 1} / {items.length}
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
      <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden">
        {/* Weak sentence */}
        <div className="px-6 pt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            {lang === "es" ? "El fraseo débil:" : "The weak phrasing:"}
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <div className="flex items-start justify-between gap-3">
              <p className="text-base text-slate-700 italic leading-relaxed flex-1">
                "{weak}"
              </p>
              <div className="shrink-0 mt-1">
                <AudioButton text={lang === "es" ? current.weakEs : current.weak} size="sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="px-6 pt-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-3 flex items-center gap-1">
            <Target size={12} />
            {lang === "es" ? "Opciones más fuertes:" : "Stronger options:"}
          </p>
          <div className="grid gap-2">
            {current.options.map((option, idx) => {
              const verb = lang === "es" ? option.verbEs : option.verb;
              const usage = lang === "es" ? option.usageEs : option.usage;
              return (
                <div
                  key={idx}
                  className="bg-amber-50/60 border border-amber-200 rounded-xl p-3 flex items-center gap-3"
                >
                  <div className="shrink-0 w-7 h-7 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-slate-900">{verb}</span>
                      <AudioButton text={verb} size="sm" />
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">{usage}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center py-4">
          <ArrowDown className="w-5 h-5 text-slate-300" />
        </div>

        {/* Model reply */}
        <div className="px-6 pb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2 flex items-center gap-1">
            <Zap size={12} />
            {lang === "es"
              ? "Respuesta modelo integrada:"
              : "Integrated model reply:"}
          </p>

          {!revealed ? (
            <button
              onClick={handleReveal}
              className="w-full py-4 rounded-xl border-2 border-dashed border-amber-300 text-amber-600 font-medium hover:bg-amber-50 transition-colors"
            >
              {lang === "es"
                ? "Toca para revelar la respuesta modelo"
                : "Tap to reveal the model reply"}
            </button>
          ) : (
            <div className="space-y-3">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-xl p-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-base text-slate-900 font-medium leading-relaxed flex-1">
                    "{modelReply}"
                  </p>
                  <div className="shrink-0 mt-1">
                    <AudioButton text={modelReply} size="sm" />
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-amber-200">
                  <p className="text-xs text-slate-600 leading-relaxed flex items-start gap-1">
                    <Sparkles size={11} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>{why}</span>
                  </p>
                </div>
              </div>

              {/* Elite (C2) tier */}
              {hasElite && current.elite && (
                <div className="mt-4">
                  {!eliteRevealed ? (
                    <button
                      onClick={handleRevealElite}
                      className="w-full py-3 rounded-xl border-2 border-dashed border-violet-300 text-violet-700 text-sm font-medium hover:bg-violet-50 transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <Lightbulb size={14} />
                      {lang === "es"
                        ? "Revelar el nivel C2 Elite"
                        : "Reveal the C2 Elite tier"}
                    </button>
                  ) : (
                    <div className="bg-gradient-to-br from-violet-50 to-violet-100 border-2 border-violet-300 rounded-xl p-4">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-violet-200 text-violet-800">
                          C2 Elite
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-base text-slate-900 font-medium leading-relaxed flex-1">
                          "{lang === "es"
                            ? current.elite.modelReplyEs
                            : current.elite.modelReply}"
                        </p>
                        <div className="shrink-0 mt-1">
                          <AudioButton
                            text={
                              lang === "es"
                                ? current.elite.modelReplyEs
                                : current.elite.modelReply
                            }
                            size="sm"
                          />
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-violet-200">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-violet-700 mb-1">
                          {lang === "es" ? "Perspectiva C2" : "C2 Insight"}
                        </p>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {lang === "es"
                            ? current.elite.c2InsightEs
                            : current.elite.c2Insight}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Next button */}
      {revealed && !isLast && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-white font-medium hover:bg-amber-400 transition-colors shadow-sm"
          >
            {lang === "es" ? "Siguiente" : "Next"}
          </button>
        </div>
      )}

      {revealed && isLast && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
          <p className="text-emerald-800 font-medium text-sm">
            {lang === "es"
              ? "Excelente. Has trabajado los drills — ahora di las respuestas modelo en voz alta, tres veces cada una."
              : "Excellent. You've worked the drills — now say the model replies aloud, three times each."}
          </p>
        </div>
      )}
    </section>
  );
}
