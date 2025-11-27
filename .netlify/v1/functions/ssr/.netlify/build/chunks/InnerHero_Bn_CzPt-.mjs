import { c as createAstro, a as createComponent, m as maybeRenderHead, g as addAttribute, r as renderComponent, b as renderTemplate } from './astro/server_D3t1T5I4.mjs';
import { $ as $$Image } from './_astro_assets_C60441bi.mjs';

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$InnerHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InnerHero;
  const { content } = Astro2.props;
  const opacity = content.overlayOpacity ?? 1;
  return renderTemplate`${maybeRenderHead()}<section class="w-full border-b pt-32 pb-16 md:pt-32 md:pb-24 relative"> <div class="absolute inset-0 left-0 top-0 w-full h-full overflow-hidden"> ${content.backgroundImage && typeof content.backgroundImage === "object" && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": content.backgroundImage, "alt": "Background image", "width": 1920, "height": 1080, "class": "w-full h-full object-cover", "quality": 70, "format": "webp" })}`} <div class="hero-background absolute inset-0 left-0 top-0 w-full h-full overflow-hidden"${addAttribute(`opacity: ${opacity};`, "style")}></div> </div> <div class="site-container mx-auto px-4 relative z-10"> <div> <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style="font-family: 'Noto Sans KR', sans-serif; font-size: 2.25rem;" data-aos="fade-up">${content.title}</h1> ${content.description && renderTemplate`<p class="subtitle text-white text-xl md:text-2xl max-w-2xl" style="font-family: 'Noto Sans KR', sans-serif;" data-aos="fade-up" data-aos-delay="100">${content.description}</p>`} </div> </div> </section>`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/components/sections/InnerHero.astro", void 0);

export { $$InnerHero as $ };
