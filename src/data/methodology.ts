// src/data/methodology.ts

// Define the structure for a single step
interface Step {
  icon: string;
  title: string;
  description: string;
}

// Define the structure for the entire section's content
export interface Methodology {
  title: string;
  subtitle: string;
  steps: Step[];
}

// Export the actual content object that will be used on the pages
export const coreMethodology: Methodology = {
  title: "How It Works",
  subtitle: "",
  steps: [
    {
      icon: "lucide:search-check",
      title: "We talk first.",
      description:
        "A short intro call. Your role, goals, fit—no pressure, no pitch.",
    },
    {
      icon: "lucide:map",
      title: "I build your plan.",
      description:
        "From your level, industry, and pressure moments. Custom sessions, not off-the-shelf.",
    },
    {
      icon: "lucide:settings",
      title: "You practice under pressure.",
      description:
        "Pitches, negotiations, client calls. Feedback on tone, pronunciation, those tiny signals that make \"fluent\" turn commanding. Mess up with me, not when it counts.",
    },
    {
      icon: "lucide:message-square-text",
      title: "I refine as you grow.",
      description:
        "Communication sharpens? I adjust—new challenges, scenarios, targets. Evolves with your career.",
    },
  ],
};
