import { c as createAstro, a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base, a as $$Button } from '../../../../chunks/Base_D0GHnMc8.mjs';
import { i as isQuizTypeAvailable, g as getQuizConfig } from '../../../../chunks/index_C9q68HMh.mjs';
/* empty css                                            */
import { $ as $$Mail } from '../../../../chunks/Mail_R1UqRzRH.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$Results = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Results;
  const { quizType } = Astro2.params;
  if (!quizType || !isQuizTypeAvailable(quizType)) {
    return Astro2.redirect("/en/404");
  }
  const config = getQuizConfig(quizType, "en");
  const title = `Your Results | ${config.title}`;
  const description = "Get your personalized Communication Confidence Score (0-100) and improvement roadmap. Discover exactly where your team stands with high-stakes English communication.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "lang": "en", "tkey": "quiz/results", "hideCta": true, "hideLanguageSwitcher": true, "data-astro-cid-hctpih53": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="quiz-results pt-28 pb-16 md:pt-32 md:pb-20" data-astro-cid-hctpih53> <div class="container-narrow" data-astro-cid-hctpih53> <!-- No Quiz Data Warning (shown if user hasn't taken quiz) --> <div class="no-quiz-warning" id="no-quiz-warning" style="display: none;" data-astro-cid-hctpih53> <div class="warning-content" data-astro-cid-hctpih53> <div class="warning-icon" data-astro-cid-hctpih53>⚠️</div> <h1 data-astro-cid-hctpih53>Quiz Not Completed</h1> <p class="warning-text" data-astro-cid-hctpih53>
You need to complete the Communication Confidence Assessment before
            viewing your results.
</p> <p class="warning-subtext" data-astro-cid-hctpih53>
The quiz takes about 90 seconds and will give you a personalized
            score showing exactly where your team stands with high-stakes
            English communication.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": `/en/quiz/${quizType}/question/1`, "variant": "primary", "size": "lg", "class": "start-quiz-button", "data-astro-cid-hctpih53": true }, { "default": async ($$result3) => renderTemplate`
Start the Quiz →
` })} </div> </div> <!-- Submission Error Message (shown if submission fails) --> <div class="submission-error" id="submission-error" style="display: none;" data-astro-cid-hctpih53> <div class="error-content" data-astro-cid-hctpih53> <div class="error-icon" data-astro-cid-hctpih53>❌</div> <h1 data-astro-cid-hctpih53>Submission Error</h1> <p class="error-text" id="error-message" data-astro-cid-hctpih53>
There was an error submitting your quiz. Please try again.
</p> <p class="error-subtext" data-astro-cid-hctpih53>
If the problem persists, please contact us directly or try again
            later.
</p> <button onclick="location.reload()" class="retry-button px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-lg" data-astro-cid-hctpih53>
Try Again
</button> </div> </div> <!-- Lead Capture Form (shown first) --> <div class="lead-capture-card" id="lead-capture" data-astro-cid-hctpih53> <div class="capture-header" data-astro-cid-hctpih53> <h1 data-astro-cid-hctpih53>You're Almost There!</h1> <p class="capture-subtext" data-astro-cid-hctpih53>
Enter your email to receive your personalized Communication
            Confidence Score and detailed improvement roadmap.
</p> </div> <form class="capture-form" id="email-form" data-astro-cid-hctpih53> <input type="hidden" name="quizType"${addAttribute(quizType, "value")} data-astro-cid-hctpih53> <div class="form-group" data-astro-cid-hctpih53> <label for="name" class="form-label" data-astro-cid-hctpih53>Your Name</label> <input type="text" id="name" name="name" class="form-input" placeholder="John Smith" required data-astro-cid-hctpih53> </div> <div class="form-group" data-astro-cid-hctpih53> <label for="email" class="form-label" data-astro-cid-hctpih53>Email Address</label> <input type="email" id="email" name="email" class="form-input" placeholder="john@company.com" required data-astro-cid-hctpih53> </div> <div class="form-group" data-astro-cid-hctpih53> <label for="company" class="form-label" data-astro-cid-hctpih53>Company (Optional)</label> <input type="text" id="company" name="company" class="form-input" placeholder="Your Company Name" data-astro-cid-hctpih53> </div> <div class="form-group" data-astro-cid-hctpih53> <label for="phone" class="form-label" data-astro-cid-hctpih53>Phone Number (Optional)</label> <input type="tel" id="phone" name="phone" class="form-input" placeholder="+1 (555) 123-4567" data-astro-cid-hctpih53> </div> ${renderComponent($$result2, "Button", $$Button, { "type": "submit", "variant": "primary", "size": "lg", "class": "submit-button", "data-astro-cid-hctpih53": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Mail", $$Mail, { "size": 20, "data-astro-cid-hctpih53": true })}
Get My Results →
` })} <p class="privacy-text" data-astro-cid-hctpih53>
By submitting this form, you agree to our <a href="/en/legal/privacy-policy" target="_blank" class="privacy-link" data-astro-cid-hctpih53>Privacy Policy</a>. We respect your privacy and will never sell your information.
</p> </form> </div> </div> </section> ` })}  ${renderScript($$result, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/quiz/[quizType]/results.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/quiz/[quizType]/results.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/quiz/[quizType]/results.astro";
const $$url = "/en/quiz/[quizType]/results";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Results,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
