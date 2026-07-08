// Level 3 · Lesson 8 — "When the Pattern Changes the Meaning"
// The verbs where to-do and -ing are BOTH grammatical but mean different things:
// stop, remember, forget, try, regret, go on. Choosing the wrong form = wrong meaning, not just an error.

import type { PatternDrillSet } from "./types";
import type { ErrorCorrectionSet } from "@data/intermediate/types";

export const l8Drill: PatternDrillSet = {
  title: "Which form fits the meaning?",
  titleEs: "¿Cuál forma encaja con el significado?",
  instruction: "Both forms are grammatical. Read the meaning, then choose.",
  instructionEs: "Ambas formas son gramaticales. Lee el significado y luego elige.",
  items: [
    {
      prompt: "On the way to work I stopped ___ coffee. (I paused in order to buy it.)",
      options: [
        { label: "to buy", correct: true },
        { label: "buying", correct: false },
      ],
      answer: "On the way to work I stopped to buy coffee.",
      diagnosis: "stop TO DO = pause in order to do it. stop DOING = quit the activity.",
      diagnosisEs: "stop TO DO = pausar para hacerlo. stop DOING = dejar de hacer la actividad.",
    },
    {
      prompt: "The doctor told me to stop ___ so much coffee. (Quit the habit.)",
      options: [
        { label: "to drink", correct: false },
        { label: "drinking", correct: true },
      ],
      answer: "The doctor told me to stop drinking so much coffee.",
      diagnosis: "stop DOING = end the habit. This is the meaning you need most often.",
      diagnosisEs: "stop DOING = terminar el hábito. Es el significado que más vas a necesitar.",
    },
    {
      prompt: "Please remember ___ the report before you leave. (Don't forget the task.)",
      options: [
        { label: "to send", correct: true },
        { label: "sending", correct: false },
      ],
      answer: "Please remember to send the report before you leave.",
      diagnosis: "remember TO DO = don't forget a future task. remember DOING = recall a past act.",
      diagnosisEs:
        "remember TO DO = no olvidar una tarea futura. remember DOING = recordar algo pasado.",
    },
    {
      prompt: "I remember ___ that email last week — I'm sure it went out. (A past memory.)",
      options: [
        { label: "to send", correct: false },
        { label: "sending", correct: true },
      ],
      answer: "I remember sending that email last week.",
      diagnosis: "remember DOING = you have a memory of doing it in the past.",
      diagnosisEs: "remember DOING = tienes el recuerdo de haberlo hecho en el pasado.",
    },
    {
      prompt: "The file won't open. Try ___ your computer. (Experiment with a solution.)",
      options: [
        { label: "to restart", correct: false },
        { label: "restarting", correct: true },
      ],
      answer: "The file won't open. Try restarting your computer.",
      diagnosis:
        "try DOING = experiment with a method to see if it works. try TO DO = make an effort / attempt.",
      diagnosisEs:
        "try DOING = experimentar con un método a ver si funciona. try TO DO = esforzarse / intentar.",
    },
    {
      prompt: "I tried ___ the door, but it was locked. (I made the effort.)",
      options: [
        { label: "to open", correct: true },
        { label: "opening", correct: false },
      ],
      answer: "I tried to open the door, but it was locked.",
      diagnosis: "try TO DO = attempt something (and often fail). try DOING = test a solution.",
      diagnosisEs:
        "try TO DO = intentar algo (y a menudo fallar). try DOING = probar una solución.",
    },
    {
      prompt: "We regret ___ you that your application was not successful. (Formal bad news.)",
      options: [
        { label: "to inform", correct: true },
        { label: "informing", correct: false },
      ],
      answer: "We regret to inform you that your application was not successful.",
      diagnosis: "regret TO DO = a fixed formal phrase for delivering bad news right now.",
      diagnosisEs: "regret TO DO = frase formal fija para dar malas noticias en este momento.",
    },
    {
      prompt: "I regret ___ him the news so bluntly. (I'm sorry about a past action.)",
      options: [
        { label: "to tell", correct: false },
        { label: "telling", correct: true },
      ],
      answer: "I regret telling him the news so bluntly.",
      diagnosis: "regret DOING = you are sorry about something you already did.",
      diagnosisEs: "regret DOING = lamentas algo que ya hiciste.",
    },
  ],
};

export const l8Corrections: ErrorCorrectionSet = {
  title: "Fix the meaning",
  titleEs: "Corrige el significado",
  description: "Here the wrong form gives the wrong meaning. Tap the form that doesn't fit.",
  descriptionEs:
    "Aquí la forma incorrecta da un significado incorrecto. Toca la forma que no encaja.",
  items: [
    {
      incorrect: "My doctor said I should stop to eat sugar.",
      correct: "My doctor said I should stop eating sugar.",
      incorrectHighlight: "to eat",
      correctHighlight: "eating",
      explanation:
        "The doctor means quit the habit → stop DOING. “Stop to eat” means pause in order to eat.",
      explanationEs:
        "El doctor quiere que dejes el hábito → stop DOING. “Stop to eat” significa pausar para comer.",
      errorType: "word-order",
    },
    {
      incorrect: "Remember sending the invoice tomorrow morning.",
      correct: "Remember to send the invoice tomorrow morning.",
      incorrectHighlight: "sending",
      correctHighlight: "to send",
      explanation:
        "It's a future task → remember TO DO. “Remember sending” is a memory of the past.",
      explanationEs:
        "Es una tarea futura → remember TO DO. “Remember sending” es un recuerdo del pasado.",
      errorType: "word-order",
    },
    {
      incorrect: "The app is frozen — try to restart it, that usually works.",
      correct: "The app is frozen — try restarting it, that usually works.",
      incorrectHighlight: "to restart",
      correctHighlight: "restarting",
      explanation: "You're suggesting a solution to test → try DOING. try TO DO = make an effort.",
      explanationEs:
        "Sugieres una solución para probar → try DOING. try TO DO = hacer un esfuerzo.",
      errorType: "word-order",
    },
    {
      incorrect: "We regret informing you that the event is cancelled.",
      correct: "We regret to inform you that the event is cancelled.",
      incorrectHighlight: "informing",
      correctHighlight: "to inform",
      explanation: "Delivering bad news now → the fixed phrase regret TO inform.",
      explanationEs: "Dar malas noticias ahora → la frase fija regret TO inform.",
      errorType: "literal-translation",
    },
    {
      incorrect: "I'll never forget to meet my hero in person last year.",
      correct: "I'll never forget meeting my hero in person last year.",
      incorrectHighlight: "to meet",
      correctHighlight: "meeting",
      explanation: "A memorable past experience → forget DOING. forget TO DO = fail to do a task.",
      explanationEs:
        "Una experiencia pasada memorable → forget DOING. forget TO DO = no hacer una tarea.",
      errorType: "word-order",
    },
    {
      incorrect: "She finished the budget, then went on talking about hiring.",
      correct: "She finished the budget, then went on to talk about hiring.",
      incorrectHighlight: "went on talking",
      correctHighlight: "went on to talk",
      explanation:
        "She moved to a NEW topic → go on TO DO. go on DOING = keep doing the same thing.",
      explanationEs: "Pasó a un tema NUEVO → go on TO DO. go on DOING = seguir haciendo lo mismo.",
      errorType: "word-order",
    },
  ],
};
