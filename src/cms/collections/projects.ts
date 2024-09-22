import { defineCollection, z } from "astro:content";
import { FILE_COLLECTIONS_PATH } from "../constants";

export const projects = {
  name: "projects",
  label: "Projects",
  label_singular: "project",
  create: true,
  preview_path: "pages/{{slug}}",
  folder: `${FILE_COLLECTIONS_PATH}/projects`,
  i18n: true,
  fields: [
    {
      label: "Title",
      name: "title",
      widget: "string",
      i18n: true,
      required: true,
    },
    {
      label: "Featured",
      name: "featured",
      widget: "boolean",
      i18n: "duplicate",
      required: true,
    },
    {
      label: "Project link",
      name: "project_link",
      required: false,
      widget: "string",
      i18n: "duplicate",
    },
    {
      label: "Year",
      name: "proj_created_year",
      i18n: "duplicate",
      widget: "number",
      date_format: "YYYY",
    },
    {
      label: "Publish Date",
      name: "created_date",
      i18n: "duplicate",
      widget: "datetime",
    },
    {
      label: "Featured Image",
      name: "thumbnail",
      widget: "image",
      required: false,
      i18n: "duplicate",
    },
    {
      label: "Excerpt",
      name: "excerpt",
      widget: "text",
      required: true,
      i18n: true,
    },
    {
      label: "Body",
      name: "body",
      widget: "markdown",
      required: false,
      i18n: true,
    },
    {
      label: "Learnings",
      name: "learnings",
      widget: "relation",
      collection: "segmentation-data",
      file: "learnings",
      multiple: true,
      i18n: "duplicate",
      search_fields: ["learnings-list.*.label"],
      display_fields: ["learnings-list.*.label"],
      value_field: "learnings-list.*.slug",
    },
  ],
};

export const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    featured: z.boolean(),
    project_link: z.string().optional(),
    proj_created_year: z.number(),
    created_date: z.union([z.date(), z.string()]),
    thumbnail: z.string().optional(),
    excerpt: z.string(),
    body: z.string().optional(),
    learnings: z.array(z.string()),
  }),
});
