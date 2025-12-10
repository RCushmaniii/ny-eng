import { useState } from "react";
import { Download, Calendar, ArrowRight, Target, Clock, X, Check, Lightbulb } from "lucide-react";

// =============================================================================
// TYPES
// =============================================================================

interface GenericFreeAssetProps {
  content: any; // The full JSON content object
  lang: "en" | "es";
  pdfFile: string; // e.g., "5-questions.pdf"
  bookingUrl: string; // e.g., "/en/book/" or "/es/reservar/"
  contentType?: string; // e.g., "questions", "video", "audio", "checklist"
}

// =============================================================================
// REUSABLE COMPONENTS
// =============================================================================

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 text-base font-semibold rounded-xl transition-all duration-200
        ${
          active
            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
            : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
        }
      `}
    >
      {children}
    </button>
  );
}

// =============================================================================
// CONTENT TYPE RENDERERS
// =============================================================================

// Questions Content Type (like 5-questions)
function QuestionsContent({ content, lang }: { content: any; lang: "en" | "es" }) {
  const currentContent = content[lang];
  
  // Support both 'questions' and 'sentences' arrays
  const items = currentContent.questions || currentContent.sentences || [];

  return (
    <>
      {/* Questions/Sentences Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {items.map((question: any) => (
              <QuestionCard
                key={question.number}
                question={question}
                labels={currentContent.labels}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pattern Section (if exists) */}
      {currentContent.pattern && (
        <section className="py-16 md:py-20 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {currentContent.pattern.title}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {currentContent.pattern.intro}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {currentContent.pattern.items?.map((item: any, index: number) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="font-bold text-slate-900 text-lg mb-2">
                    {item.bold}
                  </div>
                  <div className="text-slate-600 text-sm leading-relaxed">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quick Reference Table (if exists) */}
      {currentContent.quickRef && (
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
              {currentContent.quickRef.title}
            </h2>
            {currentContent.quickRef.intro && (
              <p className="text-center text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                {currentContent.quickRef.intro}
              </p>
            )}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-4 text-left font-semibold rounded-tl-xl">
                      {currentContent.labels.situation}
                    </th>
                    <th className="px-6 py-4 text-left font-semibold rounded-tr-xl">
                      {currentContent.labels.structure || currentContent.labels.seniorQuestion}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentContent.quickRef.rows?.map((row: any, index: number) => (
                    <tr
                      key={index}
                      className={`border-b border-slate-200 ${
                        index % 2 === 0 ? "bg-slate-50" : "bg-white"
                      } hover:bg-blue-50 transition-colors`}
                    >
                      <td className="px-6 py-4 font-medium text-slate-700">
                        {row.situation}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        "{row.structure || row.question}"
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

// Sections Content Type (for scripts, templates, frameworks, guides)
function SectionsContent({ content, lang }: { content: any; lang: "en" | "es" }) {
  const currentContent = content[lang];
  const sections = currentContent.sections || [];

  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-12">
          {sections.map((section: any, index: number) => (
            <div key={section.id || index} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
              {/* Section Header */}
              <div className="mb-6 pb-4 border-b border-slate-100">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  {section.title}
                </h2>
                {section.description && (
                  <p className="text-lg text-slate-600">{section.description}</p>
                )}
                {section.timing && (
                  <p className="text-sm text-blue-600 mt-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {section.timing}
                  </p>
                )}
              </div>

              {/* Principle */}
              {section.principle && (
                <div className="mb-6 p-4 bg-amber-50 rounded-xl border border-amber-100">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700 leading-relaxed">{section.principle}</p>
                  </div>
                </div>
              )}

              {/* Generic content field */}
              {section.content && !section.subsections && !section.scripts && !section.scenarios && !section.mistakes && !section.days && !section.items && (
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">{section.content}</p>
              )}

              {/* Items (for principles, mistakes, quick wins with examples) */}
              {section.items && section.items.length > 0 && (
                <div className="space-y-8">
                  {section.items.map((item: any, itemIndex: number) => (
                    <div key={itemIndex} className="bg-white rounded-lg p-6 border border-slate-200">
                      <div className="flex items-start gap-4 mb-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          {item.number}
                        </span>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title || item.mistake}</h4>
                          {item.content && <p className="text-slate-700 leading-relaxed">{item.content}</p>}
                          {item.problem && <p className="text-slate-700 leading-relaxed">{item.problem}</p>}
                        </div>
                      </div>
                      
                      {/* Example with wrong/right comparison */}
                      {item.example && (
                        <div className="space-y-3 mb-4">
                          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                            <p className="text-sm font-semibold text-red-900 mb-2 flex items-center gap-2">
                              <X className="w-4 h-4" />
                              {lang === "en" ? "Wrong:" : "Incorrecto:"}
                            </p>
                            <p className="text-slate-700 italic">"{item.example.wrong || item.wrongExample}"</p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                            <p className="text-sm font-semibold text-green-900 mb-2 flex items-center gap-2">
                              <Check className="w-4 h-4" />
                              {lang === "en" ? "Right:" : "Correcto:"}
                            </p>
                            <p className="text-slate-700 italic font-medium">"{item.example.right || item.rightExample}"</p>
                          </div>
                          {item.example.why && (
                            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                              <p className="text-sm font-semibold text-blue-900 mb-2">
                                {lang === "en" ? "Why it matters:" : "Por qué importa:"}
                              </p>
                              <p className="text-slate-700">{item.example.why}</p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Fix for mistakes */}
                      {item.fix && (
                        <div className="bg-green-50 rounded-lg p-4 border border-green-200 mb-4">
                          <p className="text-sm font-semibold text-green-900 mb-2">
                            {lang === "en" ? "The Fix:" : "La Solución:"}
                          </p>
                          <p className="text-slate-700">{item.fix}</p>
                        </div>
                      )}

                      {/* Action item */}
                      {item.actionItem && (
                        <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                          <p className="text-sm font-semibold text-amber-900 mb-2 flex items-center gap-2">
                            <Lightbulb className="w-4 h-4" />
                            {lang === "en" ? "Action Item:" : "Acción:"}
                          </p>
                          <p className="text-slate-700">{item.actionItem}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Subsections (for nested content like 4-part formulas) */}
              {section.subsections && section.subsections.length > 0 && (
                <div className="space-y-8">
                  {section.subsections.map((subsection: any, subIndex: number) => (
                    <div key={subIndex} className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{subsection.title}</h3>
                      {subsection.content && <p className="text-slate-700 mb-4">{subsection.content}</p>}
                      {subsection.purpose && (
                        <p className="text-sm text-slate-600 italic mb-3">Purpose: {subsection.purpose}</p>
                      )}
                      {subsection.formula && (
                        <div className="bg-blue-50 rounded-lg p-4 mb-4">
                          <p className="font-mono text-blue-900">{subsection.formula}</p>
                        </div>
                      )}
                      {subsection.examples && subsection.examples.length > 0 && (
                        <div className="space-y-4 mb-4">
                          {subsection.examples.map((example: any, exIndex: number) => {
                            // Handle both string examples and object examples with scenario/script
                            if (typeof example === 'string') {
                              return (
                                <p key={exIndex} className="text-slate-700 pl-4 border-l-2 border-slate-200 italic">
                                  "{example}"
                                </p>
                              );
                            } else if (example.scenario && example.script) {
                              return (
                                <div key={exIndex} className="bg-slate-50 rounded-lg p-4">
                                  <h5 className="font-semibold text-slate-900 mb-2">{example.scenario}</h5>
                                  <p className="text-slate-700 italic leading-relaxed">"{example.script}"</p>
                                </div>
                              );
                            }
                            return null;
                          })}
                        </div>
                      )}
                      {subsection.tips && subsection.tips.length > 0 && (
                        <ul className="space-y-2">
                          {subsection.tips.map((tip: string, tipIndex: number) => (
                            <li key={tipIndex} className="flex items-start gap-2 text-sm text-slate-600">
                              <Lightbulb className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      )}
                      {subsection.steps && subsection.steps.length > 0 && (
                        <div className="space-y-4">
                          {subsection.steps.map((step: any, stepIndex: number) => (
                            <div key={stepIndex} className="bg-slate-50 rounded-lg p-4">
                              <div className="flex items-start gap-3 mb-2">
                                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                  {step.step}
                                </span>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-slate-900">{step.name}</h4>
                                  {step.duration && <p className="text-xs text-slate-500">{step.duration}</p>}
                                </div>
                              </div>
                              {step.purpose && <p className="text-sm text-slate-600 mb-3">{step.purpose}</p>}
                              {step.scripts && step.scripts.length > 0 && (
                                <div className="space-y-2">
                                  {step.scripts.map((script: string, sIndex: number) => (
                                    <p key={sIndex} className="text-slate-700 pl-4 border-l-2 border-blue-300 italic text-sm">
                                      "{script}"
                                    </p>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Scenarios (for template examples) */}
              {section.scenarios && section.scenarios.length > 0 && (
                <div className="space-y-6">
                  {section.scenarios.map((scenario: any, scenIndex: number) => (
                    <div key={scenIndex} className="bg-slate-50 rounded-lg p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">{scenario.scenario}</h4>
                      {scenario.template && (
                        <div className="bg-white rounded-lg p-4 mb-4 border-2 border-dashed border-slate-300">
                          <p className="text-slate-700 text-sm leading-relaxed">{scenario.template}</p>
                        </div>
                      )}
                      {scenario.example && (
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-sm font-semibold text-blue-900 mb-2">Example:</p>
                          <p className="text-slate-700 italic">{scenario.example}</p>
                        </div>
                      )}
                      {scenario.script && (
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-slate-700 italic">"{scenario.script}"</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Mistakes (for common errors) */}
              {section.mistakes && section.mistakes.length > 0 && (
                <div className="space-y-4">
                  {section.mistakes.map((mistake: any, mistakeIndex: number) => (
                    <div key={mistakeIndex} className="border border-red-200 rounded-lg p-4 bg-red-50">
                      <h4 className="font-semibold text-red-900 mb-2">{mistake.mistake}</h4>
                      {mistake.example && (
                        <p className="text-sm text-red-700 mb-2 pl-4 border-l-2 border-red-300">
                          <X className="inline w-3 h-3 mr-1" />
                          {mistake.example}
                        </p>
                      )}
                      {mistake.fix && (
                        <p className="text-sm text-green-700 pl-4 border-l-2 border-green-400">
                          <Check className="inline w-3 h-3 mr-1" />
                          {mistake.fix}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Days (for practice plans) */}
              {section.days && section.days.length > 0 && (
                <div className="space-y-6">
                  {section.days.map((day: any, dayIndex: number) => (
                    <div key={dayIndex} className="bg-slate-50 rounded-lg p-6">
                      <h4 className="font-semibold text-slate-900 mb-4">{day.day}</h4>
                      {day.tasks && day.tasks.length > 0 && (
                        <ul className="space-y-2">
                          {day.tasks.map((task: string, taskIndex: number) => (
                            <li key={taskIndex} className="flex items-start gap-2 text-slate-700">
                              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              {task}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Categories (for power phrases, word banks, etc.) */}
              {section.categories && section.categories.length > 0 && (
                <div className="space-y-6">
                  {section.categories.map((category: any, catIndex: number) => (
                    <div key={catIndex} className="bg-slate-50 rounded-lg p-6">
                      <h4 className="font-semibold text-slate-900 mb-4">{category.category}</h4>
                      {category.phrases && category.phrases.length > 0 && (
                        <ul className="space-y-3">
                          {category.phrases.map((phrase: string, phraseIndex: number) => (
                            <li key={phraseIndex} className="flex items-start gap-3 text-slate-700">
                              <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                              <span className="italic">"{phrase}"</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Scripts (for negotiation/call scripts) */}
              {section.scripts && section.scripts.length > 0 && (
                <div className="space-y-6">
                  {section.scripts.map((script: any, scriptIndex: number) => (
                    <div key={scriptIndex} className="border-l-4 border-blue-500 pl-4 py-2">
                      <h4 className="font-semibold text-slate-800 mb-2">{script.situation}</h4>
                      <div className="bg-slate-50 rounded-lg p-4 mb-3">
                        <p className="text-slate-900 font-medium italic">"{script.script}"</p>
                      </div>
                      {script.notes && script.notes.length > 0 && (
                        <ul className="space-y-1 text-sm text-slate-600">
                          {script.notes.map((note: string, noteIndex: number) => (
                            <li key={noteIndex} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              {note}
                            </li>
                          ))}
                        </ul>
                      )}
                      {script.avoid && (
                        <div className="mt-3 p-3 bg-red-50 rounded-lg border border-red-100">
                          <p className="text-sm text-red-700 flex items-start gap-2">
                            <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span><strong>{lang === "en" ? "Avoid:" : "Evita:"}</strong> {script.avoid}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Question Card Component
interface QuestionCardProps {
  question: any;
  labels: any;
}

function QuestionCard({ question, labels }: QuestionCardProps) {
  // Support both 'question' and 'structure' fields
  const mainText = question.question || question.structure;
  const hasExample = question.example;
  
  return (
    <div className="question-card bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300">
      {/* Question Number - Large Serif Style */}
      <div className="flex items-start gap-6 mb-6 pb-6 border-b border-slate-100">
        <div className="flex-shrink-0">
          <span className="text-5xl md:text-6xl font-serif text-slate-300 leading-none">
            {String(question.number).padStart(2, '0')}
          </span>
        </div>
        <div className="flex-1 pt-2">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
            "{mainText}"
          </h3>
          {hasExample && (
            <p className="text-base text-slate-600 mt-3 italic leading-relaxed">
              {question.example}
            </p>
          )}
        </div>
      </div>

      {/* The Strategy Section */}
      <div className="mb-6">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
          {labels.why ? "The Strategy" : "La Estrategia"}
        </h4>
        <div className="space-y-3">
          {/* Why */}
          <div className="flex items-start gap-3 border-l-2 border-emerald-600 pl-4 py-1">
            <Target className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide block mb-1">
                {labels.why}
              </span>
              <p className="text-slate-700 text-sm leading-relaxed">{question.why}</p>
            </div>
          </div>

          {/* When */}
          <div className="flex items-start gap-3 border-l-2 border-blue-600 pl-4 py-1">
            <Clock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide block mb-1">
                {labels.when}
              </span>
              <p className="text-slate-700 text-sm leading-relaxed">{question.when}</p>
            </div>
          </div>
        </div>
      </div>

      {/* The Script Section */}
      <div>
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
          {labels.doNotSay ? "The Script" : "El Guion"}
        </h4>
        <div className="space-y-3">
          {/* Do Not Say */}
          <div className="flex items-start gap-3 pl-4 py-1">
            <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">
                {labels.doNotSay}
              </span>
              <p className="text-slate-600 text-sm leading-relaxed line-through decoration-red-400">
                {question.doNotSay.replace(/"/g, '').replace(/\(.*?\)/g, '')}
              </p>
              {question.doNotSay.includes('(') && (
                <p className="text-xs text-slate-500 mt-1 italic">
                  {question.doNotSay.match(/\((.*?)\)/)?.[1]}
                </p>
              )}
            </div>
          </div>

          {/* How to Say */}
          <div className="flex items-start gap-3 border-l-2 border-emerald-600 pl-4 py-1">
            <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide block mb-1">
                {labels.howToSay}
              </span>
              <p className="text-slate-900 text-sm leading-relaxed font-medium">{question.howToSay}</p>
            </div>
          </div>

          {/* Variations (if exists) */}
          {question.variations && (
            <div className="flex items-start gap-3 pl-4 py-1 mt-4 pt-4 border-t border-slate-100">
              <Lightbulb className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide block mb-1">
                  {labels.variations}
                </span>
                {Array.isArray(question.variations) ? (
                  <ul className="text-slate-700 text-sm leading-relaxed font-medium space-y-1">
                    {question.variations.map((variation: string, idx: number) => (
                      <li key={idx}>• {variation}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">{question.variations}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export default function GenericFreeAsset({
  content,
  lang,
  pdfFile,
  bookingUrl,
  contentType = "default"
}: GenericFreeAssetProps) {
  const [activeTab, setActiveTab] = useState<"en" | "es">(lang);

  const currentContent = content[activeTab];
  
  // Safety check - if content is missing, show error message
  if (!currentContent || !currentContent.title) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Content Not Available</h1>
          <p className="text-slate-600">This resource is not available in {lang === "en" ? "English" : "Spanish"} yet.</p>
        </div>
      </div>
    );
  }
  const pdfPath = `/assets/documents/${pdfFile}`;

  // About content (reusable across all assets)
  const aboutContent = {
    en: {
      text: "I help Latin American tech professionals communicate with executive-level confidence so they can close bigger contracts, command premium rates, and advance their international careers.",
      subtext:
        "After coaching 200+ professionals from Smarttie, Grupo Kopar, Terramar Brands, and Sourceability, I know that what separates good from great in high-pressure meetings isn't vocabulary—it's leadership communication.",
    },
    es: {
      text: "Ayudo a profesionales de tecnología en Latinoamérica a comunicarse con confianza de nivel ejecutivo para que puedan cerrar contratos más grandes, cobrar tarifas premium y avanzar en sus carreras internacionales.",
      subtext:
        "Después de entrenar a más de 200 profesionales de Smarttie, Grupo Kopar, Terramar Brands y Sourceability, sé que lo que separa a los buenos de los excelentes en reuniones de alta presión no es el vocabulario—es la comunicación de liderazgo.",
    },
  };

  // CTA content (reusable across all assets)
  const ctaContent = {
    en: {
      downloadPdf: "Download PDF",
      downloadSubtext: "Bilingual version • Print-friendly",
      bookCall: "Book a Free Strategy Call",
      bookSubtext: "15 minutes • No obligation",
    },
    es: {
      downloadPdf: "Descargar PDF",
      downloadSubtext: "Versión bilingüe • Para imprimir",
      bookCall: "Reserva una Llamada Gratis",
      bookSubtext: "15 minutos • Sin compromiso",
    },
  };

  const currentAbout = aboutContent[activeTab];
  const currentCta = ctaContent[activeTab];

  return (
    <div className="free-asset-page">
      {/* Hero Section */}
      <section className="bg-white pt-28 pb-16 md:pt-32 md:pb-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header with Logo and Download */}
          <div className="flex items-center justify-between mb-12">
            <img
              src="/images/logos/new-york-english-sq-og.jpg"
              alt="NY English"
              className="w-16 h-16 md:w-20 md:h-20 rounded-lg shadow-sm"
            />
            <a
              href={pdfPath}
              download={pdfFile}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all duration-200 shadow-sm no-print"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">
                {activeTab === "en" ? "Download PDF" : "Descargar PDF"}
              </span>
            </a>
          </div>

          {/* Title */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {currentContent.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-normal max-w-2xl">
              {currentContent.subtitle}
            </p>
          </div>

          {/* Intro Section (if exists) */}
          {currentContent.intro && (
            <>
              {currentContent.intro.line1 && (
                <div className="mb-8 pb-8 border-b border-slate-200">
                  <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                    {currentContent.intro.line1}
                  </p>
                  {currentContent.intro.line2 && (
                    <p className="text-2xl md:text-3xl font-bold text-blue-600">
                      {currentContent.intro.line2}
                    </p>
                  )}
                </div>
              )}

              {currentContent.intro.paragraph && (
                <div className="mb-8">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {currentContent.intro.paragraph}
                  </p>
                </div>
              )}
            </>
          )}

          {/* Language Tabs */}
          <div className="flex justify-center gap-3 mb-8">
            <TabButton active={activeTab === "en"} onClick={() => setActiveTab("en")}>
              English
            </TabButton>
            <TabButton active={activeTab === "es"} onClick={() => setActiveTab("es")}>
              Español
            </TabButton>
          </div>
        </div>
      </section>

      {/* Content Type Specific Rendering */}
      {contentType === "questions" && <QuestionsContent content={content} lang={activeTab} />}
      {contentType === "sentences" && <QuestionsContent content={content} lang={activeTab} />}
      {(contentType === "script" || contentType === "template" || contentType === "framework" || contentType === "guide") && (
        <SectionsContent content={content} lang={activeTab} />
      )}

      {/* About Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <img
            src="/images/logos/new-york-english-sq-og.jpg"
            alt="Robert Cushman"
            className="w-24 h-24 rounded-2xl mx-auto mb-6 shadow-lg"
          />
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
            Robert Cushman
          </h2>
          <p className="text-lg text-slate-700 mb-4 leading-relaxed">
            {currentAbout.text}
          </p>
          <p className="text-slate-600 leading-relaxed">{currentAbout.subtext}</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Download CTA */}
            <a
              href={pdfPath}
              download={pdfFile}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 md:p-8 text-left hover:shadow-xl transition-all duration-300 block no-print"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Download className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {currentCta.downloadPdf}
                  </h3>
                  <p className="text-slate-500 text-sm">{currentCta.downloadSubtext}</p>
                </div>
              </div>
              <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                {activeTab === "en" ? "Download now" : "Descargar ahora"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </a>

            {/* Book Call CTA */}
            <a
              href={bookingUrl}
              className="group bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 md:p-8 text-left hover:shadow-xl hover:shadow-blue-600/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {currentCta.bookCall}
                  </h3>
                  <p className="text-blue-200 text-sm">{currentCta.bookSubtext}</p>
                </div>
              </div>
              <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform">
                {activeTab === "en" ? "Schedule now" : "Agendar ahora"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
