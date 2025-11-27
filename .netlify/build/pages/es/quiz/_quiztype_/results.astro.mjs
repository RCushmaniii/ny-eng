import { c as createAstro, a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base, a as $$Button } from '../../../../chunks/Base_D0GHnMc8.mjs';
import { i as isQuizTypeAvailable, g as getQuizConfig } from '../../../../chunks/index_C9q68HMh.mjs';
/* empty css                                            */
import { $ as $$Mail } from '../../../../chunks/Mail_R1UqRzRH.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$Results = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Results;
  const { quizType } = Astro2.params;
  if (!quizType || !isQuizTypeAvailable(quizType)) {
    return Astro2.redirect("/es/404");
  }
  const config = getQuizConfig(quizType, "es");
  const title = `Tus Resultados | ${config.title}`;
  const description = "Obt\xE9n tu Puntuaci\xF3n de Confianza en Comunicaci\xF3n personalizada (0-100) y tu hoja de ruta de mejora. Descubre exactamente d\xF3nde se encuentra tu equipo con la comunicaci\xF3n en ingl\xE9s de alto impacto.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "lang": "es", "tkey": "quiz/results", "hideCta": true, "hideLanguageSwitcher": true, "data-astro-cid-n4iqnyhz": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="quiz-results pt-28 pb-16 md:pt-32 md:pb-20" data-astro-cid-n4iqnyhz> <div class="container-narrow" data-astro-cid-n4iqnyhz> <!-- No Quiz Data Warning (shown if user hasn't taken quiz) --> <div class="no-quiz-warning" id="no-quiz-warning" style="display: none;" data-astro-cid-n4iqnyhz> <div class="warning-content" data-astro-cid-n4iqnyhz> <div class="warning-icon" data-astro-cid-n4iqnyhz>⚠️</div> <h1 data-astro-cid-n4iqnyhz>Prueba No Completada</h1> <p class="warning-text" data-astro-cid-n4iqnyhz>
Necesitas completar la Evaluación de Confianza en Comunicación antes
            de ver tus resultados.
</p> <p class="warning-subtext" data-astro-cid-n4iqnyhz>
La prueba toma alrededor de 90 segundos y te dará una puntuación
            personalizada que muestra exactamente dónde se encuentra tu equipo
            con la comunicación en inglés de alto impacto.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": `/es/quiz/${quizType}/question/1`, "variant": "primary", "size": "lg", "class": "start-quiz-button", "data-astro-cid-n4iqnyhz": true }, { "default": async ($$result3) => renderTemplate`
Comenzar la Prueba →
` })} </div> </div> <!-- Submission Error Message (shown if submission fails) --> <div class="submission-error" id="submission-error" style="display: none;" data-astro-cid-n4iqnyhz> <div class="error-content" data-astro-cid-n4iqnyhz> <div class="error-icon" data-astro-cid-n4iqnyhz>❌</div> <h1 data-astro-cid-n4iqnyhz>Error de Envío</h1> <p class="error-text" id="error-message" data-astro-cid-n4iqnyhz>
Hubo un error al enviar tu prueba. Por favor, inténtalo de nuevo.
</p> <p class="error-subtext" data-astro-cid-n4iqnyhz>
Si el problema persiste, contáctanos directamente o inténtalo más
            tarde.
</p> <button onclick="location.reload()" class="retry-button px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-lg" data-astro-cid-n4iqnyhz>
Intentar de Nuevo
</button> </div> </div> <!-- Lead Capture Form (shown first) --> <div class="lead-capture-card" id="lead-capture" data-astro-cid-n4iqnyhz> <div class="capture-header" data-astro-cid-n4iqnyhz> <h1 data-astro-cid-n4iqnyhz>¡Ya Casi Terminas!</h1> <p class="capture-subtext" data-astro-cid-n4iqnyhz>
Ingresa tu correo electrónico para recibir tu Puntuación de
            Confianza en Comunicación personalizada y tu hoja de ruta detallada
            de mejora.
</p> </div> <form class="capture-form" id="email-form" data-astro-cid-n4iqnyhz> <input type="hidden" name="quizType"${addAttribute(quizType, "value")} data-astro-cid-n4iqnyhz> <div class="form-group" data-astro-cid-n4iqnyhz> <label for="name" class="form-label" data-astro-cid-n4iqnyhz>Tu Nombre</label> <input type="text" id="name" name="name" class="form-input" placeholder="Juan Pérez" required data-astro-cid-n4iqnyhz> </div> <div class="form-group" data-astro-cid-n4iqnyhz> <label for="email" class="form-label" data-astro-cid-n4iqnyhz>Correo Electrónico</label> <input type="email" id="email" name="email" class="form-input" placeholder="juan@empresa.com" required data-astro-cid-n4iqnyhz> </div> <div class="form-group" data-astro-cid-n4iqnyhz> <label for="company" class="form-label" data-astro-cid-n4iqnyhz>Empresa (Opcional)</label> <input type="text" id="company" name="company" class="form-input" placeholder="Nombre de tu Empresa" data-astro-cid-n4iqnyhz> </div> <div class="form-group" data-astro-cid-n4iqnyhz> <label for="phone" class="form-label" data-astro-cid-n4iqnyhz>Número de Teléfono (Opcional)</label> <input type="tel" id="phone" name="phone" class="form-input" placeholder="+52 (555) 123-4567" data-astro-cid-n4iqnyhz> </div> ${renderComponent($$result2, "Button", $$Button, { "type": "submit", "variant": "primary", "size": "lg", "class": "submit-button", "data-astro-cid-n4iqnyhz": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Mail", $$Mail, { "size": 20, "data-astro-cid-n4iqnyhz": true })}
Obtener Mis Resultados →
` })} <p class="privacy-text" data-astro-cid-n4iqnyhz>
Al enviar este formulario, aceptas nuestra <a href="/es/legal/privacy-policy" target="_blank" class="privacy-link" data-astro-cid-n4iqnyhz>Política de Privacidad</a>. Respetamos tu privacidad y nunca venderemos tu información.
</p> </form> </div> </div> </section> ` })}  ${renderScript($$result, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/quiz/[quizType]/results.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/quiz/[quizType]/results.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/quiz/[quizType]/results.astro";
const $$url = "/es/quiz/[quizType]/results";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Results,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
