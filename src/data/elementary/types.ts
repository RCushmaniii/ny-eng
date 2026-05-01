// Elementary course type definitions — "Tell Your Story" (A2)
//
// Mirrors the intermediate course pattern with one addition: a `published`
// flag per unit, so the course landing page can show "coming soon" for
// units still in build. As each unit ships, flip its `published` to true.

export interface ElementaryUnit {
  id: number;
  slug: string;
  slugEs: string;
  title: string;
  titleEs: string;
  subtitle: string;
  subtitleEs: string;
  description: string;
  descriptionEs: string;
  grammarFocus: string;
  grammarFocusEs: string;
  pronunciationFocus: string;
  pronunciationFocusEs: string;
  /** Lucide icon name for the unit card */
  icon: string;
  /** Whether the unit page is built and live. False = "coming soon" badge. */
  published: boolean;
}
