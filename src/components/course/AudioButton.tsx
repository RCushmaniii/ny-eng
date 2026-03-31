import { useState, useCallback, useRef } from "react";
import { Volume2, Loader2 } from "lucide-react";

interface AudioButtonProps {
  text: string;
  lang?: "en-US" | "es-MX";
  rate?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

/**
 * AudioButton — Uses the browser's built-in SpeechSynthesis API
 * to speak English text aloud. Zero cost, works offline.
 * Can be upgraded to Azure TTS later for higher quality.
 */
export default function AudioButton({
  text,
  lang = "en-US",
  rate = 1,
  size = "md",
  className = "",
  label,
}: AudioButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = rate;
    utterance.pitch = 1;

    // Try to pick a good voice
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(
      (v) => v.lang.startsWith(lang.slice(0, 2)) && v.localService === false,
    );
    const fallback = voices.find((v) => v.lang.startsWith(lang.slice(0, 2)));
    if (preferred) utterance.voice = preferred;
    else if (fallback) utterance.voice = fallback;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [text, lang, rate]);

  const sizeClasses = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 22,
  };

  return (
    <button
      type="button"
      onClick={speak}
      className={`inline-flex items-center justify-center rounded-full transition-all duration-200 ${
        isPlaying
          ? "bg-amber-500 text-white scale-110 shadow-lg shadow-amber-500/30"
          : "bg-slate-100 text-slate-600 hover:bg-amber-100 hover:text-amber-600 hover:scale-105"
      } ${sizeClasses[size]} ${className}`}
      aria-label={label || `Listen to: ${text}`}
      title={label || `Listen: "${text}"`}
    >
      {isPlaying ? (
        <Loader2 size={iconSizes[size]} className="animate-spin" />
      ) : (
        <Volume2 size={iconSizes[size]} />
      )}
    </button>
  );
}
