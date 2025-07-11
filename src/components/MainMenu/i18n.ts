import pagePaths from "src/constants/pagePaths";

const enPaths = pagePaths.en;
const ptPaths = pagePaths["pt-br"];

type MenuItem = {
  label: string;
  path: string;
  iconAlt: string;
  target?: string;
};

const i18n = {
  en: {
    homePath: enPaths.home,
    menuToggleAriaLabel: "Toggle menu",
    blogTitle: "in reverie",
    menuItems: {
      home: {
        label: "Home",
        path: enPaths.home,
        iconAlt: "Icon of a house",
      },
      posts: {
        label: "Posts",
        path: enPaths.posts,
        iconAlt: "Icon of a notepad",
      },
      projects: {
        label: "Projects",
        path: enPaths.projects,
        iconAlt: "Icon of folder with a document",
      },
      work: {
        label: "Work",
        path: enPaths.work,
        iconAlt: "Icon of a work briefcase",
      },
      contact: {
        label: "Contact",
        path: enPaths.contact,
        iconAlt: "Icon of a letter envelope",
      },
      rss: {
        label: "RSS &#x2197;",
        path: enPaths.feedRSS,
        iconAlt: "RSS icon",
        target: "_blank",
      },
      music: {
        label: "Playlists",
        path: "",
        iconAlt: "Icon of CD with musical note",
      },
      config: {
        label: "Config",
        path: "#",
        iconAlt: "Icon of a gear",
      },
    } as Record<string, MenuItem>,
  },
  "pt-br": {
    homePath: ptPaths.home,
    menuToggleAriaLabel: "Abrir ou fechar menu",
    blogTitle: "em devaneio",
    menuItems: {
      home: {
        label: "Home",
        path: ptPaths.home,
        iconAlt: "Icone de uma casa",
      },
      posts: {
        label: "Posts",
        path: ptPaths.posts,
        iconAlt: "Icone de um bloco de notas",
      },
      projects: {
        label: "Projetos",
        path: ptPaths.projects,
        iconAlt: "Icone de uma pasta com um documento",
      },
      work: {
        label: "Trabalho",
        path: ptPaths.work,
        iconAlt: "Icone de uma maleta de trabalho",
      },
      contact: {
        label: "Contato",
        path: ptPaths.contact,
        iconAlt: "Icone de um envelope de carta",
      },
      rss: {
        label: "RSS",
        path: ptPaths.feedRSS,
        iconAlt: "Icone de RSS",
        target: "_blank",
      },
      music: {
        label: "Playlists",
        path: "",
        iconAlt: "Icone de um CD com nota musical",
      },
      config: {
        label: "Configurações",
        path: "",
        iconAlt: "Icone de uma engrenagem",
      },
    } as Record<string, MenuItem>,
  },
};

export default i18n;
