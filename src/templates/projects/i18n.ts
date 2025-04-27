import pagePaths from "@constants/pagePaths";
import { getPageI18NPathMap } from "@helpers/server/i18n";

export const pathMap = getPageI18NPathMap("projects");

const i18n = {
  en: {
    title: "Projects",
    featuredTitle: "Featured",
    allProjects: "All projects",
    showFilters: "Show filters",
    hideFilters: "Hide filters",
    filters: "Learnings",
    defaultGoBackPage: pagePaths.en.home,
  },
  "pt-br": {
    title: "Projetos",
    featuredTitle: "Destaques",
    allProjects: "Todos projetos",
    showFilters: "Mostrar filtros",
    hideFilters: "ocultar filtros",
    filters: "Aprendizados",
    defaultGoBackPage: pagePaths["pt-br"].home,
  },
};

export default i18n;
