import { getPageI18NPathMap } from "@helpers/server/i18n";
import pagePaths from "@constants/pagePaths";

export const pathMap = getPageI18NPathMap("emoticons");

const i18n = {
  "pt-br": {
    orLabel: "ou",
    title: "Emoticons",
    defaultGoBackPage: pagePaths["pt-br"].home,
    tableHeaders: {
      emoticon: "Emoticon",
      name: "Nome",
      shortcuts: "Atalhos",
    },
    scrapedText:
      "Surrupiado com carinho dessa <a target='__blank' href='https://web.archive.org/web/20140204231459/http://messenger.msn.com/Resource/Emoticons.aspx'>página do MSN (web archive)</a>",
  },
  en: {
    orLabel: "or",
    title: "Emoticons",
    defaultGoBackPage: pagePaths.en.home,
    tableHeaders: {
      emoticon: "Emoticon",
      name: "Name",
      shortcuts: "Shortcuts",
      orLabel: "or",
    },
    scrapedText:
      "Proudly scraped from this <a target='__blank' href='https://web.archive.org/web/20140204231459/http://messenger.msn.com/Resource/Emoticons.aspx'>MSN page (web archive)</a>",
  },
};

export default i18n;
