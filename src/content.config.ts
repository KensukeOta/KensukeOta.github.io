import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		category: z.string(),
		period: z.string(),
		role: z.string(),
		technologies: z.array(z.string()),
		featured: z.boolean().default(false),
		order: z.number(),
		github: z.string().url().optional(),
		demo: z.string().url().optional(),
	}),
});

export const collections = { projects };
