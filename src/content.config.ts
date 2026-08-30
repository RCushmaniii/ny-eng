import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      featuredImage: image().optional(),
      imageAlt: z.string().optional(),
      heroVideo: z.string().optional(),
      heroVideoPoster: z.string().optional(),
      publishDate: z.string().transform((str) => new Date(str)),
      lastmod: z
        .string()
        .transform((str) => new Date(str))
        .optional(),
      publish: z.boolean().optional().default(true),
      categories: z.array(z.string()).optional().default([]),
      readingTime: z.string().optional(),
      audience: z.string().optional(),
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          image: z.string().optional(),
        })
        .optional(),
      // Text-to-speech. Use ttsVoice for a single fixed voice, or
      // ttsVoiceOptions to let the reader choose — the first entry is the
      // default and the switcher renders above the post. ttsRate omitted means
      // the API's long-standing 0.9; set 1.0 on a high-fidelity voice, which
      // sounds mechanical when time-stretched.
      ttsVoice: z.string().optional(),
      ttsVoiceOptions: z
        .array(z.object({ label: z.string(), voice: z.string() }))
        .optional(),
      ttsRate: z.number().min(0.5).max(1.5).optional(),
      // Optional FAQ pairs — when present, the post emits FAQPage structured data.
      // Mirror the article's on-page Q&A here so the visible copy and the schema stay in sync.
      faq: z
        .array(
          z.object({
            question: z.string(),
            answer: z.string(),
          }),
        )
        .optional(),
      // Optional list of geographic areas served — when present, the post emits
      // Service structured data with areaServed (used by local/geo landing posts).
      serviceArea: z.array(z.string()).optional(),
      translations: z
        .object({
          en: z.string().optional(),
          es: z.string().optional(),
        })
        .optional(),
    }),
});

const legalCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
  schema: z.object({
    title: z.string(),
    lastUpdated: z.string().transform((str) => new Date(str)),
    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  legal: legalCollection,
};
