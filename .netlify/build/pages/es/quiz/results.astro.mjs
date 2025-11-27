import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base, a as $$Button } from '../../../chunks/Base_D0GHnMc8.mjs';
/* empty css                                         */
import { $ as $$Mail } from '../../../chunks/Mail_R1UqRzRH.mjs';
import { $ as $$Calendar } from '../../../chunks/Calendar_1OPHr6-b.mjs';
import { $ as $$Download } from '../../../chunks/Download_B4YE5U2T.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Results = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Tus Resultados de Confianza al Hablar | NY English";
  const description = "Obt\xE9n tu Puntuaci\xF3n de Confianza en Comunicaci\xF3n personalizada (0-100) y tu hoja de ruta de mejora. Descubre exactamente d\xF3nde se encuentra tu equipo con la comunicaci\xF3n en ingl\xE9s de alto riesgo.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "lang": "es", "tkey": "quiz/results", "hideCta": true, "hideLanguageSwitcher": true, "data-astro-cid-vspqjtxv": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="quiz-results pt-28 pb-16 md:pt-32 md:pb-20" data-astro-cid-vspqjtxv> <div class="container-narrow" data-astro-cid-vspqjtxv> <!-- No Quiz Data Warning (shown if user hasn't taken quiz) --> <div class="no-quiz-warning" id="no-quiz-warning" style="display: none;" data-astro-cid-vspqjtxv> <div class="warning-content" data-astro-cid-vspqjtxv> <div class="warning-icon" data-astro-cid-vspqjtxv>⚠️</div> <h1 data-astro-cid-vspqjtxv>Quiz No Completado</h1> <p class="warning-text" data-astro-cid-vspqjtxv>
Necesitas completar la Evaluación de Confianza en Comunicación antes de ver tus resultados.
</p> <p class="warning-subtext" data-astro-cid-vspqjtxv>
El quiz toma aproximadamente 3-5 minutos y te dará una puntuación personalizada que muestra exactamente dónde se encuentra tu equipo con la comunicación en inglés de alto riesgo.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "/es/quiz/start", "variant": "primary", "size": "lg", "class": "start-quiz-button", "data-astro-cid-vspqjtxv": true }, { "default": async ($$result3) => renderTemplate`
Comenzar el Quiz →
` })} </div> </div> <!-- Lead Capture Form (shown first) --> <div class="lead-capture-card" id="lead-capture" data-astro-cid-vspqjtxv> <div class="capture-header" data-astro-cid-vspqjtxv> <h1 data-astro-cid-vspqjtxv>¡Ya Casi Estás!</h1> <p class="capture-subtext" data-astro-cid-vspqjtxv>
Ingresa tu correo para recibir tu Puntuación de Confianza en Comunicación 
          personalizada y hoja de ruta de mejora detallada.
</p> </div> <form class="capture-form" id="email-form" data-astro-cid-vspqjtxv> <div class="form-group" data-astro-cid-vspqjtxv> <label for="name" class="form-label" data-astro-cid-vspqjtxv>Tu Nombre</label> <input type="text" id="name" name="name" class="form-input" placeholder="Juan Pérez" required data-astro-cid-vspqjtxv> </div> <div class="form-group" data-astro-cid-vspqjtxv> <label for="email" class="form-label" data-astro-cid-vspqjtxv>Correo Electrónico</label> <input type="email" id="email" name="email" class="form-input" placeholder="juan@empresa.com" required data-astro-cid-vspqjtxv> </div> <div class="form-group" data-astro-cid-vspqjtxv> <label for="company" class="form-label" data-astro-cid-vspqjtxv>Empresa (Opcional)</label> <input type="text" id="company" name="company" class="form-input" placeholder="Nombre de Tu Empresa" data-astro-cid-vspqjtxv> </div> <div class="form-group" data-astro-cid-vspqjtxv> <label for="phone" class="form-label" data-astro-cid-vspqjtxv>Número de Teléfono (Opcional)</label> <input type="tel" id="phone" name="phone" class="form-input" placeholder="+52 (555) 123-4567" data-astro-cid-vspqjtxv> </div> ${renderComponent($$result2, "Button", $$Button, { "type": "submit", "variant": "primary", "size": "lg", "class": "submit-button", "data-astro-cid-vspqjtxv": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Mail", $$Mail, { "size": 20, "data-astro-cid-vspqjtxv": true })}
Obtener Mis Resultados →
` })} <p class="privacy-text" data-astro-cid-vspqjtxv>
Al enviar este formulario, aceptas nuestra <a href="/es/legal/privacy-policy" target="_blank" class="privacy-link" data-astro-cid-vspqjtxv>Política de Privacidad</a>. 
          Respetamos tu privacidad y nunca venderemos tu información.
</p> </form> </div> <!-- Results Display (shown after email submission) --> <div class="results-display" id="results-display" style="display: none;" data-astro-cid-vspqjtxv> <!-- Score Card --> <div class="score-card" data-astro-cid-vspqjtxv> <div class="score-header" data-astro-cid-vspqjtxv> <h2 data-astro-cid-vspqjtxv>Tu Puntuación de Confianza en Comunicación</h2> <p class="score-subtitle" data-astro-cid-vspqjtxv>Basado en tus respuestas</p> </div> <div class="score-circle" data-astro-cid-vspqjtxv> <div class="score-number" id="final-score" data-astro-cid-vspqjtxv>0</div> <div class="score-max" data-astro-cid-vspqjtxv>/ 100</div> </div> <div class="score-label" id="score-label" data-astro-cid-vspqjtxv>Calculando...</div> <div class="score-description" id="score-description" data-astro-cid-vspqjtxv> <!-- Dynamically populated based on score --> </div> <div class="score-cta" data-astro-cid-vspqjtxv> ${renderComponent($$result2, "Button", $$Button, { "href": "/es/book", "variant": "primary", "size": "lg", "data-astro-cid-vspqjtxv": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Calendar", $$Calendar, { "size": 20, "data-astro-cid-vspqjtxv": true })}
Agendar Llamada Estratégica Gratuita
` })} </div> </div> <!-- Key Findings --> <div class="findings-card" data-astro-cid-vspqjtxv> <h3 data-astro-cid-vspqjtxv>Hallazgos Clave</h3> <div id="findings-content" data-astro-cid-vspqjtxv> <!-- Dynamically populated --> </div> </div> <!-- Recommendations --> <div class="recommendations-card" data-astro-cid-vspqjtxv> <h3 data-astro-cid-vspqjtxv>Tu Hoja de Ruta Personalizada</h3> <div id="recommendations-content" data-astro-cid-vspqjtxv> <!-- Dynamically populated --> </div> </div> <!-- CTA Section --> <div class="results-cta" data-astro-cid-vspqjtxv> <h3 data-astro-cid-vspqjtxv>¿Listo Para Transformar la Comunicación de Tu Equipo?</h3> <p data-astro-cid-vspqjtxv>
Agenda una llamada estratégica gratuita de 30 minutos para discutir tus resultados 
          y crear un plan personalizado para tu equipo.
</p> <div class="cta-buttons" data-astro-cid-vspqjtxv> ${renderComponent($$result2, "Button", $$Button, { "href": "/es/book", "variant": "primary", "size": "lg", "data-astro-cid-vspqjtxv": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Calendar", $$Calendar, { "size": 20, "data-astro-cid-vspqjtxv": true })}
Agendar Llamada Estratégica Gratuita
` })} ${renderComponent($$result2, "Button", $$Button, { "href": "/es/quiz/report", "variant": "secondary", "size": "lg", "class": "view-report-btn", "data-astro-cid-vspqjtxv": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Download", $$Download, { "size": 20, "data-astro-cid-vspqjtxv": true })}
Ver Reporte Completo
` })} </div> </div> </div> </div> </section> ` })}  ${renderScript($$result, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/quiz/results.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/quiz/results.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/quiz/results.astro";
const $$url = "/es/quiz/results";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Results,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
