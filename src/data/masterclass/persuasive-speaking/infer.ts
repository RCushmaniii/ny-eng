import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "infer",
  slugEs: "inferir",
  title: ["Infer: Every Claim Gets Its Evidence", "Inferir: Cada Afirmación con su Evidencia"],
  summary: [
    "State what you conclude, attach what you saw to it in the same breath, and choose words that match how strong the evidence is.",
    "Di lo que concluyes, pégale en el mismo aliento lo que viste y elige palabras que correspondan a qué tan fuerte es la evidencia.",
  ],
  description: [
    "Make claims people accept in English: attach evidence to each one and calibrate your certainty with must have, probably, suggests and may.",
    "Haz afirmaciones que sí se aceptan en inglés: ponle evidencia a cada una y calibra tu certeza con must have, probably, suggests y may.",
  ],
  minutes: 18,
  blocks: [
    {
      t: "p",
      html: [
        "You say, <em>I think we're going to lose this client.</em> The room goes quiet, and someone asks, <em>What makes you say that?</em> You have reasons. You have been watching this account for months. But they are not lined up, so what comes out is <em>It's just a feeling I have.</em> The claim was probably right, and it lost the room anyway.",
        "Dices: <em>I think we're going to lose this client.</em> La sala se queda callada y alguien pregunta: <em>What makes you say that?</em> Razones tienes. Llevas meses observando esa cuenta. Pero no las traías acomodadas, así que lo que sale es <em>It's just a feeling I have.</em> La afirmación probablemente era correcta, y aun así perdió a la sala.",
      ],
    },
    {
      t: "p",
      html: [
        "There is a second way to lose it. You do have a view, and to be courteous you wrap it in so much padding, <em>maybe it could possibly be that perhaps</em>, that nobody notices a claim was made. Your judgment is what you are paid for. This lesson is about delivering it so the room can see what it stands on and how sure you are.",
        "Hay una segunda forma de perderla. Sí tienes una postura, y por cortesía la envuelves en tanto relleno, <em>maybe it could possibly be that perhaps</em>, que nadie se da cuenta de que hubo una afirmación. Tu criterio es por lo que te pagan. Esta lección trata de entregarlo de modo que la sala vea en qué se apoya y qué tan seguro es.",
      ],
    },
    {
      t: "idea",
      title: ["I conclude X because I see Y", "I conclude X because I see Y"],
      html: [
        "The X is yours: a judgment, a cause, a prediction. The Y belongs to everyone: an observation of the kind you practiced in the last lesson. Said together, they let the listener check your thinking, and a claim that can be checked is one people are willing to adopt. Then one more decision: the strength of your words has to match the strength of the Y. Strong evidence earns <em>must</em>. Thin evidence earns <em>may</em>. Saying <em>definitely</em> on thin evidence costs you the room, and so does saying <em>maybe</em> on strong evidence.",
        "La X es tuya: un juicio, una causa, una predicción. La Y es de todos: una observación como las que practicaste en la lección anterior. Dichas juntas, le permiten a quien escucha revisar tu razonamiento, y una afirmación que se puede revisar es una que la gente está dispuesta a adoptar. Después viene una decisión más: la fuerza de tus palabras tiene que corresponder a la fuerza de la Y. Una evidencia fuerte se gana un <em>must</em>. Una evidencia delgada se gana un <em>may</em>. Decir <em>definitely</em> con evidencia delgada te cuesta la sala, y decir <em>maybe</em> con evidencia fuerte también.",
      ],
    },
    {
      t: "framework",
      title: ["Claim, evidence, certainty, gap", "Claim, evidence, certainty, gap"],
      lead: [
        "Four moves for any conclusion you want a room to take seriously.",
        "Cuatro movimientos para cualquier conclusión que quieras que una sala tome en serio.",
      ],
      steps: [
        {
          label: ["Claim", "Claim: la afirmación"],
          html: [
            "One sentence that goes beyond what can be seen. Mark it as yours with <em>I think</em>, <em>my read is</em> or <em>I conclude</em>, once.",
            "Una oración que va más allá de lo que se ve. Márcala como tuya con <em>I think</em>, <em>my read is</em> o <em>I conclude</em>, una sola vez.",
          ],
          say: "My read is that our pricing page is losing people.",
        },
        {
          label: ["Evidence", "Evidence: la evidencia"],
          html: [
            "The observation that led you there, said right away. If you cannot name it, you have a hunch. A hunch can be right, and it is still too early to say it as a claim.",
            "La observación que te llevó ahí, dicha de inmediato. Si no la puedes nombrar, lo que tienes es una corazonada. Una corazonada puede ser cierta, y todavía es muy pronto para decirla como afirmación.",
          ],
          say: "Seventy percent of visitors leave from that page. Before the redesign, it was forty-five.",
        },
        {
          label: ["Certainty", "Certainty: qué tan seguro"],
          html: [
            "Pick one word that says how far the evidence carries: <em>must</em>, <em>probably</em>, <em>suggests</em>, <em>may</em>. One is enough. Three hedges on one claim tell the room you do not believe it yourself.",
            "Elige una palabra que diga hasta dónde llega la evidencia: <em>must</em>, <em>probably</em>, <em>suggests</em>, <em>may</em>. Con una basta. Tres atenuantes sobre una misma afirmación le dicen a la sala que ni tú te la crees.",
          ],
          say: "So the redesign is probably the cause.",
        },
        {
          label: ["Gap", "Gap: lo que falta"],
          html: [
            "Say what you cannot tell yet, or what would prove you wrong. It feels like weakening your case. In practice it is the sentence that makes a skeptical listener relax.",
            "Di lo que todavía no puedes saber, o lo que demostraría que te equivocas. Se siente como debilitar tu caso. En la práctica es la oración que hace que alguien escéptico baje la guardia.",
          ],
          say: "What I can't tell yet is whether it's the layout or the new prices. We changed both the same week.",
        },
      ],
    },
    {
      t: "phrases",
      title: [
        "The certainty ladder, from strongest to weakest",
        "La escalera de certeza, de más a menos",
      ],
      items: [
        {
          en: "It must be ___. / They must have ___.",
          use: [
            "Nearly certain: the evidence leaves one explanation. <em>They must have left in a hurry.</em>",
            "Casi seguro: la evidencia deja una sola explicación. <em>They must have left in a hurry.</em>",
          ],
        },
        {
          en: "It can't be ___. / They can't have ___.",
          use: [
            "Nearly certain that something is not the case. <em>It can't be the server; the other apps are fine.</em>",
            "Casi seguro de que algo no es. <em>It can't be the server; the other apps are fine.</em>",
          ],
        },
        {
          en: "It looks as though ___. / It looks like ___.",
          use: [
            "Strong, and tied to what is in view. The second form is the everyday one.",
            "Fuerte, y atado a lo que está a la vista. La segunda forma es la de todos los días.",
          ],
        },
        {
          en: "___ is probably ___.",
          use: [
            "More likely than not. The honest default for most business conclusions.",
            "Más probable que no. La opción honesta para la mayoría de las conclusiones de negocio.",
          ],
        },
        {
          en: "This suggests ___. / The numbers suggest that ___.",
          use: [
            "Lets the evidence do the talking. Measured and professional; good with data.",
            "Deja que hable la evidencia. Mesurada y profesional; funciona bien con datos.",
          ],
        },
        {
          en: "My read is that ___.",
          use: [
            "Marks a judgment as yours and invites other reads. Useful with senior people.",
            "Marca un juicio como tuyo e invita a otras lecturas. Útil con gente de mayor jerarquía.",
          ],
        },
        {
          en: "It may be ___. / They might have ___.",
          use: [
            "Possible, one explanation among several. Use it when you would not bet on it.",
            "Posible, una explicación entre varias. Úsala cuando no apostarías por ella.",
          ],
        },
        {
          en: "I can't tell whether ___.",
          use: [
            "The bottom of the ladder, and a respectable place to stand.",
            "El último escalón, y un lugar perfectamente digno donde pararse.",
          ],
        },
        {
          en: "I say that because ___.",
          use: [
            "The bridge from claim to evidence when you forgot to give it.",
            "El puente de la afirmación a la evidencia cuando se te olvidó darla.",
          ],
        },
        {
          en: "I can't rule out ___.",
          use: [
            "Names the other explanation before someone else raises it.",
            "Nombra la otra explicación antes de que alguien más la plantee.",
          ],
        },
        {
          en: "What would change my mind is ___.",
          use: [
            "Shows the claim can be tested. Few lines earn more trust.",
            "Muestra que la afirmación se puede poner a prueba. Pocas frases ganan más confianza.",
          ],
        },
        {
          en: "What makes you say that?",
          use: [
            "The neutral way to ask someone else for their Y. Curious in tone, not a challenge.",
            "La forma neutral de pedirle a alguien su Y. En tono de curiosidad, no de reto.",
          ],
        },
      ],
    },
    {
      t: "compare",
      title: [
        "Claims that fall, claims that stand",
        "Afirmaciones que se caen, afirmaciones que se sostienen",
      ],
      rows: [
        {
          weak: "The client is going to cancel.",
          strong:
            "I think the client is going to cancel. They've skipped the last two reviews, and they asked when the contract ends.",
          why: [
            "The same prediction, now with two things the room can verify. Nobody has to ask what makes you say that.",
            "La misma predicción, ahora con dos cosas que la sala puede verificar. Nadie tiene que preguntar de dónde lo sacas.",
          ],
        },
        {
          weak: "Maybe the campaign perhaps didn't work so well, I'm not sure.",
          strong:
            "The campaign probably didn't work. We spent 30,000 dollars and sign-ups stayed flat.",
          why: [
            "Three hedges became one. With that evidence, <em>probably</em> is honest, and the sentence can be acted on.",
            "Tres atenuantes se volvieron uno. Con esa evidencia, <em>probably</em> es honesto, y sobre esa oración sí se puede actuar.",
          ],
        },
        {
          weak: "The new hire is definitely not going to work out.",
          strong:
            "It's early, but I'm concerned about the new hire. He's missed three deadlines in his first month.",
          why: [
            "One month of evidence does not support <em>definitely</em>. The calibrated version is harder to dismiss, and fairer to him.",
            "Un mes de evidencia no alcanza para un <em>definitely</em>. La versión calibrada es más difícil de descartar, y más justa con él.",
          ],
        },
        {
          weak: "Sales dropped because of the price increase.",
          strong:
            "Sales dropped the same week as the price increase, which suggests the two are connected. I can't rule out the holiday.",
          why: [
            "Two things happening together is evidence, not proof. <em>Suggests</em> says exactly that, and the last line gets ahead of the objection.",
            "Dos cosas que ocurren juntas son evidencia, no prueba. <em>Suggests</em> dice justo eso, y la última línea se adelanta a la objeción.",
          ],
        },
        {
          weak: "Somebody forgot to update the file.",
          strong: "The file can't have been updated. It still shows last quarter's prices.",
          why: [
            "The deduction is about the file, where the evidence is. Who forgot, and whether anyone did, is a separate claim you cannot support yet.",
            "La deducción es sobre el archivo, que es donde está la evidencia. Quién lo olvidó, y si alguien lo olvidó, es otra afirmación que todavía no puedes sostener.",
          ],
        },
        {
          weak: "I feel like the team is not motivated.",
          strong:
            "The team seems less engaged than in the spring. Attendance at the Friday demo went from twelve people to four.",
          why: [
            "<em>I feel like</em> asks the room to trust your mood. <em>Seems</em> plus a count asks them to look at what you looked at.",
            "<em>I feel like</em> le pide a la sala que confíe en tu estado de ánimo. <em>Seems</em> con un conteo le pide que vea lo mismo que tú viste.",
          ],
        },
      ],
    },
    {
      t: "speak",
      title: ["Picture 1: the desk", "Imagen 1: el escritorio"],
      prompt: [
        "What happened here, and how do you know? In the think time, find three things you can see and decide what each one tells you. Then make three claims, each with its evidence, and choose a certainty word for each. Do not describe the whole desk; that was the last lesson. Every sentence now needs both halves.",
        "¿Qué pasó aquí, y cómo lo sabes? En el tiempo de pensar, encuentra tres cosas que puedas ver y decide qué te dice cada una. Luego haz tres afirmaciones, cada una con su evidencia, y elige una palabra de certeza para cada una. No describas todo el escritorio; eso fue la lección anterior. Ahora cada oración necesita sus dos mitades.",
      ],
      image: {
        src: "/images/course/persuasive-speaking/desk-left-in-a-hurry.jpg",
        alt: [
          "An office desk with a full coffee, a half-eaten sandwich, a chair pushed back with a jacket on it, a phone face-down and an open drawer.",
          "Un escritorio de oficina con un café lleno, un sándwich a medio comer, una silla echada hacia atrás con un saco encima, un celular boca abajo y un cajón abierto.",
        ],
      },
      think: 30,
      speak: 40,
      frame:
        "I conclude ___ because I see ___. They must have ___, because ___. They probably ___, because ___.",
      checklist: [
        ["I made three claims.", "Hice tres afirmaciones."],
        [
          "Each claim had a <em>because</em> with something visible in the picture.",
          "Cada afirmación tuvo un <em>because</em> con algo visible en la imagen.",
        ],
        [
          "I used at least two different levels of certainty.",
          "Usé por lo menos dos niveles distintos de certeza.",
        ],
        ["I did not state a guess as a fact.", "No dije una suposición como si fuera un hecho."],
        [
          "I used <em>must have</em> plus a past participle correctly at least once.",
          "Usé bien <em>must have</em> con participio pasado por lo menos una vez.",
        ],
      ],
      model:
        "I conclude that someone left this desk in a hurry, because the chair is pushed back and a drawer is still open. They must have been in the middle of lunch: the sandwich is half-eaten, and the coffee is still full. They probably expected to come right back, because the jacket is still on the chair and the phone is still here, face-down. I can't tell whether it was good news or bad news. Nothing on the desk says.",
    },
    {
      t: "speak",
      title: ["Picture 2: the dig", "Imagen 2: la excavación"],
      prompt: [
        "Two questions: what are they finding, and how careful is the work? Answer each with a claim and its evidence. The second question is the more interesting one, because <em>careful</em> is a judgment, and a judgment about quality is exactly what you are asked for at work.",
        "Dos preguntas: ¿qué están encontrando, y qué tan cuidadoso es el trabajo? Responde cada una con una afirmación y su evidencia. La segunda pregunta es la más interesante, porque <em>careful</em> es un juicio, y un juicio sobre la calidad es justo lo que te piden en el trabajo.",
      ],
      image: {
        src: "/images/course/persuasive-speaking/archaeological-dig.jpg",
        alt: [
          "Archaeologists uncovering a stone wall, with pottery, string grids, numbered bags and measuring rods.",
          "Arqueólogos descubriendo un muro de piedra, con cerámica, cuadrículas de cuerda, bolsas numeradas y varas de medición.",
        ],
      },
      think: 30,
      speak: 40,
      frame:
        "It looks as though ___, because ___. The work is ___. I say that because ___. This suggests ___.",
      checklist: [
        ["I answered both questions.", "Respondí las dos preguntas."],
        [
          "My judgment about the quality of the work came with at least two pieces of evidence.",
          "Mi juicio sobre la calidad del trabajo vino con por lo menos dos evidencias.",
        ],
        [
          "I said <em>pieces of evidence</em> or <em>the evidence</em>, never <em>evidences</em>.",
          "Dije <em>pieces of evidence</em> o <em>the evidence</em>, nunca <em>evidences</em>.",
        ],
        [
          "I named one thing I cannot tell from the picture.",
          "Nombré una cosa que no puedo saber a partir de la imagen.",
        ],
      ],
      model:
        "It looks as though they're uncovering a building, because I can see a stone wall coming out of the ground, and there's pottery. The work is very careful. I say that because the site is divided with string grids, the bags are numbered, and there are measuring rods. This suggests they're recording exactly where each piece was found before they move it. I can't tell how old the wall is. That would take more than a picture.",
    },
    {
      t: "h",
      text: ["The same move in a business update", "El mismo movimiento en un reporte de negocio"],
    },
    {
      t: "model",
      title: ["Why did conversions drop?", "¿Por qué bajaron las conversiones?"],
      context: [
        "Sofía runs growth for a software product. Marcus, a US vice president, opens the monthly review with a question.",
        "Sofía dirige crecimiento en un producto de software. Marcus, un vicepresidente en Estados Unidos, abre la revisión mensual con una pregunta.",
      ],
      lines: [
        {
          who: "Marcus",
          en: "Conversions dropped in October. What's going on?",
        },
        {
          who: "Sofía",
          en: "Let me give you what we see first, and then my read.",
          note: [
            "She announces the two jobs in order: observe, then infer.",
            "Anuncia los dos pasos en orden: observar y luego inferir.",
          ],
        },
        {
          who: "Sofía",
          en: "Trial-to-paid went from 18 percent in September to 11 in October. Traffic was flat. Almost all of the drop is on mobile.",
          note: [
            "Three observations. Nothing here can be argued with.",
            "Tres observaciones. Aquí no hay nada que se pueda discutir.",
          ],
        },
        {
          who: "Sofía",
          en: "My read is that the new sign-up form is the cause. It went live on October 2nd, it added three fields, and on mobile it now takes two screens.",
          note: [
            "The claim, marked as hers, with three pieces of evidence right behind it.",
            "La afirmación, marcada como suya, con tres evidencias justo detrás.",
          ],
        },
        {
          who: "Marcus",
          en: "Could it just be seasonal?",
        },
        {
          who: "Sofía",
          en: "It could, but I don't think so. Last October we went up, and desktop didn't move this year.",
          note: [
            "She takes the other explanation seriously, then answers it with evidence instead of insisting.",
            "Toma en serio la otra explicación y luego la responde con evidencia en lugar de insistir.",
          ],
        },
        {
          who: "Sofía",
          en: "What I can't tell yet is whether it's the extra fields or the second screen. We're testing both this week.",
          note: [
            "The gap, with what she is doing about it.",
            "Lo que falta, con lo que está haciendo al respecto.",
          ],
        },
        {
          who: "Sofía",
          en: "If the short form doesn't bring mobile back by Friday, I'm wrong about this, and we look at pricing next.",
          note: [
            "She says what would change her mind. A claim with an exit is easier to accept than one without.",
            "Dice qué la haría cambiar de opinión. Una afirmación con salida es más fácil de aceptar que una sin ella.",
          ],
        },
      ],
    },
    {
      t: "trap",
      title: [
        "One Spanish verb, three English meanings",
        "Un verbo en español, tres significados en inglés",
      ],
      html: [
        "<em>Debió salir temprano</em> can mean three different things, and English uses a different form for each. A deduction: <em>He <b>must have left</b> early</em> (the lights are off, so I conclude it). An obligation: <em>He <b>had to leave</b> early</em> (he had a flight). A criticism: <em>He <b>should have left</b> early</em> (and he did not). In this lesson you want the first. The form is <em>must have</em> plus a past participle: <span class='x'>✗</span> <em>He must left</em>, <span class='x'>✗</span> <em>He must to leave</em>, <span class='x'>✗</span> <em>He had to leave</em> when you mean a guess, <span class='ok'>✓</span> <em>He must have left</em>. A smaller one from <em>creo que sí</em>: <span class='x'>✗</span> <em>I think that yes</em>, <span class='ok'>✓</span> <em>I think so</em>; <span class='x'>✗</span> <em>I think that no</em>, <span class='ok'>✓</span> <em>I don't think so</em>. Then the habit that matters most. In Mexican professional speech, stacking softeners, <em>yo creo que tal vez podría ser que</em>, is courtesy: it leaves the other person room. Carried into English, <em>I think maybe it could possibly be</em> is heard as a speaker with no confidence in the claim. The respect survives the translation if you move it: one certainty word on the claim, and the room you leave for others goes in a separate sentence, <em>I can't rule out the holiday</em> or <em>What's your read?</em> The opposite correction, dropping every hedge to sound direct, overshoots just as badly. <em>Definitely</em> on one month of data is not directness.",
        "<em>Debió salir temprano</em> puede significar tres cosas distintas, y el inglés usa una forma diferente para cada una. Una deducción: <em>He <b>must have left</b> early</em> (las luces están apagadas, así que lo concluyo). Una obligación: <em>He <b>had to leave</b> early</em> (tenía un vuelo). Una crítica: <em>He <b>should have left</b> early</em> (y no lo hizo). En esta lección quieres la primera. La forma es <em>must have</em> más participio pasado: <span class='x'>✗</span> <em>He must left</em>, <span class='x'>✗</span> <em>He must to leave</em>, <span class='x'>✗</span> <em>He had to leave</em> cuando lo que quieres decir es una suposición, <span class='ok'>✓</span> <em>He must have left</em>. Una más pequeña, que viene de <em>creo que sí</em>: <span class='x'>✗</span> <em>I think that yes</em>, <span class='ok'>✓</span> <em>I think so</em>; <span class='x'>✗</span> <em>I think that no</em>, <span class='ok'>✓</span> <em>I don't think so</em>. Y luego la costumbre que más pesa. En el habla profesional en México, apilar atenuantes, <em>yo creo que tal vez podría ser que</em>, es cortesía: le deja espacio a la otra persona. Llevado al inglés, <em>I think maybe it could possibly be</em> se oye como alguien que no confía en lo que afirma. El respeto sobrevive a la traducción si lo cambias de lugar: una sola palabra de certeza en la afirmación, y el espacio que les dejas a los demás va en una oración aparte, <em>I can't rule out the holiday</em> o <em>What's your read?</em> La corrección contraria, quitar todos los atenuantes para sonar directo, se pasa igual de lejos. Un <em>definitely</em> con un mes de datos no es franqueza.",
      ],
    },
    {
      t: "choice",
      title: ["Match the words to the evidence", "Ajusta las palabras a la evidencia"],
      items: [
        {
          prompt: [
            "You told your manager the supplier will miss the date. She asks: <em>What makes you say that?</em>",
            "Le dijiste a tu jefa que el proveedor no va a cumplir la fecha. Ella pregunta: <em>What makes you say that?</em>",
          ],
          options: [
            {
              en: "Trust me, I've worked with this supplier for years.",
              ok: false,
              why: [
                "Experience is a reason to listen to you. She asked what you saw this time.",
                "La experiencia es una razón para escucharte. Ella preguntó qué viste esta vez.",
              ],
            },
            {
              en: "They told us on Monday that the molds aren't finished, and molds normally take three weeks.",
              ok: true,
              why: [
                "A dated fact and a known duration. She can do the arithmetic herself and reach your conclusion.",
                "Un hecho con fecha y una duración conocida. Ella sola puede hacer la cuenta y llegar a tu conclusión.",
              ],
            },
            {
              en: "It's what always happens with them at the end of the year.",
              ok: false,
              why: [
                "A pattern with no instances. If it always happens, name the last two times.",
                "Un patrón sin casos. Si siempre pasa, menciona las últimas dos veces.",
              ],
            },
          ],
        },
        {
          prompt: [
            "The log shows an error at 2:14 a.m., and this morning's report is empty. How do you say what happened?",
            "El registro muestra un error a las 2:14 a.m., y el reporte de esta mañana está vacío. ¿Cómo dices lo que pasó?",
          ],
          options: [
            {
              en: "Maybe the job could have had some kind of problem during the night.",
              ok: false,
              why: [
                "The evidence is strong and the sentence is not. Under-claiming makes people doubt a thing you know.",
                "La evidencia es fuerte y la oración no. Quedarte corto hace que la gente dude de algo que sí sabes.",
              ],
            },
            {
              en: "The overnight job must have failed. The log shows an error at 2:14, and the report is empty.",
              ok: true,
              why: [
                "<em>Must have</em> fits: two observations and one explanation that covers both.",
                "<em>Must have</em> queda bien: dos observaciones y una sola explicación que cubre las dos.",
              ],
            },
            {
              en: "The job failed because someone changed the configuration yesterday.",
              ok: false,
              why: [
                "The first half is supported. The cause is a new claim, and you have no evidence for it yet.",
                "La primera mitad tiene sustento. La causa es una afirmación nueva, y todavía no tienes evidencia para ella.",
              ],
            },
          ],
        },
        {
          prompt: [
            "One customer has complained about the new packaging. Your team wants to know whether there is a problem.",
            "Un cliente se quejó del empaque nuevo. Tu equipo quiere saber si hay un problema.",
          ],
          options: [
            {
              en: "Customers hate the new packaging.",
              ok: false,
              why: [
                "One complaint became all customers. The first person to check the numbers will stop trusting your summaries.",
                "Una queja se convirtió en todos los clientes. La primera persona que revise los números va a dejar de confiar en tus resúmenes.",
              ],
            },
            {
              en: "There's no problem. It was just one person.",
              ok: false,
              why: [
                "Equally overconfident in the other direction. One complaint does not prove there is no problem either.",
                "Igual de confiado, pero en la otra dirección. Una queja tampoco prueba que no haya problema.",
              ],
            },
            {
              en: "We've had one complaint so far. It may be a one-off, so I'd watch returns for two weeks before we change anything.",
              ok: true,
              why: [
                "The fact, a calibrated <em>may</em>, and what would settle it.",
                "El hecho, un <em>may</em> calibrado y lo que resolvería la duda.",
              ],
            },
          ],
        },
        {
          prompt: [
            "The CFO asks why third-quarter costs were up. You have part of the answer.",
            "El director de finanzas pregunta por qué subieron los costos del tercer trimestre. Tienes una parte de la respuesta.",
          ],
          options: [
            {
              en: "I can't say for certain yet. Freight is up 20 percent, which probably explains about half. I'm still checking the rest.",
              ok: true,
              why: [
                "What you know, how far it goes, and where your knowledge stops. He can plan around that.",
                "Lo que sabes, hasta dónde alcanza y dónde termina lo que sabes. Con eso él ya puede planear.",
              ],
            },
            {
              en: "It was the freight.",
              ok: false,
              why: [
                "Clean and confident, and half wrong. When the other half surfaces, this answer is what he remembers.",
                "Limpio y seguro, y equivocado a medias. Cuando aparezca la otra mitad, de esta respuesta es de lo que se va a acordar.",
              ],
            },
            {
              en: "I don't know yet. I'll have to look into it.",
              ok: false,
              why: [
                "Honest, but it throws away the half you do know.",
                "Honesto, pero desperdicia la mitad que sí sabes.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Five of thirty people came to Friday's training. The same session on Tuesday had twenty-six. What do you conclude?",
            "Cinco de treinta personas fueron a la capacitación del viernes. La misma sesión, el martes, tuvo veintiséis. ¿Qué concluyes?",
          ],
          options: [
            {
              en: "People clearly don't care about training.",
              ok: false,
              why: [
                "A claim about motives, and Tuesday's twenty-six contradict it.",
                "Una afirmación sobre motivos, y los veintiséis del martes la contradicen.",
              ],
            },
            {
              en: "Obviously the invitation didn't reach them.",
              ok: false,
              why: [
                "Possible, but nothing you saw points to it, and <em>obviously</em> claims more than you have.",
                "Posible, pero nada de lo que viste apunta ahí, y <em>obviously</em> afirma más de lo que tienes.",
              ],
            },
            {
              en: "It looks as though the timing was the problem. It was at four on a Friday, and Tuesday's session had twenty-six.",
              ok: true,
              why: [
                "The conclusion uses both numbers, and <em>it looks as though</em> is as strong as they allow.",
                "La conclusión usa los dos números, e <em>it looks as though</em> es tan fuerte como ellos lo permiten.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "rewrite",
      title: [
        "Give it its evidence, and the right strength",
        "Dale su evidencia y la fuerza correcta",
      ],
      items: [
        {
          task: [
            "The claim has no evidence. Add two things someone could verify. (Invent reasonable ones.)",
            "La afirmación no trae evidencia. Agrega dos cosas que alguien podría verificar. (Inventa unas razonables.)",
          ],
          before: "I think the Bogotá office is struggling.",
          after:
            "I think the Bogotá office is struggling. They've missed their target three months in a row, and two of their five account managers left in September.",
          why: [
            "The claim did not change. It now arrives with a count and an event, so the next question is what to do about it and not whether it is true.",
            "La afirmación no cambió. Ahora llega con un conteo y un evento, así que la siguiente pregunta es qué hacer al respecto y ya no si es cierto.",
          ],
        },
        {
          task: [
            "Too many hedges for this evidence. Keep one.",
            "Demasiados atenuantes para esta evidencia. Quédate con uno.",
          ],
          before:
            "I think that maybe it's possible that the delay could be related in some way to the new approval step, because orders took two days before it and take five now.",
          after:
            "The delay is probably caused by the new approval step. Orders took two days before it and take five now.",
          why: [
            "The evidence was good all along. Five softeners were hiding it; <em>probably</em> is all the caution it needs.",
            "La evidencia siempre fue buena. Cinco atenuantes la estaban tapando; <em>probably</em> es toda la cautela que necesita.",
          ],
        },
        {
          task: [
            "Too certain for this evidence. Bring it down a level and say what it rests on.",
            "Demasiado segura para esta evidencia. Bájala un nivel y di en qué se apoya.",
          ],
          before: "Our competitor is definitely going to cut prices in January.",
          after:
            "Our competitor may cut prices in January. They did it the last two years, and they've just hired a new head of sales.",
          why: [
            "Nobody can know a competitor's plans. <em>May</em> plus a pattern is a forecast the room can plan around; <em>definitely</em> is a bet with your name on it.",
            "Nadie puede conocer los planes de un competidor. <em>May</em> con un patrón es un pronóstico con el que la sala puede planear; <em>definitely</em> es una apuesta con tu nombre.",
          ],
        },
        {
          task: [
            "Turn this into a deduction with <em>must have</em>, and take the blame out.",
            "Conviértelo en una deducción con <em>must have</em>, y quítale la culpa.",
          ],
          before:
            "I am sure that somebody in finance changed the formula, because the totals are different.",
          after:
            "The formula must have changed. The totals don't match last week's file, and nothing else in the sheet is different.",
          why: [
            "The evidence supports a change, and it does not say who. The deduction stops where the evidence stops.",
            "La evidencia sostiene que hubo un cambio, y no dice quién lo hizo. La deducción se detiene donde se detiene la evidencia.",
          ],
        },
      ],
    },
    {
      t: "speak",
      title: ["At work: explain a result", "En el trabajo: explica un resultado"],
      prompt: [
        "Pick one real result from the last month that needs explaining: a number that moved, a deadline that slipped, a deal that closed or did not. In the think time, write the observation, your claim, your certainty word and your gap. Then explain it as if a senior person had just asked you why.",
        "Elige un resultado real del último mes que necesite explicación: un número que se movió, una fecha que se recorrió, un trato que se cerró o no. En el tiempo de pensar, escribe la observación, tu afirmación, tu palabra de certeza y lo que falta. Luego explícalo como si alguien de mayor jerarquía te acabara de preguntar por qué.",
      ],
      think: 30,
      speak: 45,
      frame:
        "Here's what we see: ___. My read is that ___, because ___. So it's probably ___. What I can't tell yet is ___.",
      checklist: [
        ["I gave the observation before the claim.", "Di la observación antes de la afirmación."],
        [
          "My claim had at least one piece of evidence a listener could check.",
          "Mi afirmación tuvo por lo menos una evidencia que quien escucha podría verificar.",
        ],
        [
          "I used exactly one certainty word on the claim.",
          "Usé exactamente una palabra de certeza en la afirmación.",
        ],
        [
          "I named the gap, or what would change my mind.",
          "Nombré lo que falta, o lo que me haría cambiar de opinión.",
        ],
        ["I did not blame a person without evidence.", "No culpé a nadie sin evidencia."],
      ],
      model:
        "Here's what we see: on-time delivery fell from 96 percent in August to 88 in September. My read is that the new routing software is behind it, because the drop started the week we switched, and the late deliveries are almost all on routes the software redrew. So it's probably a configuration problem and not a driver problem. What I can't tell yet is whether it affects every region or only the north. I'll have that by Thursday.",
    },
    {
      t: "takeaways",
      items: [
        [
          "<em>I conclude X because I see Y.</em> The claim is yours; the evidence belongs to everyone.",
          "<em>I conclude X because I see Y.</em> La afirmación es tuya; la evidencia es de todos.",
        ],
        [
          "Match your words to your evidence: <em>must</em>, <em>probably</em>, <em>suggests</em>, <em>may</em>, <em>I can't tell</em>.",
          "Ajusta tus palabras a tu evidencia: <em>must</em>, <em>probably</em>, <em>suggests</em>, <em>may</em>, <em>I can't tell</em>.",
        ],
        [
          "One certainty word per claim. Put the courtesy in a separate sentence.",
          "Una palabra de certeza por afirmación. La cortesía va en una oración aparte.",
        ],
        [
          "Say the gap: what you cannot tell yet, or what would change your mind.",
          "Di lo que falta: lo que todavía no puedes saber, o lo que te haría cambiar de opinión.",
        ],
        [
          "<em>Must have left</em> is a deduction. <em>Had to leave</em> is an obligation.",
          "<em>Must have left</em> es una deducción. <em>Had to leave</em> es una obligación.",
        ],
      ],
    },
  ],
};
