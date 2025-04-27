import { FILE_COLLECTIONS_PATH } from "../constants";

const postTopics = {
  name: "post-topics",
  label: "Post Topics",
  format: "json",
  extension: "json",
  file: `${FILE_COLLECTIONS_PATH}/_post-topics.json`,
  fields: [
    {
      name: "topics-list",
      label: "List",
      widget: "list",
      collapsed: true,
      label_singular: "category",
      fields: [
        {
          label: "Slug",
          name: "slug",
          widget: "string",
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
          label: "Label (PT-BR)",
          name: "label-ptbr",
          widget: "string",
        },
        {
          label: "Color",
          name: "color",
          widget: "color",
          allowInput: true,
        },
        {
          label: "Image",
          name: "image",
          widget: "image",
          allow_multiple: false,
          choose_url: false,
          required: false,
        },
      ],
    },
  ],
};

export default postTopics;
