import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    project_link: z.string().optional(),
    proj_created_year: z.date(),
    created_date: z.date(),
    thumbnail: z.string().optional(),
    excerpt: z.string(),
    body: z.string().optional(),
    learnings: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectsCollection,
};
