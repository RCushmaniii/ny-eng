import { c as createAstro, a as createComponent, m as maybeRenderHead, g as addAttribute, r as renderComponent, F as Fragment, b as renderTemplate, s as spreadAttributes } from './astro/server_D3t1T5I4.mjs';
import { a as $$Button } from './Base_D0GHnMc8.mjs';
import { $ as $$Image } from './_astro_assets_C60441bi.mjs';
/* empty css                         */
import { f as getEyebrowColor } from './styleUtils_BxmvIgKT.mjs';
import 'clsx';

const buildingsOverlay = new Proxy({"src":"/_astro/new-york-city-skyline-buildings.CTrZORb0.webp","width":1920,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/assets/images/home/new-york-city-skyline-buildings.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://www.nyenglishteacher.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const { content } = Astro2.props;
  const opacity = content.overlayOpacity ?? 1;
  const getImageType = (imageSrc) => {
    if (imageSrc.includes(".webp")) return "image/webp";
    if (imageSrc.includes(".jpg") || imageSrc.includes(".jpeg"))
      return "image/jpeg";
    if (imageSrc.includes(".png")) return "image/png";
    return "image/jpeg";
  };
  const backgroundImageType = content.backgroundImage?.src ? getImageType(content.backgroundImage.src) : "image/jpeg";
  const backgroundImageMobileType = content.backgroundImageMobile?.src ? getImageType(content.backgroundImageMobile.src) : backgroundImageType;
  return renderTemplate`<!-- Titan Core Theme Hero - using the recommended approach with min-height -->${maybeRenderHead()}<section${addAttribute([
    "header-offset relative w-full overflow-hidden",
    content.fullHeight ? "min-h-screen" : "min-h-[60vh]"
  ], "class:list")} data-astro-cid-anhloy43> ${content.backgroundImage && renderTemplate`<picture class="absolute inset-0 w-full h-full overflow-hidden" data-astro-cid-anhloy43> ${content.backgroundImageMobile && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate` <source${addAttribute(content.backgroundImageMobile.src, "srcset")} media="(max-width: 768px)"${addAttribute(backgroundImageMobileType, "type")} data-astro-cid-anhloy43> ` })}`} <source${addAttribute(content.backgroundImage.src, "srcset")} media="(min-width: 769px)"${addAttribute(backgroundImageType, "type")} data-astro-cid-anhloy43> <img${addAttribute(
    content.backgroundImageMobile?.src ?? content.backgroundImage.src,
    "src"
  )} alt="Background image"${addAttribute(content.backgroundImageMobile ? 800 : 1920, "width")}${addAttribute(content.backgroundImageMobile ? 1e3 : 1080, "height")} sizes="(max-width: 768px) 100vw, 100vw" loading="eager" decoding="async" fetchpriority="high" class="w-full h-full object-cover object-center" data-astro-cid-anhloy43> </picture>`} <div class="hero-background absolute inset-0 w-full h-full"${addAttribute(`opacity:${opacity};`, "style")} data-astro-cid-anhloy43></div> <!-- Parallax Buildings Overlay --> ${content.fullHeight && renderTemplate`<div id="hero-buildings-parallax" class="absolute inset-0 w-full h-full pointer-events-none" style="transform-origin: bottom center; will-change: transform;" data-astro-cid-anhloy43> ${renderComponent($$result, "Image", $$Image, { "src": buildingsOverlay, "alt": "", "class": "w-full h-full object-cover object-bottom", "loading": "eager", "style": "opacity: 1;", "data-astro-cid-anhloy43": true })} </div>`} <div${addAttribute([
    "site-container relative z-10 mx-auto px-4 flex flex-col items-center justify-center text-center",
    content.fullHeight ? "min-h-screen" : "py-large"
  ], "class:list")} data-astro-cid-anhloy43> <div class="max-w-4xl mx-auto" data-astro-cid-anhloy43> ${content.eyebrow && renderTemplate`<p class="text-sm sm:text-base font-bold uppercase tracking-wider mb-8 fade-in-up" style="color: #FFC107 !important; letter-spacing: 0.1em;" data-astro-cid-anhloy43> ${content.eyebrow} </p>`} <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance fade-in-up mb-8" style="color: #ffffff !important; line-height: 1.2;" data-astro-cid-anhloy43> ${content.title} </h1> <p class="text-lg sm:text-xl text-balance fade-in-up delay-1 max-w-3xl mx-auto mb-12" style="color: #ffffff !important; line-height: 1.6;" data-astro-cid-anhloy43> ${content.description} </p> ${content.buttons?.length && renderTemplate`<div class="flex flex-wrap justify-center gap-4 mb-12 fade-in-up delay-2" style="margin-top: 50px;" data-astro-cid-anhloy43> ${content.buttons.map((b) => renderTemplate`${renderComponent($$result, "Button", $$Button, { "href": b.link, "target": b.target ?? "_self", "variant": b.variant ?? "primary", "size": "lg", "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate`${b.text}` })}`)} </div>`} ${content.trustLine && renderTemplate`<a${addAttribute(content.trustLineLink || "#", "href")} class="text-base sm:text-lg font-semibold fade-in-up delay-3 inline-block transition-all duration-200 hover:opacity-80" style="color: #FFC107 !important; margin-top: 40px; text-decoration: none; border-bottom: 1px solid rgba(255, 193, 7, 0.3);" data-astro-cid-anhloy43> ${content.trustLine} </a>`} </div> </div> </section> `;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/components/sections/Hero.astro", void 0);

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$Eyebrow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Eyebrow;
  const {
    text,
    background = "base",
    className = "",
    dataAos = "fade-up",
    dataAosDelay
  } = Astro2.props;
  const eyebrowColor = getEyebrowColor(background);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    eyebrowColor,
    "font-medium mb-4 uppercase tracking-wider text-sm",
    className
  ], "class:list")}${addAttribute(dataAos, "data-aos")}${spreadAttributes(dataAosDelay && { "data-aos-delay": dataAosDelay })}> ${text} </div>`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/components/ui/Eyebrow.astro", void 0);

export { $$Hero as $, $$Eyebrow as a };
