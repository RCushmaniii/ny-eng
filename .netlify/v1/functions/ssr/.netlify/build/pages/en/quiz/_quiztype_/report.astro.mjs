import { c as createAstro, a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../../chunks/Base_D0GHnMc8.mjs';
import { i as isQuizTypeAvailable, g as getQuizConfig } from '../../../../chunks/index_C9q68HMh.mjs';
/* empty css                                           */
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$Report = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Report;
  const { quizType } = Astro2.params;
  if (!quizType || !isQuizTypeAvailable(quizType)) {
    return Astro2.redirect("/en/404");
  }
  const config = getQuizConfig(quizType, "en");
  const title = `Your Detailed Report | ${config.title}`;
  const description = "Your personalized Communication Confidence report with gap analysis and 30-day improvement roadmap.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "lang": "en", "tkey": "quiz/report", "hideCta": true, "hideLanguageSwitcher": true, "data-astro-cid-emjt6cem": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="quiz-report pt-28 pb-16 md:pt-32 md:pb-20" data-astro-cid-emjt6cem> <div class="container-report" data-astro-cid-emjt6cem> <!-- No Data Warning --> <div class="no-data-warning" id="no-data-warning" style="display: none;" data-astro-cid-emjt6cem> <div class="warning-content" data-astro-cid-emjt6cem> <div class="warning-icon" data-astro-cid-emjt6cem>⚠️</div> <h1 data-astro-cid-emjt6cem>No Report Available</h1> <p class="warning-text" data-astro-cid-emjt6cem>
You need to complete the quiz and submit your email to view your report.
</p> <a${addAttribute(`/en/quiz/${quizType}/question/1`, "href")} class="start-button" data-astro-cid-emjt6cem>
Start the Quiz →
</a> </div> </div> <!-- Report Content --> <div class="report-content" id="report-content" style="display: none;" data-astro-cid-emjt6cem> <!-- Header --> <div class="report-header" data-astro-cid-emjt6cem> <h1 data-astro-cid-emjt6cem>Your Communication Confidence Report</h1> <p class="report-subtitle" id="lead-name" data-astro-cid-emjt6cem><!-- Filled by script --></p> </div> <!-- Score Overview --> <div class="score-overview" data-astro-cid-emjt6cem> <div class="score-display" data-astro-cid-emjt6cem> <div class="score-number" id="total-score" data-astro-cid-emjt6cem>0</div> <div class="score-label" data-astro-cid-emjt6cem>/ 100</div> </div> <div class="score-tier-badge" id="tier-badge" data-astro-cid-emjt6cem> <!-- Filled by script --> </div> </div> <!-- Category Breakdown --> <div class="category-breakdown" data-astro-cid-emjt6cem> <h2 data-astro-cid-emjt6cem>Category Breakdown</h2> <div class="categories-grid" id="categories-grid" data-astro-cid-emjt6cem> <!-- Filled by script --> </div> </div> <!-- Gap Analysis --> <div class="gap-analysis" data-astro-cid-emjt6cem> <h2 data-astro-cid-emjt6cem>Your Top 2 Improvement Areas</h2> <div class="gap-card primary-gap" id="primary-gap" data-astro-cid-emjt6cem> <!-- Filled by script --> </div> <div class="gap-card secondary-gap" id="secondary-gap" data-astro-cid-emjt6cem> <!-- Filled by script --> </div> </div> <!-- CTA Section --> <div class="report-cta" data-astro-cid-emjt6cem> <h2 data-astro-cid-emjt6cem>Ready to Close These Gaps?</h2> <p data-astro-cid-emjt6cem>Book a free 30-minute strategy call to create your personalized improvement plan.</p> <a href="/en/contact" class="cta-button" data-astro-cid-emjt6cem>
Book Your Strategy Call →
</a> <button onclick="window.print()" class="print-button" data-astro-cid-emjt6cem>
Print Report
</button> </div> </div> </div> </section> ` })}  ${renderScript($$result, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/quiz/[quizType]/report.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/quiz/[quizType]/report.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/quiz/[quizType]/report.astro";
const $$url = "/en/quiz/[quizType]/report";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Report,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
