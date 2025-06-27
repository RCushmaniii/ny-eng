import { defineCollection, z } from 'astro:content';
import { categories } from '../data/categories.js';

// Extract category names for the enum
const categoryNames = categories.map((category: { name: string }) => category.name);

// Define blog collection with proper schema
const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    excerpt: z.string(),
    featuredImage: image().optional(),
    imageAlt: z.string().optional(),
    // Handle dates safely to ensure they work in both dev and build
    publishDate: z.string().transform(str => new Date(str)),
    publish: z.boolean().optional().default(true),
    // Make categories optional with a default empty array to prevent errors
    categories: z.array(z.string()).optional().default([]),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      image: z.string().optional(),
    }).optional(),
    translations: z.object({
      en: z.string().optional(),
      es: z.string().optional(),
    }).optional(),
  }),
});

const legalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lastUpdated: z.string().transform(str => new Date(str)),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  legal: legalCollection,
};
