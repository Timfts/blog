import { FILE_COLLECTIONS_PATH } from "../constants";

const learnings = {
  name: "learnings",
  label: "Learnings",
  format: "json",
  file: `${FILE_COLLECTIONS_PATH}/learnings.json`,
  fields: [
    {
      name: "learnings-list",
      label: "Learnings list",
      widget: "list",
      fields: [
        {
          label: "Slug",
          name: "slug",
          pattern: [
            "^[a-z0-9]+(?:-[a-z0-9]+)*$",
            "A url can have no spaces or special characters",
          ],
        },
        {
          label: "Label",
          name: "label",
          widget: "string",
        },
        {
          label: "Color",
          name: "color",
          widget: "color",
        },
      ],
    },
  ],
};

export default learnings;
