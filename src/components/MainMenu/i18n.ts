import pagePaths from "src/constants/pagePaths";

const i18n = {
  en: {
    menuItems: {
      home: { label: "Home", path: pagePaths.en.home },
      projects: { label: "Projects", path: pagePaths.en.projects },
      posts: { label: "Posts", path: pagePaths.en.posts },
      work: { label: "Work", path: pagePaths.en.work },
      contact: { label: "Contact", path: pagePaths.en.contact },
      config: { label: "Config", path: "" },
    },
  },
  "pt-br": {
    menuItems: {
      home: { label: "Home", path: pagePaths["pt-br"].home },
      projects: { label: "Projetos", path: pagePaths["pt-br"].projects },
      posts: { label: "Posts", path: pagePaths["pt-br"].posts },
      work: { label: "Trabalho", path: pagePaths["pt-br"].work },
      contact: { label: "Contato", path: pagePaths["pt-br"].contact },
      config: { label: "Configurações", path: "" },
    },
  },
};

export default i18n;
