import { defineCollection, z } from "astro:content";

// Define blog collection with proper schema
const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      featuredImage: image().optional(),
      imageAlt: z.string().optional(),
      heroVideo: z.string().optional(),
      heroVideoPoster: z.string().optional(),
      // Handle dates safely to ensure they work in both dev and build
      publishDate: z.string().transform((str) => new Date(str)),
      lastmod: z
        .string()
        .transform((str) => new Date(str))
        .optional(),
      publish: z.boolean().optional().default(true),
      // Make categories optional with a default empty array to prevent errors
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
      ttsVoice: z.string().optional(),
      translations: z
        .object({
          en: z.string().optional(),
          es: z.string().optional(),
        })
        .optional(),
    }),
});

const legalCollection = defineCollection({
  type: "content",
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
