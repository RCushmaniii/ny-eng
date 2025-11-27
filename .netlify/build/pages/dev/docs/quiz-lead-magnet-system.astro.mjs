import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, u as unescapeHTML } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$MarkdownLayout } from '../../../chunks/MarkdownLayout_CiROzyT-.mjs';
import { marked } from 'marked';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$QuizLeadMagnetSystem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$QuizLeadMagnetSystem;
  const quizContent = await import('../../../chunks/QUIZ-LEAD-MAGNET-SYSTEM_Bmo_ZBmp.mjs');
  const markdownText = quizContent.default;
  const htmlContent = marked(markdownText);
  const frontmatter = {
    title: "Quiz Lead Magnet System",
    description: "Complete documentation for Communication Confidence Quiz lead magnet system",
    category: "Marketing",
    icon: "\u{1F3AF}"
  };
  return renderTemplate`${renderComponent($$result, "MarkdownLayout", $$MarkdownLayout, { "frontmatter": frontmatter }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(htmlContent)}` })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/dev/docs/quiz-lead-magnet-system.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/dev/docs/quiz-lead-magnet-system.astro";
const $$url = "/dev/docs/quiz-lead-magnet-system";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$QuizLeadMagnetSystem,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
