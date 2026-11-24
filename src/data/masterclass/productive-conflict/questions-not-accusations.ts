import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "questions-not-accusations",
  slugEs: "preguntas-no-acusaciones",
  title: ["Ask Questions, Not Accusations", "Haz Preguntas, No Acusaciones"],
  summary: [
    "How to turn “Why did you…?” into a question the other person can answer without defending themselves, and how to use curiosity to surface what a conflict is really about.",
    "Cómo convertir un “Why did you…?” en una pregunta que la otra persona pueda contestar sin defenderse, y cómo usar la curiosidad para sacar a la luz de qué se trata en realidad un conflicto.",
  ],
  description: [
    "Turn “Why did you…?” into a real question in English. Learn open questions that surface the concern and how to use “Help me understand” honestly.",
    "Convierte “Why did you…?” en una pregunta real en inglés. Aprende preguntas abiertas que revelan la preocupación y a usar “Help me understand” con honestidad.",
  ],
  minutes: 15,
  blocks: [
    {
      t: "p",
      html: [
        "You open the client deck on Wednesday morning and the pricing slide is different from the one you approved on Tuesday. You message Dana: <em>“Why did you change the pricing slide?”</em> You meant it as a question. Dana reads it as a charge, and her reply is a three-paragraph defense that never tells you what you needed to know, which is what the client has seen.",
        "Abres la presentación del cliente el miércoles en la mañana y la lámina de precios es distinta de la que aprobaste el martes. Le escribes a Dana: <em>“Why did you change the pricing slide?”</em> Para ti era una pregunta. Dana la lee como un cargo, y su respuesta es una defensa de tres párrafos que nunca te dice lo que necesitabas saber: qué vio el cliente.",
      ],
    },
    {
      t: "p",
      html: [
        "Most accusatory questions are accidents. Under pressure you already have a theory about what happened: she was careless, he went around you, they ignored the brief. The theory leaks into the question through one small word or the shape of the sentence, and the other person answers the theory. You get a defense, and the facts you were after stay hidden.",
        "La mayoría de las preguntas acusatorias son accidentes. Bajo presión ya traes una teoría de lo que pasó: ella fue descuidada, él te brincó, ignoraron el brief. La teoría se cuela en la pregunta por una palabra pequeña o por la forma de la frase, y la otra persona le contesta a la teoría. Recibes una defensa, y los hechos que buscabas se quedan escondidos.",
      ],
    },
    {
      t: "idea",
      title: ["A real question has an open answer", "Una pregunta real tiene respuesta abierta"],
      html: [
        "A question is real when you do not already know which answer you will accept. That is the whole test. Curiosity in a conflict is a practical tactic. It gets you the information the disagreement is carrying, and it changes what the other person is doing: someone answering a real question has to think, and a person who is thinking is no longer defending. You can be firmly unhappy with what happened and still ask about it with an open mind about why.",
        "Una pregunta es real cuando todavía no sabes cuál respuesta vas a aceptar. Esa es toda la prueba. En un conflicto, la curiosidad es una táctica práctica. Te da la información que trae el desacuerdo y cambia lo que la otra persona está haciendo: quien contesta una pregunta real tiene que pensar, y una persona que está pensando ya no se está defendiendo. Puedes estar muy inconforme con lo que pasó y aun así preguntar con la mente abierta sobre el porqué.",
      ],
    },
    {
      t: "framework",
      title: ["Convert a “Why did you”", "Convierte un “Why did you”"],
      lead: [
        "Four moves that turn the question in your head into one that gets an honest answer. Works spoken or in writing.",
        "Cuatro movimientos que convierten la pregunta que traes en la cabeza en una que recibe una respuesta honesta. Funciona hablado o por escrito.",
      ],
      steps: [
        {
          label: ["State what you saw", "Di lo que viste"],
          html: [
            "One neutral sentence of observation: what, where, when. No adjectives and no guess about motive. This shows the other person exactly what you are asking about.",
            "Una frase neutra de observación: qué, dónde, cuándo. Sin adjetivos y sin suponer motivos. Así la otra persona ve exactamente por qué estás preguntando.",
          ],
          say: "I saw the pricing slide changed after Tuesday's review.",
        },
        {
          label: ["Ask with what or how", "Pregunta con what o how"],
          html: [
            "Replace <em>Why did you</em> with <em>What led to</em>, <em>What happened with</em>, <em>How did we get to</em>, or <em>Walk me through</em>. <em>Why did you</em> asks a person to justify themselves. <em>What</em> and <em>how</em> ask for the story.",
            "Cambia <em>Why did you</em> por <em>What led to</em>, <em>What happened with</em>, <em>How did we get to</em> o <em>Walk me through</em>. <em>Why did you</em> le pide a una persona que se justifique. <em>What</em> y <em>how</em> piden la historia.",
          ],
          say: "What led to the change?",
        },
        {
          label: ["Say why you are asking", "Di por qué preguntas"],
          html: [
            "A question with no stated purpose leaves the listener to imagine the worst one. Give your real reason in one sentence. This is the step people skip, and the one that makes the question safe to answer.",
            "Una pregunta sin propósito explícito deja que quien la recibe imagine el peor. Da tu razón verdadera en una frase. Este es el paso que la gente se salta, y el que hace que sea seguro contestar la pregunta.",
          ],
          say: "I'm asking because I quoted the old number to the client yesterday.",
        },
        {
          label: ["Stop talking", "Deja de hablar"],
          html: [
            "Ask once and wait. Do not add a second question, soften it with a guess, or answer it yourself. The silence after a real question is where the useful answer forms.",
            "Pregunta una vez y espera. No agregues una segunda pregunta, no la suavices con una suposición ni la contestes tú. En el silencio que sigue a una pregunta real es donde se forma la respuesta útil.",
          ],
        },
      ],
    },
    {
      t: "compare",
      title: ["From accusation to question", "De acusación a pregunta"],
      labels: [
        ["Accusation", "Acusación"],
        ["Real question", "Pregunta real"],
      ],
      rows: [
        {
          weak: "Why did you go to Karen without telling me?",
          strong:
            "I heard you talked to Karen about the staffing plan. What made you want to start with her?",
          why: [
            "The weak version has already decided he went around you. The strong one states what you heard and asks for the reasoning, which may be something you had not considered.",
            "La versión débil ya decidió que te brincó. La fuerte dice lo que supiste y pide el razonamiento, que puede ser algo que no habías considerado.",
          ],
        },
        {
          weak: "Why didn't you tell me the date moved?",
          strong: "When did the date move? I'm trying to figure out how I missed it.",
          why: [
            "<em>Why didn't you</em> assigns the failure before the facts are in. Asking <em>when</em> gets the timeline, and the second sentence shares the responsibility.",
            "<em>Why didn't you</em> asigna la falla antes de tener los hechos. Preguntar <em>when</em> te da la cronología, y la segunda frase comparte la responsabilidad.",
          ],
        },
        {
          weak: "Did you even read the brief?",
          strong: "Which version of the brief were you working from?",
          why: [
            "<em>Even</em> turns a yes-or-no question into an insult. The strong version tests an innocent explanation that is very often the true one.",
            "<em>Even</em> convierte una pregunta de sí o no en un insulto. La versión fuerte pone a prueba una explicación inocente que muy seguido es la verdadera.",
          ],
        },
        {
          weak: "Why is this late again?",
          strong: "What got in the way on this one?",
          why: [
            "<em>Again</em> brings every past delay into the room. <em>On this one</em> keeps the question about a single event that can still be explained.",
            "<em>Again</em> mete a la sala todos los retrasos anteriores. <em>On this one</em> deja la pregunta en un solo hecho que todavía se puede explicar.",
          ],
        },
        {
          weak: "Don't you think that's a little risky?",
          strong: "I think that's risky. What happens if the vendor is late?",
          why: [
            "<em>Don't you think</em> is an opinion pretending to be a question. Say the opinion as an opinion, then ask something you actually want answered.",
            "<em>Don't you think</em> es una opinión que se hace pasar por pregunta. Di la opinión como opinión y luego pregunta algo que de verdad quieras saber.",
          ],
        },
        {
          weak: "Are you seriously saying we should start over?",
          strong: "When you say start over, what would that involve?",
          why: [
            "<em>Seriously</em> tells them the idea is absurd before they explain it. The strong version asks them to define their own words, and the idea often turns out smaller than it sounded.",
            "<em>Seriously</em> les dice que la idea es absurda antes de que la expliquen. La versión fuerte les pide definir sus propias palabras, y muchas veces la idea resulta más pequeña de lo que sonaba.",
          ],
        },
        {
          weak: "Why would you promise that to the client?",
          strong:
            "What did the client hear from us on timing? I want to know what we're committed to.",
          why: [
            "<em>Why would you</em> means: no reasonable person would. The strong version goes after the fact you need, the commitment, and uses <em>us</em> and <em>we</em>.",
            "<em>Why would you</em> quiere decir: nadie razonable lo haría. La versión fuerte va por el dato que necesitas, el compromiso, y usa <em>us</em> y <em>we</em>.",
          ],
        },
      ],
    },
    {
      t: "h",
      text: ["The accusation in disguise", "La acusación disfrazada"],
    },
    {
      t: "list",
      items: [
        [
          "<b>You already know the answer you will accept.</b> If only one reply would satisfy you, you are delivering a verdict with a question mark on it.",
          "<b>Ya sabes cuál respuesta vas a aceptar.</b> Si solo una contestación te dejaría conforme, estás entregando un veredicto con signo de interrogación.",
        ],
        [
          "<b>It contains a small loaded word:</b> <em>even</em>, <em>again</em>, <em>seriously</em>, <em>really</em>, <em>just</em>, <em>actually</em>. Remove the word and see whether the question still works.",
          "<b>Trae una palabrita cargada:</b> <em>even</em>, <em>again</em>, <em>seriously</em>, <em>really</em>, <em>just</em>, <em>actually</em>. Quita la palabra y ve si la pregunta sigue funcionando.",
        ],
        [
          "<b>It opens with a negative or a hypothetical:</b> <em>Don't you think</em>, <em>Didn't you</em>, <em>Why would you</em>, <em>Why wouldn't you</em>, <em>How could you</em>.",
          "<b>Empieza con una negación o un hipotético:</b> <em>Don't you think</em>, <em>Didn't you</em>, <em>Why would you</em>, <em>Why wouldn't you</em>, <em>How could you</em>.",
        ],
        [
          "<b>Your voice falls at the end.</b> In English, a <em>why</em> question said fast with a hard falling tone sounds like a statement of blame.",
          "<b>Tu voz cae al final.</b> En inglés, una pregunta con <em>why</em> dicha rápido y con un tono que baja en seco suena a que estás echando la culpa.",
        ],
        [
          "<b>You would not ask it that way with their boss in the room.</b> A quick and honest check on your own intent.",
          "<b>No la harías así con su jefe en la sala.</b> Una revisión rápida y honesta de tu propia intención.",
        ],
      ],
    },
    {
      t: "phrases",
      title: [
        "Open questions that surface the concern",
        "Preguntas abiertas que sacan a la luz la preocupación",
      ],
      items: [
        {
          en: "Walk me through how you got to that number.",
          use: [
            "When you doubt a figure. It asks for the method, and the error or the insight will show up along the way.",
            "Cuando dudas de una cifra. Pide el método, y el error o el hallazgo va a aparecer en el camino.",
          ],
        },
        {
          en: "What happened on your end?",
          use: [
            "The most neutral opener after something went wrong. It assumes there is a story you do not have.",
            "La entrada más neutra después de que algo salió mal. Da por hecho que hay una historia que no conoces.",
          ],
        },
        {
          en: "What were you trying to solve?",
          use: [
            "When someone made a change you dislike. It assumes they had a purpose, and usually they did.",
            "Cuando alguien hizo un cambio que no te gusta. Da por hecho que tenía un propósito, y casi siempre lo tenía.",
          ],
        },
        {
          en: "What's your biggest concern with this?",
          use: [
            "When someone resists your proposal without saying why. It asks for one concern, the main one.",
            "Cuando alguien se resiste a tu propuesta sin decir por qué. Pide una sola preocupación, la principal.",
          ],
        },
        {
          en: "What's the part that worries you most?",
          use: [
            "A warmer version of the same question, for a one-on-one.",
            "Una versión más cálida de la misma pregunta, para una conversación a solas.",
          ],
        },
        {
          en: "What does this look like from your side?",
          use: [
            "When you suspect you are seeing half the picture. Useful across teams and across offices.",
            "Cuando sospechas que estás viendo la mitad del panorama. Útil entre equipos y entre oficinas.",
          ],
        },
        {
          en: "What changed between Tuesday and today?",
          use: [
            "When a decision or position shifted. It asks about events and leaves the person out of it.",
            "Cuando cambió una decisión o una postura. Pregunta por los hechos y deja fuera a la persona.",
          ],
        },
        {
          en: "Can you say more about that?",
          use: [
            "When a comment was short and loaded, like <em>This won't work</em>. It buys you information before you respond.",
            "Cuando un comentario fue corto y cargado, como <em>This won't work</em>. Te consigue información antes de responder.",
          ],
        },
        {
          en: "What am I not seeing?",
          use: [
            "When their position makes no sense to you. It puts the gap on your side, which makes it easy for them to fill.",
            "Cuando su postura no te hace sentido. Pone el hueco de tu lado, y eso les facilita llenarlo.",
          ],
        },
        {
          en: "How did this look when the decision was made?",
          use: [
            "When you are judging a past decision with information nobody had at the time.",
            "Cuando estás juzgando una decisión pasada con información que nadie tenía en ese momento.",
          ],
        },
      ],
    },
    {
      t: "idea",
      title: ["“Help me understand,” used honestly", "“Help me understand”, usado con honestidad"],
      html: [
        "<em>Help me understand</em> is one of the most useful phrases in American business English, and one of the most abused. Used honestly, it is followed by a neutral description and then silence: <span class='ok'>✓</span> <em>Help me understand how the discount got into the contract.</em> Used dishonestly, it is followed by your verdict: <span class='x'>✗</span> <em>Help me understand why you thought that was acceptable.</em> The second one is an accusation with a polite preface, and Americans recognize it instantly. Before you say the phrase, check that there is something you really do not understand, and that you are ready to hear an answer that changes your view.",
        "<em>Help me understand</em> es una de las frases más útiles del inglés de negocios en Estados Unidos, y una de las más maltratadas. Usada con honestidad, va seguida de una descripción neutra y luego de silencio: <span class='ok'>✓</span> <em>Help me understand how the discount got into the contract.</em> Usada sin honestidad, va seguida de tu veredicto: <span class='x'>✗</span> <em>Help me understand why you thought that was acceptable.</em> La segunda es una acusación con un prefacio cortés, y allá la reconocen al instante. Antes de decir la frase, revisa que de verdad haya algo que no entiendes y que tengas disposición para oír una respuesta que te cambie la opinión.",
      ],
    },
    {
      t: "model",
      title: ["The same problem, asked well", "El mismo problema, bien preguntado"],
      context: [
        "You manage the account from Mexico City. Dana, your counterpart in Denver, changed the pricing slide after you both approved it. You call her instead of sending the first message you drafted.",
        "Tú llevas la cuenta desde la Ciudad de México. Dana, tu contraparte en Denver, cambió la lámina de precios después de que los dos la aprobaron. Le llamas en lugar de mandarle el primer mensaje que redactaste.",
      ],
      lines: [
        {
          who: "You",
          en: "Hey, Dana. I opened the deck this morning and saw the pricing slide changed after Tuesday's review.",
          note: [
            "State what you saw. What, where, when. No <em>you</em> and no adjective.",
            "Di lo que viste. Qué, dónde, cuándo. Sin <em>you</em> y sin adjetivos.",
          ],
        },
        {
          who: "You",
          en: "What led to the change? I'm asking because I quoted the old number to their CFO yesterday.",
          note: [
            "<em>What</em> in place of <em>Why did you</em>, and your reason for asking. Then you stop talking.",
            "<em>What</em> en lugar de <em>Why did you</em>, y tu razón para preguntar. Luego dejas de hablar.",
          ],
        },
        {
          who: "Dana",
          en: "Oh, no. Legal flagged the volume discount Tuesday night. We can't offer it without a two-year term, so I pulled it. I should have told you.",
          note: [
            "Because she was not attacked, you get the full story in one answer, and she volunteers her part in it.",
            "Como no la atacaste, recibes la historia completa en una sola respuesta, y ella misma reconoce su parte.",
          ],
        },
        {
          who: "You",
          en: "Okay, that makes sense. What has the client seen so far, the old deck or the new one?",
          note: [
            "A second real question, aimed at the fact you most need. You did not stop to collect the apology.",
            "Una segunda pregunta real, dirigida al dato que más necesitas. No te detuviste a cobrar la disculpa.",
          ],
        },
        {
          who: "Dana",
          en: "Only the old one. I was going to send the new version at noon.",
        },
        {
          who: "You",
          en: "Then we have a gap. Their CFO has my number from yesterday. How do you think we should handle that with them?",
          note: [
            "You name the problem as shared and ask for her thinking. She is now solving it with you.",
            "Nombras el problema como compartido y le pides su opinión. Ahora lo está resolviendo contigo.",
          ],
        },
        {
          who: "Dana",
          en: "Let's call them together before noon. I'll explain the legal piece, and you walk them through the two-year option.",
          note: [
            "Four minutes, no defense, a plan. The message you almost sent would have cost the morning.",
            "Cuatro minutos, cero defensas y un plan. El mensaje que estuviste a punto de mandar te habría costado la mañana.",
          ],
        },
        {
          who: "You",
          en: "Good. And next time something changes after review, can you message me the same night?",
          note: [
            "The request comes last, as a request. It lands easily because nothing before it felt like blame.",
            "La petición va al final, como petición. Entra fácil porque nada de lo anterior se sintió como culpa.",
          ],
        },
      ],
    },
    {
      t: "trap",
      title: ["“¿Por qué…?” does not travel well", "“¿Por qué…?” no viaja bien"],
      html: [
        "In Spanish, “¿por qué cambiaste la lámina?” or “¿por qué no me avisaste?” can be completely neutral; intonation does the softening. Translated directly, <span class='x'>✗</span> <em>Why did you change the slide?</em> and <span class='x'>✗</span> <em>Why didn't you tell me?</em> arrive in English as demands for justification, especially in writing, where there is no intonation at all. Use <span class='ok'>✓</span> <em>What led to the change?</em> and <span class='ok'>✓</span> <em>When did that change? I want to see how I missed it.</em> Two related habits. “Explícame” becomes <span class='x'>✗</span> <em>Explain me why</em>, which is ungrammatical, and the corrected <em>Explain to me why</em> still sounds like an order from a boss. <span class='ok'>✓</span> <em>Walk me through it</em> does the same job between peers. And in Spanish a statement with rising intonation works as a question; in English, <span class='x'>✗</span> <em>You changed the slide?</em> sounds like disbelief. Build the question with <em>what</em> or <em>how</em>.",
        "En español, “¿por qué cambiaste la lámina?” o “¿por qué no me avisaste?” pueden ser completamente neutras; la entonación se encarga de suavizarlas. Traducidas directo, <span class='x'>✗</span> <em>Why did you change the slide?</em> y <span class='x'>✗</span> <em>Why didn't you tell me?</em> llegan al inglés como exigencias de justificación, sobre todo por escrito, donde no hay entonación. Usa <span class='ok'>✓</span> <em>What led to the change?</em> y <span class='ok'>✓</span> <em>When did that change? I want to see how I missed it.</em> Dos hábitos relacionados. “Explícame” se vuelve <span class='x'>✗</span> <em>Explain me why</em>, que es agramatical, y la forma corregida, <em>Explain to me why</em>, sigue sonando a orden de jefe. <span class='ok'>✓</span> <em>Walk me through it</em> hace lo mismo entre colegas. Y en español una afirmación con entonación ascendente funciona como pregunta; en inglés, <span class='x'>✗</span> <em>You changed the slide?</em> suena a incredulidad. Arma la pregunta con <em>what</em> o <em>how</em>.",
      ],
    },
    {
      t: "choice",
      title: ["Question or verdict", "Pregunta o veredicto"],
      items: [
        {
          prompt: [
            "Marcus's team shipped a feature without the security review your team runs. You find out from the release notes.",
            "El equipo de Marcus liberó una funcionalidad sin la revisión de seguridad que hace tu equipo. Te enteras por las notas de la liberación.",
          ],
          options: [
            {
              en: "Why would you ship without a security review?",
              ok: false,
              why: [
                "<em>Why would you</em> says no competent person would. He will defend his competence, and you will not learn how it happened.",
                "<em>Why would you</em> dice que nadie competente lo haría. Va a defender su competencia y no vas a saber cómo pasó.",
              ],
            },
            {
              en: "I saw the export feature went out Tuesday, and I don't have a security review on file for it. What happened with the review step?",
              ok: true,
              why: [
                "An observation, then a <em>what</em> question about the process. If there is a gap in the process, this finds it.",
                "Una observación y luego una pregunta con <em>what</em> sobre el proceso. Si hay un hueco en el proceso, así lo encuentras.",
              ],
            },
            {
              en: "Help me understand how you thought skipping security was okay.",
              ok: false,
              why: [
                "The polite preface does not hide the verdict in <em>skipping</em> and <em>thought was okay</em>. He will hear the accusation.",
                "El prefacio cortés no esconde el veredicto que traen <em>skipping</em> y <em>thought was okay</em>. Él va a escuchar la acusación.",
              ],
            },
          ],
        },
        {
          prompt: [
            "In a design review, Priya says flatly, “This approach won't scale.” She gives no detail. You designed it.",
            "En una revisión de diseño, Priya dice en seco: “This approach won't scale.” No da detalles. El diseño es tuyo.",
          ],
          options: [
            {
              en: "Can you say more about that? What's the part that worries you most?",
              ok: true,
              why: [
                "You do not know yet what she means. One specific concern is something you can answer; a general verdict is not.",
                "Todavía no sabes a qué se refiere. Una preocupación específica se puede responder; un veredicto general, no.",
              ],
            },
            {
              en: "It scales fine. We tested it at ten times the current load.",
              ok: false,
              why: [
                "A solid fact aimed at a concern you have not identified. She may be worried about cost or staffing, and the load test will not answer that.",
                "Un dato sólido apuntado a una preocupación que no identificaste. Tal vez le preocupa el costo o el personal, y la prueba de carga no responde eso.",
              ],
            },
            {
              en: "Don't you think you should look at the test results before saying that?",
              ok: false,
              why: [
                "An instruction dressed as a question. <em>Don't you think you should</em> is how people scold in English.",
                "Una instrucción vestida de pregunta. <em>Don't you think you should</em> es como se regaña en inglés.",
              ],
            },
          ],
        },
        {
          prompt: [
            "A report from Luis's team is late for the second month in a row. You need to raise it with him by chat.",
            "Un reporte del equipo de Luis llega tarde por segundo mes consecutivo. Necesitas tocar el tema con él por chat.",
          ],
          options: [
            {
              en: "Why is the report late again?",
              ok: false,
              why: [
                "<em>Again</em> and no purpose stated. In writing, with no tone of voice, this reads as cold anger.",
                "<em>Again</em> y sin propósito explícito. Por escrito, sin tono de voz, esto se lee como enojo frío.",
              ],
            },
            {
              en: "Hi Luis. Just wondering if maybe there was some issue with the report?",
              ok: false,
              why: [
                "So soft that it is not clear you need anything. He can answer <em>no issue</em> and nothing changes.",
                "Tan suave que no queda claro que necesitas algo. Puede contestar <em>no issue</em> y nada cambia.",
              ],
            },
            {
              en: "Hi Luis. The March report came in on the 8th, and February's was the 7th. What's getting in the way? I ask because finance closes on the 5th.",
              ok: true,
              why: [
                "Two dates, a <em>what</em> question, and the reason it matters. Clear that there is a problem, open about the cause.",
                "Dos fechas, una pregunta con <em>what</em> y la razón por la que importa. Queda claro que hay un problema y queda abierta la causa.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Elena approved a vendor contract six months ago that now looks expensive. In a meeting about renewing it, you want to understand her original reasoning.",
            "Hace seis meses, Elena aprobó un contrato con un proveedor que hoy se ve caro. En una junta sobre la renovación, quieres entender su razonamiento original.",
          ],
          options: [
            {
              en: "Who approved this contract, and did anyone compare prices?",
              ok: false,
              why: [
                "You know who approved it. Asking in front of the group puts her on trial, and <em>did anyone</em> implies nobody did.",
                "Ya sabes quién lo aprobó. Preguntarlo frente al grupo la pone a juicio, y <em>did anyone</em> insinúa que nadie lo hizo.",
              ],
            },
            {
              en: "Elena, how did this look when the decision was made? I'd like to know what's changed since then.",
              ok: true,
              why: [
                "It assumes the decision was reasonable with the information of the time, and asks for the difference. She can answer with her head up.",
                "Da por hecho que la decisión fue razonable con la información de entonces y pregunta qué cambió. Ella puede contestar con la frente en alto.",
              ],
            },
            {
              en: "Elena, I'm sure you had your reasons, but this price is really hard to justify.",
              ok: false,
              why: [
                "<em>I'm sure you had your reasons</em> sounds sarcastic in English, and the sentence ends in a verdict. No question was asked.",
                "<em>I'm sure you had your reasons</em> suena sarcástico en inglés, y la frase termina en un veredicto. No se hizo ninguna pregunta.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You asked Dana, “What led to the change?” She has been silent for four seconds, thinking.",
            "Le preguntaste a Dana: “What led to the change?” Lleva cuatro segundos en silencio, pensando.",
          ],
          options: [
            {
              en: "I mean, was it the client, or did someone on your team just decide?",
              ok: false,
              why: [
                "You filled the silence with two guesses, and the second, with <em>just decide</em>, is an accusation. Your open question is now a multiple-choice test.",
                "Llenaste el silencio con dos suposiciones, y la segunda, con <em>just decide</em>, es una acusación. Tu pregunta abierta ya es un examen de opción múltiple.",
              ],
            },
            {
              en: "Sorry, I didn't mean that to sound like I'm blaming you. Forget it.",
              ok: false,
              why: [
                "The question was fine. Withdrawing it tells her there was blame in it, and you lose the answer.",
                "La pregunta estaba bien. Retirarla le dice que sí traía culpa, y te quedas sin la respuesta.",
              ],
            },
            {
              en: "(Say nothing. Wait.)",
              ok: true,
              why: [
                "Four seconds of silence after a real question means she is thinking. Let her finish.",
                "Cuatro segundos de silencio después de una pregunta real quieren decir que está pensando. Déjala terminar.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "speak",
      title: ["Convert three, out loud", "Convierte tres, en voz alta"],
      prompt: [
        "Convert each of these into a real question, out loud, using the four moves: say what you saw, ask with <em>what</em> or <em>how</em>, say why you are asking, and stop. (1) <em>Why did you invite the client without asking me?</em> (2) <em>Why is the budget over again?</em> (3) <em>Did you even test this?</em> Invent the details. Let your voice stay level or rise slightly at the end of each question.",
        "Convierte cada una en una pregunta real, en voz alta, con los cuatro movimientos: di lo que viste, pregunta con <em>what</em> o <em>how</em>, di por qué preguntas y detente. (1) <em>Why did you invite the client without asking me?</em> (2) <em>Why is the budget over again?</em> (3) <em>Did you even test this?</em> Inventa los detalles. Mantén la voz pareja o deja que suba un poco al final de cada pregunta.",
      ],
      think: 30,
      speak: 60,
      frame: "I saw ___. What led to ___? I'm asking because ___.",
      checklist: [
        [
          "Each one started with a neutral observation, with no adjective and no motive.",
          "Cada una empezó con una observación neutra, sin adjetivos y sin motivos.",
        ],
        [
          "None of them started with <em>Why did you</em>, <em>Why didn't you</em>, or <em>Don't you think</em>.",
          "Ninguna empezó con <em>Why did you</em>, <em>Why didn't you</em> ni <em>Don't you think</em>.",
        ],
        [
          "I left out <em>even</em>, <em>again</em>, <em>seriously</em>, and <em>just</em>.",
          "Dejé fuera <em>even</em>, <em>again</em>, <em>seriously</em> y <em>just</em>.",
        ],
        [
          "I gave my reason for asking in one sentence.",
          "Di mi razón para preguntar en una sola frase.",
        ],
        [
          "After each question, I stopped. I did not add a second question or a guess.",
          "Después de cada pregunta me detuve. No agregué una segunda pregunta ni una suposición.",
        ],
      ],
      model:
        "One. I saw the client is on the invite for Thursday's planning session. What led to including them? I'm asking because I was going to share draft numbers in that meeting. Two. The Q2 budget came in six percent over, and Q1 was four percent over. What's driving it? I'm asking because I have to present the forecast on Monday. Three. I'm seeing errors on the checkout page in staging. What did the test run cover? I'm asking because I want to know if we can still release on Friday.",
    },
    {
      t: "takeaways",
      items: [
        [
          "A question is real when you do not already know which answer you will accept.",
          "Una pregunta es real cuando todavía no sabes cuál respuesta vas a aceptar.",
        ],
        [
          "Say what you saw, ask with <em>what</em> or <em>how</em>, say why you are asking, and stop talking.",
          "Di lo que viste, pregunta con <em>what</em> o <em>how</em>, di por qué preguntas y deja de hablar.",
        ],
        [
          "<em>Why did you</em> asks for a justification. <em>What led to</em> and <em>Walk me through</em> ask for the story.",
          "<em>Why did you</em> pide una justificación. <em>What led to</em> y <em>Walk me through</em> piden la historia.",
        ],
        [
          "Watch the small words: <em>even</em>, <em>again</em>, <em>seriously</em>, <em>just</em>, and any question that opens with <em>Don't you think</em>.",
          "Cuida las palabritas: <em>even</em>, <em>again</em>, <em>seriously</em>, <em>just</em> y cualquier pregunta que empiece con <em>Don't you think</em>.",
        ],
        [
          "<em>Help me understand</em> is honest only when there is something you do not understand and you are ready for the answer.",
          "<em>Help me understand</em> es honesta solo cuando de verdad hay algo que no entiendes y puedes aceptar la respuesta.",
        ],
      ],
    },
  ],
};
