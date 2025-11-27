import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base, a as $$Button } from '../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$Laptop } from '../../chunks/Laptop_xhFI1iEF.mjs';
import { $ as $$Briefcase, a as $$GraduationCap, b as $$Presentation } from '../../chunks/Presentation_Dj_9idFW.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Free Communication Skills Assessment Quiz | 4 Industry-Specific Tests | NY English";
  const description = "Take our free 90-second Communication Confidence Quiz. Get your personalized score (0-100) and discover exactly what's costing you deals. 4 industry-specific assessments for IT, executives, professionals and presenters.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "lang": "en", "tkey": "assessments", "hideCta": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-28 md:pt-32 lg:pt-36 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50"> <div class="max-w-5xl mx-auto px-4"> <header class="mb-12 mt-12 text-center"> <p class="text-sm font-semibold uppercase tracking-wide text-sky-600 mb-2">
The 90-Second Communication Audit
</p> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
Identify Your Leadership Communication Authority Score
</h1> <p class="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-4">
Gain instant insights into your clarity, confidence, and executive
          presence—the factors that drive promotions and trust.
</p> <ul class="text-left text-base text-slate-700 max-w-xl mx-auto space-y-2 mb-8"> <li class="flex items-start gap-2"> <span class="text-green-600 font-bold mt-0.5">✔</span> <span>4 industry-specific assessments</span> </li> <li class="flex items-start gap-2"> <span class="text-green-600 font-bold mt-0.5">✔</span> <span>Personalized score (0–100)</span> </li> <li class="flex items-start gap-2"> <span class="text-green-600 font-bold mt-0.5">✔</span> <span>Instant gap analysis & next steps</span> </li> <li class="flex items-start gap-2"> <span class="text-green-600 font-bold mt-0.5">✔</span> <span>Designed for busy professionals (takes under 2 minutes)</span> </li> </ul> </header> <h2 class="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
Choose Your Specialized Assessment
</h2> <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mb-16"> <article class="assessment-card bg-white border border-slate-200 rounded-2xl shadow-sm p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"> <div class="flex justify-center mb-4"> <div class="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-md"> ${renderComponent($$result2, "Laptop", $$Laptop, { "size": 36, "class": "text-blue-600" })} </div> </div> <h3 class="text-xl font-bold text-slate-900 mb-2 text-center">
IT Communication Audit
</h3> <p class="text-sm font-medium text-sky-700 mb-4 text-center">
For Senior Engineers, Tech Leads, and IT Managers
</p> <ul class="text-sm text-slate-600 space-y-2 mb-6 flex-grow"> <li class="flex items-start gap-2"> <span class="text-slate-400">•</span> <span><strong>Focus:</strong> Translating complexity, processing speed,
                and architecture discussions</span> </li> <li class="flex items-start gap-2"> <span class="text-slate-400">•</span> <span><strong>Outcome:</strong> Instant Communication Authority Score
                to unblock your career path</span> </li> </ul> ${renderComponent($$result2, "Button", $$Button, { "href": "/en/quiz/it-services/question/1", "variant": "primary", "size": "lg", "class": "w-full" }, { "default": ($$result3) => renderTemplate`
Start IT Assessment →
` })} </article> <article class="assessment-card bg-white border border-slate-200 rounded-2xl shadow-sm p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"> <div class="flex justify-center mb-4"> <div class="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center shadow-md"> ${renderComponent($$result2, "Briefcase", $$Briefcase, { "size": 36, "class": "text-purple-600" })} </div> </div> <h3 class="text-xl font-bold text-slate-900 mb-2 text-center">
Executive Communication Audit
</h3> <p class="text-sm font-medium text-sky-700 mb-4 text-center">
For Founders, C-Level Executives, and Senior Leaders
</p> <ul class="text-sm text-slate-600 space-y-2 mb-6 flex-grow"> <li class="flex items-start gap-2"> <span class="text-slate-400">•</span> <span><strong>Focus:</strong> Executive presence, strategic clarity, and
                high-stakes negotiation</span> </li> <li class="flex items-start gap-2"> <span class="text-slate-400">•</span> <span><strong>Outcome:</strong> Personalized gap analysis and next steps
                for C-Suite influence</span> </li> </ul> ${renderComponent($$result2, "Button", $$Button, { "href": "/en/quiz/executives/question/1", "variant": "primary", "size": "lg", "class": "w-full" }, { "default": ($$result3) => renderTemplate`
Start Executive Audit →
` })} </article> <article class="assessment-card bg-white border border-slate-200 rounded-2xl shadow-sm p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"> <div class="flex justify-center mb-4"> <div class="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-md"> ${renderComponent($$result2, "GraduationCap", $$GraduationCap, { "size": 36, "class": "text-green-600" })} </div> </div> <h3 class="text-xl font-bold text-slate-900 mb-2 text-center">
Professional Communication Audit
</h3> <p class="text-sm font-medium text-sky-700 mb-4 text-center">
For Doctors, Lawyers, and Financial Consultants
</p> <ul class="text-sm text-slate-600 space-y-2 mb-6 flex-grow"> <li class="flex items-start gap-2"> <span class="text-slate-400">•</span> <span><strong>Focus:</strong> Precision, empathy, and building unbreakable
                client/patient trust</span> </li> <li class="flex items-start gap-2"> <span class="text-slate-400">•</span> <span><strong>Outcome:</strong> Instant gap analysis and recommendations
                for practice growth</span> </li> </ul> ${renderComponent($$result2, "Button", $$Button, { "href": "/en/quiz/professional-services/question/1", "variant": "primary", "size": "lg", "class": "w-full" }, { "default": ($$result3) => renderTemplate`
Start Professional Audit →
` })} </article> <article class="assessment-card bg-white border border-slate-200 rounded-2xl shadow-sm p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"> <div class="flex justify-center mb-4"> <div class="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center shadow-md"> ${renderComponent($$result2, "Presentation", $$Presentation, { "size": 36, "class": "text-orange-600" })} </div> </div> <h3 class="text-xl font-bold text-slate-900 mb-2 text-center">
High-Stakes Performance Diagnostic
</h3> <p class="text-sm font-medium text-sky-700 mb-4 text-center">
For Presenters, Interviewees, and Public Speakers
</p> <ul class="text-sm text-slate-600 space-y-2 mb-6 flex-grow"> <li class="flex items-start gap-2"> <span class="text-slate-400">•</span> <span><strong>Focus:</strong> Presence, processing speed, and persuasion
                authority under pressure</span> </li> <li class="flex items-start gap-2"> <span class="text-slate-400">•</span> <span><strong>Outcome:</strong> Discover your "Pressure Performance Score"
                instantly</span> </li> </ul> ${renderComponent($$result2, "Button", $$Button, { "href": "/en/quiz/high-stakes/question/1", "variant": "primary", "size": "lg", "class": "w-full" }, { "default": ($$result3) => renderTemplate`
Start Diagnostic →
` })} </article> </div> </div> </section> ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/assessments/index.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/assessments/index.astro";
const $$url = "/en/assessments";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
