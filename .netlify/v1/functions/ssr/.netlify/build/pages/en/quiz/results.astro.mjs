import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base, a as $$Button } from '../../../chunks/Base_D0GHnMc8.mjs';
/* empty css                                         */
import { $ as $$Mail } from '../../../chunks/Mail_R1UqRzRH.mjs';
import { $ as $$Calendar } from '../../../chunks/Calendar_1OPHr6-b.mjs';
import { $ as $$Download } from '../../../chunks/Download_B4YE5U2T.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Results = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Your Speaking Confidence Results | NY English";
  const description = "Get your personalized Communication Confidence Score (0-100) and improvement roadmap. Discover exactly where your team stands with high-stakes English communication.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "lang": "en", "tkey": "quiz/results", "hideCta": true, "hideLanguageSwitcher": true, "data-astro-cid-4fqzvh6n": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="quiz-results pt-28 pb-16 md:pt-32 md:pb-20" data-astro-cid-4fqzvh6n> <div class="container-narrow" data-astro-cid-4fqzvh6n> <!-- No Quiz Data Warning (shown if user hasn't taken quiz) --> <div class="no-quiz-warning" id="no-quiz-warning" style="display: none;" data-astro-cid-4fqzvh6n> <div class="warning-content" data-astro-cid-4fqzvh6n> <div class="warning-icon" data-astro-cid-4fqzvh6n>⚠️</div> <h1 data-astro-cid-4fqzvh6n>Quiz Not Completed</h1> <p class="warning-text" data-astro-cid-4fqzvh6n>
You need to complete the Communication Confidence Assessment before viewing your results.
</p> <p class="warning-subtext" data-astro-cid-4fqzvh6n>
The quiz takes about 3-5 minutes and will give you a personalized score showing exactly where your team stands with high-stakes English communication.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "/en/quiz/start", "variant": "primary", "size": "lg", "class": "start-quiz-button", "data-astro-cid-4fqzvh6n": true }, { "default": async ($$result3) => renderTemplate`
Start the Quiz →
` })} </div> </div> <!-- Submission Error Message (shown if submission fails) --> <div class="submission-error" id="submission-error" style="display: none;" data-astro-cid-4fqzvh6n> <div class="error-content" data-astro-cid-4fqzvh6n> <div class="error-icon" data-astro-cid-4fqzvh6n>❌</div> <h1 data-astro-cid-4fqzvh6n>Submission Error</h1> <p class="error-text" id="error-message" data-astro-cid-4fqzvh6n>
There was an error submitting your quiz. Please try again.
</p> <p class="error-subtext" data-astro-cid-4fqzvh6n>
If the problem persists, please contact us directly or try again later.
</p> <button onclick="location.reload()" class="retry-button px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-lg" data-astro-cid-4fqzvh6n>
Try Again
</button> </div> </div> <!-- Lead Capture Form (shown first) --> <div class="lead-capture-card" id="lead-capture" data-astro-cid-4fqzvh6n> <div class="capture-header" data-astro-cid-4fqzvh6n> <h1 data-astro-cid-4fqzvh6n>You're Almost There!</h1> <p class="capture-subtext" data-astro-cid-4fqzvh6n>
Enter your email to receive your personalized Communication Confidence Score 
          and detailed improvement roadmap.
</p> </div> <form class="capture-form" id="email-form" data-astro-cid-4fqzvh6n> <div class="form-group" data-astro-cid-4fqzvh6n> <label for="name" class="form-label" data-astro-cid-4fqzvh6n>Your Name</label> <input type="text" id="name" name="name" class="form-input" placeholder="John Smith" required data-astro-cid-4fqzvh6n> </div> <div class="form-group" data-astro-cid-4fqzvh6n> <label for="email" class="form-label" data-astro-cid-4fqzvh6n>Email Address</label> <input type="email" id="email" name="email" class="form-input" placeholder="john@company.com" required data-astro-cid-4fqzvh6n> </div> <div class="form-group" data-astro-cid-4fqzvh6n> <label for="company" class="form-label" data-astro-cid-4fqzvh6n>Company (Optional)</label> <input type="text" id="company" name="company" class="form-input" placeholder="Your Company Name" data-astro-cid-4fqzvh6n> </div> <div class="form-group" data-astro-cid-4fqzvh6n> <label for="phone" class="form-label" data-astro-cid-4fqzvh6n>Phone Number (Optional)</label> <input type="tel" id="phone" name="phone" class="form-input" placeholder="+1 (555) 123-4567" data-astro-cid-4fqzvh6n> </div> ${renderComponent($$result2, "Button", $$Button, { "type": "submit", "variant": "primary", "size": "lg", "class": "submit-button", "data-astro-cid-4fqzvh6n": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Mail", $$Mail, { "size": 20, "data-astro-cid-4fqzvh6n": true })}
Get My Results →
` })} <p class="privacy-text" data-astro-cid-4fqzvh6n>
By submitting this form, you agree to our <a href="/en/legal/privacy-policy" target="_blank" class="privacy-link" data-astro-cid-4fqzvh6n>Privacy Policy</a>. 
          We respect your privacy and will never sell your information.
</p> </form> </div> <!-- Results Display (shown after email submission) --> <div class="results-display" id="results-display" style="display: none;" data-astro-cid-4fqzvh6n> <!-- Score Card --> <div class="score-card" data-astro-cid-4fqzvh6n> <div class="score-header" data-astro-cid-4fqzvh6n> <h2 data-astro-cid-4fqzvh6n>Your Communication Confidence Score</h2> <p class="score-subtitle" data-astro-cid-4fqzvh6n>Based on your responses</p> </div> <div class="score-circle" data-astro-cid-4fqzvh6n> <div class="score-number" id="final-score" data-astro-cid-4fqzvh6n>0</div> <div class="score-max" data-astro-cid-4fqzvh6n>/ 100</div> </div> <div class="score-label" id="score-label" data-astro-cid-4fqzvh6n>Calculating...</div> <div class="score-description" id="score-description" data-astro-cid-4fqzvh6n> <!-- Dynamically populated based on score --> </div> <div class="score-cta" data-astro-cid-4fqzvh6n> ${renderComponent($$result2, "Button", $$Button, { "href": "/en/book", "variant": "primary", "size": "lg", "data-astro-cid-4fqzvh6n": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Calendar", $$Calendar, { "size": 20, "data-astro-cid-4fqzvh6n": true })}
Book Free Strategy Call
` })} </div> </div> <!-- Key Findings --> <div class="findings-card" data-astro-cid-4fqzvh6n> <h3 data-astro-cid-4fqzvh6n>Key Findings</h3> <div id="findings-content" data-astro-cid-4fqzvh6n> <!-- Dynamically populated --> </div> </div> <!-- Recommendations --> <div class="recommendations-card" data-astro-cid-4fqzvh6n> <h3 data-astro-cid-4fqzvh6n>Your Personalized Roadmap</h3> <div id="recommendations-content" data-astro-cid-4fqzvh6n> <!-- Dynamically populated --> </div> </div> <!-- CTA Section --> <div class="results-cta" data-astro-cid-4fqzvh6n> <h3 data-astro-cid-4fqzvh6n>Ready to Transform Your Team's Communication?</h3> <p data-astro-cid-4fqzvh6n>
Book a free 30-minute strategy call to discuss your results and create 
          a custom plan for your team.
</p> <div class="cta-buttons" data-astro-cid-4fqzvh6n> ${renderComponent($$result2, "Button", $$Button, { "href": "/en/book", "variant": "primary", "size": "lg", "data-astro-cid-4fqzvh6n": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Calendar", $$Calendar, { "size": 20, "data-astro-cid-4fqzvh6n": true })}
Book Free Strategy Call
` })} ${renderComponent($$result2, "Button", $$Button, { "href": "/en/quiz/report", "variant": "secondary", "size": "lg", "class": "view-report-btn", "data-astro-cid-4fqzvh6n": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Download", $$Download, { "size": 20, "data-astro-cid-4fqzvh6n": true })}
See Full Report
` })} </div> </div> </div> </div> </section> ` })}  ${renderScript($$result, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/quiz/results.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/quiz/results.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/quiz/results.astro";
const $$url = "/en/quiz/results";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Results,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
