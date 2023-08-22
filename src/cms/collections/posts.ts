import { PAGES_COLLECTIONS_PATH } from "../constants";
const posts = {
  name: "posts",
  label: "Posts",
  label_singular: "Post",
  create: true,
  preview_path: "pages/{{slug}}",
  folder: `${PAGES_COLLECTIONS_PATH}/posts`,
  i18n: true,
  fields: [
    {
      label: "Title",
      name: "title",
      widget: "string",
      i18n: true,
    },
    {
      label: "External link",
      name: "external-link",
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
      label: "excerpt",
      name: "Excerpt",
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

export default posts;
