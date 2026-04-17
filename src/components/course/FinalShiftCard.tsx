// FinalShiftCard — the Before / After transformation summary that closes
// every unit in the Executive course.
//
// A pure display component. The text contrasts the linguistic habit the
// learner arrived with against the habit they leave with. This mirrors the
// "Final Shift" pattern from Robert's real lessons: naming the
// transformation makes the progress tangible.

import type { FinalShift } from "@data/executive/types";

interface Props {
  shift: FinalShift;
  lang: "en" | "es";
}

export default function FinalShiftCard({ shift, lang }: Props) {
  const before = lang === "es" ? shift.beforeEs : shift.before;
  const after = lang === "es" ? shift.afterEs : shift.after;

  return (
    <section
      aria-label={lang === "es" ? "Cambio Final" : "Final Shift"}
      className="bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950 border border-amber-900/40 rounded-2xl p-8 text-center text-slate-300"
    >
      <p className="text-[10px] font-mono uppercase tracking-[0.3em] !text-amber-400 mb-6">
        {lang === "es" ? "Cambio Final" : "Final Shift"}
      </p>

      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] items-center">
        <div className="text-left md:text-right">
          <p className="text-[10px] font-mono uppercase tracking-widest !text-slate-500 mb-2">
            {lang === "es" ? "Antes" : "Before"}
          </p>
          <p className="!text-slate-400 leading-relaxed">{before}</p>
        </div>

        <div
          aria-hidden="true"
          className="hidden md:flex items-center justify-center h-full px-2 text-amber-400 text-2xl font-light"
        >
          →
        </div>

        <div className="text-left">
          <p className="text-[10px] font-mono uppercase tracking-widest !text-amber-400 mb-2">
            {lang === "es" ? "Ahora" : "After"}
          </p>
          <p className="!text-amber-50 font-medium leading-relaxed">{after}</p>
        </div>
      </div>
    </section>
  );
}
