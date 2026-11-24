import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "paragraphs-that-flow",
  slugEs: "parrafos-que-fluyen",
  title: ["Paragraphs That Flow", "Párrafos que Fluyen"],
  summary: [
    "How to build a paragraph that makes one point, moves from what the reader knows to what is new, and uses connectors that show real logic.",
    "Cómo construir un párrafo que plantea una sola idea, avanza de lo que tu lector ya sabe a lo nuevo y usa conectores que muestran lógica real.",
  ],
  description: [
    "Write paragraphs that make one point: a clear topic sentence, known information before new, and connectors that show logic instead of decorating.",
    "Escribe párrafos con una sola idea: una primera oración clara, lo conocido antes de lo nuevo y conectores que muestran lógica en vez de adornar.",
  ],
  minutes: 18,
  blocks: [
    {
      t: "p",
      html: [
        "Your sentences are correct. You cut the clutter and chose strong verbs. And the reader still writes back: <em>Sorry, what do you need from me?</em> When that happens, the problem is usually one level up. Each sentence is fine alone, but together they do not add up to a paragraph.",
        "Tus oraciones están bien. Quitaste lo que sobraba y elegiste verbos fuertes. Y aun así te contestan: <em>Sorry, what do you need from me?</em> Cuando pasa eso, el problema casi siempre está un nivel arriba. Cada oración funciona sola, pero juntas no llegan a formar un párrafo.",
      ],
    },
    {
      t: "p",
      html: [
        "A business paragraph in English is a small unit with a job. It makes one point, it states that point in its first sentence, and every sentence after that pushes the same point forward. Good Spanish prose often works the other way: the paragraph builds through background and nuance and delivers its conclusion at the end. That shape reads as educated in Spanish. In English it reads as slow, because the American reader skims first sentences to decide what to read closely.",
        "En inglés de negocios, un párrafo es una unidad pequeña con una tarea. Plantea una sola idea, la dice en la primera oración, y cada oración que sigue empuja esa misma idea. La buena prosa en español muchas veces funciona al revés: el párrafo va construyendo con antecedentes y matices y entrega la conclusión al final. En español eso se lee como educado. En inglés se lee como lento, porque el lector estadounidense recorre primero las oraciones iniciales para decidir qué leer con cuidado.",
      ],
    },
    {
      t: "idea",
      title: ["One paragraph, one point, stated first", "Un párrafo, una idea, dicha al principio"],
      html: [
        "Before you write a paragraph, finish this sentence: <em>The point of this paragraph is that...</em> If you need the word <em>and</em> to finish it, you have two paragraphs. Whatever you wrote after <em>that</em> is your first sentence. From there, each sentence should start from something the reader already has and end on something new.",
        "Antes de escribir un párrafo, termina esta oración: <em>The point of this paragraph is that...</em> Si necesitas la palabra <em>and</em> para terminarla, tienes dos párrafos. Lo que escribiste después de <em>that</em> es tu primera oración. A partir de ahí, cada oración debe arrancar de algo que tu lector ya tiene y terminar en algo nuevo.",
      ],
    },
    {
      t: "framework",
      title: ["The four-move paragraph", "El párrafo en cuatro movimientos"],
      lead: [
        "Use it for any paragraph that has to explain or persuade: a recommendation, a risk, a result.",
        "Úsalo en cualquier párrafo que tenga que explicar o convencer: una recomendación, un riesgo, un resultado.",
      ],
      steps: [
        {
          label: ["Point", "La idea"],
          html: [
            "Open with a claim, not a topic. A topic names a subject. A claim says something about it that the reader could act on or disagree with.",
            "Abre con una afirmación, no con un tema. Un tema solo nombra de qué vas a hablar. Una afirmación dice algo sobre ese tema, algo con lo que tu lector puede actuar o no estar de acuerdo.",
          ],
          say: "We should move the launch from March 3 to March 17.",
        },
        {
          label: ["Evidence", "La evidencia"],
          html: [
            "Give the one or two facts that make the claim true. Numbers, dates, names.",
            "Da uno o dos hechos que sostienen la afirmación. Cifras, fechas, nombres.",
          ],
          say: "Two of the five payment tests failed last week, and the fix needs eight working days.",
        },
        {
          label: ["Meaning", "El significado"],
          html: [
            "Say what the evidence means for this reader. Writers skip this sentence because the meaning feels obvious to them. The reader was not in the room, so it is not obvious to the reader.",
            "Di qué significa esa evidencia para quien te lee. Es la oración que más se omite, porque a quien escribe le parece obvia. Tu lector no estuvo en la junta, así que para tu lector no lo es.",
          ],
          say: "If we launch on March 3, customers in Canada will not be able to pay by card.",
        },
        {
          label: ["Next", "Lo que sigue"],
          html: [
            "Close with what happens next or what you need, with a date.",
            "Cierra con lo que sigue o con lo que necesitas, con fecha.",
          ],
          say: "I need your approval by Thursday so we can tell the partners on Friday.",
        },
      ],
    },
    {
      t: "compare",
      title: [
        "First sentences: from a topic to a claim",
        "Primeras oraciones: de un tema a una afirmación",
      ],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "I want to talk about the Q3 budget.",
          strong:
            "We will finish Q3 about $40,000 under budget, mostly because two hires moved to October.",
          why: [
            "The first version names a subject and makes the reader wait. The second is the whole paragraph in one line: a reader who stops here still has the news.",
            "La primera versión nombra un tema y deja al lector esperando. La segunda es todo el párrafo en una línea: quien deje de leer ahí ya se llevó la noticia.",
          ],
        },
        {
          weak: "Regarding the vendor evaluation, there are several points to consider.",
          strong: "Only one of the three vendors can meet our June deadline.",
          why: [
            "<em>Several points to consider</em> promises a list and hides your conclusion. Lead with the conclusion; the points become its support.",
            "<em>Several points to consider</em> promete una lista y esconde tu conclusión. Empieza con la conclusión; los puntos pasan a ser su sustento.",
          ],
        },
        {
          weak: "The customer survey was completed last month.",
          strong: "The customer survey points to one problem: onboarding takes too long.",
          why: [
            "A fact nobody can disagree with is a weak opening, because the reader has to ask <em>so what</em>. Open with what the fact shows.",
            "Un hecho con el que nadie puede discrepar es un arranque débil, porque el lector tiene que preguntarse <em>so what</em>. Abre con lo que ese hecho demuestra.",
          ],
        },
        {
          weak: "Another aspect is the training.",
          strong: "The new system will fail without training, and we have not budgeted for any.",
          why: [
            "<em>Another aspect</em> tells the reader the list continues. It does not say what this paragraph adds. The strong version could be read alone and still alarm the right person.",
            "<em>Another aspect</em> le avisa al lector que la lista sigue. No dice qué aporta este párrafo. La versión sólida se puede leer sola y aun así alertar a la persona indicada.",
          ],
        },
        {
          weak: "As you know, the team has been working very hard on the migration.",
          strong: "The migration is 80% done and on track for May 30.",
          why: [
            "Effort is not status. A manager reading the first version still does not know whether to worry. The second answers the question they opened the email with.",
            "El esfuerzo no es el estatus. Quien lee la primera versión sigue sin saber si debe preocuparse. La segunda contesta la pregunta con la que abrió el correo.",
          ],
        },
        {
          weak: "There were some issues with the shipment.",
          strong:
            "The shipment arrived 200 units short, and the supplier will send the rest by Friday.",
          why: [
            "The claim carries the size of the problem and its solution. The rest of the paragraph only has to add detail.",
            "La afirmación ya trae el tamaño del problema y su solución. Al resto del párrafo solo le toca dar detalle.",
          ],
        },
      ],
    },
    {
      t: "h",
      text: ["Known first, new last", "Primero lo conocido, al final lo nuevo"],
    },
    {
      t: "p",
      html: [
        "Inside the paragraph, flow comes from one habit. Begin each sentence with something the reader has already met, usually the idea that closed the sentence before, and put the new information at the end. Each sentence then picks up where the last one stopped. Two small tools make this easy. First, repeat your key term. Many of us were taught in school to avoid repeating a word, but if you write <em>the contract</em>, then <em>the agreement</em>, then <em>the document</em>, an American reader will wonder whether you mean three things. Second, never leave <em>this</em> alone at the start of a sentence. Write <em>this delay</em>, <em>this change</em>, <em>this request</em>.",
        "Dentro del párrafo, la fluidez sale de un solo hábito. Empieza cada oración con algo que tu lector ya conoce, casi siempre la idea con la que cerró la oración anterior, y deja la información nueva para el final. Así cada oración retoma donde se quedó la anterior. Dos herramientas pequeñas lo facilitan. La primera: repite tu término clave. A muchos nos enseñaron en la escuela a no repetir palabras, pero si escribes <em>the contract</em>, luego <em>the agreement</em> y luego <em>the document</em>, un lector estadounidense se va a preguntar si hablas de tres cosas distintas. La segunda: nunca dejes un <em>this</em> solo al inicio de una oración. Escribe <em>this delay</em>, <em>this change</em>, <em>this request</em>.",
      ],
    },
    {
      t: "compare",
      title: ["Sentences that hand off to each other", "Oraciones que se pasan la estafeta"],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "We signed the new logistics contract in May. A 12% drop in late deliveries was the result of the contract. Customer complaints have also fallen because deliveries are on time.",
          strong:
            "We signed the new logistics contract in May. Since then, late deliveries have dropped 12%. With fewer late deliveries, customer complaints have fallen too.",
          why: [
            "In the strong version every sentence opens with what the reader just learned (<em>since then</em>, <em>fewer late deliveries</em>) and ends on the new fact. Nothing has to be held in the air.",
            "En la versión sólida, cada oración abre con lo que el lector acaba de saber (<em>since then</em>, <em>fewer late deliveries</em>) y termina en el dato nuevo. No hay que cargar nada en la memoria.",
          ],
        },
        {
          weak: "The audit found three gaps in our access controls. This is why we are changing the policy.",
          strong:
            "The audit found three gaps in our access controls. Those gaps are why we are changing the policy.",
          why: [
            "<em>This</em> alone could point to the audit, the finding or the gaps. Naming the noun costs one word and removes the doubt.",
            "Un <em>this</em> solo puede referirse a la auditoría, al hallazgo o a las brechas. Nombrar el sustantivo cuesta una palabra y quita la duda.",
          ],
        },
        {
          weak: "The contract expires in June. The agreement must be renewed 60 days before. Legal has not reviewed the document.",
          strong:
            "The contract expires in June and must be renewed 60 days before that. Legal has not reviewed it yet.",
          why: [
            "Three names for one thing make a careful reader count three things. Pick one term, then let a pronoun carry it.",
            "Tres nombres para una misma cosa hacen que un lector cuidadoso cuente tres cosas. Elige un término y después deja que un pronombre lo cargue.",
          ],
        },
        {
          weak: "Finance added an approval step in January. Longer payment times for suppliers are being caused by this step.",
          strong:
            "Finance added an approval step in January. That step is slowing payments to suppliers.",
          why: [
            "The weak version opens its second sentence with the new information, so the reader meets <em>longer payment times</em> before knowing what they connect to. Start with <em>that step</em> and the link comes first.",
            "La versión débil abre la segunda oración con la información nueva, y el lector se topa con <em>longer payment times</em> antes de saber con qué se conecta. Empieza con <em>that step</em> y la conexión llega primero.",
          ],
        },
        {
          weak: "Priya will lead the pilot. Ten stores in Texas were chosen for the pilot. November 4 is when the stores start.",
          strong:
            "Priya will lead the pilot. The pilot covers ten stores in Texas, and those stores start on November 4.",
          why: [
            "A chain: <em>pilot</em> ends one sentence and begins the next; <em>stores</em> does the same. The date, which is the newest fact, lands last.",
            "Una cadena: <em>pilot</em> cierra una oración y abre la siguiente; <em>stores</em> hace lo mismo. La fecha, que es el dato más nuevo, cae al final.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: ["Connectors that carry logic", "Conectores que cargan lógica"],
      items: [
        {
          en: "The vendor missed the date, <b>so</b> we extended the pilot.",
          use: [
            "Result. The plain way to say <em>por lo tanto</em>, and fully professional in an email or a report.",
            "Resultado. La forma sencilla de decir <em>por lo tanto</em>, y totalmente profesional en un correo o un reporte.",
          ],
        },
        {
          en: "The numbers look good. <b>But</b> they cover only two weeks.",
          use: [
            "Contrast. A sentence may begin with <em>But</em>; careful American writers do it all the time, and it hits harder than <em>however</em>.",
            "Contraste. Una oración puede empezar con <em>But</em>; quienes escriben bien en Estados Unidos lo hacen todo el tiempo, y pega más fuerte que <em>however</em>.",
          ],
        },
        {
          en: "We chose the second option <b>because</b> it needs no new hires.",
          use: [
            "Reason. Shorter and clearer than <em>due to the fact that</em>.",
            "Razón. Más corto y más claro que <em>due to the fact that</em>.",
          ],
        },
        {
          en: "Sales rose 8%, <b>which means</b> we can fund the second hire.",
          use: [
            "The <em>so what</em>. Attaches the meaning directly to the fact.",
            "El <em>so what</em>. Pega el significado directamente al dato.",
          ],
        },
        {
          en: "We did not cut the budget. <b>Instead</b>, we moved the spending to Q4.",
          use: ["Replacement: not that, this.", "Sustitución: eso no, esto sí."],
        },
        {
          en: "The test failed twice. <b>Even so</b>, I think the design is right.",
          use: [
            "Concession. You accept a fact and hold your position anyway.",
            "Concesión. Aceptas un hecho y aun así mantienes tu postura.",
          ],
        },
        {
          en: "Costs are up across the region. In Monterrey, <b>for example</b>, rent rose 15%.",
          use: [
            "Illustration. One concrete case right after a general statement.",
            "Ilustración. Un caso concreto justo después de una afirmación general.",
          ],
        },
        {
          en: "The plan works on paper. <b>That said</b>, it depends on one supplier.",
          use: [
            "Limits what you just said without withdrawing it.",
            "Le pone un límite a lo que acabas de decir, sin retirarlo.",
          ],
        },
        {
          en: "<b>If</b> we wait until June, we lose the summer season.",
          use: [
            "Condition. Often the most persuasive connector in a recommendation.",
            "Condición. Muchas veces es el conector más persuasivo en una recomendación.",
          ],
        },
        {
          en: "The first two phases went well. The third is where we are behind.",
          use: [
            "No connector at all. When the second sentence starts from a known idea, the logic is already visible and a connector would add nothing.",
            "Sin conector. Cuando la segunda oración arranca de una idea conocida, la lógica ya se ve y un conector no agregaría nada.",
          ],
        },
      ],
    },
    {
      t: "model",
      title: [
        "One wall of text, rebuilt as three paragraphs",
        "Un muro de texto, reconstruido en tres párrafos",
      ],
      context: [
        "Elena, an operations director, first sent this as a single block that opened with the history of the warehouse. This is her second version. The facts are the same; the paragraphs now do the organizing.",
        "Elena, directora de operaciones, mandó primero esto como un solo bloque que empezaba con la historia del almacén. Esta es su segunda versión. Los datos son los mismos; ahora los párrafos se encargan de organizar.",
      ],
      lines: [
        {
          en: "I recommend we keep the Guadalajara warehouse open through December.",
          note: [
            "Paragraph 1, first sentence: the point of the paragraph and of the whole email.",
            "Párrafo 1, primera oración: la idea del párrafo y de todo el correo.",
          ],
        },
        {
          en: "Closing it in September, as planned, would save about $45,000 in rent.",
          note: [
            "Starts from the known (<em>closing it</em>) and ends on the new number. She gives the other side's best argument first.",
            "Arranca de lo conocido (<em>closing it</em>) y termina en la cifra nueva. Presenta primero el mejor argumento de la otra postura.",
          ],
        },
        {
          en: "But that saving disappears if even 5% of holiday orders ship late, and last year our other two warehouses were full by mid-November.",
          note: [
            "<em>But</em> marks the turn. <em>That saving</em> picks up the end of the sentence before it.",
            "<em>But</em> marca el giro. <em>That saving</em> retoma el final de la oración anterior.",
          ],
        },
        {
          en: "<br>The extension itself is low risk.",
          note: [
            "New paragraph, new point, stated first. A reader skimming first sentences now has: keep it open; low risk.",
            "Párrafo nuevo, idea nueva, dicha al principio. Quien solo lea las primeras oraciones ya tiene: mantenerlo abierto; riesgo bajo.",
          ],
        },
        {
          en: "The landlord will renew the lease month to month at 10% above the current rate.",
          note: ["Evidence: one fact, with the number.", "Evidencia: un dato, con la cifra."],
        },
        {
          en: "That premium adds about $4,500 over three months, and we can leave in January with 30 days' notice.",
          note: [
            "<em>That premium</em>: <em>that</em> plus a noun, never alone. The sentence ends on the fact that matters most, the exit.",
            "<em>That premium</em>: <em>that</em> más un sustantivo, nunca solo. La oración termina en el dato que más importa: la salida.",
          ],
        },
        {
          en: "<br>I need your decision by August 15, because the landlord wants notice 30 days before the lease ends.",
          note: [
            "The ask gets its own short paragraph so it cannot be missed. <em>Because</em> gives the reason for the date.",
            "La petición tiene su propio párrafo corto para que no se pierda. <em>Because</em> da la razón de la fecha.",
          ],
        },
        {
          en: "If you agree, I will sign the extension that week.",
          note: ["Next step, with an owner.", "El siguiente paso, con responsable."],
        },
      ],
    },
    {
      t: "h",
      text: [
        "Bullets: when they help and when they hide",
        "Viñetas: cuándo ayudan y cuándo esconden",
      ],
    },
    {
      t: "list",
      items: [
        [
          "<b>Use bullets</b> when the items are the same kind of thing and stand apart: three dates, four steps, five names, a list of documents to send.",
          "<b>Usa viñetas</b> cuando los elementos son del mismo tipo y son independientes: tres fechas, cuatro pasos, cinco nombres, una lista de documentos por enviar.",
        ],
        [
          "<b>Use sentences</b> when one item causes, limits or contradicts another. A bullet list deletes exactly the words that hold reasoning together: <em>because</em>, <em>so</em>, <em>but</em>, <em>unless</em>.",
          "<b>Usa oraciones</b> cuando un elemento causa, limita o contradice a otro. Una lista con viñetas borra justo las palabras que sostienen el razonamiento: <em>because</em>, <em>so</em>, <em>but</em>, <em>unless</em>.",
        ],
        [
          "<b>Introduce every list</b> with a full sentence that says what the items are: <em>We need three documents from you by Friday.</em>",
          "<b>Presenta cada lista</b> con una oración completa que diga qué son los elementos: <em>We need three documents from you by Friday.</em>",
        ],
        [
          "<b>Keep the conclusion out of the list.</b> Your recommendation goes in a sentence above the bullets, where nobody can mistake it for one more item.",
          "<b>Deja la conclusión fuera de la lista.</b> Tu recomendación va en una oración arriba de las viñetas, donde nadie la confunda con un elemento más.",
        ],
      ],
    },
    {
      t: "trap",
      title: ["Connectors that translate and misfire", "Conectores que se traducen y fallan"],
      html: [
        "Formal Spanish leans on connectors to sound organized: <em>asimismo</em>, <em>por otro lado</em>, <em>en este sentido</em>, <em>cabe mencionar que</em>. Each has a dictionary translation, and that is the problem. <em>Moreover</em> and <em>furthermore</em> are uncommon in American business email and make a short message sound like a legal brief; write <em>also</em>, or nothing. <em>On the other hand</em> is not a neutral <em>por otro lado</em>: in English it announces a contrast, so if you use it to add one more point, the reader goes looking for a disagreement that is not there. <em>In this sense</em> and <em>It is worth mentioning that</em> can almost always be deleted. The test for any connector is to remove it. If the logic survives, the connector was decoration.",
        "El español formal se apoya en conectores para sonar ordenado: <em>asimismo</em>, <em>por otro lado</em>, <em>en este sentido</em>, <em>cabe mencionar que</em>. Todos tienen traducción de diccionario, y ese es el problema. <em>Moreover</em> y <em>furthermore</em> son poco comunes en el correo de negocios estadounidense y hacen que un mensaje corto suene a escrito legal; pon <em>also</em>, o nada. <em>On the other hand</em> no es un <em>por otro lado</em> neutro: en inglés anuncia un contraste, así que si lo usas para agregar un punto más, tu lector se pone a buscar un desacuerdo que no existe. <em>In this sense</em> e <em>It is worth mentioning that</em> casi siempre se pueden borrar. La prueba para cualquier conector es quitarlo. Si la lógica sobrevive, el conector era adorno.",
      ],
    },
    {
      t: "choice",
      title: ["Choose the sentence that does the work", "Elige la oración que hace el trabajo"],
      items: [
        {
          prompt: [
            "You are opening a paragraph in an update to your VP about hiring. Which first sentence is strongest?",
            "Vas a abrir un párrafo en una actualización para tu VP sobre contrataciones. ¿Cuál primera oración es la más fuerte?",
          ],
          options: [
            {
              en: "I would like to give you an update on the hiring process for the two analyst roles.",
              ok: false,
              why: [
                "It announces the topic. After reading it, your VP knows nothing new.",
                "Anuncia el tema. Después de leerla, tu VP no sabe nada nuevo.",
              ],
            },
            {
              en: "We have filled one of the two analyst roles, and the second will take until mid-July.",
              ok: true,
              why: [
                "A claim with the status and the date. The rest of the paragraph can explain why the second role is slow.",
                "Una afirmación con el estatus y la fecha. El resto del párrafo puede explicar por qué el segundo puesto va lento.",
              ],
            },
            {
              en: "As you know, we opened two analyst roles in April and have been interviewing since then.",
              ok: false,
              why: [
                "Background your VP already has. The point is still somewhere below.",
                "Antecedentes que tu VP ya conoce. La idea sigue más abajo.",
              ],
            },
          ],
        },
        {
          prompt: [
            "The sentence before was: <em>The client has asked for a second round of changes to the design.</em> Which sentence continues most smoothly?",
            "La oración anterior fue: <em>The client has asked for a second round of changes to the design.</em> ¿Cuál oración continúa con más fluidez?",
          ],
          options: [
            {
              en: "Two extra weeks and about $9,000 will be needed for these changes.",
              ok: false,
              why: [
                "It opens with the new information, so the reader meets the cost before knowing what it belongs to.",
                "Abre con la información nueva, y el lector se topa con el costo antes de saber a qué corresponde.",
              ],
            },
            {
              en: "These changes will add two weeks and about $9,000.",
              ok: true,
              why: [
                "Known first (<em>these changes</em>), new last (time and cost). Active verb, nothing wasted.",
                "Primero lo conocido (<em>these changes</em>), al final lo nuevo (tiempo y costo). Verbo activo, nada de sobra.",
              ],
            },
            {
              en: "This will add two weeks and about $9,000.",
              ok: false,
              why: [
                "Close, but <em>this</em> alone could mean the request or the changes. One more word removes the doubt.",
                "Casi, pero un <em>this</em> solo puede ser la solicitud o los cambios. Una palabra más quita la duda.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You are adding a second reason to a recommendation in an email. Which version fits?",
            "Vas a agregar una segunda razón a una recomendación en un correo. ¿Cuál versión queda mejor?",
          ],
          options: [
            {
              en: "On the other hand, the new supplier offers 60-day payment terms.",
              ok: false,
              why: [
                "<em>On the other hand</em> signals a contrast. The reader expects an argument against your recommendation and gets one in favor.",
                "<em>On the other hand</em> anuncia un contraste. El lector espera un argumento en contra de tu recomendación y recibe uno a favor.",
              ],
            },
            {
              en: "Furthermore, the new supplier offers 60-day payment terms.",
              ok: false,
              why: [
                "The logic is right and the register is wrong: heavy for an email between colleagues.",
                "La lógica es correcta y el registro no: pesado para un correo entre colegas.",
              ],
            },
            {
              en: "The new supplier also offers 60-day payment terms.",
              ok: true,
              why: [
                "<em>Also</em>, inside the sentence, adds the point in one quiet word.",
                "<em>Also</em>, dentro de la oración, agrega el punto con una sola palabra discreta.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You have to explain why a project is late. The three facts depend on each other. Which version shows that?",
            "Tienes que explicar por qué va atrasado un proyecto. Los tres hechos dependen uno del otro. ¿Cuál versión lo muestra?",
          ],
          options: [
            {
              en: "Reasons for the delay: vendor API change; two weeks of rework; QA rescheduled.",
              ok: false,
              why: [
                "A list presents three separate causes. In reality it is one chain, and the list hides that.",
                "Una lista presenta tres causas separadas. En realidad es una sola cadena, y la lista lo esconde.",
              ],
            },
            {
              en: "The vendor changed its API in May, which forced two weeks of rework. Because of that rework, QA could not start until June 10.",
              ok: true,
              why: [
                "<em>Which forced</em> and <em>because of that rework</em> show the chain. The reader sees one cause, not three.",
                "<em>Which forced</em> y <em>because of that rework</em> muestran la cadena. El lector ve una causa, no tres.",
              ],
            },
            {
              en: "Several factors contributed to the delay, including a vendor API change, rework and QA scheduling.",
              ok: false,
              why: [
                "It is a sentence, but it is still a list. <em>Several factors</em> says nothing about how they relate.",
                "Es una oración, pero sigue siendo una lista. <em>Several factors</em> no dice nada sobre cómo se relacionan.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You just finished a paragraph on the pilot results. The next paragraph asks for budget. Which first sentence links the two?",
            "Acabas de terminar un párrafo sobre los resultados del piloto. El siguiente pide presupuesto. ¿Cuál primera oración une los dos?",
          ],
          options: [
            {
              en: "Moreover, I would like to request additional budget.",
              ok: false,
              why: [
                "<em>Moreover</em> claims a connection without showing one, and the request has no number.",
                "<em>Moreover</em> afirma que hay una conexión sin mostrarla, y la petición no trae cifra.",
              ],
            },
            {
              en: "Based on those results, I am asking for $25,000 to extend the pilot to ten more stores.",
              ok: true,
              why: [
                "It starts from the known (<em>those results</em>) and states the new point in full: how much and for what.",
                "Arranca de lo conocido (<em>those results</em>) y dice completa la idea nueva: cuánto y para qué.",
              ],
            },
            {
              en: "Now I will turn to the question of the budget.",
              ok: false,
              why: [
                "It announces a topic. The reader learns that budget is coming, not what you want.",
                "Anuncia un tema. El lector se entera de que viene el presupuesto, no de qué quieres.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "rewrite",
      title: ["Rebuild these paragraphs", "Reconstruye estos párrafos"],
      items: [
        {
          task: [
            "Give this paragraph a first sentence that states its point. You may combine the rest.",
            "Dale a este párrafo una primera oración que diga su idea. Puedes combinar el resto.",
          ],
          before:
            "I am writing regarding the training sessions. We ran four sessions in October. Attendance was 35% on average. Most managers said the sessions were scheduled during their busiest hours.",
          after:
            "The October training did not reach most managers, mainly because of when we scheduled it. Attendance across the four sessions averaged 35%, and most managers told us the sessions fell during their busiest hours.",
          why: [
            "The original lists facts and leaves the conclusion to the reader. The new first sentence states the conclusion and the cause; the facts now read as proof.",
            "El original enlista hechos y le deja la conclusión al lector. La nueva primera oración dice la conclusión y la causa; ahora los hechos se leen como prueba.",
          ],
        },
        {
          task: [
            "Reorder the second and third sentences so each starts from something the reader already knows.",
            "Reordena la segunda y la tercera oración para que cada una arranque de algo que el lector ya sabe.",
          ],
          before:
            "We moved payroll to a new provider in January. Three errors in February paychecks were caused by the new provider. HR spent 20 hours fixing the errors.",
          after:
            "We moved payroll to a new provider in January. That provider made three errors in February paychecks, and fixing those errors took HR 20 hours.",
          why: [
            "<em>That provider</em> and <em>those errors</em> pick up what came before, and each clause ends on its new fact: the three errors, the 20 hours.",
            "<em>That provider</em> y <em>those errors</em> retoman lo anterior, y cada parte termina en su dato nuevo: los tres errores, las 20 horas.",
          ],
        },
        {
          task: [
            "Remove the decorative connectors. Keep only the ones that show logic.",
            "Quita los conectores de adorno. Deja solo los que muestran lógica.",
          ],
          before:
            "The pilot was small. However, the results were clear. Moreover, the team liked the tool. Furthermore, the cost is low. Therefore, I recommend that we expand it.",
          after:
            "The pilot was small, but the results were clear and the team liked the tool. The cost is low, so I recommend we expand it.",
          why: [
            "Four heavy connectors became <em>but</em> and <em>so</em>, the only two logical relations in the paragraph. Five sentences of the same length became two that move.",
            "Cuatro conectores pesados se convirtieron en <em>but</em> y <em>so</em>, las únicas dos relaciones lógicas del párrafo. Cinco oraciones del mismo tamaño se volvieron dos que avanzan.",
          ],
        },
        {
          task: [
            "These four bullets hide the reasoning. Write them as two sentences that show how the facts connect and what you recommend.",
            "Estas cuatro viñetas esconden el razonamiento. Escríbelas como dos oraciones que muestren cómo se conectan los hechos y qué recomiendas.",
          ],
          before:
            "• Sales down 6% in Q2<br>• Price increase in March<br>• New competitor in April<br>• Discount?",
          after:
            "Sales fell 6% in Q2, after our March price increase and the arrival of a new competitor in April. I think the price increase is the larger cause, so I recommend a targeted discount for our ten largest accounts.",
          why: [
            "Sentences force you to state what the bullets let you skip: which fact caused which, and what you think should happen. Your version may reach a different conclusion; what matters is that it states one.",
            "Las oraciones te obligan a decir lo que las viñetas te dejan saltarte: qué hecho causó cuál y qué crees que debe pasar. Tu versión puede llegar a otra conclusión; lo que importa es que diga una.",
          ],
        },
        {
          task: [
            "This block contains two points. Split it into two paragraphs, each with a first sentence that states its point.",
            "Este bloque trae dos ideas. Divídelo en dos párrafos, cada uno con una primera oración que diga su idea.",
          ],
          before:
            "The new CRM is working well and the sales team is using it every day and the reports are faster and we have fewer duplicate records, but we also need to talk about the license because it expires in December and the renewal price is 20% higher, so we need to decide if we renew or look at other options.",
          after:
            "The new CRM is working well. The sales team uses it every day, reports are faster, and we have fewer duplicate records.<br><br>We need to decide on the license by November. It expires in December and the renewal price is 20% higher, so our choices are to negotiate or to look at other options.",
          why: [
            "One paragraph for the good news, one for the decision. Read only the two first sentences and you have the whole message.",
            "Un párrafo para la buena noticia y otro para la decisión. Lee solo las dos primeras oraciones y ya tienes todo el mensaje.",
          ],
        },
      ],
    },
    {
      t: "takeaways",
      items: [
        [
          "One paragraph, one point. If you need <em>and</em> to state the point, split the paragraph.",
          "Un párrafo, una idea. Si necesitas <em>and</em> para decir la idea, divide el párrafo.",
        ],
        [
          "The first sentence is a claim, not a topic. A reader who reads only first sentences should still get your message.",
          "La primera oración es una afirmación, no un tema. Quien lea solo las primeras oraciones debe llevarse tu mensaje.",
        ],
        [
          "Start each sentence with something known and end it on something new. Repeat the key term; never leave <em>this</em> alone.",
          "Empieza cada oración con algo conocido y termínala en algo nuevo. Repite el término clave; nunca dejes un <em>this</em> solo.",
        ],
        [
          "Connectors must carry logic: <em>so</em>, <em>but</em>, <em>because</em>, <em>if</em>. If you can delete one and lose nothing, delete it.",
          "Los conectores deben cargar lógica: <em>so</em>, <em>but</em>, <em>because</em>, <em>if</em>. Si puedes borrar uno sin perder nada, bórralo.",
        ],
        [
          "Bullets are for separate, parallel items. Reasoning needs sentences.",
          "Las viñetas son para elementos separados y paralelos. El razonamiento necesita oraciones.",
        ],
      ],
    },
  ],
};
