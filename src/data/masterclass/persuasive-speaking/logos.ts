import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "logos",
  slugEs: "logos-logica",
  title: [
    "Logos: Build an Argument People Can Follow",
    "Logos: Construye un Argumento que se Pueda Seguir",
  ],
  summary: [
    "Say your claim first, line up a reason and a piece of evidence behind it, and tell the room what it means for them.",
    "Di tu conclusión primero, respáldala con una razón y una evidencia, y dile a tu audiencia qué significa para ella.",
  ],
  description: [
    "Build a clear argument in English: claim first, then reason, evidence and so what, with signposts and numbers a listener can hold on to.",
    "Arma un argumento claro en inglés: primero la conclusión, luego la razón, la evidencia y el para qué, con números que sí se entienden al oído.",
  ],
  minutes: 18,
  blocks: [
    {
      t: "p",
      html: [
        "You explain the situation carefully. You cover the history, the constraints, the three options you looked at. Four minutes in, your US counterpart cuts in: <em>So what are you recommending?</em> Everything you said was accurate. The room still could not follow it, because nobody knew what it was all in support of.",
        "Explicas la situación con cuidado. Repasas los antecedentes, las restricciones, las tres opciones que evaluaste. A los cuatro minutos, tu contraparte en Estados Unidos te interrumpe: <em>So what are you recommending?</em> Todo lo que dijiste era correcto. Aun así, nadie pudo seguirte, porque nadie sabía qué estabas tratando de sustentar.",
      ],
    },
    {
      t: "p",
      html: [
        "In observe and infer you learned to separate what you see from what you conclude, and to attach evidence to every claim. Logos is that same discipline at the size of a whole talk: one claim, said early, with the reasons lined up behind it in an order a listener can hold in their head without a slide.",
        "En observar e inferir aprendiste a separar lo que ves de lo que concluyes, y a ponerle evidencia a cada afirmación. Logos es esa misma disciplina aplicada a una intervención completa: una sola afirmación, dicha desde el principio, con las razones acomodadas detrás en un orden que quien te escucha pueda retener sin necesidad de una diapositiva.",
      ],
    },
    {
      t: "idea",
      title: [
        "One talk, one claim, said first",
        "Una intervención, una afirmación, dicha al inicio",
      ],
      html: [
        "A listener can only judge evidence when they know what it is evidence for. Say your claim in your first two sentences, and every fact you add after that has somewhere to land. If you cannot say the claim in one sentence yet, you are not ready to speak; that is what the think time is for.",
        "Quien te escucha solo puede evaluar una evidencia cuando sabe qué está probando. Di tu afirmación en las primeras dos oraciones, y cada dato que agregues después tendrá dónde caer. Si todavía no puedes decirla en una sola oración, aún no es momento de hablar; para eso es el tiempo de pensar.",
      ],
    },
    {
      t: "framework",
      title: ["Claim, reason, evidence, so what", "Claim, reason, evidence, so what"],
      lead: [
        "Use it for any point you need people to accept: a recommendation, a status call, an answer to a hard question.",
        "Úsalo para cualquier punto que necesites que acepten: una recomendación, un reporte de avance, la respuesta a una pregunta difícil.",
      ],
      steps: [
        {
          label: ["Claim", "Claim: la afirmación"],
          html: [
            "One sentence, stated as a position. A topic is not a claim: <em>I want to talk about the launch date</em> tells the room nothing. A claim is something a person could agree or disagree with.",
            "Una oración que toma postura. Un tema no es una afirmación: <em>I want to talk about the launch date</em> no le dice nada a nadie. Una afirmación es algo con lo que alguien puede estar de acuerdo o en desacuerdo.",
          ],
          say: "We should move the launch from March 3 to March 24.",
        },
        {
          label: ["Reason", "Reason: la razón"],
          html: [
            "The <em>because</em>. One reason per sentence. If you have more than one, count them out loud first so people know how many to listen for.",
            "El <em>because</em>. Una razón por oración. Si tienes más de una, di cuántas son antes de empezar, para que la gente sepa cuántas esperar.",
          ],
          say: "The main reason is that the payment integration isn't stable yet.",
        },
        {
          label: ["Evidence", "Evidence: la evidencia"],
          html: [
            "Something the listener could check: a number, a test result, a named example. It answers the question every skeptical listener is asking in silence: <em>why should I believe that?</em> This is your infer frame, <em>I conclude X because I see Y</em>, with the Y said out loud.",
            "Algo que la otra persona podría verificar: un número, el resultado de una prueba, un ejemplo con nombre. Responde la pregunta que toda audiencia escéptica se hace en silencio: <em>why should I believe that?</em> Es tu frase de inferir, <em>I conclude X because I see Y</em>, con la Y dicha en voz alta.",
          ],
          say: "In last week's test, one in twelve transactions failed at checkout.",
        },
        {
          label: ["So what", "So what: el para qué"],
          html: [
            "What it means for the people in the room: money, time, risk, or the decision you need from them. Stop before this step and you have given a report. Take it and you have made an argument.",
            "Lo que significa para quienes están en la sala: dinero, tiempo, riesgo o la decisión que necesitas de su parte. Si te detienes antes de este paso, diste un reporte. Si lo das, armaste un argumento.",
          ],
          say: "If we launch on the 3rd, we're asking our first customers to find that bug for us.",
        },
      ],
    },
    {
      t: "compare",
      title: ["Context first vs. point first", "Contexto primero vs. conclusión primero"],
      labels: [
        ["Context first", "Contexto primero"],
        ["Point first", "Conclusión primero"],
      ],
      rows: [
        {
          weak: "So, as you know, we started this project in June, and since then there have been several changes in the team, and also the vendor had some delays, so because of all that, I think maybe we need more time.",
          strong:
            "We need three more weeks. Two things changed since June: we lost two engineers, and the vendor delivered a month late.",
          why: [
            "The ask comes first and it has a number. The history shrinks to the two facts that explain it.",
            "La petición va primero y trae un número. La historia se reduce a los dos hechos que la explican.",
          ],
        },
        {
          weak: "I want to talk about our hiring process.",
          strong:
            "Our hiring process is costing us our best candidates, and I want to propose a fix.",
          why: [
            "The first is a topic; nobody can agree or disagree with it. The second is a claim, and it tells the room why to keep listening.",
            "La primera es un tema; nadie puede estar a favor o en contra. La segunda es una afirmación, y le dice a la sala por qué seguir escuchando.",
          ],
        },
        {
          weak: "There are many reasons to choose the second vendor.",
          strong: "I recommend the second vendor for two reasons: price and support.",
          why: [
            "<em>Many</em> gives the listener nothing to count. A number sets up a structure they can follow and tells them when you are done.",
            "<em>Many</em> no le da a nadie nada que contar. Un número arma una estructura que se puede seguir y avisa cuándo terminas.",
          ],
        },
        {
          weak: "Customer satisfaction went down a lot last quarter.",
          strong:
            "Customer satisfaction dropped from 91 to 84 last quarter, the lowest it's been in two years.",
          why: [
            "<em>A lot</em> is your conclusion. The two numbers are what you saw, and the comparison tells people how worried to be.",
            "<em>A lot</em> es tu conclusión. Los dos números son lo que viste, y la comparación le dice a la gente qué tanto preocuparse.",
          ],
        },
        {
          weak: "The new system is much more efficient.",
          strong:
            "The new system closes a ticket in four minutes instead of eleven. For a team that closes 200 a day, that's about 23 hours of work back, every day.",
          why: [
            "A number, a comparison and a consequence. The listener does not have to do the math or take your word for <em>efficient</em>.",
            "Un número, una comparación y una consecuencia. Nadie tiene que hacer la cuenta ni creerte la palabra <em>efficient</em>.",
          ],
        },
        {
          weak: "Sales are up 12 percent. Returns are down. The Monterrey office hired four people.",
          strong:
            "Sales are up 12 percent, which tells me the new pricing is working, and I'd like to extend it to the other two regions.",
          why: [
            "Three facts with no <em>so what</em> are a list, and the room has to guess what you want. One fact with its meaning and its ask is an argument.",
            "Tres datos sin <em>so what</em> son una lista, y la sala tiene que adivinar qué quieres. Un dato con su significado y su petición es un argumento.",
          ],
        },
        {
          weak: "I really believe this is the best option. Trust me.",
          strong:
            "I believe this is the best option, and here's what I'm basing that on: we ran both for 30 days, and this one had half the errors.",
          why: [
            "<em>Trust me</em> asks for belief. Evidence earns it, and it still works when you are not in the room.",
            "<em>Trust me</em> pide que te crean. La evidencia se lo gana, y sigue funcionando cuando ya no estás en la sala.",
          ],
        },
      ],
    },
    {
      t: "h",
      text: ["Numbers that land", "Números que sí se quedan"],
    },
    {
      t: "p",
      html: [
        "A slide can hold twelve numbers. A listener can hold one. When you speak, pick the single number that carries your point and give it three things: the number itself, rounded; a comparison that tells people whether it is big or small; and the consequence. <em>Churn is 4.2 percent</em> is data. <em>We lose about one customer in twenty-five every month, twice what we lost last year, and at this rate new sales only replace the ones who leave</em> is an argument.",
        "Una diapositiva aguanta doce números. Quien escucha retiene uno. Cuando hables, elige el único número que sostiene tu punto y dale tres cosas: el número en sí, redondeado; una comparación que diga si es mucho o poco; y la consecuencia. <em>Churn is 4.2 percent</em> es un dato. <em>We lose about one customer in twenty-five every month, twice what we lost last year, and at this rate new sales only replace the ones who leave</em> es un argumento.",
      ],
    },
    {
      t: "phrases",
      title: ["Signposts: tell them where you are", "Señales: diles en qué parte vas"],
      items: [
        {
          en: "I'm recommending one thing today: ___.",
          use: [
            "Opens with the claim and promises there is only one.",
            "Abre con la afirmación y promete que es una sola.",
          ],
        },
        {
          en: "There are three reasons.",
          use: [
            "Say the count before the reasons. People listen differently when they know how many are coming.",
            "Di cuántas son antes de darlas. La gente escucha distinto cuando sabe cuántas vienen.",
          ],
        },
        {
          en: "First, ___. Second, ___. And third, ___.",
          use: [
            "Spoken bullet points. The <em>and</em> before the last one tells the room you are finishing.",
            "Viñetas habladas. El <em>and</em> antes de la última le avisa a la sala que ya vas a cerrar.",
          ],
        },
        {
          en: "Here's what I'm basing that on.",
          use: [
            "Announces evidence. Use it right after any claim someone might doubt.",
            "Anuncia la evidencia. Úsala justo después de cualquier afirmación que alguien pudiera dudar.",
          ],
        },
        {
          en: "Let me give you one number.",
          use: [
            "Tells people to pay attention to a single figure, and commits you to choosing one.",
            "Le pide a la gente que ponga atención a una sola cifra, y te obliga a elegir una.",
          ],
        },
        {
          en: "To put that in perspective, ___.",
          use: [
            "Introduces the comparison: last year, the budget, a competitor, the target.",
            "Introduce la comparación: el año pasado, el presupuesto, un competidor, la meta.",
          ],
        },
        {
          en: "What that means for us is ___.",
          use: [
            "The <em>so what</em>. If you only add one phrase from this lesson to your English, make it this one.",
            "El <em>so what</em>. Si solo vas a sumar una frase de esta lección a tu inglés, que sea esta.",
          ],
        },
        {
          en: "The short version is ___.",
          use: [
            "The exit when you notice you are deep in background. Say it and go straight to the claim.",
            "La salida cuando notas que ya te metiste de lleno en los antecedentes. Dila y ve directo a la afirmación.",
          ],
        },
        {
          en: "Here's the background you need, in two sentences.",
          use: [
            "Context after the claim, with a limit you set for yourself out loud.",
            "Contexto después de la afirmación, con un límite que tú te pones en voz alta.",
          ],
        },
        {
          en: "Fair question. Here's the evidence.",
          use: [
            "When someone challenges a claim. No defensiveness; go straight to what they can check.",
            "Cuando alguien cuestiona una afirmación. Sin ponerte a la defensiva; ve directo a lo que pueden verificar.",
          ],
        },
        {
          en: "So, to bring it back: ___.",
          use: [
            "Restates the claim at the end, in the same words you opened with.",
            "Repite la afirmación al final, con las mismas palabras con las que abriste.",
          ],
        },
      ],
    },
    {
      t: "model",
      title: ["A 60-second recommendation", "Una recomendación en 60 segundos"],
      context: [
        "Priya leads product. In a launch-readiness review with US leadership, she has one minute to make her case.",
        "Priya dirige producto. En una revisión previa al lanzamiento con la dirección en Estados Unidos, tiene un minuto para defender su postura.",
      ],
      lines: [
        {
          en: "I'm recommending we move the launch from March 3 to March 24.",
          note: [
            "The claim, in the first sentence, with both dates. Nobody has to wait to find out where she stands.",
            "La afirmación, en la primera oración, con las dos fechas. Nadie tiene que esperar para saber cuál es su postura.",
          ],
        },
        {
          en: "There are two reasons: the payment integration isn't stable, and support isn't trained on it yet.",
          note: [
            "A signpost with a count, and both reasons previewed in one line. The room now has the whole map.",
            "Una señal con el número de razones, y las dos anunciadas en una línea. La sala ya tiene el mapa completo.",
          ],
        },
        {
          en: "First, stability. In last week's test, one in twelve transactions failed at checkout. Our threshold for launch is one in a thousand.",
          note: [
            "Evidence: one number, then the comparison that says how bad it is.",
            "Evidencia: un número, y luego la comparación que dice qué tan grave es.",
          ],
        },
        {
          en: "Second, support. Eight of our twenty agents have finished the training. The rest finish on March 17.",
          note: [
            "Facts anyone could verify. The date quietly explains why she chose the 24th.",
            "Hechos que cualquiera podría verificar. La fecha explica, sin decirlo, por qué eligió el 24.",
          ],
        },
        {
          en: "Here's what that means. If we launch on the 3rd, our first customers hit a checkout that fails, and they call a support team that can't help them.",
          note: [
            "The <em>so what</em>, told as what a customer would live through.",
            "El <em>so what</em>, contado como lo que viviría un cliente.",
          ],
        },
        {
          en: "Three weeks costs us about 40,000 dollars in delayed revenue. A failed launch costs us customers we spent a year signing.",
          note: [
            "She names the cost of her own proposal before anyone asks. An argument that admits its price is harder to attack.",
            "Menciona el costo de su propia propuesta antes de que alguien pregunte. Un argumento que reconoce su precio es más difícil de atacar.",
          ],
        },
        {
          en: "So I'm asking for your approval to move to the 24th, and I'll have the revised plan to you by Friday.",
          note: [
            "The claim returns as an ask, with a next step and a date.",
            "La afirmación regresa convertida en petición, con el siguiente paso y una fecha.",
          ],
        },
      ],
    },
    {
      t: "trap",
      title: ["Context first, point last", "Primero el contexto, al final la conclusión"],
      html: [
        "In Spanish, building up to the conclusion is good manners and good thinking: you show your work, you bring the listener along, and the point arrives as the natural result. Many American listeners hear the same structure differently. While you give context, they are trying to guess where you are going, and some will decide you do not have a position. Neither habit is wrong; they are two different agreements with the listener. In English at work, say the conclusion and then offer the context: <em>Here's the background you need.</em> Two smaller points travel with this one. <b>Evidence</b> is uncountable: <span class='x'>✗</span> <em>the evidences show</em>, <span class='ok'>✓</span> <em>the evidence shows</em>, <em>one piece of evidence</em>. And an <b>argument</b> in English is also a fight, so <em>I had an argument with the client</em> means you quarreled. To say you defended a position, use <em>I made the case to the client</em>.",
        "En español, ir construyendo hasta llegar a la conclusión es buena educación y buen razonamiento: muestras tu trabajo, llevas de la mano a quien te escucha y el punto llega como resultado natural. Mucha gente en Estados Unidos oye esa misma estructura de otra forma. Mientras das contexto, están tratando de adivinar a dónde vas, y algunos van a concluir que no tienes postura. Ninguna de las dos costumbres está mal; son dos acuerdos distintos con quien escucha. En inglés, en el trabajo, di la conclusión y después ofrece el contexto: <em>Here's the background you need.</em> Dos detalles más que van de la mano. <b>Evidence</b> es incontable: <span class='x'>✗</span> <em>the evidences show</em>, <span class='ok'>✓</span> <em>the evidence shows</em>, <em>one piece of evidence</em>. Y <b>argument</b> en inglés también es un pleito, así que <em>I had an argument with the client</em> significa que discutieron. Para decir que defendiste una postura, usa <em>I made the case to the client</em>.",
      ],
    },
    {
      t: "choice",
      title: ["Choose the line that makes the argument", "Elige la frase que arma el argumento"],
      items: [
        {
          prompt: [
            "Your VP opens the meeting: <em>Where are we on the vendor decision?</em> You have a recommendation.",
            "Tu VP abre la junta: <em>Where are we on the vendor decision?</em> Tú ya tienes una recomendación.",
          ],
          options: [
            {
              en: "We've been looking at this for about six weeks now, and we talked to three vendors, and each one has its strengths.",
              ok: false,
              why: [
                "All true, and it answers a different question. She asked where you are, and she is still waiting.",
                "Todo es cierto, pero responde otra pregunta. Te preguntó en qué van, y sigue esperando.",
              ],
            },
            {
              en: "I recommend we go with the second vendor. They're 15 percent cheaper, and they offer support in our time zone.",
              ok: true,
              why: [
                "Claim first, then two reasons she can check. If she wants the six-week history, she will ask.",
                "Primero la afirmación y luego dos razones que puede verificar. Si quiere la historia de las seis semanas, la va a pedir.",
              ],
            },
            {
              en: "I think there are a lot of factors to consider before we decide.",
              ok: false,
              why: [
                "It sounds careful. After six weeks of work, it tells her you still have no position.",
                "Suena prudente. Después de seis semanas de trabajo, le dice que todavía no tienes postura.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You said the new process is faster. A director asks: <em>How do you know?</em>",
            "Dijiste que el nuevo proceso es más rápido. Una directora pregunta: <em>How do you know?</em>",
          ],
          options: [
            {
              en: "Everyone on the team feels it's a big improvement.",
              ok: false,
              why: [
                "That is the opinion of the people who built it. It may be true, but she cannot check it.",
                "Es la opinión de quienes lo diseñaron. Puede ser cierto, pero ella no lo puede verificar.",
              ],
            },
            {
              en: "I've been doing this for ten years, so I'm confident in the result.",
              ok: false,
              why: [
                "That is ethos, and she asked for logos. Experience is a reason to listen to you; it does not prove this claim.",
                "Eso es ethos, y ella pidió logos. La experiencia es una razón para escucharte; no prueba esta afirmación.",
              ],
            },
            {
              en: "We timed it for two weeks. The old process took nine days on average; the new one takes five.",
              ok: true,
              why: [
                "How you measured, then the two numbers side by side. The question is answered, and so is the next one.",
                "Cómo lo mediste, y luego los dos números lado a lado. Queda respondida la pregunta, y también la siguiente.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You have one sentence to present a number in a budget review.",
            "Tienes una sola oración para presentar un número en una revisión de presupuesto.",
          ],
          options: [
            {
              en: "Our cloud costs were 412,318 dollars in the third quarter.",
              ok: false,
              why: [
                "Exact, and gone from everyone's memory in five seconds. Nothing tells the room whether it is high or low.",
                "Exacto, y olvidado por todos en cinco segundos. Nada le dice a la sala si es mucho o poco.",
              ],
            },
            {
              en: "Our cloud costs were very high in the third quarter, much higher than we expected.",
              ok: false,
              why: [
                "A conclusion with no number behind it. <em>Very high</em> cannot be checked, so it invites an argument about adjectives.",
                "Una conclusión sin número detrás. <em>Very high</em> no se puede verificar, así que invita a discutir sobre adjetivos.",
              ],
            },
            {
              en: "Our cloud costs hit about 410,000 dollars in the third quarter, 30 percent over plan, and at this pace we use up the year's budget by early November.",
              ok: true,
              why: [
                "Rounded number, comparison, consequence. The room knows the size of the problem and when it becomes urgent.",
                "Número redondeado, comparación, consecuencia. La sala ya sabe el tamaño del problema y cuándo se vuelve urgente.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Mid-answer, you notice you have been giving background for a full minute and people are looking at their phones.",
            "A media respuesta, te das cuenta de que llevas un minuto completo dando antecedentes y la gente ya está viendo su celular.",
          ],
          options: [
            {
              en: "Sorry, I'm talking too much. Anyway.",
              ok: false,
              why: [
                "The apology costs you credibility, and the room still does not have your point.",
                "La disculpa te cuesta credibilidad, y la sala sigue sin tener tu punto.",
              ],
            },
            {
              en: "Just one more piece of background, and then I'll get to the point.",
              ok: false,
              why: [
                "It promises the point later. Their attention left a minute ago; give it to them now.",
                "Promete el punto para después. Su atención se fue hace un minuto; dáselo ya.",
              ],
            },
            {
              en: "The short version is: we should renew for one year, not three. Let me give you the two reasons.",
              ok: true,
              why: [
                "A clean turn to the claim, with a signpost for what follows. Nobody remembers the detour.",
                "Un giro limpio hacia la afirmación, con una señal de lo que sigue. Nadie se va a acordar del rodeo.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You are closing a status update. Which ending turns it into an argument?",
            "Estás cerrando un reporte de avance. ¿Qué cierre lo convierte en un argumento?",
          ],
          options: [
            {
              en: "So those are the numbers for this month.",
              ok: false,
              why: [
                "It ends the report and leaves the meaning to the listener.",
                "Termina el reporte y le deja la interpretación a quien escucha.",
              ],
            },
            {
              en: "So, as you can see, the situation is quite complex.",
              ok: false,
              why: [
                "It sounds like a conclusion, but <em>complex</em> is not a position anyone can act on.",
                "Suena a conclusión, pero <em>complex</em> no es una postura sobre la que alguien pueda actuar.",
              ],
            },
            {
              en: "So we're two weeks behind, and I need one more QA engineer through April to close the gap.",
              ok: true,
              why: [
                "What the numbers mean, and what you need because of it. That is the <em>so what</em>.",
                "Lo que significan los números y lo que necesitas a partir de eso. Ese es el <em>so what</em>.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "rewrite",
      title: ["Invert it", "Dale la vuelta"],
      items: [
        {
          task: [
            "Move the point to the first sentence and cut the background down to what explains it.",
            "Pasa el punto a la primera oración y reduce los antecedentes a lo que lo explica.",
          ],
          before:
            "As you know, last year we changed the ERP, and there were a lot of problems with the migration, and the finance team has been working extra hours since then, so we were thinking that maybe it would be good to hire a consultant.",
          after:
            "I'd like to bring in an ERP consultant for three months. Since the migration, finance has worked overtime every month-end fixing data by hand, and we can't keep that up.",
          why: [
            "The request leads, with a duration. One fact from the history survives, the one that justifies it. <em>We were thinking that maybe</em> became <em>I'd like to</em>.",
            "La petición va al frente, con una duración. De toda la historia sobrevive un hecho, el que la justifica. <em>We were thinking that maybe</em> se volvió <em>I'd like to</em>.",
          ],
        },
        {
          task: ["Turn the topic into a claim.", "Convierte el tema en una afirmación."],
          before: "Today I want to share some thoughts about our onboarding.",
          after: "Our onboarding takes six weeks, and I think we can get it down to three.",
          why: [
            "Now there is something to agree or disagree with, and a number that makes people curious about how.",
            "Ahora hay algo con lo que se puede estar de acuerdo o no, y un número que despierta curiosidad sobre el cómo.",
          ],
        },
        {
          task: [
            "Give the number a comparison and a consequence.",
            "Dale al número una comparación y una consecuencia.",
          ],
          before: "We had 37 late deliveries in October.",
          after:
            "We had 37 late deliveries in October, almost double September. Two of our largest accounts have already asked for a call about it.",
          why: [
            "<em>Almost double</em> tells the room the size; the two accounts tell them why it matters this week.",
            "<em>Almost double</em> le dice a la sala el tamaño; las dos cuentas le dicen por qué importa esta semana.",
          ],
        },
        {
          task: ["Add the so what.", "Agrega el so what."],
          before:
            "The survey results are in. Sixty percent of employees say they don't understand the new bonus plan.",
          after:
            "Sixty percent of employees say they don't understand the new bonus plan. A bonus nobody understands doesn't motivate anyone, so I'm proposing a one-page explanation and a 20-minute session with each team.",
          why: [
            "The fact was already strong. What was missing was what it means and what you want done about it.",
            "El dato ya era fuerte. Faltaba decir qué significa y qué quieres que se haga al respecto.",
          ],
        },
        {
          task: ["Count the reasons and separate them.", "Di cuántas razones son y sepáralas."],
          before:
            "We should close the Tijuana warehouse because it's expensive and also most customers are now in the center of the country and besides the lease ends in June anyway.",
          after:
            "We should close the Tijuana warehouse, for three reasons. First, it's our most expensive site per shipment. Second, most of our customers are now in central Mexico. And third, the lease ends in June, so we can leave without a penalty.",
          why: [
            "The same three reasons, now countable. Each gets its own sentence and its own pause, and the last one carries its consequence.",
            "Las mismas tres razones, ahora contables. Cada una tiene su propia oración y su propia pausa, y la última trae su consecuencia.",
          ],
        },
      ],
    },
    {
      t: "speak",
      title: ["One claim, 60 seconds", "Una afirmación, 60 segundos"],
      prompt: [
        "Pick a real recommendation you would make at work this month: something to change, buy, stop or delay. In the think time, write four keywords and nothing else: claim, reason, evidence, so what. Then say it out loud and record yourself.",
        "Elige una recomendación real que harías en tu trabajo este mes: algo que cambiar, comprar, dejar de hacer o posponer. En el tiempo de pensar, escribe cuatro palabras clave y nada más: claim, reason, evidence, so what. Luego dilo en voz alta y grábate.",
      ],
      think: 30,
      speak: 60,
      frame:
        "I recommend ___. The main reason is ___. Here's what I'm basing that on: ___. What that means for us is ___.",
      checklist: [
        ["My claim was in the first sentence.", "Mi afirmación estuvo en la primera oración."],
        [
          "Someone could disagree with it. (If not, it was a topic.)",
          "Alguien podría no estar de acuerdo con ella. (Si no, era un tema.)",
        ],
        [
          "I gave at least one piece of evidence a listener could check.",
          "Di por lo menos una evidencia que quien escucha podría verificar.",
        ],
        ["My number came with a comparison.", "Mi número vino con una comparación."],
        [
          "I ended on what it means or what I need, not on <em>that's all</em>.",
          "Cerré con lo que significa o con lo que necesito, no con <em>that's all</em>.",
        ],
      ],
      model:
        "I recommend we stop sending the weekly report as a PDF and move it to the shared dashboard. The main reason is time. Here's what I'm basing that on: it takes two analysts about five hours each every Friday to build it, and last month only six of the thirty people on the list opened it. What that means for us is ten hours a week we could spend on the analysis people actually ask for. I'd like to run both for one month and then retire the PDF.",
    },
    {
      t: "takeaways",
      items: [
        [
          "One talk, one claim, in the first two sentences. Context comes after, and only as much as explains the claim.",
          "Una intervención, una afirmación, en las primeras dos oraciones. El contexto va después, y solo el que explica la afirmación.",
        ],
        [
          "Claim, reason, evidence, so what. Without the last step it is a report.",
          "Claim, reason, evidence, so what. Sin el último paso es un reporte.",
        ],
        [
          "Count your reasons out loud before you give them.",
          "Di en voz alta cuántas razones son antes de darlas.",
        ],
        [
          "One number, rounded, with a comparison and a consequence.",
          "Un número, redondeado, con una comparación y una consecuencia.",
        ],
        [
          "When you catch yourself deep in background: <em>The short version is…</em>",
          "Cuando te descubras hundiéndote en los antecedentes: <em>The short version is…</em>",
        ],
      ],
    },
  ],
};
