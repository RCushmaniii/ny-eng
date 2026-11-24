import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "debate-well",
  slugEs: "debatir-bien",
  title: [
    "Debate Well: Argue the Point and Keep the Room",
    "Debate Bien: Defiende tu Punto sin Perder la Sala",
  ],
  summary: [
    "Make your case in front of the people who decide: claim first, fair to the other side, willing to concede a point and to change your mind out loud.",
    "Defiende tu caso frente a quienes deciden: primero la conclusión, con justicia hacia la otra postura y con disposición a conceder un punto y a cambiar de opinión en voz alta.",
  ],
  description: [
    "Argue a point in English without losing the room: claim, evidence, impact; state the other side's best case, concede gracefully, and challenge data fairly.",
    "Defiende un punto en inglés sin perder la sala: conclusión, evidencia e impacto; reconoce el mejor argumento contrario, concede y cuestiona datos con justicia.",
  ],
  minutes: 18,
  blocks: [
    {
      t: "p",
      html: [
        "Some disagreements happen in front of the people who will decide: a leadership team, a steering committee, a hiring panel. You and a colleague want different things, and the conversation is no longer between the two of you. You are both making a case to the room, and the room is judging two things at once: whose argument is better, and who it wants to keep working with.",
        "Algunos desacuerdos ocurren frente a quienes van a decidir: un equipo directivo, un comité, un panel de contratación. Tú y un colega quieren cosas distintas, y la conversación ya no es solo entre ustedes dos. Ambos están presentando un caso ante la sala, y la sala evalúa dos cosas al mismo tiempo: cuál argumento es mejor y con quién quiere seguir trabajando.",
      ],
    },
    {
      t: "p",
      html: [
        "Under that pressure, in a second language, two things tend to happen. Some people go quiet and let a weaker argument win. Others defend every inch, concede nothing, and win the point while losing the room. This lesson is about a third way to argue, one that is both harder to beat and easier to like.",
        "Bajo esa presión, en un segundo idioma, suelen pasar dos cosas. Hay quien se queda en silencio y deja que gane un argumento más débil. Y hay quien defiende cada centímetro, no concede nada, y gana el punto mientras pierde la sala. Esta lección trata de una tercera forma de debatir, más difícil de vencer y más fácil de apreciar.",
      ],
    },
    {
      t: "idea",
      title: [
        "The room trusts whoever is fair to the other side",
        "La sala confía en quien es justo con la otra postura",
      ],
      html: [
        "If you can state the opposing case as well as its owner would, concede what is true in it, and still show why your option is better, people believe your conclusion more. Each concession tells the room that you are following the evidence and that you would say so if it pointed the other way. A debater who never gives up a point sounds like someone protecting a position. One who gives up the right points sounds like someone with judgment.",
        "Si puedes exponer el caso contrario tan bien como lo haría su dueño, conceder lo que tiene de cierto y aun así mostrar por qué tu opción es mejor, la gente le cree más a tu conclusión. Cada concesión le dice a la sala que sigues la evidencia y que lo dirías si apuntara hacia el otro lado. Quien nunca cede un punto suena a alguien que protege una posición. Quien cede los puntos correctos suena a alguien con criterio.",
      ],
    },
    {
      t: "framework",
      title: ["Claim, evidence, impact", "Conclusión, evidencia, impacto"],
      lead: [
        "Use it any time someone turns to you in a meeting and you have thirty seconds to make your point.",
        "Úsalo cada vez que alguien voltea hacia ti en una junta y tienes treinta segundos para dejar claro tu punto.",
      ],
      steps: [
        {
          label: [
            "Claim: your position, first, in one sentence",
            "Conclusión: tu postura, primero, en una frase",
          ],
          html: [
            "Spanish rhetoric builds the context and arrives at the conclusion; it is a courteous way to bring the listener along. In an American meeting the conclusion comes first, and if you start with background someone will cut in before you reach it. Lead with what you recommend.",
            "La retórica en español construye el contexto y llega a la conclusión; es una forma cortés de llevar de la mano a quien escucha. En una junta estadounidense la conclusión va primero, y si empiezas por los antecedentes alguien te va a interrumpir antes de que llegues. Empieza con lo que recomiendas.",
          ],
          say: "I'd recommend we renew with the current vendor for one more year.",
        },
        {
          label: [
            "Evidence: your one or two strongest facts",
            "Evidencia: tus uno o dos datos más fuertes",
          ],
          html: [
            "Two strong facts beat six mixed ones. A weak fourth reason gives the other side something easy to attack, and when it falls it takes the first three with it.",
            "Dos datos fuertes le ganan a seis disparejos. Una cuarta razón débil le da a la otra parte algo fácil de atacar, y cuando cae se lleva consigo a las tres primeras.",
          ],
          say: "Switching takes my team off the roadmap for about ten weeks, and those ten weeks fall right on the Q2 launch.",
        },
        {
          label: [
            "Impact: what it means for what the room cares about",
            "Impacto: qué significa para lo que le importa a la sala",
          ],
          html: [
            "Facts do not interpret themselves. Finish with the consequence, in terms of the goal the decision-makers already hold.",
            "Los datos no se interpretan solos. Cierra con la consecuencia, en términos de la meta que ya tienen quienes deciden.",
          ],
          say: "So renewing is what lets us launch in Q2, which is what we told the board.",
        },
      ],
    },
    {
      t: "h",
      text: ["Handle the other side fairly", "Trata con justicia la otra postura"],
    },
    {
      t: "framework",
      title: ["Their best case first", "Primero su mejor argumento"],
      lead: [
        "Use it before you answer an opposing view, especially one the room finds attractive.",
        "Úsalo antes de responder a una postura contraria, sobre todo si a la sala le resulta atractiva.",
      ],
      steps: [
        {
          label: ["State their strongest argument", "Expón su argumento más fuerte"],
          html: [
            "Choose the best version of their case, the one they would sign. If you answer a weak version, the room notices, and so do they.",
            "Elige la mejor versión de su caso, la que firmarían. Si respondes a una versión débil, la sala lo nota, y la otra persona también.",
          ],
          say: "The strongest argument for switching, as I understand it, is cost: the new vendor is about 20 percent cheaper, and that's real money.",
        },
        {
          label: ["Check it with them", "Verifícalo con la otra persona"],
          html: [
            "One short question. It shows respect, and it stops them from saying later that you misrepresented them.",
            "Una pregunta corta. Muestra respeto y evita que después digan que tergiversaste su postura.",
          ],
          say: "Priya, did I get that right?",
        },
        {
          label: ["Concede what is true", "Concede lo que es cierto"],
          html: [
            "Say it plainly and do not attach a <em>but</em> to the same sentence. Let the concession stand for a second.",
            "Dilo sin rodeos y no le pegues un <em>but</em> en la misma frase. Deja que la concesión respire un segundo.",
          ],
          say: "And she's right that we're overpaying on the current contract. I'd concede that.",
        },
        {
          label: ["Turn on the one point that decides it", "Gira en el único punto que lo decide"],
          html: [
            "After a fair summary and a real concession, you have earned the right to disagree on one thing. Pick the one that settles the decision.",
            "Después de un resumen justo y una concesión real, te ganaste el derecho de estar en desacuerdo en una sola cosa. Elige la que define la decisión.",
          ],
          say: "Where I come out differently is timing. The savings start in year two, and the migration cost lands in the one quarter we can't afford it.",
        },
      ],
    },
    {
      t: "compare",
      title: [
        "Arguing the point without attacking the person",
        "Defender el punto sin atacar a la persona",
      ],
      rows: [
        {
          weak: "Well, there are many factors to consider, and given the situation with the roadmap, maybe we should think about staying.",
          strong: "My recommendation is to stay. Two reasons.",
          why: [
            "The claim comes first and the listener knows how much is coming. The weak version makes the room wait for a point that arrives as a maybe.",
            "La conclusión va primero y quien escucha sabe cuánto falta. La versión débil hace esperar a la sala por un punto que llega como un quizá.",
          ],
        },
        {
          weak: "Your numbers are wrong.",
          strong: "I'm getting a different number. Can we look at where each one comes from?",
          why: [
            "It puts two numbers on the table instead of one person on trial. You may also be the one who is off, and this version survives that.",
            "Pone dos cifras sobre la mesa en lugar de sentar a una persona en el banquillo. Además, puede que quien esté mal seas tú, y esta versión lo aguanta.",
          ],
        },
        {
          weak: "That's not true.",
          strong: "That doesn't match what I'm seeing in the March report.",
          why: [
            "<em>That's not true</em> brushes against calling someone dishonest. Pointing to a source keeps the disagreement about the data.",
            "<em>That's not true</em> roza el decirle deshonesto a alguien. Señalar una fuente mantiene el desacuerdo en los datos.",
          ],
        },
        {
          weak: "Yes, but you're forgetting the migration cost.",
          strong: "That's a fair point on price. The piece I'd add is the migration cost.",
          why: [
            "<em>You're forgetting</em> accuses. <em>I'd add</em> builds on what they said and still gets your fact in.",
            "<em>You're forgetting</em> acusa. <em>I'd add</em> construye sobre lo que dijeron y de todos modos mete tu dato.",
          ],
        },
        {
          weak: "As I already said, the risk is too high.",
          strong:
            "Let me put the risk in a number: if the migration slips by a month, we miss the launch.",
          why: [
            "Repeating a claim louder persuades no one. New evidence does, and it avoids scolding the room for not listening.",
            "Repetir una afirmación más fuerte no convence a nadie. La evidencia nueva sí, y evita regañar a la sala por no poner atención.",
          ],
        },
        {
          weak: "Everybody knows the old system is terrible.",
          strong:
            "Support logged forty tickets on the old system last month. That's the cost I'm looking at.",
          why: [
            "<em>Everybody knows</em> invites someone to say they don't. A count is hard to argue with.",
            "<em>Everybody knows</em> invita a que alguien diga que no lo sabe. Un conteo es difícil de rebatir.",
          ],
        },
        {
          weak: "Okay, okay, you're right. Forget it.",
          strong:
            "You've changed my mind on the timeline. I still think the scope needs to shrink.",
          why: [
            "It concedes one point precisely and keeps the rest. Collapsing the whole position because one part fell is a different kind of losing.",
            "Concede un punto con precisión y conserva lo demás. Tirar toda la postura porque cayó una parte es otra manera de perder.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: ["Concede, challenge, and change your mind", "Concede, cuestiona y cambia de opinión"],
      items: [
        {
          en: "That's a fair point.",
          use: [
            "The everyday concession. Say it, pause, and only then continue.",
            "La concesión de todos los días. Dila, haz una pausa y solo entonces continúa.",
          ],
        },
        {
          en: "You're right about that, and it changes part of my view.",
          use: [
            "A fuller concession, when their point really moved you.",
            "Una concesión más completa, cuando su punto de verdad te movió.",
          ],
        },
        {
          en: "I'll give you that one.",
          use: [
            "Informal, between peers. Concedes one point and implies the debate continues.",
            "Informal, entre colegas. Concede un punto y da a entender que el debate sigue.",
          ],
        },
        {
          en: "The strongest case for the other option is speed.",
          use: [
            "Opens your fair summary of their side.",
            "Abre tu resumen justo de la otra postura.",
          ],
        },
        {
          en: "Where I come out differently is on the risk.",
          use: [
            "Marks the single point of disagreement after you have conceded the rest.",
            "Marca el único punto de desacuerdo después de conceder lo demás.",
          ],
        },
        {
          en: "What's that number based on?",
          use: [
            "Challenges evidence. Ask it with real curiosity and a level voice, or it becomes an accusation.",
            "Cuestiona la evidencia. Hazla con curiosidad real y voz pareja, o se vuelve acusación.",
          ],
        },
        {
          en: "Is that from this quarter or from last year?",
          use: [
            "Tests whether the data is current without suggesting anyone hid anything.",
            "Verifica si el dato está vigente sin insinuar que alguien ocultó algo.",
          ],
        },
        {
          en: "I think the data supports a narrower conclusion.",
          use: [
            "Accepts the facts and questions how far they stretch.",
            "Acepta los datos y cuestiona hasta dónde alcanzan.",
          ],
        },
        {
          en: "Can we separate those two questions?",
          use: [
            "For when cost and timing, or the idea and its owner, have been tangled together.",
            "Para cuando costo y tiempos, o la idea y su dueño, quedaron enredados.",
          ],
        },
        {
          en: "I'm not persuaded yet. What would persuade me is a pilot with real customers.",
          use: [
            "Disagrees and tells them exactly how to win you over. Far more useful than a flat no.",
            "Expresa desacuerdo y les dice exactamente cómo convencerte. Mucho más útil que un no rotundo.",
          ],
        },
        {
          en: "I've changed my mind. Here's what did it.",
          use: [
            "Changing your mind out loud. Name the argument that moved you; it credits the other person and shows your reasoning.",
            "Cambiar de opinión en voz alta. Nombra el argumento que te movió; le da el crédito a la otra persona y muestra tu razonamiento.",
          ],
        },
        {
          en: "I came in thinking we should wait. I now think we should move.",
          use: [
            "The same move, with the before and after spelled out for the room.",
            "La misma jugada, con el antes y el después explicados para la sala.",
          ],
        },
      ],
    },
    {
      t: "model",
      title: ["Worked example: the vendor decision", "Ejemplo completo: la decisión del proveedor"],
      context: [
        "Leadership meeting. Priya, head of finance, wants to switch software vendors to save money. You run the product team and want to renew for one year. Dana, the COO, will decide.",
        "Junta directiva. Priya, directora de finanzas, quiere cambiar de proveedor de software para ahorrar. Tú diriges el equipo de producto y quieres renovar por un año. Dana, la directora de operaciones, va a decidir.",
      ],
      lines: [
        {
          who: "Priya",
          en: "Switching saves us 180 thousand a year. I don't see how we justify staying.",
        },
        {
          who: "You",
          en: "Let me make sure I'm being fair to that first. The case for switching is the savings, and also that their reporting is better than what we have. Is that the heart of it?",
          note: [
            "Their best case, including a point she had not even raised, then a check.",
            "Su mejor argumento, incluso con un punto que ella ni había mencionado, y luego la verificación.",
          ],
        },
        {
          who: "Priya",
          en: "And support. Ours takes two days to answer a ticket.",
        },
        {
          who: "You",
          en: "That's true, and I'd concede the support point completely. They've been slow all year.",
          note: [
            "A full concession with no <em>but</em> attached.",
            "Una concesión completa, sin ningún <em>but</em> pegado.",
          ],
        },
        {
          who: "You",
          en: "My recommendation is still to renew for one year, for one reason: timing. The migration takes about ten weeks of my team, and those ten weeks are the Q2 launch. If the launch slips, we lose more than the 180 we'd save.",
          note: [
            "Claim, evidence, impact. One reason, the one that decides it.",
            "Conclusión, evidencia, impacto. Una sola razón, la que lo decide.",
          ],
        },
        {
          who: "Priya",
          en: "Ten weeks seems high. The vendor says four.",
        },
        {
          who: "You",
          en: "It might be high. Their four weeks covers their side of the work. Mine includes retesting our integrations. I'd be glad to go through the breakdown with you after this.",
          note: [
            "Admits the estimate could be wrong, explains the gap between the two numbers, offers to open the detail.",
            "Admite que el estimado puede estar mal, explica la diferencia entre las dos cifras y ofrece abrir el detalle.",
          ],
        },
        {
          who: "Dana",
          en: "What if we renew for one year and plan the migration for Q3?",
        },
        {
          who: "You",
          en: "I'd support that. And Priya's point about support gives us leverage: we should ask for a response-time guarantee as a condition of renewing.",
          note: [
            "Uses the opponent's point to improve the outcome, and gives her the credit by name.",
            "Usa el punto de su contraparte para mejorar el resultado, y le da el crédito con nombre.",
          ],
        },
        {
          who: "Priya",
          en: "I can live with that if the Q3 date is in writing.",
        },
      ],
    },
    {
      t: "trap",
      title: ["Discutir, argumento, mentira", "Discutir, argumento, mentira"],
      html: [
        "Three direct translations change the temperature of a debate. <b>Discutir</b> covers both a calm exchange and a fight; English splits them. <span class='ok'>✓</span> <em>We discussed the budget</em> is neutral. <span class='x'>✗</span> <em>We argued about the budget</em> means you fought. <b>Argument</b> works for your reasoning (<em>the argument for switching</em>), but <em>we had an argument</em> is a quarrel. And a quick <em>no, mentira</em> or <em>no es cierto</em>, which in Spanish can be light, becomes <span class='x'>✗</span> <em>that's a lie</em> or <em>that's not true</em>, which in English question the person's honesty. Say <span class='ok'>✓</span> <em>I don't think that's right</em> or <em>that's not what I have</em>. One grammar point costs credibility in exactly this setting: <span class='x'>✗</span> <em>I'm not agree</em>. <span class='ok'>✓</span> <em>I don't agree</em>.",
        "Tres traducciones directas le cambian la temperatura a un debate. <b>Discutir</b> cubre tanto un intercambio tranquilo como un pleito; el inglés los separa. <span class='ok'>✓</span> <em>We discussed the budget</em> es neutral. <span class='x'>✗</span> <em>We argued about the budget</em> quiere decir que se pelearon. <b>Argument</b> funciona para tu razonamiento (<em>the argument for switching</em>), pero <em>we had an argument</em> es un pleito. Y un rápido <em>no, mentira</em> o <em>no es cierto</em>, que en español puede ser ligero, se vuelve <span class='x'>✗</span> <em>that's a lie</em> o <em>that's not true</em>, que en inglés ponen en duda la honestidad de la persona. Di <span class='ok'>✓</span> <em>I don't think that's right</em> o <em>that's not what I have</em>. Y un punto de gramática cuesta credibilidad justo en este escenario: <span class='x'>✗</span> <em>I'm not agree</em>. <span class='ok'>✓</span> <em>I don't agree</em>.",
      ],
    },
    {
      t: "choice",
      title: ["Choose the response that keeps the room", "Elige la respuesta que conserva la sala"],
      items: [
        {
          prompt: [
            "In front of the VP, a colleague cites a customer-churn figure you believe is a year old.",
            "Frente a la vicepresidenta, un colega cita una cifra de cancelación de clientes que, según tú, tiene un año de antigüedad.",
          ],
          options: [
            {
              en: "That figure is wrong. It's from last year.",
              ok: false,
              why: [
                "You may be right, and you have just made him look careless in front of the VP. He will fight the tone, and the number gets lost.",
                "Puede que tengas razón, y acabas de hacerlo ver descuidado frente a la vicepresidenta. Va a pelear el tono, y la cifra se pierde.",
              ],
            },
            {
              en: "I have a more recent number for that. Mine is from October. Which month is yours?",
              ok: true,
              why: [
                "It corrects the record by comparing sources. If his is older, the room sees it without anyone being accused.",
                "Corrige el dato comparando fuentes. Si el suyo es más viejo, la sala lo ve sin que nadie resulte acusado.",
              ],
            },
            {
              en: "Sorry, I don't want to contradict you, maybe I'm confused, but I think perhaps the number changed a little?",
              ok: false,
              why: [
                "Softened until it disappears. The VP hears doubt about you, and the old number stays on the table.",
                "Suavizado hasta desaparecer. La vicepresidenta escucha dudas sobre ti, y la cifra vieja se queda sobre la mesa.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Your opponent makes a point you had not considered. It weakens your cost argument but not your timeline argument.",
            "Tu contraparte hace un punto que no habías considerado. Debilita tu argumento de costo, pero no el de tiempos.",
          ],
          options: [
            {
              en: "Sure, but that's a minor detail compared to the main issue.",
              ok: false,
              why: [
                "The room saw that it was not minor. Dismissing it costs you more than conceding it.",
                "La sala vio que no era menor. Descartarlo te cuesta más que concederlo.",
              ],
            },
            {
              en: "You're right. Let's go with your plan, then.",
              ok: false,
              why: [
                "One point fell, and you gave up the whole position, including the part that still stands.",
                "Cayó un punto y entregaste toda la postura, incluida la parte que sigue en pie.",
              ],
            },
            {
              en: "That's a fair point, and I hadn't weighed it enough. It changes my estimate on cost. It doesn't change the timeline problem.",
              ok: true,
              why: [
                "A precise concession. It gives up exactly what was lost and keeps what was not.",
                "Una concesión precisa. Cede exactamente lo que se perdió y conserva lo que no.",
              ],
            },
          ],
        },
        {
          prompt: [
            "The team is debating whether to open a third job requisition. The VP turns to you: <em>What do you think?</em>",
            "El equipo debate si abrir una tercera vacante. La vicepresidenta voltea contigo: <em>What do you think?</em>",
          ],
          options: [
            {
              en: "Well, as you know, we've been looking at hiring for several months, and there are a number of factors, so I've been thinking about how recruiting has been going lately...",
              ok: false,
              why: [
                "All context and no claim. She asked what you think and still does not know.",
                "Puro contexto y ninguna conclusión. Te preguntó qué piensas y sigue sin saberlo.",
              ],
            },
            {
              en: "I'd wait until Q2. We have two open roles we haven't filled, and a third splits the recruiter's time. Filling those two first gets us people sooner.",
              ok: true,
              why: [
                "Claim, evidence, impact, in under fifteen seconds.",
                "Conclusión, evidencia, impacto, en menos de quince segundos.",
              ],
            },
            {
              en: "I think both sides have made good points, and I can see it either way.",
              ok: false,
              why: [
                "Polite and empty. You were asked for a position, and declining to give one reads as having none.",
                "Cortés y vacío. Te pidieron una postura, y no darla se lee como no tener ninguna.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Halfway through the debate you realize Marcus is right. His point about the contract penalty settles it.",
            "A media discusión te das cuenta de que Marcus tiene razón. Su punto sobre la penalización del contrato lo define.",
          ],
          options: [
            {
              en: "I've changed my mind. Marcus's point about the contract penalty is what did it. I'd go with his option.",
              ok: true,
              why: [
                "Clear, specific, and generous. The room now trusts your next recommendation more.",
                "Claro, específico y generoso. Ahora la sala confía más en tu siguiente recomendación.",
              ],
            },
            {
              en: "Well, let's see what everyone else thinks.",
              ok: false,
              why: [
                "You are quietly leaving your position without saying so. People notice, and it looks like you were pushed.",
                "Estás abandonando tu postura en silencio, sin decirlo. La gente lo nota, y parece que te empujaron.",
              ],
            },
            {
              en: "I guess we could try it his way, if that's what people want.",
              ok: false,
              why: [
                "A grudging surrender. It sounds like you still disagree and expect to be proven right later.",
                "Una rendición de mala gana. Suena a que sigues en desacuerdo y esperas que el tiempo te dé la razón.",
              ],
            },
          ],
        },
        {
          prompt: [
            "A colleague summarizes your view to the room as: <em>So you're against the redesign.</em> You support the redesign; you object to doing it before the audit.",
            "Un colega resume tu postura ante la sala así: <em>So you're against the redesign.</em> Tú apoyas el rediseño; te opones a hacerlo antes de la auditoría.",
          ],
          options: [
            {
              en: "That's not what I said. Please don't put words in my mouth.",
              ok: false,
              why: [
                "It turns a misunderstanding into an accusation, and the debate becomes about him.",
                "Convierte un malentendido en una acusación, y el debate pasa a tratarse de él.",
              ],
            },
            {
              en: "No, no, you didn't understand me.",
              ok: false,
              why: [
                "A direct translation that puts the failure on the listener. In English it sounds impatient.",
                "Una traducción directa que le carga la falla a quien escucha. En inglés suena impaciente.",
              ],
            },
            {
              en: "Let me restate it, because that's not quite my position. I'm in favor of the redesign. My concern is doing it before the audit.",
              ok: true,
              why: [
                "It takes responsibility for the clarity and corrects the record in two short sentences.",
                "Asume la responsabilidad de la claridad y corrige el registro en dos frases cortas.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "speak",
      title: ["Say it out loud: the automated report", "Dilo en voz alta: el reporte automatizado"],
      prompt: [
        "Your team is debating whether to replace the weekly client report, which an analyst writes by hand, with an automated dashboard. Luis argues against it: clients value the personal note, and two of them have said so. You are in favor. State his best case, concede what is true, then make your claim with evidence and impact.",
        "Tu equipo debate si reemplazar el reporte semanal para clientes, que una analista escribe a mano, por un tablero automatizado. Luis está en contra: los clientes valoran la nota personal, y dos de ellos lo dijeron. Tú estás a favor. Expón su mejor argumento, concede lo que es cierto y luego presenta tu conclusión con evidencia e impacto.",
      ],
      think: 20,
      speak: 60,
      frame:
        "The strongest case for ___ is ___. Luis is right that ___. Where I come out differently is ___. My recommendation is ___, because ___. That means ___.",
      checklist: [
        [
          "I stated his case in a way he would accept.",
          "Expuse su caso de una forma que él aceptaría.",
        ],
        [
          "I conceded a point without adding but to the same sentence.",
          "Concedí un punto sin agregar but en la misma frase.",
        ],
        [
          "My claim was one sentence and came before my reasons.",
          "Mi conclusión fue una sola frase y llegó antes que mis razones.",
        ],
        ["I gave one or two facts, not a list.", "Di uno o dos datos, no una lista."],
        [
          "I ended on the impact for the team or the client.",
          "Cerré con el impacto para el equipo o para el cliente.",
        ],
      ],
      model:
        "The strongest case for keeping the manual report is the relationship. Clients read a note written by a person, and two of them have told us they value it. Luis is right about that, and I wouldn't want to lose it. Where I come out differently is on what the analyst's time is worth. My recommendation is to automate the numbers and keep the note. The report takes Ana six hours a week, and five of those are copying data. That means we give clients the same personal paragraph, they get live numbers instead of last week's, and Ana gets most of a day back for the analysis they're really paying for.",
    },
    {
      t: "speak",
      title: ["Say it out loud: change your mind", "Dilo en voz alta: cambia de opinión"],
      prompt: [
        "You argued for ten minutes that the team should build a tool in-house. Then Elena showed that the license costs less than one month of an engineer's salary. She is right. Change your mind out loud, name what convinced you, and add the one condition you still care about.",
        "Defendiste durante diez minutos que el equipo debía construir una herramienta internamente. Luego Elena mostró que la licencia cuesta menos que un mes de sueldo de un ingeniero. Tiene razón. Cambia de opinión en voz alta, nombra qué te convenció y agrega la única condición que todavía te importa.",
      ],
      think: 10,
      speak: 20,
      frame:
        "I've changed my mind. What did it was ___. I'd now ___. The one thing I'd still want is ___.",
      checklist: [
        ["I said plainly that I changed my mind.", "Dije con claridad que cambié de opinión."],
        [
          "I named the specific argument and gave Elena the credit.",
          "Nombré el argumento específico y le di el crédito a Elena.",
        ],
        ["I did not sound defeated or annoyed.", "No soné a derrota ni a molestia."],
      ],
      model:
        "I've changed my mind. What did it was Elena's comparison: the license costs less than a month of one engineer. I'd now buy it. The one thing I'd still want is a clause that lets us export our data if we ever leave.",
    },
    {
      t: "takeaways",
      items: [
        [
          "Claim first, then one or two strong facts, then what it means for the room's goal.",
          "Primero la conclusión, luego uno o dos datos fuertes, y después lo que significa para la meta de la sala.",
        ],
        [
          "State the other side's best case and check it before you answer it.",
          "Expón el mejor argumento de la otra postura y verifícalo antes de responderlo.",
        ],
        [
          "Concede what is true in a sentence of its own. It raises the value of everything you do not concede.",
          "Concede lo que es cierto en una frase aparte. Eso le sube el valor a todo lo que no concedes.",
        ],
        [
          "Challenge the number and its source, never the person's honesty.",
          "Cuestiona la cifra y su fuente, nunca la honestidad de la persona.",
        ],
        [
          "When you are convinced, say so out loud and name what convinced you.",
          "Cuando te convenzan, dilo en voz alta y nombra qué te convenció.",
        ],
      ],
    },
  ],
};
