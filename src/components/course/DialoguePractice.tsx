import { useState } from "react";
import { Eye, EyeOff, MapPin } from "lucide-react";
import AudioButton from "./AudioButton";
import type { Dialogue } from "@data/intermediate/types";

interface Props {
  dialogues: Dialogue[];
  lang: "en" | "es";
}

export default function DialoguePractice({ dialogues, lang }: Props) {
  const [activeDialogue, setActiveDialogue] = useState(0);
  const [revealedLines, setRevealedLines] = useState<Set<number>>(new Set());
  const [showAllTranslations, setShowAllTranslations] = useState(false);

  const dialogue = dialogues[activeDialogue];
  if (!dialogue) return null;

  const toggleLine = (index: number) => {
    if (showAllTranslations) return;
    setRevealedLines((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const toggleAllTranslations = () => {
    setShowAllTranslations(!showAllTranslations);
    setRevealedLines(new Set());
  };

  const isLineRevealed = (index: number) =>
    showAllTranslations || revealedLines.has(index);

  return (
    <div className="space-y-6">
      {/* Dialogue tabs (if multiple) */}
      {dialogues.length > 1 && (
        <div className="flex gap-2">
          {dialogues.map((d, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveDialogue(i);
                setRevealedLines(new Set());
                setShowAllTranslations(false);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeDialogue === i
                  ? "bg-amber-500 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {lang === "es" ? d.titleEs : d.title}
            </button>
          ))}
        </div>
      )}

      {/* Setting badge */}
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <MapPin size={14} />
        <span>{lang === "es" ? dialogue.settingEs : dialogue.setting}</span>
      </div>

      {/* Translation toggle */}
      <div className="flex justify-end">
        <button
          onClick={toggleAllTranslations}
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-700 transition-colors"
        >
          {showAllTranslations ? <EyeOff size={14} /> : <Eye size={14} />}
          {showAllTranslations
            ? lang === "es"
              ? "Ocultar traducciones"
              : "Hide translations"
            : lang === "es"
              ? "Mostrar traducciones"
              : "Show translations"}
        </button>
      </div>

      {/* Dialogue lines */}
      <div className="space-y-3">
        {dialogue.lines.map((line, i) => {
          const isA = line.speaker === "A";
          const revealed = isLineRevealed(i);

          return (
            <div
              key={i}
              className={`flex ${isA ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[80%] ${
                  isA ? "order-1" : "order-1"
                }`}
              >
                {/* Speaker label */}
                <p
                  className={`text-xs font-semibold mb-1 ${
                    isA ? "text-blue-600" : "text-emerald-600"
                  } ${isA ? "text-left" : "text-right"}`}
                >
                  {lang === "es" ? line.speakerLabelEs : line.speakerLabel}
                </p>

                {/* Bubble */}
                <div
                  onClick={() => toggleLine(i)}
                  className={`group rounded-2xl px-4 py-3 cursor-pointer transition-colors ${
                    isA
                      ? "bg-blue-50 border border-blue-100 rounded-tl-md"
                      : "bg-emerald-50 border border-emerald-100 rounded-tr-md"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <AudioButton text={line.english} size="sm" />
                    <div className="flex-1">
                      <p className="text-sm text-slate-800">
                        {line.highlight ? (
                          <>
                            {line.english
                              .split(line.highlight)
                              .map((part, pi, arr) => (
                                <span key={pi}>
                                  {part}
                                  {pi < arr.length - 1 && (
                                    <strong className="text-amber-600">
                                      {line.highlight}
                                    </strong>
                                  )}
                                </span>
                              ))}
                          </>
                        ) : (
                          line.english
                        )}
                      </p>
                      {revealed && (
                        <p className="text-sm text-slate-500 mt-1 italic">
                          {line.spanish}
                        </p>
                      )}
                      {!revealed && (
                        <p className="text-sm text-slate-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          {lang === "es"
                            ? "Toca para traducir"
                            : "Tap to translate"}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Key phrases */}
      {dialogue.keyPhrases.length > 0 && (
        <div className="bg-amber-50 rounded-xl border border-amber-200 p-5">
          <h4 className="text-sm font-bold text-amber-800 mb-3">
            {lang === "es" ? "Frases Clave" : "Key Phrases"}
          </h4>
          <div className="space-y-2">
            {dialogue.keyPhrases.map((kp, i) => (
              <div key={i} className="flex items-start gap-2">
                <AudioButton text={kp.english} size="sm" />
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    {kp.english}
                  </p>
                  <p className="text-sm text-slate-500">{kp.spanish}</p>
                  {kp.note && (
                    <p className="text-sm text-amber-600 mt-0.5 italic">
                      {lang === "es" ? kp.noteEs : kp.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
