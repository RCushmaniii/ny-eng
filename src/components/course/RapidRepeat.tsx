// RapidRepeat — memory-anchoring block that closes every section.
//
// Displays 3-5 reusable sentence stems with an AudioButton per stem and a
// "say aloud" affordance. The learner plays each stem and repeats it three
// times. This mirrors Robert's "Rapid Repeat" / "Optional Rapid Drill"
// pattern that reinforces the section's core phrasing.

import { Megaphone, Volume2 } from "lucide-react";
import AudioButton from "./AudioButton";
import type { RapidRepeatStem } from "@data/executive/types";

interface Props {
  stems: RapidRepeatStem[];
  lang: "en" | "es";
  /** Optional heading override — defaults to "Rapid Repeat" */
  heading?: string;
  headingEs?: string;
}

export default function RapidRepeat({
  stems,
  lang,
  heading,
  headingEs,
}: Props) {
  const title =
    lang === "es"
      ? headingEs ?? "Repetición Rápida"
      : heading ?? "Rapid Repeat";

  const instruction =
    lang === "es"
      ? "Dilas en voz alta. Una oración cada una. Luego repite, más corto y más limpio."
      : "Say them aloud. One sentence each. Then repeat, shorter and cleaner.";

  return (
    <section className="bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-4">
      <div className="flex items-center gap-2 text-amber-400">
        <Megaphone size={18} />
        <h3 className="text-sm font-semibold uppercase tracking-widest">
          {title}
        </h3>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed">{instruction}</p>

      <ul className="space-y-2">
        {stems.map((stem, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-3"
          >
            <div className="shrink-0 mt-0.5 w-7 h-7 rounded-full bg-amber-500 text-slate-900 text-xs font-bold flex items-center justify-center">
              {idx + 1}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base text-slate-100 font-medium leading-relaxed">
                "{stem.text}"
              </p>
              <p className="text-xs text-slate-400 mt-0.5">{stem.textEs}</p>
            </div>
            <div className="shrink-0 mt-0.5">
              <AudioButton text={stem.text} size="sm" />
            </div>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
        <Volume2 size={12} />
        <span>
          {lang === "es"
            ? "Cada frase es un anclaje — memorízala, luego desplégala."
            : "Each stem is an anchor — memorize it, then deploy it."}
        </span>
      </div>
    </section>
  );
}
