import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "strong-verbs-precise-words",
  slugEs: "verbos-fuertes-palabras-precisas",
  title: ["Strong Verbs, Precise Words", "Verbos Fuertes, Palabras Precisas"],
  summary: [
    "Choose the verb that says what happened, the noun that says which thing, and the number that says how much.",
    "Elige el verbo que dice qué pasó, el sustantivo que dice cuál cosa y el número que dice cuánto.",
  ],
  description: [
    "Word choice for business English: strong verbs, specific nouns and numbers, plain words over inflated ones, false friends, and hedging on purpose.",
    "Elección de palabras en inglés de negocios: verbos fuertes, sustantivos y cifras específicos, palabras sencillas, falsos amigos y matices con intención.",
  ],
  minutes: 17,
  blocks: [
    {
      t: "p",
      html: [
        "Here is a sentence with no errors in it: <em>We are having some issues with the system that are affecting several aspects of the operation.</em> The grammar is right and the tone is professional. The reader finishes it knowing nothing: which system, what kind of issue, how many aspects, how badly. They have to write back and ask, and your update has turned into a conversation.",
        "Esta oración no tiene ningún error: <em>We are having some issues with the system that are affecting several aspects of the operation.</em> La gramática está bien y el tono es profesional. Tu lector la termina sin saber nada: qué sistema, qué tipo de problema, cuántos aspectos, qué tan grave. Tiene que contestar para preguntar, y tu informe se convirtió en una conversación.",
      ],
    },
    {
      t: "idea",
      title: [
        "The specific word is the one that sounds senior",
        "La palabra específica es la que suena a nivel directivo",
      ],
      html: [
        "Vague words are safe. When you write in a second language, <em>issue</em>, <em>affect</em>, <em>several</em> and <em>soon</em> are attractive because they are never wrong. They are also never informative. Readers trust the writer who names things: the verb that says what happened, the noun that says which thing, the number that says how much, the date that says when. <b>The test:</b> after reading your sentence, could the reader explain the situation to someone else? If they could only repeat your words, the words are too general. Precision does not call for a larger vocabulary. It calls for the fact, and usually you already have it.",
        "Las palabras vagas son seguras. Cuando escribes en un segundo idioma, <em>issue</em>, <em>affect</em>, <em>several</em> y <em>soon</em> atraen porque nunca están mal. Tampoco informan nunca. Un lector confía en quien nombra las cosas: el verbo que dice qué pasó, el sustantivo que dice cuál cosa, el número que dice cuánto, la fecha que dice cuándo. <b>La prueba:</b> después de leer tu oración, ¿tu lector podría explicarle la situación a alguien más? Si solo podría repetir tus palabras, las palabras son demasiado generales. La precisión no pide un vocabulario más grande. Pide el dato, y casi siempre ya lo tienes.",
      ],
    },
    {
      t: "compare",
      title: ["The verb that carries the sentence", "El verbo que carga la oración"],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "The new policy had a negative impact on morale.",
          strong: "The new policy hurt morale.",
          why: [
            "<em>Had a negative impact on</em> is five words standing where one verb belongs.",
            "<em>Had a negative impact on</em> son cinco palabras paradas donde va un verbo.",
          ],
        },
        {
          weak: "This change will affect the budget.",
          strong: "This change will add $40,000 to the budget.",
          why: [
            "<em>Affect</em> and <em>impact</em> do not say in which direction. The reader's first question is whether the number goes up or down, so answer it in the verb.",
            "<em>Affect</em> e <em>impact</em> no dicen en qué dirección. La primera pregunta de tu lector es si el número sube o baja, así que contéstala en el verbo.",
          ],
        },
        {
          weak: "Sales went up a lot in the second quarter.",
          strong: "Sales rose 18% in the second quarter.",
          why: [
            "<em>Rose</em> is the standard business verb, and the figure replaces <em>a lot</em>. For a sharper move, <em>jumped</em>; for a slow one, <em>edged up</em>.",
            "<em>Rose</em> es el verbo estándar en negocios, y la cifra reemplaza a <em>a lot</em>. Para un movimiento más brusco, <em>jumped</em>; para uno lento, <em>edged up</em>.",
          ],
        },
        {
          weak: "The vendor is giving us problems with the deliveries.",
          strong: "The vendor has missed three deliveries this month.",
          why: [
            "<em>Giving us problems</em> is a complaint. <em>Has missed three deliveries</em> is a fact someone can act on.",
            "<em>Giving us problems</em> es una queja. <em>Has missed three deliveries</em> es un hecho sobre el que alguien puede actuar.",
          ],
        },
        {
          weak: "The system got an error and we had to do the process again.",
          strong: "The payroll system crashed, and we had to rerun the March payments.",
          why: [
            "<em>Get</em> and <em>do</em> can stand for almost any action, which is why they tell the reader so little. <em>Crashed</em> and <em>rerun</em> each describe one thing.",
            "<em>Get</em> y <em>do</em> pueden representar casi cualquier acción, y por eso le dicen tan poco a tu lector. <em>Crashed</em> y <em>rerun</em> describen una sola cosa cada uno.",
          ],
        },
        {
          weak: "The audit was a very good thing for the team.",
          strong: "The audit exposed two gaps in our process, and the team closed both.",
          why: [
            "When the main verb is <em>was</em>, the meaning has to come from an adjective, and adjectives such as <em>good</em> only give an opinion. An action verb reports what happened.",
            "Cuando el verbo principal es <em>was</em>, el significado tiene que salir de un adjetivo, y adjetivos como <em>good</em> solo dan una opinión. Un verbo de acción reporta lo que pasó.",
          ],
        },
      ],
    },
    {
      t: "compare",
      title: ["Vague nouns, soft numbers", "Sustantivos vagos, cifras blandas"],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "We have an issue with the invoice.",
          strong: "The invoice shows the wrong tax rate.",
          why: [
            "<em>Issue</em> names a category. Say what the issue is and the word is no longer needed.",
            "<em>Issue</em> nombra una categoría. Di cuál es el problema y la palabra ya no hace falta.",
          ],
        },
        {
          weak: "There are some things we need to discuss about the contract.",
          strong:
            "We need to discuss two clauses in the contract: payment terms and the late-delivery penalty.",
          why: [
            "<em>Some things</em> makes the reader prepare for anything. Naming the two clauses lets them prepare for the conversation.",
            "<em>Some things</em> obliga a tu lector a prepararse para lo que sea. Nombrar las dos cláusulas le permite prepararse para la conversación.",
          ],
        },
        {
          weak: "Another important aspect is the topic of training.",
          strong: "The night shift also needs training on the new scanners.",
          why: [
            "<em>Aspect</em> and <em>topic</em> are containers with nothing in them yet. Open the container: who needs what.",
            "<em>Aspect</em> y <em>topic</em> son recipientes todavía vacíos. Abre el recipiente: quién necesita qué.",
          ],
        },
        {
          weak: "I'll send you the report soon.",
          strong: "I'll send you the report by Thursday at noon.",
          why: [
            "<em>Soon</em> means today to one person and next week to another. A day and an hour mean the same thing to both.",
            "<em>Soon</em> significa hoy para una persona y la próxima semana para otra. Un día y una hora significan lo mismo para las dos.",
          ],
        },
        {
          weak: "Several customers complained about the update.",
          strong: "Four customers complained about the update, including our two largest accounts.",
          why: [
            "<em>Several</em> could be three or thirty. The count, and who they are, tells the reader how worried to be.",
            "<em>Several</em> pueden ser tres o treinta. El número, y quiénes son, le dice a tu lector cuánto preocuparse.",
          ],
        },
        {
          weak: "The team is working on the situation.",
          strong: "Priya's team is replacing the faulty sensors and expects to finish Friday.",
          why: [
            "Three vague words (<em>team, working, situation</em>) became a name, an action and a date.",
            "Tres palabras vagas (<em>team, working, situation</em>) se volvieron un nombre, una acción y una fecha.",
          ],
        },
        {
          weak: "Please send me the information as soon as possible.",
          strong: "Please send me the March sales figures by 3 p.m. today.",
          why: [
            "<em>The information</em> and <em>as soon as possible</em> leave both the task and the deadline to the reader's judgment.",
            "<em>The information</em> y <em>as soon as possible</em> dejan la tarea y la fecha límite al criterio de tu lector.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: ["Plain words over inflated ones", "Palabras sencillas en lugar de infladas"],
      items: [
        {
          en: "utilize → use",
          use: [
            "<em>Use</em> is right in nearly every business sentence where <em>utilize</em> appears.",
            "<em>Use</em> es correcto en casi cualquier oración de negocios donde aparece <em>utilize</em>.",
          ],
        },
        {
          en: "leverage → use / build on",
          use: [
            "As a verb it is business jargon. Say what you will do with the thing.",
            "Como verbo es jerga corporativa. Di qué vas a hacer con la cosa.",
          ],
        },
        {
          en: "in order to → to",
          use: [
            "Keep <em>in order to</em> only where a bare <em>to</em> could be misread.",
            "Conserva <em>in order to</em> solo donde un <em>to</em> solo se podría leer mal.",
          ],
        },
        {
          en: "commence / initiate → start",
          use: [
            "The cognates of <em>comenzar</em> and <em>iniciar</em> sound ceremonial in English.",
            "Los cognados de comenzar e iniciar suenan ceremoniosos en inglés.",
          ],
        },
        {
          en: "prior to → before",
          use: [
            "And <em>subsequent to</em> becomes <em>after</em>.",
            "Y <em>subsequent to</em> se vuelve <em>after</em>.",
          ],
        },
        {
          en: "obtain → get",
          use: [
            "<em>Get</em> is weak as an all-purpose verb, but it is the natural word for <em>receive</em> or <em>acquire</em>: <em>get approval, get a quote</em>.",
            "<em>Get</em> es débil como verbo para todo, pero es la palabra natural para <em>receive</em> o <em>acquire</em>: <em>get approval, get a quote</em>.",
          ],
        },
        {
          en: "purchase → buy",
          use: [
            "<em>Purchase</em> belongs on forms and in contracts.",
            "<em>Purchase</em> es para formatos y contratos.",
          ],
        },
        {
          en: "sufficient → enough",
          use: [
            "Also <em>numerous</em> → <em>many</em> and <em>additional</em> → <em>more</em>.",
            "También <em>numerous</em> → <em>many</em> y <em>additional</em> → <em>more</em>.",
          ],
        },
        {
          en: "approximately → about",
          use: [
            "Before a number, <em>about</em> does the same work in two syllables.",
            "Antes de un número, <em>about</em> hace el mismo trabajo en dos sílabas.",
          ],
        },
        {
          en: "inform → tell",
          use: [
            "<em>I'll tell the client</em>, in place of <em>I will inform the client</em>. Likewise <em>require</em> → <em>need</em> and <em>demonstrate</em> → <em>show</em>.",
            "<em>I'll tell the client</em>, en lugar de <em>I will inform the client</em>. Igual <em>require</em> → <em>need</em> y <em>demonstrate</em> → <em>show</em>.",
          ],
        },
        {
          en: "at your earliest convenience → by Friday",
          use: [
            "A formula that sounds polite and gives no date. Give the date.",
            "Una fórmula que suena amable y no da fecha. Da la fecha.",
          ],
        },
      ],
    },
    {
      t: "p",
      html: [
        "There is a reason this list is hard for Spanish speakers in particular. English has two layers of vocabulary: short everyday words, and longer words that came from Latin and French. The second layer is the formal one. For a Spanish speaker, the Latin word is the cognate, so it is the first to come to mind: <em>utilizar, obtener, suficiente, aproximadamente</em>. You end up writing in the formal layer without choosing to. None of these words is an error, and in a contract or a regulatory filing they belong. In an email or an update, the short word is the professional choice.",
        "Hay una razón por la que esta lista nos cuesta más a quienes hablamos español. El inglés tiene dos capas de vocabulario: palabras cortas de todos los días y palabras más largas que llegaron del latín y del francés. La segunda capa es la formal. Para alguien que habla español, la palabra latina es el cognado, así que es la primera que viene a la mente: utilizar, obtener, suficiente, aproximadamente. Terminas escribiendo en la capa formal sin haberlo decidido. Ninguna de estas palabras es un error, y en un contrato o en un trámite regulatorio son las adecuadas. En un correo o en un informe, la palabra corta es la opción profesional.",
      ],
    },
    {
      t: "compare",
      title: [
        "False friends that change your meaning",
        "Falsos amigos que te cambian el significado",
      ],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "Actually, we are working on three projects.",
          strong: "We are currently working on three projects.",
          why: [
            "<em>Actualmente</em> is <em>currently</em>. <em>Actually</em> means <em>in fact</em>, and at the start of a sentence it sounds as if you are correcting the reader.",
            "Actualmente es <em>currently</em>. <em>Actually</em> significa <em>de hecho</em>, y al inicio de una oración suena a que estás corrigiendo a tu lector.",
          ],
        },
        {
          weak: "Eventually, we could offer a discount.",
          strong: "We might offer a discount if the order is large enough.",
          why: [
            "<em>Eventualmente</em> suggests <em>possibly</em>. <em>Eventually</em> means <em>in the end, after some time</em>, so the first version promises a discount later.",
            "Eventualmente sugiere <em>posiblemente</em>. <em>Eventually</em> significa <em>al final, después de un tiempo</em>, así que la primera versión promete un descuento más adelante.",
          ],
        },
        {
          weak: "I assisted to the conference in Chicago.",
          strong: "I attended the conference in Chicago.",
          why: [
            "<em>Asistir a</em> is <em>attend</em>. <em>Assist</em> means <em>help</em>. The pair crosses over: <em>atender a un cliente</em> is <em>help</em> or <em>take care of a client</em>.",
            "Asistir a es <em>attend</em>. <em>Assist</em> significa <em>ayudar</em>. El par se cruza: atender a un cliente es <em>help</em> o <em>take care of a client</em>.",
          ],
        },
        {
          weak: "We pretend to open two stores next year.",
          strong: "We plan to open two stores next year.",
          why: [
            "<em>Pretender</em> is <em>plan, intend</em> or <em>aim</em>. <em>Pretend</em> means <em>fingir</em>, so the first version says the stores are make-believe.",
            "Pretender es <em>plan, intend</em> o <em>aim</em>. <em>Pretend</em> significa <em>fingir</em>, así que la primera versión dice que las tiendas son de mentiras.",
          ],
        },
        {
          weak: "The team realized the tests last week.",
          strong: "The team ran the tests last week.",
          why: [
            "<em>Realizar</em> is <em>do, carry out, run</em> or <em>conduct</em>. <em>Realize</em> means <em>darse cuenta</em>.",
            "Realizar es <em>do, carry out, run</em> o <em>conduct</em>. <em>Realize</em> significa <em>darse cuenta</em>.",
          ],
        },
        {
          weak: "Thank you for your compromise with the project.",
          strong: "Thank you for your commitment to the project.",
          why: [
            "<em>Compromiso</em> is <em>commitment</em>. A <em>compromise</em> is an agreement in which each side gives something up.",
            "Compromiso es <em>commitment</em>. Un <em>compromise</em> es un acuerdo en el que cada parte cede algo.",
          ],
        },
        {
          weak: "Let me know if you have any doubts.",
          strong: "Let me know if you have any questions.",
          why: [
            "<em>Dudas</em> are <em>questions</em>. In English, <em>doubts</em> means you are not sure something is true or will work, so the first version invites the reader to distrust you.",
            "Las dudas son <em>questions</em>. En inglés, <em>doubts</em> quiere decir que no estás seguro de que algo sea cierto o vaya a funcionar, así que la primera versión invita a tu lector a desconfiar.",
          ],
        },
      ],
    },
    {
      t: "trap",
      title: [
        "More false friends, and why writing makes them worse",
        "Más falsos amigos, y por qué por escrito pesan más",
      ],
      html: [
        "In conversation, a false friend gets repaired on the spot: the listener looks puzzled and you rephrase. In writing, the wrong meaning stands, and the reader acts on it. Add these to your checklist. <em>Sensible</em> means <em>sensato</em>; for <em>sensible</em>, write <em>sensitive</em>. <em>Resume</em> means <em>reanudar</em>; for <em>resumir</em>, write <em>summarize</em>. As a verb, <em>elaborate</em> means to add detail; for <em>elaborar un reporte</em>, write <em>prepare</em> or <em>draft a report</em>. <em>Support</em> means <em>apoyar</em>; for <em>soportar</em>, write <em>tolerate</em> or <em>put up with</em>. <em>Ultimately</em> means <em>al final</em>; for <em>últimamente</em>, write <em>lately</em> or <em>recently</em>. <em>Punctual</em> is only about time; for <em>comentarios puntuales</em>, write <em>specific comments</em>. And three that are not English at all: <span class='x'>✗</span> <em>capacitation</em> is <em>training</em>; <span class='x'>✗</span> <em>the responsible of the area</em> is <em>the person in charge of the area</em>; <span class='x'>✗</span> <em>the budget contemplates</em> is <em>the budget includes</em> or <em>covers</em>.",
        "En una conversación, un falso amigo se repara en el momento: quien te escucha pone cara de duda y tú reformulas. Por escrito, el significado equivocado se queda, y tu lector actúa con base en él. Agrega estos a tu lista de revisión. <em>Sensible</em> significa sensato; para sensible, escribe <em>sensitive</em>. <em>Resume</em> significa reanudar; para resumir, escribe <em>summarize</em>. Como verbo, <em>elaborate</em> significa agregar detalle; para elaborar un reporte, escribe <em>prepare</em> o <em>draft a report</em>. <em>Support</em> significa apoyar; para soportar, escribe <em>tolerate</em> o <em>put up with</em>. <em>Ultimately</em> significa al final; para últimamente, escribe <em>lately</em> o <em>recently</em>. <em>Punctual</em> solo se refiere al tiempo; para comentarios puntuales, escribe <em>specific comments</em>. Y tres que ni siquiera existen así en inglés: <span class='x'>✗</span> <em>capacitation</em> es <em>training</em>; <span class='x'>✗</span> <em>the responsible of the area</em> es <em>the person in charge of the area</em>; <span class='x'>✗</span> <em>the budget contemplates</em> es <em>the budget includes</em> o <em>covers</em>.",
      ],
    },
    {
      t: "framework",
      title: ["Hedge on purpose", "Matiza con intención"],
      lead: [
        "A hedge is a word that lowers the certainty of a claim: <em>may, might, probably, I think</em>. Used on purpose, it tells the reader exactly how sure you are. Used by reflex, it makes facts sound like guesses.",
        "Un matiz es una palabra que le baja la certeza a una afirmación: <em>may, might, probably, I think</em>. Usado con intención, le dice a tu lector exactamente qué tan seguro estás. Usado por reflejo, hace que los hechos suenen a suposiciones.",
      ],
      steps: [
        {
          label: ["Decide how sure you are", "Decide qué tan seguro estás"],
          html: [
            "Before you choose the words, choose the level: certain, likely, possible, or unknown. If you are certain, use no hedge at all.",
            "Antes de elegir las palabras, elige el nivel: seguro, probable, posible o desconocido. Si estás seguro, no uses ningún matiz.",
          ],
          say: "The delay will cost us two weeks.",
        },
        {
          label: ["Use one hedge that matches", "Usa un solo matiz que corresponda"],
          html: [
            "English has a scale: <em>will</em> (certain), <em>will probably</em> or <em>should</em> (likely), <em>may</em> or <em>might</em> (possible). Choose one word from it. <em>I think maybe we could possibly</em> stacks four hedges, and the reader can no longer tell what you believe.",
            "El inglés tiene una escala: <em>will</em> (seguro), <em>will probably</em> o <em>should</em> (probable), <em>may</em> o <em>might</em> (posible). Elige una palabra de ahí. <em>I think maybe we could possibly</em> apila cuatro matices, y tu lector ya no puede saber qué piensas.",
          ],
          say: "The delay will probably cost us two weeks.",
        },
        {
          label: ["Say what the uncertainty depends on", "Di de qué depende la incertidumbre"],
          html: [
            "A hedge with its condition is information. Name the thing you are waiting for and the reader can plan around it.",
            "Un matiz con su condición es información. Nombra lo que estás esperando y tu lector puede planear en torno a eso.",
          ],
          say: "We'll lose two weeks, or three if the parts clear customs after the 10th.",
        },
        {
          label: [
            "Leave recommendations and known facts unhedged",
            "No matices las recomendaciones ni los hechos que conoces",
          ],
          html: [
            "Your recommendation is yours, so state it. In Spanish, stacked softeners (<em>quizá podríamos considerar la posibilidad de</em>) are a courtesy. In English, they read as doubt about the idea itself.",
            "Tu recomendación es tuya, así que dila. En español, los suavizantes apilados (quizá podríamos considerar la posibilidad de) son una cortesía. En inglés se leen como duda sobre la idea misma.",
          ],
          say: "I recommend we switch carriers. The one open question is cost, and I'll have that number Monday.",
        },
      ],
    },
    {
      t: "model",
      title: ["A recommendation in precise words", "Una recomendación con palabras precisas"],
      context: [
        "Elena's first draft read: <em>Actually we have some issues with the logistics provider that are impacting several aspects of the operation, so maybe we could eventually consider evaluating other options soon.</em> This is the version she sent to her director.",
        "El primer borrador de Elena decía: <em>Actually we have some issues with the logistics provider that are impacting several aspects of the operation, so maybe we could eventually consider evaluating other options soon.</em> Esta es la versión que le mandó a su director.",
      ],
      lines: [
        {
          en: "I recommend we move our Texas freight to a new carrier by March 1.",
          note: [
            "<em>Recommend</em> with no hedge, and a date in place of <em>soon</em>.",
            "<em>Recommend</em> sin matiz, y una fecha en lugar de <em>soon</em>.",
          ],
        },
        {
          en: "Our current carrier delivered 11 of its last 40 shipments late.",
          note: [
            "<em>Some issues</em> turned into a count the reader can judge.",
            "<em>Some issues</em> se convirtió en una cuenta que tu lector puede evaluar.",
          ],
        },
        {
          en: "Those delays cost us $23,000 in penalties last quarter and one account, the Dallas distributor.",
          note: [
            "<em>Impacting several aspects</em> became the verb <em>cost</em>, an amount and a name.",
            "<em>Impacting several aspects</em> se volvió el verbo <em>cost</em>, una cantidad y un nombre.",
          ],
        },
        {
          en: "We tested two alternatives in January.",
          note: [
            "<em>Tested</em>: a plain verb for what was done.",
            "<em>Tested</em>: un verbo sencillo para lo que se hizo.",
          ],
        },
        {
          en: "The cheaper one missed two of ten deliveries. The other delivered all ten on time and charges 6% more.",
          note: [
            "Each option gets its own facts. Nothing is <em>better</em> or <em>worse</em>; the numbers make the comparison.",
            "Cada opción recibe sus propios datos. Nada es <em>better</em> ni <em>worse</em>; los números hacen la comparación.",
          ],
        },
        {
          en: "The extra 6% should pay for itself within a quarter if the penalties stop, though I can't confirm that until we see February's numbers.",
          note: [
            "The only hedge in the message, placed on the one uncertain claim, with what it depends on.",
            "El único matiz del mensaje, puesto en la única afirmación incierta, con aquello de lo que depende.",
          ],
        },
        {
          en: "I need your approval by Friday so we can give the current carrier 30 days' notice.",
          note: [
            "The request is specific too: what, by when, and why that day.",
            "La petición también es específica: qué, para cuándo y por qué ese día.",
          ],
        },
      ],
    },
    {
      t: "choice",
      title: ["Choose the most precise version", "Elige la versión más precisa"],
      items: [
        {
          prompt: [
            "A project is two weeks late because the client approved the designs late. You are updating your director.",
            "Un proyecto lleva dos semanas de retraso porque el cliente aprobó tarde los diseños. Le informas a tu director.",
          ],
          options: [
            {
              en: "We're experiencing some challenges with the timeline.",
              ok: false,
              why: [
                "It sounds professional and reports nothing: no size, no cause. The director has to ask.",
                "Suena profesional y no reporta nada: ni tamaño ni causa. El director tiene que preguntar.",
              ],
            },
            {
              en: "The project is two weeks behind because the client approved the designs late.",
              ok: true,
              why: [
                "How late and why, in one sentence with a real verb.",
                "Cuánto retraso y por qué, en una oración con un verbo de verdad.",
              ],
            },
            {
              en: "The project has been significantly impacted by various factors.",
              ok: false,
              why: [
                "<em>Significantly</em>, <em>impacted</em> and <em>various factors</em> are three placeholders in a row. It also sounds as if something is being hidden.",
                "<em>Significantly</em>, <em>impacted</em> y <em>various factors</em> son tres comodines seguidos. Además suena a que se está escondiendo algo.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You want to say that the company has 14 open positions right now.",
            "Quieres decir que la empresa tiene 14 vacantes en este momento.",
          ],
          options: [
            {
              en: "Actually, we have 14 open positions.",
              ok: false,
              why: [
                "<em>Actually</em> means <em>in fact</em>. The reader hears a correction of something they never said.",
                "<em>Actually</em> significa <em>de hecho</em>. Tu lector oye una corrección de algo que nunca dijo.",
              ],
            },
            {
              en: "At the actual moment, we have 14 open positions.",
              ok: false,
              why: [
                "<em>Actual</em> means <em>real</em>, so <em>the actual moment</em> does not mean <em>now</em>.",
                "<em>Actual</em> significa <em>real</em>, así que <em>the actual moment</em> no quiere decir <em>ahora</em>.",
              ],
            },
            {
              en: "We currently have 14 open positions.",
              ok: true,
              why: [
                "<em>Currently</em> is the word for <em>actualmente</em>.",
                "<em>Currently</em> es la palabra para actualmente.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You are explaining what a new platform is for.",
            "Explicas para qué sirve una plataforma nueva.",
          ],
          options: [
            {
              en: "We'll use the new platform to cut onboarding from ten days to four.",
              ok: true,
              why: [
                "Plain verbs and the actual benefit, with numbers.",
                "Verbos sencillos y el beneficio real, con números.",
              ],
            },
            {
              en: "We will utilize the new platform in order to facilitate the onboarding process.",
              ok: false,
              why: [
                "Three inflated choices in one sentence, and <em>facilitate</em> does not say what improves.",
                "Tres palabras infladas en una oración, y <em>facilitate</em> no dice qué mejora.",
              ],
            },
            {
              en: "We will leverage the new platform to optimize the onboarding experience.",
              ok: false,
              why: [
                "It sounds like a brochure. <em>Leverage</em> and <em>optimize</em> promise improvement without naming one.",
                "Suena a folleto. <em>Leverage</em> y <em>optimize</em> prometen una mejora sin nombrar ninguna.",
              ],
            },
          ],
        },
        {
          prompt: [
            "A shipment is expected Thursday. The only risk is a customs inspection. A client asks when it will arrive.",
            "Un embarque se espera el jueves. El único riesgo es una revisión de aduana. Un cliente pregunta cuándo llega.",
          ],
          options: [
            {
              en: "I think maybe the shipment could possibly arrive around Thursday.",
              ok: false,
              why: [
                "Four hedges. The client cannot tell whether Thursday is likely or a guess.",
                "Cuatro matices. El cliente no puede saber si el jueves es probable o una suposición.",
              ],
            },
            {
              en: "The shipment will arrive Thursday.",
              ok: false,
              why: [
                "Clear, but it states as certain something you know is not. If customs holds it, you have broken a promise.",
                "Clara, pero afirma como seguro algo que sabes que no lo es. Si la aduana lo detiene, rompiste una promesa.",
              ],
            },
            {
              en: "The shipment should arrive Thursday. If customs holds it for inspection, I'll let you know by Wednesday noon.",
              ok: true,
              why: [
                "One hedge, <em>should</em>, matched to <em>likely</em>, plus the condition and what you will do about it.",
                "Un solo matiz, <em>should</em>, que corresponde a <em>probable</em>, más la condición y lo que vas a hacer al respecto.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You need sales data from a colleague in order to finish a board presentation on Thursday.",
            "Necesitas datos de ventas de un colega para terminar una presentación al consejo el jueves.",
          ],
          options: [
            {
              en: "Please send me the information as soon as possible.",
              ok: false,
              why: [
                "Which information, and how soon? Both are left for your colleague to guess.",
                "¿Qué información y qué tan pronto? Las dos cosas quedan para que tu colega las adivine.",
              ],
            },
            {
              en: "Please send me the Q2 sales figures by region by 3 p.m. Wednesday.",
              ok: true,
              why: [
                "The exact data and an exact deadline. Your colleague can do it without writing back.",
                "Los datos exactos y una fecha límite exacta. Tu colega lo puede hacer sin tener que contestarte antes.",
              ],
            },
            {
              en: "Please share the relevant data at your earliest convenience.",
              ok: false,
              why: [
                "<em>Relevant</em> makes your colleague decide what you need, and <em>at your earliest convenience</em> lets it wait indefinitely.",
                "<em>Relevant</em> obliga a tu colega a decidir qué necesitas, y <em>at your earliest convenience</em> permite que espere indefinidamente.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "rewrite",
      title: ["Rewrite: name the thing", "Reescribe: nombra la cosa"],
      items: [
        {
          task: [
            "Use these facts: three of twelve machines, down since Monday, output down 20%.",
            "Usa estos datos: tres de doce máquinas, paradas desde el lunes, producción 20% abajo.",
          ],
          before:
            "We are having some issues with several machines, and this is affecting the production.",
          after:
            "Three of our twelve machines have been down since Monday, and output has dropped 20%.",
          why: [
            "<em>Some issues</em> became <em>down</em>, <em>several</em> became a count, and <em>affecting</em> became a verb with a direction and a number.",
            "<em>Some issues</em> se volvió <em>down</em>, <em>several</em> se volvió una cuenta, y <em>affecting</em> se volvió un verbo con dirección y cifra.",
          ],
        },
        {
          task: [
            "Five false friends. The writer is in a training session right now and is offering a summary.",
            "Cinco falsos amigos. Quien escribe está en una capacitación en este momento y ofrece un resumen.",
          ],
          before:
            "Actually I am assisting to a capacitation, but eventually I can resume the results for you if you have doubts.",
          after:
            "I'm currently attending a training session, but I can summarize the results for you if you have questions.",
          why: [
            "<em>Actually</em> → <em>currently</em>; <em>assisting to</em> → <em>attending</em>; <em>capacitation</em> → <em>training session</em>; <em>resume</em> → <em>summarize</em>; <em>doubts</em> → <em>questions</em>. <em>Eventually</em> was removed: <em>I can</em> already makes the offer.",
            "<em>Actually</em> → <em>currently</em>; <em>assisting to</em> → <em>attending</em>; <em>capacitation</em> → <em>training session</em>; <em>resume</em> → <em>summarize</em>; <em>doubts</em> → <em>questions</em>. <em>Eventually</em> se quitó: <em>I can</em> ya hace el ofrecimiento.",
          ],
        },
        {
          task: [
            "Replace every inflated word with a plain one.",
            "Reemplaza cada palabra inflada con una sencilla.",
          ],
          before:
            "Prior to the commencement of the project, it is necessary to obtain sufficient information in order to determine the requirements.",
          after:
            "Before the project starts, we need enough information to define the requirements.",
          why: [
            "<em>Prior to</em> → <em>before</em>; <em>commencement</em> → <em>starts</em>; <em>it is necessary to obtain</em> → <em>we need</em>; <em>sufficient</em> → <em>enough</em>; <em>in order to</em> → <em>to</em>. Same meaning, twelve words in place of twenty.",
            "<em>Prior to</em> → <em>before</em>; <em>commencement</em> → <em>starts</em>; <em>it is necessary to obtain</em> → <em>we need</em>; <em>sufficient</em> → <em>enough</em>; <em>in order to</em> → <em>to</em>. El mismo significado, doce palabras en lugar de veinte.",
          ],
        },
        {
          task: [
            "You are sure about this recommendation, and you want it done this quarter. Remove the reflex hedges.",
            "Estás seguro de esta recomendación y la quieres para este trimestre. Quita los matices por reflejo.",
          ],
          before:
            "I think that maybe it could be a good idea to possibly consider hiring a second analyst at some point.",
          after: "I recommend we hire a second analyst this quarter.",
          why: [
            "Five hedges (<em>I think, maybe, could be, possibly, consider</em>) and a vague time became one verb of recommendation and a deadline.",
            "Cinco matices (<em>I think, maybe, could be, possibly, consider</em>) y un tiempo vago se volvieron un verbo de recomendación y un plazo.",
          ],
        },
        {
          task: [
            "Use these facts: weekly meetings went from five to two; on-time delivery went from 82% to 94%.",
            "Usa estos datos: las juntas semanales pasaron de cinco a dos; las entregas a tiempo pasaron de 82% a 94%.",
          ],
          before:
            "The new manager made a lot of changes to the team, and it had a positive effect on the results.",
          after:
            "The new manager cut weekly meetings from five to two, and on-time delivery rose from 82% to 94%.",
          why: [
            "<em>Made a lot of changes</em> and <em>had a positive effect</em> each hid a verb and a number. <em>Cut</em> and <em>rose</em> report what happened.",
            "<em>Made a lot of changes</em> y <em>had a positive effect</em> escondían cada uno un verbo y una cifra. <em>Cut</em> y <em>rose</em> reportan lo que pasó.",
          ],
        },
      ],
    },
    {
      t: "takeaways",
      items: [
        [
          "Replace <em>affect, impact, have, do</em> and <em>get</em> with the verb that says what happened and in which direction.",
          "Reemplaza <em>affect, impact, have, do</em> y <em>get</em> con el verbo que dice qué pasó y en qué dirección.",
        ],
        [
          "<em>Issue, thing, aspect, situation, soon, several</em>: each one stands where a name, a number or a date should be.",
          "<em>Issue, thing, aspect, situation, soon, several</em>: cada una ocupa el lugar de un nombre, una cifra o una fecha.",
        ],
        [
          "The Latin cognate is the formal word in English. In everyday business writing, choose the short one: <em>use, start, before, enough, about</em>.",
          "El cognado latino es la palabra formal en inglés. En la escritura de negocios de todos los días, elige la corta: <em>use, start, before, enough, about</em>.",
        ],
        [
          "Check every draft for <em>actually, eventually, assist, pretend, realize, compromise</em> and <em>doubts</em>.",
          "Revisa cada borrador en busca de <em>actually, eventually, assist, pretend, realize, compromise</em> y <em>doubts</em>.",
        ],
        [
          "One hedge, matched to how sure you are, with what it depends on. No hedge on a recommendation.",
          "Un solo matiz, acorde con qué tan seguro estás, con aquello de lo que depende. Ningún matiz en una recomendación.",
        ],
      ],
    },
  ],
};
