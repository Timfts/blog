import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    project_link: z.string().optional(),
    proj_created_year: z.date(),
    created_date: z.union([z.date(), z.string()]),
    thumbnail: z.string().optional(),
    excerpt: z.string(),
    body: z.string().optional(),
    learnings: z.array(z.string()),
  }),
});

const postsColection = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    enabled: z.boolean(),
    page_url: z.string().optional(),
    external_link: z.string().optional(),
    created_date: z.date().optional(),
    updated_date: z.union([z.date(), z.string()]).optional(),
    thumbnail: z.string().optional(),
    excerpt: z.string().optional(),
    body: z.string().optional().optional(),
    topics: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  posts: postsColection,
};
