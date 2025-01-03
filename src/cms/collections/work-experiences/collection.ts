import { defineCollection, z } from "astro:content";

const workExperiencesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    start_date: z.union([z.date(), z.string()]),
    end_date: z.union([z.date(), z.string()]).optional(),
    company_logo: z.string(),
    company_name: z.string(),
    description: z.string(),
  }),
});

export default workExperiencesCollection;
