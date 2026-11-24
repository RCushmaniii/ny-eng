import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "disagree-with-the-idea",
  slugEs: "desacuerdo-con-la-idea",
  title: ["Disagree With the Idea, Not the Person", "En Desacuerdo con la Idea, No con la Persona"],
  summary: [
    "How to say a clear no to a peer in English: aim at the plan instead of the person, speak from your own view, and soften the delivery without erasing the message.",
    "Cómo decirle un no claro a un colega en inglés: apunta al plan y no a la persona, habla desde tu punto de vista y suaviza la forma sin borrar el mensaje.",
  ],
  description: [
    "Say a clear no to a peer in English. Aim at the plan, not the person, and learn which softeners keep your message intact and which ones erase it.",
    "Dile un no claro a un colega en inglés. Apunta al plan, no a la persona, y aprende qué suavizadores conservan tu mensaje y cuáles lo borran.",
  ],
  minutes: 18,
  blocks: [
    {
      t: "p",
      html: [
        "There are two ways this goes wrong, and most professionals working in a second language have done both. In the first, you disagree with Dana's proposal and say, <em>“Sounds interesting, let me look at it.”</em> Two weeks later she is surprised and a little hurt to learn you were never on board. In the second, you decide to be clear this time and say, <em>“No, that is wrong.”</em> The room goes quiet, and Dana spends the rest of the meeting defending herself.",
        "Esto sale mal de dos maneras, y la mayoría de quienes trabajan en un segundo idioma ya vivieron las dos. En la primera, no estás de acuerdo con la propuesta de Dana y dices: <em>“Sounds interesting, let me look at it.”</em> Dos semanas después, ella se sorprende y se siente un poco dolida al enterarse de que nunca estuviste de acuerdo. En la segunda, decides que esta vez sí vas a hablar claro y dices: <em>“No, that is wrong.”</em> La sala se queda en silencio y Dana pasa el resto de la junta defendiéndose.",
      ],
    },
    {
      t: "p",
      html: [
        "The first version protected the relationship and lost the message. The second delivered the message and damaged the relationship. English has a register that does both jobs, and American professionals use it all day: clear about the idea, warm toward the person. It is built from a few mechanical choices, and this lesson goes through each one.",
        "La primera versión cuidó la relación y perdió el mensaje. La segunda entregó el mensaje y lastimó la relación. El inglés tiene un registro que logra las dos cosas, y los profesionales en Estados Unidos lo usan todo el día: claro con la idea, cálido con la persona. Se construye con unas cuantas decisiones mecánicas, y esta lección las recorre una por una.",
      ],
    },
    {
      t: "idea",
      title: ["Point at the thing on the table", "Apunta a lo que está sobre la mesa"],
      html: [
        "Every disagreement has an object: a plan, a number, a timeline, a vendor. Make that object the subject of your sentence and speak from your own position with <em>I</em>. <em>The timeline is too tight</em> and <em>I don't think the timeline works</em> are about the timeline. <em>You're being unrealistic</em> is about Dana. The first two can be discussed. The third can only be defended against. Then make sure the no survives the politeness: when you finish speaking, the other person should be able to repeat your position.",
        "Todo desacuerdo tiene un objeto: un plan, una cifra, un calendario, un proveedor. Haz que ese objeto sea el sujeto de tu frase y habla desde tu propia postura con <em>I</em>. <em>The timeline is too tight</em> y <em>I don't think the timeline works</em> hablan del calendario. <em>You're being unrealistic</em> habla de Dana. Las dos primeras se pueden discutir. De la tercera solo queda defenderse. Después, asegúrate de que el no sobreviva a la cortesía: cuando termines de hablar, la otra persona debe poder repetir tu postura.",
      ],
    },
    {
      t: "framework",
      title: ["Stand, reason, next", "Postura, razón, lo que sigue"],
      lead: [
        "Three sentences for any disagreement with a peer. The order matters: your position comes first, so nobody has to guess where you landed.",
        "Tres frases para cualquier desacuerdo con un colega. El orden importa: tu postura va primero, para que nadie tenga que adivinar dónde quedaste.",
      ],
      steps: [
        {
          label: ["Say where you stand", "Di cuál es tu postura"],
          html: [
            "One sentence, with <em>I</em>, in the first five seconds. Spanish speakers often build up to the disagreement through context and courtesy, and by the time it arrives, the listener has already filed the answer as a yes.",
            "Una frase, con <em>I</em>, en los primeros cinco segundos. Quienes hablamos español muchas veces llegamos al desacuerdo después de mucho contexto y cortesía, y para cuando aparece, quien escucha ya archivó la respuesta como un sí.",
          ],
          say: "I'd go a different way on this.",
        },
        {
          label: [
            "Give the reason, with the idea as the subject",
            "Da la razón, con la idea como sujeto",
          ],
          html: [
            "Name the specific thing in the plan that does not work, and attach a fact. The subject of the sentence is the timeline, the budget, the assumption. The word <em>you</em> does not appear.",
            "Nombra lo específico del plan que no funciona y agrégale un dato. El sujeto de la frase es el calendario, el presupuesto, el supuesto. La palabra <em>you</em> no aparece.",
          ],
          say: "The timeline assumes one week of QA. The last two releases needed three.",
        },
        {
          label: ["Say what comes next", "Di qué sigue"],
          html: [
            "End with what you would do, or what you would need to see to change your mind. A disagreement that stops at <em>no</em> leaves the other person holding the problem alone.",
            "Cierra con lo que tú harías, o con lo que necesitarías ver para cambiar de opinión. Un desacuerdo que se queda en el <em>no</em> deja a la otra persona cargando sola con el problema.",
          ],
          say: "I'd keep the full test cycle and move the launch to the 20th.",
        },
      ],
    },
    {
      t: "compare",
      title: ["From the person to the idea", "De la persona a la idea"],
      labels: [
        ["About the person", "Sobre la persona"],
        ["About the idea", "Sobre la idea"],
      ],
      rows: [
        {
          weak: "You're wrong about the numbers.",
          strong: "I'm getting a different number. I have 14 percent, not 22.",
          why: [
            "The strong version reports a gap between two figures. Nobody has been called wrong, and the next step, comparing sources, is obvious.",
            "La versión fuerte reporta una diferencia entre dos cifras. A nadie se le dijo que está mal, y el siguiente paso, comparar fuentes, es evidente.",
          ],
        },
        {
          weak: "Your plan doesn't make sense.",
          strong: "The plan doesn't leave room for testing, and that's the part that worries me.",
          why: [
            "<em>Doesn't make sense</em> questions the author's thinking. Naming the one missing piece shows you read the plan seriously.",
            "<em>Doesn't make sense</em> pone en duda cómo piensa quien lo hizo. Señalar la pieza que falta demuestra que leíste el plan en serio.",
          ],
        },
        {
          weak: "You didn't think about support.",
          strong: "Support isn't in this version yet, and I think it has to be.",
          why: [
            "<em>You didn't think</em> is a claim about what happened in someone's head. <em>Isn't in this version yet</em> describes the document, and <em>yet</em> assumes it can be fixed.",
            "<em>You didn't think</em> afirma algo sobre lo que pasó en la cabeza de alguien. <em>Isn't in this version yet</em> describe el documento, y <em>yet</em> da por hecho que tiene arreglo.",
          ],
        },
        {
          weak: "That is not possible.",
          strong: "We can't do that by Friday. We can do it by the 14th.",
          why: [
            "A contraction, a limit, and what is possible. The no is just as firm and the conversation keeps moving.",
            "Una contracción, un límite y lo que sí se puede. El no es igual de firme y la conversación sigue avanzando.",
          ],
        },
        {
          weak: "You're being unrealistic.",
          strong: "I don't think eight weeks is realistic for this scope.",
          why: [
            "The same adjective moves from the person to the eight weeks. <em>I don't think</em> marks it as your judgment, which leaves her room to show you something you missed.",
            "El mismo adjetivo pasa de la persona a las ocho semanas. <em>I don't think</em> lo marca como tu juicio, y eso le deja espacio para mostrarte algo que no viste.",
          ],
        },
        {
          weak: "That's a bad idea.",
          strong:
            "I have a real concern with that option. It locks us into one vendor for three years.",
          why: [
            "A verdict gives the listener nothing to work with. A named concern gives them something to answer.",
            "Un veredicto no le da a quien escucha nada con qué trabajar. Una preocupación con nombre le da algo que responder.",
          ],
        },
        {
          weak: "I don't agree with you.",
          strong: "I don't agree with that approach.",
          why: [
            "Two words changed. <em>With you</em> makes it personal; <em>with that approach</em> keeps it on the work. Americans say the second constantly and it costs nothing.",
            "Cambiaron dos palabras. <em>With you</em> lo vuelve personal; <em>with that approach</em> lo deja en el trabajo. En Estados Unidos dicen la segunda todo el tiempo y no cuesta nada.",
          ],
        },
      ],
    },
    {
      t: "h",
      text: [
        "Softeners that keep the message, softeners that erase it",
        "Suavizadores que conservan el mensaje y suavizadores que lo borran",
      ],
    },
    {
      t: "p",
      html: [
        "Softening is good English. <em>I think</em>, <em>I'd</em>, <em>my concern is</em>, <em>from what I've seen</em>: each one lowers the force of a sentence while the position stays in plain view. The trouble starts when softeners stack up, or when they replace the position altogether: <em>maybe</em>, <em>perhaps</em>, <em>a little bit</em>, <em>kind of</em>, <em>we'll see</em>, <em>let me check</em>. Use this test. One softener per sentence, and after the sentence, the listener can still say what you want. If they cannot, the softener erased the message.",
        "Suavizar es buen inglés. <em>I think</em>, <em>I'd</em>, <em>my concern is</em>, <em>from what I've seen</em>: cada uno le baja fuerza a la frase mientras la postura sigue a la vista. El problema empieza cuando los suavizadores se amontonan o cuando reemplazan la postura por completo: <em>maybe</em>, <em>perhaps</em>, <em>a little bit</em>, <em>kind of</em>, <em>we'll see</em>, <em>let me check</em>. Usa esta prueba. Un suavizador por frase y, después de la frase, quien te escucha todavía puede decir qué quieres. Si no puede, el suavizador borró el mensaje.",
      ],
    },
    {
      t: "compare",
      title: ["Is the no still there?", "¿El no sigue ahí?"],
      labels: [
        ["Message erased", "Mensaje borrado"],
        ["Message intact", "Mensaje intacto"],
      ],
      rows: [
        {
          weak: "Maybe we could possibly think about looking at the timeline again at some point.",
          strong: "I think the timeline is too tight. Can we look at it again this week?",
          why: [
            "Four softeners and no position. The strong version has one softener, <em>I think</em>, and a request with a deadline.",
            "Cuatro suavizadores y ninguna postura. La versión fuerte tiene un solo suavizador, <em>I think</em>, y una petición con fecha.",
          ],
        },
        {
          weak: "It's an interesting idea. We'll see.",
          strong: "It's an interesting idea, and I don't think it fits this quarter.",
          why: [
            "<em>We'll see</em> is a no in Mexico and a maybe in the United States. If the answer is no for now, say <em>this quarter</em> out loud.",
            "<em>We'll see</em> es un no en México y un tal vez en Estados Unidos. Si la respuesta es no por ahora, di <em>this quarter</em> en voz alta.",
          ],
        },
        {
          weak: "I'm not sure, but it might be a little bit risky.",
          strong: "I think it's risky, mainly because of the contract terms.",
          why: [
            "<em>A little bit risky</em> sounds like a small risk you can live with. If the risk is the reason you object, give it its real size and its cause.",
            "<em>A little bit risky</em> suena a un riesgo pequeño con el que puedes vivir. Si el riesgo es la razón de tu objeción, dale su tamaño real y su causa.",
          ],
        },
        {
          weak: "Let me check and get back to you.",
          strong: "I already know it's a no for this sprint. I can look at it for the next one.",
          why: [
            "If you really need to check, <em>let me check</em> is fine. If you already know, it only postpones the no and adds a broken expectation to it.",
            "Si de verdad necesitas revisar, <em>let me check</em> está bien. Si ya sabes la respuesta, solo pospone el no y le suma una expectativa rota.",
          ],
        },
        {
          weak: "It's a little complicated on our side.",
          strong:
            "That won't work with our current setup. The system can't split invoices by region.",
          why: [
            "<em>Complicated</em> asks the listener to decode you. The specific obstacle lets them help solve it or drop the request.",
            "<em>Complicated</em> le pide a quien te escucha que te descifre. El obstáculo concreto le permite ayudarte a resolverlo o retirar la petición.",
          ],
        },
        {
          weak: "Sure, we can try.",
          strong:
            "I'll try it. I want to be straight with you, though: I don't expect it to work, and here's why.",
          why: [
            "<em>Sure, we can try</em> is heard as a commitment. If you are agreeing to an experiment you doubt, put the doubt on the record now.",
            "<em>Sure, we can try</em> se escucha como compromiso. Si estás aceptando un experimento del que dudas, deja la duda registrada desde ahora.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: ["Saying no to a peer", "Para decirle que no a un colega"],
      items: [
        {
          en: "I'd go a different way on this.",
          use: [
            "An everyday opener for a disagreement about approach. Calm and unmistakable.",
            "Una entrada de todos los días para un desacuerdo de enfoque. Tranquila e inconfundible.",
          ],
        },
        {
          en: "I'm not convinced yet.",
          use: [
            "When you have not decided against it but will not pretend to agree. It invites more evidence.",
            "Cuando no te decidiste en contra pero tampoco vas a fingir que estás de acuerdo. Invita a que te den más evidencia.",
          ],
        },
        {
          en: "I'm a no on option B.",
          use: [
            "Short and informal, for a quick decision among peers. Follow it with one reason.",
            "Corta e informal, para una decisión rápida entre colegas. Agrégale una razón.",
          ],
        },
        {
          en: "I don't think we should do that, and I'd rather say so now.",
          use: [
            "When your instinct is to stay quiet. The second half explains why you are speaking up.",
            "Cuando tu instinto es quedarte en silencio. La segunda mitad explica por qué estás hablando.",
          ],
        },
        {
          en: "I can't take that on this week.",
          use: [
            "Declining a request for your time. No apology and no long explanation needed.",
            "Para rechazar una petición de tu tiempo. No hace falta disculparte ni dar una explicación larga.",
          ],
        },
        {
          en: "I can't do the full report. I can do the summary by Thursday.",
          use: [
            "A no to the request as stated, with the part you can honestly offer.",
            "Un no a la petición tal como llegó, con la parte que sí puedes ofrecer con honestidad.",
          ],
        },
        {
          en: "If I say yes to this, the migration slips.",
          use: [
            "Makes the cost of your yes visible, so the no reads as a trade-off the other person can weigh.",
            "Hace visible lo que costaría tu sí, para que el no se lea como un intercambio que la otra persona puede sopesar.",
          ],
        },
        {
          en: "That's a no for now. Ask me again after the 15th.",
          use: [
            "When the timing is the obstacle. It is clear today and gives a real date for the next conversation.",
            "Cuando el obstáculo es el momento. Es clara hoy y da una fecha real para la siguiente conversación.",
          ],
        },
        {
          en: "I'm going to pass on this one.",
          use: [
            "A friendly, final no to an optional request, like joining a committee or a side project.",
            "Un no amable y definitivo a una petición opcional, como entrar a un comité o a un proyecto paralelo.",
          ],
        },
        {
          en: "We've landed in different places on this, and I think that's okay.",
          use: [
            "When you have both made your case and still disagree. It closes the argument without forcing a false agreement.",
            "Cuando los dos ya expusieron su caso y siguen sin coincidir. Cierra la discusión sin forzar un acuerdo falso.",
          ],
        },
      ],
    },
    {
      t: "model",
      title: ["A no between peers", "Un no entre colegas"],
      context: [
        "Marcus runs the sales engineering team. He wants to borrow two of your developers for a week to build a custom demo for a large prospect. Your team is nine days from a release.",
        "Marcus dirige al equipo de ingeniería de ventas. Quiere que le prestes a dos de tus desarrolladores durante una semana para armar un demo a la medida para un prospecto grande. A tu equipo le faltan nueve días para una liberación.",
      ],
      lines: [
        {
          who: "Marcus",
          en: "I need Sofia and Ravi for a week, starting Monday. This deal is huge and the demo has to be perfect.",
          note: [
            "A direct request with real stakes behind it. He is protecting the deal.",
            "Una petición directa con algo real en juego. Está protegiendo el trato.",
          ],
        },
        {
          who: "You",
          en: "I can't give you both of them next week.",
          note: [
            "The position, first, in nine words. No <em>let me see</em>, no <em>it's complicated</em>.",
            "La postura, primero, en nueve palabras. Sin <em>let me see</em>, sin <em>it's complicated</em>.",
          ],
        },
        {
          who: "You",
          en: "The release is on the 19th, and Sofia owns the payment module. If she steps away, the release moves.",
          note: [
            "The reason, with the release as the subject. Nothing here is about Marcus or his request.",
            "La razón, con la liberación como sujeto. Nada de esto habla de Marcus ni de su petición.",
          ],
        },
        {
          who: "Marcus",
          en: "Come on. It's one week. Sales has been carrying this company all year.",
          note: [
            "Pressure, and a small provocation. Answering the provocation would move the argument onto the people.",
            "Presión y una pequeña provocación. Responder a la provocación llevaría la discusión hacia las personas.",
          ],
        },
        {
          who: "You",
          en: "I know the deal matters, and I want you to win it. I still can't release Sofia before the 19th.",
          note: [
            "Warm toward the person and his goal, then the same no in the same words. Repeating it calmly is what makes it firm.",
            "Cálido con la persona y con su meta, y luego el mismo no con las mismas palabras. Repetirlo con calma es lo que lo vuelve firme.",
          ],
        },
        {
          who: "You",
          en: "Here's what I can do. Ravi is yours Monday through Wednesday, and Sofia can review the demo for an hour on Thursday.",
          note: [
            "What comes next. A partial yes that you can actually deliver.",
            "Lo que sigue. Un sí parcial que de verdad puedes cumplir.",
          ],
        },
        {
          who: "Marcus",
          en: "That's not what I wanted, but I can work with it. Send me Ravi's calendar.",
          note: [
            "He is not delighted, and the relationship is fine. A clear no he can plan around is worth more to him than a yes that collapses on Wednesday.",
            "No está encantado, y la relación quedó bien. Un no claro con el que puede planear le sirve más que un sí que se cae el miércoles.",
          ],
        },
      ],
    },
    {
      t: "trap",
      title: ["The invisible no and the translated no", "El no invisible y el no traducido"],
      html: [
        "Mexican Spanish has a whole vocabulary for declining without saying no: “vamos viendo”, “déjame checarlo”, “yo creo que sí”, “está complicado”. Translated, they become <em>we'll see</em>, <em>let me check</em>, <em>I think so</em>, <em>it's complicated</em>, and every one of them sounds like progress toward yes. The no was never transmitted, so your colleague had nothing to decode. The opposite error is the word-for-word no: <span class='x'>✗</span> <em>I am not agree</em> (it should be <span class='ok'>✓</span> <em>I don't agree</em>, because <em>agree</em> is a verb in English), <span class='x'>✗</span> <em>You are wrong</em>, <span class='x'>✗</span> <em>That is not possible</em>. One more: “no estoy de acuerdo contigo” is neutral in Spanish, but <em>I don't agree with you</em> points at the person. <span class='ok'>✓</span> <em>I don't agree with that</em> points at the idea.",
        "El español de México tiene todo un vocabulario para negarse sin decir que no: “vamos viendo”, “déjame checarlo”, “yo creo que sí”, “está complicado”. Traducidos, se vuelven <em>we'll see</em>, <em>let me check</em>, <em>I think so</em>, <em>it's complicated</em>, y cada uno suena a que vas avanzando hacia el sí. El no nunca se transmitió, así que tu colega no tenía nada que descifrar. El error contrario es el no palabra por palabra: <span class='x'>✗</span> <em>I am not agree</em> (lo correcto es <span class='ok'>✓</span> <em>I don't agree</em>, porque en inglés <em>agree</em> es un verbo), <span class='x'>✗</span> <em>You are wrong</em>, <span class='x'>✗</span> <em>That is not possible</em>. Uno más: “no estoy de acuerdo contigo” es neutro en español, pero <em>I don't agree with you</em> apunta a la persona. <span class='ok'>✓</span> <em>I don't agree with that</em> apunta a la idea.",
      ],
    },
    {
      t: "choice",
      title: ["Clear, warm, firm", "Claro, cálido, firme"],
      items: [
        {
          prompt: [
            "In a planning meeting, Priya proposes cutting user testing to hit the date. You think that is a mistake. She asks, “Are you okay with that?”",
            "En una junta de planeación, Priya propone eliminar las pruebas con usuarios para llegar a la fecha. Tú crees que es un error. Ella pregunta: “Are you okay with that?”",
          ],
          options: [
            {
              en: "I guess it could maybe work. We'll see how it goes.",
              ok: false,
              why: [
                "Priya hears a yes with mild nerves. Your objection never entered the room.",
                "Priya escucha un sí con algo de nervios. Tu objeción nunca entró a la sala.",
              ],
            },
            {
              en: "No. Cutting testing is a mistake, and you know how the last launch went.",
              ok: false,
              why: [
                "Clear, but <em>you know how the last launch went</em> turns it into a charge against her. She will defend the last launch.",
                "Es claro, pero <em>you know how the last launch went</em> lo convierte en un cargo contra ella. Va a defender el lanzamiento anterior.",
              ],
            },
            {
              en: "I'm not okay with it. Testing caught the checkout bug last time. I'd cut the reporting feature instead and keep the test week.",
              ok: true,
              why: [
                "Stand, reason, next. She knows your position, why you hold it, and what you would do.",
                "Postura, razón, lo que sigue. Ella sabe cuál es tu postura, por qué la tienes y qué harías tú.",
              ],
            },
          ],
        },
        {
          prompt: [
            "A peer on another team asks you to join a six-month process committee. You do not have the time and already know you will not do it.",
            "Un colega de otro equipo te pide que entres a un comité de procesos de seis meses. No tienes tiempo y ya sabes que no lo vas a hacer.",
          ],
          options: [
            {
              en: "I'm going to pass on this one. My calendar is committed through June. Elena might be a good fit.",
              ok: true,
              why: [
                "A friendly, final no, one honest reason, and a useful pointer. He can move on today.",
                "Un no amable y definitivo, una razón honesta y una sugerencia útil. Él puede seguir adelante hoy mismo.",
              ],
            },
            {
              en: "Let me check my calendar and get back to you.",
              ok: false,
              why: [
                "You already know. He will wait, follow up, and get the no a week later with less goodwill.",
                "Ya sabes la respuesta. Él va a esperar, va a darte seguimiento y va a recibir el no una semana después, con menos buena voluntad.",
              ],
            },
            {
              en: "I am sorry, it is not possible for me.",
              ok: false,
              why: [
                "Grammatically fine and clear, but stiff. Without contractions and a reason it sounds colder than you intend.",
                "Gramaticalmente está bien y es claro, pero rígido. Sin contracciones y sin una razón suena más frío de lo que quieres.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Luis shares a forecast showing 22 percent growth. Your own analysis shows 14. The team is on the call.",
            "Luis comparte un pronóstico con 22 por ciento de crecimiento. Tu propio análisis da 14. El equipo está en la llamada.",
          ],
          options: [
            {
              en: "Luis, your forecast is wrong. It's 14, not 22.",
              ok: false,
              why: [
                "You may be right. Said this way, in front of the team, the discussion becomes about Luis and whether he made an error.",
                "Puede que tengas razón. Dicho así, frente al equipo, la discusión se vuelve sobre Luis y sobre si se equivocó.",
              ],
            },
            {
              en: "I'm getting a different number. I have 14 percent using booked revenue only. Which revenue are you counting?",
              ok: true,
              why: [
                "It states the gap, shows your method, and treats the difference as something the two of you can locate.",
                "Plantea la diferencia, muestra tu método y trata la discrepancia como algo que los dos pueden ubicar.",
              ],
            },
            {
              en: "Interesting. That seems a little bit optimistic, maybe.",
              ok: false,
              why: [
                "Three softeners and no number. Nobody on the call learns that you have a 14.",
                "Tres suavizadores y ninguna cifra. Nadie en la llamada se entera de que tú tienes un 14.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Dana asks whether your team can absorb her team's weekend on-call rotation “just for this month.” You are willing to cover two weekends, not four.",
            "Dana te pregunta si tu equipo puede absorber las guardias de fin de semana del suyo “just for this month”. Puedes cubrir dos fines de semana, no cuatro.",
          ],
          options: [
            {
              en: "Sure, we can try.",
              ok: false,
              why: [
                "She now believes four weekends are covered. The correction will arrive on the third weekend.",
                "Ahora ella cree que los cuatro fines de semana están cubiertos. La corrección va a llegar en el tercero.",
              ],
            },
            {
              en: "Four weekends is too much. That's really not fair to my team.",
              ok: false,
              why: [
                "The limit is clear, but <em>not fair</em> makes it a judgment on her for asking, and it offers nothing.",
                "El límite es claro, pero <em>not fair</em> lo vuelve un juicio contra ella por pedirlo, y no ofrece nada.",
              ],
            },
            {
              en: "I can't cover all four. We can take the first two weekends, the 6th and the 13th.",
              ok: true,
              why: [
                "The no and the offer in two sentences, with dates. She knows exactly what she still has to solve.",
                "El no y la oferta en dos frases, con fechas. Ella sabe exactamente qué le falta resolver.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "rewrite",
      title: ["Fix it in writing", "Corrígelo por escrito"],
      items: [
        {
          task: [
            "A chat reply to a peer who asked whether you support her proposal. You do not. Make the position visible in the first sentence and keep one softener.",
            "Una respuesta por chat a una colega que preguntó si apoyas su propuesta. No la apoyas. Haz visible la postura en la primera frase y deja un solo suavizador.",
          ],
          before:
            "Thanks for sharing. It looks interesting. Maybe there could be some small things to review, but let's see. I'll take a look.",
          after:
            "Thanks for sending this. I don't think I can support it as written. The cost section assumes we keep both warehouses, and that decision isn't made yet. Happy to go through it with you tomorrow.",
          why: [
            "The original contains no position at all. The rewrite keeps the thanks, states the no with <em>I don't think</em>, names the one section that is the problem, and offers a next step.",
            "El original no tiene ninguna postura. La nueva versión conserva el agradecimiento, dice el no con <em>I don't think</em>, señala la sección que es el problema y ofrece un siguiente paso.",
          ],
        },
        {
          task: [
            "An email line to a colleague whose analysis you believe has an error. Move the sentence from the person to the work.",
            "Una línea de correo a un colega cuyo análisis crees que tiene un error. Pasa la frase de la persona al trabajo.",
          ],
          before:
            "You made a mistake in the analysis. You did not consider the exchange rate, so your conclusion is wrong.",
          after:
            "I think the analysis is missing the exchange rate. When I add it, the margin drops from 18 percent to 11, which changes the conclusion. Can you check whether I'm reading it right?",
          why: [
            "Three sentences with <em>you</em> plus a failure became three sentences about the analysis. The last line leaves room for the possibility that the error is yours.",
            "Tres frases con <em>you</em> más una falla se volvieron tres frases sobre el análisis. La última línea deja espacio para la posibilidad de que el error sea tuyo.",
          ],
        },
        {
          task: [
            "A reply to a peer asking for a deliverable by Friday. You can deliver on Wednesday of next week. Keep it firm and natural.",
            "Una respuesta a un colega que te pide un entregable para el viernes. Puedes entregarlo el miércoles de la próxima semana. Que quede firme y natural.",
          ],
          before:
            "I am sorry but that is not possible. We are very busy. It is impossible to finish on Friday.",
          after:
            "Friday won't work. We're in the middle of the quarter close. I can have it to you by Wednesday the 12th.",
          why: [
            "Contractions, one specific reason in place of <em>very busy</em>, and a date. The original says no three times and never says when.",
            "Contracciones, una razón concreta en lugar de <em>very busy</em> y una fecha. El original dice que no tres veces y nunca dice cuándo.",
          ],
        },
        {
          task: [
            "A message agreeing to try a colleague's approach that you doubt. Agree to the experiment and put your doubt on the record without sounding resentful.",
            "Un mensaje en el que aceptas probar el enfoque de un colega, aunque dudas de él. Acepta el experimento y deja registrada tu duda sin que suene a resentimiento.",
          ],
          before: "OK, if you want we do it your way. We will see what happens.",
          after:
            "Okay, let's run it your way for two weeks. I'll be straight: I expect response times to go up. If they stay under four hours, I'll happily admit I was wrong.",
          why: [
            "<em>If you want</em> and <em>we will see what happens</em> sound like a warning. The rewrite commits fully, states the doubt once, and names the result that would settle it.",
            "<em>If you want</em> y <em>we will see what happens</em> suenan a advertencia. La nueva versión se compromete por completo, dice la duda una sola vez y nombra el resultado que la resolvería.",
          ],
        },
      ],
    },
    {
      t: "speak",
      title: ["Say the no out loud", "Di el no en voz alta"],
      prompt: [
        "A peer says: <em>“Can your team take over the customer onboarding calls starting next month? You're closer to the product anyway.”</em> You cannot: your team is two people short until April. You could take the technical calls only. Answer out loud in three sentences: stand, reason, next.",
        "Un colega dice: <em>“Can your team take over the customer onboarding calls starting next month? You're closer to the product anyway.”</em> No puedes: a tu equipo le faltan dos personas hasta abril. Podrías tomar solo las llamadas técnicas. Responde en voz alta en tres frases: postura, razón, lo que sigue.",
      ],
      think: 20,
      speak: 30,
      frame: "I can't ___. ___ until ___. What I can do is ___.",
      checklist: [
        ["My position was in the first sentence.", "Mi postura estuvo en la primera frase."],
        [
          "I used contractions: <em>can't</em>, <em>we're</em>, <em>won't</em>.",
          "Usé contracciones: <em>can't</em>, <em>we're</em>, <em>won't</em>.",
        ],
        [
          "The reason was about my team's capacity, with no comment on the person or the request.",
          "La razón fue sobre la capacidad de mi equipo, sin comentar nada sobre la persona ni sobre la petición.",
        ],
        [
          "I used no more than one softener, and no <em>maybe</em>, <em>let me check</em>, or <em>we'll see</em>.",
          "Usé máximo un suavizador, y nada de <em>maybe</em>, <em>let me check</em> ni <em>we'll see</em>.",
        ],
        [
          "Someone listening could repeat exactly what I will and will not do.",
          "Alguien que me escuchara podría repetir exactamente qué voy a hacer y qué no.",
        ],
      ],
      model:
        "I can't take over all the onboarding calls next month. We're two people short until April, and my team is already at capacity. What I can do is take the technical calls, the ones about integrations, starting on the first.",
    },
    {
      t: "takeaways",
      items: [
        [
          "Make the plan, the number, or the timeline the subject of your sentence. Keep <em>you</em> out of the reason.",
          "Haz que el plan, la cifra o el calendario sea el sujeto de tu frase. Deja <em>you</em> fuera de la razón.",
        ],
        [
          "Stand, reason, next: your position first, one fact, then what you would do.",
          "Postura, razón, lo que sigue: primero tu postura, luego un dato y después lo que tú harías.",
        ],
        [
          "One softener per sentence. If the listener cannot repeat your position, the softener erased it.",
          "Un suavizador por frase. Si quien te escucha no puede repetir tu postura, el suavizador la borró.",
        ],
        [
          "<em>We'll see</em>, <em>let me check</em>, and <em>it's complicated</em> are heard as a yes on the way. If the answer is no, say no and say what you can do.",
          "<em>We'll see</em>, <em>let me check</em> e <em>it's complicated</em> se escuchan como un sí en camino. Si la respuesta es no, di que no y di qué sí puedes hacer.",
        ],
        [
          "Repeating the same no calmly, in the same words, is what makes it firm.",
          "Repetir el mismo no con calma, con las mismas palabras, es lo que lo vuelve firme.",
        ],
      ],
    },
  ],
};
