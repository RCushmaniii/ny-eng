import { a as createComponent, c as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './astro/server_D3t1T5I4.mjs';
import { $ as $$ } from './.Layout_CLomzcre.mjs';

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$Target = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Target;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "target", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <circle cx="12" cy="12" r="6"></circle> <circle cx="12" cy="12" r="2"></circle> ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/node_modules/lucide-astro/dist/Target.astro", void 0);

export { $$Target as $ };
