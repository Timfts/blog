import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    featured: z.boolean(),
    project_link: z.string().optional(),
    proj_created_year: z.number(),
    proj_finish_year: z.number().optional(),
    created_date: z.union([z.date(), z.string()]),
    thumbnail: z.string().optional(),
    excerpt: z.string(),
    body: z.string().optional(),
    learnings: z.array(z.string()),
  }),
});

export default projectsCollection;
