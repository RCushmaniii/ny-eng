import { useState, useEffect } from "react";
import { Check, Lock, ChevronDown } from "lucide-react";

interface Unit {
  id: number;
  slug: string;
  title: string;
  titleEs: string;
}

interface Props {
  units: Unit[];
  currentUnit: number;
  basePath: string;
  lang: "en" | "es";
  courseId?: string;
}

function getStorageKey(courseId: string) {
  return `nye_course_${courseId}_progress`;
}

function getCompletedUnits(courseId: string = "beginners"): number[] {
  if (typeof window === "undefined") return [];
  try {
    const data = JSON.parse(localStorage.getItem(getStorageKey(courseId)) || "{}");
    return data.completedUnits || [];
  } catch {
    return [];
  }
}

export function markUnitComplete(unitId: number, courseId: string = "beginners") {
  if (typeof window === "undefined") return;
  try {
    const key = getStorageKey(courseId);
    const data = JSON.parse(localStorage.getItem(key) || "{}");
    const completed = new Set(data.completedUnits || []);
    completed.add(unitId);
    localStorage.setItem(
      key,
      JSON.stringify({
        ...data,
        completedUnits: [...completed],
        lastVisited: new Date().toISOString(),
      }),
    );
  } catch {
    // Silent fail
  }
}

export default function CourseProgress({
  units,
  currentUnit,
  basePath,
  lang,
  courseId = "beginners",
}: Props) {
  const [completed, setCompleted] = useState<number[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setCompleted(getCompletedUnits(courseId));
  }, [courseId]);

  const progress = Math.round((completed.length / units.length) * 100);
  const currentUnitData = units.find((u) => u.id === currentUnit);

  return (
    <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="site-container mx-auto px-4">
        {/* Compact bar */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <a
              href={basePath + "/"}
              className="text-sm text-slate-500 hover:text-amber-600 transition-colors"
            >
              {lang === "es" ? "← Curso" : "← Course"}
            </a>
            <span className="text-slate-300">|</span>
            <span className="text-sm font-semibold text-slate-900">
              {lang === "es"
                ? `Unidad ${currentUnit}`
                : `Unit ${currentUnit}`}
            </span>
          </div>

          {/* Progress dots */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2"
          >
            <div className="hidden sm:flex items-center gap-1">
              {units.map((u) => (
                <div
                  key={u.id}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    u.id === currentUnit
                      ? "bg-amber-500 scale-125"
                      : completed.includes(u.id)
                        ? "bg-emerald-400"
                        : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-slate-400 sm:hidden">
              {currentUnit}/{units.length}
            </span>
            <ChevronDown
              size={14}
              className={`text-slate-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Expanded unit list */}
        {isExpanded && (
          <div className="pb-4 border-t border-slate-100 pt-3">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {units.map((u) => {
                const isCurrent = u.id === currentUnit;
                const isComplete = completed.includes(u.id);

                return (
                  <a
                    key={u.id}
                    href={`${basePath}/${u.slug}/`}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      isCurrent
                        ? "bg-amber-50 border border-amber-300 text-amber-800 font-semibold"
                        : isComplete
                          ? "bg-emerald-50 border border-emerald-200 text-emerald-700"
                          : "bg-slate-50 border border-slate-200 text-slate-600 hover:border-amber-200"
                    }`}
                  >
                    {isComplete ? (
                      <Check size={14} className="shrink-0" />
                    ) : (
                      <span className="w-3.5 text-center text-xs font-mono shrink-0">
                        {u.id}
                      </span>
                    )}
                    <span className="truncate">
                      {lang === "es" ? u.titleEs : u.title}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
