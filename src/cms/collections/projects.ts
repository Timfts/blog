import { FILE_COLLECTIONS_PATH } from "../constants";

const projects = {
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
      widget: "date",
      date_format: "YYYY"
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

export default projects;
