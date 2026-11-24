import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "repair-and-follow-up",
  slugEs: "reparar-y-dar-seguimiento",
  title: ["Repair and Follow Up", "Repara y Da Seguimiento"],
  summary: [
    "What to do after the argument: a two-minute repair conversation, an apology that counts, a written recap, and how to reopen an issue that was never really settled.",
    "Qué hacer después de la discusión: una conversación de reparación de dos minutos, una disculpa que sí cuenta, un resumen por escrito y cómo reabrir un tema que nunca quedó resuelto.",
  ],
  description: [
    "After a tense meeting: the English for a short repair conversation, a real apology, a written recap of what was agreed, and reopening an unsettled issue.",
    "Después de una junta tensa: el inglés para una conversación breve de reparación, una disculpa real, un resumen escrito de lo acordado y reabrir un tema.",
  ],
  minutes: 18,
  blocks: [
    {
      t: "p",
      html: [
        "The meeting ended. Maybe you got the decision you wanted, maybe you did not, but something was said, by you or by them, and now there is a small weight when their name appears in your inbox. Most people wait for it to pass. It rarely passes. It turns into shorter emails, a meeting you are not invited to, a slower yes the next time you need one.",
        "La junta terminó. Quizá conseguiste la decisión que querías, quizá no, pero algo se dijo, de tu parte o de la suya, y ahora sientes un pequeño peso cuando su nombre aparece en tu bandeja. Casi todo el mundo espera a que se pase. Rara vez se pasa. Se convierte en correos más cortos, en una junta a la que no te invitan, en un sí más lento la próxima vez que lo necesites.",
      ],
    },
    {
      t: "p",
      html: [
        "Repair is a two-minute conversation, held within a day or two, and it is the most underused move in professional conflict. It has a second half that matters just as much: writing down what was agreed, so that the same argument does not come back in three weeks wearing different clothes.",
        "Reparar es una conversación de dos minutos, dentro de uno o dos días, y es la jugada menos aprovechada del conflicto profesional. Tiene una segunda mitad que importa igual: dejar por escrito lo que se acordó, para que la misma discusión no regrese en tres semanas con otro disfraz.",
      ],
    },
    {
      t: "idea",
      title: ["Own your part. Only your part.", "Hazte cargo de tu parte. Solo de tu parte."],
      html: [
        "A repair names the specific thing you did, without <em>if</em> and without <em>but</em>, and then it stops. It does not require you to give up the position you argued for. You can be sorry for how you said something and still stand by what you said, and saying both is what makes each one believable. Taking all the blame is as inaccurate as taking none, and the other person knows it.",
        "Una reparación nombra lo específico que hiciste, sin <em>if</em> y sin <em>but</em>, y ahí se detiene. No te exige renunciar a la postura que defendiste. Puedes lamentar cómo dijiste algo y seguir sosteniendo lo que dijiste, y decir las dos cosas es lo que hace creíble a cada una. Cargar con toda la culpa es tan inexacto como no cargar con ninguna, y la otra persona lo sabe.",
      ],
    },
    {
      t: "framework",
      title: ["The two-minute repair", "La reparación de dos minutos"],
      lead: [
        "Use it within a day or two of any exchange that left a mark, whether or not you were the one mostly at fault.",
        "Úsala dentro de uno o dos días después de cualquier intercambio que dejó huella, hayas tenido o no la mayor parte de la culpa.",
      ],
      steps: [
        {
          label: ["Ask for the time and say why", "Pide el tiempo y di para qué"],
          html: [
            "In person or on a call, never in a group chat. Saying the subject up front keeps the other person from bracing for round two.",
            "En persona o por llamada, nunca en un chat grupal. Decir el tema desde el inicio evita que la otra persona se prepare para el segundo round.",
          ],
          say: "Do you have two minutes? I want to circle back on yesterday.",
        },
        {
          label: ["Own the specific thing", "Hazte cargo de lo específico"],
          html: [
            "Name the behavior the way a camera would have recorded it. Then the apology, in four words or fewer.",
            "Nombra la conducta como la habría grabado una cámara. Luego la disculpa, en cuatro palabras o menos.",
          ],
          say: "I cut you off twice, and I was sharper than I needed to be. I'm sorry about that.",
        },
        {
          label: [
            "Keep your position separate, if you still hold it",
            "Separa tu postura, si todavía la sostienes",
          ],
          html: [
            "A new sentence, never joined to the apology with <em>but</em>. If you no longer hold the position, say that instead.",
            "Una frase nueva, nunca unida a la disculpa con <em>but</em>. Si ya no sostienes esa postura, di eso.",
          ],
          say: "I still have concerns about the timeline, and I'd like to raise them better than I did.",
        },
        {
          label: ["Invite their side", "Invita su versión"],
          html: [
            "Then listen without defending. They may add something you missed, and they may own a part of their own.",
            "Y escucha sin defenderte. Puede que agreguen algo que no viste, y puede que asuman su propia parte.",
          ],
          say: "How did it land on your end?",
        },
        {
          label: ["Agree on the next step", "Acuerden el siguiente paso"],
          html: [
            "A repair that ends without a next step is only a pleasant moment. Give the working relationship something to do.",
            "Una reparación que termina sin siguiente paso es solo un momento agradable. Dale a la relación de trabajo algo que hacer.",
          ],
          say: "Could we take another look at the dates on Thursday?",
        },
      ],
    },
    {
      t: "compare",
      title: ["Apologies that count", "Disculpas que sí cuentan"],
      labels: [
        ["Sounds like an apology", "Suena a disculpa"],
        ["Is one", "Lo es"],
      ],
      rows: [
        {
          weak: "I'm sorry if I offended you.",
          strong: "I'm sorry I said that in front of your team.",
          why: [
            "<em>If</em> questions whether anything happened. The strong version names what happened and where.",
            "<em>If</em> pone en duda que haya pasado algo. La versión fuerte nombra qué pasó y dónde.",
          ],
        },
        {
          weak: "I'm sorry you feel that way.",
          strong:
            "I'm sorry for my tone yesterday. You asked a fair question and I answered it badly.",
          why: [
            "The weak version apologizes for their feelings, which is a way of blaming them. The strong one is about your action.",
            "La versión débil se disculpa por los sentimientos de la otra persona, que es una forma de culparla. La fuerte habla de tu acción.",
          ],
        },
        {
          weak: "I'm sorry, but you were pushing me.",
          strong: "I'm sorry I raised my voice. That's on me.",
          why: [
            "Everything before <em>but</em> is erased by what follows it. If their behavior needs discussing, do it in a separate sentence, later.",
            "Todo lo que va antes de <em>but</em> queda borrado por lo que sigue. Si hay que hablar de su conducta, hazlo en otra frase, más adelante.",
          ],
        },
        {
          weak: "Mistakes were made on the handoff.",
          strong: "I sent the handoff late, and it cost your team a day.",
          why: [
            "The passive voice hides who did it. An apology needs a subject, and the subject is <em>I</em>.",
            "La voz pasiva esconde quién lo hizo. Una disculpa necesita sujeto, y el sujeto es <em>I</em>.",
          ],
        },
        {
          weak: "I apologize for any inconvenience.",
          strong: "I'm sorry the report was two days late. You had to present without it.",
          why: [
            "<em>Any inconvenience</em> is a form letter. Naming the actual cost shows you understand what it did to them.",
            "<em>Any inconvenience</em> es un machote. Nombrar el costo real muestra que entiendes lo que les provocó.",
          ],
        },
        {
          weak: "I'm so, so sorry. It was all my fault. I feel terrible, I don't know what happened.",
          strong: "I got that wrong, and I'm sorry. Here's what I'm doing differently.",
          why: [
            "The long version asks the other person to comfort you. One clear apology and a change is what an American colleague reads as sincere.",
            "La versión larga le pide a la otra persona que te consuele. Una disculpa clara y un cambio es lo que un colega estadounidense lee como sincero.",
          ],
        },
        {
          weak: "Let's just forget about it.",
          strong: "I'd like to clear the air about Tuesday. Do you have a few minutes?",
          why: [
            "Nobody forgets. The offer to forget tells them the subject is closed and their side will not be heard.",
            "Nadie olvida. La oferta de olvidar les dice que el tema está cerrado y que su versión no se va a escuchar.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: ["Phrases for repairing and reopening", "Frases para reparar y reabrir"],
      items: [
        {
          en: "Do you have a few minutes? I'd like to clear the air.",
          use: [
            "The standard opening. <em>Clear the air</em> signals a repair, not a rematch.",
            "La apertura estándar. <em>Clear the air</em> anuncia una reparación, no una revancha.",
          ],
        },
        {
          en: "I've been thinking about our conversation yesterday.",
          use: [
            "A softer opening, good for a message that sets up the call.",
            "Una apertura más suave, buena para un mensaje que prepara la llamada.",
          ],
        },
        {
          en: "I didn't handle that well.",
          use: [
            "A general acknowledgment. Follow it with the specific thing.",
            "Un reconocimiento general. Síguelo con lo específico.",
          ],
        },
        {
          en: "That's on me.",
          use: [
            "Takes responsibility in three words. Common, direct, and respected.",
            "Asume la responsabilidad en tres palabras. Común, directo y respetado.",
          ],
        },
        {
          en: "I should have come to you first.",
          use: [
            "When you raised a problem in public, or with their manager, before raising it with them.",
            "Cuando planteaste un problema en público, o con su jefe, antes de plantearlo con la persona.",
          ],
        },
        {
          en: "I stand by the concern. I don't stand by how I raised it.",
          use: [
            "Separates the substance from the delivery in two sentences.",
            "Separa el fondo de la forma en dos frases.",
          ],
        },
        {
          en: "I think we both got heated.",
          use: [
            "Shares the responsibility without assigning their part to them in detail.",
            "Reparte la responsabilidad sin detallarle a la otra persona cuál fue su parte.",
          ],
        },
        {
          en: "My part in that was not telling you sooner.",
          use: [
            "Owns one piece precisely, which leaves room for them to own theirs.",
            "Asume una pieza con precisión, y eso deja espacio para que la otra persona asuma la suya.",
          ],
        },
        {
          en: "How did that land for you?",
          use: [
            "Invites their experience of the meeting. Then stay quiet.",
            "Invita su experiencia de la junta. Después guarda silencio.",
          ],
        },
        {
          en: "Thank you. I appreciate you saying that.",
          use: [
            "How to receive an apology. It accepts without pretending nothing happened.",
            "Cómo recibir una disculpa. La acepta sin fingir que no pasó nada.",
          ],
        },
        {
          en: "Just so we're working from the same notes, here's what I have.",
          use: [
            "Opens a written recap without implying you do not trust them.",
            "Abre un resumen por escrito sin insinuar que no confías en la otra persona.",
          ],
        },
        {
          en: "I don't think we really settled this. Can we take another look?",
          use: [
            "Reopens an issue that was closed too fast, or closed only on paper.",
            "Reabre un tema que se cerró demasiado rápido, o que solo se cerró en el papel.",
          ],
        },
      ],
    },
    {
      t: "model",
      title: [
        "Worked example: the repair conversation",
        "Ejemplo completo: la conversación de reparación",
      ],
      context: [
        "Yesterday, in a forecast review with twelve people, you interrupted Priya twice and called her numbers convenient. You still think her forecast is too optimistic. This morning you stop by her desk.",
        "Ayer, en una revisión de pronóstico con doce personas, interrumpiste a Priya dos veces y dijiste que sus cifras eran convenientes. Sigues pensando que su pronóstico es demasiado optimista. Hoy en la mañana pasas a su lugar.",
      ],
      lines: [
        {
          who: "You",
          en: "Priya, do you have two minutes? I want to circle back on yesterday's review.",
          note: ["Asks for the time and names the subject.", "Pide el tiempo y nombra el tema."],
        },
        {
          who: "Priya",
          en: "Sure.",
        },
        {
          who: "You",
          en: "I interrupted you twice, and at one point I called your numbers convenient. That wasn't fair, and I'm sorry.",
          note: [
            "Specific behavior, a judgment on it, a short apology. No <em>if</em>, no <em>but</em>.",
            "Conducta específica, un juicio sobre ella y una disculpa corta. Sin <em>if</em>, sin <em>but</em>.",
          ],
        },
        {
          who: "Priya",
          en: "I appreciate that. Honestly, I wasn't at my best either. I shouldn't have brought up last quarter.",
          note: [
            "A precise apology often produces one in return. You did not ask for it.",
            "Una disculpa precisa muchas veces genera otra de regreso. Tú no la pediste.",
          ],
        },
        {
          who: "You",
          en: "Thank you. I do still think the forecast is optimistic, and I'd like to show you why somewhere calmer than a room of twelve people.",
          note: [
            "Receives her apology, then keeps the position in a separate sentence.",
            "Recibe su disculpa y luego mantiene la postura en una frase aparte.",
          ],
        },
        {
          who: "Priya",
          en: "That's fair. Send me what you have.",
        },
        {
          who: "You",
          en: "I'll send it this afternoon. Could we take thirty minutes on Thursday to go through it?",
          note: ["A next step with a day attached.", "Un siguiente paso con día incluido."],
        },
        {
          who: "Priya",
          en: "Thursday works.",
        },
      ],
    },
    {
      t: "h",
      text: ["Lock it in writing", "Déjalo por escrito"],
    },
    {
      t: "model",
      title: ["Worked example: the recap email", "Ejemplo completo: el correo de resumen"],
      context: [
        "Thursday's conversation went well. Two things were agreed and one was not. You send this within the hour, because two people leave the same meeting with two different memories of it.",
        "La conversación del jueves salió bien. Se acordaron dos cosas y una no. Mandas esto dentro de la primera hora, porque dos personas salen de la misma junta con dos recuerdos distintos.",
      ],
      lines: [
        {
          en: "Subject: Recap of our call on the Q3 forecast",
          note: [
            "A plain subject line that either of you can find again in a month.",
            "Un asunto sencillo que cualquiera de los dos pueda encontrar dentro de un mes.",
          ],
        },
        {
          en: "Hi Priya, thanks for the time today. Just so we're working from the same notes, here's what I have.",
          note: [
            "Frames the recap as shared notes, not as evidence.",
            "Presenta el resumen como notas compartidas, no como evidencia.",
          ],
        },
        {
          en: "Agreed: we present the conservative forecast to the board, with the upside case on a second slide.",
          note: ["A decision, in one line.", "Una decisión, en una línea."],
        },
        {
          en: "Agreed: I'll update the model with September actuals by Wednesday, and you'll review it by Friday.",
          note: [
            "Who does what, by when. Your task comes first.",
            "Quién hace qué y para cuándo. Tu tarea va primero.",
          ],
        },
        {
          en: "Still open: whether the new accounts count toward Q3 or Q4. We said we'd ask Dana and decide on Monday.",
          note: [
            "The unresolved item, stated openly, with how it will be resolved.",
            "El punto sin resolver, dicho abiertamente, con la forma en que se va a resolver.",
          ],
        },
        {
          en: "If I got any of this wrong, tell me and I'll correct it.",
          note: [
            "Invites correction. This sentence is what keeps the recap from reading as a trap.",
            "Invita a corregir. Esta frase es lo que evita que el resumen se lea como una trampa.",
          ],
        },
        {
          en: "Thanks again for working through it with me.",
        },
      ],
    },
    {
      t: "trap",
      title: [
        "One apology, and the words around it",
        "Una sola disculpa, y las palabras que la rodean",
      ],
      html: [
        "In Mexican courtesy, apologizing several times shows sincerity, and brushing off someone else's apology with <em>no te preocupes, no pasó nada</em> shows generosity. Both travel badly. In American English, the third apology starts to sound like a request for reassurance, and <em>it was nothing</em>, said about something that clearly was something, closes the door on the real conversation. Apologize once, precisely, and receive an apology with <span class='ok'>✓</span> <em>Thank you, I appreciate that.</em> Three translations to watch. <em>Me da pena</em> is <span class='ok'>✓</span> <em>I'm embarrassed</em>, not <span class='x'>✗</span> <em>I'm ashamed</em>, which is far heavier, and never <span class='x'>✗</span> <em>it gives me pain</em>. <em>Quedamos en que</em> is <span class='ok'>✓</span> <em>we agreed that</em>, not <span class='x'>✗</span> <em>we stayed in that</em>. And <em>una disculpa</em> at the start of a message is <span class='ok'>✓</span> <em>I'm sorry about</em> plus the specific thing; <span class='x'>✗</span> <em>an apology</em> alone is not a sentence in English.",
        "En la cortesía mexicana, disculparse varias veces demuestra sinceridad, y restarle importancia a la disculpa de alguien con <em>no te preocupes, no pasó nada</em> demuestra generosidad. Ninguna de las dos viaja bien. En inglés estadounidense, la tercera disculpa empieza a sonar a que pides que te tranquilicen, e <em>it was nothing</em>, dicho sobre algo que claramente sí fue algo, le cierra la puerta a la conversación real. Discúlpate una vez, con precisión, y recibe una disculpa con <span class='ok'>✓</span> <em>Thank you, I appreciate that.</em> Tres traducciones que hay que cuidar. <em>Me da pena</em> es <span class='ok'>✓</span> <em>I'm embarrassed</em>, no <span class='x'>✗</span> <em>I'm ashamed</em>, que pesa mucho más, y nunca <span class='x'>✗</span> <em>it gives me pain</em>. <em>Quedamos en que</em> es <span class='ok'>✓</span> <em>we agreed that</em>, no <span class='x'>✗</span> <em>we stayed in that</em>. Y <em>una disculpa</em> al inicio de un mensaje es <span class='ok'>✓</span> <em>I'm sorry about</em> más lo específico; <span class='x'>✗</span> <em>an apology</em> por sí solo no es una oración en inglés.",
      ],
    },
    {
      t: "rewrite",
      title: ["Rewrite the follow-up", "Reescribe el seguimiento"],
      items: [
        {
          task: [
            "A chat message after you called a colleague's plan lazy in a meeting. Make the apology real and keep your concern alive.",
            "Un mensaje por chat después de que en una junta dijiste que el plan de un colega era flojo. Haz que la disculpa sea real y mantén viva tu preocupación.",
          ],
          before: "Sorry if my comment in the meeting bothered you. I was just being honest.",
          after:
            "I'm sorry about my comment in the meeting. Calling the plan lazy was unfair. I do have a concern about the testing step, and I'd like to explain it properly. Do you have ten minutes tomorrow?",
          why: [
            "<em>Sorry if</em> and <em>just being honest</em> both defend the comment. The rewrite owns the word, separates the concern from it, and asks for a conversation.",
            "<em>Sorry if</em> y <em>just being honest</em> defienden el comentario. La nueva versión asume la palabra, separa de ella la preocupación y pide una conversación.",
          ],
        },
        {
          task: [
            "A recap sent to five people after a difficult planning meeting. Make it something that prevents the next argument.",
            "Un resumen enviado a cinco personas después de una junta de planeación difícil. Haz que sirva para evitar la siguiente discusión.",
          ],
          before:
            "Hi all, good meeting today. I think we are mostly aligned. Let's keep in touch about next steps.",
          after:
            "Hi all, here's what we decided today. 1) The launch moves to March 3. 2) Luis owns the client message and sends it by Friday. 3) Still open: the training budget. Dana and I will bring a proposal on Tuesday. Reply if your notes differ.",
          why: [
            "<em>Mostly aligned</em> hides the part where you are not. Decisions, owners, dates, and the open item by name leave nothing to remember differently.",
            "<em>Mostly aligned</em> esconde la parte en la que no lo están. Decisiones, responsables, fechas y el punto abierto con nombre no dejan nada que recordar distinto.",
          ],
        },
        {
          task: [
            "You agreed to a vendor decision on Monday and now have new information. Reopen it without rewriting history.",
            "El lunes aceptaste una decisión sobre un proveedor y ahora tienes información nueva. Reábrela sin reescribir la historia.",
          ],
          before: "I never really agreed with this decision and I think it was a mistake.",
          after:
            "I'd like to revisit Monday's decision on the vendor. I agreed in the meeting, and since then I've seen the support numbers, which change my view. Could I have fifteen minutes this week to show you?",
          why: [
            "It admits you agreed, names what is new, and asks for a limited amount of time. Reopening works when there is new information; it fails when it sounds like regret.",
            "Admite que estuviste de acuerdo, nombra qué es lo nuevo y pide un tiempo limitado. Reabrir funciona cuando hay información nueva; falla cuando suena a arrepentimiento.",
          ],
        },
        {
          task: [
            "An email after you lost your patience on a call. Cut it to one apology and one change.",
            "Un correo después de que perdiste la paciencia en una llamada. Redúcelo a una disculpa y un cambio.",
          ],
          before:
            "I am so sorry again for yesterday. I feel terrible and I hope you can forgive me. It will never happen again. Sorry for all the trouble.",
          after:
            "I'm sorry for losing my patience on yesterday's call. You were right to push on the deadline. I've moved the review up to Thursday so you have the draft a day earlier.",
          why: [
            "Four apologies became one, and the promise about the future became an action already taken. That is what makes it credible.",
            "Cuatro disculpas se volvieron una, y la promesa a futuro se volvió una acción ya tomada. Eso es lo que la hace creíble.",
          ],
        },
        {
          task: [
            "A colleague apologized to you by message for dismissing your idea in front of the client. It did bother you. Reply honestly.",
            "Un colega se disculpó contigo por mensaje por descartar tu idea frente al cliente. Sí te molestó. Contesta con honestidad.",
          ],
          before: "It's okay, don't worry, it was nothing.",
          after:
            "Thank you, I appreciate you saying that. It did throw me in the moment. Next time, could you raise it with me before the call? I'd welcome the pushback.",
          why: [
            "It accepts the apology, tells the truth about the effect, and asks for one change. <em>It was nothing</em> guarantees it happens again.",
            "Acepta la disculpa, dice la verdad sobre el efecto y pide un solo cambio. <em>It was nothing</em> garantiza que vuelva a pasar.",
          ],
        },
      ],
    },
    {
      t: "choice",
      title: ["Choose the response that repairs", "Elige la respuesta que repara"],
      items: [
        {
          prompt: [
            "Yesterday you were sharp with Marcus in a budget meeting. He was rude to you first. You want to repair it.",
            "Ayer fuiste cortante con Marcus en una junta de presupuesto. Él fue grosero contigo primero. Quieres repararlo.",
          ],
          options: [
            {
              en: "I'm sorry about yesterday, but you have to admit you started it.",
              ok: false,
              why: [
                "The apology is erased by <em>but</em>, and you have reopened the argument about who is to blame.",
                "El <em>but</em> borra la disculpa, y reabriste la discusión sobre quién tiene la culpa.",
              ],
            },
            {
              en: "I was sharper than I needed to be yesterday, and I'm sorry for that. I think we both got heated. I'd like to find a better way to work through the budget.",
              ok: true,
              why: [
                "Owns your part precisely, shares the rest in five words without accusing, and looks forward.",
                "Asume tu parte con precisión, reparte el resto en cinco palabras sin acusar y mira hacia adelante.",
              ],
            },
            {
              en: "I'm sorry. It was entirely my fault, and you were right about everything.",
              ok: false,
              why: [
                "It is not true, and he knows it. You have also given away your position on the budget.",
                "No es cierto, y él lo sabe. Además, regalaste tu postura sobre el presupuesto.",
              ],
            },
          ],
        },
        {
          prompt: [
            "On Tuesday you and Elena agreed that requests would go through a form. It is Friday and her team is still sending them by email.",
            "El martes tú y Elena acordaron que las solicitudes pasarían por un formulario. Es viernes y su equipo sigue mandándolas por correo.",
          ],
          options: [
            {
              en: "We agreed on this on Tuesday. Why is your team ignoring it?",
              ok: false,
              why: [
                "It assumes bad faith. The more likely cause is that the two of you left with different understandings.",
                "Supone mala fe. La causa más probable es que salieron de la junta entendiendo cosas distintas.",
              ],
            },
            {
              en: "Reminder to all: per our agreement on Tuesday, requests must be submitted through the form.",
              ok: false,
              why: [
                "A public reminder to her team goes around her. It reads as an order and as a complaint about her.",
                "Un recordatorio público a su equipo le pasa por encima. Se lee como una orden y como una queja sobre ella.",
              ],
            },
            {
              en: "I want to check something. I left Tuesday thinking we'd agreed to route requests through the form, and I'm still seeing them by email. Did we land in different places?",
              ok: true,
              why: [
                "Reopens the issue as a possible misunderstanding, which gives her room to answer either way.",
                "Reabre el tema como un posible malentendido, y eso le da espacio para contestar en cualquier sentido.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Luis stops by and says: <em>I owe you an apology for how I spoke to you in front of the client.</em> It did affect you.",
            "Luis pasa a verte y dice: <em>I owe you an apology for how I spoke to you in front of the client.</em> Sí te afectó.",
          ],
          options: [
            {
              en: "Don't worry about it. It was nothing.",
              ok: false,
              why: [
                "Generous in Spanish. In English it tells him the apology was unnecessary, and the real effect is never discussed.",
                "Generoso en español. En inglés le dice que la disculpa no hacía falta, y el efecto real nunca se habla.",
              ],
            },
            {
              en: "Thank you. I appreciate that. It did throw me in the moment, and I'm glad you said something.",
              ok: true,
              why: [
                "Accepts fully, is honest about the effect, and rewards him for coming to you.",
                "Acepta por completo, dice la verdad sobre el efecto y le reconoce que se haya acercado.",
              ],
            },
            {
              en: "Well, I'm glad you finally see it.",
              ok: false,
              why: [
                "It punishes the apology. He will think twice before offering another one.",
                "Castiga la disculpa. Lo va a pensar dos veces antes de ofrecer otra.",
              ],
            },
          ],
        },
        {
          prompt: [
            "After a tense call you are writing the recap. You agreed on the pilot dates. You did not agree on who pays for training.",
            "Después de una llamada tensa estás escribiendo el resumen. Acordaron las fechas del piloto. No acordaron quién paga la capacitación.",
          ],
          options: [
            {
              en: "Great call. Glad we're aligned on everything. Onward.",
              ok: false,
              why: [
                "It papers over the open item, which will return as a surprise when the invoice arrives.",
                "Tapa el punto abierto, que va a regresar como sorpresa cuando llegue la factura.",
              ],
            },
            {
              en: "As discussed, you committed to starting the pilot on the 10th. Please confirm.",
              ok: false,
              why: [
                "It reads like evidence being collected, records only their obligation, and leaves out the open question.",
                "Se lee como si estuvieras juntando evidencia, registra solo la obligación de la otra parte y deja fuera la pregunta abierta.",
              ],
            },
            {
              en: "Agreed: the pilot starts on the 10th at two sites. Still open: who covers the training cost. I'll bring numbers on Friday.",
              ok: true,
              why: [
                "States what is settled, names what is not, and attaches a next step to the open item.",
                "Dice qué quedó resuelto, nombra qué no y le pone un siguiente paso al punto abierto.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You won Tuesday's argument about the hiring plan. Since then Dana, who lost it, has been noticeably quiet with you.",
            "Ganaste la discusión del martes sobre el plan de contratación. Desde entonces Dana, que la perdió, está notablemente callada contigo.",
          ],
          options: [
            {
              en: "No hard feelings about Tuesday, right?",
              ok: false,
              why: [
                "It asks her to say everything is fine. She will say it, and nothing changes.",
                "Le pide que diga que todo está bien. Lo va a decir, y nada cambia.",
              ],
            },
            {
              en: "I know I pushed hard on Tuesday. I got the outcome I wanted, and I don't want it to cost us anything. How are you feeling about where it ended up?",
              ok: true,
              why: [
                "Repair is not only for when you were wrong. It names your part, says what you value, and asks a real question.",
                "Reparar no es solo para cuando te equivocaste. Nombra tu parte, dice qué valoras y hace una pregunta real.",
              ],
            },
            {
              en: "I hope you understand it was just business.",
              ok: false,
              why: [
                "It tells her that her reaction is the problem and closes the subject.",
                "Le dice que el problema es su reacción y cierra el tema.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "speak",
      title: [
        "Say it out loud: the two-minute repair",
        "Dilo en voz alta: la reparación de dos minutos",
      ],
      prompt: [
        "Yesterday, in a planning meeting, you said to Luis in front of his team: <em>That's the third time you've changed the plan.</em> It was accurate, and it was public. You still need the plan to stop changing. Call him and repair it using the five steps.",
        "Ayer, en una junta de planeación, le dijiste a Luis frente a su equipo: <em>That's the third time you've changed the plan.</em> Era exacto, y fue en público. Todavía necesitas que el plan deje de cambiar. Llámale y repáralo con los cinco pasos.",
      ],
      think: 15,
      speak: 40,
      frame:
        "Do you have two minutes? I want to circle back on ___. I ___, and I'm sorry. I still ___. How did it land on your end?",
      checklist: [
        ["I named exactly what I did.", "Nombré exactamente lo que hice."],
        ["I apologized once, without if or but.", "Me disculpé una sola vez, sin if ni but."],
        [
          "I kept my concern, in a separate sentence.",
          "Mantuve mi preocupación, en una frase aparte.",
        ],
        [
          "I asked for his side and proposed a next step.",
          "Pedí su versión y propuse un siguiente paso.",
        ],
        ["My voice was unhurried.", "Mi voz sonó sin prisa."],
      ],
      model:
        "Luis, do you have two minutes? I want to circle back on yesterday's meeting. I called out the plan changes in front of your team, and I should have come to you first. I'm sorry about that. I do still need the plan to hold steady for the next month, because my team rebuilds the schedule every time it moves. How did it land on your end? And could the two of us sit down Thursday and agree on what's fixed and what can still change?",
    },
    {
      t: "takeaways",
      items: [
        [
          "Repair within a day or two, in person or by voice, in about two minutes.",
          "Repara dentro de uno o dos días, en persona o por voz, en unos dos minutos.",
        ],
        [
          "Name the specific thing you did and apologize once. No if, no but.",
          "Nombra lo específico que hiciste y discúlpate una vez. Sin if, sin but.",
        ],
        [
          "Own your part and only your part. Keep your position in a separate sentence.",
          "Hazte cargo de tu parte y solo de tu parte. Mantén tu postura en una frase aparte.",
        ],
        [
          "Send the recap within the hour: agreed, who does what by when, still open.",
          "Manda el resumen dentro de la primera hora: lo acordado, quién hace qué y para cuándo, y lo que sigue abierto.",
        ],
        [
          "Reopen an issue with new information or a possible misunderstanding, never with an accusation.",
          "Reabre un tema con información nueva o con un posible malentendido, nunca con una acusación.",
        ],
      ],
    },
  ],
};
