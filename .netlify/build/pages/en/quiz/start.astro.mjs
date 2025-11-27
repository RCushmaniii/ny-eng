import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base, a as $$Button } from '../../../chunks/Base_D0GHnMc8.mjs';
/* empty css                                       */
import { $ as $$Clock, a as $$Shield } from '../../../chunks/Shield_CDxUJDv5.mjs';
import { $ as $$CheckCircle } from '../../../chunks/CheckCircle_CZvtE61x.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Start = createComponent(($$result, $$props, $$slots) => {
  const title = "Start Your Speaking Confidence Assessment";
  const description = "Test your Business English confidence in 2 minutes! Answer 10 quick questions to discover your communication strengths and gaps with North American clients.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "lang": "en", "tkey": "quiz/start", "hideCta": true, "data-astro-cid-4g65abfn": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="quiz-start pt-20 pb-16 md:pt-24 md:pb-20" data-astro-cid-4g65abfn> <div class="container-narrow" data-astro-cid-4g65abfn> <div class="start-content" data-astro-cid-4g65abfn> <h1 data-astro-cid-4g65abfn>Let's Assess Your Speaking Confidence</h1> <p class="intro-text" data-astro-cid-4g65abfn>
You're about to take a quick assessment that will reveal exactly where your team 
        stands when it comes to high-stakes English communication.
</p> <div class="what-to-expect" data-astro-cid-4g65abfn> <h2 data-astro-cid-4g65abfn>What to Expect</h2> <div class="expect-items" data-astro-cid-4g65abfn> <div class="expect-item" data-astro-cid-4g65abfn> <div class="expect-icon" data-astro-cid-4g65abfn> ${renderComponent($$result2, "Clock", $$Clock, { "size": 24, "data-astro-cid-4g65abfn": true })} </div> <div class="expect-content" data-astro-cid-4g65abfn> <h3 data-astro-cid-4g65abfn>3 Minutes</h3> <p data-astro-cid-4g65abfn>10 quick questions about real business scenarios</p> </div> </div> <div class="expect-item" data-astro-cid-4g65abfn> <div class="expect-icon" data-astro-cid-4g65abfn> ${renderComponent($$result2, "CheckCircle", $$CheckCircle, { "size": 24, "data-astro-cid-4g65abfn": true })} </div> <div class="expect-content" data-astro-cid-4g65abfn> <h3 data-astro-cid-4g65abfn>Instant Results</h3> <p data-astro-cid-4g65abfn>Your Communication Confidence Score (0-100) delivered immediately</p> </div> </div> <div class="expect-item" data-astro-cid-4g65abfn> <div class="expect-icon" data-astro-cid-4g65abfn> ${renderComponent($$result2, "Shield", $$Shield, { "size": 24, "data-astro-cid-4g65abfn": true })} </div> <div class="expect-content" data-astro-cid-4g65abfn> <h3 data-astro-cid-4g65abfn>100% Confidential</h3> <p data-astro-cid-4g65abfn>Your responses are private and used only for your personalized report</p> </div> </div> </div> </div> <div class="instructions" data-astro-cid-4g65abfn> <h2 data-astro-cid-4g65abfn>Instructions</h2> <ul data-astro-cid-4g65abfn> <li data-astro-cid-4g65abfn>Answer honestly based on your current situation</li> <li data-astro-cid-4g65abfn>Think about your team's typical performance, not best-case scenarios</li> <li data-astro-cid-4g65abfn>There are no "wrong" answers—this is about identifying opportunities</li> <li data-astro-cid-4g65abfn>You can't go back, so read each question carefully</li> </ul> </div> <div class="cta-section" data-astro-cid-4g65abfn> ${renderComponent($$result2, "Button", $$Button, { "href": "/en/quiz/question/1", "variant": "primary", "size": "lg", "class": "start-button", "data-astro-cid-4g65abfn": true }, { "default": ($$result3) => renderTemplate`
Start Assessment →
` })} <p class="privacy-note" data-astro-cid-4g65abfn>
We respect your privacy. Your email will only be used to send your results.
</p> </div> </div> </div> </section> ` })}  ${renderScript($$result, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/quiz/start.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/quiz/start.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/quiz/start.astro";
const $$url = "/en/quiz/start";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Start,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
