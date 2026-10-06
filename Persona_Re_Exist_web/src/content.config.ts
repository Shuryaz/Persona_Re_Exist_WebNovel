import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const chapters = defineCollection({
	loader: glob({ base: '../05_chapters', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			volume: z.number().optional(),
			chapterNumber: z.number().optional(),
			draft: z.boolean().optional(),
			pubDate: z.coerce.date().optional(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

export const collections = { chapters };
