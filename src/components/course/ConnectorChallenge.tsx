import { useState } from "react";
import { Link2, Sparkles } from "lucide-react";
import AudioButton from "./AudioButton";

interface Connector {
  word: string;
  wordEs: string;
  example: {
    english: string;
    spanish: string;
  };
}

interface Props {
  connectors: Connector[];
  bossSentence: { english: string; spanish: string };
  lang: "en" | "es";
}

export default function ConnectorChallenge({
  connectors,
  bossSentence,
  lang,
}: Props) {
  const [activeConnector, setActiveConnector] = useState<number | null>(null);
  const [bossRevealed, setBossRevealed] = useState(false);

  return (
    <section className="space-y-6">
      {/* Connector pills */}
      <div className="flex flex-wrap gap-3 justify-center">
        {connectors.map((c, i) => (
          <button
            key={c.word}
            onClick={() =>
              setActiveConnector(activeConnector === i ? null : i)
            }
            className={`group relative px-5 py-2.5 rounded-xl font-semibold text-lg transition-all duration-200 ${
              activeConnector === i
                ? "bg-amber-500 text-white shadow-lg scale-105"
                : "bg-white text-slate-700 border-2 border-slate-200 hover:border-amber-300 hover:text-amber-600"
            }`}
          >
            <span className="flex items-center gap-2">
              <Link2 size={16} className="opacity-50" />
              {c.word}
            </span>
            <span
              className={`block text-xs font-normal mt-0.5 ${
                activeConnector === i ? "text-white/70" : "text-slate-400"
              }`}
            >
              {c.wordEs}
            </span>
          </button>
        ))}
      </div>

      {/* Active example */}
      {activeConnector !== null && (
        <div className="bg-white rounded-2xl border-2 border-amber-200 p-6 space-y-3 shadow-md shadow-amber-50">
          <div className="flex items-start gap-3">
            <AudioButton
              text={connectors[activeConnector].example.english}
              size="md"
            />
            <div className="flex-1">
              <p className="text-lg text-slate-900 leading-relaxed">
                {connectors[activeConnector].example.english
                  .split(connectors[activeConnector].word)
                  .map((part, pi, arr) => (
                    <span key={pi}>
                      {part}
                      {pi < arr.length - 1 && (
                        <span className="font-bold text-amber-600 bg-amber-50 px-1 rounded">
                          {connectors[activeConnector].word}
                        </span>
                      )}
                    </span>
                  ))}
              </p>
              <p className="text-slate-500 text-sm mt-1">
                {connectors[activeConnector].example.spanish}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Boss sentence */}
      <div className="mt-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 rounded-2xl blur-sm opacity-30" />
        <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={14} />
            {lang === "es"
              ? "La oración maestra de la Unidad 1"
              : "Unit 1 Boss Sentence"}
          </div>

          {!bossRevealed ? (
            <button
              onClick={() => setBossRevealed(true)}
              className="block mx-auto px-8 py-4 rounded-xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-400 transition-colors shadow-lg"
            >
              {lang === "es"
                ? "¿Puedes decir esta oración?"
                : "Can you say this sentence?"}
            </button>
          ) : (
            <div className="space-y-4">
              <p className="text-white text-2xl md:text-3xl font-bold leading-snug">
                {bossSentence.english}
              </p>
              <p className="text-slate-400 text-lg">
                {bossSentence.spanish}
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <AudioButton
                  text={bossSentence.english}
                  size="lg"
                  className="!bg-white/10 !text-white hover:!bg-white/20"
                  label="Listen at normal speed"
                />
                <AudioButton
                  text={bossSentence.english}
                  rate={0.8}
                  size="lg"
                  className="!bg-white/5 !text-white/60 hover:!bg-white/10"
                  label="Listen slowly"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
