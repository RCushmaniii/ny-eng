// Level 1 · Lesson 3 — "Give, Send & the Explain Trap"
// give / send / show allow TWO orders (dative alternation).
// explain / describe / suggest allow only ONE: thing + to + person. Never "explain me this."

import type { SentenceTransform } from "@data/advanced/types";
import type { ErrorCorrectionSet } from "@data/intermediate/types";

// Reused with SentenceTransformer: "flat" = one correct order, "strong" = the other correct order.
// The point isn't weak→strong; it's that BOTH orders are valid for give/send/show.
export const l3Transforms: SentenceTransform[] = [
  {
    flat: "I sent an email to my manager.",
    flatEs: "Le mandé un correo a mi gerente.",
    strong: "I sent my manager an email.",
    strongEs: "Le mandé a mi gerente un correo.",
    technique: "person first",
    techniqueEs: "persona primero",
    why: "send allows both orders. Move the person in front of the thing and drop “to”. Same meaning.",
    whyEs:
      "send permite ambos órdenes. Pon la persona antes de la cosa y quita “to”. Mismo significado.",
  },
  {
    flat: "She gave her daughter a gift.",
    flatEs: "Le dio a su hija un regalo.",
    strong: "She gave a gift to her daughter.",
    strongEs: "Le dio un regalo a su hija.",
    technique: "thing first + to",
    techniqueEs: "cosa primero + to",
    why: "give works both ways. Put the thing first and add “to” before the person.",
    whyEs:
      "give funciona de las dos formas. Pon la cosa primero y agrega “to” antes de la persona.",
  },
  {
    flat: "I showed the report to my boss.",
    flatEs: "Le mostré el reporte a mi jefe.",
    strong: "I showed my boss the report.",
    strongEs: "Le mostré a mi jefe el reporte.",
    technique: "person first",
    techniqueEs: "persona primero",
    why: "show is flexible too. Both are natural — pick whichever puts the new information last.",
    whyEs:
      "show también es flexible. Ambas son naturales — elige la que deje la información nueva al final.",
  },
  {
    flat: "We sent the client an update.",
    flatEs: "Le mandamos al cliente una actualización.",
    strong: "We sent an update to the client.",
    strongEs: "Le mandamos una actualización al cliente.",
    technique: "thing first + to",
    techniqueEs: "cosa primero + to",
    why: "Both orders are correct with send. There is no “more correct” version — just emphasis.",
    whyEs: "Ambos órdenes son correctos con send. No hay versión “más correcta” — solo énfasis.",
  },
  {
    flat: "They gave a discount to the customer.",
    flatEs: "Le dieron un descuento al cliente.",
    strong: "They gave the customer a discount.",
    strongEs: "Le dieron al cliente un descuento.",
    technique: "person first",
    techniqueEs: "persona primero",
    why: "give, send, show, offer, lend — all take both orders. Explain does NOT (next section).",
    whyEs:
      "give, send, show, offer, lend — todos toman ambos órdenes. Explain NO (siguiente sección).",
  },
];

export const l3Corrections: ErrorCorrectionSet = {
  title: "The Explain Trap",
  titleEs: "La trampa de Explain",
  description:
    "explain / describe / suggest take only “thing to person”. Tap the error in each sentence.",
  descriptionEs:
    "explain / describe / suggest solo toman “cosa to persona”. Toca el error en cada oración.",
  items: [
    {
      incorrect: "I explained my manager the problem.",
      correct: "I explained the problem to my manager.",
      incorrectHighlight: "explained my manager the problem",
      correctHighlight: "explained the problem to my manager",
      explanation:
        "explain something TO someone. Unlike give/tell, explain can never put the person first.",
      explanationEs:
        "explain something TO someone. A diferencia de give/tell, explain nunca pone la persona primero.",
      errorType: "word-order",
    },
    {
      incorrect: "Can you explain me this rule?",
      correct: "Can you explain this rule to me?",
      incorrectHighlight: "explain me this rule",
      correctHighlight: "explain this rule to me",
      explanation: "“Explain me” is the classic error (explícame). It must be explain … to me.",
      explanationEs: "“Explain me” es el error clásico (explícame). Debe ser explain … to me.",
      errorType: "literal-translation",
    },
    {
      incorrect: "The teacher explained the students the homework.",
      correct: "The teacher explained the homework to the students.",
      incorrectHighlight: "the students the homework",
      correctHighlight: "the homework to the students",
      explanation: "Thing first, then “to” + person. Explain never uses the double-object order.",
      explanationEs:
        "Cosa primero, luego “to” + persona. Explain nunca usa el orden de doble objeto.",
      errorType: "word-order",
    },
    {
      incorrect: "I sent to my manager an email.",
      correct: "I sent my manager an email.",
      incorrectHighlight: "sent to my manager an email",
      correctHighlight: "sent my manager an email",
      explanation:
        "With the person-first order, drop “to”: send my manager an email (or: send an email to my manager).",
      explanationEs:
        "Con el orden de persona primero, quita “to”: send my manager an email (o: send an email to my manager).",
      errorType: "word-order",
    },
    {
      incorrect: "She described me the situation.",
      correct: "She described the situation to me.",
      incorrectHighlight: "described me the situation",
      correctHighlight: "described the situation to me",
      explanation: "describe behaves like explain — thing + to + person only. Never “describe me”.",
      explanationEs:
        "describe se comporta como explain — cosa + to + persona únicamente. Nunca “describe me”.",
      errorType: "word-order",
    },
    {
      incorrect: "I gave a gift my daughter.",
      correct: "I gave my daughter a gift.",
      incorrectHighlight: "a gift my daughter",
      correctHighlight: "my daughter a gift",
      explanation:
        "give allows two orders — but if the person comes second, you need “to”: gave a gift TO my daughter.",
      explanationEs:
        "give permite dos órdenes — pero si la persona va segunda, necesitas “to”: gave a gift TO my daughter.",
      errorType: "word-order",
    },
  ],
};
