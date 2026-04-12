import { useState, useCallback, useRef, useEffect } from "react";
import { Volume2, Loader2 } from "lucide-react";

interface AudioButtonProps {
  text: string;
  lang?: "en-US" | "es-MX";
  rate?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

// Module-level voice cache — shared across all AudioButton instances
let cachedVoices: SpeechSynthesisVoice[] = [];
let voicesLoaded = false;

function loadVoices(): SpeechSynthesisVoice[] {
  if (typeof window === "undefined" || !window.speechSynthesis) return [];
  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    cachedVoices = voices;
    voicesLoaded = true;
  }
  return cachedVoices;
}

// Eagerly trigger voice loading on module import
if (typeof window !== "undefined" && window.speechSynthesis) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    loadVoices();
  };
}

function getBestVoice(langCode: string): SpeechSynthesisVoice | null {
  const voices = voicesLoaded ? cachedVoices : loadVoices();
  const langPrefix = langCode.slice(0, 2);

  // Priority 1: Non-local (cloud/neural) voice matching the language
  const neural = voices.find(
    (v) => v.lang.startsWith(langPrefix) && !v.localService,
  );
  if (neural) return neural;

  // Priority 2: Any voice matching the language
  const any = voices.find((v) => v.lang.startsWith(langPrefix));
  if (any) return any;

  return null;
}

/**
 * AudioButton — Uses the browser's built-in SpeechSynthesis API
 * to speak English text aloud. Preloads voices on mount so the
 * first click always gets the best available voice.
 */
export default function AudioButton({
  text,
  lang = "en-US",
  rate = 0.85,
  size = "md",
  className = "",
  label,
}: AudioButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [_ready, setReady] = useState(voicesLoaded);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Ensure voices are loaded before first interaction
  useEffect(() => {
    if (voicesLoaded) {
      setReady(true);
      return;
    }

    // Force voice loading by calling getVoices
    loadVoices();

    const handleVoicesChanged = () => {
      loadVoices();
      setReady(true);
    };

    window.speechSynthesis.onvoiceschanged = handleVoicesChanged;

    // Some browsers need a nudge — poll briefly
    const timer = setInterval(() => {
      const v = loadVoices();
      if (v.length > 0) {
        setReady(true);
        clearInterval(timer);
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const speak = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = rate;
    utterance.pitch = 1;

    // Use the cached best voice
    const voice = getBestVoice(lang);
    if (voice) utterance.voice = voice;

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
