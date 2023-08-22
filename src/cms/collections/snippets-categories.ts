const snippetsCategories = {
  name: "snippets-categories",
  label: "Snippets categories",
  format: "json",
  file: "src/data/snippets-categories.json",
  fields: [
    {
      name: "snippets-categories-list",
      label: "Snippets categories list",
      widget: "list",
      fields: [
        {
          label: "slug",
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
      ],
    },
  ],
};

export default snippetsCategories;
