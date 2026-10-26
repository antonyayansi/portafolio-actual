import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    heroLabel: z.string().optional(),
    /** Portada/banner: ruta en /public, ej. /blog/mi-cover.webp */
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
  }),
});

export const collections = { posts };
