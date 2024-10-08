import pagePaths from "src/constants/pagePaths";

const enPaths = pagePaths.en;
const ptPaths = pagePaths["pt-br"];

const i18n = {
  en: {
    mainProfileAlt: "Tim's Profile image",
    homePath: enPaths.home,
    menuItems: {
      home: {
        label: "Home",
        path: enPaths.home,
        iconAlt: "Icon of a house",
      },
      projects: {
        label: "Projects",
        path: enPaths.projects,
        iconAlt: "Icon of folder with a document",
      },
      posts: {
        label: "Posts",
        path: enPaths.posts,
        iconAlt: "Icon of a notepad",
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
    },
  },
  "pt-br": {
    mainProfileAlt: "Imagem de perfil de Tim",
    homePath: ptPaths.home,
    menuItems: {
      home: {
        label: "Home",
        path: ptPaths.home,
        iconAlt: "Icone de uma casa",
      },
      projects: {
        label: "Projetos",
        path: ptPaths.projects,
        iconAlt: "Icone de uma pasta com um documento",
      },
      posts: {
        label: "Posts",
        path: ptPaths.posts,
        iconAlt: "Icone de um bloco de notas",
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
    },
  },
};

export default i18n;
