import pagePaths from "@constants/pagePaths";
import { getPageI18NPathMap } from "@helpers/server/i18n";

export const pathMap = getPageI18NPathMap("notFound");

const i18n = {
  en: {
    disclaimer: "Page not found",
    errorMessageDesk: `Go back to <a href="${pagePaths["en"].home}">home page</a> or press <span>space</span>`,
    errorMessageMobile: `Go back to <a href="${pagePaths["en"].home}">home page</a> or touch the dinosaur`,
    defaultGoBackPage: pagePaths.en.home,
  },
  "pt-br": {
    disclaimer: "Pagina não encontrada",
    errorMessageDesk: `Voltar para a <a href="${pagePaths["pt-br"].home}">página inicial</a> ou pressione <span>espaço</span>`,
    errorMessageMobile: `Voltar para a <a href="${pagePaths["pt-br"].home}">página inicial</a> ou toque o dinossauro`,
    defaultGoBackPage: pagePaths["pt-br"].home,
  },
};

export default i18n;
