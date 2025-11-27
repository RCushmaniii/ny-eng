import { a as createComponent, c as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, g as addAttribute, F as Fragment, x as defineScriptVars } from './astro/server_D3t1T5I4.mjs';
import { a as $$Button } from './Base_D0GHnMc8.mjs';
import 'clsx';
import { g as getHeadlineColor, a as getInputBackgroundColor, b as getInputTextColor, c as getBackgroundColor, d as getPaddingClass, e as getTextColor } from './styleUtils_BxmvIgKT.mjs';
import { $ as $$ } from './.Layout_CLomzcre.mjs';
import { $ as $$Mail } from './Mail_R1UqRzRH.mjs';

const $$Astro$5 = createAstro("https://www.nyenglishteacher.com");
const $$MapPin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MapPin;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "map-pin", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path> <circle cx="12" cy="10" r="3"></circle> ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/node_modules/lucide-astro/dist/MapPin.astro", void 0);

const $$Astro$4 = createAstro("https://www.nyenglishteacher.com");
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Input;
  const {
    label,
    type = "text",
    id,
    name,
    placeholder = "",
    required = false,
    disabled = false,
    background = "base",
    class: className = "",
    minlength
  } = Astro2.props;
  const labelClass = getHeadlineColor(background);
  const inputBgClass = getInputBackgroundColor(background);
  const inputTextClass = getInputTextColor(background);
  return renderTemplate`${maybeRenderHead()}<div class="form-group"> <label${addAttribute(id, "for")}${addAttribute(`block text-sm font-medium mb-1 ${labelClass}`, "class")} style="font-family: 'Noto Sans KR', sans-serif;"> ${label} ${required && renderTemplate`<span class="text-red-500">*</span>`} </label> <input${addAttribute(type, "type")}${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}${addAttribute(disabled, "disabled")}${addAttribute(minlength, "minlength")} style="font-family: 'Noto Sans KR', sans-serif;"${addAttribute(`
            w-full px-4 py-2 
            ${inputBgClass}
            ${inputTextClass}
            border border-primary/20
            rounded-lg 
            focus:ring-2 focus:ring-primary focus:border-primary 
            disabled:bg-background-dark/10 disabled:text-body-base/50 disabled:cursor-not-allowed 
            placeholder:text-body-base/50
            ${className}
        `, "class")}> </div>`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/components/ui/form/Input.astro", void 0);

const $$Astro$3 = createAstro("https://www.nyenglishteacher.com");
const $$Textarea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Textarea;
  const {
    label,
    id,
    name,
    rows = 4,
    placeholder = "",
    required = false,
    background = "base",
    class: className = "",
    minlength
  } = Astro2.props;
  const labelClass = getHeadlineColor(background);
  const inputBgClass = getInputBackgroundColor(background);
  const inputTextClass = getInputTextColor(background);
  return renderTemplate`${maybeRenderHead()}<div class="form-group"> <label${addAttribute(id, "for")}${addAttribute(`block text-sm font-medium mb-1 ${labelClass}`, "class")} style="font-family: 'Noto Sans KR', sans-serif;"> ${label} ${required && renderTemplate`<span class="text-red-500">*</span>`} </label> <textarea${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(rows, "rows")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}${addAttribute(minlength, "minlength")} style="font-family: 'Noto Sans KR', sans-serif;"${addAttribute(`
            w-full px-4 py-2 
            ${inputBgClass}
            ${inputTextClass}
            border border-primary/20
            rounded-lg 
            focus:ring-2 focus:ring-primary focus:border-primary 
            placeholder:text-body-base/50
            ${className}
        `, "class")}></textarea> </div>`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/components/ui/form/Textarea.astro", void 0);

const $$Astro$2 = createAstro("https://www.nyenglishteacher.com");
const $$Checkbox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Checkbox;
  const {
    label,
    id,
    name,
    options,
    required = false,
    background = "base",
    class: className = ""
  } = Astro2.props;
  const labelClass = getHeadlineColor(background);
  const inputTextClass = getInputTextColor(background);
  return renderTemplate`${maybeRenderHead()}<div class="form-group"> ${options ? (
    // Multiple checkboxes
    renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <label${addAttribute(`block text-sm font-medium mb-2 ${labelClass}`, "class")} style="font-family: 'Noto Sans KR', sans-serif;"> ${label} ${required && renderTemplate`<span class="text-red-500">*</span>`} </label> <div class="space-y-2"> ${options.map((option, index) => renderTemplate`<div class="flex items-center space-x-2"> <input type="checkbox"${addAttribute(`${id}-${index}`, "id")}${addAttribute(name, "name")}${addAttribute(option.value, "value")}${addAttribute(required, "required")}${addAttribute(`
                                h-4 w-4 
                                rounded 
                                border-primary/20
                                text-primary 
                                focus:ring-primary 
                                ${className}
                            `, "class")}> <label${addAttribute(`${id}-${index}`, "for")}${addAttribute(`text-sm font-medium ${inputTextClass}`, "class")} style="font-family: 'Noto Sans KR', sans-serif;"> ${option.label} </label> </div>`)} </div> ` })}`
  ) : (
    // Single checkbox
    renderTemplate`<div class="flex items-center space-x-2"> <input type="checkbox"${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(required, "required")}${addAttribute(`
                    h-4 w-4 
                    rounded 
                    border-primary/20
                    text-primary 
                    focus:ring-primary 
                    ${className}
                `, "class")}> <label${addAttribute(id, "for")}${addAttribute(`text-sm font-medium ${inputTextClass}`, "class")} style="font-family: 'Noto Sans KR', sans-serif;"> ${label} ${required && renderTemplate`<span class="text-red-500">*</span>`} </label> </div>`
  )} </div>`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/components/ui/form/Checkbox.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.nyenglishteacher.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contact;
  const { lang = "en" } = Astro2.props;
  const formBackground = "light";
  const localizedContent = {
    en: {
      labels: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        terms: "I agree to the Terms of Use and Privacy Policy"
      },
      placeholders: {
        phone: "Optional, include country code for WhatsApp",
        message: "Tell me about your communication goals and needs"
      },
      submitButton: "Submit",
      jsMessages: {
        validationName: "Please enter a valid name (minimum 2 characters)",
        validationEmail: "Please enter a valid email address",
        validationMessage: "Please enter a message (minimum 10 characters)",
        validationTerms: "Please agree to the terms of use and privacy policy",
        submittingButton: "Submitting...",
        sendingMessage: "Sending your message...",
        success: "Form sent successfully! Redirecting...",
        serverErrorFallback: "Please try again.",
        networkError: "Submission failed due to a network error. Please check connection."
        // resetButtonOnError is the same as submitButton, will use initialSubmitText
      }
    },
    es: {
      labels: {
        name: "Nombre",
        email: "Correo electr\xF3nico",
        phone: "Tel\xE9fono",
        message: "Mensaje",
        terms: "Acepto los T\xE9rminos de Uso y la Pol\xEDtica de Privacidad"
      },
      placeholders: {
        phone: "Opcional, incluye c\xF3digo de pa\xEDs para WhatsApp",
        message: "Cu\xE9ntame sobre tus objetivos y necesidades de comunicaci\xF3n"
      },
      submitButton: "Enviar",
      jsMessages: {
        validationName: "Ingresa un nombre v\xE1lido (m\xEDnimo 2 caracteres)",
        validationEmail: "Ingresa una direcci\xF3n de correo v\xE1lida",
        validationMessage: "Ingresa un mensaje (m\xEDnimo 10 caracteres)",
        validationTerms: "Acepta los t\xE9rminos de uso y la pol\xEDtica de privacidad",
        submittingButton: "Enviando...",
        sendingMessage: "Enviando tu mensaje...",
        success: "\xA1Formulario enviado con \xE9xito! Redirigiendo...",
        serverErrorFallback: "Por favor, int\xE9ntalo de nuevo.",
        networkError: "Error de red al enviar. Verifica tu conexi\xF3n."
        // resetButtonOnError is the same as submitButton, will use initialSubmitText
      }
    }
  };
  const C = localizedContent[lang] || localizedContent.en;
  const thankYouRedirect = lang === "es" ? "/es/thank-you" : "/en/thank-you";
  const jsStrings = C.jsMessages;
  const initialSubmitText = C.submitButton;
  return renderTemplate(_a || (_a = __template(["", `<form id="contact-form" action="https://formspree.io/f/xldjandr" method="POST" class="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-md" style="font-family: 'Noto Sans KR', sans-serif;" novalidate> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> `, " ", " </div> ", " ", ' <!-- Honeypot field for spam prevention --> <input type="text" name="_gotcha" style="display: none"> <!-- Fallback redirect if JS fails --> <input type="hidden" name="_next"', '> <!-- Email subject line based on language --> <input type="hidden" name="_subject"', `> <!-- Force redirect to our thank you page and disable Formspree's default thank you page --> <input type="hidden" name="_redirect"`, '> <input type="hidden" name="_template" value="table"> ', ' <div class="mt-8"> ', ' </div> <div id="form-status" class="mt-4 text-center"></div> </form> <script>(function(){', `
    const form = document.getElementById("contact-form");
    const statusDiv = document.getElementById("form-status");

    if (form instanceof HTMLFormElement && statusDiv) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault(); 

            const name = form.querySelector("#name");
            const email = form.querySelector("#email");
            const message = form.querySelector("#message");
            const terms = form.querySelector("#terms");
            const submitButton = form.querySelector("button[type='submit']");

            statusDiv.textContent = "";
            statusDiv.className = "mt-4 text-center";

            // Type guard for form elements
            if (!(name instanceof HTMLInputElement)) return;
            if (!(email instanceof HTMLInputElement)) return;
            if (!(message instanceof HTMLTextAreaElement)) return;
            if (!(terms instanceof HTMLInputElement)) return;
            
            if (!name.value || name.value.length < 2) {
                statusDiv.textContent = jsStrings.validationName;
                statusDiv.classList.add("text-red-600");
                name.focus();
                return;
            }

            // Strict email validation with TLD whitelist
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.(com|org|net|edu|gov|mil|co|uk|ca|au|de|jp|fr|br|in|ru|cn|mx|es|it|nl|se|no|dk|fi|be|ch|at|nz|sg|hk|ie|za|pl|gr|cz|pt|hu|ro|bg|hr|sk|si|lt|lv|ee|is|lu|mt|cy|io|ai|app|dev|tech|online|site|store|shop|blog|info|biz|name|pro|mobi|tel|travel|museum|aero|coop|jobs|cat|asia|xxx|post|xxx|int)$/i;
            if (!email.value || !emailRegex.test(email.value)) {
                statusDiv.textContent = jsStrings.validationEmail;
                statusDiv.classList.add("text-red-600");
                email.focus();
                return;
            }

            if (!message.value || message.value.length < 10) {
                statusDiv.textContent = jsStrings.validationMessage;
                statusDiv.classList.add("text-red-600");
                message.focus();
                return;
            }

            if (!terms.checked) {
                statusDiv.textContent = jsStrings.validationTerms;
                statusDiv.classList.add("text-red-600");
                terms.focus();
                return;
            }

            const formData = new FormData(form);
            const formAction = form.action;

            // Type guard for submit button
            if (submitButton instanceof HTMLButtonElement) {
                submitButton.disabled = true;
                submitButton.textContent = jsStrings.submittingButton;
            }
            statusDiv.textContent = jsStrings.sendingMessage;
            statusDiv.classList.add("text-blue-600");

            try {
                const response = await fetch(formAction, {
                    method: "POST",
                    body: formData,
                    headers: { Accept: "application/json" },
                });

                if (response.ok) {
                    statusDiv.textContent = jsStrings.success;
                    statusDiv.className = "mt-4 text-center text-green-600";
                    window.location.href = thankYouRedirect; 
                } else {
                    const errorData = await response.json().catch(() => ({}));
                    statusDiv.textContent = \`Submission failed: \${errorData.error || jsStrings.serverErrorFallback}\`;
                    statusDiv.className = "mt-4 text-center text-red-600";
                    if (submitButton instanceof HTMLButtonElement) {
                        submitButton.disabled = false;
                        submitButton.textContent = initialSubmitText;
                    }
                }
            } catch (error) {
                statusDiv.textContent = jsStrings.networkError;
                statusDiv.className = "mt-4 text-center text-red-600";
                if (submitButton instanceof HTMLButtonElement) {
                    submitButton.disabled = false;
                    submitButton.textContent = initialSubmitText;
                }
            }
        });
    } else {
        if (!form) console.error("Form with id='contact-form' not found.");
        if (!statusDiv) console.error("Element with id='form-status' not found.");
    }
})();<\/script>`], ["", `<form id="contact-form" action="https://formspree.io/f/xldjandr" method="POST" class="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-md" style="font-family: 'Noto Sans KR', sans-serif;" novalidate> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> `, " ", " </div> ", " ", ' <!-- Honeypot field for spam prevention --> <input type="text" name="_gotcha" style="display: none"> <!-- Fallback redirect if JS fails --> <input type="hidden" name="_next"', '> <!-- Email subject line based on language --> <input type="hidden" name="_subject"', `> <!-- Force redirect to our thank you page and disable Formspree's default thank you page --> <input type="hidden" name="_redirect"`, '> <input type="hidden" name="_template" value="table"> ', ' <div class="mt-8"> ', ' </div> <div id="form-status" class="mt-4 text-center"></div> </form> <script>(function(){', `
    const form = document.getElementById("contact-form");
    const statusDiv = document.getElementById("form-status");

    if (form instanceof HTMLFormElement && statusDiv) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault(); 

            const name = form.querySelector("#name");
            const email = form.querySelector("#email");
            const message = form.querySelector("#message");
            const terms = form.querySelector("#terms");
            const submitButton = form.querySelector("button[type='submit']");

            statusDiv.textContent = "";
            statusDiv.className = "mt-4 text-center";

            // Type guard for form elements
            if (!(name instanceof HTMLInputElement)) return;
            if (!(email instanceof HTMLInputElement)) return;
            if (!(message instanceof HTMLTextAreaElement)) return;
            if (!(terms instanceof HTMLInputElement)) return;
            
            if (!name.value || name.value.length < 2) {
                statusDiv.textContent = jsStrings.validationName;
                statusDiv.classList.add("text-red-600");
                name.focus();
                return;
            }

            // Strict email validation with TLD whitelist
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.(com|org|net|edu|gov|mil|co|uk|ca|au|de|jp|fr|br|in|ru|cn|mx|es|it|nl|se|no|dk|fi|be|ch|at|nz|sg|hk|ie|za|pl|gr|cz|pt|hu|ro|bg|hr|sk|si|lt|lv|ee|is|lu|mt|cy|io|ai|app|dev|tech|online|site|store|shop|blog|info|biz|name|pro|mobi|tel|travel|museum|aero|coop|jobs|cat|asia|xxx|post|xxx|int)$/i;
            if (!email.value || !emailRegex.test(email.value)) {
                statusDiv.textContent = jsStrings.validationEmail;
                statusDiv.classList.add("text-red-600");
                email.focus();
                return;
            }

            if (!message.value || message.value.length < 10) {
                statusDiv.textContent = jsStrings.validationMessage;
                statusDiv.classList.add("text-red-600");
                message.focus();
                return;
            }

            if (!terms.checked) {
                statusDiv.textContent = jsStrings.validationTerms;
                statusDiv.classList.add("text-red-600");
                terms.focus();
                return;
            }

            const formData = new FormData(form);
            const formAction = form.action;

            // Type guard for submit button
            if (submitButton instanceof HTMLButtonElement) {
                submitButton.disabled = true;
                submitButton.textContent = jsStrings.submittingButton;
            }
            statusDiv.textContent = jsStrings.sendingMessage;
            statusDiv.classList.add("text-blue-600");

            try {
                const response = await fetch(formAction, {
                    method: "POST",
                    body: formData,
                    headers: { Accept: "application/json" },
                });

                if (response.ok) {
                    statusDiv.textContent = jsStrings.success;
                    statusDiv.className = "mt-4 text-center text-green-600";
                    window.location.href = thankYouRedirect; 
                } else {
                    const errorData = await response.json().catch(() => ({}));
                    statusDiv.textContent = \\\`Submission failed: \\\${errorData.error || jsStrings.serverErrorFallback}\\\`;
                    statusDiv.className = "mt-4 text-center text-red-600";
                    if (submitButton instanceof HTMLButtonElement) {
                        submitButton.disabled = false;
                        submitButton.textContent = initialSubmitText;
                    }
                }
            } catch (error) {
                statusDiv.textContent = jsStrings.networkError;
                statusDiv.className = "mt-4 text-center text-red-600";
                if (submitButton instanceof HTMLButtonElement) {
                    submitButton.disabled = false;
                    submitButton.textContent = initialSubmitText;
                }
            }
        });
    } else {
        if (!form) console.error("Form with id='contact-form' not found.");
        if (!statusDiv) console.error("Element with id='form-status' not found.");
    }
})();<\/script>`])), maybeRenderHead(), renderComponent($$result, "Input", $$Input, { "label": C.labels.name, "id": "name", "name": "name", "required": true, "minlength": "2", "background": formBackground }), renderComponent($$result, "Input", $$Input, { "label": C.labels.email, "type": "email", "id": "email", "name": "email", "required": true, "background": formBackground }), renderComponent($$result, "Input", $$Input, { "label": C.labels.phone, "type": "tel", "id": "phone", "name": "phone", "background": formBackground, "placeholder": C.placeholders.phone }), renderComponent($$result, "Textarea", $$Textarea, { "label": C.labels.message, "id": "message", "name": "message", "required": true, "minlength": "10", "background": formBackground, "placeholder": C.placeholders.message }), addAttribute(thankYouRedirect, "value"), addAttribute(lang === "es" ? "New Contact Message from NY English Website (Spanish)" : "New Contact Message from NY English Website (English)", "value"), addAttribute(thankYouRedirect, "value"), renderComponent($$result, "Checkbox", $$Checkbox, { "label": C.labels.terms, "id": "terms", "name": "terms", "required": true, "background": formBackground }), renderComponent($$result, "Button", $$Button, { "type": "submit", "variant": "primary", "size": "lg" }, { "default": async ($$result2) => renderTemplate`${C.submitButton}` }), defineScriptVars({ jsStrings, thankYouRedirect, initialSubmitText }));
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/components/forms/Contact.astro", void 0);

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$ContactInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactInfo;
  const {
    // content, // This prop is not used for the direct text elements translated here
    background = "base",
    padding,
    paddingTop,
    paddingBottom,
    lang = "en"
    // Default to 'en' if not provided
  } = Astro2.props;
  const bgColor = getBackgroundColor(background);
  const textColor = getTextColor(background);
  const paddingClass = getPaddingClass({ padding, paddingTop, paddingBottom });
  const localizedContent = {
    en: {
      heading: "Contact Information",
      paragraph: "Reach me via this form or WhatsApp.",
      whatsappButtonText: "WhatsApp Me",
      timeZoneText: "Time Zone: Guadalajara, Mexico (UTC\u20136)",
      consultationLinkText: "Reserve Free Consultation"
    },
    es: {
      heading: "Informaci\xF3n de contacto",
      paragraph: "Cont\xE1ctame mediante este formulario o por WhatsApp.",
      whatsappButtonText: "Cont\xE1ctame por WhatsApp",
      timeZoneText: "Zona horaria: Guadalajara, M\xE9xico (UTC\u20136)",
      consultationLinkText: "Reservar consulta gratuita"
    }
  };
  const C = localizedContent[lang] || localizedContent.en;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute([bgColor, paddingClass], "class:list")}> <div class="site-container px-4"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2${addAttribute([textColor, "text-3xl md:text-4xl font-bold mb-4"], "class:list")} style="font-family: 'Noto Sans KR', sans-serif;"> ${C.heading} </h2> <p${addAttribute([textColor, "text-lg mb-6"], "class:list")} style="font-family: 'Noto Sans KR', sans-serif;"> ${C.paragraph} </p> <div${addAttribute(["flex flex-col gap-6 mt-6"], "class:list")} style="font-family: 'Noto Sans KR', sans-serif;"> <div> ${renderComponent($$result, "Button", $$Button, { "href": "https://wa.me/523315590572", "target": "_blank", "rel": "noopener noreferrer", "variant": "whatsapp", "size": "lg" }, { "default": ($$result2) => renderTemplate`${C.whatsappButtonText}` })} </div> <div${addAttribute(["flex items-center gap-2", textColor], "class:list")}> ${renderComponent($$result, "MapPin", $$MapPin, { "aria-hidden": "true" })} <span>${C.timeZoneText}</span> </div> <div${addAttribute(["flex items-center gap-2", textColor], "class:list")}> ${renderComponent($$result, "Mail", $$Mail, { "aria-hidden": "true" })} <a href="/en/book/" rel="noopener noreferrer"> ${C.consultationLinkText} </a> </div> </div> </div> <div> ${renderComponent($$result, "Contact", $$Contact, { "lang": lang })}  </div> </div> </div> </section>`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/components/sections/ContactInfo.astro", void 0);

export { $$ContactInfo as $ };
