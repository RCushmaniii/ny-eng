import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "cheat-sheet",
  slugEs: "guia-rapida",
  title: ["The Conflict Cheat Sheet", "La Guía Rápida del Conflicto"],
  summary: [
    "The whole course on one page: the five-step sequence, the phrase bank by situation, the words to avoid, and three scenarios to rehearse out loud.",
    "Todo el curso en una página: la secuencia de cinco pasos, el banco de frases por situación, las palabras que conviene evitar y tres escenarios para ensayar en voz alta.",
  ],
  description: [
    "Your one-page reference for conflict in English: the five-step sequence, phrases by situation, words that escalate, and three scenarios to rehearse aloud.",
    "Tu referencia de una página para el conflicto en inglés: la secuencia de cinco pasos, frases por situación, palabras que escalan y tres escenarios.",
  ],
  minutes: 15,
  blocks: [
    {
      t: "p",
      html: [
        "This page is the course compressed for the five minutes before a hard conversation. Conflict is information: the disagreement tells you what the other person is protecting, and the sequence below is how you find it and use it. Read the phrases once, then rehearse the three scenarios out loud. Reading them silently does very little; your voice has to have said the words before the day you need them.",
        "Esta página es el curso comprimido para los cinco minutos previos a una conversación difícil. El conflicto es información: el desacuerdo te dice qué está protegiendo la otra persona, y la secuencia de abajo es la forma de encontrarlo y usarlo. Lee las frases una vez y luego ensaya los tres escenarios en voz alta. Leerlos en silencio sirve de muy poco; tu voz tiene que haber dicho las palabras antes del día en que las necesites.",
      ],
    },
    {
      t: "framework",
      title: [
        "The sequence: cool, listen, ask, find the goal, propose",
        "La secuencia: enfría, escucha, pregunta, encuentra la meta, propón",
      ],
      lead: [
        "The order matters. A proposal made before the other person feels heard is heard as an attack.",
        "El orden importa. Una propuesta hecha antes de que la otra persona se sienta escuchada se oye como un ataque.",
      ],
      steps: [
        {
          label: ["Cool", "Enfría"],
          html: [
            "Take three seconds before you answer. Speak more slowly and more quietly than the other person. If the tension is in the room, name it without blame.",
            "Toma tres segundos antes de contestar. Habla más despacio y más bajo que la otra persona. Si la tensión está en la sala, nómbrala sin culpar a nadie.",
          ],
          say: "Give me a second to think about that. I think we're talking past each other.",
        },
        {
          label: ["Listen", "Escucha"],
          html: [
            "Say back what you heard, in your own words, and check it. Acknowledging a feeling does not concede the point.",
            "Repite lo que escuchaste, con tus propias palabras, y verifícalo. Reconocer una emoción no es conceder el punto.",
          ],
          say: "So the deadline moved and nobody told your team. I can see why that's frustrating. Did I get that right?",
        },
        {
          label: ["Ask", "Pregunta"],
          html: [
            "Ask open questions you do not already know the answer to. If the question starts with <em>Why did you</em>, rebuild it.",
            "Haz preguntas abiertas cuya respuesta no conozcas. Si la pregunta empieza con <em>Why did you</em>, reconstrúyela.",
          ],
          say: "Help me understand what's driving the date on your side.",
        },
        {
          label: ["Find the goal", "Encuentra la meta"],
          html: [
            "Name one specific outcome you both want, then put both concerns into a single how-do-we question.",
            "Nombra un resultado específico que ambos quieren y luego pon las dos preocupaciones en una sola pregunta de tipo how do we.",
          ],
          say: "We both want the client to renew. So how do we hit your date without risking the release?",
        },
        {
          label: ["Propose", "Propón"],
          html: [
            "Offer two options and recommend one, with the reason in their terms first.",
            "Ofrece dos opciones y recomienda una, con la razón primero en sus términos.",
          ],
          say: "I see two ways. I'd go with the first: it covers your concern about staffing, and it gives my team the testing time.",
        },
      ],
    },
    {
      t: "compare",
      title: ["Words that heat, words that cool", "Palabras que calientan, palabras que enfrían"],
      labels: [
        ["Heats", "Calienta"],
        ["Cools", "Enfría"],
      ],
      rows: [
        {
          weak: "You always send it late.",
          strong: "The last two reports came in after the deadline.",
          why: [
            "Absolutes invite the one exception. A count cannot be argued with.",
            "Los absolutos invitan a buscar la única excepción. Un conteo no se puede rebatir.",
          ],
        },
        {
          weak: "Calm down.",
          strong: "Let's take a minute.",
          why: [
            "One judges their reaction. The other proposes something you both do.",
            "Una juzga su reacción. La otra propone algo que hacen los dos.",
          ],
        },
        {
          weak: "With all due respect, that won't work.",
          strong: "I see a problem with that. Can I walk you through it?",
          why: [
            "<em>With all due respect</em> announces that disrespect is coming. Say the problem and ask for the floor.",
            "<em>With all due respect</em> anuncia que viene una falta de respeto. Di el problema y pide la palabra.",
          ],
        },
        {
          weak: "Obviously, we can't do that.",
          strong: "I don't think we can do that, and here's why.",
          why: [
            "<em>Obviously</em> tells them they missed something simple. A reason treats them as an equal.",
            "<em>Obviously</em> les dice que no vieron algo sencillo. Una razón los trata como iguales.",
          ],
        },
        {
          weak: "You're wrong about the numbers.",
          strong: "I'm getting a different number. Can we compare sources?",
          why: [
            "Disagree with the idea and the data, never with the person.",
            "Desacuerdo con la idea y con el dato, nunca con la persona.",
          ],
        },
        {
          weak: "Why didn't you tell me?",
          strong: "Walk me through what happened.",
          why: [
            "The first is an accusation with a question mark. The second is a request for information.",
            "La primera es una acusación con signo de interrogación. La segunda es una petición de información.",
          ],
        },
        {
          weak: "Yes, sure, no problem.",
          strong: "I can't commit to Friday. I can do Tuesday.",
          why: [
            "The invisible no. A soft yes you cannot keep is heard as agreement and remembered as a broken promise.",
            "El no invisible. Un sí suave que no puedes cumplir se escucha como acuerdo y se recuerda como una promesa rota.",
          ],
        },
        {
          weak: "I'm sorry if you were offended.",
          strong: "I'm sorry I said that.",
          why: [
            "No <em>if</em>, no <em>but</em>. Name what you did.",
            "Sin <em>if</em>, sin <em>but</em>. Nombra lo que hiciste.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: ["Phrase bank 1: before it escalates", "Banco de frases 1: antes de que escale"],
      items: [
        {
          en: "Give me a second to think about that.",
          use: ["Cool. Buys the three seconds.", "Enfría. Te compra los tres segundos."],
        },
        {
          en: "I think we're talking past each other.",
          use: [
            "Cool. Names the tension without assigning it to anyone.",
            "Enfría. Nombra la tensión sin adjudicársela a nadie.",
          ],
        },
        {
          en: "Let me make sure I understand. You're saying the scope changed after you'd staffed it.",
          use: [
            "Listen. Reflect back in your own words.",
            "Escucha. Devuelve lo que oíste con tus propias palabras.",
          ],
        },
        {
          en: "I can see why that's frustrating.",
          use: [
            "Listen. Validates the feeling; it does not say they are right.",
            "Escucha. Valida la emoción; no dice que tengan razón.",
          ],
        },
        {
          en: "Did I get that right?",
          use: [
            "Listen. The check that makes people feel heard.",
            "Escucha. La verificación que hace que la gente se sienta escuchada.",
          ],
        },
        {
          en: "Help me understand how you got to that number.",
          use: [
            "Ask. Only when you want the answer.",
            "Pregunta. Solo cuando de verdad quieres la respuesta.",
          ],
        },
        {
          en: "What's your biggest concern with this?",
          use: [
            "Ask. Surfaces the interest behind the objection.",
            "Pregunta. Saca a la luz el interés detrás de la objeción.",
          ],
        },
        {
          en: "What would a good outcome look like for you?",
          use: [
            "Ask. Opens the door to the shared goal.",
            "Pregunta. Abre la puerta a la meta en común.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: ["Phrase bank 2: in the disagreement", "Banco de frases 2: dentro del desacuerdo"],
      items: [
        {
          en: "I don't agree with that part, and I'd like to explain why.",
          use: [
            "Disagree with the idea. Clear, with no softener that erases it.",
            "Desacuerdo con la idea. Claro, sin un suavizante que lo borre.",
          ],
        },
        {
          en: "I can't support that as it stands. Here's what would change my mind.",
          use: [
            "A visible no to a peer, with a path to yes.",
            "Un no visible a un colega, con un camino hacia el sí.",
          ],
        },
        {
          en: "I think we want the same thing here: a launch nobody has to apologize for.",
          use: ["Find the goal. Make it specific.", "Encuentra la meta. Que sea específica."],
        },
        {
          en: "So how do we get you the demo without risking the release?",
          use: ["Find the goal. The pivot question.", "Encuentra la meta. La pregunta del giro."],
        },
        {
          en: "Can I put a couple of options on the table?",
          use: ["Propose. Options, plural.", "Propón. Opciones, en plural."],
        },
        {
          en: "You said the risk is burnout in Q4. This takes that load off your team.",
          use: [
            "Propose. Your idea as the answer to their concern.",
            "Propón. Tu idea como la respuesta a su preocupación.",
          ],
        },
        {
          en: "My recommendation is to wait. Two reasons.",
          use: ["Debate. Claim first.", "Debate. La conclusión primero."],
        },
        {
          en: "The strongest case for the other option is cost.",
          use: [
            "Debate. Their best case before your answer.",
            "Debate. Su mejor argumento antes de tu respuesta.",
          ],
        },
        {
          en: "That's a fair point.",
          use: ["Debate. Concede, pause, continue.", "Debate. Concede, haz una pausa, continúa."],
        },
        {
          en: "I've changed my mind. Here's what did it.",
          use: [
            "Debate. Say it out loud and credit the argument.",
            "Debate. Dilo en voz alta y dale el crédito al argumento.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: [
        "Phrase bank 3: when it gets heated, and afterward",
        "Banco de frases 3: cuando sube de tono, y después",
      ],
      items: [
        {
          en: "I'd like to finish this point. Then I want to hear yours.",
          use: ["Interrupted.", "Interrupción."],
        },
        {
          en: "I want to solve this with you, and I can't do it at this volume.",
          use: ["A raised voice.", "Voz alzada."],
        },
        {
          en: "I'd rather keep this about the plan.",
          use: ["A personal remark.", "Comentario personal."],
        },
        {
          en: "We see that one differently. Let's sort it out after this.",
          use: ["Contradicted in front of others.", "Contradicción frente a otros."],
        },
        {
          en: "I don't think we'll settle this today. Can we pick it up tomorrow at ten?",
          use: ["Pausing the meeting. Always with a time.", "Pausar la junta. Siempre con hora."],
        },
        {
          en: "This is getting long for email. Do you have ten minutes for a call?",
          use: [
            "Written conflict, after two replies.",
            "Conflicto por escrito, después de dos respuestas.",
          ],
        },
        {
          en: "Do you have two minutes? I want to circle back on yesterday.",
          use: ["Repair. The opening.", "Reparación. La apertura."],
        },
        {
          en: "I was sharper than I needed to be, and I'm sorry about that.",
          use: ["Repair. Specific, once.", "Reparación. Específica, una sola vez."],
        },
        {
          en: "I stand by the concern. I don't stand by how I raised it.",
          use: ["Repair. Keeps your position.", "Reparación. Conserva tu postura."],
        },
        {
          en: "Just so we're working from the same notes, here's what I have.",
          use: ["Follow-up. The written recap.", "Seguimiento. El resumen por escrito."],
        },
      ],
    },
    {
      t: "choice",
      title: ["Quick check: which step comes next?", "Revisión rápida: ¿qué paso sigue?"],
      items: [
        {
          prompt: [
            "A colleague opens a call with: <em>Your team dropped the ball again, and I'm the one who has to explain it to the client.</em> You have a good solution ready.",
            "Un colega abre una llamada con: <em>Your team dropped the ball again, and I'm the one who has to explain it to the client.</em> Tú ya tienes lista una buena solución.",
          ],
          options: [
            {
              en: "Here's what I propose: we send a corrected file today and add a second review step.",
              ok: false,
              why: [
                "A good proposal at the wrong moment. He has not been heard yet, so he will not hear it.",
                "Una buena propuesta en el momento equivocado. Todavía no se siente escuchado, así que no la va a oír.",
              ],
            },
            {
              en: "You're the one facing the client, and that's a hard spot to be in. Tell me what they said.",
              ok: true,
              why: [
                "Cool and listen come first. The solution will land in two minutes, after he has been heard.",
                "Enfriar y escuchar van primero. La solución va a caer bien en dos minutos, cuando ya se sienta escuchado.",
              ],
            },
            {
              en: "Again? It happened once before, in March.",
              ok: false,
              why: [
                "You are correcting his absolute before he has cooled down. Accurate, and it starts the wrong argument.",
                "Estás corrigiendo su absoluto antes de que se enfríe. Es exacto, y abre la discusión equivocada.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You have listened and asked. You now know that Priya needs to show savings this quarter and you need to keep two contractors through December.",
            "Ya escuchaste y preguntaste. Ahora sabes que Priya necesita mostrar ahorros este trimestre y tú necesitas conservar a dos contratistas hasta diciembre.",
          ],
          options: [
            {
              en: "So we both want the project delivered without going over the annual budget. How do we show savings this quarter and still keep the two contractors through December?",
              ok: true,
              why: [
                "The shared goal, then both interests in one how-do-we question.",
                "La meta en común, y luego los dos intereses en una sola pregunta de tipo how do we.",
              ],
            },
            {
              en: "I understand, but I really do need those contractors.",
              ok: false,
              why: [
                "Back to your position. Nothing she told you has been used.",
                "De regreso a tu posición. No usaste nada de lo que ella te dijo.",
              ],
            },
            {
              en: "Can you tell me more about why the savings matter?",
              ok: false,
              why: [
                "You already know. More questions now feel like stalling; it is time to move to the goal.",
                "Ya lo sabes. Más preguntas en este punto se sienten como dar largas; es momento de pasar a la meta.",
              ],
            },
          ],
        },
        {
          prompt: [
            "A peer asks whether you can take over his client reviews next month. You cannot; your team is at capacity.",
            "Un colega te pregunta si puedes hacerte cargo de sus revisiones con clientes el próximo mes. No puedes; tu equipo está al tope.",
          ],
          options: [
            {
              en: "Let me see what I can do. It might be a little complicated.",
              ok: false,
              why: [
                "The invisible no. He will hear a probable yes and plan around it.",
                "El no invisible. Él va a oír un sí probable y va a planear con eso.",
              ],
            },
            {
              en: "That's not possible.",
              ok: false,
              why: [
                "Clear and cold. It closes the conversation with no reason and no alternative.",
                "Claro y frío. Cierra la conversación sin razón y sin alternativa.",
              ],
            },
            {
              en: "I can't take them on next month; my team is at capacity through the audit. I could cover the two largest accounts, or all of them starting in November.",
              ok: true,
              why: [
                "A visible no, a reason, and two things you can do.",
                "Un no visible, una razón y dos cosas que sí puedes hacer.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Yesterday's meeting ended badly. You were short with Elena, and the question of who owns the report was left hanging.",
            "La junta de ayer terminó mal. Fuiste cortante con Elena, y quedó en el aire quién es responsable del reporte.",
          ],
          options: [
            {
              en: "Hi Elena, following up on the report. As discussed, your team owns it going forward. Thanks.",
              ok: false,
              why: [
                "It skips the repair and records as settled something that was not.",
                "Se salta la reparación y registra como resuelto algo que no lo estaba.",
              ],
            },
            {
              en: "Elena, do you have a few minutes? I was short with you yesterday and I'm sorry about that. I also don't think we settled who owns the report, and I'd like to work that out with you.",
              ok: true,
              why: [
                "Repair first, then reopen the unsettled issue honestly.",
                "Primero la reparación, y luego reabre con honestidad el tema que quedó pendiente.",
              ],
            },
            {
              en: "Sorry if yesterday got a little tense. Anyway, about the report.",
              ok: false,
              why: [
                "<em>Sorry if</em> and <em>anyway</em> turn the apology into a formality on the way to what you want.",
                "<em>Sorry if</em> y <em>anyway</em> convierten la disculpa en un trámite rumbo a lo que tú quieres.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "h",
      text: ["Three scenarios to rehearse out loud", "Tres escenarios para ensayar en voz alta"],
    },
    {
      t: "speak",
      title: ["Scenario 1: the missed handoff", "Escenario 1: la entrega que no llegó"],
      prompt: [
        "Marcus calls you, clearly irritated: <em>I've been waiting on your team's data since Monday. I can't keep covering for you with the client.</em> The data was late because his team changed the format request on Friday. Cool, reflect back what you heard, and ask one real question. Do not explain or propose yet.",
        "Marcus te llama, claramente irritado: <em>I've been waiting on your team's data since Monday. I can't keep covering for you with the client.</em> Los datos se retrasaron porque su equipo cambió el formato solicitado el viernes. Enfría, devuelve lo que escuchaste y haz una pregunta real. Todavía no expliques ni propongas.",
      ],
      think: 15,
      speak: 30,
      frame:
        "Give me a second. So ___, and ___. I can see why ___. Did I get that right? What ___?",
      checklist: [
        [
          "I paused before speaking and kept my pace slow.",
          "Hice una pausa antes de hablar y mantuve un ritmo lento.",
        ],
        [
          "I reflected his situation in my own words.",
          "Devolví su situación con mis propias palabras.",
        ],
        [
          "I acknowledged the frustration without saying he was right.",
          "Reconocí la frustración sin decir que tenía razón.",
        ],
        [
          "I did not defend my team or mention the format change yet.",
          "No defendí a mi equipo ni mencioné todavía el cambio de formato.",
        ],
        ["I ended with an open question.", "Cerré con una pregunta abierta."],
      ],
      model:
        "Give me a second, Marcus, I want to get this right. So you've been waiting since Monday, the client is asking, and you're the one who has to keep explaining. I can see why that's frustrating. Did I get that right? What did you tell them, and when are they expecting it?",
    },
    {
      t: "speak",
      title: ["Scenario 2: the shared budget", "Escenario 2: el presupuesto compartido"],
      prompt: [
        "You and Priya share one budget line. She wants to spend what is left on a customer event in November. You want it for a data tool your team has needed all year. You have listened; you know she is worried about three large accounts that are up for renewal. Name the shared goal, ask the how-do-we question, offer two options, and recommend one in her terms.",
        "Tú y Priya comparten una partida de presupuesto. Ella quiere gastar lo que queda en un evento para clientes en noviembre. Tú lo quieres para una herramienta de datos que tu equipo necesitó todo el año. Ya escuchaste; sabes que le preocupan tres cuentas grandes que están por renovar. Nombra la meta en común, haz la pregunta de tipo how do we, ofrece dos opciones y recomienda una en sus términos.",
      ],
      think: 20,
      speak: 60,
      frame:
        "We both want ___. You need ___, and I need ___. So how do we ___? One option is ___. Another is ___. I'd recommend ___, because ___.",
      checklist: [
        ["The shared goal was specific.", "La meta en común fue específica."],
        ["I stated her concern before mine.", "Dije su preocupación antes que la mía."],
        ["I offered two real options.", "Ofrecí dos opciones reales."],
        [
          "My recommendation started from her concern.",
          "Mi recomendación partió de su preocupación.",
        ],
        ["I ended by asking for her reaction.", "Cerré pidiendo su reacción."],
      ],
      model:
        "Priya, we both want those three accounts to renew in January. You need something that brings their decision-makers closer before then, and I need my team to stop building renewal reports by hand. So how do we do both with what's left in the budget? One option is a smaller event, just those three accounts, with the rest going to the tool. Another is the full event now, and the tool comes out of next year's budget in January. I'd recommend the first. A dinner with three clients gets you more time with each of them than a large event would, and the tool means we walk into each renewal with their usage numbers ready. How does that sound to you?",
    },
    {
      t: "speak",
      title: ["Scenario 3: heated, then repaired", "Escenario 3: sube de tono, y luego se repara"],
      prompt: [
        "Two parts, one after the other. First: in a meeting of ten, Luis says, loudly, <em>You clearly didn't read the brief. This is a waste of everyone's time.</em> Respond in two or three sentences and move the detail to a private conversation. Second: it is the next morning, and you also know you rolled your eyes and answered him sarcastically later in that meeting. Open the repair conversation.",
        "Dos partes, una después de la otra. Primera: en una junta de diez personas, Luis dice, en voz alta, <em>You clearly didn't read the brief. This is a waste of everyone's time.</em> Responde en dos o tres frases y lleva el detalle a una conversación privada. Segunda: es la mañana siguiente, y además sabes que más tarde en esa junta pusiste los ojos en blanco y le contestaste con sarcasmo. Abre la conversación de reparación.",
      ],
      think: 20,
      speak: 60,
      frame:
        "I did read it, and ___. I'd rather keep this about ___. Let's ___ after this. / Luis, do you have two minutes? I ___, and I'm sorry. I still ___. How did it land on your end?",
      checklist: [
        [
          "Part one was three sentences or fewer and did not answer the insult.",
          "La primera parte fue de tres frases o menos y no contestó el insulto.",
        ],
        [
          "I moved the disagreement to a private conversation with a time.",
          "Llevé el desacuerdo a una conversación privada con hora.",
        ],
        [
          "In part two I named exactly what I did.",
          "En la segunda parte nombré exactamente lo que hice.",
        ],
        [
          "I apologized once, without if or but, and without mentioning what he did.",
          "Me disculpé una vez, sin if ni but, y sin mencionar lo que él hizo.",
        ],
        ["I kept my position and asked for his side.", "Mantuve mi postura y pedí su versión."],
      ],
      model:
        "I did read it, Luis, and I came out somewhere different from you. I'd rather keep this about the proposal. Let's you and I take fifteen minutes right after this and go through the brief together. / Luis, do you have two minutes? I want to circle back on yesterday. Later in that meeting I rolled my eyes and gave you a sarcastic answer, and that wasn't okay. I'm sorry. I do still read the brief differently than you do, and I'd like to go through it with you line by line. How did it land on your end?",
    },
    {
      t: "p",
      html: [
        "This course is about conflict between peers and across teams. When the pushback comes from above, from an executive who challenges you in the middle of a presentation, the next step is the course <em>Executive Pushback &amp; Objection Handling</em> on this site.",
        "Este curso trata del conflicto entre colegas y entre áreas. Cuando la objeción viene de arriba, de alguien de dirección que te cuestiona a media presentación, el siguiente paso es el curso <em>Executive Pushback &amp; Objection Handling</em> de este sitio.",
      ],
    },
    {
      t: "takeaways",
      items: [
        [
          "Cool, listen, ask, find the goal, propose. In that order.",
          "Enfría, escucha, pregunta, encuentra la meta, propón. En ese orden.",
        ],
        [
          "Disagree with the idea in a sentence that is clear enough to be heard and warm enough to be accepted.",
          "Expresa tu desacuerdo con la idea en una frase lo bastante clara para que se oiga y lo bastante cálida para que se acepte.",
        ],
        [
          "When a line is crossed: one short sentence, then back to the work.",
          "Cuando alguien cruza una línea: una frase corta, y de regreso al trabajo.",
        ],
        [
          "Afterward, repair within a day or two and put what was agreed in writing.",
          "Después, repara dentro de uno o dos días y deja por escrito lo que se acordó.",
        ],
        [
          "Rehearse out loud. Calm is a skill, and the skill is in your voice.",
          "Ensaya en voz alta. La calma es una habilidad, y esa habilidad está en tu voz.",
        ],
      ],
    },
  ],
};
