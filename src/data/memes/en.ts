// Meme portfolio data - English

export type MemeRole =
  | "all"
  | "tech-leaders"
  | "startup-founders"
  | "logistics-managers"
  | "executives"
  | "professional-services";

export interface Meme {
  id: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
  roles: MemeRole[];
  datePublished: string;
}

export const roleLabels: Record<MemeRole, string> = {
  all: "All Memes",
  "tech-leaders": "Tech Leaders & Engineers",
  "startup-founders": "Startup Founders & CEOs",
  "logistics-managers": "Logistics & Supply Chain Managers",
  executives: "C-Suite Executives",
  "professional-services": "Professional Services",
};

export const roleSeoDescriptions: Record<MemeRole, string> = {
  all: "Funny, relatable English memes for professionals working in global business. See how everyday workplace moments become learning opportunities.",
  "tech-leaders":
    "English memes for tech leaders and engineers navigating code reviews, standups, and cross-team communication in a second language.",
  "startup-founders":
    "English memes for startup founders and CEOs who pitch, fundraise, and lead teams across borders -- all in their second language.",
  "logistics-managers":
    "English memes for logistics and supply chain managers coordinating shipments, customs paperwork, and international partners in English.",
  executives:
    "English memes for C-suite executives presenting to boards, leading global teams, and closing deals in their second language.",
  "professional-services":
    "English memes for lawyers, consultants, doctors, and other professionals who serve international clients in English.",
};

export const memes: Meme[] = [
  {
    id: "tech-standup-struggle",
    title: "When the Standup Goes Off-Script",
    caption:
      "You rehearsed your update perfectly... then someone asks a follow-up question.",
    image: "/images/memes/placeholder-1.jpg",
    alt: "Meme about struggling with unexpected questions during a tech standup meeting in English",
    roles: ["tech-leaders"],
    datePublished: "2025-06-01",
  },
  {
    id: "exec-board-meeting",
    title: "Board Meeting Poker Face",
    caption:
      "When you understood about 70% of the CFO's quarterly report but nod like it was 100%.",
    image: "/images/memes/placeholder-2.jpg",
    alt: "Meme about pretending to understand everything during a board meeting in English",
    roles: ["executives"],
    datePublished: "2025-06-05",
  },
  {
    id: "startup-pitch-day",
    title: "Pitch Day Pronunciation",
    caption:
      "Your startup idea is worth millions, but the word 'competitive advantage' just won't cooperate.",
    image: "/images/memes/placeholder-3.jpg",
    alt: "Meme about mispronouncing key business terms during a startup pitch in English",
    roles: ["startup-founders"],
    datePublished: "2025-06-10",
  },
];

// Computed: group memes by role
export const memesByRole: Record<MemeRole, Meme[]> = {
  all: memes,
  "tech-leaders": memes.filter((m) => m.roles.includes("tech-leaders")),
  "startup-founders": memes.filter((m) =>
    m.roles.includes("startup-founders"),
  ),
  "logistics-managers": memes.filter((m) =>
    m.roles.includes("logistics-managers"),
  ),
  executives: memes.filter((m) => m.roles.includes("executives")),
  "professional-services": memes.filter((m) =>
    m.roles.includes("professional-services"),
  ),
};
