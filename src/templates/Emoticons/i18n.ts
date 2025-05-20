import { getPageI18NPathMap } from "@helpers/server/i18n";

export const pathMap = getPageI18NPathMap("emoticons");

const i18n = {
  "pt-br": {
    orLabel: "ou",
    title: "Emoticons",
    tableHeaders: {
      emoticon: "Emoticon",
      name: "Nome",
      shortcuts: "Atalhos",
    },
    
  },
  en: {
    orLabel: "or",
    title: "Emoticons",
    tableHeaders: {
      emoticon: "Emoticon",
      name: "Name",
      shortcuts: "Shortcuts",
      orLabel: "or",
    },
  },
};

export default i18n;
