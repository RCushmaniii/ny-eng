// WordBuilder — interactive word decomposition component for advanced course.
//
// Breaks a word into prefix + root + suffix, color-codes each part, and
// explains what each piece means. The learner sees the whole word, taps to
// reveal the breakdown, then hears it pronounced via Azure Neural TTS.
//
// Used in: U8 (Prefixes & Suffixes)

import { useState, useCallback, useRef } from "react";
import { ArrowDown, RotateCcw, Volume2, Loader2 } from "lucide-react";
import type { WordBreakdown } from "@data/advanced/types";

interface Props {
  words: WordBreakdown[];
  lang: "en" | "es";
}

const roleColors: Record<string, { bg: string; text: string; label: string; labelEs: string }> = {
  prefix: { bg: "bg-violet-100", text: "text-violet-700", label: "prefix", labelEs: "prefijo" },
  root:   { bg: "bg-amber-100",  text: "text-amber-700",  label: "root",   labelEs: "raíz" },
  suffix: { bg: "bg-emerald-100", text: "text-emerald-700", label: "suffix", labelEs: "sufijo" },
};

function AzureAudioButton({ text, className = "" }: { text: string; className?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const cacheRef = useRef<Map<string, string>>(new Map());

  const speak = useCallback(async () => {
    // Stop any current playback
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setIsPlaying(true);

    try {
      let audioUrl = cacheRef.current.get(text);

      if (!audioUrl) {
        const response = await fetch("/api/tts/synthesize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text, lang: "en" }),
        });

        if (!response.ok) throw new Error(`TTS error: ${response.status}`);

        const blob = await response.blob();
        if (blob.size < 100) throw new Error("Audio too small");

        audioUrl = URL.createObjectURL(blob);
        cacheRef.current.set(text, audioUrl);
      }

      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      audio.addEventListener("ended", () => setIsPlaying(false));
      audio.addEventListener("error", () => setIsPlaying(false));
      await audio.play();
    } catch {
      // Fallback to browser SpeechSynthesis
      if ("speechSynthesis" in window) {
        speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = "en-US";
        u.rate = 0.85;
        u.onend = () => setIsPlaying(false);
        u.onerror = () => setIsPlaying(false);
        speechSynthesis.speak(u);
      } else {
        setIsPlaying(false);
      }
    }
  }, [text]);

  return (
    <button
      type="button"
      onClick={speak}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 ${
        isPlaying
          ? "bg-amber-500 text-white scale-110 shadow-lg shadow-amber-500/30"
          : "bg-slate-100 text-slate-600 hover:bg-amber-100 hover:text-amber-600 hover:scale-105"
      } ${className}`}
      aria-label={`Listen to: ${text}`}
      title={`Listen: "${text}"`}
    >
      {isPlaying ? <Loader2 size={18} className="animate-spin" /> : <Volume2 size={18} />}
    </button>
  );
}

export default function WordBuilder({ words, lang }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  const current = words[currentIndex];
  const isLast = currentIndex === words.length - 1;

  const handleReveal = () => setIsRevealed(true);

  const handleNext = () => {
    if (!isLast) {
      setCurrentIndex((i) => i + 1);
      setIsRevealed(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsRevealed(false);
  };

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-slate-500">
        <span>
          {lang === "es" ? "Palabra" : "Word"} {currentIndex + 1} / {words.length}
        </span>
        <div className="flex gap-1">
          {words.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i < currentIndex
                  ? "bg-violet-500"
                  : i === currentIndex
                    ? "bg-amber-500"
                    : "bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Word card */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        {/* The whole word */}
        <div className="p-8 text-center border-b border-slate-100">
          <div className="flex items-center justify-center gap-3">
            <span className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              {current.word}
            </span>
            <AzureAudioButton text={current.word} />
          </div>
          {!isRevealed && (
            <p className="text-slate-400 text-sm mt-3">
              {lang === "es"
                ? "¿Puedes identificar las partes de esta palabra?"
                : "Can you identify the parts of this word?"}
            </p>
          )}
        </div>

        {/* Reveal button or breakdown */}
        {!isRevealed ? (
          <button
            onClick={handleReveal}
            className="w-full py-4 flex items-center justify-center gap-2 text-violet-600 font-semibold hover:bg-violet-50 transition-colors"
          >
            <ArrowDown size={18} />
            {lang === "es" ? "Mostrar descomposición" : "Show breakdown"}
          </button>
        ) : (
          <div className="p-6 space-y-6">
            {/* Parts breakdown */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {current.parts.map((part, i) => {
                const colors = roleColors[part.role];
                return (
                  <div key={i} className="text-center">
                    <div
                      className={`${colors.bg} ${colors.text} px-4 py-2 rounded-xl text-2xl md:text-3xl font-bold`}
                    >
                      {part.text}
                    </div>
                    <span className={`text-xs font-semibold uppercase tracking-wider mt-1 block ${colors.text}`}>
                      {lang === "es" ? colors.labelEs : colors.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Part meanings */}
            <div className="space-y-2">
              {current.parts.map((part, i) => {
                const colors = roleColors[part.role];
                return (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <span
                      className={`${colors.bg} ${colors.text} px-2 py-0.5 rounded font-bold text-xs shrink-0 mt-0.5`}
                    >
                      {part.text}
                    </span>
                    <span className="text-slate-600">
                      {lang === "es" ? part.meaningEs : part.meaning}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Full meaning */}
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm font-semibold text-slate-700 mb-1">
                {lang === "es" ? "Significado completo:" : "Full meaning:"}
              </p>
              <p className="text-slate-600">
                {lang === "es" ? current.fullMeaningEs : current.fullMeaning}
              </p>
            </div>

            {/* Related example */}
            {current.relatedExample && (
              <div className="flex items-start gap-2 text-sm text-slate-500 border-t border-slate-100 pt-4">
                <span className="text-violet-500 font-semibold shrink-0">
                  {lang === "es" ? "Relacionada:" : "Related:"}
                </span>
                <span>
                  {lang === "es" ? current.relatedExampleEs : current.relatedExample}
                </span>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-end pt-2">
              {isLast ? (
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors text-sm"
                >
                  <RotateCcw size={16} />
                  {lang === "es" ? "Empezar de nuevo" : "Start over"}
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors text-sm"
                >
                  {lang === "es" ? "Siguiente palabra" : "Next word"}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
