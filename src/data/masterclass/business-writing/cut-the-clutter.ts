import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "cut-the-clutter",
  slugEs: "quitar-lo-que-sobra",
  title: ["Cut the Clutter", "Quita lo que Sobra"],
  summary: [
    "Remove the words that carry nothing: empty openers, doubled words, buried verbs, and passives that hide who acts.",
    "Quita las palabras que no cargan nada: aperturas vacías, palabras dobles, verbos enterrados y pasivas que esconden quién actúa.",
  ],
  description: [
    "Cut business writing to the words that carry meaning: empty openers, wordy phrases, buried verbs, there is and it is, and when to keep the passive.",
    "Reduce tu inglés de negocios a las palabras que sí dicen algo: aperturas vacías, frases largas, verbos enterrados y cuándo conservar la voz pasiva.",
  ],
  minutes: 17,
  blocks: [
    {
      t: "p",
      html: [
        "Your message is correct, complete and polite, and it runs to two hundred words. The reader needed eighty. The other hundred and twenty are not wrong. They are phrases that sound professional and say nothing: <em>I am writing to inform you that</em>, <em>at this point in time</em>, <em>it is important to mention</em>. Each one is a small delay between the reader and your point, and a page of small delays reads as a slow writer.",
        "Tu mensaje es correcto, completo y amable, y tiene doscientas palabras. Tu lector necesitaba ochenta. Las otras ciento veinte no están mal. Son frases que suenan profesionales y no dicen nada: <em>I am writing to inform you that</em>, <em>at this point in time</em>, <em>it is important to mention</em>. Cada una es un pequeño retraso entre tu lector y tu punto, y una página de pequeños retrasos da la impresión de alguien que escribe lento.",
      ],
    },
    {
      t: "idea",
      title: [
        "Every word either carries meaning or costs attention",
        "Cada palabra carga significado o cuesta atención",
      ],
      html: [
        "Concise does not mean short. A long message is fine if every sentence gives the reader something. Concise means no word is there only to fill space. <b>The deletion test:</b> take the phrase out and read the sentence again. If the reader loses no fact, no logic and no courtesy, the phrase was clutter. Clutter comes in five kinds: empty openers, wordy phrases, buried verbs, <em>there is</em> and <em>it is</em> starts, and passives that hide the person who acts. Learn to see the five and most drafts lose a third of their words.",
        "Conciso no quiere decir corto. Un mensaje largo está bien si cada oración le da algo a tu lector. Conciso quiere decir que ninguna palabra está ahí solo para llenar espacio. <b>La prueba de quitar:</b> saca la frase y vuelve a leer la oración. Si tu lector no pierde ningún dato, nada de lógica y nada de cortesía, la frase era relleno. El relleno viene en cinco tipos: aperturas vacías, frases largas, verbos enterrados, inicios con <em>there is</em> e <em>it is</em>, y pasivas que esconden a quien actúa. Aprende a ver los cinco y la mayoría de tus borradores pierde una tercera parte de sus palabras.",
      ],
    },
    {
      t: "compare",
      title: ["Empty openers", "Aperturas vacías"],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "I am writing to inform you that the shipment arrived this morning.",
          strong: "The shipment arrived this morning.",
          why: [
            "The reader can see that you are writing and that you are informing them. Seven words gone, nothing lost.",
            "Tu lector ya ve que estás escribiendo y que le estás informando. Siete palabras menos y no se perdió nada.",
          ],
        },
        {
          weak: "I would like to take this opportunity to thank you for your support during the audit.",
          strong: "Thank you for your support during the audit.",
          why: [
            "Announcing that you are about to thank someone is weaker than thanking them.",
            "Anunciar que vas a agradecer es más débil que agradecer.",
          ],
        },
        {
          weak: "Please be advised that the office will be closed on Monday.",
          strong: "The office will be closed on Monday.",
          why: [
            "<em>Please be advised that</em> belongs to legal notices. In an ordinary message it adds distance and four words.",
            "<em>Please be advised that</em> es de avisos legales. En un mensaje normal agrega distancia y cuatro palabras.",
          ],
        },
        {
          weak: "It is important to mention that the price does not include installation.",
          strong: "The price does not include installation.",
          why: [
            "If it were not important, you would not be mentioning it. When a fact needs emphasis, give it its own short sentence or put it first.",
            "Si no fuera importante, no lo estarías mencionando. Cuando un dato necesita énfasis, dale su propia oración corta o ponlo primero.",
          ],
        },
        {
          weak: "As I mentioned in my previous email, we are still waiting for the signed form.",
          strong: "We're still waiting for the signed form.",
          why: [
            "Pointing back to your earlier email takes space and can sound like a complaint. <em>Still</em> already tells the reader this is not the first time.",
            "Remitir a tu correo anterior ocupa espacio y puede sonar a reclamo. <em>Still</em> ya le dice a tu lector que no es la primera vez.",
          ],
        },
        {
          weak: "I just wanted to check in and see if you had a chance to review the proposal.",
          strong: "Have you had a chance to review the proposal?",
          why: [
            "<em>I just wanted to check in and see if</em> is a run-up to a question. Ask the question.",
            "<em>I just wanted to check in and see if</em> es tomar vuelo para una pregunta. Haz la pregunta.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: [
        "Swap list: the long phrase and its one-word replacement",
        "Lista de cambios: la frase larga y la palabra que la reemplaza",
      ],
      items: [
        {
          en: "due to the fact that → because",
          use: [
            "Also for <em>owing to the fact that</em> and <em>in light of the fact that</em>.",
            "También para <em>owing to the fact that</em> e <em>in light of the fact that</em>.",
          ],
        },
        {
          en: "in the event that → if",
          use: ["A condition needs one word.", "Una condición necesita una sola palabra."],
        },
        {
          en: "at this point in time → now",
          use: [
            "Also <em>at the present time</em> and <em>currently at this moment</em>. Often you can delete it entirely; the present tense already says <em>now</em>.",
            "También <em>at the present time</em> y <em>currently at this moment</em>. Muchas veces puedes borrarla completa; el presente ya dice <em>now</em>.",
          ],
        },
        {
          en: "with regard to / in relation to → about",
          use: [
            "The direct heirs of <em>con respecto a</em> and <em>en relación con</em>.",
            "Herederas directas de <em>con respecto a</em> y <em>en relación con</em>.",
          ],
        },
        {
          en: "despite the fact that → although",
          use: [
            "Any phrase built on <em>the fact that</em> can usually be replaced.",
            "Cualquier frase construida sobre <em>the fact that</em> por lo general se puede reemplazar.",
          ],
        },
        {
          en: "has the ability to / is in a position to → can",
          use: [
            "And <em>is not in a position to</em> becomes <em>can't</em>.",
            "E <em>is not in a position to</em> se vuelve <em>can't</em>.",
          ],
        },
        {
          en: "is in the process of reviewing → is reviewing",
          use: [
            "The <em>-ing</em> form already says the action is in progress.",
            "La forma <em>-ing</em> ya dice que la acción está en curso.",
          ],
        },
        {
          en: "on a monthly basis → monthly / every month",
          use: [
            "Same for <em>on a daily basis</em> and <em>on a regular basis</em>.",
            "Lo mismo para <em>on a daily basis</em> y <em>on a regular basis</em>.",
          ],
        },
        {
          en: "a large number of → many",
          use: ["Or better, the number itself.", "O mejor todavía, el número exacto."],
        },
        {
          en: "each and every → every",
          use: [
            "A doubled pair. Others: <em>first and foremost</em> (first), <em>any and all</em> (any).",
            "Un par duplicado. Otros: <em>first and foremost</em> (first), <em>any and all</em> (any).",
          ],
        },
        {
          en: "end result → result",
          use: [
            "The extra word repeats what the noun already means. Others: <em>future plans, past experience, final outcome, collaborate together, repeat again</em>.",
            "La palabra extra repite lo que el sustantivo ya significa. Otros: <em>future plans, past experience, final outcome, collaborate together, repeat again</em>.",
          ],
        },
      ],
    },
    {
      t: "framework",
      title: ["Unbury the verb", "Desentierra el verbo"],
      lead: [
        "Formal Spanish likes to turn actions into nouns: <em>la realización, la implementación, la revisión</em>. English allows it too, but each one buries the action and adds three or four words around it. This is the single most productive fix in this lesson.",
        "El español formal tiende a convertir las acciones en sustantivos: la realización, la implementación, la revisión. El inglés también lo permite, pero cada uno entierra la acción y le suma tres o cuatro palabras alrededor. Es la corrección que más rinde en esta lección.",
      ],
      steps: [
        {
          label: [
            "Find the noun that is hiding an action",
            "Encuentra el sustantivo que esconde una acción",
          ],
          html: [
            "Look for endings such as <b>-tion, -ment, -ance, -al</b> and <b>-sis</b>, usually propped up by a weak verb: <em>make, do, give, have, take, carry out, perform, conduct, provide</em>. In <em>We carried out an evaluation of the three proposals</em>, the action is inside <em>evaluation</em>.",
            "Busca terminaciones como <b>-tion, -ment, -ance, -al</b> y <b>-sis</b>, casi siempre sostenidas por un verbo débil: <em>make, do, give, have, take, carry out, perform, conduct, provide</em>. En <em>We carried out an evaluation of the three proposals</em>, la acción está dentro de <em>evaluation</em>.",
          ],
          say: "We evaluated the three proposals.",
        },
        {
          label: ["Ask who does what", "Pregunta quién hace qué"],
          html: [
            "A buried verb often has no person attached. In <em>The implementation of the new policy will take place in March</em>, nobody implements. Name the person or team and make them the subject.",
            "Un verbo enterrado muchas veces no tiene persona. En <em>The implementation of the new policy will take place in March</em>, nadie implementa. Nombra a la persona o al equipo y vuélvelos el sujeto.",
          ],
          say: "HR will implement the new policy in March.",
        },
        {
          label: ["Break the chain of <em>of</em>", "Rompe la cadena de <em>of</em>"],
          html: [
            "Buried verbs travel in chains: <em>the reduction of the time of delivery of the orders</em>. Once the verb is back, most of the <em>of</em> phrases fold into a noun or disappear.",
            "Los verbos enterrados viajan en cadena: <em>the reduction of the time of delivery of the orders</em>. Cuando el verbo regresa, la mayoría de las frases con <em>of</em> se pliegan en un sustantivo o desaparecen.",
          ],
          say: "We need to reduce delivery times.",
        },
        {
          label: [
            "Keep the noun when it names a topic",
            "Conserva el sustantivo cuando nombra un tema",
          ],
          html: [
            "The noun form is right when you are referring to something already described, as a thing you can now say something about.",
            "La forma de sustantivo es correcta cuando te refieres a algo que ya describiste, como una cosa de la que ahora puedes decir algo.",
          ],
          say: "We implemented the policy in March. The implementation took six weeks.",
        },
      ],
    },
    {
      t: "compare",
      title: [
        "Buried verbs and empty starts, repaired",
        "Verbos enterrados e inicios vacíos, reparados",
      ],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "We made the decision to proceed with the cancellation of the contract.",
          strong: "We decided to cancel the contract.",
          why: [
            "Two buried verbs, <em>decision</em> and <em>cancellation</em>, and a filler, <em>proceed with</em>. Twelve words became six.",
            "Dos verbos enterrados, <em>decision</em> y <em>cancellation</em>, y un relleno, <em>proceed with</em>. Doce palabras se volvieron seis.",
          ],
        },
        {
          weak: "The team performed an analysis of the reasons for the increase in returns.",
          strong: "The team analyzed why returns increased.",
          why: [
            "<em>Analysis</em> and <em>increase</em> go back to being verbs, and <em>the reasons for</em> becomes <em>why</em>.",
            "<em>Analysis</em> e <em>increase</em> vuelven a ser verbos, y <em>the reasons for</em> se vuelve <em>why</em>.",
          ],
        },
        {
          weak: "The realization of the inventory count will be done by the night shift.",
          strong: "The night shift will count the inventory.",
          why: [
            "A word-for-word copy of <em>la realización del conteo</em>. English rarely uses <em>realization</em> this way. The verb you want is inside <em>count</em>.",
            "Copia palabra por palabra de <em>la realización del conteo</em>. El inglés casi nunca usa <em>realization</em> así. El verbo que quieres está dentro de <em>count</em>.",
          ],
        },
        {
          weak: "There are three vendors that meet our requirements.",
          strong: "Three vendors meet our requirements.",
          why: [
            "<em>There are… that</em> delays the real subject and spends the main verb on <em>are</em>. Delete both and the sentence stands.",
            "<em>There are… that</em> retrasa el sujeto real y gasta el verbo principal en <em>are</em>. Borra los dos y la oración se sostiene.",
          ],
        },
        {
          weak: "It is necessary that all managers complete the training before June.",
          strong: "All managers must complete the training before June.",
          why: [
            "<em>It is necessary that</em>, from <em>es necesario que</em>, is one word in English: <em>must</em>. Or <em>need to</em>, which is softer.",
            "<em>It is necessary that</em>, de <em>es necesario que</em>, en inglés es una sola palabra: <em>must</em>. O <em>need to</em>, que es más suave.",
          ],
        },
        {
          weak: "It is our belief that there is a need for a revision of the pricing.",
          strong: "We think the pricing needs to be revised.",
          why: [
            "An <em>it is</em> start, a <em>there is</em> start and two buried verbs in one sentence. Start with the people who believe it.",
            "Un inicio con <em>it is</em>, otro con <em>there is</em> y dos verbos enterrados en una sola oración. Empieza con las personas que lo piensan.",
          ],
        },
        {
          weak: "The reason why we lost the account is because the price was too high.",
          strong: "We lost the account because the price was too high.",
          why: [
            "<em>The reason</em>, <em>why</em> and <em>because</em> all say the same thing. Say it once.",
            "<em>The reason</em>, <em>why</em> y <em>because</em> dicen lo mismo. Dilo una vez.",
          ],
        },
      ],
    },
    {
      t: "compare",
      title: ["The passive that hides who acts", "La pasiva que esconde quién actúa"],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "The report will be reviewed and comments will be sent.",
          strong: "Marcus will review the report and send comments by Thursday.",
          why: [
            "The passive let the writer skip two facts the reader needs: who and when. Writing it in the active forces you to supply them.",
            "La pasiva le permitió a quien escribió saltarse dos datos que su lector necesita: quién y cuándo. Escribirla en activa te obliga a darlos.",
          ],
        },
        {
          weak: "A decision was made to postpone the launch.",
          strong: "The leadership team decided to postpone the launch.",
          why: [
            "A decision with no decider sounds evasive, and the reader does not know whom to ask about it.",
            "Una decisión sin quien la tome suena evasiva, y tu lector no sabe a quién preguntarle.",
          ],
        },
        {
          weak: "It was agreed that the vendor would be contacted.",
          strong: "We agreed that Elena would contact the vendor.",
          why: [
            "Two passives, no owner. After a meeting, this is how tasks get lost.",
            "Dos pasivas y ningún responsable. Después de una junta, así es como se pierden las tareas.",
          ],
        },
        {
          weak: "Your order was shipped to the wrong address by our warehouse.",
          strong: "Our warehouse shipped your order to the wrong address.",
          why: [
            "When you do name the actor, <em>by</em> at the end is the long way around. Put the actor first.",
            "Cuando sí nombras a quien actúa, <em>by</em> al final es el camino largo. Pon primero a quien actúa.",
          ],
        },
        {
          weak: "The form must be signed before Friday.",
          strong: "Please sign the form before Friday.",
          why: [
            "If the reader is the one who has to act, tell them directly. The passive leaves them wondering whether it is their job.",
            "Si tu lector es quien tiene que actuar, díselo directamente. La pasiva lo deja con la duda de si le toca.",
          ],
        },
      ],
    },
    {
      t: "list",
      items: [
        [
          "<b>Keep the passive when the actor is unknown or obvious.</b> <em>Your payment was received on March 3.</em> Nobody needs to know which clerk received it.",
          "<b>Conserva la pasiva cuando quien actúa es desconocido u obvio.</b> <em>Your payment was received on March 3.</em> Nadie necesita saber qué persona lo recibió.",
        ],
        [
          "<b>Keep it when the thing acted on is your topic.</b> <em>The Monterrey plant was built in 2019 and expanded last year.</em> The paragraph is about the plant, so the plant stays as the subject.",
          "<b>Consérvala cuando la cosa que recibe la acción es tu tema.</b> <em>The Monterrey plant was built in 2019 and expanded last year.</em> El párrafo trata de la planta, así que la planta sigue siendo el sujeto.",
        ],
        [
          "<b>Keep it when naming the person would only assign blame.</b> <em>The wrong file was attached to yesterday's email.</em> The reader needs the correction, and the name adds nothing.",
          "<b>Consérvala cuando nombrar a la persona solo serviría para culpar.</b> <em>The wrong file was attached to yesterday's email.</em> Tu lector necesita la corrección, y el nombre no agrega nada.",
        ],
        [
          "<b>The test:</b> after a passive verb, ask <em>by whom?</em> If the reader needs that answer in order to act and the sentence does not give it, rewrite it in the active.",
          "<b>La prueba:</b> después de un verbo en pasiva, pregunta <em>by whom?</em> Si tu lector necesita esa respuesta para actuar y la oración no la da, reescríbela en activa.",
        ],
      ],
    },
    {
      t: "model",
      title: ["Before: a weekly update, 96 words", "Antes: un informe semanal de 96 palabras"],
      context: [
        "Marcus sends his director a routine update on a CRM rollout. Every sentence is grammatical. The notes name each kind of clutter.",
        "Marcus le manda a su directora un informe de rutina sobre la implementación de un CRM. Todas las oraciones son gramaticales. Las notas nombran cada tipo de relleno.",
      ],
      lines: [
        {
          en: "I am writing to provide you with an update regarding the current status of the implementation of the new CRM.",
          note: [
            "Empty opener, <em>regarding</em>, a buried verb, and <em>current status</em>, where <em>status</em> is always current.",
            "Apertura vacía, <em>regarding</em>, un verbo enterrado y <em>current status</em>, cuando <em>status</em> siempre es actual.",
          ],
        },
        {
          en: "At this point in time, the migration of the data has been completed by the IT team, and it is important to mention that there were no major issues that were detected.",
          note: [
            "Wordy phrase, buried verb (<em>migration</em>), passive with <em>by</em>, an <em>it is important</em> start and a <em>there were… that</em> start.",
            "Frase larga, verbo enterrado (<em>migration</em>), pasiva con <em>by</em>, un inicio con <em>it is important</em> y otro con <em>there were… that</em>.",
          ],
        },
        {
          en: "With regard to the training of the users, there are four sessions that have been scheduled for next week.",
          note: [
            "Topic announcement, chain of <em>of</em>, <em>there are… that</em>, and a passive with no actor.",
            "Anuncio de tema, cadena de <em>of</em>, <em>there are… that</em> y una pasiva sin quien actúe.",
          ],
        },
        {
          en: "Due to the fact that two of the sales managers will be traveling, a decision was made to record each and every session.",
          note: [
            "<em>Due to the fact that</em>, a decision nobody made, and a doubled pair.",
            "<em>Due to the fact that</em>, una decisión que nadie tomó y un par duplicado.",
          ],
        },
        {
          en: "In the event that you have any questions or doubts, please do not hesitate to contact me.",
          note: [
            "<em>In the event that</em>, two words for one idea, and a closing formula.",
            "<em>In the event that</em>, dos palabras para una idea y una fórmula de cierre.",
          ],
        },
      ],
    },
    {
      t: "model",
      title: ["After: the same update, 37 words", "Después: el mismo informe en 37 palabras"],
      context: [
        "No fact was removed. The courtesy is intact. The reader finishes in a third of the time.",
        "No se quitó ningún dato. La cortesía sigue intacta. Tu lectora termina en la tercera parte del tiempo.",
      ],
      lines: [
        {
          en: "Here's this week's CRM update.",
          note: ["Five words in place of twenty.", "Cinco palabras en lugar de veinte."],
        },
        {
          en: "IT finished migrating the data and found no major issues.",
          note: [
            "The actor is the subject, and both verbs are back.",
            "Quien actúa es el sujeto, y los dos verbos regresaron.",
          ],
        },
        {
          en: "We scheduled four user training sessions for next week.",
          note: [
            "<em>The training of the users</em> folded into <em>user training</em>.",
            "<em>The training of the users</em> se plegó en <em>user training</em>.",
          ],
        },
        {
          en: "Two sales managers will be traveling, so we'll record every session.",
          note: [
            "<em>So</em> does the work of <em>due to the fact that</em>, and <em>we</em> owns the decision.",
            "<em>So</em> hace el trabajo de <em>due to the fact that</em>, y <em>we</em> asume la decisión.",
          ],
        },
        {
          en: "Let me know if you have questions.",
          note: ["Still friendly, in seven words.", "Sigue siendo amable, en siete palabras."],
        },
      ],
    },
    {
      t: "trap",
      title: [
        "Length as courtesy, and the passive with <em>se</em>",
        "La longitud como cortesía y la pasiva con <em>se</em>",
      ],
      html: [
        "Two Spanish habits produce most of this clutter. The first is that in Spanish business writing a fuller sentence shows care and seriousness, and a very short one can feel curt. English readers hear it the other way: the short version sounds confident and considerate, and the long one sounds like someone working up to the point. The second is <em>se</em>. Spanish says <em>se decidió</em>, <em>se enviará el reporte</em>, <em>se revisaron los datos</em>, and nobody misses the actor. Translated directly, these become <em>it was decided</em>, <em>the report will be sent</em>, <em>the data was reviewed</em>, a row of passives with no one in them. Each time you write one, ask who. A caution as well: cutting is not the same as being cold. Keep <em>please</em>, keep <em>thanks</em>, keep the fact the reader needs. Cut the words around them.",
        "Dos costumbres del español producen casi todo este relleno. La primera: en la escritura de negocios en español, una oración más completa demuestra cuidado y seriedad, y una muy corta puede sentirse cortante. Los lectores de inglés lo oyen al revés: la versión corta suena segura y considerada, y la larga suena a alguien que todavía va llegando al punto. La segunda es <em>se</em>. En español decimos se decidió, se enviará el reporte, se revisaron los datos, y nadie extraña a quien actúa. Traducidas directamente se vuelven <em>it was decided</em>, <em>the report will be sent</em>, <em>the data was reviewed</em>: una hilera de pasivas sin nadie adentro. Cada vez que escribas una, pregunta quién. Y una advertencia: recortar no es lo mismo que ser frío. Conserva <em>please</em>, conserva <em>thanks</em>, conserva el dato que tu lector necesita. Recorta las palabras de alrededor.",
      ],
    },
    {
      t: "choice",
      title: ["Choose the best version", "Elige la mejor versión"],
      items: [
        {
          prompt: [
            "You are telling the whole office that the building is closed Monday for maintenance.",
            "Le avisas a toda la oficina que el edificio cierra el lunes por mantenimiento.",
          ],
          options: [
            {
              en: "Please be advised that the office will be closed on Monday due to the fact that maintenance work will be carried out.",
              ok: false,
              why: [
                "Twenty-one words for a nine-word fact: an empty opener, <em>due to the fact that</em>, and a passive built on <em>carried out</em>.",
                "Veintiún palabras para un dato de nueve: una apertura vacía, <em>due to the fact that</em> y una pasiva construida sobre <em>carried out</em>.",
              ],
            },
            {
              en: "The office will be closed on Monday for maintenance.",
              ok: true,
              why: [
                "The whole fact in one clean sentence. The passive is right here: the office is the topic, and who closes it does not matter.",
                "Todo el dato en una oración limpia. Aquí la pasiva es correcta: la oficina es el tema y no importa quién la cierra.",
              ],
            },
            {
              en: "Office closed Monday. Maintenance.",
              ok: false,
              why: [
                "This cuts past the clutter into the grammar. It reads like a sign on a door. Concise sentences are still sentences.",
                "Esto recorta más allá del relleno y llega a la gramática. Se lee como un letrero en la puerta. Las oraciones concisas siguen siendo oraciones.",
              ],
            },
          ],
        },
        {
          prompt: [
            "After a meeting, you are confirming who does what. Luis has the contract; Dana talks to the client.",
            "Después de una junta, confirmas quién hace qué. A Luis le toca el contrato; Dana habla con el cliente.",
          ],
          options: [
            {
              en: "The contract will be reviewed, and the client will be informed of the changes.",
              ok: false,
              why: [
                "Two tasks and no owners. A week later, each person will assume the other one had it.",
                "Dos tareas y ningún responsable. Una semana después, cada quien va a suponer que le tocaba a la otra persona.",
              ],
            },
            {
              en: "A review of the contract will be done by Luis, and communication of the changes to the client will be handled by Dana.",
              ok: false,
              why: [
                "The names are there, but each one arrives at the end of a passive with a buried verb in front of it.",
                "Los nombres están, pero cada uno llega al final de una pasiva con un verbo enterrado por delante.",
              ],
            },
            {
              en: "Luis will review the contract, and Dana will tell the client about the changes by Friday.",
              ok: true,
              why: [
                "Person, verb, object, twice, plus a date. Nobody can misread whose job is whose.",
                "Persona, verbo, objeto, dos veces, más una fecha. Nadie puede confundir a quién le toca qué.",
              ],
            },
          ],
        },
        {
          prompt: [
            "A client asks whether their payment arrived. It did, on March 3.",
            "Un cliente pregunta si llegó su pago. Sí llegó, el 3 de marzo.",
          ],
          options: [
            {
              en: "Yes. Your payment was received on March 3.",
              ok: true,
              why: [
                "A passive worth keeping. The payment is the topic, and the client does not need to know who received it.",
                "Una pasiva que vale la pena conservar. El pago es el tema, y el cliente no necesita saber quién lo recibió.",
              ],
            },
            {
              en: "Yes. Our accounts receivable department received your payment on March 3.",
              ok: false,
              why: [
                "Active, but the actor is information the client never asked for. Active is a default, and this is one of the exceptions.",
                "Está en activa, pero quien actúa es información que el cliente nunca pidió. La activa es la opción por omisión, y esta es una de las excepciones.",
              ],
            },
            {
              en: "We are writing to confirm that the reception of your payment took place on March 3.",
              ok: false,
              why: [
                "An empty opener and a buried verb. <em>Reception</em> is also the wrong word; the noun for receiving a payment is <em>receipt</em>.",
                "Una apertura vacía y un verbo enterrado. Además <em>reception</em> es la palabra equivocada; el sustantivo para recibir un pago es <em>receipt</em>.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You want to raise the idea of cutting the travel budget with your team.",
            "Quieres plantearle a tu equipo la idea de recortar el presupuesto de viajes.",
          ],
          options: [
            {
              en: "We need to have a discussion about the reduction of the travel budget.",
              ok: false,
              why: [
                "Two buried verbs: <em>have a discussion</em> is <em>discuss</em>, and <em>the reduction of</em> is <em>cutting</em>.",
                "Dos verbos enterrados: <em>have a discussion</em> es <em>discuss</em>, y <em>the reduction of</em> es <em>cutting</em>.",
              ],
            },
            {
              en: "We need to discuss cutting the travel budget.",
              ok: true,
              why: [
                "Both actions are verbs again, in eight words.",
                "Las dos acciones vuelven a ser verbos, en ocho palabras.",
              ],
            },
            {
              en: "A discussion is needed regarding the travel budget reduction.",
              ok: false,
              why: [
                "Short, but it is all nouns and a passive. Nobody in the sentence discusses or cuts anything.",
                "Es corta, pero es puro sustantivo y una pasiva. En la oración nadie discute ni recorta nada.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You are reminding the team about the expense report deadline.",
            "Le recuerdas al equipo la fecha límite de los reportes de gastos.",
          ],
          options: [
            {
              en: "This is a friendly reminder to remind everyone that expense reports are due this Friday. Please remember to submit your report on or before Friday at 5 p.m.",
              ok: false,
              why: [
                "The deadline is stated twice and the word <em>remind</em> three times. Repetition makes a message easier to skim past.",
                "La fecha límite aparece dos veces y la palabra <em>remind</em>, tres. La repetición hace más fácil pasar el mensaje de largo.",
              ],
            },
            {
              en: "As you all already know, the deadline for the submission of expense reports is approaching in the near future.",
              ok: false,
              why: [
                "Nineteen words and no date. <em>Approaching in the near future</em> says the same thing twice and tells nobody when.",
                "Diecinueve palabras y ninguna fecha. <em>Approaching in the near future</em> dice lo mismo dos veces y no le dice a nadie cuándo.",
              ],
            },
            {
              en: "Expense reports are due Friday at 5 p.m. Reports submitted after that will be paid next month.",
              ok: true,
              why: [
                "The deadline once, with the hour, and the consequence once. Nothing to skim.",
                "La fecha límite una vez, con la hora, y la consecuencia una vez. No hay nada que saltarse.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "rewrite",
      title: ["Rewrite: cut without losing a fact", "Reescribe: recorta sin perder un solo dato"],
      items: [
        {
          task: [
            "Remove the opener and two wordy phrases. Aim for ten words or fewer.",
            "Quita la apertura y dos frases largas. Busca diez palabras o menos.",
          ],
          before:
            "I am writing to inform you that, due to the fact that the supplier has increased its prices, we are in the process of evaluating other alternatives.",
          after: "The supplier raised its prices, so we're evaluating alternatives.",
          why: [
            "Twenty-seven words became nine. <em>So</em> replaced <em>due to the fact that</em>, and <em>other alternatives</em> lost a word, since an alternative is always another one.",
            "Veintisiete palabras se volvieron nueve. <em>So</em> reemplazó a <em>due to the fact that</em>, y <em>other alternatives</em> perdió una palabra, porque una alternativa siempre es otra.",
          ],
        },
        {
          task: [
            "Two buried verbs. Bring them back and let the schedule be the subject.",
            "Dos verbos enterrados. Recupéralos y deja que el horario sea el sujeto.",
          ],
          before:
            "The implementation of the new schedule resulted in a reduction of overtime of 15%.",
          after: "The new schedule cut overtime by 15%.",
          why: [
            "<em>Implementation</em> was not needed at all, and <em>resulted in a reduction of</em> is <em>cut</em>.",
            "<em>Implementation</em> no hacía falta, y <em>resulted in a reduction of</em> es <em>cut</em>.",
          ],
        },
        {
          task: [
            "Remove the <em>there are</em> and <em>it is</em> starts.",
            "Quita los inicios con <em>there are</em> e <em>it is</em>.",
          ],
          before:
            "There are several clients that have expressed that it is difficult for them to use the portal.",
          after: "Several clients have told us the portal is hard to use.",
          why: [
            "The clients became the subject of the first verb and the portal the subject of the second.",
            "Los clientes se volvieron el sujeto del primer verbo y el portal el del segundo.",
          ],
        },
        {
          task: [
            "Give the passives an owner. Priya is responsible for the budget.",
            "Dales responsable a las pasivas. Priya es la encargada del presupuesto.",
          ],
          before:
            "It was decided in the meeting that the budget will be revised and a new version will be presented next week.",
          after:
            "In the meeting, we decided that Priya will revise the budget and present a new version next week.",
          why: [
            "Three passives became three actions with people attached. Now there is someone to ask next week.",
            "Tres pasivas se volvieron tres acciones con personas. Ahora hay a quién preguntarle la próxima semana.",
          ],
        },
        {
          task: [
            "Cut this by at least half and keep both commitments.",
            "Recorta esto al menos a la mitad y conserva los dos compromisos.",
          ],
          before:
            "At this point in time, we are not in a position to be able to confirm the exact date of the delivery. However, as soon as we have more information available, we will proceed to inform you immediately.",
          after: "We can't confirm the delivery date yet. We'll tell you as soon as we know.",
          why: [
            "<em>Not in a position to be able to</em> is <em>can't</em>; <em>proceed to inform</em> is <em>tell</em>; <em>as soon as</em> already means <em>immediately</em>. Thirty-eight words, now fifteen.",
            "<em>Not in a position to be able to</em> es <em>can't</em>; <em>proceed to inform</em> es <em>tell</em>; <em>as soon as</em> ya significa <em>immediately</em>. Treinta y ocho palabras, ahora quince.",
          ],
        },
      ],
    },
    {
      t: "takeaways",
      items: [
        [
          "The deletion test: remove the phrase. If no fact, logic or courtesy is lost, leave it out.",
          "La prueba de quitar: saca la frase. Si no se pierde ningún dato, nada de lógica y nada de cortesía, déjala fuera.",
        ],
        [
          "Start with the fact. <em>I am writing to inform you that</em> can always go.",
          "Empieza con el dato. <em>I am writing to inform you that</em> siempre se puede ir.",
        ],
        [
          "Find the noun that hides an action and turn it back into a verb with a person in front of it.",
          "Encuentra el sustantivo que esconde una acción y regrésalo a verbo, con una persona por delante.",
        ],
        [
          "After a passive, ask <em>by whom?</em> Keep the passive only when the answer does not matter.",
          "Después de una pasiva, pregunta <em>by whom?</em> Conserva la pasiva solo cuando la respuesta no importa.",
        ],
        [
          "Say it once. Keep <em>please</em> and <em>thanks</em>.",
          "Dilo una vez. Conserva <em>please</em> y <em>thanks</em>.",
        ],
      ],
    },
  ],
};
