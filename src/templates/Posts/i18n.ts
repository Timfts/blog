import pagePaths from "@constants/pagePaths";
import { getPageI18NPathMap } from "@helpers/server/i18n";

export const pathMap = getPageI18NPathMap("posts");

const i18n = {
  en: {
    defaultGoBackPage: pagePaths.en.home,
  },
  "pt-br": {
    defaultGoBackPage: pagePaths["pt-br"].home,
  },
};

export default i18n;
