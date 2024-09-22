import { defineCollection, z } from "astro:content";
import { FILE_COLLECTIONS_PATH } from "../constants";

export const posts = {
  name: "posts",
  label: "Posts",
  label_singular: "Post",
  create: true,
  preview_path: "pages/{{slug}}",
  folder: `${FILE_COLLECTIONS_PATH}/posts`,
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
      label: "Enabled",
      name: "enabled",
      widget: "boolean",
      default: true,
      i18n: true,
    },
    {
      label: "Page URL",
      name: "page_url",
      widget: "string",
      i18n: true,
      required: true,
    },
    {
      label: "External link",
      name: "external_link",
      required: false,
      widget: "string",
      i18n: "duplicate",
    },
    {
      label: "Publish Date",
      name: "created_date",
      i18n: "duplicate",
      widget: "datetime",
    },
    {
      label: "Updated Date",
      name: "updated_date",
      default: "",
      widget: "datetime",
      i18n: "duplicate",
      required: false,
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
      label: "Topics",
      name: "topics",
      widget: "relation",
      collection: "segmentation-data",
      file: "post-topics",
      multiple: true,
      i18n: "duplicate",
      search_fields: ["topics-list.*.label"],
      display_fields: ["topics-list.*.label"],
      value_field: "topics-list.*.slug",
    },
  ],
};

export const postsColection = defineCollection({
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
