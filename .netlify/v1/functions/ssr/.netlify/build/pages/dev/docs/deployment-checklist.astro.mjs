import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, u as unescapeHTML } from '../../../chunks/astro/server_CMgxdnwz.mjs';
import { $ as $$MarkdownLayout } from '../../../chunks/MarkdownLayout_BHKIIE_j.mjs';
import { marked } from 'marked';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$DeploymentChecklist = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DeploymentChecklist;
  const deploymentContent = await import('../../../chunks/DEPLOYMENT-CHECKLIST_C9EwuDQ0.mjs');
  const markdownText = deploymentContent.default;
  const htmlContent = marked(markdownText);
  const frontmatter = {
    title: "Deployment Checklist",
    description: "Complete pre-deployment verification checklist including SEO, performance, and functionality tests",
    category: "Operations",
    icon: "\u{1F680}"
  };
  return renderTemplate`${renderComponent($$result, "MarkdownLayout", $$MarkdownLayout, { "frontmatter": frontmatter }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(htmlContent)}` })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/dev/docs/deployment-checklist.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/dev/docs/deployment-checklist.astro";
const $$url = "/dev/docs/deployment-checklist";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DeploymentChecklist,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
