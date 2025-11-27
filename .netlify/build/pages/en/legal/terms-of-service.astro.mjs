import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { getCollection } from '../../../chunks/_astro_content_DFErB4bn.mjs';
export { renderers } from '../../../renderers.mjs';

const $$TermsOfService = createComponent(async ($$result, $$props, $$slots) => {
  const tkey = "legal/terms-of-service";
  const legalData = await getCollection("legal");
  const entry = legalData.find((item) => item.slug === "en/terms-of-service");
  if (!entry) {
    throw new Error("Terms of service content not found");
  }
  const { Content } = await entry.render();
  const heroContent = {
    title: entry.data.title,
    description: entry.data.seo?.description || "",
    overlayOpacity: 0.8
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "lang": "en", "tkey": tkey, "title": entry.data.seo?.title || entry.data.title, "description": entry.data.seo?.description || "" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${maybeRenderHead()}<article class="site-container--small mx-auto px-8 prose pb-base pt-16"> ${renderComponent($$result2, "Content", Content, {})} </article> ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/legal/terms-of-service.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/legal/terms-of-service.astro";
const $$url = "/en/legal/terms-of-service";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TermsOfService,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
