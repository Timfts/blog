import { FILE_COLLECTIONS_PATH } from "../constants";

const socialLinks = {
  name: "social-links",
  label: "Social Links",
  format: "json",
  file: `${FILE_COLLECTIONS_PATH}/_social-links.json`,
  fields: [
    {
      name: "social-links-list",
      label: "Social links list",
      widget: "list",
      fields: [
        {
          label: "Label",
          name: "label",
          widget: "string",
        },
        {
          label: "Link",
          name: "link",
          widget: "string",
        },
      ],
    },
  ],
};

export default socialLinks;
