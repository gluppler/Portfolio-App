import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.string().optional(),
		githubUrl: z.string().url(),
	}),
});

const ventures = defineCollection({
    type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		websiteUrl: z.string().url(),
	}),
});

export const collections = { projects, ventures };
