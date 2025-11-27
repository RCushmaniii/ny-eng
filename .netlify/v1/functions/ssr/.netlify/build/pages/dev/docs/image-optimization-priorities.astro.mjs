import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, u as unescapeHTML } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$MarkdownLayout } from '../../../chunks/MarkdownLayout_CiROzyT-.mjs';
import { marked } from 'marked';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$ImageOptimizationPriorities = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImageOptimizationPriorities;
  const imageContent = await import('../../../chunks/IMAGE-OPTIMIZATION-PRIORITY_vLX0wXMJ.mjs');
  const markdownText = imageContent.default;
  const htmlContent = marked(markdownText);
  const frontmatter = {
    title: "Image Optimization Priorities",
    description: "Image optimization strategies and implementation priorities for performance",
    category: "Performance",
    icon: "\u{1F5BC}\uFE0F"
  };
  return renderTemplate`${renderComponent($$result, "MarkdownLayout", $$MarkdownLayout, { "frontmatter": frontmatter }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(htmlContent)}` })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/dev/docs/image-optimization-priorities.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/dev/docs/image-optimization-priorities.astro";
const $$url = "/dev/docs/image-optimization-priorities";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ImageOptimizationPriorities,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
