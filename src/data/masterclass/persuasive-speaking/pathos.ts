import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "pathos",
  slugEs: "pathos-emocion",
  title: ["Pathos: Move People Without Manipulating Them", "Pathos: Conmueve sin Manipular"],
  summary: [
    "Make a sound argument matter by showing one real person, one concrete moment and what is at stake, and then stopping.",
    "Haz que un buen argumento importe: muestra a una persona real, un momento concreto y lo que está en juego, y detente ahí.",
  ],
  description: [
    "Use honest emotion in business English: the one-person story, concrete language, clear stakes, contrast and the rule of three, with restraint.",
    "Usa la emoción con honestidad en inglés de negocios: la historia de una persona, lenguaje concreto, lo que está en juego y la regla de tres.",
  ],
  minutes: 18,
  blocks: [
    {
      t: "p",
      html: [
        "Your argument is sound. People nod. The meeting ends, and nothing happens. Your proposal joins the list of reasonable things to look at next quarter.",
        "Tu argumento es sólido. La gente asiente. Termina la junta y no pasa nada. Tu propuesta se suma a la lista de cosas razonables que se verán el próximo trimestre.",
      ],
    },
    {
      t: "p",
      html: [
        "Logic tells people a thing is true. Feeling tells them it matters now, more than the nine other true things competing for the same budget. At work, the feeling that moves a decision is rarely dramatic. It is a decision-maker picturing one real person in one real situation and thinking, <em>we shouldn't let that keep happening.</em> You already have the tool: before, after, feeling. This lesson points it at a decision.",
        "La lógica le dice a la gente que algo es cierto. La emoción le dice que importa ahora, más que las otras nueve cosas ciertas que compiten por el mismo presupuesto. En el trabajo, la emoción que mueve una decisión casi nunca es dramática. Es alguien con poder de decidir que se imagina a una persona real en una situación real y piensa: <em>we shouldn't let that keep happening.</em> Ya tienes la herramienta: before, after, feeling. En esta lección la vas a apuntar hacia una decisión.",
      ],
    },
    {
      t: "idea",
      title: [
        "People act on what they can picture",
        "La gente actúa sobre lo que puede imaginarse",
      ],
      html: [
        "Nobody can picture <em>operational inefficiencies</em>. Everybody can picture Carla from accounts payable, still at her desk at nine at night, typing invoice numbers from one screen into another. Find the one person and the one moment that stand for your whole argument, describe them in plain words, and stop. The restraint is what makes it credible.",
        "Nadie se puede imaginar unas <em>operational inefficiencies</em>. Cualquiera se puede imaginar a Carla, de cuentas por pagar, todavía en su escritorio a las nueve de la noche, pasando números de factura de una pantalla a otra. Encuentra a la persona y el momento que representan todo tu argumento, descríbelos con palabras sencillas y detente. La mesura es lo que lo hace creíble.",
      ],
    },
    {
      t: "framework",
      title: [
        "The one-person story, in four sentences",
        "La historia de una persona, en cuatro oraciones",
      ],
      lead: [
        "Use it right after your evidence, to put a face on the number.",
        "Úsala justo después de tu evidencia, para ponerle cara al número.",
      ],
      steps: [
        {
          label: ["One person", "Una persona"],
          html: [
            "A name and a role. One person, never <em>our users</em> or <em>the team</em>. Use a real one; if you change the name, say that you did.",
            "Un nombre y un puesto. Una persona, nunca <em>our users</em> ni <em>the team</em>. Que sea real; si le cambias el nombre, dilo.",
          ],
          say: "Let me tell you about Carla, who runs accounts payable.",
        },
        {
          label: ["One moment", "Un momento"],
          html: [
            "A specific time and place, and what the person was doing. Simple past. This is the <em>before</em> of your narrate frame.",
            "Una hora y un lugar específicos, y lo que la persona estaba haciendo. Pasado simple. Es el <em>before</em> de tu esquema para narrar.",
          ],
          say: "On October 31st, at nine p.m., she was still at her desk, retyping invoices from the purchasing system into the accounting system.",
        },
        {
          label: ["The feeling, with its cause", "La emoción, con su causa"],
          html: [
            "Say what the person felt and why. Better still, quote what they said. One line, and no stack of adjectives.",
            "Di qué sintió la persona y por qué. Mejor aún, cita lo que dijo. Una línea, sin amontonar adjetivos.",
          ],
          say: "She told me, \"I don't mind the hours. I mind knowing that one typo means a supplier doesn't get paid.\"",
        },
        {
          label: ["The link", "El enlace"],
          html: [
            "Tie the moment back to your claim. This sentence is the difference between a story that serves an argument and a story that fills time.",
            "Conecta el momento con tu afirmación. Esta oración es la diferencia entre una historia que sirve a un argumento y una historia que solo ocupa tiempo.",
          ],
          say: "That's what the integration fixes: 140 chances for an error, every month, gone.",
        },
      ],
    },
    {
      t: "compare",
      title: [
        "Abstract vs. something you can picture",
        "Abstracto vs. algo que te puedes imaginar",
      ],
      labels: [
        ["Abstract", "Abstracto"],
        ["Concrete", "Concreto"],
      ],
      rows: [
        {
          weak: "This issue has a significant impact on customer satisfaction.",
          strong: "A customer who calls us at 6 p.m. waits until the next morning for an answer.",
          why: [
            "<em>Significant impact</em> could mean anything, so it produces no feeling. A person waiting overnight is something everyone in the room has lived.",
            "<em>Significant impact</em> puede significar cualquier cosa, así que no produce ninguna emoción. Una persona esperando toda la noche es algo que toda la sala vivió alguna vez.",
          ],
        },
        {
          weak: "We are facing some challenges with staff retention.",
          strong: "Three of our five senior nurses have left since January.",
          why: [
            "<em>Challenges</em> softens the problem until it disappears. The count makes it visible, and nobody needs to be told it is serious.",
            "<em>Challenges</em> suaviza el problema hasta desaparecerlo. El conteo lo hace visible, y nadie necesita que le digan que es grave.",
          ],
        },
        {
          weak: "If we don't act, there could be negative consequences.",
          strong:
            "If we do nothing, we fail the audit in June, and we can't ship to our two largest customers until we pass it.",
          why: [
            "Stakes need a what, a when and a who. <em>Negative consequences</em> is a warning label nobody reads.",
            "Lo que está en juego necesita un qué, un cuándo y un quién. <em>Negative consequences</em> es una etiqueta de advertencia que nadie lee.",
          ],
        },
        {
          weak: "The team has been making an enormous, incredible effort.",
          strong: "The team has worked the last three Saturdays to hit this date.",
          why: [
            "Adjectives ask the listener to take your word for it. The fact lets them reach the feeling on their own, which is the only way it sticks.",
            "Los adjetivos le piden a quien escucha que te crea. El hecho le permite llegar a la emoción por su cuenta, que es la única forma en que se queda.",
          ],
        },
        {
          weak: "This is extremely, extremely urgent.",
          strong: "We have until Friday. After that, the price goes up 20 percent.",
          why: [
            "Repeating <em>extremely</em> raises the volume without adding information. A deadline and a cost create urgency without your having to announce it.",
            "Repetir <em>extremely</em> sube el volumen sin agregar información. Una fecha límite y un costo crean la urgencia sin que tengas que anunciarla.",
          ],
        },
        {
          weak: "Our employees are our most important asset.",
          strong:
            "Marcus trained every person on this line. If he leaves, that knowledge walks out with him.",
          why: [
            "The first sentence is on every company's wall, so it carries no weight. One named person makes the same point and makes it believable.",
            "La primera oración está en la pared de todas las empresas, así que ya no pesa. Una persona con nombre dice lo mismo y lo vuelve creíble.",
          ],
        },
        {
          weak: "The old process is slow, inefficient and outdated.",
          strong: "The old process takes nine days, four signatures and a fax machine.",
          why: [
            "Both are lists of three. The second is made of things you can see, and it saves the most telling one for last.",
            "Las dos son listas de tres. La segunda está hecha de cosas que se pueden ver, y guarda la más reveladora para el final.",
          ],
        },
      ],
    },
    {
      t: "h",
      text: ["Stakes, contrast and three", "Lo que está en juego, el contraste y el tres"],
    },
    {
      t: "p",
      html: [
        "Three more tools, all quiet. <b>Stakes:</b> every proposal competes with doing nothing, and doing nothing always looks free. Say what it costs, to whom, and by when. <b>Contrast:</b> put two things side by side and let the gap do the work: today against after the change, the cost of acting against the cost of waiting. <b>Three:</b> a list of three sounds complete in English. Two sounds unfinished and four sounds like a list. Put the strongest item last.",
        "Tres herramientas más, todas discretas. <b>Lo que está en juego:</b> toda propuesta compite contra no hacer nada, y no hacer nada siempre parece gratis. Di cuánto cuesta, a quién y para cuándo. <b>Contraste:</b> pon dos cosas lado a lado y deja que la diferencia haga el trabajo: hoy contra después del cambio, el costo de actuar contra el costo de esperar. <b>Tres:</b> en inglés, una lista de tres suena completa. Dos suenan a que faltó algo y cuatro ya suenan a lista. Deja lo más fuerte para el final.",
      ],
    },
    {
      t: "phrases",
      title: [
        "Language for stakes, contrast and story",
        "Frases para lo que está en juego, el contraste y la historia",
      ],
      items: [
        {
          en: "Let me tell you about one customer.",
          use: [
            "Opens the one-person story. <em>One</em> promises it will be short.",
            "Abre la historia de una persona. <em>One</em> promete que será breve.",
          ],
        },
        {
          en: "Here's what that looks like on a Tuesday morning.",
          use: [
            "Turns the number you just gave into a scene.",
            "Convierte en escena el número que acabas de dar.",
          ],
        },
        {
          en: "She said something I haven't been able to forget.",
          use: [
            "Sets up a quote and tells the room it affected you, without naming the emotion.",
            "Prepara una cita y le dice a la sala que te marcó, sin nombrar la emoción.",
          ],
        },
        {
          en: "If we do nothing, ___.",
          use: [
            "States the stakes. Follow it with a fact and a date, never with <em>it will be bad</em>.",
            "Plantea lo que está en juego. Síguela con un hecho y una fecha, nunca con <em>it will be bad</em>.",
          ],
        },
        {
          en: "Every month we wait, ___.",
          use: [
            "Puts a price on delay when the room wants to revisit it next quarter.",
            "Le pone precio a la demora cuando la sala quiere retomarlo el próximo trimestre.",
          ],
        },
        {
          en: "Here's what's at stake.",
          use: [
            "A signpost before the consequence. Pause after it.",
            "Una señal antes de la consecuencia. Haz una pausa después de decirla.",
          ],
        },
        {
          en: "Today, ___. With this change, ___.",
          use: [
            "The simplest contrast. Keep the two halves the same length and shape.",
            "El contraste más sencillo. Mantén las dos mitades del mismo largo y con la misma forma.",
          ],
        },
        {
          en: "It's faster, it costs less, and our own people asked for it.",
          use: [
            "A rule of three with the human reason last.",
            "Una regla de tres con la razón humana al final.",
          ],
        },
        {
          en: "This one matters to me, and here's why.",
          use: [
            "Your own feeling, stated once and backed immediately with a reason.",
            "Tu propia emoción, dicha una sola vez y respaldada de inmediato con una razón.",
          ],
        },
        {
          en: "I don't want to overstate this.",
          use: [
            "Signals restraint before a sober fact. The room leans in because you are not selling.",
            "Marca mesura antes de un hecho sobrio. La sala pone atención porque no estás vendiendo.",
          ],
        },
      ],
    },
    {
      t: "model",
      title: ["Forty-five seconds for Carla", "Cuarenta y cinco segundos para Carla"],
      context: [
        "Marcus, a finance manager, is asking the leadership team to fund an integration between two systems. He has already given the numbers. This is the part of his talk that makes them matter.",
        "Marcus, gerente de finanzas, le pide al equipo directivo que apruebe la integración de dos sistemas. Ya dio los números. Esta es la parte de su intervención que hace que importen.",
      ],
      lines: [
        {
          en: "You've seen the numbers: 140 invoices a month, entered twice, about 30 hours of work.",
          note: [
            "A bridge from logos. One line recalls the evidence so the story has something to stand on.",
            "Un puente desde logos. Una línea recuerda la evidencia para que la historia tenga en qué apoyarse.",
          ],
        },
        {
          en: "Let me tell you what that looks like.",
          note: [
            "Signals the move from data to scene.",
            "Avisa que pasa de los datos a la escena.",
          ],
        },
        {
          en: "On October 31st, I was leaving at nine p.m., and Carla, who runs accounts payable, was still at her desk.",
          note: [
            "One person, one moment, an exact date and hour.",
            "Una persona, un momento, fecha y hora exactas.",
          ],
        },
        {
          en: "She had the purchasing system on one screen and the accounting system on the other, and she was retyping invoice numbers, one at a time.",
          note: [
            "Detail the room can see. Not one adjective.",
            "Detalle que la sala puede ver. Ni un solo adjetivo.",
          ],
        },
        {
          en: "I asked her how it was going. She said, \"I don't mind the hours. I mind knowing that one typo means a supplier doesn't get paid.\"",
          note: [
            "The feeling, in her words, with its cause. The quote does what <em>she was stressed</em> never could.",
            "La emoción, en sus palabras, con su causa. La cita logra lo que <em>she was stressed</em> jamás lograría.",
          ],
        },
        {
          en: "In September, that happened. We paid a supplier 30 days late because of one wrong digit, and they put our orders on hold for a week.",
          note: [
            "Stakes, and they are a fact from the past, not a prediction.",
            "Lo que está en juego, y es un hecho que ya ocurrió, no una predicción.",
          ],
        },
        {
          en: "If we do nothing, we're asking Carla to be perfect 140 times a month.",
          note: [
            "Stakes again, through the person. This is the line the room will repeat later.",
            "Otra vez lo que está en juego, a través de la persona. Esta es la frase que la sala va a repetir después.",
          ],
        },
        {
          en: "The integration costs 22,000 dollars, takes six weeks, and ends that.",
          note: [
            "Three short items, then he stops. No plea, no <em>I really hope</em>. The restraint is the persuasion.",
            "Tres elementos cortos, y se detiene. Sin súplica, sin <em>I really hope</em>. La mesura es lo que persuade.",
          ],
        },
      ],
    },
    {
      t: "idea",
      title: [
        "The line: would it survive full disclosure",
        "El límite: si lo explicaras todo, ¿seguiría funcionando?",
      ],
      html: [
        "Emotion becomes manipulation when it only works because the audience is missing something. Four checks before you use a story or a stake. <b>True:</b> the person, the moment and the quote are real. <b>Typical:</b> the one case stands for the pattern your evidence shows, and was not picked because it is the most dramatic exception. <b>Proportionate:</b> the feeling you ask for matches the size of the problem; a late report is not a crisis. <b>Free:</b> you show the stakes and let them decide. Invented deadlines, guilt and the fear of looking bad in front of the room are pressure. If all four hold, you could explain to the audience exactly what you are doing and it would still work.",
        "La emoción se vuelve manipulación cuando solo funciona porque a la audiencia le falta información. Cuatro revisiones antes de usar una historia o plantear lo que está en juego. <b>Verdadera:</b> la persona, el momento y la cita son reales. <b>Representativa:</b> ese caso refleja el patrón que muestra tu evidencia, y no lo elegiste por ser la excepción más dramática. <b>Proporcional:</b> la emoción que pides corresponde al tamaño del problema; un reporte tardío no es una crisis. <b>Libre:</b> muestras lo que está en juego y dejas que decidan. Las fechas límite inventadas, la culpa y el miedo a quedar mal frente a los demás son presión. Si se cumplen las cuatro, podrías explicarle a la audiencia exactamente lo que estás haciendo y seguiría funcionando.",
      ],
    },
    {
      t: "trap",
      title: [
        "Bigger adjectives, and feelings that translate badly",
        "Adjetivos más grandes y emociones que se traducen mal",
      ],
      html: [
        "Spanish is comfortable with warm, large language: <em>un esfuerzo enorme</em>, <em>una situación gravísima</em>, <em>estamos muy, muy preocupados</em>. Carried straight into American business English, that intensity can read as exaggeration, and the listener discounts it. American professional speech tends to trust understatement: <em>That worried me</em>, said plainly after a fact, lands harder than <em>it was a terrible disaster</em>. Let the fact be big and the language small. Watch the false friends among feeling words, too: <span class='x'>✗</span> <em>I'm compromised with this project</em> → <span class='ok'>✓</span> <em>I'm committed to this project</em>. <span class='x'>✗</span> <em>I felt impotent</em> → <span class='ok'>✓</span> <em>I felt helpless</em>. <span class='x'>✗</span> <em>She's very sensible about this topic</em> → <span class='ok'>✓</span> <em>She's very sensitive about this topic</em>. <span class='x'>✗</span> <em>I'm very emotional about the launch</em> → <span class='ok'>✓</span> <em>I'm excited about the launch</em>. <span class='x'>✗</span> <em>The client was molested</em> → <span class='ok'>✓</span> <em>The client was annoyed</em>.",
        "El español se siente cómodo con un lenguaje cálido y grande: <em>un esfuerzo enorme</em>, <em>una situación gravísima</em>, <em>estamos muy, muy preocupados</em>. Llevada tal cual al inglés de negocios de Estados Unidos, esa intensidad puede sonar a exageración, y quien escucha le resta valor. El habla profesional estadounidense tiende a confiar en la sobriedad: <em>That worried me</em>, dicho sin adornos después de un hecho, pega más fuerte que <em>it was a terrible disaster</em>. Deja que el hecho sea grande y el lenguaje pequeño. Cuida también los falsos amigos entre las palabras de emoción: <span class='x'>✗</span> <em>I'm compromised with this project</em> → <span class='ok'>✓</span> <em>I'm committed to this project</em> (comprometido). <span class='x'>✗</span> <em>I felt impotent</em> → <span class='ok'>✓</span> <em>I felt helpless</em> (impotencia). <span class='x'>✗</span> <em>She's very sensible about this topic</em> → <span class='ok'>✓</span> <em>She's very sensitive about this topic</em> (sensible). <span class='x'>✗</span> <em>I'm very emotional about the launch</em> → <span class='ok'>✓</span> <em>I'm excited about the launch</em> (emocionado). <span class='x'>✗</span> <em>The client was molested</em> → <span class='ok'>✓</span> <em>The client was annoyed</em> (molesto).",
      ],
    },
    {
      t: "choice",
      title: [
        "Choose the line that moves people honestly",
        "Elige la frase que conmueve con honestidad",
      ],
      items: [
        {
          prompt: [
            "You are asking for budget to replace the field team's old laptops. You have already given the failure rate. Which line adds honest feeling?",
            "Estás pidiendo presupuesto para reemplazar las laptops viejas del equipo de campo. Ya diste la tasa de fallas. ¿Qué frase agrega emoción honesta?",
          ],
          options: [
            {
              en: "Honestly, the situation with the laptops is a total disaster and everyone is desperate.",
              ok: false,
              why: [
                "Large words and nothing to picture. The room hears exaggeration and discounts the rest.",
                "Palabras grandes y nada que imaginarse. La sala oye exageración y le resta valor a lo demás.",
              ],
            },
            {
              en: "Last Tuesday, Luis lost a two-hour inspection report when his laptop shut down at the client's site. He rewrote it that night from memory.",
              ok: true,
              why: [
                "One person, one moment, and a detail that makes anyone who has lost a document wince. No adjective needed.",
                "Una persona, un momento y un detalle que le duele a cualquiera que alguna vez perdió un documento. No hace falta ni un adjetivo.",
              ],
            },
            {
              en: "The laptops are negatively affecting productivity and morale across the field organization.",
              ok: false,
              why: [
                "Accurate and abstract. Nobody can see <em>productivity and morale</em>, so nobody feels it.",
                "Correcto y abstracto. Nadie puede ver <em>productivity and morale</em>, así que nadie lo siente.",
              ],
            },
          ],
        },
        {
          prompt: [
            "The decision could wait a month at no real cost, but you would like an answer today.",
            "La decisión podría esperar un mes sin ningún costo real, pero te gustaría tener respuesta hoy.",
          ],
          options: [
            {
              en: "We need to decide today, or we lose this opportunity completely.",
              ok: false,
              why: [
                "An invented deadline. It may work once; when they find out, it costs you credibility on every later ask.",
                "Una fecha límite inventada. Puede funcionar una vez; cuando se enteren, te cuesta credibilidad en cada petición posterior.",
              ],
            },
            {
              en: "I'd like a decision today because my team has capacity this month. Nothing breaks if we wait, but we'd start in May instead of April.",
              ok: true,
              why: [
                "The real reason and the real stakes, sized honestly. They stay free to say no, which is why they can say yes.",
                "La razón real y lo que de verdad está en juego, en su tamaño justo. Siguen en libertad de decir que no, y por eso pueden decir que sí.",
              ],
            },
            {
              en: "I'm sure nobody here wants to be the person who blocked this.",
              ok: false,
              why: [
                "It uses the fear of looking bad in front of colleagues. That is pressure, and people remember who applied it.",
                "Usa el miedo a quedar mal frente a los colegas. Eso es presión, y la gente se acuerda de quién la ejerció.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You want the room to feel what a three-day response time means for your customers.",
            "Quieres que la sala sienta lo que significa para tus clientes un tiempo de respuesta de tres días.",
          ],
          options: [
            {
              en: "A three-day response time is simply unacceptable in today's market.",
              ok: false,
              why: [
                "A verdict. It tells them what to think and gives them nothing to see.",
                "Un veredicto. Les dice qué pensar y no les da nada que ver.",
              ],
            },
            {
              en: "Imagine how angry, frustrated and disappointed our customers must be.",
              ok: false,
              why: [
                "It names the feeling instead of showing its cause. Three adjectives, no fact.",
                "Nombra la emoción en lugar de mostrar su causa. Tres adjetivos, ningún hecho.",
              ],
            },
            {
              en: "A clinic that reports a broken scanner on Monday morning hears back from us on Thursday. That's three days of patients sent somewhere else.",
              ok: true,
              why: [
                "The number becomes a clinic, a week and patients. The room supplies the feeling.",
                "El número se convierte en una clínica, una semana y pacientes. La sala pone la emoción.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You just told the story of one person and the room is quiet. What do you say next?",
            "Acabas de contar la historia de una persona y la sala está en silencio. ¿Qué dices después?",
          ],
          options: [
            {
              en: "It was really, really sad, and I think we all feel terrible about it.",
              ok: false,
              why: [
                "Explaining the emotion weakens it. The room was already there.",
                "Explicar la emoción la debilita. La sala ya había llegado ahí.",
              ],
            },
            {
              en: "And there are many, many more stories like that one that I could tell you.",
              ok: false,
              why: [
                "One story stands for the pattern. If there are more, say so with a number, not with more stories.",
                "Una historia representa el patrón. Si hay más, dilo con un número, no con más historias.",
              ],
            },
            {
              en: "That's one night. It happened 14 times last quarter. I'm asking for one more engineer on the night shift.",
              ok: true,
              why: [
                "Story, then pattern, then ask, in three short sentences. Feeling goes straight into a decision.",
                "Historia, luego patrón, luego petición, en tres oraciones cortas. La emoción pasa directo a una decisión.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "rewrite",
      title: ["Make it something they can see", "Conviértelo en algo que se pueda ver"],
      items: [
        {
          task: [
            "Replace the abstraction with one person and one moment.",
            "Cambia la abstracción por una persona y un momento.",
          ],
          before:
            "The current scheduling system creates a lot of frustration for our clinical staff.",
          after:
            "Last Monday, Dr. Reyes arrived for a seven a.m. surgery and found out in the hallway that it had been moved to noon. Nobody had told her.",
          why: [
            "<em>A lot of frustration</em> is gone, and the frustration is now in the listener.",
            "Desapareció <em>a lot of frustration</em>, y ahora la frustración la siente quien escucha.",
          ],
        },
        {
          task: [
            "State the stakes: what happens, when, and to whom.",
            "Plantea lo que está en juego: qué pasa, cuándo y a quién.",
          ],
          before: "If we don't renew the certification, it could be a problem for the business.",
          after:
            "If we don't renew the certification by June 30, we can't bid on government contracts, and those were a third of our revenue last year.",
          why: [
            "A date, a specific loss and its size. <em>Could be a problem</em> asked the room to imagine it for you.",
            "Una fecha, una pérdida específica y su tamaño. <em>Could be a problem</em> le pedía a la sala que se lo imaginara por ti.",
          ],
        },
        {
          task: [
            "Cut the intensifiers and let a fact carry the weight.",
            "Quita los intensificadores y deja que un hecho cargue el peso.",
          ],
          before:
            "The team made a really huge, incredible effort and they are extremely, extremely tired.",
          after:
            "The team has worked eleven days straight. Two people asked me yesterday when it ends.",
          why: [
            "Five intensifiers became two facts. The second one, a question from the team, carries the tiredness better than the word <em>tired</em>.",
            "Cinco intensificadores se volvieron dos hechos. El segundo, una pregunta del equipo, transmite el cansancio mejor que la palabra <em>tired</em>.",
          ],
        },
        {
          task: [
            "Use contrast: today against after the change.",
            "Usa el contraste: hoy contra después del cambio.",
          ],
          before: "The new portal will improve the experience for suppliers.",
          after:
            "Today, a supplier emails us an invoice and waits up to ten days to learn whether we received it. With the portal, they see it the same minute.",
          why: [
            "Ten days against one minute. The gap says <em>improve</em> without the word.",
            "Diez días contra un minuto. La diferencia dice <em>improve</em> sin usar la palabra.",
          ],
        },
        {
          task: [
            "Make it three, and put the strongest last.",
            "Déjalo en tres, y pon lo más fuerte al final.",
          ],
          before:
            "This plan saves money, and also it's something the customers want, and it's fast to do, and legal already approved it, and it helps with hiring too.",
          after:
            "This plan is fast, it pays for itself in a year, and our customers have been asking for it since 2022.",
          why: [
            "Five reasons joined by <em>and</em> blur together. Three, in rising order, sound like a decision already made.",
            "Cinco razones unidas con <em>and</em> se confunden entre sí. Tres, de menor a mayor, suenan a una decisión ya tomada.",
          ],
        },
      ],
    },
    {
      t: "speak",
      title: ["One person, 45 seconds", "Una persona, 45 segundos"],
      prompt: [
        "Think of something at work you want changed, and the one person who lives with the problem. In the think time, note four keywords: who, when, what they said or felt, and the link to what you want. Then tell it out loud and record it.",
        "Piensa en algo de tu trabajo que quieres que cambie, y en la persona que vive con ese problema. En el tiempo de pensar, anota cuatro palabras clave: quién, cuándo, qué dijo o sintió, y el enlace con lo que quieres. Luego cuéntalo en voz alta y grábalo.",
      ],
      think: 30,
      speak: 45,
      frame:
        "Let me tell you about ___. Last ___, ___. What they told me was ___. That's what ___ would fix.",
      checklist: [
        ["One person, with a name and a role.", "Una persona, con nombre y puesto."],
        [
          "A specific day or hour, in the simple past.",
          "Un día o una hora específicos, en pasado simple.",
        ],
        [
          "The feeling had a cause, or I quoted the person.",
          "La emoción tuvo una causa, o cité a la persona.",
        ],
        [
          "No more than one intensifier (<em>very, really, extremely</em>).",
          "No más de un intensificador (<em>very, really, extremely</em>).",
        ],
        [
          "My last sentence linked the story to what I want.",
          "Mi última oración conectó la historia con lo que quiero.",
        ],
        [
          "It is true, typical and proportionate, and it leaves them free to say no.",
          "Es verdadera, representativa y proporcional, y los deja en libertad de decir que no.",
        ],
      ],
      model:
        'Let me tell you about Diego, one of our newest sales reps. In his second week, he spent a full afternoon looking for the current price list. He found three versions in three different folders, and he sent a customer the wrong one. He told me, "I felt like I was guessing in front of the client." We hire about ten people a year, and every one of them starts like that. That\'s what a single onboarding page would fix.',
    },
    {
      t: "takeaways",
      items: [
        [
          "Logic makes it true; feeling makes it matter now. A decision needs both.",
          "La lógica lo hace cierto; la emoción hace que importe ahora. Una decisión necesita las dos.",
        ],
        [
          "One person, one moment, the feeling with its cause, and the link to your claim. Four sentences.",
          "Una persona, un momento, la emoción con su causa y el enlace con tu afirmación. Cuatro oraciones.",
        ],
        [
          "Big fact, small language. Cut the intensifiers and keep the detail.",
          "Hecho grande, lenguaje pequeño. Quita los intensificadores y conserva el detalle.",
        ],
        [
          "Say what doing nothing costs, to whom, and by when.",
          "Di cuánto cuesta no hacer nada, a quién y para cuándo.",
        ],
        [
          "True, typical, proportionate, free. If you could explain what you are doing and it still works, it is honest.",
          "Verdadera, representativa, proporcional, libre. Si puedes explicar lo que estás haciendo y sigue funcionando, es honesto.",
        ],
      ],
    },
  ],
};
