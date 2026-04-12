import { useState } from "react";
import { ChevronDown, Eye } from "lucide-react";
import AudioButton from "./AudioButton";
import type { PhrasalVerbGroup } from "@data/intermediate/types";

interface Props {
  groups: PhrasalVerbGroup[];
  lang: "en" | "es";
}

export default function PhrasalVerbExplorer({ groups, lang }: Props) {
  const [expandedGroup, setExpandedGroup] = useState<number>(0);
  const [revealedVerbs, setRevealedVerbs] = useState<Set<string>>(new Set());

  const toggleGroup = (index: number) => {
    setExpandedGroup(expandedGroup === index ? -1 : index);
  };

  const revealVerb = (verbKey: string) => {
    setRevealedVerbs((prev) => new Set([...prev, verbKey]));
  };

  const revealAll = (groupIndex: number) => {
    const group = groups[groupIndex];
    const keys = group.verbs.map((v) => `${groupIndex}-${v.verb}`);
    setRevealedVerbs((prev) => new Set([...prev, ...keys]));
  };

  return (
    <div className="space-y-4">
      {groups.map((group, gi) => {
        const isExpanded = expandedGroup === gi;
        const allRevealed = group.verbs.every((v) =>
          revealedVerbs.has(`${gi}-${v.verb}`)
        );

        return (
          <div
            key={gi}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
          >
            {/* Group header */}
            <button
              onClick={() => toggleGroup(gi)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-amber-600">
                    {group.baseVerb}
                  </span>
                  <span className="text-sm text-slate-400">
                    {group.verbs.length}{" "}
                    {lang === "es" ? "phrasal verbs" : "phrasal verbs"}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mt-1">
                  {lang === "es" ? group.descriptionEs : group.description}
                </p>
              </div>
              <ChevronDown
                size={20}
                className={`text-slate-400 transition-transform shrink-0 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Phrasal verb cards */}
            {isExpanded && (
              <div className="border-t border-slate-100 p-4 space-y-3">
                {!allRevealed && (
                  <button
                    onClick={() => revealAll(gi)}
                    className="text-xs text-amber-600 hover:text-amber-700 font-medium"
                  >
                    {lang === "es" ? "Revelar todos" : "Reveal all"}
                  </button>
                )}

                {group.verbs.map((pv, vi) => {
                  const key = `${gi}-${pv.verb}`;
                  const isRevealed = revealedVerbs.has(key);

                  return (
                    <div
                      key={vi}
                      className="rounded-xl border border-slate-200 overflow-hidden"
                    >
                      {/* Phrasal verb + particle highlight */}
                      <div className="flex items-center justify-between p-4 bg-slate-50">
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-bold text-slate-900">
                            {pv.baseVerb}{" "}
                            <span className="text-amber-600">{pv.particle}</span>
                          </span>
                          <AudioButton text={pv.verb} size="sm" />
                        </div>
                        {!isRevealed && (
                          <button
                            onClick={() => revealVerb(key)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-100 text-amber-700 text-sm font-medium hover:bg-amber-200 transition-colors"
                          >
                            <Eye size={14} />
                            {lang === "es" ? "Revelar" : "Reveal"}
                          </button>
                        )}
                      </div>

                      {/* Revealed content */}
                      {isRevealed && (
                        <div className="p-4 space-y-3">
                          <div>
                            <p className="text-sm font-semibold text-slate-700">
                              {lang === "es" ? pv.definitionEs : pv.definition}
                            </p>
                            <p className="text-sm text-slate-400 mt-0.5">
                              {pv.verbEs}
                            </p>
                          </div>

                          <div className="bg-amber-50 rounded-lg p-3">
                            <div className="flex items-start gap-2">
                              <AudioButton text={pv.example} size="sm" />
                              <div>
                                <p className="text-sm text-slate-800">
                                  {pv.example}
                                </p>
                                <p className="text-xs text-slate-500 mt-1">
                                  {pv.exampleEs}
                                </p>
                              </div>
                            </div>
                          </div>

                          {pv.contextNote && (
                            <p className="text-xs text-slate-400 italic">
                              {lang === "es"
                                ? pv.contextNoteEs
                                : pv.contextNote}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
