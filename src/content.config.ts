import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const ages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/ages' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    label: z.string(),
    ordinal: z.number().int().positive(),
    question: z.string(),
    genre: z.string(),
    mood: z.string(),
    excerpt: z.string(),
    accent: z.string(),
    atmosphere: z.array(z.string()),
    homepageOrder: z.number().int().positive(),
    draft: z.boolean().optional(),
  }),
});

const locations = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/locations' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    label: z.string().optional(),
    locationType: z.string(),
    age: z.string(),
    region: z.string().optional(),
    summary: z.string(),
    invitation: z.string(),
    belonging: z.string().optional(),
    storyPromise: z.string().optional(),
    heroImage: z.string().optional(),
    heroVideo: z.string().optional(),
    heroPoster: z.string().optional(),
    href: z.string(),
    homepageFeatured: z.boolean(),
    homepageOrder: z.number().int().positive(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const atlas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/atlas' }),
  schema: z.object({
    name: z.string(),
    pronunciation: z.string().optional(),
    age: z.string(),
    tagline: z.string(),
    hero_image: z.string(),
    hero_alt: z.string(),
    government: z.string(),
    capital: z.string(),
    region: z.string(),
    climate: z.string(),
    faith: z.string(),
    lineages: z.array(z.string()),
    ruler: z.string(),
    conflicts: z.string(),
    related: z.array(z.string()),
    seo_description: z.string(),
  }),
});

export const collections = { ages, atlas, locations };
