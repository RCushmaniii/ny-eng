import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "find-the-shared-goal",
  slugEs: "encontrar-la-meta-comun",
  title: ["Find the Shared Goal", "Encuentra la Meta en Común"],
  summary: [
    "Move a stuck disagreement from two opposing demands to one shared problem, and make your proposal the answer to the other person's concern.",
    "Lleva un desacuerdo atorado de dos exigencias opuestas a un solo problema compartido, y haz que tu propuesta sea la respuesta a lo que le preocupa a la otra persona.",
  ],
  description: [
    "Learn the English to turn a standoff into a shared problem: positions vs. interests, naming the common goal, and proposing options a peer can say yes to.",
    "Aprende el inglés para convertir un choque en un problema compartido: posiciones e intereses, nombrar la meta en común y proponer opciones viables.",
  ],
  minutes: 16,
  blocks: [
    {
      t: "p",
      html: [
        "By this point in a disagreement you have cooled the room, listened, and asked real questions. You know what the other person wants. And you are still stuck, because what they want and what you want cannot both happen. Marcus wants the release on the 15th. You want two more weeks of testing. Two dates, one calendar.",
        "A estas alturas del desacuerdo ya bajaste la temperatura, escuchaste e hiciste preguntas de verdad. Ya sabes qué quiere la otra persona. Y sigues en el mismo lugar, porque lo que quiere y lo que tú quieres no caben al mismo tiempo. Marcus quiere el lanzamiento el día 15. Tú quieres dos semanas más de pruebas. Dos fechas, un solo calendario.",
      ],
    },
    {
      t: "p",
      html: [
        "Most people respond in one of two ways. They push harder on their own date, or they split the difference to end the discomfort. Both skip the step that actually moves a peer: finding out what the date is <em>for</em>. That step is also where a conflict stops being something to survive and becomes your best opening to persuade.",
        "Casi todo el mundo responde de dos maneras. Empuja más fuerte su propia fecha, o parte la diferencia para acabar con la incomodidad. Las dos se saltan el paso que sí mueve a un colega: averiguar <em>para qué</em> es la fecha. Ese paso es también el punto donde un conflicto deja de ser algo que hay que aguantar y se vuelve tu mejor oportunidad para persuadir.",
      ],
    },
    {
      t: "idea",
      title: [
        "Positions collide. Interests usually fit.",
        "Las posiciones chocan. Los intereses casi siempre caben.",
      ],
      html: [
        "A <b>position</b> is what someone says they want. An <b>interest</b> is why they need it. Marcus's position is the 15th. His interest is that he promised a client something for that day and does not want to walk it back. Your position is two more weeks. Your interest is that a failed launch lands on your team. Put the two positions side by side and one of you has to lose. Put the two interests side by side and new options appear: a demo build on the 15th, the full release on the 29th. Neither date contained that answer.",
        "Una <b>posición</b> es lo que alguien dice que quiere. Un <b>interés</b> es por qué lo necesita. La posición de Marcus es el día 15. Su interés es que le prometió algo a un cliente para ese día y no quiere echarse para atrás. Tu posición es dos semanas más. Tu interés es que un lanzamiento fallido le cae a tu equipo. Si pones las dos posiciones lado a lado, alguien tiene que perder. Si pones los dos intereses lado a lado, aparecen opciones nuevas: una versión demo el 15 y el lanzamiento completo el 29. Ninguna de las dos fechas traía esa respuesta.",
      ],
    },
    {
      t: "framework",
      title: ["The shared-goal pivot", "El giro hacia la meta en común"],
      lead: [
        "Use it when both sides have stated what they want and the conversation has started to loop.",
        "Úsalo cuando ambas partes ya dijeron lo que quieren y la conversación empezó a dar vueltas.",
      ],
      steps: [
        {
          label: ["Name the goal you share", "Nombra la meta que comparten"],
          html: [
            "It has to be true and it has to be specific. <em>We're on the same team</em> is a slogan; a named outcome with a date or a client attached is a goal.",
            "Tiene que ser cierta y tiene que ser específica. <em>We're on the same team</em> es un eslogan; un resultado con nombre, con fecha o con cliente, es una meta.",
          ],
          say: "We both want this client to see a launch that works. Can we start there?",
        },
        {
          label: ["State both concerns side by side", "Pon las dos preocupaciones lado a lado"],
          html: [
            "Theirs first, in words they would accept. Then yours, in the same length and the same tone. Finish by checking.",
            "Primero la suya, con palabras que la otra persona aceptaría. Luego la tuya, del mismo tamaño y en el mismo tono. Cierra verificando.",
          ],
          say: "You need something real to show them on the 15th. I need to know payments won't fail in production. Is that a fair summary?",
        },
        {
          label: [
            "Put the problem on the other side of the table",
            "Pon el problema del otro lado de la mesa",
          ],
          html: [
            "Turn the two concerns into one question that starts with <em>how do we</em>. From this sentence on, the two of you are working on the same thing.",
            "Convierte las dos preocupaciones en una sola pregunta que empiece con <em>how do we</em>. A partir de esta frase, ustedes dos trabajan en lo mismo.",
          ],
          say: "So how do we give them something solid on the 15th without shipping code we might have to roll back?",
        },
        {
          label: ["Offer options, plural", "Ofrece opciones, en plural"],
          html: [
            "One option is a demand with better manners. Two or three let the other person choose, and people defend what they chose.",
            "Una sola opción es una exigencia con mejores modales. Dos o tres dejan que la otra persona elija, y la gente defiende lo que eligió.",
          ],
          say: "I see two ways. A demo environment on the 15th and the full release on the 29th. Or everything on the 15th with payments switched off for a week.",
        },
        {
          label: [
            "Make your proposal the answer to their concern",
            "Haz que tu propuesta responda a su preocupación",
          ],
          html: [
            "Recommend one option, and give the reason in their terms before yours.",
            "Recomienda una opción y da la razón primero en sus términos y después en los tuyos.",
          ],
          say: "I'd go with the demo. You keep your date with the client, and it takes the rollback risk off the table.",
        },
      ],
    },
    {
      t: "compare",
      title: [
        "From me against you to us against the problem",
        "De yo contra ti a nosotros contra el problema",
      ],
      labels: [
        ["Defends a position", "Defiende una posición"],
        ["Works on the problem", "Trabaja en el problema"],
      ],
      rows: [
        {
          weak: "I need two more weeks. That's not negotiable.",
          strong:
            "I need to be confident payments will hold. Two more weeks is one way to get there, and I'm open to others.",
          why: [
            "Firm on the interest, flexible on the method. The other person now has something to solve instead of something to fight.",
            "Firme en el interés, flexible en el método. La otra persona ahora tiene algo que resolver en lugar de algo contra qué pelear.",
          ],
        },
        {
          weak: "We're on the same team here.",
          strong:
            "We both want the renewal signed in March. That's the part I don't want to put at risk.",
          why: [
            "A named outcome is credible. The slogan usually arrives right before someone asks you to give in, and people hear it that way.",
            "Un resultado con nombre es creíble. El eslogan casi siempre llega justo antes de que alguien te pida ceder, y así lo escucha la gente.",
          ],
        },
        {
          weak: "Let's just meet in the middle and say the 22nd.",
          strong: "Before we pick a date, can we check what each of us needs that date to do?",
          why: [
            "The midpoint can fail both interests at once: the client still has nothing on the 15th and testing is still short.",
            "El punto medio puede fallarles a los dos intereses al mismo tiempo: el cliente sigue sin nada el 15 y las pruebas siguen incompletas.",
          ],
        },
        {
          weak: "Your plan doesn't work for my team.",
          strong:
            "Here's the part I can't make work yet: I have no one to cover support that week. How could we solve for that?",
          why: [
            "It narrows the objection from the whole plan to one obstacle, and invites help with it.",
            "Reduce la objeción de todo el plan a un solo obstáculo, e invita a resolverlo en conjunto.",
          ],
        },
        {
          weak: "You're only thinking about your numbers.",
          strong:
            "Your target matters and so does mine. I'd like a plan where neither of us has to explain a miss.",
          why: [
            "It treats their interest as legitimate, which is what makes them willing to treat yours the same way.",
            "Trata su interés como legítimo, y eso es lo que hace que la otra persona esté dispuesta a tratar el tuyo igual.",
          ],
        },
        {
          weak: "Fine. Do it your way.",
          strong:
            "I can live with your approach if we add one thing: a rollback plan we both sign off on.",
          why: [
            "A conditional yes is honest. The surrender sounds like agreement to an American colleague, and the resentment shows up later as a surprise.",
            "Un sí condicionado es honesto. La rendición le suena a acuerdo a un colega estadounidense, y el resentimiento aparece después como sorpresa.",
          ],
        },
      ],
    },
    {
      t: "compare",
      title: [
        "Make the proposal about their concern",
        "Haz que la propuesta trate de su preocupación",
      ],
      labels: [
        ["About what you want", "Sobre lo que tú quieres"],
        ["Answers what they said", "Responde a lo que dijeron"],
      ],
      rows: [
        {
          weak: "I think we should bring in a contractor.",
          strong:
            "You said the risk is your team burning out in Q4. A contractor for eight weeks takes that load off them.",
          why: [
            "Same proposal. The second version starts from the other person's own words, so agreeing with it means agreeing with themselves.",
            "Es la misma propuesta. La segunda versión parte de las palabras de la otra persona, así que aceptarla es estar de acuerdo consigo misma.",
          ],
        },
        {
          weak: "My version is better because it's cheaper.",
          strong:
            "You mentioned finance will push back on anything over budget. This version comes in under it.",
          why: [
            "<em>Better</em> is your judgment. <em>Under budget</em> is the solution to the problem they named.",
            "<em>Better</em> es tu juicio. <em>Under budget</em> es la solución al problema que la otra persona mencionó.",
          ],
        },
        {
          weak: "We need to slow down.",
          strong:
            "You want no surprises in front of the board. A one-week pilot is how we get that.",
          why: [
            "<em>Slow down</em> sounds like an obstacle. The pilot is framed as the route to what they want.",
            "<em>Slow down</em> suena a obstáculo. El piloto se presenta como el camino hacia lo que quieren.",
          ],
        },
        {
          weak: "I'd like to keep the weekly report.",
          strong: "You need fewer meetings. If the report stays, we can drop the Thursday sync.",
          why: [
            "It links what you want to keep with something they gain.",
            "Conecta lo que quieres conservar con algo que la otra persona gana.",
          ],
        },
        {
          weak: "Trust me, the new vendor is fine.",
          strong:
            "Your concern was response time. Their contract guarantees four hours, and I can show you the clause.",
          why: [
            "<em>Trust me</em> asks for faith. The second version brings evidence aimed at the exact worry.",
            "<em>Trust me</em> pide fe. La segunda versión trae evidencia dirigida exactamente a esa inquietud.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: [
        "Phrases for finding and using the shared goal",
        "Frases para encontrar y usar la meta en común",
      ],
      items: [
        {
          en: "What's driving the deadline on your side?",
          use: [
            "Asks for the interest behind a date or a demand without challenging it.",
            "Pregunta por el interés detrás de una fecha o una exigencia sin cuestionarla.",
          ],
        },
        {
          en: "What would a good outcome look like for you?",
          use: [
            "Opens the conversation up when the other person keeps repeating one demand.",
            "Abre la conversación cuando la otra persona repite una y otra vez la misma exigencia.",
          ],
        },
        {
          en: "It sounds like what matters most to you is the client relationship. Is that right?",
          use: [
            "Names their interest out loud and checks it before you build on it.",
            "Nombra su interés en voz alta y lo verifica antes de construir sobre él.",
          ],
        },
        {
          en: "Here's what I'm trying to protect.",
          use: [
            "Introduces your own interest as something you care about, which is easier to hear than a demand.",
            "Presenta tu propio interés como algo que te importa, y eso se escucha mejor que una exigencia.",
          ],
        },
        {
          en: "I think we want the same thing here: a launch nobody has to apologize for.",
          use: [
            "States the shared goal. Fill the second half with something concrete.",
            "Declara la meta en común. Llena la segunda mitad con algo concreto.",
          ],
        },
        {
          en: "I'm not attached to how we do it. I care that the data is right.",
          use: [
            "Separates the method, where you can bend, from the interest, where you cannot.",
            "Separa el método, donde puedes ceder, del interés, donde no puedes.",
          ],
        },
        {
          en: "So how do we get you the demo without risking the release?",
          use: [
            "The pivot question. Their need and your need in one sentence.",
            "La pregunta del giro. Su necesidad y la tuya en una sola frase.",
          ],
        },
        {
          en: "Can I put a couple of options on the table?",
          use: [
            "Signals that you are about to propose, and that the choice is still theirs.",
            "Avisa que vas a proponer y que la decisión sigue siendo de la otra persona.",
          ],
        },
        {
          en: "What would have to be true for this to work for you?",
          use: [
            "Turns a flat no into a list of conditions you can work on.",
            "Convierte un no rotundo en una lista de condiciones que sí puedes trabajar.",
          ],
        },
        {
          en: "Which part of that could you live with?",
          use: [
            "Finds the piece of your proposal they already accept, so you can start from there.",
            "Encuentra la parte de tu propuesta que ya aceptan, para empezar desde ahí.",
          ],
        },
        {
          en: "If we did it that way, would that cover your concern about staffing?",
          use: [
            "Tests an option against their interest before you ask for a yes.",
            "Pone a prueba una opción contra su interés antes de pedir el sí.",
          ],
        },
      ],
    },
    {
      t: "model",
      title: ["Worked example: the launch date", "Ejemplo completo: la fecha de lanzamiento"],
      context: [
        "You lead engineering. Marcus leads the account team. He promised a client the 15th; your team needs until the 29th to finish testing payments. You have already listened to him once. This is the second conversation.",
        "Tú diriges ingeniería. Marcus dirige el equipo de cuentas. Le prometió a un cliente el día 15; tu equipo necesita hasta el 29 para terminar las pruebas de pagos. Ya lo escuchaste una vez. Esta es la segunda conversación.",
      ],
      lines: [
        {
          who: "Marcus",
          en: "I told the client the 15th. I can't go back to them with another delay.",
          note: ["A position, stated as a fact.", "Una posición, dicha como si fuera un hecho."],
        },
        {
          who: "You",
          en: "Understood, and I don't want you to have to. Can I check one thing? What exactly did you promise for the 15th: the full release, or something they can see working?",
          note: [
            "Accepts his constraint, then asks what the date is for.",
            "Acepta su restricción y luego pregunta para qué es la fecha.",
          ],
        },
        {
          who: "Marcus",
          en: "Honestly, they need to see the new dashboard. Their VP is presenting it internally on the 16th.",
          note: [
            "The interest. It is narrower than the position.",
            "El interés. Es más angosto que la posición.",
          ],
        },
        {
          who: "You",
          en: "That helps. So we both want her to walk into that meeting with something that works. That's my worry too: if we ship everything on the 15th and payments fail, that's the worst version of her meeting.",
          note: [
            "Names the shared goal, then explains your concern as a threat to that same goal.",
            "Nombra la meta en común y luego explica tu preocupación como una amenaza para esa misma meta.",
          ],
        },
        {
          who: "Marcus",
          en: "So what are you saying? We can't do it?",
        },
        {
          who: "You",
          en: "I'm saying we can do the part that matters to her. Two options. We give them a demo environment on the 15th with the dashboard live on their real data, and release to everyone on the 29th. Or we release everything on the 15th with payments switched off for a week.",
          note: [
            "Answers the fear first, then offers two real options.",
            "Primero responde al temor y luego ofrece dos opciones reales.",
          ],
        },
        {
          who: "Marcus",
          en: "The first one. She doesn't care about payments yet.",
          note: [
            "He chose it, so he will defend it.",
            "Él la eligió, así que él la va a defender.",
          ],
        },
        {
          who: "You",
          en: "That's my recommendation too. You keep your date with the client, and I get two weeks to finish testing. I'll send you the demo link by the 13th so you can walk through it before she does.",
          note: [
            "His gain first, yours second, then a concrete next step with a date.",
            "Primero lo que él gana, luego lo tuyo, y después un siguiente paso concreto con fecha.",
          ],
        },
        {
          who: "Marcus",
          en: "That works. Send me a line I can forward to her.",
        },
      ],
    },
    {
      t: "trap",
      title: ["Compromise is not compromiso", "Compromise no es compromiso"],
      html: [
        "<span class='x'>✗</span> <em>We have a compromise with the client for the 15th.</em> In English a <b>compromise</b> is a deal where each side gives something up. What you have with the client is a <b>commitment</b>. <span class='ok'>✓</span> <em>We have a commitment to the client for the 15th.</em> The verb is riskier still: <em>we compromised the quality</em> means you damaged it. There is also a habit worth watching. Offering to give in early, to end the discomfort, is good manners in much of Mexican professional life. To an American peer, a quick concession before the interests are on the table can read as <em>this never mattered to you</em>, or as full agreement. Hold your interest a little longer than feels polite, and be generous with the method.",
        "<span class='x'>✗</span> <em>We have a compromise with the client for the 15th.</em> En inglés, un <b>compromise</b> es un arreglo donde cada parte cede algo. Lo que tienes con el cliente es un <b>commitment</b>. <span class='ok'>✓</span> <em>We have a commitment to the client for the 15th.</em> El verbo es todavía más riesgoso: <em>we compromised the quality</em> quiere decir que la dañaste. También hay un hábito que conviene observar. Ofrecer ceder pronto, para acabar con la incomodidad, es buena educación en gran parte de la vida profesional mexicana. Para un colega estadounidense, una concesión rápida antes de que los intereses estén sobre la mesa puede leerse como <em>esto nunca te importó</em>, o como acuerdo total. Sostén tu interés un poco más de lo que se siente cortés, y sé flexible con el método.",
      ],
    },
    {
      t: "choice",
      title: [
        "Choose the response that finds the shared goal",
        "Elige la respuesta que encuentra la meta en común",
      ],
      items: [
        {
          prompt: [
            "Priya in finance tells you she is cutting your team's training budget in half for next year.",
            "Priya, de finanzas, te dice que va a recortar a la mitad el presupuesto de capacitación de tu equipo para el próximo año.",
          ],
          options: [
            {
              en: "I understand budgets are tight, but training is essential for my team.",
              ok: false,
              why: [
                "It restates your position. She already knows you want the budget; nothing new is on the table.",
                "Repite tu posición. Ella ya sabe que quieres el presupuesto; no hay nada nuevo sobre la mesa.",
              ],
            },
            {
              en: "What does the cut need to accomplish? If it's a number you have to hit for the year, there may be more than one way to get you there.",
              ok: true,
              why: [
                "It asks for her interest and signals that you intend to help her meet it.",
                "Pregunta por su interés y deja claro que quieres ayudarle a cumplirlo.",
              ],
            },
            {
              en: "What if we cut 25 percent instead of 50?",
              ok: false,
              why: [
                "You are splitting the difference before you know what she needs. You may be giving up money she never needed from this line.",
                "Estás partiendo la diferencia antes de saber qué necesita. Puedes estar cediendo dinero que ella nunca necesitó de esa partida.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Luis wants every customer call to go through his team. You want your engineers talking to customers directly. He says: <em>Every time your engineers talk to a customer, I end up cleaning up a promise they made.</em>",
            "Luis quiere que todas las llamadas con clientes pasen por su equipo. Tú quieres que tus ingenieros hablen directo con los clientes. Él dice: <em>Every time your engineers talk to a customer, I end up cleaning up a promise they made.</em>",
          ],
          options: [
            {
              en: "We're on the same team, Luis. We all want happy customers.",
              ok: false,
              why: [
                "True and useless. It does not touch the specific problem he just described.",
                "Es cierto y no sirve de nada. No toca el problema específico que acaba de describir.",
              ],
            },
            {
              en: "My engineers need customer context to build the right thing. That's not going to change.",
              ok: false,
              why: [
                "A legitimate interest delivered as a wall. He will answer with his own wall.",
                "Un interés legítimo dicho como una pared. Él va a contestar con su propia pared.",
              ],
            },
            {
              en: "So the real problem is promises you don't know about. I want that fixed too. What if engineers join the calls, and any commitment goes through you before it's confirmed?",
              ok: true,
              why: [
                "It names his interest, shares it, and proposes an option that protects both his interest and yours.",
                "Nombra su interés, lo comparte y propone una opción que protege tanto su interés como el tuyo.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Elena has told you twice that she cannot add headcount this year. You are about to present your plan to her.",
            "Elena ya te dijo dos veces que este año no puede aumentar la plantilla. Estás por presentarle tu plan.",
          ],
          options: [
            {
              en: "Elena, you said you can't add headcount this year. This plan uses the team you have: it moves two people for six weeks, and then they come back.",
              ok: true,
              why: [
                "The proposal opens as the answer to her stated concern.",
                "La propuesta arranca como la respuesta a la preocupación que ella misma expresó.",
              ],
            },
            {
              en: "I've put a lot of work into this plan and I think it's the strongest option we have.",
              ok: false,
              why: [
                "It is about your effort and your opinion. Neither is her problem.",
                "Habla de tu esfuerzo y de tu opinión. Ninguna de las dos cosas es su problema.",
              ],
            },
            {
              en: "This plan will raise output significantly, and I think the headcount question will take care of itself.",
              ok: false,
              why: [
                "It waves away the one thing she told you matters most.",
                "Minimiza justo lo único que ella te dijo que más le importa.",
              ],
            },
          ],
        },
        {
          prompt: [
            "A colleague in another department will not explain. All you get is: <em>I just need it by Friday.</em> Friday is very hard for you.",
            "Un colega de otra área no da explicaciones. Lo único que te dice es: <em>I just need it by Friday.</em> El viernes es muy difícil para ti.",
          ],
          options: [
            {
              en: "Friday isn't realistic. The earliest I can do is Wednesday.",
              ok: false,
              why: [
                "Now there are two positions and no information. You are back where you started.",
                "Ahora hay dos posiciones y cero información. Regresaste al punto de partida.",
              ],
            },
            {
              en: "Why Friday? The last one sat in your inbox for a week.",
              ok: false,
              why: [
                "The question is an accusation, and he will defend himself instead of explaining.",
                "La pregunta es una acusación, y él va a defenderse en lugar de explicar.",
              ],
            },
            {
              en: "I want to get you what you need for Friday. What is it going into: a client meeting, a report? That tells me which parts have to be finished.",
              ok: true,
              why: [
                "It gives him a reason to share the interest: the answer helps you deliver for him.",
                "Le da un motivo para compartir su interés: la respuesta te ayuda a cumplirle.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You and Dana both want the same analyst, Ana, full-time on your project next quarter.",
            "Tanto tú como Dana quieren a la misma analista, Ana, de tiempo completo en su proyecto el próximo trimestre.",
          ],
          options: [
            {
              en: "Let's each take her 50 percent. That's fair.",
              ok: false,
              why: [
                "It sounds fair and may sink both projects. Nobody has checked when each one needs her.",
                "Suena justo y puede hundir los dos proyectos. Nadie revisó cuándo la necesita cada uno.",
              ],
            },
            {
              en: "Neither of us wants Ana stretched so thin that both projects slip. Can we look at which weeks each project really needs her?",
              ok: true,
              why: [
                "Even when you compete for the same resource, there is a shared goal. This names it and moves to the facts.",
                "Incluso cuando compiten por el mismo recurso, hay una meta en común. Esto la nombra y pasa a los hechos.",
              ],
            },
            {
              en: "My project is the one leadership is watching, so I think the answer is obvious.",
              ok: false,
              why: [
                "It ranks her work below yours, and <em>obvious</em> tells her she is slow for not seeing it.",
                "Pone su trabajo por debajo del tuyo, y <em>obvious</em> le dice que es lenta por no verlo.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "speak",
      title: [
        "Say it out loud: the December freeze",
        "Dilo en voz alta: el congelamiento de diciembre",
      ],
      prompt: [
        "Dana in operations wants a full freeze on system changes for all of December, because last year a late change caused an outage during the busiest week. You need to ship one small change by December 10 for a client that goes live in January. Name the shared goal, state both concerns, and offer two options.",
        "Dana, de operaciones, quiere congelar todos los cambios al sistema durante todo diciembre, porque el año pasado un cambio tardío provocó una caída en la semana más pesada. Tú necesitas liberar un cambio pequeño antes del 10 de diciembre para un cliente que arranca en enero. Nombra la meta en común, di las dos preocupaciones y ofrece dos opciones.",
      ],
      think: 20,
      speak: 45,
      frame:
        "We both want ___. You need ___, and I need ___. So how do we ___? One option is ___. Another is ___.",
      checklist: [
        [
          "I named a specific shared goal, not a slogan.",
          "Nombré una meta en común específica, no un eslogan.",
        ],
        [
          "I stated her concern before mine, in words she would accept.",
          "Dije su preocupación antes que la mía, con palabras que ella aceptaría.",
        ],
        ["I asked a how-do-we question.", "Hice una pregunta de tipo how do we."],
        ["I offered at least two options.", "Ofrecí por lo menos dos opciones."],
        [
          "My pace stayed slow and my tone stayed even.",
          "Mantuve un ritmo pausado y un tono parejo.",
        ],
      ],
      model:
        "Dana, we both want December to go by without an outage. You need the system stable through the busiest weeks, and after last year I completely get why. I need one small change live by the 10th so the Harlow account can start in January. So how do we get that change in without putting your peak weeks at risk? One option is to ship it on the 3rd, before the freeze starts, with your team reviewing it first. Another is to keep the freeze and make this the single exception, tested in staging and released on a Sunday night. Which of those is closer to something you could accept?",
    },
    {
      t: "takeaways",
      items: [
        [
          "A position is what they ask for. An interest is why. Ask about the why before you argue about the what.",
          "Una posición es lo que piden. Un interés es el porqué. Pregunta por el porqué antes de discutir el qué.",
        ],
        [
          "Name a shared goal that is true and specific, then turn both concerns into one how-do-we question.",
          "Nombra una meta en común que sea cierta y específica, y luego convierte las dos preocupaciones en una sola pregunta de tipo how do we.",
        ],
        [
          "Offer two or three options. People defend what they choose.",
          "Ofrece dos o tres opciones. La gente defiende lo que elige.",
        ],
        [
          "Present your proposal as the answer to the concern they stated, in their words, before you mention what it does for you.",
          "Presenta tu propuesta como la respuesta a la preocupación que expresaron, con sus palabras, antes de mencionar lo que te da a ti.",
        ],
        [
          "Stay firm on your interest and flexible on the method. Giving in early reads as agreement.",
          "Mantente firme en tu interés y flexible en el método. Ceder pronto se lee como estar de acuerdo.",
        ],
      ],
    },
  ],
};
