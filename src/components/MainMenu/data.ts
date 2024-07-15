import i18n from "./i18n";
import homeImg from "./icons/home.png";
import folderImg from "./icons/folder.png";
import notesImg from "./icons/notes.png";
import projectsImg from "./icons/projects.png";
import configImg from "./icons/config.png";
import contactImg from "./icons/contact.png";

export function getMenuItems(currentLang: Lang) {
  const itensTxt = i18n[currentLang].menuItems;
  const { home, projects, posts, work, contact, config } = itensTxt;

  return [
    {
      ...home,
      icon: homeImg,
    },
    {
      ...projects,
      icon: folderImg,
    },
    {
      ...posts,
      icon: notesImg,
    },
    {
      ...work,
      icon: projectsImg,
    },
    {
      ...contact,
      icon: contactImg,
    },
    {
      ...config,
      icon: configImg,
    },
  ];
}
