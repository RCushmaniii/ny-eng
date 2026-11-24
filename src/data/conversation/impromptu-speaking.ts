// Impromptu Speaking in English — bilingual vocabulary bank.
// Every explanatory string is a pair: [English, Mexican Professional Spanish (tú)].
// The English being taught (q and ex) is never translated.
// Descriptive rule for this file: explain what fluent speakers actually say and do when they
// are put on the spot. No stereotypes, no statistics, no dollar figures.

import type { TopicBank } from "./types";

export const bank: TopicBank = {
  groups: [
    {
      title: ["The Vocabulary of Speaking Unprepared", "El vocabulario de hablar sin preparación"],
      rule: [
        "Most of the speaking you do at work is unplanned: someone turns to you and asks. English has a precise vocabulary for that moment, and knowing it lets you name what is happening instead of freezing.",
        "Casi todo lo que hablas en el trabajo es sin planear: alguien voltea contigo y te pregunta. El inglés tiene un vocabulario preciso para ese momento, y conocerlo te permite ponerle nombre a lo que está pasando en lugar de quedarte congelado.",
      ],
      items: [
        {
          q: "Impromptu",
          a: [
            "Done or said without any preparation or advance notice.",
            "Hecho o dicho sin preparación y sin aviso previo.",
          ],
          ex: "She gave an <em>impromptu</em> speech at the dinner, and it was the best one of the night.",
          note: [
            "Pronounced <em>im-PROMP-too</em>. It is an adjective and an adverb, never a verb: <em>an impromptu meeting</em>, <em>he spoke impromptu</em>. Neutral to positive in tone; it does not suggest carelessness.",
            "Se pronuncia <em>im-PROMP-tu</em>. Es adjetivo y adverbio, nunca verbo: <em>an impromptu meeting</em>, <em>he spoke impromptu</em>. Su tono va de neutral a positivo; no sugiere descuido.",
          ],
          tags: ["core"],
        },
        {
          q: "Off the cuff",
          a: [
            "Spoken spontaneously, without notes or a script.",
            "Dicho de forma espontánea, sin notas ni guion.",
          ],
          ex: "I didn't prepare anything, so these comments are completely <em>off the cuff</em>.",
          note: [
            "Hyphenated before a noun: <em>an <b>off-the-cuff</b> remark</em>. Saying it out loud lowers expectations politely and buys you goodwill before you start.",
            "Lleva guiones antes de un sustantivo: <em>an <b>off-the-cuff</b> remark</em>. Decirlo en voz alta baja las expectativas con cortesía y te gana buena disposición antes de empezar.",
          ],
          tags: ["core", "idiom"],
        },
        {
          q: "On the spot",
          a: [
            "Right then and there, with no time to prepare; also, in a position where you are forced to answer in front of others.",
            "En ese mismo momento, sin tiempo para prepararte; también, en una situación en la que te obligan a contestar frente a otros.",
          ],
          ex: "I don't want to put you <em>on the spot</em>, but do you have a rough estimate?",
          note: [
            "The full expression is <b>to put someone on the spot</b>. When a US colleague says <em>I don't want to put you on the spot</em>, a question is coming anyway; it is a courtesy, not a way out.",
            "La expresión completa es <b>to put someone on the spot</b>. Cuando un colega de Estados Unidos dice <em>I don't want to put you on the spot</em>, la pregunta viene de todos modos; es una cortesía, no una salida.",
          ],
          tags: ["core", "idiom"],
        },
        {
          q: "To wing it",
          a: [
            "To do something with no preparation and figure it out as you go.",
            "Hacer algo sin ninguna preparación y resolverlo sobre la marcha.",
          ],
          ex: "The slides didn't load, so I had <em>to wing it</em> for twenty minutes.",
          note: [
            "Informal. It can sound slightly careless if you say it about something important: <em>I'll just wing it</em> before a board presentation worries people. Fine as a story afterward.",
            "Es informal. Puede sonar un poco descuidado si lo dices de algo importante: <em>I'll just wing it</em> antes de presentarle al consejo preocupa a la gente. Funciona bien como anécdota después.",
          ],
          tags: ["idiom"],
        },
        {
          q: "To ad-lib",
          a: [
            "To add words that were not in the script or the plan while you are speaking.",
            "Agregar palabras que no estaban en el guion ni en el plan mientras vas hablando.",
          ],
          ex: "He <em>ad-libbed</em> a joke about the microphone, and the whole room relaxed.",
          note: [
            "Double the <b>b</b> in the past: <b>ad-libbed</b>. It describes a moment inside a prepared talk; <b>to wing it</b> describes having nothing prepared at all.",
            "En pasado se duplica la <b>b</b>: <b>ad-libbed</b>. Describe un momento dentro de una plática preparada; <b>to wing it</b> describe no tener nada preparado.",
          ],
          tags: ["idiom"],
        },
        {
          q: "To think on your feet",
          a: [
            "To react quickly and sensibly to something unexpected while it is happening.",
            "Reaccionar rápido y con buen juicio ante algo inesperado mientras está pasando.",
          ],
          ex: "Client meetings never go as planned, so you have <em>to think on your feet</em>.",
          note: [
            "A compliment and a common line in performance reviews: <em>She thinks on her feet</em>. The possessive changes with the person: <b>on my feet</b>, <b>on her feet</b>, <b>on their feet</b>.",
            "Es un elogio y aparece mucho en evaluaciones de desempeño: <em>She thinks on her feet</em>. El posesivo cambia según la persona: <b>on my feet</b>, <b>on her feet</b>, <b>on their feet</b>.",
          ],
          tags: ["core", "idiom"],
        },
        {
          q: "To ramble",
          a: [
            "To talk for too long without a clear direction or point.",
            "Hablar de más, sin rumbo ni idea central clara.",
          ],
          ex: "Stop me if I start <em>to ramble</em> — I get excited about this topic.",
          note: [
            "The most common weakness of speaking unprepared, in any language. Naming it yourself is disarming: <em>Sorry, I'm rambling. My point is this.</em>",
            "Es la debilidad más común al hablar sin preparación, en cualquier idioma. Decirlo tú mismo desarma a cualquiera: <em>Sorry, I'm rambling. My point is this.</em>",
          ],
          tags: ["core"],
        },
        {
          q: "Filler words",
          a: [
            "Sounds and short words with no meaning that fill the silence while you think, such as um, uh, like and you know.",
            "Sonidos y palabras cortas sin significado que llenan el silencio mientras piensas, como <em>um</em>, <em>uh</em>, <em>like</em> y <em>you know</em>.",
          ],
          ex: "Record yourself for one minute and count the <em>filler words</em>.",
          trap: [
            "Spanish fillers do not transfer. <span class='x'>✗</span> <em>este…</em> · <span class='x'>✗</span> <em>eh…</em> · <span class='x'>✗</span> <em>o sea…</em> in the middle of an English sentence pull the listener out of it. → <span class='ok'>✓</span> a silent pause, or an English filler: <em><b>um</b></em>, <em><b>well</b></em>, <em><b>so</b></em>.",
            "Las muletillas del español no se transfieren. <span class='x'>✗</span> <em>este…</em> · <span class='x'>✗</span> <em>eh…</em> · <span class='x'>✗</span> <em>o sea…</em> a media frase en inglés sacan de la conversación a quien te escucha. → <span class='ok'>✓</span> un silencio, o una muletilla en inglés: <em><b>um</b></em>, <em><b>well</b></em>, <em><b>so</b></em>.",
          ],
          tags: ["core", "error"],
        },
        {
          q: "To draw a blank",
          a: [
            "To be suddenly unable to remember a word, a name or what you wanted to say.",
            "No poder recordar de pronto una palabra, un nombre o lo que querías decir.",
          ],
          ex: "I'm <em>drawing a blank</em> on his name — the gentleman from procurement.",
          note: [
            "You draw a blank <b>on</b> something. Also <b>to blank</b> and <b>my mind went blank</b>. Native speakers say it all the time, so saying it yourself sounds fluent, not weak.",
            "Se dice draw a blank <b>on</b> something. También <b>to blank</b> y <b>my mind went blank</b>. Los hablantes nativos lo dicen todo el tiempo, así que decirlo tú suena a fluidez, no a debilidad.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Talking points",
          a: [
            "The two or three key ideas you intend to get across, noted in a few words and not written out in full.",
            "Las dos o tres ideas clave que quieres transmitir, anotadas en pocas palabras y no redactadas completas.",
          ],
          ex: "I jotted down three <em>talking points</em> on the way to the meeting.",
          note: [
            "The middle ground between a script and nothing. Thirty seconds of jotting them down before a meeting is the single best preparation for being asked to speak.",
            "Es el punto medio entre un guion y nada. Medio minuto para anotarlas antes de una junta es la mejor preparación para cuando te pidan hablar.",
          ],
          tags: ["core"],
        },
        {
          q: "Takeaway",
          a: [
            "The main idea a listener should remember after you finish speaking.",
            "La idea principal que debe recordar quien te escucha cuando termines de hablar.",
          ],
          ex: "The key <em>takeaway</em> is that we need two more weeks, not two more people.",
          note: [
            "One word as a noun. Decide your takeaway before you open your mouth and everything else gets easier. Usually with <b>key</b> or <b>main</b>.",
            "Como sustantivo se escribe en una sola palabra. Decide cuál es antes de abrir la boca y todo lo demás se vuelve más fácil. Casi siempre va con <b>key</b> o <b>main</b>.",
          ],
          tags: [],
        },
        {
          q: "To land a point",
          a: [
            "To express an idea so that the audience clearly understands it and feels its weight.",
            "Expresar una idea de modo que el público la entienda con claridad y sienta su peso.",
          ],
          ex: "Slow down at the end if you want <em>to land the point</em>.",
          note: [
            "Also intransitive: <em>That joke didn't land</em>, <em>The message really landed with the team</em>. The image is a plane touching down, not a punch.",
            "También se usa sin objeto: <em>That joke didn't land</em>, <em>The message really landed with the team</em>. La imagen es la de un avión que aterriza, no la de un golpe.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Improvise",
          hint: ["(not improve)", "(no es improve)"],
          a: [
            "To create or perform something in the moment, using whatever you have available.",
            "Crear o resolver algo en el momento, con lo que tengas a la mano.",
          ],
          ex: "The translator didn't show up, so we had to <em>improvise</em>.",
          trap: [
            "The two verbs look alike and get swapped under pressure. <b>Improve</b> is to make better. <span class='x'>✗</span> <em>I had to improve my answer on the spot</em> (meaning to make it up) → <span class='ok'>✓</span> <em>I had to <b>improvise</b> my answer</em>. <span class='x'>✗</span> <em>I want to improvise my English</em> → <span class='ok'>✓</span> <em>I want to <b>improve</b> my English</em>.",
            "Los dos verbos se parecen y se cruzan bajo presión. <b>Improve</b> es mejorar. <span class='x'>✗</span> <em>I had to improve my answer on the spot</em> (queriendo decir inventarla) → <span class='ok'>✓</span> <em>I had to <b>improvise</b> my answer</em>. <span class='x'>✗</span> <em>I want to improvise my English</em> → <span class='ok'>✓</span> <em>I want to <b>improve</b> my English</em>.",
          ],
          tags: ["falsefriend", "error"],
        },
        {
          q: "Assist",
          hint: ["(false friend)", "(falso amigo)"],
          a: ["To help someone do something.", "Ayudar a alguien a hacer algo."],
          ex: "Two interns will <em>assist</em> the speakers with the equipment.",
          trap: [
            "Being present at a meeting is <b>attend</b>, not <b>assist</b>. When you introduce yourself on the spot: <span class='x'>✗</span> <em>I assisted to the kickoff last week</em> → <span class='ok'>✓</span> <em>I <b>attended</b> the kickoff</em> or simply <em>I <b>was at</b> the kickoff</em>. Said the wrong way, the listener hears that you helped run it.",
            "Estar presente en una junta es <b>attend</b>, no <b>assist</b>. Cuando te presentas de improviso: <span class='x'>✗</span> <em>I assisted to the kickoff last week</em> → <span class='ok'>✓</span> <em>I <b>attended</b> the kickoff</em> o simplemente <em>I <b>was at</b> the kickoff</em>. Dicho al revés, quien te escucha entiende que ayudaste a organizarla.",
          ],
          tags: ["falsefriend", "error"],
        },
      ],
    },
    {
      title: ["Buying Time Gracefully", "Cómo ganar tiempo con elegancia"],
      rule: [
        "Nobody expects an instant answer; they expect a composed one. A short phrase that fills three seconds lets your brain catch up, and to a US listener it sounds thoughtful, not unprepared.",
        "Nadie espera una respuesta instantánea; esperan una respuesta serena. Una frase corta que llena tres segundos le da tiempo a tu cabeza de alcanzarte, y a un oyente de Estados Unidos le suena a reflexión, no a falta de preparación.",
      ],
      items: [
        {
          q: "To buy time",
          a: [
            "To do or say something that gives you a few extra moments before you have to answer or act.",
            "Hacer o decir algo que te da unos momentos extra antes de tener que contestar o actuar.",
          ],
          ex: "Repeating the question is an easy way <em>to buy time</em>.",
          note: [
            "Often <b>buy yourself time</b> or <b>buy some time</b>. The negative version is <b>to stall</b>, which means delaying because you have no answer and hope the question goes away.",
            "Muchas veces se dice <b>buy yourself time</b> o <b>buy some time</b>. La versión negativa es <b>to stall</b>, que es retrasar porque no tienes respuesta y esperas que la pregunta se olvide.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"That\'s a great question."',
          a: [
            "A reaction that acknowledges the person who asked and gives you a moment to think before answering.",
            "Reacción que le reconoce el mérito a quien preguntó y te da un momento para pensar antes de contestar.",
          ],
          ex: "<em>That's a great question — and honestly, we debated it for weeks.</em>",
          note: [
            "Use it once. Said before every answer in a Q&A, it sounds automatic and the audience notices. Alternatives: <em>I'm glad you asked that</em>, <em>That's a fair question</em>, <em>That's the right question to ask</em>.",
            "Úsala una vez. Dicha antes de cada respuesta en una sesión de preguntas, suena automática y el público lo nota. Alternativas: <em>I'm glad you asked that</em>, <em>That's a fair question</em>, <em>That's the right question to ask</em>.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"Let me think about that for a second."',
          a: [
            "An honest request for a short silence before you give your answer.",
            "Petición honesta de un breve silencio antes de dar tu respuesta.",
          ],
          ex: "<em>Let me think about that for a second, because I want to give you a real answer.</em>",
          note: [
            "Then actually stay quiet for two or three seconds. Senior US speakers do this constantly; the silence signals that the answer will be considered. Rushing to fill it is what sounds junior.",
            "Y luego sí quédate callado dos o tres segundos. Los directivos en Estados Unidos lo hacen todo el tiempo; el silencio indica que la respuesta va a ser pensada. Apresurarte a llenarlo es lo que suena a poca experiencia.",
          ],
          tags: ["core"],
        },
        {
          q: '"Let me put it this way."',
          a: [
            "An opener that announces you are about to explain something in a clearer or more careful form.",
            "Frase de entrada que anuncia que vas a explicar algo de una forma más clara o más cuidadosa.",
          ],
          ex: "<em>Let me put it this way: if we ship in March, we ship with bugs.</em>",
          note: [
            "It buys a beat and promises a strong sentence, so follow it with one. Also useful for delicate answers, when the direct wording would be too blunt.",
            "Te da un instante y promete una frase fuerte, así que cúmplela. También sirve para respuestas delicadas, cuando decirlo directo sería demasiado brusco.",
          ],
          tags: ["core", "idiom"],
        },
        {
          q: '"Off the top of my head…"',
          a: [
            "A warning that what follows is from memory, without checking, and may not be exact.",
            "Aviso de que lo que sigue es de memoria, sin verificar, y puede no ser exacto.",
          ],
          ex: "<em>Off the top of my head, I'd say about a third of our volume goes through Laredo.</em>",
          trap: [
            "Word-for-word translations of <em>así de memoria</em> or <em>de botepronto</em> do not exist in English: <span class='x'>✗</span> <em>By memory…</em> · <span class='x'>✗</span> <em>From my head…</em> → <span class='ok'>✓</span> <em><b>Off the top of my head</b>…</em>. It protects you: nobody holds you to a number introduced this way.",
            "Las traducciones palabra por palabra de <em>así de memoria</em> o <em>de botepronto</em> no existen en inglés: <span class='x'>✗</span> <em>By memory…</em> · <span class='x'>✗</span> <em>From my head…</em> → <span class='ok'>✓</span> <em><b>Off the top of my head</b>…</em>. Además te protege: nadie te va a exigir un número que presentaste así.",
          ],
          tags: ["core", "idiom", "error"],
        },
        {
          q: '"The short answer is…"',
          a: [
            "An opener that gives the conclusion in one sentence and signals that more detail is available if wanted.",
            "Frase de entrada que da la conclusión en una sola oración e indica que hay más detalle si lo quieren.",
          ],
          ex: "<em>The short answer is yes. The longer answer involves our legal team.</em>",
          note: [
            "The most useful opener in this whole bank. It forces you to decide your answer before you start talking, which is exactly what stops rambling. Often followed by <em>The longer answer is…</em>",
            "Es la frase de entrada más útil de todo este banco. Te obliga a decidir tu respuesta antes de empezar a hablar, que es justo lo que evita que te vayas por las ramas. Muchas veces la sigue <em>The longer answer is…</em>",
          ],
          tags: ["core"],
        },
        {
          q: '"So you\'re asking whether…"',
          a: [
            "A way of restating what you were asked, to confirm you understood it and to gain a few seconds.",
            "Forma de repetir con tus palabras lo que te preguntaron, para confirmar que entendiste y ganar unos segundos.",
          ],
          ex: "<em>So you're asking whether we can absorb the cost increase this year.</em>",
          note: [
            "In a large room it also helps everyone who did not hear the original question. Restate it shorter than it was asked; never longer.",
            "En un salón grande también les ayuda a todos los que no alcanzaron a oír la pregunta original. Repítela más corta de como te la hicieron; nunca más larga.",
          ],
          tags: [],
        },
        {
          q: '"Just so I\'m clear, do you mean…?"',
          a: [
            "A clarifying question you ask before answering, when what you were asked could be taken two ways.",
            "Pregunta para aclarar que haces antes de contestar, cuando lo que te preguntaron puede entenderse de dos maneras.",
          ],
          ex: "<em>Just so I'm clear, do you mean this quarter or the full year?</em>",
          note: [
            "Offer two options, as in the example. It shows precision, gains you time and saves you from answering the wrong question well. Far better than <em>Can you repeat?</em>",
            "Da dos opciones, como en el ejemplo. Muestra precisión, te da tiempo y te salva de contestar muy bien la pregunta equivocada. Es mucho mejor que <em>Can you repeat?</em>",
          ],
          tags: [],
        },
        {
          q: '"Well, …"',
          a: [
            "A one-word opener that signals a considered reply is coming and gives you a breath before it.",
            "Entrada de una sola palabra que indica que viene una respuesta pensada y te da un respiro antes de darla.",
          ],
          ex: "<em>Well, I think there are two separate issues here.</em>",
          note: [
            "The natural English replacement for <em>pues</em> or <em>bueno</em>. <b>So</b> works the same way at the start of an explanation. One per answer; a chain of <em>well… so… well…</em> becomes filler.",
            "Es el reemplazo natural en inglés de <em>pues</em> o <em>bueno</em>. <b>So</b> funciona igual al inicio de una explicación. Una por respuesta; una cadena de <em>well… so… well…</em> ya es muletilla.",
          ],
          tags: [],
        },
        {
          q: '"It depends on…"',
          a: [
            "An opener for an answer that changes according to a condition, which you then name.",
            "Entrada para una respuesta que cambia según una condición, que enseguida mencionas.",
          ],
          ex: "<em>It depends on the volume — under a thousand units, yes; above that, no.</em>",
          trap: [
            "The preposition is <b>on</b>, never <em>of</em>, and the verb needs its <b>-s</b>: <span class='x'>✗</span> <em>It depends of the client</em> · <span class='x'>✗</span> <em>Depends of</em> · <span class='x'>✗</span> <em>It depend</em> → <span class='ok'>✓</span> <em>It <b>depends on</b> the client</em>. And never stop there: name the condition and give both answers.",
            "La preposición es <b>on</b>, nunca <em>of</em>, y el verbo necesita su <b>-s</b>: <span class='x'>✗</span> <em>It depends of the client</em> · <span class='x'>✗</span> <em>Depends of</em> · <span class='x'>✗</span> <em>It depend</em> → <span class='ok'>✓</span> <em>It <b>depends on</b> the client</em>. Y nunca te quedes ahí: di cuál es la condición y da las dos respuestas.",
          ],
          tags: ["error"],
        },
        {
          q: '"There are a couple of ways to look at this."',
          a: [
            "An opener that buys time and sets up an answer with two angles.",
            "Entrada que te da tiempo y prepara una respuesta con dos ángulos.",
          ],
          ex: "<em>There are a couple of ways to look at this: the cost side and the customer side.</em>",
          note: [
            "Name the angles right away, as in the example, and you have built your structure while still thinking. <b>A couple of</b> means two, sometimes three; it needs <b>of</b>.",
            "Menciona los ángulos de inmediato, como en el ejemplo, y ya armaste tu estructura mientras seguías pensando. <b>A couple of</b> quiere decir dos, a veces tres; necesita <b>of</b>.",
          ],
          tags: [],
        },
        {
          q: '"My gut reaction is…"',
          a: [
            "An opener for sharing your first instinct while making clear that you have not analyzed it yet.",
            "Entrada para compartir tu primer instinto dejando claro que todavía no lo analizas.",
          ],
          ex: "<em>My gut reaction is that it's too early, but I'd want to see the numbers.</em>",
          note: [
            "<b>Gut</b> is instinct: <b>a gut feeling</b>, <b>go with your gut</b>. Informal but fully acceptable in a meeting. It gives people your opinion now and leaves you room to change it later.",
            "<b>Gut</b> es instinto: <b>a gut feeling</b>, <b>go with your gut</b>. Es informal, pero totalmente aceptable en una junta. Le das tu opinión a la gente ahora y te dejas espacio para cambiarla después.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"Bear with me."',
          a: [
            "A polite request for patience while you find a word, a document or your thought.",
            "Petición cortés de paciencia mientras encuentras una palabra, un documento o tu idea.",
          ],
          ex: "<em>Bear with me for a moment while I pull up that figure.</em>",
          note: [
            "Spelled <b>bear</b>, like the animal, not <em>bare</em>. Give the reason and keep the wait short. Much more natural than <em>Please wait</em> or <em>One moment, please</em>.",
            "Se escribe <b>bear</b>, como el oso, no <em>bare</em>. Da la razón y que la espera sea corta. Suena mucho más natural que <em>Please wait</em> o <em>One moment, please</em>.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Actually",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "In fact; really. It introduces a correction, a surprise or a change of mind.",
            "De hecho; en realidad. Introduce una corrección, una sorpresa o un cambio de opinión.",
          ],
          ex: "<em>Actually</em>, let me revise that — the figure I gave was for last year.",
          trap: [
            "Not <em>actualmente</em>. When you are thinking out loud it slips out as a time word: <span class='x'>✗</span> <em>Actually we are working on that</em> (meaning right now) → <span class='ok'>✓</span> <em><b>Right now</b> we're working on that</em> · <span class='ok'>✓</span> <em>We're <b>currently</b> working on that</em>. Opening an answer with it by mistake sounds as if you are contradicting the person who asked.",
            "No es <em>actualmente</em>. Cuando piensas en voz alta se te sale como palabra de tiempo: <span class='x'>✗</span> <em>Actually we are working on that</em> (queriendo decir en este momento) → <span class='ok'>✓</span> <em><b>Right now</b> we're working on that</em> · <span class='ok'>✓</span> <em>We're <b>currently</b> working on that</em>. Abrir una respuesta con ella por error suena a que estás contradiciendo a quien preguntó.",
          ],
          tags: ["falsefriend", "error"],
        },
      ],
    },
    {
      title: ["Structures That Organize You Instantly", "Estructuras que te organizan al instante"],
      rule: [
        "Fluent impromptu speakers are not inventing from zero; they are pouring new content into a shape they already know. Pick one of these shapes in the first two seconds and your answer has a beginning, a middle and an end.",
        "Quienes hablan bien de improviso no inventan desde cero; vacían contenido nuevo en un molde que ya conocen. Elige uno de estos moldes en los primeros dos segundos y tu respuesta ya tiene principio, desarrollo y final.",
      ],
      items: [
        {
          q: "PREP",
          a: [
            "A four-step shape for a short answer: Point, Reason, Example, Point. You state your position, say why, illustrate it and state your position again.",
            "Molde de cuatro pasos para una respuesta corta: <em>Point, Reason, Example, Point</em>. Dices tu postura, explicas por qué, la ilustras y vuelves a decir tu postura.",
          ],
          ex: "When someone asks for your opinion, <em>PREP</em> gives you a complete answer in under a minute.",
          note: [
            "In practice: <em>I'd go with the second vendor. They've delivered on time for three years. Last spring they covered a rush order in four days. So I'd go with them.</em> The repeated point at the end is your landing.",
            "En la práctica: <em>I'd go with the second vendor. They've delivered on time for three years. Last spring they covered a rush order in four days. So I'd go with them.</em> Repetir tu postura al final es tu aterrizaje.",
          ],
          tags: ["core", "acronym"],
        },
        {
          q: "Bottom line up front (BLUF)",
          a: [
            "The practice of giving your conclusion or recommendation in the first sentence and the supporting detail afterward.",
            "La práctica de dar tu conclusión o recomendación en la primera oración y el detalle que la respalda después.",
          ],
          ex: "Senior leaders want the <em>bottom line up front</em>, so start with the recommendation.",
          trap: [
            "Building up to the conclusion through the background is a courteous habit in Spanish and it costs you the room in English. <span class='x'>✗</span> context → history → analysis → conclusion → <span class='ok'>✓</span> <b>conclusion</b> → reason → detail only if asked. That fault has a name: <b>burying the lead</b>.",
            "Llegar a la conclusión pasando por los antecedentes es una costumbre de cortesía en español, y en inglés te cuesta la atención de la sala. <span class='x'>✗</span> contexto → historia → análisis → conclusión → <span class='ok'>✓</span> <b>conclusión</b> → razón → detalle solo si lo piden. Ese defecto tiene nombre: <b>burying the lead</b>.",
          ],
          tags: ["core", "acronym", "error"],
        },
        {
          q: "Past–present–future",
          a: [
            "A three-step shape that moves through time: how things used to be, where they stand today and what comes next.",
            "Molde de tres pasos que avanza en el tiempo: cómo eran las cosas antes, dónde están hoy y qué sigue.",
          ],
          ex: "For a quick project update, <em>past–present–future</em> is the easiest structure to remember.",
          note: [
            "It works for updates, introductions and farewells. Three openers carry it: <em>When we started…</em>, <em>Today…</em>, <em>Going forward…</em>. Watch the tenses: simple past, present, then <b>will</b> or <b>going to</b>.",
            "Funciona para avances, presentaciones y despedidas. Tres entradas lo sostienen: <em>When we started…</em>, <em>Today…</em>, <em>Going forward…</em>. Cuida los tiempos verbales: pasado simple, presente y luego <b>will</b> o <b>going to</b>.",
          ],
          tags: [],
        },
        {
          q: "Problem–solution–benefit",
          a: [
            "A three-step shape for proposing something: what is going wrong, how to fix it and what improves as a result.",
            "Molde de tres pasos para proponer algo: qué está fallando, cómo arreglarlo y qué mejora como resultado.",
          ],
          ex: "She pitched the idea in thirty seconds using <em>problem–solution–benefit</em>.",
          note: [
            "Most people stop after the second step. The third is what gets a yes, so say it out loud: <em>…which means we'd close the books two days earlier.</em>",
            "La mayoría se detiene después del segundo paso. El tercero es el que consigue el sí, así que dilo en voz alta: <em>…which means we'd close the books two days earlier.</em>",
          ],
          tags: [],
        },
        {
          q: '"What? So what? Now what?"',
          a: [
            "A three-question shape: the facts, why they matter and the next step.",
            "Molde de tres preguntas: los hechos, por qué importan y el siguiente paso.",
          ],
          ex: "I organize every status report around <em>what, so what, now what</em>.",
          note: [
            "<b>So what?</b> asked of someone else is rude; asked of your own material it is the most useful editing question there is. It turns a list of facts into a message.",
            "<b>So what?</b> dicho a otra persona es grosero; aplicado a tu propio material es la pregunta de edición más útil que existe. Convierte una lista de hechos en un mensaje.",
          ],
          tags: ["idiom"],
        },
        {
          q: "The rule of three",
          a: [
            "The principle that ideas delivered as a trio are easier to say, to follow and to remember than any other number.",
            "El principio de que las ideas que se presentan en trío son más fáciles de decir, de seguir y de recordar que en cualquier otro número.",
          ],
          ex: "<em>The rule of three</em> works: faster, cheaper and easier to maintain.",
          note: [
            "Two items feel incomplete and four are forgotten. On the spot, announce the number first — <em>Three things</em> — and you have committed yourself to a structure before you know all of it.",
            "Con dos elementos se siente incompleto y con cuatro se olvidan. De improviso, anuncia primero el número, <em>Three things</em>, y ya te comprometiste con una estructura antes de tenerla completa.",
          ],
          tags: ["core"],
        },
        {
          q: '"First… second… and finally…"',
          a: [
            "Ordering words that number the parts of your answer so listeners can follow and know when you are done.",
            "Palabras de orden que numeran las partes de tu respuesta para que quien te escucha pueda seguirte y sepa cuándo terminas.",
          ],
          ex: "<em>First, the timeline is realistic. Second, the budget is not. And finally, we need a decision by Friday.</em>",
          trap: [
            "<span class='x'>✗</span> <em>At first, I want to thank you</em> → <span class='ok'>✓</span> <em><b>First</b>, I want to thank you</em>. <b>At first</b> means in the beginning, before something changed. <span class='x'>✗</span> <em>Firstable</em> → <span class='ok'>✓</span> <em><b>First of all</b></em>. <span class='x'>✗</span> <em>At last, the budget</em> → <span class='ok'>✓</span> <em><b>Finally</b></em> or <em><b>Lastly</b></em>; <b>at last</b> expresses relief after a long wait.",
            "<span class='x'>✗</span> <em>At first, I want to thank you</em> → <span class='ok'>✓</span> <em><b>First</b>, I want to thank you</em>. <b>At first</b> quiere decir al principio, antes de que algo cambiara. <span class='x'>✗</span> <em>Firstable</em> → <span class='ok'>✓</span> <em><b>First of all</b></em>. <span class='x'>✗</span> <em>At last, the budget</em> → <span class='ok'>✓</span> <em><b>Finally</b></em> o <em><b>Lastly</b></em>; <b>at last</b> expresa alivio después de una larga espera.",
          ],
          tags: ["core", "error"],
        },
        {
          q: "Signposting",
          a: [
            "Telling your listeners where you are in your answer and where you are going next.",
            "Decirles a quienes te escuchan en qué parte de tu respuesta vas y hacia dónde sigues.",
          ],
          ex: "Good <em>signposting</em> lets people follow you even when they miss a sentence.",
          note: [
            "Typical signposts: <em>Let me start with…</em>, <em>Moving on to…</em>, <em>The second point is…</em>, <em>To wrap up…</em>. They feel repetitive to the speaker and helpful to the listener, especially on a call with a weak connection.",
            "Señales típicas: <em>Let me start with…</em>, <em>Moving on to…</em>, <em>The second point is…</em>, <em>To wrap up…</em>. A quien habla le parecen repetitivas y a quien escucha le ayudan, sobre todo en una llamada con mala conexión.",
          ],
          tags: ["core"],
        },
        {
          q: '"There are two things I\'d highlight."',
          a: [
            "An opener that announces how many points are coming, which commits you to a structure.",
            "Entrada que anuncia cuántos puntos vienen, lo cual te compromete con una estructura.",
          ],
          ex: "<em>There are two things I'd highlight: the delivery times and the return rate.</em>",
          note: [
            "Say <b>two</b> when you are sure of one and can find the second while you talk. Do not announce five. <b>Highlight</b> is the natural verb for <em>destacar</em>; <em>I'd remark</em> is not used this way.",
            "Di <b>two</b> cuando estés seguro de uno y puedas encontrar el segundo mientras hablas. No anuncies cinco. <b>Highlight</b> es el verbo natural para <em>destacar</em>; <em>I'd remark</em> no se usa así.",
          ],
          tags: [],
        },
        {
          q: '"For example…"',
          a: [
            "The phrase that introduces a specific case to illustrate the general statement you just made.",
            "La frase que introduce un caso específico para ilustrar la afirmación general que acabas de hacer.",
          ],
          ex: "<em>Our customers want flexibility. For example, half of them now ask for monthly billing.</em>",
          trap: [
            "<span class='x'>✗</span> <em>By example</em> · <span class='x'>✗</span> <em>Per example</em> · <span class='x'>✗</span> <em>For give you an example</em> → <span class='ok'>✓</span> <em><b>For example</b></em> · <span class='ok'>✓</span> <em><b>For instance</b></em> · <span class='ok'>✓</span> <em><b>To give you an example</b></em>. Whenever you make a general statement on the spot, this phrase should be your next two words.",
            "<span class='x'>✗</span> <em>By example</em> · <span class='x'>✗</span> <em>Per example</em> · <span class='x'>✗</span> <em>For give you an example</em> → <span class='ok'>✓</span> <em><b>For example</b></em> · <span class='ok'>✓</span> <em><b>For instance</b></em> · <span class='ok'>✓</span> <em><b>To give you an example</b></em>. Cada vez que hagas una afirmación general de improviso, esta frase debe ser lo siguiente que digas.",
          ],
          tags: ["error"],
        },
        {
          q: '"Here\'s why."',
          a: [
            "A two-word bridge from your position to the explanation behind it.",
            "Puente de dos palabras entre tu postura y la explicación que la sostiene.",
          ],
          ex: "<em>I'd wait until January. Here's why.</em>",
          note: [
            "Short, confident, and it makes people lean in. Pause after it. Related bridges: <em>Here's the thing</em>, <em>Here's what I mean</em>, <em>Here's what I'd suggest</em>.",
            "Es corta, segura y hace que la gente ponga atención. Haz un silencio después. Puentes parecidos: <em>Here's the thing</em>, <em>Here's what I mean</em>, <em>Here's what I'd suggest</em>.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"Which brings me to…"',
          a: [
            "A transition that connects what you just said to your next point so the move feels planned.",
            "Transición que conecta lo que acabas de decir con tu siguiente punto, para que el cambio se sienta planeado.",
          ],
          ex: "<em>We lost two engineers in June, which brings me to the hiring plan.</em>",
          note: [
            "Even when the connection occurred to you one second earlier, this phrase makes it sound designed. <b>Brings</b>, not <em>takes</em> or <em>carries</em>.",
            "Aunque la conexión se te haya ocurrido un segundo antes, esta frase la hace sonar diseñada. Es <b>brings</b>, no <em>takes</em> ni <em>carries</em>.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"On the one hand… on the other hand…"',
          a: [
            "A two-part frame for presenting both sides of an issue before you give your view.",
            "Estructura de dos partes para presentar los dos lados de un asunto antes de dar tu opinión.",
          ],
          ex: "<em>On the one hand, it's the cheapest option. On the other hand, it ties us to one supplier.</em>",
          trap: [
            "<span class='x'>✗</span> <em>In one hand… in the other hand</em> · <span class='x'>✗</span> <em>By one side… by the other side</em> → <span class='ok'>✓</span> <em><b>On</b> the one hand… <b>on</b> the other hand</em>. And finish with your own position; a US audience expects you to choose a side after showing both.",
            "<span class='x'>✗</span> <em>In one hand… in the other hand</em> · <span class='x'>✗</span> <em>By one side… by the other side</em> → <span class='ok'>✓</span> <em><b>On</b> the one hand… <b>on</b> the other hand</em>. Y termina con tu propia postura; un público de Estados Unidos espera que tomes partido después de mostrar los dos lados.",
          ],
          tags: ["idiom", "error"],
        },
        {
          q: "Eventually",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "In the end; after some time. It describes something that does happen, only later.",
            "Al final; después de un tiempo. Describe algo que sí pasa, solo que más adelante.",
          ],
          ex: "We struggled for a year, but <em>eventually</em> the new process paid off.",
          trap: [
            "It belongs in the last step of a timeline, and it is not <em>eventualmente</em>. <span class='x'>✗</span> <em>Eventually we could add a second shift</em> (meaning perhaps) commits you to it in front of the room. → <span class='ok'>✓</span> <em>We <b>might</b> add a second shift <b>at some point</b></em>.",
            "Va en el último paso de una línea de tiempo, y no es <em>eventualmente</em>. <span class='x'>✗</span> <em>Eventually we could add a second shift</em> (queriendo decir quizá) te compromete a hacerlo frente a toda la sala. → <span class='ok'>✓</span> <em>We <b>might</b> add a second shift <b>at some point</b></em>.",
          ],
          tags: ["falsefriend", "error"],
        },
      ],
    },
    {
      title: ["Sounding Dynamic", "Cómo sonar dinámico"],
      rule: [
        "Being dynamic is not about volume or personality. It is variation: in speed, in pitch, in silence, and between the general statement and the concrete picture. These are the words coaches and colleagues use to describe it.",
        "Ser dinámico no es cuestión de volumen ni de personalidad. Es variación: de velocidad, de tono, de silencios, y entre la afirmación general y la imagen concreta. Estas son las palabras con las que coaches y colegas lo describen.",
      ],
      items: [
        {
          q: "Pause",
          a: [
            "A short, deliberate silence before or after an important idea.",
            "Silencio breve y deliberado antes o después de una idea importante.",
          ],
          ex: "Take a <em>pause</em> after the number and let it sink in.",
          note: [
            "The cheapest way to sound confident. Two seconds feel endless to the speaker and natural to the audience. Verb and noun: <em><b>Pause</b> for a second</em>, <em>take a <b>pause</b></em>.",
            "Es la forma más barata de sonar seguro. Dos segundos se le hacen eternos a quien habla y naturales al público. Es verbo y sustantivo: <em><b>Pause</b> for a second</em>, <em>take a <b>pause</b></em>.",
          ],
          tags: ["core"],
        },
        {
          q: "Emphasis",
          a: [
            "Extra force given to a word or an idea to show that it matters most.",
            "Fuerza adicional que le das a una palabra o a una idea para mostrar que es la que más importa.",
          ],
          ex: "Put the <em>emphasis</em> on the result, not on how hard the team worked.",
          trap: [
            "The verb takes a direct object: <span class='x'>✗</span> <em>I want to emphasize in the deadline</em> · <span class='x'>✗</span> <em>make emphasis in</em> → <span class='ok'>✓</span> <em>I want to <b>emphasize the deadline</b></em> · <span class='ok'>✓</span> <em><b>put the emphasis on</b> the deadline</em>. In speech, English shows it by stressing one word louder and longer: <em>We need it <b>this</b> week.</em>",
            "El verbo lleva objeto directo: <span class='x'>✗</span> <em>I want to emphasize in the deadline</em> · <span class='x'>✗</span> <em>make emphasis in</em> → <span class='ok'>✓</span> <em>I want to <b>emphasize the deadline</b></em> · <span class='ok'>✓</span> <em><b>put the emphasis on</b> the deadline</em>. Al hablar, el inglés lo marca acentuando una palabra con más fuerza y duración: <em>We need it <b>this</b> week.</em>",
          ],
          tags: ["core", "error"],
        },
        {
          q: "Pace",
          a: ["The speed at which you speak.", "La velocidad a la que hablas."],
          ex: "Slow your <em>pace</em> when you get to the recommendation.",
          note: [
            "Nerves speed everyone up, and speed makes an accent harder to follow. Slowing down on the key sentence is the fastest way to be understood. Verb: <em><b>Pace yourself</b></em>.",
            "Los nervios aceleran a cualquiera, y la velocidad hace que un acento sea más difícil de seguir. Bajar la velocidad en la frase clave es la manera más rápida de que te entiendan. Como verbo: <em><b>Pace yourself</b></em>.",
          ],
          tags: ["core"],
        },
        {
          q: "Pitch",
          a: ["How high or low your voice sounds.", "Qué tan aguda o grave suena tu voz."],
          ex: "Her <em>pitch</em> drops at the end of a sentence, which makes her sound certain.",
          trap: [
            "When you are unsure of your English, your voice tends to rise at the end, as if asking for approval; in American English a statement ends <b>down</b>. <span class='x'>✗</span> <em>We should cancel the order?</em> ↗ (heard as a question or a doubt) → <span class='ok'>✓</span> <em>We should cancel the order.</em> ↘ The rising habit has a name: <b>uptalk</b>.",
            "Cuando no te sientes seguro de tu inglés, la voz tiende a subir al final, como pidiendo aprobación; en inglés americano una afirmación termina hacia <b>abajo</b>. <span class='x'>✗</span> <em>We should cancel the order?</em> ↗ (se oye como pregunta o como duda) → <span class='ok'>✓</span> <em>We should cancel the order.</em> ↘ Ese hábito de subir tiene nombre: <b>uptalk</b>.",
          ],
          tags: ["error"],
        },
        {
          q: "Vocal variety",
          a: [
            "Deliberate changes in speed, volume and tone that keep a listener's attention.",
            "Cambios deliberados de velocidad, volumen y tono que mantienen la atención de quien te escucha.",
          ],
          ex: "Add some <em>vocal variety</em> and the same content will sound twice as interesting.",
          note: [
            "The simplest version: say the background a little faster and the main point slower and lower. That single change is most of what people mean by a dynamic speaker.",
            "La versión más sencilla: di los antecedentes un poco más rápido y la idea principal más despacio y con voz más grave. Ese solo cambio es casi todo lo que la gente quiere decir con un orador dinámico.",
          ],
          tags: [],
        },
        {
          q: "Monotone",
          a: [
            "A flat voice that stays on one note and one speed from beginning to end.",
            "Voz plana que se queda en una sola nota y una sola velocidad de principio a fin.",
          ],
          ex: "He knows the material, but he delivers it in a <em>monotone</em>.",
          note: [
            "Noun and adjective: <em>in a monotone</em>, <em>a monotone voice</em>. It often appears when someone concentrates hard on grammar in a second language. Knowing your structure frees attention for your voice.",
            "Es sustantivo y adjetivo: <em>in a monotone</em>, <em>a monotone voice</em>. Aparece mucho cuando alguien se concentra demasiado en la gramática de un segundo idioma. Tener clara tu estructura te libera atención para la voz.",
          ],
          tags: [],
        },
        {
          q: "Eye contact",
          a: [
            "Looking directly at the people you are speaking to.",
            "Ver directamente a las personas a las que les estás hablando.",
          ],
          ex: "Make <em>eye contact</em> with one person per sentence instead of scanning the room.",
          trap: [
            "The verb is <b>make</b> or <b>keep</b>, and the noun is uncountable: <span class='x'>✗</span> <em>do eye contact</em> · <span class='x'>✗</span> <em>visual contact</em> · <span class='x'>✗</span> <em>an eye contact</em> → <span class='ok'>✓</span> <em><b>make eye contact</b></em>. On video, that means looking at the camera, not at the faces on the screen.",
            "El verbo es <b>make</b> o <b>keep</b>, y el sustantivo no se cuenta: <span class='x'>✗</span> <em>do eye contact</em> · <span class='x'>✗</span> <em>visual contact</em> · <span class='x'>✗</span> <em>an eye contact</em> → <span class='ok'>✓</span> <em><b>make eye contact</b></em>. En video, eso quiere decir ver a la cámara, no las caras de la pantalla.",
          ],
          tags: ["core", "error"],
        },
        {
          q: "To project",
          a: [
            "To send your voice out so that it carries clearly to the back of the room without shouting.",
            "Lanzar tu voz para que llegue con claridad hasta el fondo de la sala sin gritar.",
          ],
          ex: "There's no microphone, so you'll need <em>to project</em>.",
          note: [
            "If people cannot hear you they say <em>Could you <b>speak up</b>?</em>, never <em>speak stronger</em>. The word also covers the impression you give: <em>She <b>projects</b> confidence</em>.",
            "Si no te oyen, te dicen <em>Could you <b>speak up</b>?</em>, nunca <em>speak stronger</em>. La palabra también abarca la impresión que das: <em>She <b>projects</b> confidence</em>.",
          ],
          tags: [],
        },
        {
          q: "Energy",
          a: [
            "The liveliness and conviction that an audience feels coming from a speaker.",
            "La vitalidad y la convicción que el público siente que vienen de quien habla.",
          ],
          ex: "Bring a little more <em>energy</em> to the opening and the rest will follow.",
          trap: [
            "When you describe your own enthusiasm: <span class='x'>✗</span> <em>I'm very exciting about this project</em> → <span class='ok'>✓</span> <em>I'm very <b>excited</b> about this project</em>. The <b>-ing</b> form describes the thing; the <b>-ed</b> form describes how you feel. Same pattern: <b>interested</b> / <b>interesting</b>, <b>bored</b> / <b>boring</b>.",
            "Cuando describes tu propio entusiasmo: <span class='x'>✗</span> <em>I'm very exciting about this project</em> → <span class='ok'>✓</span> <em>I'm very <b>excited</b> about this project</em>. La forma con <b>-ing</b> describe la cosa; la forma con <b>-ed</b> describe cómo te sientes. Mismo patrón: <b>interested</b> / <b>interesting</b>, <b>bored</b> / <b>boring</b>.",
          ],
          tags: ["error"],
        },
        {
          q: "Vivid verbs",
          a: [
            "Specific action words that create a picture, used in place of general ones such as do, make, have or get.",
            "Palabras de acción específicas que crean una imagen, usadas en lugar de las generales como <em>do</em>, <em>make</em>, <em>have</em> o <em>get</em>.",
          ],
          ex: "Use <em>vivid verbs</em> when you tell the story: we slashed, we trimmed, we doubled.",
          note: [
            "Spanish business style leans on a general verb plus a noun; English prefers one strong verb. <em>We made an analysis of</em> → <em>We <b>analyzed</b></em>. <em>We did an increase in</em> → <em>We <b>grew</b></em> or <em>We <b>boosted</b></em>.",
            "El estilo de negocios en español se apoya en un verbo general más un sustantivo; el inglés prefiere un solo verbo fuerte. <em>We made an analysis of</em> → <em>We <b>analyzed</b></em>. <em>We did an increase in</em> → <em>We <b>grew</b></em> o <em>We <b>boosted</b></em>.",
          ],
          tags: [],
        },
        {
          q: "A concrete example",
          a: [
            "One specific, real case — a client, a date, a number — that makes an abstract statement believable.",
            "Un caso específico y real, con un cliente, una fecha o un número, que hace creíble una afirmación abstracta.",
          ],
          ex: "Give me <em>a concrete example</em> of a customer who had that problem.",
          note: [
            "The phrase you will be asked for most in a US meeting: <em>Can you give me a concrete example?</em> Keep two or three recent ones ready and you can answer almost any question with one of them.",
            "Es lo que más te van a pedir en una junta en Estados Unidos: <em>Can you give me a concrete example?</em> Ten listos dos o tres recientes y vas a poder contestar casi cualquier pregunta con alguno.",
          ],
          tags: [],
        },
        {
          q: '"Picture this."',
          a: [
            "An opener that asks listeners to imagine a scene, pulling them into a story.",
            "Entrada que les pide a quienes te escuchan imaginar una escena y los mete en una historia.",
          ],
          ex: "<em>Picture this: it's Friday at six, the truck is at the border, and the paperwork is wrong.</em>",
          note: [
            "Follow it with present-tense details, as in the example; the present makes the scene feel live. Use it once in a talk. Also <em>Imagine this</em> and <em>Think about the last time you…</em>",
            "Enseguida da detalles en presente, como en el ejemplo; el presente hace que la escena se sienta en vivo. Úsala una sola vez por plática. También <em>Imagine this</em> y <em>Think about the last time you…</em>",
          ],
          tags: ["idiom"],
        },
        {
          q: '"Here\'s what happened."',
          a: [
            "An opener that announces a short true story is about to begin.",
            "Entrada que anuncia que va a empezar una historia breve y real.",
          ],
          ex: "<em>We almost lost that account last year. Here's what happened.</em>",
          note: [
            "Stories are told in the simple past: <em>The client called. We flew out. We fixed it.</em> Short sentences, one action each. A thirty-second story is remembered long after the slide is forgotten.",
            "Las historias se cuentan en pasado simple: <em>The client called. We flew out. We fixed it.</em> Frases cortas, una acción en cada una. Una historia de medio minuto se recuerda mucho después de que se olvidó la diapositiva.",
          ],
          tags: [],
        },
        {
          q: "Contrast",
          a: [
            "Setting two opposite ideas side by side so that each one becomes sharper.",
            "Poner dos ideas opuestas una junto a la otra para que cada una se vea más nítida.",
          ],
          ex: "Use <em>contrast</em>: this isn't a cost problem, it's a timing problem.",
          note: [
            "The most quotable sentence pattern in English: <em>It's not X, it's Y</em>. Others: <em>Last year we reacted; this year we plan</em>, <em>Less talk, more testing</em>. Stress the two opposed words.",
            "Es el patrón de frase más citable del inglés: <em>It's not X, it's Y</em>. Otros: <em>Last year we reacted; this year we plan</em>, <em>Less talk, more testing</em>. Acentúa las dos palabras opuestas.",
          ],
          tags: [],
        },
        {
          q: "Repetition",
          a: [
            "Saying a key word or phrase more than once on purpose so that it stays in the listener's memory.",
            "Decir a propósito una palabra o frase clave más de una vez para que se quede en la memoria de quien te escucha.",
          ],
          ex: "A little <em>repetition</em> helps: one team, one plan, one deadline.",
          note: [
            "Spanish style avoids repeating a word and reaches for a synonym; spoken English does the opposite. Changing the word makes listeners wonder whether you mean something different.",
            "El estilo en español evita repetir una palabra y busca un sinónimo; el inglés hablado hace lo contrario. Cambiar la palabra hace que quien te escucha dude si te refieres a otra cosa.",
          ],
          tags: [],
        },
      ],
    },
    {
      title: ["Common On-the-Spot Moments", "Momentos típicos en los que te toca hablar"],
      rule: [
        "The same handful of situations come up again and again: introduce yourself, give an update, say a few words, tell us what you think. Each one has an expected length and a few set phrases, and most are shorter than you fear.",
        "Las mismas situaciones se repiten una y otra vez: preséntate, danos un avance, di unas palabras, dinos qué opinas. Cada una tiene una duración esperada y unas cuantas frases hechas, y casi todas son más cortas de lo que temes.",
      ],
      items: [
        {
          q: "Say a few words",
          a: [
            "To make a short, informal speech, usually of a minute or two, at a gathering.",
            "Dar un discurso corto e informal, por lo general de uno o dos minutos, en una reunión de personas.",
          ],
          ex: "Before we eat, I'd like to ask Carla to <em>say a few words</em>.",
          note: [
            "Take the phrase literally: brief is the whole expectation. Thank someone, tell one specific story, end with a wish. Going past two minutes is the only real way to do it badly.",
            "Tómate la frase al pie de la letra: lo único que se espera es brevedad. Agradece a alguien, cuenta una anécdota específica y cierra con un buen deseo. Pasarte de dos minutos es la única manera real de hacerlo mal.",
          ],
          tags: ["core", "idiom"],
        },
        {
          q: '"For those of you who don\'t know me…"',
          a: [
            "The standard opening for introducing yourself to a group in which some people already know you.",
            "La entrada de siempre para presentarte ante un grupo en el que algunos ya te conocen.",
          ],
          ex: "<em>For those of you who don't know me, I'm Jorge, and I run the Monterrey plant.</em>",
          note: [
            "Then give three things at most: name, role and why you are in this meeting. <span class='x'>✗</span> <em>I present myself</em> · <span class='x'>✗</span> <em>I introduce me</em> → <span class='ok'>✓</span> <em>Let me <b>introduce myself</b></em>.",
            "Luego da tres datos como máximo: nombre, puesto y por qué estás en esta junta. <span class='x'>✗</span> <em>I present myself</em> · <span class='x'>✗</span> <em>I introduce me</em> → <span class='ok'>✓</span> <em>Let me <b>introduce myself</b></em>.",
          ],
          tags: ["core", "error"],
        },
        {
          q: '"Please join me in welcoming…"',
          a: [
            "The closing line of a speaker introduction, which cues the audience to applaud.",
            "La línea final al presentar a un orador, que le da al público la señal para aplaudir.",
          ],
          ex: "<em>Please join me in welcoming our head of product, Dana Whitfield.</em>",
          note: [
            "Say the name <b>last</b>, as in the example; the applause starts on it. A good introduction answers three questions in under a minute: who is this, why this topic, why now.",
            "Di el nombre <b>al final</b>, como en el ejemplo; el aplauso empieza con él. Una buena presentación contesta tres preguntas en menos de un minuto: quién es, por qué este tema y por qué ahora.",
          ],
          tags: [],
        },
        {
          q: '"Here\'s where we stand."',
          a: [
            "An opener for a quick status report on a project or situation.",
            "Entrada para dar un reporte rápido del estado de un proyecto o de una situación.",
          ],
          ex: "<em>Here's where we stand: design is done, testing starts Monday, and we launch on the fifteenth.</em>",
          note: [
            "The verb for <em>dar un avance</em> is <b>give</b>: <em>Can you <b>give us an update</b>?</em> And you update a person <b>on</b> a topic: <em>Let me <b>update you on</b> the audit</em>, never <em>actualize</em>.",
            "El verbo para dar un avance es <b>give</b>: <em>Can you <b>give us an update</b>?</em> Y se dice update a alguien <b>on</b> un tema: <em>Let me <b>update you on</b> the audit</em>, nunca <em>actualize</em>.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"We\'re on track."',
          a: [
            "A short way to report that work is progressing as planned and will meet its deadline.",
            "Forma corta de reportar que el trabajo avanza según lo planeado y va a cumplir su fecha.",
          ],
          ex: "<em>We're on track to finish by the end of the month.</em>",
          note: [
            "The full set: <b>on track</b>, <b>ahead of schedule</b>, <b>behind schedule</b>, <b>at risk</b>. In a US team, <em>We're a little behind</em> said early earns trust; said late, it costs it.",
            "El juego completo: <b>on track</b>, <b>ahead of schedule</b>, <b>behind schedule</b>, <b>at risk</b>. En un equipo de Estados Unidos, decir <em>We're a little behind</em> a tiempo genera confianza; decirlo tarde la quita.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"I\'d like to propose a toast."',
          a: [
            "The line that asks a group to raise their glasses in honor of a person or an achievement.",
            "La frase que le pide a un grupo levantar su copa en honor de una persona o de un logro.",
          ],
          ex: "<em>I'd like to propose a toast to the team that made this launch possible.</em>",
          trap: [
            "<span class='x'>✗</span> <em>I want to make a cheers</em> · <span class='x'>✗</span> <em>Let's do a toast for Ana</em> → <span class='ok'>✓</span> <em>I'd like to <b>propose a toast to</b> Ana</em> · <span class='ok'>✓</span> <em>Let's <b>raise a glass to</b> Ana</em>. The preposition is <b>to</b>. Everyone answers with <b>Cheers!</b>; <em>Health!</em> is not said.",
            "<span class='x'>✗</span> <em>I want to make a cheers</em> · <span class='x'>✗</span> <em>Let's do a toast for Ana</em> → <span class='ok'>✓</span> <em>I'd like to <b>propose a toast to</b> Ana</em> · <span class='ok'>✓</span> <em>Let's <b>raise a glass to</b> Ana</em>. La preposición es <b>to</b>. Todos contestan <b>Cheers!</b>; <em>Health!</em> no se dice.",
          ],
          tags: ["idiom", "error"],
        },
        {
          q: '"Here\'s to…"',
          a: [
            "The short formula that ends a toast and names what everyone is drinking to.",
            "La fórmula corta que cierra un brindis y dice por qué o por quién brindan todos.",
          ],
          ex: "<em>Here's to ten more years of working together.</em>",
          note: [
            "Followed by a noun or an <b>-ing</b> verb: <em>Here's to <b>the team</b></em>, <em>Here's to <b>finishing</b> on time</em>. A complete business toast is three sentences: the occasion, one true compliment, and this line.",
            "Va seguida de un sustantivo o de un verbo con <b>-ing</b>: <em>Here's to <b>the team</b></em>, <em>Here's to <b>finishing</b> on time</em>. Un brindis de negocios completo son tres frases: la ocasión, un elogio sincero y esta línea.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"It was a team effort."',
          a: [
            "A gracious reply to public thanks or praise that shares the credit with others.",
            "Respuesta amable a un agradecimiento o elogio en público, que comparte el mérito con los demás.",
          ],
          ex: "<em>Thank you — it was a team effort, and Luis in particular carried the last two weeks.</em>",
          trap: [
            "Start with <em>Thank you</em>. Rejecting the praise is modest in Spanish and awkward in English: <span class='x'>✗</span> <em>No, no, it was nothing</em> · <span class='x'>✗</span> <em>I only did my job</em> → <span class='ok'>✓</span> <em><b>Thank you</b>, that means a lot</em>, and then share the credit by name.",
            "Empieza con <em>Thank you</em>. Rechazar el elogio es modestia en español e incomoda en inglés: <span class='x'>✗</span> <em>No, no, it was nothing</em> · <span class='x'>✗</span> <em>I only did my job</em> → <span class='ok'>✓</span> <em><b>Thank you</b>, that means a lot</em>, y luego comparte el mérito con nombre y apellido.",
          ],
          tags: ["idiom", "error"],
        },
        {
          q: '"It\'s been a privilege working with you."',
          a: [
            "A warm, professional line for a farewell, addressed to a colleague who is leaving or said by the one who leaves.",
            "Frase cálida y profesional para una despedida, dirigida a un colega que se va o dicha por quien se va.",
          ],
          ex: "<em>It's been a privilege working with you, and this team is better because you were on it.</em>",
          note: [
            "After <b>It's been a privilege</b> or <b>a pleasure</b> the verb takes <b>-ing</b>. A farewell fits past–present–future exactly: how you met, what the person built, a wish for what comes next. Close with <em>We'll miss you</em>.",
            "Después de <b>It's been a privilege</b> o <b>a pleasure</b>, el verbo lleva <b>-ing</b>. Una despedida cabe exacta en pasado, presente y futuro: cómo se conocieron, qué construyó la persona y un deseo para lo que sigue. Cierra con <em>We'll miss you</em>.",
          ],
          tags: [],
        },
        {
          q: '"My take is…"',
          a: [
            "An opener for giving your personal view when someone asks what you think.",
            "Entrada para dar tu punto de vista personal cuando alguien te pregunta qué piensas.",
          ],
          ex: "<em>My take is that we're solving the wrong problem.</em>",
          trap: [
            "When asked <em>What do you think?</em>, the room wants a position, then a reason. <span class='x'>✗</span> <em>In my point of view</em> · <span class='x'>✗</span> <em>I'm agree with everyone</em> · <span class='x'>✗</span> <em>I think yes</em> → <span class='ok'>✓</span> <em><b>From</b> my point of view</em> · <span class='ok'>✓</span> <em><b>I agree</b></em> · <span class='ok'>✓</span> <em><b>I think so</b></em>.",
            "Cuando te preguntan <em>What do you think?</em>, la sala quiere una postura y luego una razón. <span class='x'>✗</span> <em>In my point of view</em> · <span class='x'>✗</span> <em>I'm agree with everyone</em> · <span class='x'>✗</span> <em>I think yes</em> → <span class='ok'>✓</span> <em><b>From</b> my point of view</em> · <span class='ok'>✓</span> <em><b>I agree</b></em> · <span class='ok'>✓</span> <em><b>I think so</b></em>.",
          ],
          tags: ["core", "idiom", "error"],
        },
        {
          q: '"I see it a little differently."',
          a: [
            "A respectful way to introduce a view that departs from what was just said.",
            "Forma respetuosa de introducir una opinión que se aparta de lo que se acaba de decir.",
          ],
          ex: "<em>I see it a little differently — I think the risk is in the schedule, not the budget.</em>",
          note: [
            "Staying silent when you disagree is read in a US meeting as agreement, or as having nothing to add. This line lets you dissent without confronting anyone. Follow it at once with your view and one reason.",
            "Quedarte callado cuando no estás de acuerdo se interpreta en una junta en Estados Unidos como que sí lo estás, o como que no tienes nada que aportar. Esta frase te permite disentir sin confrontar a nadie. Enseguida da tu opinión y una razón.",
          ],
          tags: [],
        },
        {
          q: "Q&A",
          a: [
            "The part of a presentation or meeting when the audience asks and the speaker answers.",
            "La parte de una presentación o de una junta en la que el público pregunta y quien habla contesta.",
          ],
          ex: "We'll save fifteen minutes at the end for <em>Q&A</em>.",
          note: [
            "Pronounced <em>kyoo-and-AY</em>. It is the purest impromptu speaking there is. Three rules: listen to the end, answer the question that was asked, and stop when you have answered it.",
            "Se pronuncia <em>kiu-and-EI</em>. Es la forma más pura de hablar de improviso. Tres reglas: escucha hasta el final, contesta la pregunta que te hicieron y detente cuando ya la contestaste.",
          ],
          tags: [],
        },
        {
          q: "Discuss",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "To talk about a subject seriously and in some detail, in a calm tone.",
            "Hablar de un tema con seriedad y cierto detalle, en un tono tranquilo.",
          ],
          ex: "I'm happy to <em>discuss</em> the pricing model in more detail after the session.",
          trap: [
            "It is not a quarrel, and it takes no preposition. <span class='x'>✗</span> <em>We discussed about that yesterday</em> → <span class='ok'>✓</span> <em>We <b>discussed that</b> yesterday</em>. And telling the room <span class='x'>✗</span> <em>I discussed with my boss</em> (meaning we fought) says only that you talked; the word for that is <b>argued</b>.",
            "No es un pleito, y no lleva preposición. <span class='x'>✗</span> <em>We discussed about that yesterday</em> → <span class='ok'>✓</span> <em>We <b>discussed that</b> yesterday</em>. Y decirle a la sala <span class='x'>✗</span> <em>I discussed with my boss</em> (queriendo decir que se pelearon) solo dice que platicaron; la palabra para eso es <b>argued</b>.",
          ],
          tags: ["falsefriend", "error"],
        },
        {
          q: "Remarks",
          hint: ["(not intervention)", "(no es intervention)"],
          a: [
            "A short spoken contribution or brief speech at a meeting or event.",
            "Participación hablada corta o discurso breve en una junta o en un evento.",
          ],
          ex: "The CEO will make some opening <em>remarks</em>, and then we'll go straight to questions.",
          trap: [
            "Spanish <em>intervención</em> is not English <b>intervention</b>, which is stepping in to stop a problem, medical or personal. <span class='x'>✗</span> <em>Thank you for your intervention</em> → <span class='ok'>✓</span> <em>Thank you for your <b>remarks</b></em> · <span class='ok'>✓</span> <em>Thank you for your <b>comments</b></em>. The verb is <b>make</b>: <em>make a few remarks</em>.",
            "Tu <em>intervención</em> no es <b>intervention</b>, que en inglés es meterse a detener un problema, médico o personal. <span class='x'>✗</span> <em>Thank you for your intervention</em> → <span class='ok'>✓</span> <em>Thank you for your <b>remarks</b></em> · <span class='ok'>✓</span> <em>Thank you for your <b>comments</b></em>. El verbo es <b>make</b>: <em>make a few remarks</em>.",
          ],
          tags: ["falsefriend", "error"],
        },
      ],
    },
    {
      title: ["Recovering and Closing", "Cómo recuperarte y cómo cerrar"],
      rule: [
        "Everyone loses the thread, picks the wrong word or gets a question they cannot answer. What listeners judge is the recovery: say what happened in one calm phrase, fix it and keep going. Then finish on purpose.",
        "A todos se nos va el hilo, elegimos la palabra equivocada o nos hacen una pregunta que no podemos contestar. Lo que el público juzga es la recuperación: di lo que pasó con una frase tranquila, corrígelo y sigue. Y luego termina a propósito.",
      ],
      items: [
        {
          q: '"Where was I?"',
          a: [
            "A light question you ask aloud when an interruption made you forget your place.",
            "Pregunta ligera que haces en voz alta cuando una interrupción te hizo olvidar en qué ibas.",
          ],
          ex: "<em>Sorry about that — where was I? Right, the second quarter.</em>",
          note: [
            "Someone in the room will almost always answer, and that makes them your ally. Say it with a smile. The word order is fixed: <span class='x'>✗</span> <em>Where I was?</em>",
            "Casi siempre alguien de la sala te contesta, y eso lo convierte en tu aliado. Dila con una sonrisa. El orden de las palabras es fijo: <span class='x'>✗</span> <em>Where I was?</em>",
          ],
          tags: ["core", "error"],
        },
        {
          q: '"Let me back up."',
          a: [
            "A phrase for returning to an earlier point because you skipped something the listeners need.",
            "Frase para regresar a un punto anterior porque te saltaste algo que quienes te escuchan necesitan.",
          ],
          ex: "<em>Let me back up — I should explain how the old system worked first.</em>",
          note: [
            "It sounds organized, not confused. <em>Let me go back to the timeline</em> works too when you name the point. Here <b>back up</b> has nothing to do with saving files.",
            "Suena a orden, no a confusión. <em>Let me go back to the timeline</em> también funciona cuando dices a qué punto regresas. Aquí <b>back up</b> no tiene nada que ver con respaldar archivos.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"I lost my train of thought."',
          a: [
            "An honest admission that you forgot what you were about to say.",
            "Forma honesta de admitir que se te olvidó lo que ibas a decir.",
          ],
          ex: "<em>I'm sorry, I lost my train of thought. Give me one second.</em>",
          trap: [
            "<em>Se me fue el hilo</em> and <em>se me fue la onda</em> do not translate literally: <span class='x'>✗</span> <em>The thread went from me</em> · <span class='x'>✗</span> <em>The wave went from me</em> → <span class='ok'>✓</span> <em>I <b>lost my train of thought</b></em>. Then pause, look at your notes and go on; nobody thinks less of you.",
            "<em>Se me fue el hilo</em> y <em>se me fue la onda</em> no se traducen literal: <span class='x'>✗</span> <em>The thread went from me</em> · <span class='x'>✗</span> <em>The wave went from me</em> → <span class='ok'>✓</span> <em>I <b>lost my train of thought</b></em>. Luego haz un silencio, ve tus notas y sigue; nadie piensa menos de ti por eso.",
          ],
          tags: ["idiom", "error"],
        },
        {
          q: '"What I meant to say is…"',
          a: [
            "A phrase for correcting something you said wrongly or unclearly a moment ago.",
            "Frase para corregir algo que dijiste mal o de forma poco clara hace un momento.",
          ],
          ex: "<em>What I meant to say is that the delay is on our side, not the supplier's.</em>",
          note: [
            "Correct the meaning, not the grammar. Stopping mid-sentence to fix a verb tense breaks your flow and nobody needed it. A quick <em>Sorry —</em> plus the right word is enough for small slips.",
            "Corrige el sentido, no la gramática. Detenerte a media frase para arreglar un tiempo verbal te rompe el ritmo y nadie lo necesitaba. Para los errores pequeños basta con un <em>Sorry —</em> y la palabra correcta.",
          ],
          tags: ["core"],
        },
        {
          q: '"Let me rephrase that."',
          a: [
            "An announcement that you are going to say the same idea again in different, better words.",
            "Aviso de que vas a decir la misma idea otra vez con palabras distintas y mejores.",
          ],
          ex: "<em>Let me rephrase that: we're not canceling the project, we're pausing it.</em>",
          note: [
            "Useful when a sentence came out too strong, too vague or too literal from Spanish. It also works for the word you cannot find: describe the idea another way and move on.",
            "Sirve cuando una frase te salió demasiado fuerte, demasiado vaga o demasiado literal del español. También funciona con la palabra que no encuentras: describe la idea de otra manera y sigue adelante.",
          ],
          tags: [],
        },
        {
          q: '"I don\'t have that number in front of me."',
          a: [
            "An honest way to say you cannot give exact data right now, without guessing.",
            "Forma honesta de decir que no puedes dar el dato exacto en este momento, sin adivinar.",
          ],
          ex: "<em>I don't have that number in front of me, but I can send it to you this afternoon.</em>",
          note: [
            "Never invent a figure in front of a US audience; a wrong number is remembered far longer than a missing one. This line plus a time you will deliver the answer is a fully professional reply.",
            "Nunca inventes una cifra frente a un público de Estados Unidos; un número equivocado se recuerda mucho más tiempo que uno que faltó. Esta frase, más la hora en que vas a entregar la respuesta, es una contestación totalmente profesional.",
          ],
          tags: ["core"],
        },
        {
          q: '"I\'ll get back to you."',
          a: [
            "A promise to return later with an answer you cannot give now.",
            "Promesa de regresar más tarde con una respuesta que no puedes dar ahora.",
          ],
          ex: "<em>I'll get back to you on that by end of day tomorrow.</em>",
          trap: [
            "It needs <b>to</b>, and <b>on</b> for the topic: <span class='x'>✗</span> <em>I'll get back you</em> · <span class='x'>✗</span> <em>I return to you</em> → <span class='ok'>✓</span> <em>I'll <b>get back to you on</b> that</em>. Always add when. Without a date it can sound like a polite way of never answering.",
            "Necesita <b>to</b>, y <b>on</b> para el tema: <span class='x'>✗</span> <em>I'll get back you</em> · <span class='x'>✗</span> <em>I return to you</em> → <span class='ok'>✓</span> <em>I'll <b>get back to you on</b> that</em>. Siempre agrega cuándo. Sin fecha puede sonar a una forma cortés de no contestar nunca.",
          ],
          tags: ["core", "idiom", "error"],
        },
        {
          q: '"Let\'s take that offline."',
          a: [
            "A suggestion to continue a topic privately after the meeting because it is too detailed or involves only a few people.",
            "Sugerencia de continuar un tema en privado después de la junta, porque es demasiado detallado o solo les concierne a unos cuantos.",
          ],
          ex: "<em>That's an important point, but let's take that offline so we can finish the agenda.</em>",
          note: [
            "It has nothing to do with the internet. Acknowledge the question first, as in the example, or it sounds like a dismissal. And do follow up; people remember whether the offline conversation happened.",
            "No tiene nada que ver con internet. Primero reconoce la pregunta, como en el ejemplo, o suena a que la estás desechando. Y sí da seguimiento; la gente se acuerda de si esa plática aparte ocurrió o no.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"Does that answer your question?"',
          a: [
            "A check you make at the end of a reply to confirm that the person got what they needed.",
            "Verificación que haces al final de una respuesta para confirmar que la persona obtuvo lo que necesitaba.",
          ],
          ex: "<em>So the short version is two weeks. Does that answer your question?</em>",
          note: [
            "It also gives your answer a clean ending in place of trailing off. Do not ask <em>Did you understand?</em>, which puts the fault on the listener; ask <em>Does that make sense?</em>",
            "También le da a tu respuesta un final limpio, en lugar de irte apagando. No preguntes <em>Did you understand?</em>, que le echa la culpa a quien escucha; pregunta <em>Does that make sense?</em>",
          ],
          tags: [],
        },
        {
          q: '"So, to sum up…"',
          a: [
            "The signal that you are about to restate your main points briefly and finish.",
            "La señal de que vas a repetir brevemente tus puntos principales y terminar.",
          ],
          ex: "<em>So, to sum up: the plan is solid, the timeline is tight, and we need one more hire.</em>",
          note: [
            "Say it only when you really are about to finish; saying it and then talking for three more minutes tests any audience. Alternatives: <em>To wrap up</em>, <em>In short</em>, <em>So, in a nutshell</em>.",
            "Dila solo cuando de verdad vayas a terminar; decirla y luego hablar tres minutos más pone a prueba a cualquier público. Alternativas: <em>To wrap up</em>, <em>In short</em>, <em>So, in a nutshell</em>.",
          ],
          tags: ["core", "idiom"],
        },
        {
          q: "Summarize",
          hint: ["(not resume)", "(no es resume)"],
          a: [
            "To state the main points of something in a short form.",
            "Decir los puntos principales de algo de forma breve.",
          ],
          ex: "Let me <em>summarize</em> what we agreed on before everyone drops off the call.",
          trap: [
            "Spanish <em>resumir</em> is not English <b>resume</b>, which means to start again after a break. <span class='x'>✗</span> <em>Let me resume the meeting in two points</em> → <span class='ok'>✓</span> <em>Let me <b>summarize</b> the meeting in two points</em>. Also <span class='x'>✗</span> <em>in resume</em> → <span class='ok'>✓</span> <em><b>in summary</b></em> or <em><b>in short</b></em>.",
            "<em>Resumir</em> no es <b>resume</b>, que en inglés quiere decir retomar algo después de una interrupción. <span class='x'>✗</span> <em>Let me resume the meeting in two points</em> → <span class='ok'>✓</span> <em>Let me <b>summarize</b> the meeting in two points</em>. También <span class='x'>✗</span> <em>in resume</em> → <span class='ok'>✓</span> <em><b>in summary</b></em> o <em><b>in short</b></em>.",
          ],
          tags: ["falsefriend", "error"],
        },
        {
          q: '"If you remember one thing…"',
          a: [
            "A closing line that tells listeners which single idea matters most.",
            "Frase de cierre que les dice a quienes te escuchan cuál es la idea que más importa.",
          ],
          ex: "<em>If you remember one thing from today, remember this: call the customer before the customer calls you.</em>",
          note: [
            "It works because you did the listener's job for them. Follow it with one sentence short enough to repeat, then stop talking. Also <em>If you take away one thing…</em>",
            "Funciona porque le hiciste la tarea a quien te escucha. Enseguida di una sola oración lo bastante corta para repetirse, y deja de hablar. También <em>If you take away one thing…</em>",
          ],
          tags: ["core"],
        },
        {
          q: '"The bottom line is…"',
          a: [
            "An opener for the single most important conclusion, once the details are set aside.",
            "Entrada para la conclusión más importante, una vez que se dejan de lado los detalles.",
          ],
          ex: "<em>The bottom line is that we can't hit that date without more people.</em>",
          note: [
            "From accounting: the last line of a financial statement, where the profit or loss appears. If you notice yourself rambling, this phrase is your exit: say it, give one sentence and stop.",
            "Viene de la contabilidad: el último renglón de un estado financiero, donde aparece la utilidad o la pérdida. Si te das cuenta de que ya te fuiste por las ramas, esta frase es tu salida: dila, da una oración y detente.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"I\'ll leave it there."',
          a: [
            "A clean way to announce that you are done speaking and to hand the floor back.",
            "Forma limpia de avisar que ya terminaste de hablar y de devolver la palabra.",
          ],
          ex: "<em>Those are my three concerns, and I'll leave it there.</em>",
          trap: [
            "Endings translated from Spanish sound abrupt or odd: <span class='x'>✗</span> <em>That's all</em> · <span class='x'>✗</span> <em>It would be all from my part</em> · <span class='x'>✗</span> <em>And yes, that's it</em> → <span class='ok'>✓</span> <em><b>I'll leave it there</b></em> · <span class='ok'>✓</span> <em><b>That's it from me</b></em> · <span class='ok'>✓</span> <em><b>I'll stop there</b> and take questions</em>.",
            "Los cierres traducidos del español suenan bruscos o raros: <span class='x'>✗</span> <em>That's all</em> · <span class='x'>✗</span> <em>It would be all from my part</em> · <span class='x'>✗</span> <em>And yes, that's it</em> → <span class='ok'>✓</span> <em><b>I'll leave it there</b></em> · <span class='ok'>✓</span> <em><b>That's it from me</b></em> · <span class='ok'>✓</span> <em><b>I'll stop there</b> and take questions</em>.",
          ],
          tags: ["idiom", "error"],
        },
      ],
    },
  ],
  cheat: [
    [
      ["ANSWER FIRST", "PRIMERO LA RESPUESTA"],
      [
        "Give the conclusion in your first sentence and the reasons after it. <em>The short answer is yes.</em>",
        "Da la conclusión en tu primera oración y las razones después. <em>The short answer is yes.</em>",
      ],
    ],
    [
      ["PREP", "PREP"],
      [
        "<b>Point, Reason, Example, Point</b> turns any opinion into a complete answer in under a minute.",
        "<b>Point, Reason, Example, Point</b> convierte cualquier opinión en una respuesta completa en menos de un minuto.",
      ],
    ],
    [
      ["PAUSE, DON'T FILL", "SILENCIO, NO MULETILLAS"],
      [
        "A two-second silence sounds confident; <em>este…</em> and <em>o sea…</em> do not. <em>Let me think about that for a second.</em>",
        "Un silencio de dos segundos suena a seguridad; <em>este…</em> y <em>o sea…</em> no. <em>Let me think about that for a second.</em>",
      ],
    ],
    [
      ["THREE THINGS", "TRES COSAS"],
      [
        "Announce the number, then deliver: <em>First… second… and finally…</em> Never <em>at first</em> or <em>firstable</em>.",
        "Anuncia el número y luego cumple: <em>First… second… and finally…</em> Nunca <em>at first</em> ni <em>firstable</em>.",
      ],
    ],
    [
      ["STATEMENTS GO DOWN", "LAS AFIRMACIONES BAJAN"],
      [
        "End a statement with your voice falling. A rising ending turns your recommendation into a question.",
        "Termina una afirmación con la voz hacia abajo. Un final hacia arriba convierte tu recomendación en una pregunta.",
      ],
    ],
    [
      ["ACTUALLY ≠ ACTUALMENTE", "ACTUALLY ≠ ACTUALMENTE"],
      [
        "<b>Actually</b> corrects; for time say <b>currently</b> or <b>right now</b>. And <b>eventually</b> means in the end, not maybe.",
        "<b>Actually</b> corrige; para tiempo di <b>currently</b> o <b>right now</b>. Y <b>eventually</b> quiere decir al final, no tal vez.",
      ],
    ],
    [
      ["DON'T GUESS A NUMBER", "NO ADIVINES UN NÚMERO"],
      [
        "<em>I don't have that in front of me — I'll get back to you by Friday.</em> Always with <b>to</b>, always with a date.",
        "<em>I don't have that in front of me — I'll get back to you by Friday.</em> Siempre con <b>to</b>, siempre con fecha.",
      ],
    ],
    [
      ["LAND IT AND STOP", "ATERRIZA Y DETENTE"],
      [
        "Close on purpose: <em>So, to sum up…</em> or <em>If you remember one thing…</em> — one sentence, then silence.",
        "Cierra a propósito: <em>So, to sum up…</em> o <em>If you remember one thing…</em>: una oración y luego silencio.",
      ],
    ],
  ],
};
