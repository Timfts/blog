import { FILE_COLLECTIONS_PATH } from "../constants";

const links = {
  name: "links",
  label: "Links",
  format: "json",
  file: `${FILE_COLLECTIONS_PATH}/_links.json`,
  fields: [
    {
      name: "links-list",
      label: "Links list",
      widget: "list",
      fields: [
        {
          label: "Label",
          name: "label",
          widget: "string",
          i18n: true,
        },
        {
          label: "Link",
          name: "link",
          widget: "string",
          i18n: true,
        },
      ],
    },
  ],
};

export default links;
