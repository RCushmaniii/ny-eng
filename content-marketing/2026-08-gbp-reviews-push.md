# GBP + reviews push — August 2026

Week-1 assets for the Google Business Profile channel.

**Why this channel first:** GBP recorded **337 customer interactions** against **4 organic
search clicks in 28 days**. Local queries rank 1.0–3.3 (`clases de ingles cerca de mi` at 1.5,
`escuela de ingles` at 3.3) while course and content pages sit at 30–80. The listing is the
channel that already works, and it sits at 15 reviews.

Language: Mexican Professional Spanish (es-MX). Iberian-marker grep clean.
Written per `google-business-post` skill; brand context `nyet/voice-dna-nyet.json` + `icp-nyet.json`.

---

## GBP post 1 — speed under pressure

Anchor: *meetings move too fast to respond in real time · translating in your head before speaking*

Button: **Más información** → https://www.nyenglishteacher.com/es/
Photo: Robert mid-session on a video call, laptop open, notes visible — a working session, not a stock classroom.

```
LAS JUNTAS NO ESPERAN A QUE TRADUZCAS EN TU CABEZA.

Conoces la sensación: la conversación avanza, tienes el argumento correcto y, para cuando encuentras las palabras en inglés, el tema ya cambió. No es un problema de nivel. Es un problema de velocidad y de estructura bajo presión.

Trabajo uno a uno con directores, gerentes y fundadores que ya hablan bien inglés y necesitan que el inglés los represente tan bien como el español.

Cada sesión se arma desde tu calendario real: practicamos dirigir juntas, presentar resultados, discrepar sin sonar agresivo, responder en el momento y sostener tu posición cuando alguien te presiona.

Sin libro de texto. Sin tarea. Sin ejercicios de gramática que no vas a usar.

Clases en línea y presenciales en Guadalajara.
```

---

## GBP post 2 — years of classes, still silent

Anchor: *years of classes and still frozen in the real meeting · group academies teaching the wrong vocabulary*

Button: **Más información** → https://www.nyenglishteacher.com/es/cursos/
Photo: a real meeting room or coworking space in Guadalajara, natural light, people mid-conversation.

```
TOMASTE CLASES DE INGLÉS DURANTE AÑOS. AUN ASÍ, EN LA JUNTA TE QUEDAS CALLADO.

No es falta de estudio. Las academias trabajan con volumen: el mismo libro, los mismos ejercicios y la misma clase para todos, sin importar si vas a pedir un café o a defender un presupuesto frente al corporativo.

Yo hago lo contrario. Soy hablante nativo de inglés y vengo de la industria: liderazgo de TI en empresas Fortune 500 en Estados Unidos. Sé cómo suena una junta cuando hay dinero y reputación de por medio, porque estuve en esas juntas.

Cada sesión se construye desde tu semana: tu presentación, tu llamada con el cliente, tu evaluación de desempeño. Trabajamos el lenguaje que necesitas el martes, no el capítulo cuatro.

El objetivo no es que hables inglés. Ya hablas inglés. El objetivo es que la persona que dirige en español también dirija en inglés.

Clases en línea y presenciales en Guadalajara.
```

---

## Review requests

No `review-request` skill exists in the writing system — written from
`voice-dna-nyet.json` + `icp-nyet.json` with a conventional structure. **Third use is the
threshold for building one; this is use one.**

Send individually, never as a broadcast. The ask works because it is specific and personal.

### A — current student, after a session that went well

```
Oye, una cosa antes de que se me olvide.

Estoy tratando de que más directores en Guadalajara encuentren este tipo de coaching, y las reseñas de Google son básicamente la única forma en que la gente decide a quién contactar.

¿Te tomarías dos minutos para dejarme una? Si puedes mencionar algo concreto — la presentación que preparamos, o cómo cambió una junta en particular — ayuda muchísimo más que un "muy buen maestro".

Aquí está el link directo: [REVIEW_LINK]

Y si prefieres no hacerlo, cero problema. Nos vemos el [DÍA].
```

### B — past student, no contact in months

```
Hola [NOMBRE], espero que todo vaya muy bien por allá.

Te escribo por algo rápido, sin agenda. Estoy trabajando en que más profesionales en Guadalajara encuentren este tipo de coaching ejecutivo, y las reseñas de Google pesan más que cualquier otra cosa que yo pueda hacer.

Si el trabajo que hicimos juntos te sirvió, ¿me dejarías una reseña? Toma dos minutos: [REVIEW_LINK]

Lo que más ayuda es algo específico — qué situación estabas enfrentando y qué cambió.

Gracias de antemano, y si en algún momento quieres retomar sesiones, aquí sigo.
```

### C — corporate client contact

```
Hola [NOMBRE], una petición breve.

El trabajo con [EMPRESA] ha sido de lo más satisfactorio de este año. Si tú o alguien del equipo pudiera dejar una reseña en Google, me ayudaría bastante a que otras empresas en la zona sepan que esto existe.

Link directo: [REVIEW_LINK]

Si en tu caso una reseña pública no es viable por política interna, lo entiendo perfectamente — una recomendación por LinkedIn funciona igual de bien.
```

---

## Rules for running this

- **Ask in person or by WhatsApp, never by mass email.** A personal ask converts; a broadcast reads as spam and Google's filters treat sudden review bursts from one source as suspicious.
- **Never incentivize.** No discounts, no free sessions in exchange for reviews. It violates Google policy and risks the removal of every review on the profile — a profile that already survived one spam-review cleanup in March.
- **Pace it.** A handful per week looks organic. Fifteen in one day does not.
- **Reply to every review**, including any negative one. Response rate is itself a ranking signal, and a measured public reply to criticism converts better than a wall of five stars.
- **Specific beats effusive.** "He prepared me for a board presentation in two sessions" outranks "excellent teacher" for both humans and the local algorithm.

## Tracking

Record each post and each review batch in `GMB-LOG.md`. That file was last updated
2026-03-30 and holds the only record of the highest-performing channel.
