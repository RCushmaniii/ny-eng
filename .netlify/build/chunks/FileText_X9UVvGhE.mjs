import { c as createAstro, a as createComponent, r as renderComponent, m as maybeRenderHead, b as renderTemplate } from './astro/server_D3t1T5I4.mjs';
import { $ as $$ } from './.Layout_CLomzcre.mjs';

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$FileText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FileText;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "file-text", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path> <path d="M14 2v4a2 2 0 0 0 2 2h4"></path> <path d="M10 9H8"></path> <path d="M16 13H8"></path> <path d="M16 17H8"></path> ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/node_modules/lucide-astro/dist/FileText.astro", void 0);

export { $$FileText as $ };
