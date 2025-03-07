import { getCurrentLocale, redirectToLocalizedPage } from "@helpers/i18n";

import {
  clearVideoBackground,
  createVideoBackground,
  loadPublicCSSFile,
} from "./helpers";

const prefsHandlers = {
  filter: (option: string) => {
    if (option !== "none") loadPublicCSSFile("filters.css");
  },

  "desk-background": (value) => {
    const videoBackgrounds = { matrix: "/videos/matrix-background.mp4" };
    const videoBackground = videoBackgrounds[value];
    videoBackground
      ? createVideoBackground(videoBackground)
      : clearVideoBackground();
  },

  lang: (lang: Lang) => {
    const alreadyOnDefinedLang = lang === getCurrentLocale();
    if (!lang || alreadyOnDefinedLang) return;

    redirectToLocalizedPage(lang as Lang);
  },
};

export default prefsHandlers;
