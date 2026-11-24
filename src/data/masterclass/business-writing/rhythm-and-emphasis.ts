import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "rhythm-and-emphasis",
  slugEs: "ritmo-y-enfasis",
  title: ["Rhythm and Emphasis", "Ritmo y Énfasis"],
  summary: [
    "The craft lesson: how sentence length, word position, parallel structure and the rule of three make the important line impossible to miss.",
    "La lección de oficio: cómo el largo de las oraciones, la posición de las palabras, la estructura paralela y la regla de tres hacen que la línea importante no se pueda pasar por alto.",
  ],
  description: [
    "Make your key sentence land: vary sentence length, put the important word last, use parallel structure and the rule of three, and read aloud.",
    "Haz que tu oración clave pegue: varía el largo de tus oraciones, pon la palabra importante al final, usa estructura paralela y lee en voz alta.",
  ],
  minutes: 17,
  blocks: [
    {
      t: "p",
      html: [
        "By this point in the course your writing is correct, short and clear. This lesson is about what is left: why one clear paragraph is remembered and another clear paragraph slides past. Readers hear a text in their head as they read it. When every sentence has the same length and the same shape, they hear a drone, and the line that matters gets no more attention than the lines around it.",
        "A estas alturas del curso, lo que escribes es correcto, breve y claro. Esta lección trata de lo que falta: por qué un párrafo claro se recuerda y otro párrafo igual de claro pasa de largo. Quien lee escucha el texto en su cabeza. Cuando todas las oraciones tienen el mismo largo y la misma forma, lo que escucha es un zumbido, y la línea que importa no recibe más atención que las que la rodean.",
      ],
    },
    {
      t: "p",
      html: [
        "Writers who sense this usually reach for the wrong tools: <em>very</em>, <em>extremely</em>, bold type, capital letters. Those label a sentence as important without making it land. English has two stronger tools, and both are free: where you put a word, and how long you make the sentence.",
        "Quien percibe esto casi siempre echa mano de las herramientas equivocadas: <em>very</em>, <em>extremely</em>, negritas, mayúsculas. Esas le ponen a la oración la etiqueta de importante, pero no hacen que pegue. El inglés tiene dos herramientas más fuertes, y las dos son gratis: en dónde pones una palabra y qué tan larga haces la oración.",
      ],
    },
    {
      t: "idea",
      title: [
        "Emphasis comes from position and length",
        "El énfasis viene de la posición y del largo",
      ],
      html: [
        "The end of a sentence is its loudest position. A short sentence after a long one is the loudest sentence in a paragraph. So decide which word, or which sentence, the reader must not miss. Put that word last. Make that sentence short.",
        "El final de una oración es su posición más sonora. Una oración corta después de una larga es la más sonora de un párrafo. Así que decide qué palabra, o qué oración, no se le puede escapar a tu lector. Pon esa palabra al final. Haz corta esa oración.",
      ],
    },
    {
      t: "compare",
      title: ["Vary the length", "Varía el largo"],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "The launch was planned for March. The vendor delivered late. The testing took longer. The launch moved to April.",
          strong:
            "The launch was planned for March, but the vendor delivered late and testing ran long. We moved it to April.",
          why: [
            "Four sentences of the same size give four facts the same weight. Combine the background into one longer sentence and the decision stands alone.",
            "Cuatro oraciones del mismo tamaño les dan el mismo peso a cuatro hechos. Junta los antecedentes en una oración más larga y la decisión queda sola.",
          ],
        },
        {
          weak: "We reviewed all twelve proposals over three weeks with a committee of five people from finance, operations and legal, and after scoring each one against the criteria we concluded that none of them met the requirements.",
          strong:
            "A committee of five from finance, operations and legal spent three weeks scoring all twelve proposals against the criteria. None qualified.",
          why: [
            "The long sentence carries the process. Two words carry the result, and after twenty-one words of setup, those two words are all the reader hears.",
            "La oración larga carga el proceso. Dos palabras cargan el resultado, y después de veintiún palabras de preparación, esas dos son lo único que el lector escucha.",
          ],
        },
        {
          weak: "Although the pilot had some positive results in terms of user satisfaction, it is important to mention that the cost per user was significantly higher than expected, which is a problem.",
          strong:
            "Users liked the pilot. It also cost $84 per user against a budget of $42, and that is the problem.",
          why: [
            "One long sentence blended the good news and the bad into the same gray. Separate them and each is heard. The numbers replace <em>significantly higher</em>.",
            "Una sola oración larga mezclaba la buena noticia y la mala en el mismo gris. Sepáralas y cada una se escucha. Las cifras sustituyen a <em>significantly higher</em>.",
          ],
        },
        {
          weak: "The client is unhappy. The invoice was wrong. It was wrong twice. We need to fix it. We need a new process.",
          strong:
            "The client is unhappy because we sent a wrong invoice twice. Fixing the invoice is easy. Fixing the process that produced it is the real work.",
          why: [
            "All short is as flat as all long, and it can sound angry. A short sentence has force only next to a longer one.",
            "Puras oraciones cortas es tan plano como puras largas, y puede sonar a enojo. Una oración corta solo tiene fuerza junto a una más larga.",
          ],
        },
        {
          weak: "I have reviewed the three candidates and I believe that the best option for the role is Marcus because he has the most experience with enterprise clients and he also interviewed very well with the team.",
          strong:
            "I interviewed all three candidates, and each could do the job. Marcus is the one I would hire. He has the most experience with enterprise clients, and the team wants to work with him.",
          why: [
            "The recommendation gets its own short sentence between two longer ones. A reader skimming will catch it.",
            "La recomendación tiene su propia oración corta entre dos más largas. Quien lea de corrido la va a pescar.",
          ],
        },
      ],
    },
    {
      t: "compare",
      title: ["Put the important word last", "Pon la palabra importante al final"],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "A 30% drop in renewals is what we will see if we raise prices now, in my opinion.",
          strong: "In my opinion, if we raise prices now, renewals will drop 30%.",
          why: [
            "The weak version ends on <em>in my opinion</em>, the least important words in it. Move qualifiers and sources to the front and let the sentence end on the number.",
            "La versión débil termina en <em>in my opinion</em>, que son sus palabras menos importantes. Pasa los matices y las fuentes al principio y deja que la oración termine en la cifra.",
          ],
        },
        {
          weak: "We lost the account because of slow response times, according to the client.",
          strong: "According to the client, we lost the account because of slow response times.",
          why: [
            "Same words, different last note. The source opens the sentence; the cause closes it.",
            "Las mismas palabras, otra nota final. La fuente abre la oración; la causa la cierra.",
          ],
        },
        {
          weak: "The deadline is Friday, as I mentioned in the meeting last week.",
          strong: "As I mentioned last week, the deadline is Friday.",
          why: [
            "What should stay in the reader's ear is <em>Friday</em>, not the meeting.",
            "Lo que debe quedarse en el oído de tu lector es <em>Friday</em>, no la junta.",
          ],
        },
        {
          weak: "Security is the reason we cannot approve this, basically.",
          strong: "We cannot approve this for one reason: security.",
          why: [
            "A colon builds a small pause, and the word after it lands alone. Use this once in a document, where it counts.",
            "Los dos puntos crean una pausa pequeña, y la palabra que sigue cae sola. Úsalo una vez por documento, donde cuente.",
          ],
        },
        {
          weak: "We need your signature by noon tomorrow at the latest, if possible.",
          strong: "We need your signature by noon tomorrow.",
          why: [
            "<em>If possible</em> in the last position takes the deadline back. If the deadline is real, end on it.",
            "Un <em>if possible</em> en la última posición retira la fecha límite. Si la fecha es real, termina en ella.",
          ],
        },
        {
          weak: "There is a risk that we could lose the certification in the event that the audit fails.",
          strong: "If the audit fails, we lose the certification.",
          why: [
            "The condition goes first because it is the smaller idea. The consequence goes last because it is the one that should worry the reader.",
            "La condición va primero porque es la idea menor. La consecuencia va al final porque es la que debe preocupar a tu lector.",
          ],
        },
      ],
    },
    {
      t: "framework",
      title: ["Four tools for emphasis", "Cuatro herramientas para dar énfasis"],
      lead: [
        "Use them where the decision, the risk or the result is. A tool used in every sentence stops working.",
        "Úsalas donde esté la decisión, el riesgo o el resultado. Una herramienta que se usa en todas las oraciones deja de funcionar.",
      ],
      steps: [
        {
          label: ["The short sentence after a long one", "La oración corta después de una larga"],
          html: [
            "Let one sentence carry the detail, then give the conclusion in a handful of words.",
            "Deja que una oración cargue el detalle y después da la conclusión en unas cuantas palabras.",
          ],
          say: "We tested four vendors over six weeks, on price, support and integration time. Only one passed.",
        },
        {
          label: [
            "The important word in the last position",
            "La palabra importante en la última posición",
          ],
          html: [
            "Find the word you would stress if you said the sentence aloud. Rearrange until it is the last word, or nearly.",
            "Encuentra la palabra que acentuarías si dijeras la oración en voz alta. Reacomoda hasta que sea la última, o casi.",
          ],
          say: "What this team needs right now is time.",
        },
        {
          label: ["Parallel structure", "Estructura paralela"],
          html: [
            "When two ideas are being compared, give them the same grammatical shape. The matching form lets the reader hear the difference in content.",
            "Cuando comparas dos ideas, dales la misma forma gramatical. Como la forma coincide, tu lector alcanza a oír la diferencia de contenido.",
          ],
          say: "We promised ten days. We delivered in thirty.",
        },
        {
          label: ["The rule of three", "La regla de tres"],
          html: [
            "A list of three sounds complete; two can sound thin and five is forgotten. Put the longest or most important item last. Use it only when you really have three things.",
            "Una lista de tres suena completa; dos pueden sonar a poco y cinco se olvidan. Pon al final el elemento más largo o el más importante. Úsala solo cuando de verdad tengas tres cosas.",
          ],
          say: "The new process is faster, cheaper and easier to audit.",
        },
      ],
    },
    {
      t: "model",
      title: [
        "A recommendation built to be heard",
        "Una recomendación construida para que se escuche",
      ],
      context: [
        "Priya, a customer service director, opens her budget proposal with this paragraph. Read it aloud once before you read the notes.",
        "Priya, directora de servicio al cliente, abre su propuesta de presupuesto con este párrafo. Léelo una vez en voz alta antes de leer las notas.",
      ],
      lines: [
        {
          en: "For two years we have answered every serious customer complaint the same way: with a discount.",
          note: [
            "A long setup that ends, after a colon, on the word the whole paragraph is about.",
            "Una preparación larga que termina, después de los dos puntos, en la palabra de la que trata todo el párrafo.",
          ],
        },
        {
          en: "Discounts are fast, they are easy to approve, and they make the angry call stop.",
          note: [
            "Three parallel items, the longest and most vivid last. She is being fair to the current practice.",
            "Tres elementos paralelos, el más largo y más vívido al final. Le hace justicia a la práctica actual.",
          ],
        },
        {
          en: "Last year they also cost us $310,000.",
          note: [
            "Shorter, and the number sits in the last position.",
            "Más corta, y la cifra queda en la última posición.",
          ],
        },
        {
          en: "And they did not work.",
          note: [
            "Five words after three longer sentences. <em>And</em> at the start of a sentence is correct, and here it adds weight.",
            "Cinco palabras después de tres oraciones más largas. Empezar una oración con <em>And</em> es correcto, y aquí le da peso.",
          ],
        },
        {
          en: "Of the customers who received a discount, four in ten left anyway.",
          note: [
            "The evidence, ending on <em>left anyway</em>.",
            "La evidencia, que termina en <em>left anyway</em>.",
          ],
        },
        {
          en: "A discount fixes the invoice. It does not fix the problem.",
          note: [
            "Two sentences with the same shape. Only the last word changes, so the last word is what the reader hears.",
            "Dos oraciones con la misma forma. Solo cambia la última palabra, así que la última palabra es lo que el lector escucha.",
          ],
        },
        {
          en: "I want to spend next year's discount budget on two service engineers.",
          note: [
            "The ask, in plain words, ending on what she wants.",
            "La petición, con palabras sencillas, que termina en lo que ella quiere.",
          ],
        },
      ],
    },
    {
      t: "compare",
      title: [
        "Cut the sentence that sounds impressive and says nothing",
        "Quita la oración que suena impresionante y no dice nada",
      ],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "We are fully committed to delivering best-in-class solutions that drive value for our clients.",
          strong: "We will deliver the first module by June 1 and fix any defect within 48 hours.",
          why: [
            "Any company could sign the first sentence, so it says nothing about yours. A commitment has a date and a number in it.",
            "Cualquier empresa podría firmar la primera oración, así que no dice nada de la tuya. Un compromiso trae fecha y cifra.",
          ],
        },
        {
          weak: "This initiative represents a significant step forward in our digital transformation journey.",
          strong:
            "This project moves invoicing online. It should cut processing time from six days to two.",
          why: [
            "Rhythm cannot rescue a sentence with no content. Say what the project does and what will be different afterward.",
            "El ritmo no puede rescatar una oración sin contenido. Di qué hace el proyecto y qué va a ser distinto después.",
          ],
        },
        {
          weak: "Going forward, we will continue to explore opportunities for improvement in this area.",
          strong: "Next quarter we will test two changes: a shorter form and a same-day callback.",
          why: [
            "<em>Explore opportunities for improvement</em> promises nothing. Name the changes.",
            "<em>Explore opportunities for improvement</em> no promete nada. Nombra los cambios.",
          ],
        },
        {
          weak: "Communication is key to the success of any project.",
          strong: "Please copy me on every email to the client until launch.",
          why: [
            "Nobody could disagree with the first sentence, which is the sign that it is empty. Ask what you wanted the reader to do when you wrote it, and write that.",
            "Nadie podría discrepar de la primera oración, y esa es la señal de que está vacía. Pregúntate qué querías que hiciera tu lector cuando la escribiste, y escribe eso.",
          ],
        },
        {
          weak: "At the end of the day, what really matters is results.",
          strong: "We missed the target by 12%. Here is my plan to close the gap.",
          why: [
            "A sentence that sounds like a conclusion and contains none. The strong version has the result and the next step.",
            "Una oración que suena a conclusión y no contiene ninguna. La versión sólida trae el resultado y el siguiente paso.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: ["Short sentences that land", "Oraciones cortas que pegan"],
      items: [
        {
          en: "That is the risk.",
          use: [
            "After a sentence that describes what could go wrong.",
            "Después de una oración que describe lo que podría salir mal.",
          ],
        },
        {
          en: "It did not work.",
          use: [
            "A result, stated flat, after you describe what was tried.",
            "Un resultado, dicho en seco, después de describir lo que se intentó.",
          ],
        },
        {
          en: "We have two options.",
          use: [
            "Before you lay out a choice. It tells the reader how to listen.",
            "Antes de plantear una decisión. Le dice a tu lector cómo escuchar.",
          ],
        },
        {
          en: "Here is the problem.",
          use: ["The turn from background to the issue.", "El giro de los antecedentes al asunto."],
        },
        {
          en: "Nothing else changed.",
          use: [
            "Isolates a cause: one thing was different, and the result followed.",
            "Aísla una causa: una sola cosa fue distinta, y de ahí salió el resultado.",
          ],
        },
        {
          en: "That changes the math.",
          use: [
            "When a new fact changes the decision.",
            "Cuando un dato nuevo cambia la decisión.",
          ],
        },
        {
          en: "The answer is no.",
          use: [
            "After you have fairly described the request.",
            "Después de haber descrito la solicitud con justicia.",
          ],
        },
        {
          en: "We are not there yet.",
          use: [
            "An honest status after a list of progress.",
            "Un estatus honesto después de una lista de avances.",
          ],
        },
        {
          en: "One number matters here.",
          use: [
            "Right before the figure you want remembered.",
            "Justo antes de la cifra que quieres que se recuerde.",
          ],
        },
        {
          en: "I would not wait.",
          use: [
            "A recommendation in four words. Use one line like these per message; two in a row sound theatrical.",
            "Una recomendación en cuatro palabras. Usa una línea como estas por mensaje; dos seguidas suenan teatrales.",
          ],
        },
      ],
    },
    {
      t: "framework",
      title: ["The read-aloud test", "La prueba de leer en voz alta"],
      lead: [
        "Two minutes, before anything important leaves your hands. Your ear catches what your eye forgives.",
        "Dos minutos, antes de que salga de tus manos cualquier cosa importante. Tu oído detecta lo que tu ojo perdona.",
      ],
      steps: [
        {
          label: ["Read it at speaking speed", "Léelo a velocidad de conversación"],
          html: [
            "Out loud, or under your breath if you are in an open office. You can also have your computer read it to you.",
            "En voz alta, o entre dientes si estás en una oficina abierta. También puedes poner a tu computadora a leértelo.",
          ],
        },
        {
          label: ["Where you run out of breath, split", "Donde te quedes sin aire, divide"],
          html: [
            "A sentence you cannot say in one breath is a sentence the reader cannot hold in one reading.",
            "Una oración que no puedes decir de un solo aliento es una oración que tu lector no puede retener en una sola lectura.",
          ],
        },
        {
          label: ["Where you stumble, reorder", "Donde te tropieces, reacomoda"],
          html: [
            "A stumble usually means the words are in an order no speaker would use. Say the idea to an imaginary colleague, then write what you said.",
            "Un tropiezo casi siempre significa que las palabras están en un orden que nadie usaría al hablar. Dile la idea a un colega imaginario y después escribe lo que dijiste.",
          ],
        },
        {
          label: [
            "Where three sentences sound alike, change the middle one",
            "Donde tres oraciones suenen igual, cambia la de en medio",
          ],
          html: [
            "Join it to its neighbor or cut it to five words.",
            "Únela a la de junto o recórtala a cinco palabras.",
          ],
        },
        {
          label: [
            "Listen to the last word of the key sentence",
            "Escucha la última palabra de la oración clave",
          ],
          html: [
            "It should be the word you would stress in conversation. If it is <em>possible</em>, <em>mentioned</em> or <em>etc.</em>, rearrange.",
            "Debe ser la palabra que acentuarías en una conversación. Si es <em>possible</em>, <em>mentioned</em> o <em>etc.</em>, reacomoda.",
          ],
        },
      ],
    },
    {
      t: "trap",
      title: [
        "The long sentence, and the cure that overshoots",
        "La oración larga, y el remedio que se pasa",
      ],
      html: [
        "Spanish prose admires a sentence that carries a whole thought through several clauses: <em>el cual</em>, <em>mismo que</em>, <em>por lo que</em>. Written in English, that sentence loses the reader at the second <em>which</em>. But the cure is not to chop everything into short sentences. A message made only of short sentences reads like a telegram, and to an American it can sound irritated. Aim for contrast: mostly medium sentences, a long one where the reader needs the detail, a short one where you need the reader's attention. The second carry-over is emphasis by volume: <em>very important</em>, <em>extremely urgent</em>, <em>URGENT</em>. American readers discount all three. A consequence is louder than any adverb: <em>If we miss Friday, we pay a $5,000 penalty.</em>",
        "La prosa en español admira la oración que lleva una idea completa a lo largo de varias cláusulas: <em>el cual</em>, <em>mismo que</em>, <em>por lo que</em>. Escrita en inglés, esa oración pierde al lector en el segundo <em>which</em>. Pero el remedio no es picar todo en oraciones cortas. Un mensaje hecho solo de oraciones cortas se lee como telegrama, y a un estadounidense le puede sonar a irritación. Busca el contraste: sobre todo oraciones medianas, una larga donde tu lector necesita el detalle, una corta donde tú necesitas su atención. El segundo hábito que se arrastra es el énfasis por volumen: <em>very important</em>, <em>extremely urgent</em>, <em>URGENT</em>. El lector estadounidense les resta valor a los tres. Una consecuencia suena más fuerte que cualquier adverbio: <em>If we miss Friday, we pay a $5,000 penalty.</em>",
      ],
    },
    {
      t: "choice",
      title: ["Which version lands?", "¿Cuál versión pega?"],
      items: [
        {
          prompt: [
            "You are reporting the result of a vendor test to leadership. Which version makes the result land?",
            "Vas a reportarle a la dirección el resultado de una prueba de proveedores. ¿Cuál versión hace que el resultado pegue?",
          ],
          options: [
            {
              en: "We tested four vendors over six weeks and found that only one of them passed all of our requirements.",
              ok: false,
              why: [
                "Correct and clear, but the result arrives at the same volume as the process.",
                "Correcta y clara, pero el resultado llega al mismo volumen que el proceso.",
              ],
            },
            {
              en: "We tested four vendors over six weeks, on price, support and integration time. Only one passed.",
              ok: true,
              why: [
                "A long sentence for the process, three words for the result.",
                "Una oración larga para el proceso, tres palabras para el resultado.",
              ],
            },
            {
              en: "We tested four vendors. It took six weeks. We looked at price, support and integration time. Only one passed.",
              ok: false,
              why: [
                "Every sentence is short, so the last one does not stand out from the others.",
                "Todas las oraciones son cortas, así que la última no se distingue de las demás.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You want the reader to remember the deadline.",
            "Quieres que tu lector recuerde la fecha límite.",
          ],
          options: [
            {
              en: "Friday at noon is when we need your comments, if that works.",
              ok: false,
              why: [
                "The deadline opens the sentence and <em>if that works</em> closes it, so the last thing heard is that the date is negotiable.",
                "La fecha abre la oración y <em>if that works</em> la cierra, así que lo último que se escucha es que la fecha es negociable.",
              ],
            },
            {
              en: "We need your comments by Friday at noon.",
              ok: true,
              why: [
                "The deadline is the last thing in the sentence, and nothing after it weakens it.",
                "La fecha es lo último de la oración, y nada después la debilita.",
              ],
            },
            {
              en: "By Friday at noon we need your comments, as discussed.",
              ok: false,
              why: [
                "It ends on <em>as discussed</em>, which is the least useful phrase in the sentence.",
                "Termina en <em>as discussed</em>, que es la frase menos útil de la oración.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You are describing the benefits of a new process. Which list is strongest?",
            "Vas a describir los beneficios de un proceso nuevo. ¿Cuál lista es la más fuerte?",
          ],
          options: [
            {
              en: "The new process is faster, cheaper and easier to audit.",
              ok: true,
              why: [
                "Three adjectives in the same form, the longest last.",
                "Tres adjetivos con la misma forma, el más largo al final.",
              ],
            },
            {
              en: "The new process is faster, costs less and auditing it is easier.",
              ok: false,
              why: [
                "The same three ideas in three different shapes: an adjective, a verb phrase and a clause. The reader feels a bump at each comma.",
                "Las mismas tres ideas en tres formas distintas: un adjetivo, una frase verbal y una cláusula. El lector siente un tope en cada coma.",
              ],
            },
            {
              en: "The new process is faster, cheaper, simpler, more modern, more scalable and easier to audit.",
              ok: false,
              why: [
                "Six benefits and none will be remembered. Choose the three that matter to this reader.",
                "Seis beneficios, y no se va a recordar ninguno. Elige los tres que le importan a este lector.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Which sentence should open your monthly project update?",
            "¿Cuál oración debe abrir tu actualización mensual del proyecto?",
          ],
          options: [
            {
              en: "Teamwork and communication have been key to our progress this month.",
              ok: false,
              why: [
                "True of every project that ever went well. The reader learns nothing about this one.",
                "Es cierto de cualquier proyecto que haya salido bien. El lector no se entera de nada sobre este.",
              ],
            },
            {
              en: "We are excited to share that we continue to make great strides on the migration.",
              ok: false,
              why: [
                "Enthusiasm with no measurement. How great, and how do you know?",
                "Entusiasmo sin medición. ¿Qué tan grande es el avance, y cómo lo sabes?",
              ],
            },
            {
              en: "The migration is two weeks ahead of schedule, and 60% of accounts have moved.",
              ok: true,
              why: [
                "Two facts. The reader can feel good about the project without being told to.",
                "Dos datos. El lector puede sentirse bien con el proyecto sin que se lo pidan.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You need the whole team to take an expense deadline seriously.",
            "Necesitas que todo el equipo tome en serio una fecha límite de gastos.",
          ],
          options: [
            {
              en: "It is VERY important that everyone submits expenses by the 25th.",
              ok: false,
              why: [
                "Capital letters raise the volume and give no reason to act.",
                "Las mayúsculas suben el volumen y no dan ninguna razón para actuar.",
              ],
            },
            {
              en: "Please submit your expenses by the 25th. Anything later will be paid in next month's cycle.",
              ok: true,
              why: [
                "The consequence does the emphasizing, calmly.",
                "La consecuencia es la que da el énfasis, con calma.",
              ],
            },
            {
              en: "I really cannot stress enough how extremely critical it is to submit expenses by the 25th.",
              ok: false,
              why: [
                "Three intensifiers and the reader still does not know what happens on the 26th.",
                "Tres intensificadores, y el lector sigue sin saber qué pasa el 26.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "rewrite",
      title: ["Rewrite for rhythm", "Reescribe cuidando el ritmo"],
      items: [
        {
          task: [
            "Break this into two sentences so the finding lands at the end.",
            "Divide esto en dos oraciones para que el hallazgo caiga al final.",
          ],
          before:
            "We analyzed the returns for the last six months and we discovered that the majority of the returns, approximately 70%, were related to a single product, which is the X200 charger.",
          after:
            "We analyzed six months of returns. About 70% of them trace to a single product: the X200 charger.",
          why: [
            "The first sentence is now short setup. The second ends, after a colon, on the one thing the reader must remember.",
            "La primera oración ahora es una preparación corta. La segunda termina, después de los dos puntos, en lo único que tu lector tiene que recordar.",
          ],
        },
        {
          task: [
            "Reorder so the sentence ends on its most important words.",
            "Reacomoda para que la oración termine en sus palabras más importantes.",
          ],
          before:
            "A second warehouse is what we need to open before the holiday season, in my view.",
          after: "In my view, we need to open a second warehouse before the holiday season.",
          why: [
            "<em>In my view</em> moves to the front, where a qualifier does the least harm. The sentence now ends on the warehouse and the season. If the date is what you want remembered, that order is right; if it is the warehouse, end on <em>a second warehouse</em>.",
            "<em>In my view</em> se pasa al principio, donde un matiz estorba menos. Ahora la oración termina en el almacén y la temporada. Si lo que quieres que se recuerde es la fecha, ese orden es el correcto; si es el almacén, termina en <em>a second warehouse</em>.",
          ],
        },
        {
          task: [
            "Rewrite as two short parallel sentences.",
            "Reescribe como dos oraciones cortas y paralelas.",
          ],
          before:
            "Our old supplier was cheap but they delivered late, and with the new one we have higher prices although the deliveries arrive on time.",
          after: "Our old supplier was cheap and late. Our new one is expensive and on time.",
          why: [
            "Same shape twice: supplier, price, punctuality. The reader sees the trade-off at a glance and can decide which matters more.",
            "La misma forma dos veces: proveedor, precio, puntualidad. El lector ve de un vistazo lo que se gana y lo que se pierde, y puede decidir qué pesa más.",
          ],
        },
        {
          task: [
            "Replace this sentence with facts. Invent two if you need to.",
            "Sustituye esta oración con datos. Inventa dos si hace falta.",
          ],
          before:
            "We are pleased to announce that, thanks to the hard work and commitment of the whole team, important progress has been achieved in the project during this period.",
          after: "This month the team finished the data migration and trained 40 users.",
          why: [
            "The original has 27 words and no information. Yours will name different facts; what matters is that a reader could repeat them to someone else.",
            "El original tiene 27 palabras y nada de información. Tu versión va a nombrar otros datos; lo que importa es que un lector pueda repetírselos a alguien más.",
          ],
        },
        {
          task: [
            "Split this long sentence. Use one longer sentence for the history and one short sentence for the news.",
            "Divide esta oración larga. Usa una oración más larga para la historia y una corta para la noticia.",
          ],
          before:
            "The client, who had already complained twice about the delays that affected the March and April deliveries, which were caused by the customs problems that we informed them about at that time, has now told us that they are considering other suppliers.",
          after:
            "Customs problems delayed the client's March and April deliveries, and the client complained both times. Now the client is considering other suppliers.",
          why: [
            "In the original, the news arrives after two nested clauses and forty words. Here the history is one sentence in time order and the news stands alone. In an email, you could also put the short sentence first; either way, it must not be buried inside the long one.",
            "En el original, la noticia llega después de dos cláusulas anidadas y unas cuarenta palabras. Aquí la historia es una sola oración en orden cronológico y la noticia queda sola. En un correo también podrías poner primero la oración corta; en cualquier caso, no debe quedar enterrada dentro de la larga.",
          ],
        },
      ],
    },
    {
      t: "takeaways",
      items: [
        [
          "Readers hear your writing. Same-length sentences are a drone; variety is what makes one line stand out.",
          "Quien lee escucha lo que escribes. Las oraciones del mismo largo son un zumbido; la variedad es lo que hace resaltar una línea.",
        ],
        [
          "Put the important word at the end of the sentence. Move qualifiers and sources to the front.",
          "Pon la palabra importante al final de la oración. Pasa los matices y las fuentes al principio.",
        ],
        [
          "A short sentence after a long one is your strongest emphasis. Use it once per message.",
          "Una oración corta después de una larga es tu énfasis más fuerte. Úsala una vez por mensaje.",
        ],
        [
          "Parallel shapes and lists of three give force. Adverbs and capital letters only add volume.",
          "Las formas paralelas y las listas de tres dan fuerza. Los adverbios y las mayúsculas solo suben el volumen.",
        ],
        [
          "Read it aloud. Then cut any sentence that another company could sign without changing a word.",
          "Léelo en voz alta. Después quita cualquier oración que otra empresa podría firmar sin cambiarle una palabra.",
        ],
      ],
    },
  ],
};
