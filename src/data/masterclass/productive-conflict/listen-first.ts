import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "listen-first",
  slugEs: "escuchar-primero",
  title: ["Listen Until They Feel Heard", "Escucha Hasta que se Sientan Escuchados"],
  summary: [
    "People stop repeating themselves when they have proof you understood, so this lesson teaches you to say their point back in your own words, validate the feeling without conceding, and check that you got it.",
    "La gente deja de repetirse cuando tiene pruebas de que la entendiste, así que esta lección te enseña a devolverle su punto con tus palabras, validar lo que siente sin ceder y confirmar que entendiste bien.",
  ],
  description: [
    "Stop the loop of a repeated argument in English: reflect the point in your own words, validate the feeling without conceding, and check you got it.",
    "Detén el círculo de un argumento repetido en inglés: devuelve el punto con tus palabras, valida lo que siente sin ceder y confirma que entendiste.",
  ],
  minutes: 15,
  blocks: [
    {
      t: "p",
      html: [
        "Elena makes her point about the late data for the third time, and this time she is louder. You answered it the first time. You answered it again, with numbers, the second time. Your answers were accurate. She is still not moving, and you are starting to wonder whether she is listening at all.",
        "Elena repite su punto sobre los datos que llegaron tarde por tercera vez, y ahora más fuerte. Tú ya lo respondiste la primera vez. Lo volviste a responder, con cifras, la segunda. Tus respuestas fueron correctas. Ella sigue sin moverse, y empiezas a preguntarte si de plano no está escuchando.",
      ],
    },
    {
      t: "p",
      html: [
        "She is wondering the same thing about you. People repeat a point, and raise the volume, when they have no evidence that it was received. Your counter-argument, however correct, is not that evidence. It tells her you were preparing your reply while she talked. In a second language this happens even more, because part of your attention really is busy building the next sentence. Until she has proof that you understood her, she cannot take in anything you say.",
        "Ella se pregunta lo mismo de ti. La gente repite un punto, y sube el volumen, cuando no tiene evidencia de que lo recibieron. Tu contraargumento, por correcto que sea, no es esa evidencia. Le dice que estabas preparando tu respuesta mientras ella hablaba. En un segundo idioma esto pasa todavía más, porque parte de tu atención de verdad está ocupada armando la siguiente frase. Mientras ella no tenga pruebas de que la entendiste, no puede asimilar nada de lo que digas.",
      ],
    },
    {
      t: "idea",
      title: ["Heard is not the same as agreed", "Escuchar no es darle la razón"],
      html: [
        "Showing someone that you understood their point costs you nothing on the substance. <em>I can see why that's frustrating</em> acknowledges a feeling. <em>You're right</em> concedes a position. They are different sentences, and you can say the first without ever saying the second. Most professionals hold back the first because they are afraid it sounds like the second. It does not. And the person who feels heard is the only person who will listen to your side.",
        "Mostrarle a alguien que entendiste su punto no te cuesta nada en el fondo del asunto. <em>I can see why that's frustrating</em> reconoce un sentimiento. <em>You're right</em> cede una postura. Son frases distintas, y puedes decir la primera sin decir nunca la segunda. Muchos profesionales se guardan la primera por miedo a que suene como la segunda. No suena así. Y la persona que se siente escuchada es la única que va a escuchar tu versión.",
      ],
    },
    {
      t: "framework",
      title: ["Say it back until you get a yes", "Devuélvelo hasta que te digan que sí"],
      lead: [
        "Use this the second time someone repeats a point. Your own view waits until step four, and step four only starts when they have said some version of “yes, exactly.”",
        "Úsalo la segunda vez que alguien repita un punto. Tu propia opinión espera hasta el paso cuatro, y el paso cuatro solo empieza cuando te dijeron alguna versión de “yes, exactly”.",
      ],
      steps: [
        {
          label: ["Say it back in your own words", "Devuélvelo con tus propias palabras"],
          html: [
            "One or two sentences that restate their point, including the specific detail they care about. Use your own words; repeating theirs exactly sounds like a recording. Keep your opinion out of it completely.",
            "Una o dos frases que replanteen su punto, con el detalle específico que le importa. Usa tus propias palabras; repetir las suyas tal cual suena a grabación. Deja tu opinión completamente fuera.",
          ],
          say: "So the data came in Thursday night, and your team had to rebuild the report over the weekend.",
        },
        {
          label: ["Name what it cost them", "Nombra lo que le costó"],
          html: [
            "Acknowledge the feeling or the consequence. You are validating that the reaction makes sense given what happened to them. You are not saying who caused it.",
            "Reconoce el sentimiento o la consecuencia. Estás validando que la reacción tiene sentido dado lo que le pasó. No estás diciendo quién lo causó.",
          ],
          say: "I can see why that's frustrating. That's a lost weekend.",
        },
        {
          label: ["Check that you got it", "Confirma que entendiste"],
          html: [
            "Ask directly, and mean it. If you missed something, they will correct you, and that correction is the most useful sentence of the whole conversation.",
            "Pregunta directo y en serio. Si se te escapó algo, te van a corregir, y esa corrección es la frase más útil de toda la conversación.",
          ],
          say: "Is that the main thing, or is there more to it?",
        },
        {
          label: ["Wait for the yes, then give your side", "Espera el sí y luego da tu versión"],
          html: [
            "If they add something, go back to step one with the new piece. When you hear <em>yes</em>, <em>exactly</em>, or <em>right</em>, and their voice drops, they are ready. Now your side of it will be heard.",
            "Si agregan algo, regresa al paso uno con la pieza nueva. Cuando escuches <em>yes</em>, <em>exactly</em> o <em>right</em>, y les baje la voz, llegó el momento. Ahora sí van a escuchar tu versión.",
          ],
          say: "Okay. Can I tell you what was happening on our side?",
        },
      ],
    },
    {
      t: "compare",
      title: ["Fake listening and real listening", "Escuchar de mentiras y escuchar de verdad"],
      labels: [
        ["Sounds like listening", "Suena a que escuchas"],
        ["Proves you listened", "Demuestra que escuchaste"],
      ],
      rows: [
        {
          weak: "I understand.",
          strong: "So the handoff document didn't have what your team needed to start.",
          why: [
            "<em>I understand</em> is a claim. Saying the point back is the proof. Only the second one can be checked by the other person.",
            "<em>I understand</em> es una afirmación. Devolver el punto es la prueba. Solo la segunda puede comprobarla la otra persona.",
          ],
        },
        {
          weak: "Yeah, yeah, I know. I know.",
          strong: "You've told me this twice, so I clearly haven't shown you I got it. Let me try.",
          why: [
            "Doubled words signal impatience. The strong version reads the repetition correctly, as a sign that you have not proved it yet.",
            "Las palabras repetidas transmiten impaciencia. La versión fuerte lee bien la repetición: como señal de que todavía no lo demostraste.",
          ],
        },
        {
          weak: "I hear what you're saying.",
          strong:
            "What I'm hearing is that the delay bothered you less than the fact that nobody warned you.",
          why: [
            "The weak version is a formula with nothing in it. The strong one takes a risk and names what you think the real issue is.",
            "La versión débil es una fórmula vacía. La fuerte se arriesga y nombra lo que tú crees que es el problema de fondo.",
          ],
        },
        {
          weak: "Right, right. So anyway, about the budget...",
          strong:
            "Before I get to the budget: you said the vendor missed two dates. That's what you want fixed first, right?",
          why: [
            "<em>So anyway</em> throws away everything they just said. Finishing their topic before opening yours takes ten seconds.",
            "<em>So anyway</em> tira a la basura todo lo que acaban de decir. Cerrar su tema antes de abrir el tuyo toma diez segundos.",
          ],
        },
        {
          weak: "I know exactly how you feel.",
          strong: "That sounds like a rough week for your team.",
          why: [
            "You do not know exactly, and the claim moves the attention to you. <em>That sounds like</em> stays on their experience and leaves them room to correct it.",
            "No lo sabes exactamente, y decirlo mueve la atención hacia ti. <em>That sounds like</em> se queda en su experiencia y les deja espacio para corregirla.",
          ],
        },
        {
          weak: "So what you're saying is that my team is incompetent.",
          strong: "So from your side, it looked like nobody was checking the build.",
          why: [
            "The weak version has the form of reflection and is really an exaggeration designed to make them back down. Reflect what they said, at the size they said it.",
            "La versión débil tiene forma de reflejo, pero en realidad es una exageración hecha para que se echen para atrás. Refleja lo que dijeron, del tamaño que lo dijeron.",
          ],
        },
      ],
    },
    {
      t: "compare",
      title: [
        "Validate the feeling, keep your position",
        "Valida el sentimiento, conserva tu postura",
      ],
      labels: [
        ["Gives the point away", "Regala el punto"],
        ["Validates only", "Solo valida"],
      ],
      rows: [
        {
          weak: "You're right. We messed up.",
          strong: "I can see why it looked that way from your side.",
          why: [
            "If you do not believe your team was at fault, do not say it to cool things down. The strong line accepts her view as reasonable without accepting it as the full picture.",
            "Si no crees que tu equipo tuvo la culpa, no lo digas para enfriar las cosas. La frase fuerte acepta que su punto de vista es razonable sin aceptar que sea el panorama completo.",
          ],
        },
        {
          weak: "Sorry, sorry. It's totally our fault.",
          strong: "I can see why that's frustrating. Two days is a lot to lose.",
          why: [
            "A reflex apology is a concession, and you may need to walk it back later. Acknowledging the two lost days is true no matter who caused them.",
            "Una disculpa por reflejo es una concesión, y puede que después tengas que retractarte. Reconocer los dos días perdidos es verdad sin importar quién los causó.",
          ],
        },
        {
          weak: "Yes, totally, I agree.",
          strong: "That makes sense, given what you were told.",
          why: [
            "<em>Given what you were told</em> validates her reasoning and quietly marks that the information she had may be incomplete.",
            "<em>Given what you were told</em> valida su razonamiento y marca con discreción que la información que tenía puede estar incompleta.",
          ],
        },
        {
          weak: "You're right, the whole process is broken.",
          strong: "I get why you'd want to change the process after a week like that.",
          why: [
            "The weak version agrees to a conclusion you may not share. The strong one agrees that the wish is understandable.",
            "La versión débil acepta una conclusión que tal vez no compartes. La fuerte acepta que el deseo es comprensible.",
          ],
        },
        {
          weak: "I can see why you're upset, but you're overreacting.",
          strong: "I can see why you're upset. I'd be upset too if I'd found out from the client.",
          why: [
            "Validation followed by a judgment cancels itself. Let the validation stand alone as a full sentence, then stop.",
            "Una validación seguida de un juicio se cancela sola. Deja que la validación quede como frase completa y ahí detente.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: ["Reflecting, validating, checking", "Para reflejar, validar y confirmar"],
      items: [
        {
          en: "So what happened on your end was...",
          use: [
            "To start saying it back. <em>On your end</em> signals that you are describing their experience.",
            "Para empezar a devolver el punto. <em>On your end</em> indica que estás describiendo su experiencia.",
          ],
        },
        {
          en: "Let me make sure I've got this.",
          use: [
            "Before a longer reflection. It tells them the next sentences are about their point.",
            "Antes de un reflejo más largo. Les avisa que las siguientes frases son sobre su punto.",
          ],
        },
        {
          en: "What I'm hearing is that the real issue is...",
          use: [
            "When you think the stated complaint sits on top of a deeper one. Offer it as a guess.",
            "Cuando crees que la queja que dijeron está encima de otra más profunda. Ofrécelo como una suposición.",
          ],
        },
        {
          en: "I can see why that's frustrating.",
          use: [
            "The core validation phrase. It concedes nothing. Say it slowly and stop after it.",
            "La frase central para validar. No cede nada. Dila despacio y detente después.",
          ],
        },
        {
          en: "That makes sense, given what you were seeing.",
          use: [
            "Validates their reasoning from their position, and leaves room for information they did not have.",
            "Valida su razonamiento desde donde estaban y deja espacio para información que no tenían.",
          ],
        },
        {
          en: "That put you in a tough spot with your director.",
          use: [
            "Names the consequence for them personally. Often this is what they most needed someone to notice.",
            "Nombra la consecuencia para ellos en lo personal. Muchas veces eso era lo que más necesitaban que alguien notara.",
          ],
        },
        {
          en: "Did I get that right?",
          use: [
            "The simplest check. Ask it and wait for the answer.",
            "La confirmación más sencilla. Pregúntala y espera la respuesta.",
          ],
        },
        {
          en: "Is that the main thing, or is there more?",
          use: [
            "Invites the part they have not said yet. The second issue is frequently the real one.",
            "Invita a decir la parte que todavía no salió. Muchas veces el segundo tema es el de fondo.",
          ],
        },
        {
          en: "What did I miss?",
          use: [
            "When your reflection got a <em>not exactly</em>. It asks for the correction without defensiveness.",
            "Cuando a tu reflejo le contestaron <em>not exactly</em>. Pide la corrección sin ponerte a la defensiva.",
          ],
        },
        {
          en: "Okay. Can I tell you how it looked from our side?",
          use: [
            "Only after the yes. Asking permission makes them choose to listen.",
            "Solo después del sí. Pedir permiso hace que ellos decidan escuchar.",
          ],
        },
      ],
    },
    {
      t: "model",
      title: ["Two rounds, then your side", "Dos vueltas y luego tu versión"],
      context: [
        "Elena leads operations in Dallas. Your team in Querétaro sent the monthly inventory data two days late. She has already raised it twice on this call, and you have twice explained the system migration.",
        "Elena dirige operaciones en Dallas. Tu equipo en Querétaro mandó los datos mensuales de inventario con dos días de retraso. Ella ya lo mencionó dos veces en esta llamada, y tú ya le explicaste dos veces la migración del sistema.",
      ],
      lines: [
        {
          who: "Elena",
          en: "I don't think you understand. I had nothing to show on Friday. Nothing.",
          note: [
            "Third time, louder. Your explanations of the migration have not registered because she has not been heard yet.",
            "Tercera vez, más fuerte. Tus explicaciones de la migración no le llegaron porque todavía no se siente escuchada.",
          ],
        },
        {
          who: "You",
          en: "I haven't shown you that I got it. Let me try. The data was due Wednesday. It came Friday afternoon. So you walked into your Friday review without the inventory numbers.",
          note: [
            "Say it back. Three facts in her order, with her detail: the Friday review. No migration, no explanation.",
            "Devuelve el punto. Tres hechos en su orden, con su detalle: la revisión del viernes. Sin migración, sin explicaciones.",
          ],
        },
        {
          who: "Elena",
          en: "Yes. In front of the regional VP.",
          note: [
            "A yes, plus a new piece. The VP is the real cost. Go around again.",
            "Un sí, más una pieza nueva. El VP es el costo real. Da otra vuelta.",
          ],
        },
        {
          who: "You",
          en: "In front of the VP. I can see why that's frustrating. You had to stand there and explain a gap that wasn't yours.",
          note: [
            "Name what it cost her. This validates her experience and still says nothing about fault.",
            "Nombra lo que le costó. Esto valida lo que vivió y sigue sin decir nada sobre quién tuvo la culpa.",
          ],
        },
        {
          who: "Elena",
          en: "Exactly. That's exactly it.",
          note: [
            "The second yes. Her volume drops here, and that tells you the loop is closed.",
            "El segundo sí. Aquí le baja el volumen, y eso te dice que el círculo se cerró.",
          ],
        },
        {
          who: "You",
          en: "Is that the main thing, or is there more to it?",
          note: [
            "Check before moving on. Thirty seconds now saves a fourth repetition later.",
            "Confirma antes de avanzar. Treinta segundos ahora te ahorran una cuarta repetición después.",
          ],
        },
        {
          who: "Elena",
          en: "That's the main thing. I just can't be surprised like that again.",
          note: [
            "Now you know what she is protecting: no surprises in front of her VP. The delay itself matters less.",
            "Ahora sabes qué protege: cero sorpresas frente a su VP. El retraso en sí importa menos.",
          ],
        },
        {
          who: "You",
          en: "Understood. Can I tell you what happened on our side, and then what I'd do so you're never surprised?",
          note: [
            "Only now your side, and you ask first. She will listen to the migration explanation this time.",
            "Apenas ahora tu versión, y primero pides permiso. Esta vez sí va a escuchar la explicación de la migración.",
          ],
        },
        {
          who: "Elena",
          en: "Go ahead.",
        },
      ],
    },
    {
      t: "trap",
      title: ["“Yes, yes” and “I understand you”", "“Yes, yes” y “I understand you”"],
      html: [
        "In Mexican Spanish, “sí, sí, sí” and “claro” while someone talks mean <em>I'm following you</em>. In English, <span class='x'>✗</span> <em>Yes, yes, yes</em> is heard either as agreement with the content or as impatience, and <span class='x'>✗</span> <em>Of course</em> sounds like you are conceding. An American colleague can leave the call believing you accepted everything. Use neutral signals while you listen: <span class='ok'>✓</span> <em>Mm-hm</em>, <em>Okay</em>, <em>Got it</em>, <em>Go on</em>. Second, “te entiendo” translated as <span class='x'>✗</span> <em>I understand you</em> sounds odd in English, as if you were confirming that you can make out the words. <span class='ok'>✓</span> <em>I understand</em> or <em>I get it</em> is the natural form, and saying the point back is stronger than either. Third, the courteous reflex of apologizing early, “una disculpa”, becomes <em>I'm sorry</em>, which in a conflict is heard as accepting fault. If you mean sympathy and not responsibility, say <span class='ok'>✓</span> <em>I can see why that's frustrating</em>.",
        "En el español de México, decir “sí, sí, sí” y “claro” mientras alguien habla significa <em>te sigo</em>. En inglés, <span class='x'>✗</span> <em>Yes, yes, yes</em> se escucha como acuerdo con el contenido o como impaciencia, y <span class='x'>✗</span> <em>Of course</em> suena a que estás cediendo. Un colega estadounidense puede salir de la llamada creyendo que aceptaste todo. Usa señales neutras mientras escuchas: <span class='ok'>✓</span> <em>Mm-hm</em>, <em>Okay</em>, <em>Got it</em>, <em>Go on</em>. Segundo, “te entiendo” traducido como <span class='x'>✗</span> <em>I understand you</em> suena raro en inglés, como si confirmaras que alcanzas a distinguir las palabras. <span class='ok'>✓</span> <em>I understand</em> o <em>I get it</em> es la forma natural, y devolver el punto es más fuerte que cualquiera de las dos. Tercero, el reflejo cortés de disculparse pronto, “una disculpa”, se convierte en <em>I'm sorry</em>, que en un conflicto se escucha como aceptar la culpa. Si lo que quieres expresar es empatía y no responsabilidad, di <span class='ok'>✓</span> <em>I can see why that's frustrating</em>.",
      ],
    },
    {
      t: "choice",
      title: ["Heard, or just answered", "Escuchado, o solo contestado"],
      items: [
        {
          prompt: [
            "Marcus says for the second time, more sharply: “Nobody told my team the API was changing. We found out when our dashboard broke.” You did send an email, to a list his team does not read.",
            "Marcus dice por segunda vez, con más filo: “Nobody told my team the API was changing. We found out when our dashboard broke.” Sí mandaste un correo, pero a una lista que su equipo no lee.",
          ],
          options: [
            {
              en: "We did send an email on the 3rd. I can forward it to you.",
              ok: false,
              why: [
                "Accurate, and it answers a point he did not make. He will say it a third time, because he still has no proof you heard about the broken dashboard.",
                "Es correcto, y responde a un punto que él no planteó. Lo va a decir una tercera vez, porque sigue sin pruebas de que escuchaste que se les cayó el dashboard.",
              ],
            },
            {
              en: "So the first sign your team had was the dashboard going down. I can see why that's frustrating. Did I get that right?",
              ok: true,
              why: [
                "It says his point back, validates the reaction, and checks. The email can come next, and he will actually take it in.",
                "Devuelve su punto, valida la reacción y confirma. El correo puede venir después, y ahora sí lo va a asimilar.",
              ],
            },
            {
              en: "You're right, that was a complete failure on our part. I'm so sorry.",
              ok: false,
              why: [
                "It cools the moment by conceding more than is true. When the email surfaces later, you will have to take the apology back.",
                "Enfría el momento cediendo más de lo que es cierto. Cuando el correo salga a la luz, vas a tener que retirar la disculpa.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Priya is describing, in detail, why the new approval process slows her team down. You disagree with her conclusion. While she talks, you want to show you are following.",
            "Priya está describiendo, a detalle, por qué el nuevo proceso de aprobación frena a su equipo. No estás de acuerdo con su conclusión. Mientras habla, quieres mostrar que la vas siguiendo.",
          ],
          options: [
            {
              en: "Yes, yes, of course. Yes.",
              ok: false,
              why: [
                "You mean <em>I'm following</em>. She hears agreement, and will be surprised when you object.",
                "Quieres decir <em>te sigo</em>. Ella escucha un acuerdo y se va a sorprender cuando objetes.",
              ],
            },
            {
              en: "Mm-hm. Okay. Go on.",
              ok: true,
              why: [
                "Neutral signals. They show attention and commit you to nothing.",
                "Señales neutras. Muestran atención y no te comprometen a nada.",
              ],
            },
            {
              en: "Right, but the process exists for a reason.",
              ok: false,
              why: [
                "You interrupted her explanation with your position. She will restart from the beginning, louder.",
                "Interrumpiste su explicación con tu postura. Va a volver a empezar desde el principio, más fuerte.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You reflected Dana's concern as “So the issue is the cost,” and she answers, “No, not exactly.”",
            "Le devolviste a Dana su preocupación como “So the issue is the cost”, y ella contesta: “No, not exactly.”",
          ],
          options: [
            {
              en: "Well, that's what it sounded like to me.",
              ok: false,
              why: [
                "It defends your reflection, which was only ever a guess. Now she has to argue about what she said.",
                "Defiende tu reflejo, que nunca fue más que una suposición. Ahora ella tiene que discutir sobre lo que dijo.",
              ],
            },
            {
              en: "Okay, so it's the timeline, then.",
              ok: false,
              why: [
                "A second guess. Asking is faster than guessing, and it shows you want her version.",
                "Una segunda suposición. Preguntar es más rápido que adivinar, y muestra que quieres su versión.",
              ],
            },
            {
              en: "Okay. What did I miss?",
              ok: true,
              why: [
                "A <em>not exactly</em> means the method is working. Ask for the correction and reflect again.",
                "Un <em>not exactly</em> quiere decir que el método está funcionando. Pide la corrección y vuelve a reflejar.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Luis is angry that your team rejected his purchase request. The rejection was correct under policy, and you would make the same call again.",
            "Luis está enojado porque tu equipo rechazó su solicitud de compra. El rechazo fue correcto según la política, y volverías a tomar la misma decisión.",
          ],
          options: [
            {
              en: "I can see why that's frustrating. You'd already told the supplier yes, and now you have to go back to them.",
              ok: true,
              why: [
                "It validates the real cost to him and concedes nothing about the decision. He can hear the policy explanation after this.",
                "Valida el costo real para él y no cede nada sobre la decisión. Después de esto ya puede escuchar la explicación de la política.",
              ],
            },
            {
              en: "I understand, but the policy is very clear, and you should have checked first.",
              ok: false,
              why: [
                "<em>I understand</em> with no content, followed by a correction. He hears only the correction.",
                "<em>I understand</em> sin contenido, seguido de una corrección. Él solo escucha la corrección.",
              ],
            },
            {
              en: "You're right, it's a ridiculous policy. I'll see if I can get an exception.",
              ok: false,
              why: [
                "You agreed with something you do not believe and promised something you do not intend to do.",
                "Le diste la razón en algo que no crees y prometiste algo que no piensas hacer.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "speak",
      title: ["Say it back before you answer", "Devuélvelo antes de contestar"],
      prompt: [
        "A colleague says: <em>“I've asked three times for the test results. I have a board deck due tomorrow and I'm still working with last month's numbers.”</em> Your team was waiting on the lab, which was late. Out loud: say it back in your own words, name what it cost them, and check. Do not mention the lab.",
        "Un colega dice: <em>“I've asked three times for the test results. I have a board deck due tomorrow and I'm still working with last month's numbers.”</em> Tu equipo estaba esperando al laboratorio, que se atrasó. En voz alta: devuelve el punto con tus palabras, nombra lo que le costó y confirma. No menciones al laboratorio.",
      ],
      think: 20,
      speak: 30,
      frame: "So ___, and ___. I can see why ___. Is that ___, or ___?",
      checklist: [
        [
          "I restated the point in my own words, including the board deck and tomorrow.",
          "Replanteé el punto con mis propias palabras, incluyendo la presentación para el consejo y que es para mañana.",
        ],
        [
          "I validated the feeling in a full sentence and stopped after it.",
          "Validé el sentimiento en una frase completa y me detuve después.",
        ],
        [
          "I did not say <em>sorry</em>, <em>you're right</em>, or <em>but</em>.",
          "No dije <em>sorry</em>, <em>you're right</em> ni <em>but</em>.",
        ],
        [
          "I ended with a real check and no explanation.",
          "Terminé con una confirmación real y sin explicaciones.",
        ],
      ],
      model:
        "So you've asked three times, the board deck is due tomorrow, and you're still building it on last month's numbers. I can see why that's frustrating. You're the one who has to stand behind those slides. Is that the main thing, or is there more to it?",
    },
    {
      t: "takeaways",
      items: [
        [
          "When someone repeats a point louder, they are telling you they have no proof it was received. Another answer will not help.",
          "Cuando alguien repite un punto más fuerte, te está diciendo que no tiene pruebas de que lo recibiste. Otra respuesta no va a servir.",
        ],
        [
          "Say it back in your own words, name what it cost them, check, and wait for the yes. Your side comes after.",
          "Devuélvelo con tus palabras, nombra lo que le costó, confirma y espera el sí. Tu versión va después.",
        ],
        [
          "<em>I can see why that's frustrating</em> validates a feeling. <em>You're right</em> concedes a position. Say the first freely and the second only when it is true.",
          "<em>I can see why that's frustrating</em> valida un sentimiento. <em>You're right</em> cede una postura. Di la primera con libertad y la segunda solo cuando sea verdad.",
        ],
        [
          "While you listen, use <em>mm-hm</em>, <em>okay</em>, and <em>got it</em>. <em>Yes, yes</em> and <em>of course</em> are heard as agreement.",
          "Mientras escuchas, usa <em>mm-hm</em>, <em>okay</em> y <em>got it</em>. <em>Yes, yes</em> y <em>of course</em> se escuchan como acuerdo.",
        ],
      ],
    },
  ],
};
