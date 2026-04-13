// AudioButton — shared audio component for the advanced course.
//
// Calls Azure Neural TTS via /api/tts/synthesize first. Falls back to
// browser SpeechSynthesis if Azure is unavailable (dev server, API error).
// Client-side caching prevents re-fetching the same text.
//
// Used in: SentenceTransformer, ErrorSpotter, WordPairLab, and any
// component that needs text-to-speech.

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

// Module-level audio cache shared across all AudioButton instances
const audioCache = new Map<string, string>();

export default function AudioButton({
  text,
  lang = "en-US",
  rate = 0.85,
  size = "md",
  className = "",
  label,
}: AudioButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const speakBrowserFallback = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setIsPlaying(false);
      return;
    }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = rate;
    u.pitch = 1;
    u.onend = () => setIsPlaying(false);
    u.onerror = () => setIsPlaying(false);
    speechSynthesis.speak(u);
  }, [text, lang, rate]);

  const speak = useCallback(async () => {
    // Stop any current playback
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setIsPlaying(true);

    try {
      // Check cache first
      let audioUrl = audioCache.get(text);

      if (!audioUrl) {
        const ttsLang = lang.startsWith("es") ? "es" : "en";
        const response = await fetch("/api/tts/synthesize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text, lang: ttsLang }),
        });

        if (!response.ok) throw new Error(`TTS ${response.status}`);

        const blob = await response.blob();
        if (blob.size < 100) throw new Error("Audio too small");

        audioUrl = URL.createObjectURL(blob);
        audioCache.set(text, audioUrl);
      }

      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      audio.addEventListener("ended", () => setIsPlaying(false));
      audio.addEventListener("error", () => {
        setIsPlaying(false);
        speakBrowserFallback();
      });
      await audio.play();
    } catch {
      // Azure TTS unavailable — fall back to browser SpeechSynthesis
      speakBrowserFallback();
    }
  }, [text, lang, speakBrowserFallback]);

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
