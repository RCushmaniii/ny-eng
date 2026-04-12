import { useState } from "react";
import { Eye, RotateCcw, Clock } from "lucide-react";
import AudioButton from "./AudioButton";

export interface TimelineEvent {
  /** Order in the story (1 = earliest in time) */
  order: number;
  /** When this is told in the narrative (e.g., "First", "Then", "Earlier...") */
  timeMarker: string;
  timeMarkerEs: string;
  /** The English sentence */
  english: string;
  /** Spanish translation */
  spanish: string;
  /** Which tense is used and why */
  tense:
    | "past-simple"
    | "past-perfect"
    | "would-habitual"
    | "reported-speech"
    | "past-continuous";
  /** Short explanation of why this tense */
  whyTense: string;
  whyTenseEs: string;
}

export interface NarrativeStory {
  title: string;
  titleEs: string;
  intro: string;
  introEs: string;
  events: TimelineEvent[];
}

interface Props {
  stories: NarrativeStory[];
  lang: "en" | "es";
}

const tenseColors: Record<TimelineEvent["tense"], string> = {
  "past-simple": "bg-blue-100 text-blue-700 border-blue-200",
  "past-perfect": "bg-violet-100 text-violet-700 border-violet-200",
  "would-habitual": "bg-amber-100 text-amber-700 border-amber-200",
  "reported-speech": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "past-continuous": "bg-rose-100 text-rose-700 border-rose-200",
};

const tenseLabels: Record<TimelineEvent["tense"], { en: string; es: string }> = {
  "past-simple": { en: "past simple", es: "pasado simple" },
  "past-perfect": { en: "past perfect", es: "pasado perfecto" },
  "would-habitual": { en: "would (habitual)", es: "would (habitual)" },
  "reported-speech": { en: "reported speech", es: "discurso indirecto" },
  "past-continuous": { en: "past continuous", es: "pasado continuo" },
};

export default function NarrativeTimeline({ stories, lang }: Props) {
  const [activeStory, setActiveStory] = useState(0);
  const [revealedEvents, setRevealedEvents] = useState<Set<number>>(new Set());

  const story = stories[activeStory];

  const toggleEvent = (idx: number) => {
    const next = new Set(revealedEvents);
    if (next.has(idx)) {
      next.delete(idx);
    } else {
      next.add(idx);
    }
    setRevealedEvents(next);
  };

  const revealAll = () => {
    setRevealedEvents(new Set(story.events.map((_, i) => i)));
  };

  const reset = () => {
    setRevealedEvents(new Set());
  };

  const switchStory = (idx: number) => {
    setActiveStory(idx);
    setRevealedEvents(new Set());
  };

  return (
    <section className="space-y-6">
      {/* Story selector (if more than one) */}
      {stories.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {stories.map((s, i) => (
            <button
              key={i}
              onClick={() => switchStory(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                i === activeStory
                  ? "bg-amber-500 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {lang === "es" ? s.titleEs : s.title}
            </button>
          ))}
        </div>
      )}

      {/* Story intro */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-slate-900 mb-1">
              {lang === "es" ? story.titleEs : story.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {lang === "es" ? story.introEs : story.intro}
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={revealAll}
          className="text-xs text-slate-500 hover:text-amber-600 inline-flex items-center gap-1 transition-colors font-medium"
        >
          <Eye size={12} />
          {lang === "es" ? "Mostrar todo" : "Reveal all"}
        </button>
        <button
          onClick={reset}
          className="text-xs text-slate-400 hover:text-amber-600 inline-flex items-center gap-1 transition-colors"
        >
          <RotateCcw size={12} />
          {lang === "es" ? "Reiniciar" : "Reset"}
        </button>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-slate-200" />

        <ol className="space-y-5">
          {story.events.map((event, idx) => {
            const isRevealed = revealedEvents.has(idx);
            return (
              <li key={idx} className="relative pl-16">
                {/* Dot on timeline */}
                <div
                  className={`absolute left-4 top-3 w-5 h-5 rounded-full border-4 border-white shadow ${
                    isRevealed ? "bg-amber-500" : "bg-slate-300"
                  }`}
                />

                {/* Time marker */}
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  {lang === "es" ? event.timeMarkerEs : event.timeMarker}
                </div>

                {!isRevealed ? (
                  <button
                    onClick={() => toggleEvent(idx)}
                    className="w-full text-left p-4 rounded-xl border-2 border-dashed border-slate-200 text-slate-400 hover:border-amber-300 hover:text-amber-600 transition-colors"
                  >
                    {lang === "es"
                      ? "Toca para revelar este momento"
                      : "Tap to reveal this moment"}
                  </button>
                ) : (
                  <div className="bg-white border-2 border-slate-200 rounded-xl p-4 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-base text-slate-900 font-medium leading-relaxed flex-1">
                        {event.english}
                      </p>
                      <div className="shrink-0">
                        <AudioButton text={event.english} size="sm" />
                      </div>
                    </div>
                    <p className="text-sm text-slate-500">{event.spanish}</p>
                    <div className="flex items-start gap-2 pt-2 border-t border-slate-100">
                      <span
                        className={`text-xs font-mono px-2 py-0.5 rounded-full border shrink-0 ${tenseColors[event.tense]}`}
                      >
                        {tenseLabels[event.tense][lang]}
                      </span>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {lang === "es" ? event.whyTenseEs : event.whyTense}
                      </p>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      {revealedEvents.size === story.events.length && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
          <p className="text-emerald-800 font-medium text-sm">
            {lang === "es"
              ? "¡Bien hecho! Has visto cómo los tiempos pasados se conectan en una narración."
              : "Well done! You've seen how past tenses connect in a narrative."}
          </p>
        </div>
      )}
    </section>
  );
}
