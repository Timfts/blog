import i18n from "./i18n";
import homeImg from "./icons/home.png";
import folderImg from "./icons/folder.png";
import notesImg from "./icons/notes.png";
import projectsImg from "./icons/projects.png";
import configImg from "./icons/config.png";
import contactImg from "./icons/contact.png";
import musicImg from "./icons/music.png"

type MenuItems = keyof typeof i18n.en.menuItems;

export const icons: Record<MenuItems, ImageMetadata> = {
  home: homeImg,
  projects: folderImg,
  posts: notesImg,
  work: projectsImg,
  contact: contactImg,
  music: musicImg,
  config: configImg
};
