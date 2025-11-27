import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base, a as $$Button } from '../../../chunks/Base_D0GHnMc8.mjs';
/* empty css                                       */
import { $ as $$Clock, a as $$Shield } from '../../../chunks/Shield_CDxUJDv5.mjs';
import { $ as $$CheckCircle } from '../../../chunks/CheckCircle_CZvtE61x.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Start = createComponent(($$result, $$props, $$slots) => {
  const title = "Comienza Tu Evaluaci\xF3n de Confianza al Hablar";
  const description = "\xA1Eval\xFAa tu confianza en ingl\xE9s de negocios en 2 minutos! Responde 10 preguntas r\xE1pidas para descubrir tus fortalezas y brechas de comunicaci\xF3n con clientes norteamericanos.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "lang": "es", "tkey": "quiz/start", "hideCta": true, "data-astro-cid-rxksddef": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="quiz-start pt-20 pb-16 md:pt-24 md:pb-20" data-astro-cid-rxksddef> <div class="container-narrow" data-astro-cid-rxksddef> <div class="start-content" data-astro-cid-rxksddef> <h1 data-astro-cid-rxksddef>Evaluemos Tu Confianza al Hablar</h1> <p class="intro-text" data-astro-cid-rxksddef>
Estás a punto de tomar una evaluación rápida que revelará exactamente dónde se encuentra 
        tu equipo en cuanto a comunicación en inglés de alto riesgo.
</p> <div class="what-to-expect" data-astro-cid-rxksddef> <h2 data-astro-cid-rxksddef>Qué Esperar</h2> <div class="expect-items" data-astro-cid-rxksddef> <div class="expect-item" data-astro-cid-rxksddef> <div class="expect-icon" data-astro-cid-rxksddef> ${renderComponent($$result2, "Clock", $$Clock, { "size": 24, "data-astro-cid-rxksddef": true })} </div> <div class="expect-content" data-astro-cid-rxksddef> <h3 data-astro-cid-rxksddef>3 Minutos</h3> <p data-astro-cid-rxksddef>10 preguntas rápidas sobre escenarios de negocios reales</p> </div> </div> <div class="expect-item" data-astro-cid-rxksddef> <div class="expect-icon" data-astro-cid-rxksddef> ${renderComponent($$result2, "CheckCircle", $$CheckCircle, { "size": 24, "data-astro-cid-rxksddef": true })} </div> <div class="expect-content" data-astro-cid-rxksddef> <h3 data-astro-cid-rxksddef>Resultados Instantáneos</h3> <p data-astro-cid-rxksddef>Tu Puntuación de Confianza en Comunicación (0-100) entregada inmediatamente</p> </div> </div> <div class="expect-item" data-astro-cid-rxksddef> <div class="expect-icon" data-astro-cid-rxksddef> ${renderComponent($$result2, "Shield", $$Shield, { "size": 24, "data-astro-cid-rxksddef": true })} </div> <div class="expect-content" data-astro-cid-rxksddef> <h3 data-astro-cid-rxksddef>100% Confidencial</h3> <p data-astro-cid-rxksddef>Tus respuestas son privadas y se usan solo para tu reporte personalizado</p> </div> </div> </div> </div> <div class="instructions" data-astro-cid-rxksddef> <h2 data-astro-cid-rxksddef>Instrucciones</h2> <ul data-astro-cid-rxksddef> <li data-astro-cid-rxksddef>Responde honestamente basándote en tu situación actual</li> <li data-astro-cid-rxksddef>Piensa en el desempeño típico de tu equipo, no en los mejores escenarios</li> <li data-astro-cid-rxksddef>No hay respuestas "incorrectas"—se trata de identificar oportunidades</li> <li data-astro-cid-rxksddef>No puedes retroceder, así que lee cada pregunta cuidadosamente</li> </ul> </div> <div class="cta-section" data-astro-cid-rxksddef> ${renderComponent($$result2, "Button", $$Button, { "href": "/es/quiz/question/1", "variant": "primary", "size": "lg", "class": "start-button", "data-astro-cid-rxksddef": true }, { "default": ($$result3) => renderTemplate`
Comenzar Evaluación →
` })} <p class="privacy-note" data-astro-cid-rxksddef>
Respetamos tu privacidad. Tu correo solo se usará para enviarte tus resultados.
</p> </div> </div> </div> </section> ` })}  ${renderScript($$result, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/quiz/start.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/quiz/start.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/quiz/start.astro";
const $$url = "/es/quiz/start";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Start,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
