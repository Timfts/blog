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
      label: home.label,
      path: home.path,
      icon: homeImg,
    },
    {
      label: projects.label,
      path: projects.path,
      icon: folderImg,
    },
    {
      label: posts.label,
      path: posts.path,
      icon: notesImg,
    },
    {
      label: work.label,
      path: work.path,
      icon: projectsImg,
    },
    {
      label: contact.label,
      path: contact.path,
      icon: contactImg,
    },
    {
      label: config.label,
      path: "#",
      icon: configImg,
    },
  ];
}
