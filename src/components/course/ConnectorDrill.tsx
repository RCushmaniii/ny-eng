// ConnectorDrill — transition upgrade drill.
//
// A weak two-sentence pair ("We had delays. We are fixing it.") is
// upgraded into a connected version using a labeled executive connector
// ("As a result…", "In response…", "Accordingly…"). Optional elite tier
// layers in a second connector for more sophisticated phrasing.

import { useState } from "react";
import { ArrowDown, Link2, RotateCcw, Zap } from "lucide-react";
import AudioButton from "./AudioButton";
import type { ConnectorDrillItem } from "@data/executive/types";

interface Props {
  items: ConnectorDrillItem[];
  lang: "en" | "es";
}

export default function ConnectorDrill({ items, lang }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [eliteRevealed, setEliteRevealed] = useState(false);

  const current = items[currentIndex];
  const isLast = currentIndex === items.length - 1;
  const hasElite = Boolean(current.elite);

  const connector = lang === "es" ? current.connectorEs : current.connector;

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

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500">
          {lang === "es" ? "Conector" : "Connector"} {currentIndex + 1} /{" "}
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
        {/* Weak */}
        <div className="px-6 pt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            {lang === "es" ? "Sin conectar:" : "Unconnected:"}
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <div className="flex items-start justify-between gap-3">
              <p className="text-base text-slate-700 italic leading-relaxed flex-1">
                "{current.weak}"
              </p>
              <div className="shrink-0 mt-1">
                <AudioButton text={current.weak} size="sm" />
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-1">{current.weakEs}</p>
          </div>
        </div>

        <div className="flex justify-center py-3">
          <ArrowDown className="w-5 h-5 text-slate-300" />
        </div>

        {/* Strong with connector */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 flex items-center gap-1">
              <Zap size={12} />
              {lang === "es" ? "Conectado:" : "Connected:"}
            </p>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
              <Link2 size={10} />
              {connector}
            </span>
          </div>

          {!revealed ? (
            <button
              onClick={handleReveal}
              className="w-full py-4 rounded-xl border-2 border-dashed border-amber-300 text-amber-600 font-medium hover:bg-amber-50 transition-colors"
            >
              {lang === "es"
                ? "Toca para revelar la versión conectada"
                : "Tap to reveal the connected version"}
            </button>
          ) : (
            <div className="space-y-3">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-xl p-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-base text-slate-900 font-medium leading-relaxed flex-1">
                    "{current.strong}"
                  </p>
                  <div className="shrink-0 mt-1">
                    <AudioButton text={current.strong} size="sm" />
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-2">{current.strongEs}</p>
              </div>

              {hasElite && current.elite && (
                <>
                  {!eliteRevealed ? (
                    <button
                      onClick={handleRevealElite}
                      className="w-full py-3 rounded-xl border-2 border-dashed border-violet-300 text-violet-700 text-sm font-medium hover:bg-violet-50 transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <Link2 size={12} />
                      {lang === "es"
                        ? "Revelar el nivel C2 Elite"
                        : "Reveal the C2 Elite tier"}
                    </button>
                  ) : (
                    <div className="bg-gradient-to-br from-violet-50 to-violet-100 border-2 border-violet-300 rounded-xl p-4">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-violet-200 text-violet-800 mb-2">
                        C2 Elite
                      </span>
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-base text-slate-900 font-medium leading-relaxed flex-1">
                          "{current.elite}"
                        </p>
                        <div className="shrink-0 mt-1">
                          <AudioButton text={current.elite} size="sm" />
                        </div>
                      </div>
                      {current.eliteEs && (
                        <p className="text-sm text-slate-500 mt-2">
                          {current.eliteEs}
                        </p>
                      )}
                    </div>
                  )}
                </>
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
            {lang === "es" ? "Siguiente" : "Next"}
          </button>
        </div>
      )}

      {revealed && isLast && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
          <p className="text-emerald-800 font-medium text-sm">
            {lang === "es"
              ? "Has practicado los conectores. Conectar ideas = sonar más inteligente al instante."
              : "You've worked the connectors. Connecting ideas = sounding more intelligent, instantly."}
          </p>
        </div>
      )}
    </section>
  );
}
