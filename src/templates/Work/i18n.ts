import pagePaths from "@constants/pagePaths";
import { getPageI18NPathMap } from "@helpers/server/i18n";

export const pathMap = getPageI18NPathMap("work");

const i18n = {
  en: {
    title: "Work",
    currentWork: "Currently",
    defaultGoBackPage: pagePaths.en.home,
  },
  "pt-br": {
    title: "Trabalho",
    currentWork: "Atualmente",
    defaultGoBackPage: pagePaths["pt-br"].home,
  },
};

export default i18n;
