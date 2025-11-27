import { c as createAstro, a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead, F as Fragment, g as addAttribute } from '../../../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base, a as $$Button } from '../../../../../chunks/Base_D0GHnMc8.mjs';
import { i as isQuizTypeAvailable, g as getQuizConfig } from '../../../../../chunks/index_C9q68HMh.mjs';
/* empty css                                            */
export { renderers } from '../../../../../renderers.mjs';

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { quizType, id } = Astro2.params;
  if (!quizType || !isQuizTypeAvailable(quizType)) {
    return Astro2.redirect("/en/404");
  }
  const config = getQuizConfig(quizType, "en");
  const currentQuestion = parseInt(id || "1");
  const validQuestion = config.questions.find((q) => q.id === currentQuestion);
  const hasValidQuestion = !!validQuestion;
  const totalQuestions = config.questions.length;
  const progress = currentQuestion / totalQuestions * 100;
  const title = hasValidQuestion ? `Question ${currentQuestion} of ${totalQuestions} | ${config.title}` : `Quiz Error | ${config.title}`;
  const description = config.subtitle;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "lang": "en", "customCanonical": `https://www.nyenglishteacher.com/en/quiz/${quizType}/`, "customHreflangs": [
    { lang: "en-US", href: `https://www.nyenglishteacher.com/en/quiz/${quizType}/question/${id}/` },
    { lang: "es-MX", href: `https://www.nyenglishteacher.com/es/quiz/${quizType}/question/${id}/` }
  ], "hideCta": true, "hideNav": true, "hideLanguageSwitcher": true, "data-astro-cid-a2uemlng": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="quiz-question pt-28 pb-16 md:pt-32 md:pb-20" data-astro-cid-a2uemlng> <div class="container-narrow" data-astro-cid-a2uemlng> ${!hasValidQuestion ? renderTemplate`<!-- No Quiz Data Warning -->
      <div class="no-quiz-warning" data-astro-cid-a2uemlng> <div class="warning-content" data-astro-cid-a2uemlng> <div class="warning-icon" data-astro-cid-a2uemlng>⚠️</div> <h1 data-astro-cid-a2uemlng>Please Start from the Beginning</h1> <p class="warning-text" data-astro-cid-a2uemlng>
To get accurate results, you need to start the quiz from the beginning and answer all questions in order.
</p> <p class="warning-subtext" data-astro-cid-a2uemlng>
The Communication Confidence Assessment takes about 90 seconds and will give you a personalized score.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": `/en/quiz/${quizType}/question/1`, "variant": "primary", "size": "lg", "class": "start-quiz-button", "data-astro-cid-a2uemlng": true }, { "default": ($$result3) => renderTemplate`
Start the Quiz →
` })} </div> </div>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-a2uemlng": true }, { "default": ($$result3) => renderTemplate`  <div class="progress-container" data-astro-cid-a2uemlng> <div class="progress-bar" data-astro-cid-a2uemlng> <div class="progress-fill"${addAttribute(`width: ${progress}%`, "style")} data-astro-cid-a2uemlng></div> </div> <div class="progress-text" data-astro-cid-a2uemlng>
Question ${currentQuestion} of ${totalQuestions} </div> </div>  <div class="question-card" data-astro-cid-a2uemlng> <h1 class="question-text" data-astro-cid-a2uemlng>${validQuestion.question}</h1> <div class="options-container" id="quiz-options"${addAttribute(validQuestion.id, "data-question-id")}${addAttribute(quizType, "data-quiz-type")} data-astro-cid-a2uemlng> ${validQuestion.answers.map((answer) => renderTemplate`<button type="button" class="option-button"${addAttribute(answer.index, "data-answer-index")} data-astro-cid-a2uemlng> <span class="option-letter" data-astro-cid-a2uemlng>${String.fromCharCode(65 + answer.index)}</span> <span class="option-text" data-astro-cid-a2uemlng>${answer.label}</span> </button>`)} </div> </div> ` })}`} </div> </section> ` })}  ${renderScript($$result, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/quiz/[quizType]/question/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/quiz/[quizType]/question/[id].astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/quiz/[quizType]/question/[id].astro";
const $$url = "/en/quiz/[quizType]/question/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
