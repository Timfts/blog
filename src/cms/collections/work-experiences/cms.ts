import { FILE_COLLECTIONS_PATH } from "@cms/constants";

const workExperiencesCMSConfig = {
  name: "work-experiences",
  label: "Work Experiences",
  label_singular: "Work experince",
  identifier_field: "company_name",
  create: true,
  preview_path: "pages/{{slug}}",
  folder: `${FILE_COLLECTIONS_PATH}/work-experiences`,
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
      label: "Start date",
      name: "start_date",
      i18n: "duplicate",
      widget: "datetime",
      required: true,
    },
    {
      label: "end date",
      name: "end_date",
      i18n: "duplicate",
      widget: "datetime",
      required: false,
    },
    {
      label: "Company Logo",
      name: "company_logo",
      widget: "image",
      required: true,
      i18n: "duplicate",
    },
    {
      label: "Company Name",
      name: "company_name",
      widget: "string",
      required: true,
      i18n: "duplicate",
    },
    {
      label: "Description",
      name: "description",
      widget: "text",
      required: true,
      i18n: true,
    },
  ],
};

export default workExperiencesCMSConfig;
