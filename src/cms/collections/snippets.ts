import { FILE_COLLECTIONS_PATH } from "../constants";

const snippets = {
  name: "snippets",
  label: "Snippets",
  label_singular: "Snippet",
  create: true,
  preview_path: "pages/{{slug}}",
  folder: `${FILE_COLLECTIONS_PATH}/snippets`,
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
      label: "excerpt",
      name: "Excerpt",
      widget: "text",
      required: true,
      i18n: true,
    },
    {
      label: "Github Gist Link",
      name: "gist-link",
      required: true,
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
      label: "Categories",
      name: "categories",
      widget: "relation",
      collection: "segmentation-data",
      file: "snippets-categories",
      multiple: true,
      i18n: "duplicate",
      search_fields: ["snippets-categories-list.*.label"],
      display_fields: ["snippets-categories-list.*.label"],
      value_field: "snippets-categories-list.*.slug",
    },
  ],
};

export default snippets;
