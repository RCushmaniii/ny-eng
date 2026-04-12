import { useState } from "react";
import { AlertTriangle, CheckCircle2, Volume2 } from "lucide-react";
import AudioButton from "./AudioButton";
import type { PronunciationDrill as DrillType } from "@data/course/unit-1";

interface Props {
  drills: DrillType[];
  lang: "en" | "es";
}

export default function PronunciationDrill({ drills, lang }: Props) {
  const [activeDrill, setActiveDrill] = useState(0);
  const [_showAnswer, setShowAnswer] = useState(false);

  const drill = drills[activeDrill];

  return (
    <section className="space-y-6">
      {/* Drill selector */}
      <div className="flex gap-2 flex-wrap">
        {drills.map((d, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveDrill(i);
              setShowAnswer(false);
            }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              i === activeDrill
                ? "bg-rose-500 text-white shadow-md"
                : i < activeDrill
                  ? "bg-rose-50 text-rose-700 border border-rose-200"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {d.word}
          </button>
        ))}
      </div>

      {/* Active drill card */}
      <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden">
        {/* Word display */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-center">
          <p className="text-5xl font-bold text-white tracking-wide mb-4">
            {drill.word}
          </p>
          <AudioButton
            text={drill.word}
            size="lg"
            className="mx-auto !bg-white/10 !text-white hover:!bg-white/20"
          />
        </div>

        {/* Stress comparison */}
        <div className="p-6 space-y-4">
          {/* Wrong way */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-rose-50 border border-rose-200">
            <AlertTriangle
              size={20}
              className="shrink-0 text-rose-500 mt-0.5"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-1">
                {lang === "es"
                  ? "Acento en español"
                  : "Spanish stress pattern"}
              </p>
              <p className="text-xl font-mono text-rose-700">
                {drill.spanishStress}
              </p>
            </div>
          </div>

          {/* Right way */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200">
            <CheckCircle2
              size={20}
              className="shrink-0 text-emerald-500 mt-0.5"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                {lang === "es"
                  ? "Acento en inglés"
                  : "English stress pattern"}
              </p>
              <p className="text-xl font-mono text-emerald-700">
                {drill.englishStress}
              </p>
            </div>
          </div>

          {/* Tip */}
          <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <div className="flex items-start gap-3">
              <Volume2 size={18} className="shrink-0 text-amber-500 mt-0.5" />
              <p className="text-slate-700 leading-relaxed">
                {lang === "es" ? drill.tipEs : drill.tip}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            setActiveDrill(Math.max(0, activeDrill - 1));
            setShowAnswer(false);
          }}
          disabled={activeDrill === 0}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          ← {lang === "es" ? "Anterior" : "Previous"}
        </button>
        <span className="text-sm text-slate-400">
          {activeDrill + 1} / {drills.length}
        </span>
        <button
          onClick={() => {
            setActiveDrill(Math.min(drills.length - 1, activeDrill + 1));
            setShowAnswer(false);
          }}
          disabled={activeDrill === drills.length - 1}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-amber-500 text-white hover:bg-amber-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          {lang === "es" ? "Siguiente" : "Next"} →
        </button>
      </div>
    </section>
  );
}
