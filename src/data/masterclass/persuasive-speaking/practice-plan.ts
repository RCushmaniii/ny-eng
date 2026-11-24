import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "practice-plan",
  slugEs: "plan-de-practica",
  title: [
    "The 30-Day Practice Plan and Cheat Sheet",
    "El Plan de Práctica de 30 Días y la Guía Rápida",
  ],
  summary: [
    "Ten minutes a day for four weeks, a simple way to review your own recordings, and the whole course on one page.",
    "Diez minutos diarios durante cuatro semanas, una forma sencilla de revisar tus propias grabaciones y todo el curso en una página.",
  ],
  description: [
    "A realistic 30-day speaking plan in English: ten minutes a day, how to review your own recordings, and every frame from the course on one page.",
    "Un plan realista de 30 días para hablar en inglés: diez minutos diarios, cómo revisar tus grabaciones y todas las frases del curso en una página.",
  ],
  minutes: 15,
  blocks: [
    {
      t: "p",
      html: [
        "You now have every piece: three small jobs, three corners of the triangle, a way to deliver, and a structure for three minutes. So far that is knowledge. It becomes a skill through repetitions out loud, and the next thirty days are where that happens. This lesson is the plan, the way to review yourself, and a one-page summary to keep open while you practice.",
        "Ya tienes todas las piezas: tres pasos pequeños, tres esquinas del triángulo, una forma de decirlo y una estructura para tres minutos. Hasta aquí eso es conocimiento. Se vuelve habilidad con repeticiones en voz alta, y eso ocurre en los próximos treinta días. Esta lección es el plan, la forma de revisarte y un resumen de una página para tener abierto mientras practicas.",
      ],
    },
    {
      t: "idea",
      title: ["Ten minutes, out loud, recorded", "Diez minutos, en voz alta, con grabación"],
      html: [
        "Reading about speaking does not change how you speak. Short daily turns do: think, speak, listen back, name one strength and one thing to try next, and go again. Ten minutes is small enough to survive a real work week, and a plan you finish is the only kind that helps.",
        "Leer sobre cómo hablar no cambia tu forma de hablar. Los turnos cortos de todos los días sí: piensa, habla, escúchate, nombra una fortaleza y una cosa por intentar, y repite. Diez minutos son lo bastante pocos para sobrevivir una semana real de trabajo, y un plan que terminas es el único que sirve.",
      ],
    },
    {
      t: "framework",
      title: ["The daily ten minutes", "Los diez minutos diarios"],
      lead: [
        "The same five steps every day. Only the prompt changes.",
        "Los mismos cinco pasos todos los días. Solo cambia el tema.",
      ],
      steps: [
        {
          label: ["Think (1 minute)", "Piensa (1 minuto)"],
          html: [
            "Read the day's prompt. Write four keywords at most, in English. No sentences; if you write sentences you will read them.",
            "Lee el tema del día. Escribe cuatro palabras clave como máximo, en inglés. Sin oraciones; si escribes oraciones, las vas a leer.",
          ],
        },
        {
          label: ["Speak and record (1 to 3 minutes)", "Habla y grábate (1 a 3 minutos)"],
          html: [
            "Use the voice recorder on your phone. Stand up. Do not stop and restart; if you lose a word, use a rescue line and continue.",
            "Usa la grabadora de voz de tu celular. Ponte de pie. No te detengas para volver a empezar; si pierdes una palabra, usa una frase de rescate y sigue.",
          ],
        },
        {
          label: ["Listen once (1 to 3 minutes)", "Escúchate una vez (1 a 3 minutos)"],
          html: [
            "All the way through, without pausing. Listen the way your audience would, for the message first and the English second.",
            "De principio a fin, sin pausar. Escucha como lo haría tu audiencia: primero el mensaje y después el inglés.",
          ],
        },
        {
          label: ["Write two lines (1 minute)", "Escribe dos líneas (1 minuto)"],
          html: [
            "One strength and one thing to try next. Both must be something you can hear on the recording.",
            "Una fortaleza y una cosa por intentar. Las dos deben ser algo que se alcance a oír en la grabación.",
          ],
          say: "Strength: my claim was in the first sentence. Next: pause after the number.",
        },
        {
          label: ["Second take (1 to 3 minutes)", "Segunda toma (1 a 3 minutos)"],
          html: [
            "Same prompt, and change only the one thing. Keep this take and delete the first.",
            "El mismo tema, y cambia solo esa cosa. Quédate con esta toma y borra la primera.",
          ],
        },
      ],
    },
    {
      t: "framework",
      title: ["The 30-day plan", "El plan de 30 días"],
      lead: [
        "Each week adds a corner of the course and ends with a turn on real work.",
        "Cada semana suma una parte del curso y termina con un turno sobre trabajo real.",
      ],
      steps: [
        {
          label: [
            "Week 1 (days 1 to 7): observe and infer",
            "Semana 1 (días 1 a 7): observar e inferir",
          ],
          html: [
            "<b>Days 1 to 3, observe.</b> Thirty seconds on what is in front of you: your desk, the view from a window, a photo on your phone, a chart from work. Facts only, in one order you choose and keep. <b>Days 4 to 6, infer.</b> The same kind of scene, forty seconds: three claims, each with what you see. <b>Day 7.</b> A 60-second status update on real work: the facts first, then one conclusion with its evidence.",
            "<b>Días 1 a 3, observar.</b> Treinta segundos sobre lo que tienes enfrente: tu escritorio, la vista desde una ventana, una foto en tu celular, una gráfica del trabajo. Solo hechos, en un orden que eliges y mantienes. <b>Días 4 a 6, inferir.</b> El mismo tipo de escena, cuarenta segundos: tres afirmaciones, cada una con lo que ves. <b>Día 7.</b> Un reporte de avance de 60 segundos sobre trabajo real: primero los hechos y luego una conclusión con su evidencia.",
          ],
          say: "I conclude ___ because I see ___.",
        },
        {
          label: [
            "Week 2 (days 8 to 14): narrate and ethos",
            "Semana 2 (días 8 a 14): narrar y ethos",
          ],
          html: [
            "<b>Days 8 to 10, narrate.</b> One moment from your day in 45 seconds: before, after, and the feeling with its cause. <b>Days 11 to 13, ethos.</b> Your 20-second introduction for three different audiences: a new client, a senior executive, a new team. <b>Day 14.</b> A customer story or a lesson learned in 60 seconds, opening with one line on why you are the person to tell it.",
            "<b>Días 8 a 10, narrar.</b> Un momento de tu día en 45 segundos: antes, después y la emoción con su causa. <b>Días 11 a 13, ethos.</b> Tu presentación de 20 segundos para tres audiencias distintas: un cliente nuevo, alguien de alta dirección, un equipo nuevo. <b>Día 14.</b> Una historia de un cliente o una lección aprendida en 60 segundos, abriendo con una línea sobre por qué eres tú quien la cuenta.",
          ],
          say: "Earlier that day, ___. Right now, ___. In the end, ___.",
        },
        {
          label: [
            "Week 3 (days 15 to 21): logos and pathos",
            "Semana 3 (días 15 a 21): logos y pathos",
          ],
          html: [
            "<b>Days 15 to 17, logos.</b> One claim in 60 seconds: claim, reason, evidence, so what. A different real recommendation each day. <b>Days 18 to 20, pathos.</b> The one-person story in 45 seconds, one for each of those three recommendations. <b>Day 21.</b> Join one pair into 90 seconds: claim, evidence, person, ask.",
            "<b>Días 15 a 17, logos.</b> Una afirmación en 60 segundos: claim, reason, evidence, so what. Cada día una recomendación real distinta. <b>Días 18 a 20, pathos.</b> La historia de una persona en 45 segundos, una por cada una de esas tres recomendaciones. <b>Día 21.</b> Une un par en 90 segundos: afirmación, evidencia, persona, petición.",
          ],
          say: "I recommend ___. Here's what I'm basing that on: ___.",
        },
        {
          label: [
            "Week 4 (days 22 to 30): delivery and the full talk",
            "Semana 4 (días 22 a 30): voz y la charla completa",
          ],
          html: [
            "<b>Day 22.</b> Mark your claim and your ask for chunks, stress and pauses, and record them five times. <b>Day 23.</b> Build your three-minute talk on paper, keywords only. <b>Days 24 to 27.</b> One full take a day and one listen; each day, fix one thing. <b>Day 28.</b> Give it to a real person and ask for one strength and one thing to try next. <b>Day 29.</b> Final take. <b>Day 30.</b> Re-record your baseline from lesson 1 and listen to both.",
            "<b>Día 22.</b> Marca tu afirmación y tu petición con grupos, acento y pausas, y grábalas cinco veces. <b>Día 23.</b> Arma tu charla de tres minutos en papel, solo con palabras clave. <b>Días 24 a 27.</b> Una toma completa al día y una escucha; cada día corrige una cosa. <b>Día 28.</b> Dásela a una persona real y pídele una fortaleza y una cosa por intentar. <b>Día 29.</b> Toma final. <b>Día 30.</b> Vuelve a grabar tu punto de partida de la lección 1 y escucha las dos grabaciones.",
          ],
          say: "So here's my ask: ___ by ___.",
        },
      ],
    },
    {
      t: "list",
      items: [
        [
          "<b>Prompt bank, for days when nothing comes to mind.</b> Observe: the room you are in right now.",
          "<b>Banco de temas, para los días en que no se te ocurre nada.</b> Observar: el lugar donde estás en este momento.",
        ],
        [
          "Observe: a dashboard or chart you looked at today, described for someone who cannot see it.",
          "Observar: un tablero o una gráfica que viste hoy, descritos para alguien que no los puede ver.",
        ],
        [
          "Infer: your inbox this morning. What does it tell you about the week ahead, and how do you know?",
          "Inferir: tu bandeja de correo de esta mañana. ¿Qué te dice de la semana que viene, y cómo lo sabes?",
        ],
        [
          "Infer: a competitor's home page. What are they betting on?",
          "Inferir: la página de inicio de un competidor. ¿A qué le están apostando?",
        ],
        [
          "Narrate: the hardest ten minutes of your week.",
          "Narrar: los diez minutos más difíciles de tu semana.",
        ],
        [
          "Ethos: introduce yourself to someone who has never heard of your company.",
          "Ethos: preséntate con alguien que nunca oyó hablar de tu empresa.",
        ],
        [
          "Logos: one thing your team should stop doing.",
          "Logos: una cosa que tu equipo debería dejar de hacer.",
        ],
        [
          "Logos: a purchase you would approve tomorrow if the decision were yours.",
          "Logos: una compra que aprobarías mañana si la decisión fuera tuya.",
        ],
        [
          "Pathos: the person most affected by your team's biggest bottleneck.",
          "Pathos: la persona a la que más le afecta el mayor cuello de botella de tu equipo.",
        ],
        [
          "Full talk: the update you will give in your next real meeting.",
          "Charla completa: el reporte que vas a dar en tu próxima junta real.",
        ],
      ],
    },
    {
      t: "model",
      title: ["A practice log that works", "Una bitácora de práctica que sí funciona"],
      context: [
        "Four entries from one learner's notes. Keep yours in English; it is one more repetition.",
        "Cuatro entradas de las notas de una persona que tomó el curso. Lleva las tuyas en inglés; es una repetición más.",
      ],
      lines: [
        {
          who: "Day 3",
          en: 'Observe, my desk. Strength: I kept one order, left to right. Next: say "there are" for plurals. I said "there is three" twice.',
          note: [
            "Both lines are things you can hear on the recording. Nothing about being good or bad.",
            "Las dos líneas son cosas que se oyen en la grabación. Nada sobre si estuvo bien o mal.",
          ],
        },
        {
          who: "Day 9",
          en: "Narrate, Tuesday's client call. Strength: the feeling had a cause. Next: stay in the past tense. I switched to the present in the middle.",
          note: [
            "The next step is one change, small enough to fix in the second take.",
            "El siguiente paso es un solo cambio, lo bastante chico para corregirlo en la segunda toma.",
          ],
        },
        {
          who: "Day 16",
          en: "Logos, the reporting tool. Strength: claim in the first sentence. Next: one number, not four.",
          note: [
            "The strength is written down too. You need to know what to keep.",
            "La fortaleza también queda escrita. Necesitas saber qué conservar.",
          ],
        },
        {
          who: "Day 25",
          en: "Full talk, take 2. Time: 3:20. Strength: a real pause after the claim. Next: the ask needs a date. Cut the second example to get under 3:10.",
          note: [
            "On full-talk days, log the time. The clock is part of the feedback.",
            "En los días de charla completa, anota el tiempo. El reloj es parte de la retroalimentación.",
          ],
        },
      ],
    },
    {
      t: "h",
      text: ["The whole course on one page", "Todo el curso en una página"],
    },
    {
      t: "phrases",
      title: ["The frames", "Las frases base"],
      items: [
        {
          en: "Facts only.",
          use: [
            "<b>Observe.</b> Say what anyone could verify by looking, in one order.",
            "<b>Observar.</b> Di lo que cualquiera podría verificar con solo mirar, en un solo orden.",
          ],
        },
        {
          en: "Do I see that, or am I concluding it?",
          use: [
            "The check on every sentence of a status report.",
            "La revisión para cada oración de un reporte de avance.",
          ],
        },
        {
          en: "I conclude ___ because I see ___.",
          use: [
            "<b>Infer.</b> Every claim gets its evidence.",
            "<b>Inferir.</b> Cada afirmación con su evidencia.",
          ],
        },
        {
          en: "Before, ___. After, ___. And the feeling: ___.",
          use: [
            "<b>Narrate.</b> One moment, with a feeling that has a cause.",
            "<b>Narrar.</b> Un momento, con una emoción que tiene causa.",
          ],
        },
        {
          en: "Earlier that day… Right now… A minute later… In the end…",
          use: [
            "The stall-breaker when a story stops moving.",
            "El destrabador para cuando una historia se detiene.",
          ],
        },
        {
          en: "I've spent the last ___ years on exactly this problem.",
          use: [
            "<b>Ethos.</b> One sentence on why you, on this topic. Then say what you do not know.",
            "<b>Ethos.</b> Una oración sobre por qué tú, en este tema. Y luego di lo que no sabes.",
          ],
        },
        {
          en: "I recommend ___. The main reason is ___. Here's what I'm basing that on: ___. What that means for us is ___.",
          use: [
            "<b>Logos.</b> Claim, reason, evidence, so what.",
            "<b>Logos.</b> Claim, reason, evidence, so what.",
          ],
        },
        {
          en: "There are three reasons. First, ___. Second, ___. And third, ___.",
          use: [
            "The signpost. Count before you give them.",
            "La señal. Di cuántas son antes de darlas.",
          ],
        },
        {
          en: "Let me tell you about ___.",
          use: [
            "<b>Pathos.</b> One person, one moment, the feeling with its cause, the link.",
            "<b>Pathos.</b> Una persona, un momento, la emoción con su causa, el enlace.",
          ],
        },
        {
          en: "If we do nothing, ___.",
          use: [
            "The stakes: what it costs, to whom, by when.",
            "Lo que está en juego: cuánto cuesta, a quién, para cuándo.",
          ],
        },
        {
          en: "So here's my ask: ___ by ___.",
          use: ["A verb, a number and a date.", "Un verbo, un número y una fecha."],
        },
        {
          en: "One strength, and one thing to try next.",
          use: [
            "The only feedback you give yourself, or ask anyone else for.",
            "La única retroalimentación que te das, o que le pides a alguien más.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: ["When something goes wrong", "Para cuando algo sale mal"],
      items: [
        {
          en: "Let me put that another way.",
          use: ["A tangled sentence.", "Una oración que se enredó."],
        },
        {
          en: "Give me one second.",
          use: ["You need to think. Then silence.", "Necesitas pensar. Y luego, silencio."],
        },
        {
          en: "The word escapes me. It's the thing that ___.",
          use: [
            "A lost word. Describe it and continue.",
            "Una palabra perdida. Descríbela y sigue.",
          ],
        },
        {
          en: "Let me check my notes.",
          use: ["A blank.", "Te quedaste en blanco."],
        },
        {
          en: "The short version is ___.",
          use: [
            "Too much background, or an interruption.",
            "Demasiados antecedentes, o una interrupción.",
          ],
        },
        {
          en: "Let me make sure I understood the question.",
          use: [
            "An unclear question in Q&A.",
            "Una pregunta poco clara en la sesión de preguntas.",
          ],
        },
        {
          en: "The short answer is ___.",
          use: [
            "Any question. Answer in the first sentence, give one support, stop.",
            "Cualquier pregunta. Responde en la primera oración, da un solo respaldo y detente.",
          ],
        },
        {
          en: "I don't know, and I'd rather not guess. I'll get you that by ___.",
          use: ["A question you cannot answer.", "Una pregunta que no puedes responder."],
        },
      ],
    },
    {
      t: "list",
      ordered: true,
      items: [
        [
          "<b>Hook</b> (10 to 15 seconds): a concrete fact or moment.",
          "<b>Gancho</b> (10 a 15 segundos): un hecho o un momento concreto.",
        ],
        [
          "<b>Credibility line</b> (10 seconds): why you, on this topic.",
          "<b>Línea de credibilidad</b> (10 segundos): por qué tú, en este tema.",
        ],
        [
          "<b>Claim</b> (10 to 15 seconds): one sentence, before the thirty-second mark.",
          "<b>Afirmación</b> (10 a 15 segundos): una oración, antes del segundo treinta.",
        ],
        [
          "<b>Three reasons</b> (60 to 75 seconds): one piece of evidence each, one number with a comparison.",
          "<b>Tres razones</b> (60 a 75 segundos): una evidencia para cada una, un número con su comparación.",
        ],
        [
          "<b>One story</b> (40 to 45 seconds): one person, one moment.",
          "<b>Una historia</b> (40 a 45 segundos): una persona, un momento.",
        ],
        [
          "<b>The ask</b> (15 to 20 seconds): a verb, a number, a date.",
          "<b>La petición</b> (15 a 20 segundos): un verbo, un número, una fecha.",
        ],
        [
          "<b>The close</b> (10 seconds): echo the hook, then stop.",
          "<b>El cierre</b> (10 segundos): retoma el gancho y detente.",
        ],
      ],
    },
    {
      t: "list",
      items: [
        [
          "<b>Chunk:</b> three to seven words, one breath.",
          "<b>Chunk:</b> de tres a siete palabras, una respiración.",
        ],
        [
          "<b>Stress:</b> one word per group, made longer.",
          "<b>Stress:</b> una palabra por grupo, más larga.",
        ],
        [
          "<b>Drop:</b> statements end with the voice going down.",
          "<b>Drop:</b> las afirmaciones terminan con la voz hacia abajo.",
        ],
        [
          "<b>Pause:</b> two seconds after the claim, after a number and before the last line. Mouth closed.",
          "<b>Pause:</b> dos segundos después de la afirmación, después de un número y antes de la última línea. Con la boca cerrada.",
        ],
      ],
    },
    {
      t: "trap",
      title: ["Three ways the plan dies", "Tres formas en que el plan se muere"],
      html: [
        "<b>Scripting.</b> Writing the full text in Spanish, translating it and memorizing it produces a talk that sounds read and falls apart at the first forgotten word. Build from keywords in English and let the sentences come out a little different in each take. <b>Polishing.</b> Ten takes of day 4 means there is no day 5. Two takes, keep the second, move on. <b>Waiting.</b> <em>Cuando tenga mejor inglés</em> is how people with good English end up not speaking. Your English is already enough for every exercise in this plan. What is missing is repetitions, and the first one is available today.",
        "<b>Escribirlo todo.</b> Redactar el texto completo en español, traducirlo y memorizarlo produce una charla que suena leída y que se desmorona con la primera palabra olvidada. Arma desde palabras clave en inglés y deja que las oraciones salgan un poco distintas en cada toma. <b>Pulir de más.</b> Diez tomas del día 4 significan que no hay día 5. Dos tomas, quédate con la segunda y avanza. <b>Esperar.</b> <em>Cuando tenga mejor inglés</em> es como la gente con buen inglés termina sin hablar. Tu inglés ya alcanza para todos los ejercicios de este plan. Lo que falta son repeticiones, y la primera la puedes hacer hoy.",
      ],
    },
    {
      t: "choice",
      title: ["Which note helps you tomorrow", "¿Qué nota te sirve mañana?"],
      items: [
        {
          prompt: [
            "You listen to your day-5 recording, an infer exercise. Which note is the most useful?",
            "Escuchas tu grabación del día 5, un ejercicio de inferir. ¿Qué nota es la más útil?",
          ],
          options: [
            {
              en: "My English sounds terrible and my accent is too strong.",
              ok: false,
              why: [
                "A verdict. There is nothing in it you can do differently tomorrow.",
                "Un veredicto. No trae nada que puedas hacer distinto mañana.",
              ],
            },
            {
              en: 'Strength: three claims, each with evidence. Next: say "must have" when the evidence is strong, not "maybe."',
              ok: true,
              why: [
                "Both lines are specific and can be heard on the recording. Tomorrow's take has a target.",
                "Las dos líneas son específicas y se oyen en la grabación. La toma de mañana ya tiene un objetivo.",
              ],
            },
            {
              en: "Next: improve grammar, vocabulary, pronunciation, speed and confidence.",
              ok: false,
              why: [
                "Five targets are none. One change per take is what moves.",
                "Cinco objetivos son ninguno. Un cambio por toma es lo que avanza.",
              ],
            },
          ],
        },
        {
          prompt: [
            "A colleague agrees to listen to your talk on day 28. What do you ask them?",
            "Alguien de tu equipo acepta escuchar tu charla el día 28. ¿Qué le pides?",
          ],
          options: [
            {
              en: "Be honest: how was my English?",
              ok: false,
              why: [
                "It invites a general verdict, and a kind colleague will say it was fine.",
                "Invita a un veredicto general, y una persona amable te va a decir que estuvo bien.",
              ],
            },
            {
              en: "Please tell me everything I did wrong.",
              ok: false,
              why: [
                "You get a list you cannot act on, and nothing about what to keep.",
                "Recibes una lista sobre la que no puedes actuar, y nada sobre lo que debes conservar.",
              ],
            },
            {
              en: "Could you give me one thing that worked and one thing to try next?",
              ok: true,
              why: [
                "It is easy to answer honestly, and both halves are usable.",
                "Es fácil de responder con honestidad, y las dos mitades te sirven.",
              ],
            },
          ],
        },
        {
          prompt: [
            "It is day 12. You missed days 10 and 11. What do you tell yourself?",
            "Es el día 12. Te saltaste los días 10 y 11. ¿Qué te dices?",
          ],
          options: [
            {
              en: "I'll do thirty minutes today to catch up.",
              ok: false,
              why: [
                "Catching up turns ten minutes into a debt. The next missed day, the debt is too big and the plan ends.",
                "Ponerte al corriente convierte diez minutos en una deuda. Al siguiente día que falles, la deuda ya es muy grande y el plan se acaba.",
              ],
            },
            {
              en: "I'll restart the plan from day 1 next Monday.",
              ok: false,
              why: [
                "Restarting is postponing with a better name.",
                "Volver a empezar es posponer con un nombre más bonito.",
              ],
            },
            {
              en: "I'll do today's ten minutes and keep going from day 12.",
              ok: true,
              why: [
                "The plan is thirty days of practice, and it does not need to be thirty days in a row.",
                "El plan son treinta días de práctica, y no necesitan ser treinta días seguidos.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Your full talk runs 4:10. The target is three minutes.",
            "Tu charla completa dura 4:10. El objetivo son tres minutos.",
          ],
          options: [
            {
              en: "I'll speak faster.",
              ok: false,
              why: [
                "That gives back everything you built in the delivery lesson, starting with the pauses.",
                "Con eso devuelves todo lo que construiste en la lección de voz, empezando por las pausas.",
              ],
            },
            {
              en: "I'll cut the weakest reason down to one line and tell the story in four sentences.",
              ok: true,
              why: [
                "Cut content, keep pace. Choosing what to leave out is part of the skill.",
                "Recorta contenido y conserva el ritmo. Elegir qué dejar fuera es parte de la habilidad.",
              ],
            },
            {
              en: "I'll keep everything. Four minutes is close enough.",
              ok: false,
              why: [
                "The time limit is part of what the room asked for. Running over tells them you could not choose.",
                "El límite de tiempo es parte de lo que la sala pidió. Pasarte les dice que no supiste elegir.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "speak",
      title: ["Day 30: re-record your baseline", "Día 30: vuelve a grabar tu punto de partida"],
      prompt: [
        "Go back to the 60-second talk you recorded in lesson 1 and give it again, on the same topic, with what you know now: the claim first, one piece of evidence, one person or moment, a clear last line, and the pauses. If you never recorded a baseline, speak for 60 seconds about your work and one thing you would change in it, and use that as your starting point for the next thirty days. Then listen to both recordings back to back.",
        "Regresa a la charla de 60 segundos que grabaste en la lección 1 y dala otra vez, sobre el mismo tema, con lo que sabes ahora: la afirmación primero, una evidencia, una persona o un momento, una última línea clara y las pausas. Si nunca grabaste un punto de partida, habla 60 segundos sobre tu trabajo y una cosa que le cambiarías, y úsalo como punto de partida para los siguientes treinta días. Después escucha las dos grabaciones, una tras otra.",
      ],
      think: 30,
      speak: 60,
      checklist: [
        [
          "Compare the first sentences. Which one tells the listener where I stand?",
          "Compara las primeras oraciones. ¿Cuál le dice a quien escucha cuál es mi postura?",
        ],
        ["Count the fillers in each recording.", "Cuenta las muletillas en cada grabación."],
        [
          "Listen to the ends of my sentences. Do they go down?",
          "Escucha el final de mis oraciones. ¿Bajan?",
        ],
        [
          "Find one pause of two full seconds in the new recording.",
          "Encuentra una pausa de dos segundos completos en la grabación nueva.",
        ],
        [
          "Write one strength, and one thing to try in the next thirty days.",
          "Escribe una fortaleza y una cosa por intentar en los próximos treinta días.",
        ],
      ],
    },
    {
      t: "takeaways",
      items: [
        [
          "Ten minutes a day: think, speak, listen, two lines, second take.",
          "Diez minutos al día: piensa, habla, escúchate, dos líneas, segunda toma.",
        ],
        [
          "One strength and one thing to try next, both things you can hear on the recording.",
          "Una fortaleza y una cosa por intentar, las dos algo que se oiga en la grabación.",
        ],
        [
          "Keywords in English, never a script translated from Spanish.",
          "Palabras clave en inglés, nunca un guion traducido del español.",
        ],
        [
          "A missed day is skipped, not repaid. Continue from today.",
          "Un día perdido se salta, no se repone. Sigue desde hoy.",
        ],
        [
          "On day 30, put the two recordings side by side and write down what changed.",
          "El día 30, pon las dos grabaciones lado a lado y anota qué cambió.",
        ],
      ],
    },
  ],
};
