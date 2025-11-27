import { a as createComponent, c as createAstro, r as renderComponent, m as maybeRenderHead, b as renderTemplate } from './astro/server_D3t1T5I4.mjs';
import { $ as $$ } from './.Layout_CLomzcre.mjs';

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$TrendingUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TrendingUp;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "trending-up", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline> <polyline points="16 7 22 7 22 13"></polyline> ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/node_modules/lucide-astro/dist/TrendingUp.astro", void 0);

export { $$TrendingUp as $ };
