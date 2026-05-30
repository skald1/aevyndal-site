import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const atlas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/atlas' }),
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

export const collections = { atlas };
