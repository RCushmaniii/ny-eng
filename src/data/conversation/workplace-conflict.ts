// Handling Conflict and Friction at Work in English — bilingual vocabulary bank.
// Every explanatory string is a pair: [English, Mexican Professional Spanish (tú)].
// The English being taught (q and ex) is never translated.
// Descriptive rule for this file: how to stay in control of yourself and the conversation,
// keep friction from escalating, and still reach the outcome. Emotional intelligence, never
// manipulation. No stereotypes, no statistics, no dollar figures.

import type { TopicBank } from "./types";

export const bank: TopicBank = {
  groups: [
    {
      title: ["The Vocabulary of Conflict", "El vocabulario del conflicto"],
      rule: [
        "Before you can manage a conflict you need accurate words for it. Several of the most common ones are false friends, and choosing the word that looks like Spanish can make a calm situation sound like a fight.",
        "Antes de manejar un conflicto necesitas palabras precisas para nombrarlo. Varias de las más comunes son falsos amigos, y elegir la que se parece al español puede hacer que una situación tranquila suene a pleito.",
      ],
      items: [
        {
          q: "Friction",
          a: [
            "Ongoing, low-level irritation or disagreement between people or teams that slows the work down without becoming an open fight.",
            "Roces o desacuerdos constantes y de baja intensidad entre personas o equipos, que entorpecen el trabajo sin llegar a un pleito abierto.",
          ],
          ex: "There's been some <em>friction</em> between sales and operations since the reorganization.",
          note: [
            "Uncountable: <b>some friction</b>, <b>a source of friction</b>, <b>a point of friction</b>. Verbs: <b>cause</b>, <b>create</b>, <b>reduce</b>. It is milder than <b>conflict</b>, which makes it the safe word for raising a problem with your boss.",
            "No se cuenta: <b>some friction</b>, <b>a source of friction</b>, <b>a point of friction</b>. Verbos: <b>cause</b>, <b>create</b>, <b>reduce</b>. Es más suave que <b>conflict</b>, y por eso es la palabra segura para plantearle un problema a tu jefe.",
          ],
          tags: ["core"],
        },
        {
          q: "Pushback",
          a: [
            "Resistance or objection to an idea, a plan or a request.",
            "Resistencia u objeción ante una idea, un plan o una petición.",
          ],
          ex: "We got a lot of <em>pushback</em> from finance on the new timeline.",
          note: [
            "The noun is one word and uncountable: <b>some pushback</b>, <b>a lot of pushback</b>. The verb is two words: <b>push back on</b> something. In US business it is neutral, even healthy; <em>Feel free to push back</em> is a sincere invitation.",
            "El sustantivo es una sola palabra y no se cuenta: <b>some pushback</b>, <b>a lot of pushback</b>. El verbo son dos palabras: <b>push back on</b> something. En los negocios en Estados Unidos es neutral, incluso sano; <em>Feel free to push back</em> es una invitación sincera.",
          ],
          tags: ["core", "idiom"],
        },
        {
          q: "Escalate / De-escalate",
          a: [
            "The first means to make a situation more intense, or to take an issue to someone with more authority. The second means to bring the intensity down.",
            "El primero es hacer que una situación suba de intensidad, o llevar un asunto con alguien de mayor autoridad. El segundo es bajarle la intensidad.",
          ],
          ex: "I'd rather <em>de-escalate</em> this with him directly before we <em>escalate</em> it to the VP.",
          note: [
            "Two senses of the first verb: emotional (<em>the argument escalated</em>) and organizational (<em>I escalated it to my director</em>). The organizational one is a normal process, not a betrayal, as long as you tell the person first.",
            "El primer verbo tiene dos sentidos: emocional (<em>the argument escalated</em>) y organizacional (<em>I escalated it to my director</em>). El organizacional es un proceso normal, no una traición, siempre que primero le avises a la persona.",
          ],
          tags: ["core"],
        },
        {
          q: "Standoff",
          a: [
            "A situation in which neither side will move, so nothing advances.",
            "Situación en la que ninguna de las dos partes cede, y por eso nada avanza.",
          ],
          ex: "The two directors are in a <em>standoff</em> over who owns the budget.",
          note: [
            "Close in meaning: <b>deadlock</b>, <b>stalemate</b>, <b>impasse</b>. You <b>break</b> or <b>end</b> one, usually by asking what each side actually needs.",
            "Con un significado parecido: <b>deadlock</b>, <b>stalemate</b>, <b>impasse</b>. Se usa con <b>break</b> o <b>end</b>, y casi siempre se rompe preguntando qué necesita en realidad cada parte.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Turf war",
          a: [
            "A fight between teams or managers over who controls an area, a budget or a decision.",
            "Pleito entre equipos o gerentes por quién controla un área, un presupuesto o una decisión.",
          ],
          ex: "This isn't really about the data; it's a <em>turf war</em> between marketing and product.",
          note: [
            "<b>Turf</b> is territory: <em>protect your turf</em>, <em>That's not my turf</em>. The adjective is <b>territorial</b>. Use it to describe a situation to someone you trust; said to the people involved, it is an accusation.",
            "<b>Turf</b> es territorio: <em>protect your turf</em>, <em>That's not my turf</em>. El adjetivo es <b>territorial</b>. Úsalo para describirle la situación a alguien de confianza; dicho a los involucrados, es una acusación.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Blame game",
          a: [
            "A pattern in which people spend their energy deciding whose fault something was instead of fixing it.",
            "Dinámica en la que la gente gasta su energía en decidir quién tuvo la culpa en lugar de resolver el problema.",
          ],
          ex: "I'm not interested in the <em>blame game</em>; I want to know how we ship by Friday.",
          trap: [
            "It goes with <b>play</b>: <em>Let's not play the blame game</em>. The verb takes a direct object and <b>for</b>: <span class='x'>✗</span> <em>They blamed to my team</em> → <span class='ok'>✓</span> <em>They <b>blamed my team for</b> the delay</em>. And <span class='x'>✗</span> <em>The fault is of him</em> → <span class='ok'>✓</span> <em>It's <b>his fault</b></em>.",
            "Va con <b>play</b>: <em>Let's not play the blame game</em>. El verbo lleva objeto directo y <b>for</b>: <span class='x'>✗</span> <em>They blamed to my team</em> → <span class='ok'>✓</span> <em>They <b>blamed my team for</b> the delay</em>. Y <span class='x'>✗</span> <em>The fault is of him</em> → <span class='ok'>✓</span> <em>It's <b>his fault</b></em>.",
          ],
          tags: ["idiom", "error"],
        },
        {
          q: "Passive-aggressive",
          a: [
            "Showing anger or resistance indirectly, through sarcasm, silence, delay or fake politeness, instead of saying it openly.",
            "Mostrar enojo o resistencia de forma indirecta, con sarcasmo, silencio, demoras o una cortesía fingida, en lugar de decirlo abiertamente.",
          ],
          ex: "Copying his boss on that reply felt a little <em>passive-aggressive</em>.",
          note: [
            "It is a strong label, so describe the behavior instead of naming the person with it. In email, these lines are often read this way: <em>As per my last email</em>, <em>Just a friendly reminder</em>, <em>As previously stated</em>.",
            "Es una etiqueta fuerte, así que describe la conducta en lugar de ponérsela a la persona. En un correo, estas frases muchas veces se leen así: <em>As per my last email</em>, <em>Just a friendly reminder</em>, <em>As previously stated</em>.",
          ],
          tags: ["core"],
        },
        {
          q: "Micromanage",
          a: [
            "To control every small detail of someone's work instead of trusting them to do it.",
            "Controlar cada detalle del trabajo de alguien en lugar de confiar en que lo va a hacer.",
          ],
          ex: "I don't want to <em>micromanage</em> you, so tell me what kind of check-in would actually help.",
          note: [
            "Always negative; the person is a <b>micromanager</b>. To raise it with your boss without using the word: <em>It would help me to have more room on this. Could we try one weekly update instead?</em>",
            "Siempre es negativo; a la persona se le dice <b>micromanager</b>. Para planteárselo a tu jefe sin usar la palabra: <em>It would help me to have more room on this. Could we try one weekly update instead?</em>",
          ],
          tags: ["core"],
        },
        {
          q: "Butt heads",
          a: [
            "To disagree strongly and repeatedly with someone, usually because both people are firm about the same issue.",
            "Chocar fuerte y seguido con alguien, casi siempre porque las dos personas son muy firmes en el mismo tema.",
          ],
          ex: "She and I <em>butt heads</em> on pricing, but we work well together.",
          note: [
            "Informal but not vulgar; the image is two goats hitting their heads together. <b>With</b> a person, <b>on</b> or <b>over</b> a topic. More neutral options: <b>clash</b>, <b>not see eye to eye</b>.",
            "Es informal pero no vulgar; la imagen es la de dos cabras que se topan de frente. <b>With</b> para la persona, <b>on</b> u <b>over</b> para el tema. Opciones más neutrales: <b>clash</b>, <b>not see eye to eye</b>.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Discuss / Argue",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "The first means to talk something over calmly and in detail. The second means to disagree out loud, often with anger.",
            "El primero es hablar de un tema con calma y a detalle. El segundo es pelear de palabra, muchas veces con enojo.",
          ],
          ex: "We <em>discussed</em> the budget for an hour, and nobody <em>argued</em>.",
          trap: [
            "Spanish <em>discutir</em> in the sense of a fight is <b>argue</b>. <span class='x'>✗</span> <em>I discussed with my boss yesterday</em> (meaning you fought) → <span class='ok'>✓</span> <em>I <b>argued with</b> my boss yesterday</em>. And no preposition after the first verb: <span class='x'>✗</span> <em>We discussed about it</em> → <span class='ok'>✓</span> <em>We <b>discussed it</b></em>. When a colleague says <em>Can we discuss this?</em>, it is an invitation, not a threat.",
            "<em>Discutir</em> en el sentido de pelear es <b>argue</b>. <span class='x'>✗</span> <em>I discussed with my boss yesterday</em> (queriendo decir que se pelearon) → <span class='ok'>✓</span> <em>I <b>argued with</b> my boss yesterday</em>. Y el primer verbo no lleva preposición: <span class='x'>✗</span> <em>We discussed about it</em> → <span class='ok'>✓</span> <em>We <b>discussed it</b></em>. Cuando un colega te dice <em>Can we discuss this?</em>, es una invitación, no una amenaza.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "Argument",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "A verbal fight or heated disagreement. In a more formal sense, the reasoning offered to support a position.",
            "Pleito verbal o desacuerdo acalorado. En un sentido más formal, el razonamiento con el que se defiende una postura.",
          ],
          ex: "They had an <em>argument</em> in the hallway, and the whole floor heard it.",
          trap: [
            "In everyday American English the first meaning is the fight: <em>We had an argument</em> means you quarreled. For Spanish <em>argumentos</em>, say <b>reasons</b>, <b>points</b> or <b>case</b>: <span class='x'>✗</span> <em>I had an argument with him to convince him</em> → <span class='ok'>✓</span> <em>I <b>gave him my reasons</b></em> · <span class='ok'>✓</span> <em>I <b>made my case</b></em>.",
            "En el inglés de todos los días en Estados Unidos, el primer significado es el pleito: <em>We had an argument</em> quiere decir que se pelearon. Para tus <em>argumentos</em>, di <b>reasons</b>, <b>points</b> o <b>case</b>: <span class='x'>✗</span> <em>I had an argument with him to convince him</em> → <span class='ok'>✓</span> <em>I <b>gave him my reasons</b></em> · <span class='ok'>✓</span> <em>I <b>made my case</b></em>.",
          ],
          tags: ["falsefriend", "error"],
        },
        {
          q: "Compromise",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "A solution in which each side gives up part of what it wanted so that both can accept the result.",
            "Solución en la que cada parte cede algo de lo que quería para que las dos puedan aceptar el resultado.",
          ],
          ex: "We reached a <em>compromise</em>: they get the earlier date, and we get a smaller scope.",
          trap: [
            "Spanish <em>compromiso</em> is a <b>commitment</b>. <span class='x'>✗</span> <em>I have a compromise with my team</em> → <span class='ok'>✓</span> <em>I have a <b>commitment</b> to my team</em>. As a verb it takes <b>on</b>: <em>We compromised on the date</em>. A second sense is negative, to put at risk: <em>We can't compromise quality</em>.",
            "Tu <em>compromiso</em> es <b>commitment</b>. <span class='x'>✗</span> <em>I have a compromise with my team</em> → <span class='ok'>✓</span> <em>I have a <b>commitment</b> to my team</em>. Como verbo va con <b>on</b>: <em>We compromised on the date</em>. Tiene un segundo sentido, negativo, que es poner en riesgo: <em>We can't compromise quality</em>.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "Bother",
          hint: ["(not molest)", "(no es molest)"],
          a: [
            "To annoy or disturb someone, or to cause them worry.",
            "Incomodar o interrumpir a alguien, o causarle preocupación.",
          ],
          ex: "It really <em>bothers</em> me when decisions get made without my team in the room.",
          trap: [
            "Spanish <em>molestar</em> is <b>bother</b>, <b>annoy</b> or <b>upset</b>. English <b>molest</b> refers to sexual abuse and must never be used for this. <span class='x'>✗</span> <em>Sorry to molest you</em> → <span class='ok'>✓</span> <em>Sorry to <b>bother</b> you</em>. <span class='x'>✗</span> <em>I'm molested with him</em> → <span class='ok'>✓</span> <em>I'm <b>annoyed</b> with him</em> · <span class='ok'>✓</span> <em>I'm <b>upset</b> with him</em>.",
            "<em>Molestar</em> es <b>bother</b>, <b>annoy</b> o <b>upset</b>. En inglés, <b>molest</b> se refiere a abuso sexual y nunca debe usarse para esto. <span class='x'>✗</span> <em>Sorry to molest you</em> → <span class='ok'>✓</span> <em>Sorry to <b>bother</b> you</em>. <span class='x'>✗</span> <em>I'm molested with him</em> → <span class='ok'>✓</span> <em>I'm <b>annoyed</b> with him</em> · <span class='ok'>✓</span> <em>I'm <b>upset</b> with him</em>.",
          ],
          tags: ["falsefriend", "error"],
        },
        {
          q: "Sensible / Sensitive",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "The first describes a person or a decision that shows good judgment. The second describes a person who is easily hurt, or a subject that needs careful handling.",
            "El primero describe a una persona o una decisión con buen juicio. El segundo describe a alguien que se lastima con facilidad, o un tema que hay que tratar con cuidado.",
          ],
          ex: "It's a <em>sensitive</em> topic, so let's take the <em>sensible</em> approach and talk to her privately.",
          trap: [
            "They are crossed with Spanish: <em>sensible</em> is <b>sensitive</b>, and <em>sensato</em> is <b>sensible</b>. <span class='x'>✗</span> <em>He's very sensible about feedback</em> (this praises his judgment) → <span class='ok'>✓</span> <em>He's very <b>sensitive</b> about feedback</em>. Telling someone <em>You're too sensitive</em> dismisses them; say <em>I can see this matters to you</em>.",
            "Están cruzados con el español: <em>sensible</em> es <b>sensitive</b>, y <em>sensato</em> es <b>sensible</b>. <span class='x'>✗</span> <em>He's very sensible about feedback</em> (esto elogia su buen juicio) → <span class='ok'>✓</span> <em>He's very <b>sensitive</b> about feedback</em>. Decirle a alguien <em>You're too sensitive</em> es descalificarlo; mejor di <em>I can see this matters to you</em>.",
          ],
          tags: ["falsefriend", "error"],
        },
        {
          q: "Pretend",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "To act as if something is true when you know it is not.",
            "Actuar como si algo fuera cierto cuando sabes que no lo es; fingir.",
          ],
          ex: "Let's not <em>pretend</em> everything is fine; the last two meetings were tense.",
          trap: [
            "Spanish <em>pretender</em> is <b>intend</b>, <b>mean</b> or <b>try</b>. <span class='x'>✗</span> <em>I don't pretend to offend you</em> → <span class='ok'>✓</span> <em>I don't <b>mean</b> to offend you</em>. <span class='x'>✗</span> <em>What do you pretend with this email?</em> accuses the person of faking → <span class='ok'>✓</span> <em>What are you <b>trying to do</b> with this email?</em>",
            "<em>Pretender</em> es <b>intend</b>, <b>mean</b> o <b>try</b>. <span class='x'>✗</span> <em>I don't pretend to offend you</em> → <span class='ok'>✓</span> <em>I don't <b>mean</b> to offend you</em>. <span class='x'>✗</span> <em>What do you pretend with this email?</em> acusa a la persona de estar fingiendo → <span class='ok'>✓</span> <em>What are you <b>trying to do</b> with this email?</em>",
          ],
          tags: ["falsefriend", "error"],
        },
      ],
    },
    {
      title: ["Staying in Control of Yourself", "Cómo mantener el control de ti"],
      rule: [
        "The first thing to manage in a conflict is your own reaction. These phrases buy you a few seconds, show the other person they were heard, and keep your voice slow, which matters even more when you are working in a second language.",
        "Lo primero que hay que manejar en un conflicto es tu propia reacción. Estas frases te dan unos segundos, le muestran a la otra persona que la escuchaste y mantienen tu voz pausada, algo que importa todavía más cuando trabajas en un segundo idioma.",
      ],
      items: [
        {
          q: '"Let me make sure I understand."',
          a: [
            "A sentence that slows the conversation down and announces that you are about to repeat back what you heard.",
            "Frase que le baja la velocidad a la conversación y avisa que vas a repetir lo que escuchaste.",
          ],
          ex: "<em>Let me make sure I understand. The scope changed after you had already staffed the project?</em>",
          note: [
            "Follow it with their point in your own words, not with your answer. It helps twice in a second language: it gives you time, and it catches a real misunderstanding before you react to it.",
            "Enseguida di el punto de la otra persona con tus propias palabras, no tu respuesta. En un segundo idioma te ayuda dos veces: te da tiempo, y detecta un malentendido real antes de que reacciones.",
          ],
          tags: ["core"],
        },
        {
          q: '"Give me a second to think about that."',
          a: [
            "A calm request for a short pause before you answer.",
            "Petición tranquila de una pausa breve antes de contestar.",
          ],
          ex: "<em>Give me a second to think about that — I don't want to answer too fast.</em>",
          note: [
            "The silence that follows is fine. A US listener reads the pause as care, not as weakness or a language problem. It is far stronger than filling the space with <em>Well, the thing is that…</em>",
            "El silencio que sigue está bien. Quien te escucha en Estados Unidos interpreta la pausa como cuidado, no como debilidad ni como un problema de idioma. Es mucho más fuerte que llenar el espacio con <em>Well, the thing is that…</em>",
          ],
          tags: ["core"],
        },
        {
          q: '"I want to get this right."',
          a: [
            "A statement that you are taking the issue seriously and choosing your words with care.",
            "Frase que indica que estás tomando el asunto en serio y eligiendo tus palabras con cuidado.",
          ],
          ex: "<em>I want to get this right, so let me check the dates before I respond.</em>",
          note: [
            "Pair it with one concrete action, as in the example. It turns your pause into something you are doing for the other person.",
            "Acompáñala de una acción concreta, como en el ejemplo. Convierte tu pausa en algo que estás haciendo por la otra persona.",
          ],
          tags: [],
        },
        {
          q: '"Can you say more about that?"',
          a: [
            "An open invitation for the other person to keep explaining before you react.",
            "Invitación abierta para que la otra persona siga explicando antes de que tú reacciones.",
          ],
          ex: "<em>Can you say more about that? I want to understand what happened on your end.</em>",
          note: [
            "Use it when a comment stings. The second version is often clearer or milder than the first. Avoid <em>Why did you say that?</em>, which sounds like an accusation.",
            "Úsala cuando un comentario te cala. La segunda versión muchas veces es más clara o más suave que la primera. Evita <em>Why did you say that?</em>, que suena a acusación.",
          ],
          tags: [],
        },
        {
          q: '"What I\'m hearing is…"',
          a: [
            "An opening for summarizing the other person's position in your own words so they can confirm or correct it.",
            "Inicio para resumir con tus propias palabras la postura de la otra persona, para que la confirme o la corrija.",
          ],
          ex: "<em>What I'm hearing is that the deadline moved and nobody told your team.</em>",
          note: [
            "Summarize their concern, not your reply to it. Avoid <em>What you're trying to say is…</em>, which suggests they could not say it themselves.",
            "Resume su preocupación, no tu respuesta. Evita <em>What you're trying to say is…</em>, que da a entender que la persona no supo expresarse.",
          ],
          tags: ["core"],
        },
        {
          q: '"Did I get that right?"',
          a: [
            "A short check that asks the other person to confirm your summary.",
            "Verificación breve que le pide a la otra persona confirmar tu resumen.",
          ],
          ex: "<em>So the main issue is the handoff, not the budget. Did I get that right?</em>",
          trap: [
            "<span class='x'>✗</span> <em>Did I understand well?</em> → <span class='ok'>✓</span> <em><b>Did I get that right?</b></em> · <span class='ok'>✓</span> <em>Am I understanding that <b>correctly</b>?</em> Being corrected here is a good result: it means the person is now explaining instead of attacking.",
            "<span class='x'>✗</span> <em>Did I understand well?</em> → <span class='ok'>✓</span> <em><b>Did I get that right?</b></em> · <span class='ok'>✓</span> <em>Am I understanding that <b>correctly</b>?</em> Que te corrijan aquí es un buen resultado: quiere decir que la persona ya está explicando en lugar de atacar.",
          ],
          tags: ["error"],
        },
        {
          q: '"I can see why that\'s frustrating."',
          a: [
            "An acknowledgment of the other person's feeling that does not concede they are right about the facts.",
            "Reconocimiento de lo que siente la otra persona, sin conceder que tenga razón en los hechos.",
          ],
          ex: "<em>I can see why that's frustrating — you found out from the client instead of from us.</em>",
          trap: [
            "Acknowledging is not agreeing. Add the specific reason, as in the example, so it does not sound automatic. And <span class='x'>✗</span> <em>I understand you</em> only says you can follow their words → <span class='ok'>✓</span> <em><b>I understand</b></em> · <span class='ok'>✓</span> <em><b>I hear you</b></em> · <span class='ok'>✓</span> <em><b>That makes sense</b></em>.",
            "Reconocer no es estar de acuerdo. Agrega la razón específica, como en el ejemplo, para que no suene automático. Y <span class='x'>✗</span> <em>I understand you</em> solo dice que entiendes sus palabras → <span class='ok'>✓</span> <em><b>I understand</b></em> · <span class='ok'>✓</span> <em><b>I hear you</b></em> · <span class='ok'>✓</span> <em><b>That makes sense</b></em>.",
          ],
          tags: ["core", "error"],
        },
        {
          q: '"That\'s a fair point."',
          a: [
            "A way to concede one part of what someone said without giving up your whole position.",
            "Una forma de conceder una parte de lo que alguien dijo sin soltar toda tu postura.",
          ],
          ex: "<em>That's a fair point. We should have flagged the delay on Monday.</em>",
          note: [
            "Conceding something true lowers the temperature quickly and makes your next disagreement more credible. Say it, pause, and then continue, without <b>but</b>.",
            "Conceder algo que es cierto baja la tensión rápido y le da más credibilidad a tu siguiente desacuerdo. Dila, haz una pausa y luego continúa, sin <b>but</b>.",
          ],
          tags: [],
        },
        {
          q: '"I think we\'re talking past each other."',
          a: [
            "A neutral way to name that two people are each making a different argument and neither is being heard.",
            "Forma neutral de señalar que cada quien está defendiendo algo distinto y ninguno de los dos se siente escuchado.",
          ],
          ex: "<em>I think we're talking past each other. Can we back up to what each of us is trying to solve?</em>",
          note: [
            "<b>We</b> places the problem between you, not on the other person. Compare it with <em>You're not listening to me</em>, which starts a second argument.",
            "<b>We</b> pone el problema entre los dos, no en la otra persona. Compárala con <em>You're not listening to me</em>, que abre un segundo pleito.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"Let me take a step back."',
          a: [
            "A way to pause the detail and return to the bigger picture or the original purpose.",
            "Una forma de dejar el detalle por un momento y regresar al panorama general o al propósito original.",
          ],
          ex: "<em>Let me take a step back. What are we actually trying to decide today?</em>",
          note: [
            "Also <em>Let's zoom out</em> and <em>Can we back up for a second?</em> Do not confuse it with <b>back down</b>, which is to give in, or <b>step down</b>, which is to resign.",
            "También <em>Let's zoom out</em> y <em>Can we back up for a second?</em> No la confundas con <b>back down</b>, que es ceder, ni con <b>step down</b>, que es renunciar a un puesto.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Keep your cool",
          a: [
            "To stay calm and in control of yourself under pressure or provocation.",
            "Mantener la calma y el control de ti bajo presión o ante una provocación.",
          ],
          ex: "He was shouting, and she <em>kept her cool</em> the entire time.",
          note: [
            "The possessive changes with the person: <em>kept <b>her</b> cool</em>, <em>keep <b>my</b> cool</em>. The opposite is <b>lose your cool</b>. More formal: <b>stay composed</b>, <b>keep a level head</b>.",
            "El posesivo cambia según la persona: <em>kept <b>her</b> cool</em>, <em>keep <b>my</b> cool</em>. Lo contrario es <b>lose your cool</b>. Más formal: <b>stay composed</b>, <b>keep a level head</b>.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Take it personally",
          a: [
            "To feel that a comment about your work or your idea is an attack on you as a person.",
            "Sentir que un comentario sobre tu trabajo o tu idea es un ataque contra ti como persona.",
          ],
          ex: "It was feedback on the proposal, so I'm trying not to <em>take it personally</em>.",
          trap: [
            "It needs the adverb: <span class='x'>✗</span> <em>Don't take it personal</em> → <span class='ok'>✓</span> <em>Don't take it <b>personally</b></em>. Direct criticism of an idea in a US meeting is usually about the idea. Avoid opening with <em>Don't take this personally, but…</em>; it warns that something harsh is coming.",
            "Necesita el adverbio: <span class='x'>✗</span> <em>Don't take it personal</em> → <span class='ok'>✓</span> <em>Don't take it <b>personally</b></em>. Una crítica directa a una idea en una junta en Estados Unidos casi siempre es sobre la idea. Evita empezar con <em>Don't take this personally, but…</em>; avisa que viene algo duro.",
          ],
          tags: ["idiom", "error"],
        },
        {
          q: "Knee-jerk reaction",
          a: [
            "An immediate, automatic response made without thinking.",
            "Respuesta inmediata y automática, dada sin pensar.",
          ],
          ex: "My <em>knee-jerk reaction</em> was to defend my team, so I waited an hour before I replied.",
          note: [
            "From the reflex test a doctor does on your knee. Useful for owning a mistake: <em>That was a knee-jerk reaction on my part</em>. It applies most to email: write the reply, wait, and send it later.",
            "Viene de la prueba de reflejos que el doctor te hace en la rodilla. Sirve para reconocer un error: <em>That was a knee-jerk reaction on my part</em>. Aplica sobre todo al correo: escribe la respuesta, espera y mándala después.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Get defensive",
          a: [
            "To respond to criticism by protecting yourself and justifying what you did instead of listening.",
            "Responder a una crítica protegiéndote y justificando lo que hiciste, en lugar de escuchar.",
          ],
          ex: "I <em>got defensive</em> in that meeting, and I'd like to hear your point again.",
          note: [
            "Say it about yourself, as in the example; it is one of the fastest ways to reset a conversation. Said to someone else, <em>Don't get defensive</em> makes them more so.",
            "Dila sobre ti, como en el ejemplo; es de las formas más rápidas de reiniciar una conversación. Dicha a otra persona, <em>Don't get defensive</em> solo consigue que se cierre más.",
          ],
          tags: [],
        },
      ],
    },
    {
      title: ["Disagreeing Without Heat", "Cómo estar en desacuerdo sin subir el tono"],
      rule: [
        "In American business English a disagreement is expected to be stated clearly, about the idea, and without apology. The skill is a sentence plain enough to be heard as a no and warm enough to keep the person with you.",
        "En el inglés de negocios de Estados Unidos se espera que un desacuerdo se diga con claridad, sobre la idea y sin disculparte. La habilidad está en una frase lo bastante clara para que se entienda como un no y lo bastante cálida para que la persona siga contigo.",
      ],
      items: [
        {
          q: '"I see it differently."',
          a: [
            "A clear, calm statement that your view is not the same as the other person's.",
            "Frase clara y tranquila para decir que tu punto de vista no es el mismo que el de la otra persona.",
          ],
          ex: "<em>I see it differently, and I'd like to walk you through why.</em>",
          note: [
            "It describes your view instead of their error, which is why it does not start a fight. Give the reason right away; on its own it leaves the listener waiting.",
            "Describe tu punto de vista en lugar del error del otro, y por eso no arma un pleito. Da la razón enseguida; sola, deja a quien te escucha esperando.",
          ],
          tags: ["core"],
        },
        {
          q: '"Help me understand…"',
          a: [
            "A request for the reasoning behind a position you do not yet share.",
            "Petición del razonamiento detrás de una postura que todavía no compartes.",
          ],
          ex: "<em>Help me understand how you got to that number.</em>",
          note: [
            "Use it only when you want the answer. Said in a flat voice, or as a trap, it sounds sarcastic. Continue with <b>how</b> or <b>what</b>, not with <em>why did you</em>.",
            "Úsala solo cuando de verdad quieres la respuesta. Dicha con voz plana, o como trampa, suena sarcástica. Continúa con <b>how</b> o <b>what</b>, no con <em>why did you</em>.",
          ],
          tags: ["core"],
        },
        {
          q: '"Where I land is…"',
          a: [
            "A way to introduce your conclusion after weighing both sides.",
            "Una forma de presentar tu conclusión después de considerar los dos lados.",
          ],
          ex: "<em>I've heard both arguments, and where I land is that we wait one more quarter.</em>",
          note: [
            "It signals that you considered the other side before deciding, which makes it softer than <em>My decision is</em>. The question form is common too: <em>Where did you land on that?</em>",
            "Indica que tomaste en cuenta el otro lado antes de decidir, y por eso es más suave que <em>My decision is</em>. También es común como pregunta: <em>Where did you land on that?</em>",
          ],
          tags: ["idiom"],
        },
        {
          q: '"I\'m not sure I agree."',
          a: [
            "A softened but unmistakable way to say you think something different.",
            "Forma suavizada pero inconfundible de decir que piensas otra cosa.",
          ],
          ex: "<em>I'm not sure I agree that the client will accept a delay.</em>",
          trap: [
            "<span class='x'>✗</span> <em>I'm not agree</em> · <span class='x'>✗</span> <em>I'm not sure I'm agree</em> → <span class='ok'>✓</span> <em>I'm not sure <b>I agree</b></em>. A US listener hears this as a real disagreement, not as doubt, so have your reason ready.",
            "<span class='x'>✗</span> <em>I'm not agree</em> · <span class='x'>✗</span> <em>I'm not sure I'm agree</em> → <span class='ok'>✓</span> <em>I'm not sure <b>I agree</b></em>. En Estados Unidos esto se escucha como un desacuerdo real, no como una duda, así que ten lista tu razón.",
          ],
          tags: ["core", "error"],
        },
        {
          q: '"I have a concern about…"',
          a: [
            "A professional way to raise a problem with a plan without rejecting the whole thing.",
            "Forma profesional de plantear un problema con un plan sin rechazarlo completo.",
          ],
          ex: "<em>I have a concern about the timeline, specifically the two weeks for testing.</em>",
          trap: [
            "Name one specific thing, as in the example; <em>I have some concerns</em> with no detail only worries people. And <span class='x'>✗</span> <em>I'm concerning about the date</em> → <span class='ok'>✓</span> <em>I'm <b>concerned about</b> the date</em>.",
            "Nombra algo específico, como en el ejemplo; <em>I have some concerns</em> sin detalle solo inquieta a la gente. Y <span class='x'>✗</span> <em>I'm concerning about the date</em> → <span class='ok'>✓</span> <em>I'm <b>concerned about</b> the date</em>.",
          ],
          tags: ["core", "error"],
        },
        {
          q: '"Can I push back on that?"',
          a: [
            "A request for permission to challenge what was just said.",
            "Petición de permiso para cuestionar lo que se acaba de decir.",
          ],
          ex: "<em>Can I push back on that a little? I don't think the data supports it.</em>",
          note: [
            "Asking first makes the challenge collaborative, and the answer is almost always <em>Sure</em>. You push back <b>on</b> an idea, never on a person.",
            "Preguntar primero vuelve el cuestionamiento algo colaborativo, y la respuesta casi siempre es <em>Sure</em>. Se dice push back <b>on</b> una idea, nunca sobre una persona.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"I hear you, and…"',
          a: [
            "An opening that acknowledges the other person's point and then adds yours without canceling theirs.",
            "Inicio que reconoce el punto de la otra persona y luego agrega el tuyo sin anular el suyo.",
          ],
          ex: "<em>I hear you, and I also need the team to have two full days for testing.</em>",
          note: [
            "The key word is <b>and</b>. Everything that comes before <b>but</b> gets erased in the listener's mind, so <em>I hear you, but</em> and <em>Yes, but</em> are heard as a plain no.",
            "La palabra clave es <b>and</b>. Todo lo que va antes de <b>but</b> se borra en la mente de quien escucha, así que <em>I hear you, but</em> y <em>Yes, but</em> se oyen como un simple no.",
          ],
          tags: ["core"],
        },
        {
          q: '"With all due respect"',
          hint: ["(use with care)", "(úsala con cuidado)"],
          a: [
            "A formal opener that is supposed to soften a disagreement and usually announces that something harsh is coming.",
            "Entrada formal que se supone que suaviza un desacuerdo y que casi siempre anuncia que viene algo duro.",
          ],
          ex: "When he opened with <em>with all due respect</em>, everyone in the room braced for it.",
          trap: [
            "It looks like a courteous translation of <em>con todo respeto</em>, but a US listener hears the opposite. The same goes for <em>No offense, but</em> and <em>To be honest</em>. Say the issue and ask for the floor instead: <span class='ok'>✓</span> <em>I see a risk here. May I explain?</em>",
            "Parece una traducción cortés de <em>con todo respeto</em>, pero en Estados Unidos se escucha lo contrario. Pasa lo mismo con <em>No offense, but</em> y <em>To be honest</em>. Mejor di el problema y pide la palabra: <span class='ok'>✓</span> <em>I see a risk here. May I explain?</em>",
          ],
          tags: ["idiom", "error"],
        },
        {
          q: '"Let\'s agree to disagree."',
          a: [
            "A way to end an argument that will not be resolved, accepting that each person keeps their own view.",
            "Una forma de cerrar un debate que no se va a resolver, aceptando que cada quien se queda con su opinión.",
          ],
          ex: "<em>Let's agree to disagree on the vendor, and focus on the part we can decide today.</em>",
          note: [
            "Fine for opinions. When a decision is required it solves nothing; ask <em>Who makes the final call on this?</em> Said too early, it sounds like shutting the person down.",
            "Funciona para opiniones. Cuando hace falta una decisión no resuelve nada; pregunta <em>Who makes the final call on this?</em> Dicha demasiado pronto, suena a que le estás cerrando la puerta a la persona.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Play devil's advocate",
          a: [
            "To argue the opposite side on purpose in order to test an idea, without necessarily believing it.",
            "Defender a propósito la postura contraria para poner a prueba una idea, sin que necesariamente la creas.",
          ],
          ex: "Let me <em>play devil's advocate</em> for a minute: what if the client says no?",
          note: [
            "Announce it, as in the example, so people know it is a test and not an attack. Do not hide a real objection behind it; if you actually disagree, say so.",
            "Avísalo, como en el ejemplo, para que la gente sepa que es una prueba y no un ataque. No escondas detrás de esto una objeción real; si de verdad no estás de acuerdo, dilo.",
          ],
          tags: ["idiom"],
        },
        {
          q: "\"That's not what I'm seeing.\"",
          a: [
            "A way to question a fact or a figure by describing your own result instead of telling the person they made a mistake.",
            "Una forma de cuestionar un dato o una cifra describiendo tu propio resultado, en lugar de decirle a la persona que se equivocó.",
          ],
          ex: "<em>That's not what I'm seeing in the report — can we look at the same file together?</em>",
          note: [
            "It moves the question from who is right to what the data says. Compare <span class='x'>✗</span> <em>You are wrong</em> and <span class='x'>✗</span> <em>You are confused</em>, which are about the person and invite a defense.",
            "Cambia la pregunta de quién tiene la razón a qué dicen los datos. Compárala con <span class='x'>✗</span> <em>You are wrong</em> y <span class='x'>✗</span> <em>You are confused</em>, que hablan de la persona y provocan que se defienda.",
          ],
          tags: [],
        },
        {
          q: "Actually",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "In fact; really. A word that signals a correction of what was just said.",
            "De hecho; en realidad. Palabra que avisa que vas a corregir lo que se acaba de decir.",
          ],
          ex: "<em>Actually</em>, the contract says thirty days, not sixty.",
          trap: [
            "It is not <em>actualmente</em>. <span class='x'>✗</span> <em>Actually we are working on that</em> (meaning right now) → <span class='ok'>✓</span> <em>We're <b>currently</b> working on that</em>. In a tense conversation, starting several sentences with it tells the listener again and again that they are wrong.",
            "No es <em>actualmente</em>. <span class='x'>✗</span> <em>Actually we are working on that</em> (queriendo decir en este momento) → <span class='ok'>✓</span> <em>We're <b>currently</b> working on that</em>. En una conversación tensa, empezar varias frases con esta palabra le dice a quien te escucha, una y otra vez, que está equivocado.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "Always / Never",
          hint: ["(absolutes)", "(absolutos)"],
          a: [
            "Two absolute words that turn a specific complaint into an accusation about someone's character.",
            "Dos palabras absolutas que convierten una queja específica en una acusación sobre la forma de ser de alguien.",
          ],
          ex: "Drop <em>always</em> and <em>never</em> from the complaint, and say what happened on Tuesday instead.",
          trap: [
            "<span class='x'>✗</span> <em>You always change the requirements</em> → <span class='ok'>✓</span> <em>The requirements <b>changed twice this month</b></em>. With an absolute, the listener stops hearing the problem and starts looking for the one exception. A count or a date gives them nothing to argue with.",
            "<span class='x'>✗</span> <em>You always change the requirements</em> → <span class='ok'>✓</span> <em>The requirements <b>changed twice this month</b></em>. Con un absoluto, quien te escucha deja de oír el problema y se pone a buscar la única excepción. Un conteo o una fecha no le dejan nada que rebatir.",
          ],
          tags: ["error"],
        },
        {
          q: '"I don\'t disagree."',
          a: [
            "A deliberately lukewarm reply meaning you accept the point in part but are not ready to endorse it.",
            "Respuesta tibia a propósito: aceptas el punto en parte, pero todavía no lo respaldas.",
          ],
          ex: "<em>I don't disagree, but I'd want to see the numbers before we commit.</em>",
          note: [
            "It is not the same as <em>I agree</em>. Speakers use the double negative to hold something back, so listen for what comes next. If you mean yes, say <em>I agree</em>.",
            "No es lo mismo que <em>I agree</em>. Se usa la doble negación para guardarse algo, así que pon atención a lo que sigue. Si quieres decir que sí, di <em>I agree</em>.",
          ],
          tags: ["idiom"],
        },
      ],
    },
    {
      title: [
        "Steering Toward the Outcome You Want",
        "Cómo llevar la conversación hacia el resultado que buscas",
      ],
      rule: [
        "Staying calm is not the goal; the outcome is. Once the other person feels heard, name what you both want, put a concrete proposal on the table and ask for a clear commitment. This is persuasion in the open, never pressure and never tricks.",
        "Mantener la calma no es la meta; la meta es el resultado. Cuando la otra persona ya se siente escuchada, nombra lo que los dos quieren, pon una propuesta concreta sobre la mesa y pide un acuerdo claro. Es persuasión a la vista de todos, nunca presión ni trucos.",
      ],
      items: [
        {
          q: '"We both want…"',
          a: [
            "An opening that names the goal the two sides share before returning to the disagreement.",
            "Inicio que nombra la meta que comparten las dos partes antes de regresar al desacuerdo.",
          ],
          ex: "<em>We both want the plant running by March, so let's start there.</em>",
          note: [
            "Make it specific. <em>We both want what's best for the company</em> is too general to help anyone. And say it only when it is true; people can tell.",
            "Que sea específica. <em>We both want what's best for the company</em> es demasiado general para servirle a alguien. Y dila solo cuando sea verdad; la gente lo nota.",
          ],
          tags: ["core"],
        },
        {
          q: "Common ground",
          a: [
            "The points, interests or goals that two sides in a disagreement already share.",
            "Los puntos, intereses o metas que las dos partes de un desacuerdo ya comparten.",
          ],
          ex: "We disagree on the date, but there's a lot of <em>common ground</em> on the scope.",
          note: [
            "Uncountable: <span class='x'>✗</span> <em>a common ground</em> · <span class='x'>✗</span> <em>common grounds</em>. Verbs: <b>find</b>, <b>look for</b>, <b>build on</b>.",
            "No se cuenta: <span class='x'>✗</span> <em>a common ground</em> · <span class='x'>✗</span> <em>common grounds</em>. Verbos: <b>find</b>, <b>look for</b>, <b>build on</b>.",
          ],
          tags: ["idiom", "error"],
        },
        {
          q: '"What matters most to you here?"',
          a: [
            "A question that asks the other person to name their real priority behind the position they are defending.",
            "Pregunta que le pide a la otra persona nombrar su verdadera prioridad detrás de la postura que defiende.",
          ],
          ex: "<em>What matters most to you here — the date, the cost or who presents it?</em>",
          note: [
            "The answer often shows that the two of you need different things that can both be satisfied. Listen to all of it before you say what matters to you.",
            "La respuesta muchas veces muestra que cada quien necesita algo distinto y que las dos cosas se pueden cumplir. Escúchala completa antes de decir qué te importa a ti.",
          ],
          tags: [],
        },
        {
          q: '"What would it take to…"',
          a: [
            "A question that turns a refusal into a list of conditions.",
            "Pregunta que convierte una negativa en una lista de condiciones.",
          ],
          ex: "<em>What would it take to get your team's sign-off by the end of the month?</em>",
          note: [
            "Followed by a base verb. It works after a no because it asks for conditions instead of arguing with the refusal. Ask it sincerely; the answer may be something you cannot give.",
            "Va seguida de un verbo en forma base. Funciona después de un no porque pide condiciones en lugar de pelear con la negativa. Hazla con sinceridad; la respuesta puede ser algo que no puedes dar.",
          ],
          tags: ["core"],
        },
        {
          q: "\"Here's what I'd propose.\"",
          a: [
            "A direct way to introduce the solution you are suggesting.",
            "Forma directa de presentar la solución que sugieres.",
          ],
          ex: "<em>Here's what I'd propose: we ship the core features in May and the reporting in June.</em>",
          trap: [
            "The verbs <b>propose</b> and <b>suggest</b> do not take <em>you to</em>: <span class='x'>✗</span> <em>I propose you to move the date</em> · <span class='x'>✗</span> <em>I suggest you to wait</em> → <span class='ok'>✓</span> <em>I propose <b>that we move</b> the date</em> · <span class='ok'>✓</span> <em>I suggest <b>waiting</b></em>.",
            "Los verbos <b>propose</b> y <b>suggest</b> no llevan <em>you to</em>: <span class='x'>✗</span> <em>I propose you to move the date</em> · <span class='x'>✗</span> <em>I suggest you to wait</em> → <span class='ok'>✓</span> <em>I propose <b>that we move</b> the date</em> · <span class='ok'>✓</span> <em>I suggest <b>waiting</b></em>.",
          ],
          tags: ["core", "error"],
        },
        {
          q: '"If you can…, I can…"',
          a: [
            "A conditional offer in which each side gives something the other needs.",
            "Ofrecimiento condicional en el que cada parte da algo que la otra necesita.",
          ],
          ex: "<em>If you can give me the specs by Wednesday, I can have a quote to you by Friday.</em>",
          note: [
            "Make both halves concrete: who, what and by when. It is an open trade, not a threat, so avoid the negative version <em>If you don't…, I won't…</em>",
            "Que las dos mitades sean concretas: quién, qué y para cuándo. Es un intercambio abierto, no una amenaza, así que evita la versión negativa <em>If you don't…, I won't…</em>",
          ],
          tags: ["core"],
        },
        {
          q: "Trade-off",
          a: [
            "A situation in which getting more of one thing means accepting less of another.",
            "Situación en la que obtener más de una cosa implica aceptar menos de otra.",
          ],
          ex: "The <em>trade-off</em> is simple: a faster launch means fewer features.",
          note: [
            "The noun has a hyphen; the verb is <b>trade off</b>. Naming it out loud shows that you see the cost on both sides, which makes your proposal easier to trust.",
            "El sustantivo lleva guion; el verbo es <b>trade off</b>. Nombrarlo en voz alta muestra que ves el costo de los dos lados, y eso hace que tu propuesta inspire más confianza.",
          ],
          tags: [],
        },
        {
          q: '"Meet me halfway"',
          a: [
            "To ask the other side to give up part of their position while you give up part of yours.",
            "Pedirle a la otra parte que ceda algo de su postura mientras tú cedes algo de la tuya.",
          ],
          ex: "<em>I can't do ten days, but I can do fifteen if you can meet me halfway on the budget.</em>",
          note: [
            "Say what you are giving first, as in the example. Also <b>meet in the middle</b>. It asks for movement on both sides, so it fails if you have not moved yet.",
            "Di primero qué estás cediendo tú, como en el ejemplo. También <b>meet in the middle</b>. Pide movimiento de los dos lados, así que no funciona si tú todavía no te moviste.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Deal-breaker",
          a: [
            "A single condition so important that, if it is not met, there will be no agreement at all.",
            "Una sola condición tan importante que, si no se cumple, no habrá ningún acuerdo.",
          ],
          ex: "The payment terms are flexible for us, but the exclusivity clause is a <em>deal-breaker</em>.",
          note: [
            "Use it rarely and only when it is true. Knowing yours before the conversation keeps you calm during it. Related: <b>non-negotiable</b>; the opposite is a <b>nice-to-have</b>.",
            "Úsala pocas veces y solo cuando sea verdad. Saber cuál es la tuya antes de la conversación te ayuda a mantener la calma durante ella. Relacionada: <b>non-negotiable</b>; lo contrario es un <b>nice-to-have</b>.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"I can live with that."',
          a: [
            "A way to accept a solution that is not your first choice but is good enough.",
            "Una forma de aceptar una solución que no es tu primera opción pero que es suficientemente buena.",
          ],
          ex: "<em>It's not my first choice, but I can live with that.</em>",
          note: [
            "Honest acceptance without fake enthusiasm, and less dramatic than it sounds word for word. As a question it tests a weak agreement: <em>Can everyone live with that?</em>",
            "Es una aceptación honesta, sin entusiasmo fingido, y menos dramática de lo que suena palabra por palabra. Como pregunta sirve para probar un acuerdo débil: <em>Can everyone live with that?</em>",
          ],
          tags: ["idiom"],
        },
        {
          q: '"Can we agree that…"',
          a: [
            "A question that asks for explicit confirmation of one specific point before moving on.",
            "Pregunta que pide confirmación explícita de un punto específico antes de avanzar.",
          ],
          ex: "<em>Can we agree that nothing goes to the client until both teams have reviewed it?</em>",
          trap: [
            "<span class='x'>✗</span> <em>Are we agree?</em> · <span class='x'>✗</span> <em>Are you agree?</em> → <span class='ok'>✓</span> <em><b>Do we agree?</b></em> · <span class='ok'>✓</span> <em>Are we <b>in agreement</b>?</em> Lock in one small point at a time; several small confirmations hold better than one large one.",
            "<span class='x'>✗</span> <em>Are we agree?</em> · <span class='x'>✗</span> <em>Are you agree?</em> → <span class='ok'>✓</span> <em><b>Do we agree?</b></em> · <span class='ok'>✓</span> <em>Are we <b>in agreement</b>?</em> Asegura un punto pequeño a la vez; varias confirmaciones pequeñas se sostienen mejor que una grande.",
          ],
          tags: ["core", "error"],
        },
        {
          q: '"Are we on the same page?"',
          a: [
            "A check that everyone shares the same understanding of what was decided.",
            "Verificación de que todos entendieron lo mismo sobre lo que se decidió.",
          ],
          ex: "<em>Before we hang up, are we on the same page about who's telling the client?</em>",
          note: [
            "With <b>about</b> or <b>on</b>. A quiet <em>yes</em> from the group is not always a yes; asking each person for their next step tells you more.",
            "Va con <b>about</b> u <b>on</b>. Un <em>yes</em> callado del grupo no siempre es un sí; preguntarle a cada persona cuál es su siguiente paso te dice más.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Buy-in",
          a: [
            "Real agreement and support from the people who will have to carry out a decision.",
            "Acuerdo y apoyo reales de las personas que van a tener que llevar a cabo una decisión.",
          ],
          ex: "We have the budget, but we don't have <em>buy-in</em> from the plant managers yet.",
          note: [
            "Uncountable, with a hyphen: <b>get</b>, <b>have</b> or <b>need</b> buy-in <b>from</b> someone. The verb is <b>buy into</b> an idea. It is different from obedience: people give it when they were heard before the decision.",
            "No se cuenta y lleva guion: <b>get</b>, <b>have</b> o <b>need</b> buy-in <b>from</b> someone. El verbo es <b>buy into</b> una idea. No es lo mismo que obediencia: la gente lo da cuando la escucharon antes de la decisión.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"Can you commit to that?"',
          a: [
            "A direct request for a firm promise on a specific action or date.",
            "Petición directa de una promesa firme sobre una acción o una fecha en específico.",
          ],
          ex: "<em>Friday at noon works for us. Can you commit to that?</em>",
          trap: [
            "After <b>commit to</b> the verb takes <b>-ing</b>: <span class='x'>✗</span> <em>I commit to deliver it</em> → <span class='ok'>✓</span> <em>I commit to <b>delivering</b> it</em>. A US listener hears <em>I'll try</em> as a probable no and <em>yes</em> as a promise. If you cannot, say what you can do: <em>I can't promise Friday, but Monday is realistic</em>.",
            "Después de <b>commit to</b>, el verbo lleva <b>-ing</b>: <span class='x'>✗</span> <em>I commit to deliver it</em> → <span class='ok'>✓</span> <em>I commit to <b>delivering</b> it</em>. En Estados Unidos, <em>I'll try</em> se escucha como un probable no, y <em>yes</em> como una promesa. Si no puedes, di lo que sí puedes hacer: <em>I can't promise Friday, but Monday is realistic</em>.",
          ],
          tags: ["core", "error"],
        },
      ],
    },
    {
      title: ["When It Gets Heated", "Cuando la conversación sube de tono"],
      rule: [
        "When voices rise, shorter is stronger. One calm sentence that names what you need, and then back to the work. You are setting a limit on the behavior, not attacking the person, and you never need to match their volume.",
        "Cuando suben las voces, lo breve es más fuerte. Una frase tranquila que diga lo que necesitas, y de regreso al trabajo. Le pones un límite a la conducta, no atacas a la persona, y nunca necesitas igualar su volumen.",
      ],
      items: [
        {
          q: '"Let\'s take five."',
          a: [
            "A proposal to stop for a few minutes so everyone can cool down.",
            "Propuesta de parar unos minutos para que todos se enfríen.",
          ],
          ex: "<em>Let's take five and come back to this with fresh eyes.</em>",
          note: [
            "<b>Five</b> means five minutes. <b>Let's</b> makes the pause something you both do, with nobody singled out. More formal: <em>Let's take a short break</em>.",
            "<b>Five</b> quiere decir cinco minutos. <b>Let's</b> hace que la pausa sea algo de los dos, sin señalar a nadie. Más formal: <em>Let's take a short break</em>.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"Calm down."',
          hint: ["(avoid)", "(evítala)"],
          a: [
            "A two-word instruction that judges the other person's emotional state and almost always makes it worse.",
            "Instrucción de dos palabras que juzga el estado emocional de la otra persona y casi siempre lo empeora.",
          ],
          ex: "The moment he told her to <em>calm down</em>, the meeting was over.",
          trap: [
            "A literal <em>tranquilo</em> does not carry over. <span class='x'>✗</span> <em>Calm down</em> · <span class='x'>✗</span> <em>Relax</em> · <span class='x'>✗</span> <em>Take it easy</em> all sound dismissive to an upset person → <span class='ok'>✓</span> <em>Let's slow down for a second</em> · <span class='ok'>✓</span> <em>I can tell this matters a lot to you</em>.",
            "Un <em>tranquilo</em> traducido tal cual no funciona. <span class='x'>✗</span> <em>Calm down</em> · <span class='x'>✗</span> <em>Relax</em> · <span class='x'>✗</span> <em>Take it easy</em> le suenan despectivos a alguien que está alterado → <span class='ok'>✓</span> <em>Let's slow down for a second</em> · <span class='ok'>✓</span> <em>I can tell this matters a lot to you</em>.",
          ],
          tags: ["error"],
        },
        {
          q: '"I\'d like to finish my point."',
          a: [
            "A firm, polite way to keep speaking when someone interrupts you.",
            "Forma firme y cortés de seguir hablando cuando alguien te interrumpe.",
          ],
          ex: "<em>I'd like to finish my point, and then I really do want to hear yours.</em>",
          note: [
            "Steady voice, no apology and no <em>Sorry, but</em>. Then keep talking without waiting for permission. The shorter version is <em>Let me finish</em>.",
            "Voz firme, sin disculparte y sin <em>Sorry, but</em>. Luego sigue hablando sin esperar permiso. La versión más corta es <em>Let me finish</em>.",
          ],
          tags: ["core"],
        },
        {
          q: "Cut someone off",
          a: [
            "To interrupt a person before they have finished speaking.",
            "Interrumpir a una persona antes de que termine de hablar.",
          ],
          ex: "Sorry, I <em>cut you off</em> — please go ahead.",
          note: [
            "Separable: <em>cut <b>him</b> off</em>, <em>cut <b>me</b> off</em>. <b>Talk over</b> someone is to speak at the same time as them. Owning it when you do it, as in the example, earns goodwill immediately.",
            "Es separable: <em>cut <b>him</b> off</em>, <em>cut <b>me</b> off</em>. <b>Talk over</b> someone es hablar al mismo tiempo que la otra persona. Reconocerlo cuando lo haces tú, como en el ejemplo, te gana buena disposición de inmediato.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"I\'m not comfortable with that tone."',
          a: [
            "A calm statement that the way someone is speaking to you is not acceptable, without attacking them back.",
            "Frase tranquila para decir que la forma en que alguien te está hablando no es aceptable, sin atacarlo de regreso.",
          ],
          ex: "<em>I'm not comfortable with that tone. I'm glad to keep going if we can keep it professional.</em>",
          note: [
            "Start with <b>I</b>, name the behavior, and then offer a way forward, as in the example. Say it once and quietly. Avoid <em>You're being rude</em>, which labels the person.",
            "Empieza con <b>I</b>, nombra la conducta y luego ofrece cómo seguir, como en el ejemplo. Dila una sola vez y en voz baja. Evita <em>You're being rude</em>, que etiqueta a la persona.",
          ],
          tags: ["core"],
        },
        {
          q: '"Let\'s keep this about the work."',
          a: [
            "A redirect that moves the conversation away from personal remarks and back to the issue.",
            "Frase que saca la conversación de los comentarios personales y la regresa al tema.",
          ],
          ex: "<em>Let's keep this about the work. What specifically needs to change in the proposal?</em>",
          note: [
            "Do not answer the personal remark. Redirect and ask one specific question, which gives the other person something useful to do next.",
            "No contestes el comentario personal. Redirige y haz una pregunta específica, que le da a la otra persona algo útil que hacer enseguida.",
          ],
          tags: ["core"],
        },
        {
          q: '"That\'s not how I remember it."',
          a: [
            "A measured way to dispute someone's version of events without calling them a liar.",
            "Forma mesurada de cuestionar la versión de los hechos de alguien sin llamarlo mentiroso.",
          ],
          ex: "<em>That's not how I remember it. My notes say we agreed on the fifteenth.</em>",
          note: [
            "Follow it with evidence: notes, an email, a date. In English, <span class='x'>✗</span> <em>That's a lie</em> and <span class='x'>✗</span> <em>You're lying</em> are very serious accusations and end the conversation.",
            "Enseguida da evidencia: notas, un correo, una fecha. En inglés, <span class='x'>✗</span> <em>That's a lie</em> y <span class='x'>✗</span> <em>You're lying</em> son acusaciones muy graves y terminan la conversación.",
          ],
          tags: [],
        },
        {
          q: "Take credit for",
          a: [
            "To present someone else's work or idea as your own.",
            "Presentar como propio el trabajo o la idea de otra persona.",
          ],
          ex: "He <em>took credit for</em> the analysis my team spent three weeks on.",
          note: [
            "The opposite is <b>give credit to</b> someone. To reclaim it calmly in the moment: <em>I'm glad that analysis is useful. My team built it, and I can walk you through the details</em>.",
            "Lo contrario es <b>give credit to</b> someone. Para recuperarlo con calma en el momento: <em>I'm glad that analysis is useful. My team built it, and I can walk you through the details</em>.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Throw someone under the bus",
          a: [
            "To blame or sacrifice a colleague in order to protect yourself.",
            "Culpar o sacrificar a un colega para protegerte tú.",
          ],
          ex: "She <em>threw me under the bus</em> in front of the client instead of saying the delay was shared.",
          note: [
            "Very common and informal. It is fine for describing what happened to a trusted colleague, and harsh as an accusation to someone's face. Related: <b>scapegoat</b>, <b>pass the buck</b>.",
            "Es muy común e informal. Sirve para describirle lo que pasó a un colega de confianza, y es dura como acusación de frente. Relacionadas: <b>scapegoat</b>, <b>pass the buck</b>.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Set the record straight",
          a: [
            "To correct a false or incomplete version of events, publicly and factually.",
            "Corregir una versión falsa o incompleta de los hechos, en público y con datos.",
          ],
          ex: "I'd like to <em>set the record straight</em>: we delivered the file on the ninth, and here is the email.",
          note: [
            "Use it with facts and dates and no adjectives. A softer entry, useful when you are blamed in front of others: <em>I want to add some context</em>.",
            "Úsala con datos y fechas, sin adjetivos. Una entrada más suave, útil cuando te culpan frente a otros: <em>I want to add some context</em>.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Cross the line",
          a: [
            "To go beyond what is acceptable behavior.",
            "Ir más allá de lo que es una conducta aceptable.",
          ],
          ex: "Disagreeing with me is fine, but that comment about my team <em>crossed the line</em>.",
          note: [
            "Separate what is acceptable from what is not, as the example does. <b>Draw the line</b> is to set the limit yourself: <em>I draw the line at being yelled at</em>.",
            "Separa lo que sí es aceptable de lo que no, como en el ejemplo. <b>Draw the line</b> es poner tú el límite: <em>I draw the line at being yelled at</em>.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Lose your temper",
          a: [
            "To suddenly become angry and stop controlling how you speak or act.",
            "Enojarte de golpe y dejar de controlar cómo hablas o actúas.",
          ],
          ex: "I <em>lost my temper</em> on that call, and I'm not proud of it.",
          note: [
            "<b>Temper</b> is a tendency to anger: <em>He has a temper</em>. It is not <em>temperamento</em> in general, and <span class='x'>✗</span> <em>I lost my temperament</em> is not English. Informal equivalents: <b>blow up</b>, <b>snap</b>, <b>lose it</b>.",
            "<b>Temper</b> es la tendencia a enojarse: <em>He has a temper</em>. No es el temperamento en general, y <span class='x'>✗</span> <em>I lost my temperament</em> no existe en inglés. Equivalentes informales: <b>blow up</b>, <b>snap</b>, <b>lose it</b>.",
          ],
          tags: ["idiom", "error"],
        },
        {
          q: '"Let\'s take this offline."',
          a: [
            "A proposal to move a disagreement out of the group meeting and into a private conversation.",
            "Propuesta de sacar un desacuerdo de la junta de grupo y llevarlo a una conversación privada.",
          ],
          ex: "<em>We see this differently, so let's take this offline and not use everyone's time.</em>",
          note: [
            "It has nothing to do with the internet; it means outside this meeting. It spares both of you an audience. Add when, or it sounds like avoiding the subject.",
            "No tiene que ver con internet; quiere decir fuera de esta junta. Les evita a los dos tener público. Agrega cuándo, o suena a que estás evadiendo el tema.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"Let\'s pick this up tomorrow."',
          a: [
            "A way to pause a conversation that is no longer productive and promise to continue it later.",
            "Una forma de pausar una conversación que ya no está siendo productiva y prometer que la continúas después.",
          ],
          ex: "<em>I don't think we'll solve it tonight. Let's pick this up tomorrow at ten.</em>",
          note: [
            "<b>Pick up</b> here is to resume. Always attach a time, as in the example; a pause without one feels like walking out. When a decision can wait: <em>Let's sleep on it</em>.",
            "<b>Pick up</b> aquí es retomar. Siempre ponle hora, como en el ejemplo; una pausa sin hora se siente como si te hubieras salido de la plática. Cuando la decisión puede esperar: <em>Let's sleep on it</em>.",
          ],
          tags: [],
        },
      ],
    },
    {
      title: [
        "Repairing, Escalating Properly and Following Up",
        "Reparar, escalar de la manera correcta y dar seguimiento",
      ],
      rule: [
        "What you do in the day or two after a conflict decides whether the working relationship recovers. Repair quickly and specifically, involve a manager or HR in the open when you need to, and write down what was agreed.",
        "Lo que haces en el día o dos después de un conflicto decide si la relación de trabajo se recupera. Repara pronto y de forma específica, involucra a un jefe o a Recursos Humanos de manera abierta cuando haga falta, y deja registrado lo que se acordó.",
      ],
      items: [
        {
          q: '"I owe you an apology."',
          a: [
            "A serious, adult opening for saying sorry that takes full responsibility before the details.",
            "Entrada seria y madura para pedir perdón, que asume toda la responsabilidad antes de entrar en detalles.",
          ],
          ex: "<em>I owe you an apology. I interrupted you three times yesterday, and that wasn't fair.</em>",
          note: [
            "Follow it with exactly what you did. Being sorry for how you said something does not mean giving up your position on the issue. A direct apology is heard as strength, not weakness.",
            "Enseguida di exactamente qué hiciste. Disculparte por la forma en que dijiste algo no significa soltar tu postura sobre el tema. Una disculpa directa se escucha como fortaleza, no como debilidad.",
          ],
          tags: ["core"],
        },
        {
          q: "Apologize",
          hint: ["(to / for)", "(to / for)"],
          a: [
            "To tell someone you are sorry for something you did.",
            "Decirle a alguien que lamentas algo que hiciste.",
          ],
          ex: "I want to <em>apologize</em> for the way I spoke to you on Friday.",
          trap: [
            "<span class='x'>✗</span> <em>I apologize you</em> · <span class='x'>✗</span> <em>I apologize with you</em> → <span class='ok'>✓</span> <em>I apologize <b>to</b> you <b>for</b> the delay</em>. Leave out <b>if</b> and <b>but</b>: <span class='x'>✗</span> <em>I'm sorry if anyone felt bad</em> → <span class='ok'>✓</span> <em>I'm sorry <b>I raised my voice</b></em>. And <em>Excuse me</em> is for getting past someone, not for a real apology.",
            "<span class='x'>✗</span> <em>I apologize you</em> · <span class='x'>✗</span> <em>I apologize with you</em> → <span class='ok'>✓</span> <em>I apologize <b>to</b> you <b>for</b> the delay</em>. Quita <b>if</b> y <b>but</b>: <span class='x'>✗</span> <em>I'm sorry if anyone felt bad</em> → <span class='ok'>✓</span> <em>I'm sorry <b>I raised my voice</b></em>. Y <em>Excuse me</em> es para pedir permiso al pasar, no para una disculpa de verdad.",
          ],
          tags: ["core", "error"],
        },
        {
          q: '"I was out of line."',
          a: [
            "An admission that your behavior went beyond what was acceptable.",
            "Reconocimiento de que tu conducta fue más allá de lo aceptable.",
          ],
          ex: "<em>I was out of line when I raised my voice, and it won't happen again.</em>",
          note: [
            "It is about behavior, not about facts, so you can say it and still hold your view on the issue. Do not add an explanation of what the other person did to provoke you.",
            "Habla de la conducta, no de los hechos, así que puedes decirla y mantener tu opinión sobre el tema. No agregues una explicación de lo que hizo la otra persona para provocarte.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Clear the air",
          a: [
            "To talk openly about a tension or misunderstanding so that it stops affecting the relationship.",
            "Hablar abiertamente de una tensión o un malentendido para que deje de afectar la relación.",
          ],
          ex: "Do you have ten minutes? I'd like to <em>clear the air</em> after Tuesday's call.",
          note: [
            "Do it privately, soon and one to one, and start with your own part. Related: <b>the elephant in the room</b>, the obvious problem nobody mentions.",
            "Hazlo en privado, pronto y a solas con la persona, y empieza por tu parte. Relacionada: <b>the elephant in the room</b>, el problema obvio que nadie menciona.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"No hard feelings."',
          a: [
            "A phrase that tells the other person you are not holding on to resentment after a disagreement.",
            "Frase que le dice a la otra persona que no te quedaste con resentimiento después de un desacuerdo.",
          ],
          ex: "<em>No hard feelings — we both wanted the project to go well.</em>",
          note: [
            "Usually said by the person who received the apology or lost the decision. Say it only if it is true. Related: <b>hold a grudge</b>, to stay resentful, and <b>move on</b>.",
            "Casi siempre la dice quien recibió la disculpa o quien no ganó la decisión. Dila solo si es verdad. Relacionadas: <b>hold a grudge</b>, quedarte con rencor, y <b>move on</b>.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Loop in",
          a: [
            "To include someone in a conversation or an email thread so that they are informed.",
            "Incluir a alguien en una conversación o en un hilo de correos para que esté enterado.",
          ],
          ex: "I'm going to <em>loop in</em> our director, since this affects her budget.",
          note: [
            "Separable: <em>loop <b>her</b> in</em>. Say it before you do it. Adding someone's boss on copy without warning is read as an attack; announcing it first is read as transparency. Related: <em>Keep me in the loop</em>.",
            "Es separable: <em>loop <b>her</b> in</em>. Dilo antes de hacerlo. Copiar al jefe de alguien sin avisar se lee como un ataque; avisarlo primero se lee como transparencia. Relacionada: <em>Keep me in the loop</em>.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Go over someone's head",
          a: [
            "To take an issue to a person's boss without telling that person first.",
            "Llevar un asunto con el jefe de una persona sin avisarle antes a ella.",
          ],
          ex: "I didn't want to <em>go over your head</em>, so I'm telling you before I talk to Karen.",
          note: [
            "It is seen as a breach of trust. The accepted route is to raise the issue with the person first and then tell them you are taking it further. A second meaning: too difficult to follow, as in <em>That went over my head</em>.",
            "Se considera una falta de confianza. El camino aceptado es plantearle el tema primero a la persona y luego avisarle que lo vas a llevar más arriba. Tiene un segundo significado, algo demasiado difícil de seguir: <em>That went over my head</em>.",
          ],
          tags: ["idiom"],
        },
        {
          q: "HR",
          a: [
            "The department that manages hiring, pay, policies and formal complaints about conduct at work.",
            "El área que maneja contrataciones, sueldos, políticas y quejas formales sobre conducta en el trabajo.",
          ],
          ex: "If it happens again, I'm going to take it to <em>HR</em>.",
          note: [
            "Short for Human Resources, said letter by letter and usually without an article: <b>talk to HR</b>, <b>go to HR</b>. Some companies call it the <b>People team</b>. Taking something there usually makes it formal, so people do it deliberately.",
            "Es la forma corta de Human Resources; se dice letra por letra y casi siempre sin artículo: <b>talk to HR</b>, <b>go to HR</b>. Algunas empresas le dicen <b>People team</b>. Llevar algo ahí normalmente lo vuelve formal, así que la gente lo hace de manera deliberada.",
          ],
          tags: [],
        },
        {
          q: "Grievance",
          a: [
            "A formal complaint about unfair treatment at work, submitted through an official process.",
            "Queja formal por un trato injusto en el trabajo, presentada por medio de un proceso oficial.",
          ],
          ex: "She filed a <em>grievance</em> after the third incident.",
          note: [
            "A formal word; in everyday speech people say <b>complaint</b> or <b>concern</b>. Verbs: <b>file</b>, <b>raise</b>. Pronounced <em>GREE-vuns</em>, two syllables.",
            "Es una palabra formal; al hablar, la gente dice <b>complaint</b> o <b>concern</b>. Verbos: <b>file</b>, <b>raise</b>. Se pronuncia <em>GRI-vns</em>, en dos sílabas.",
          ],
          tags: [],
        },
        {
          q: "File a complaint",
          hint: ["(not demand)", "(no es demand)"],
          a: [
            "To submit an official report of a problem so that the organization has to respond.",
            "Presentar un reporte oficial de un problema para que la organización tenga que responder.",
          ],
          ex: "You have the right to <em>file a complaint</em> without telling your manager first.",
          trap: [
            "<span class='x'>✗</span> <em>put a complaint</em> · <span class='x'>✗</span> <em>put a demand</em>. A legal <em>demanda</em> is a <b>lawsuit</b>; English <b>demand</b> is an <em>exigencia</em> and sounds aggressive. And <em>reclamar</em> is <b>complain</b>, not <b>claim</b>: <span class='x'>✗</span> <em>I claimed to him</em> → <span class='ok'>✓</span> <em>I <b>complained to</b> him <b>about</b> it</em>.",
            "<span class='x'>✗</span> <em>put a complaint</em> · <span class='x'>✗</span> <em>put a demand</em>. Una demanda legal es <b>lawsuit</b>; en inglés, <b>demand</b> es una exigencia y suena agresivo. Y <em>reclamar</em> es <b>complain</b>, no <b>claim</b>: <span class='x'>✗</span> <em>I claimed to him</em> → <span class='ok'>✓</span> <em>I <b>complained to</b> him <b>about</b> it</em>.",
          ],
          tags: ["falsefriend", "error"],
        },
        {
          q: "Retaliation",
          a: [
            "Punishing someone for reporting a problem or raising a concern, for example by excluding them or blocking a promotion.",
            "Castigar a alguien por reportar un problema o plantear una preocupación, por ejemplo excluyéndolo o bloqueándole un ascenso.",
          ],
          ex: "Company policy prohibits <em>retaliation</em> against anyone who reports a concern in good faith.",
          note: [
            "A key word in company policies. The verb is <b>retaliate against</b> someone. When you hear it in a meeting, the conversation has become formal.",
            "Es una palabra clave en las políticas de las empresas. El verbo es <b>retaliate against</b> someone. Cuando la escuchas en una junta, la conversación ya se volvió formal.",
          ],
          tags: [],
        },
        {
          q: "Hold someone accountable",
          a: [
            "To make sure a person answers for the results they committed to, including when they do not deliver.",
            "Asegurarte de que una persona responda por los resultados a los que se comprometió, también cuando no cumple.",
          ],
          ex: "It's my job to <em>hold</em> the vendor <em>accountable</em> for the dates in the contract.",
          note: [
            "There is no one-word Spanish equivalent; it is close to <em>rendir cuentas</em>. It looks forward, which makes it different from blame. <b>Responsible</b> is who does the task; <b>accountable</b> is who answers for the result.",
            "No tiene un equivalente de una sola palabra en español; se acerca a rendir cuentas. Mira hacia adelante, y por eso es distinto de culpar. <b>Responsible</b> es quien hace la tarea; <b>accountable</b> es quien responde por el resultado.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"Put it in writing"',
          a: [
            "To record an agreement or a concern in an email or a document so there is no doubt later about what was said.",
            "Dejar registrado un acuerdo o una preocupación en un correo o un documento, para que después no haya duda de lo que se dijo.",
          ],
          ex: "<em>That works for me. Could you put it in writing so we're both working from the same version?</em>",
          trap: [
            "<span class='x'>✗</span> <em>put it in written</em> · <span class='x'>✗</span> <em>put it by written</em> → <span class='ok'>✓</span> <em>put it <b>in writing</b></em>. It is standard practice, not a sign of distrust. Present it as something that helps both sides, as in the example.",
            "<span class='x'>✗</span> <em>put it in written</em> · <span class='x'>✗</span> <em>put it by written</em> → <span class='ok'>✓</span> <em>put it <b>in writing</b></em>. Es una práctica normal, no una señal de desconfianza. Preséntala como algo que les sirve a los dos, como en el ejemplo.",
          ],
          tags: ["core", "idiom", "error"],
        },
        {
          q: "Paper trail",
          a: [
            "The record, made up of emails, notes and documents, that shows what happened and when.",
            "El registro, formado por correos, notas y documentos, que muestra qué pasó y cuándo.",
          ],
          ex: "Send a short recap after every call so there's a <em>paper trail</em>.",
          note: [
            "It keeps the name even when everything is digital. Keep the tone factual and neutral: write every email as if a third person will read it later, and never write one while you are angry.",
            "Conserva el nombre aunque todo sea digital. Mantén un tono neutral y de hechos: escribe cada correo como si después lo fuera a leer una tercera persona, y nunca escribas uno mientras estás enojado.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"Going forward"',
          a: [
            "From now on. A phrase that turns the conversation from what went wrong to what will change.",
            "De ahora en adelante. Frase que lleva la conversación de lo que salió mal a lo que va a cambiar.",
          ],
          ex: "<em>Going forward, let's copy both teams on any change to the schedule.</em>",
          trap: [
            "The most useful pivot after a conflict: it lets everyone stop arguing about the past without denying it. <span class='x'>✗</span> <em>From now and on</em> · <span class='x'>✗</span> <em>In advance, let's copy both teams</em> (<b>in advance</b> means beforehand) → <span class='ok'>✓</span> <em><b>Going forward</b></em> · <span class='ok'>✓</span> <em><b>From now on</b></em>.",
            "Es el giro más útil después de un conflicto: permite que todos dejen de pelear por el pasado sin negarlo. <span class='x'>✗</span> <em>From now and on</em> · <span class='x'>✗</span> <em>In advance, let's copy both teams</em> (<b>in advance</b> quiere decir con anticipación) → <span class='ok'>✓</span> <em><b>Going forward</b></em> · <span class='ok'>✓</span> <em><b>From now on</b></em>.",
          ],
          tags: ["core", "error"],
        },
      ],
    },
  ],
  cheat: [
    [
      ["DISCUSS vs ARGUE", "DISCUSS vs ARGUE"],
      [
        "To <b>discuss</b> is to talk it over calmly. To <b>argue</b> is to fight. <em>We discussed it</em>, with no <em>about</em>.",
        "<b>Discuss</b> es hablarlo con calma. <b>Argue</b> es pelear. <em>We discussed it</em>, sin <em>about</em>.",
      ],
    ],
    [
      ["COMPROMISE vs COMMITMENT", "COMPROMISE vs COMMITMENT"],
      [
        "A <b>compromise</b> is where each side gives something up. Your <em>compromiso</em> is a <b>commitment</b>.",
        "Un <b>compromise</b> es cuando cada parte cede algo. Tu compromiso es un <b>commitment</b>.",
      ],
    ],
    [
      ["PAUSE FIRST", "PRIMERO LA PAUSA"],
      [
        "A few seconds of silence read as care, not weakness. <em>Give me a second to think about that.</em>",
        "Unos segundos de silencio se interpretan como cuidado, no como debilidad. <em>Give me a second to think about that.</em>",
      ],
    ],
    [
      ["HEARD BEFORE ANSWERED", "ESCUCHA ANTES DE CONTESTAR"],
      [
        "Say back what you heard and check it before you give your side. <em>What I'm hearing is… Did I get that right?</em>",
        "Repite lo que escuchaste y verifícalo antes de dar tu versión. <em>What I'm hearing is… Did I get that right?</em>",
      ],
    ],
    [
      ["THE IDEA, NOT THE PERSON", "LA IDEA, NO LA PERSONA"],
      [
        "Describe your view and the facts, with no <b>always</b> or <b>never</b>. <em>I see it differently, and here's why.</em>",
        "Describe tu punto de vista y los hechos, sin <b>always</b> ni <b>never</b>. <em>I see it differently, and here's why.</em>",
      ],
    ],
    [
      ["AND, NOT BUT", "AND, NO BUT"],
      [
        "<b>But</b> erases everything before it. <em>I hear you, <b>and</b> I also need two days for testing.</em>",
        "<b>But</b> borra todo lo que va antes. <em>I hear you, <b>and</b> I also need two days for testing.</em>",
      ],
    ],
    [
      ["ONE SHORT SENTENCE", "UNA FRASE CORTA"],
      [
        "When it gets heated, set the limit once, quietly, and go back to the work. <em>I'd like to finish my point.</em>",
        "Cuando sube de tono, pon el límite una sola vez, en voz baja, y regresa al trabajo. <em>I'd like to finish my point.</em>",
      ],
    ],
    [
      ["REPAIR, THEN WRITE IT DOWN", "REPARA Y LUEGO DÉJALO POR ESCRITO"],
      [
        "Apologize for what you did, with no <b>if</b> and no <b>but</b>, then confirm in an email what changes <b>going forward</b>.",
        "Discúlpate por lo que hiciste, sin <b>if</b> y sin <b>but</b>, y luego confirma en un correo qué cambia <b>going forward</b>.",
      ],
    ],
  ],
};
