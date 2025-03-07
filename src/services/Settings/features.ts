import { getCurrentLocale, redirectToLocalizedPage } from "@helpers/i18n";

import {
  clearVideoBackground,
  createVideoBackground,
  loadPublicCSSFile,
  setPreferenceClass,
} from "./helpers";

const featuresExecutors = {
  theme: () => {
    console.log("changed theme");
  },
  filter: (option: string) => {
    if (option !== "none") loadPublicCSSFile("filters.css");
    setPreferenceClass("filter", option);
  },
  "text-size": (value) => {
    setPreferenceClass("font-size", value);
  },

  "desk-background": (value) => {
    const videoBackgrounds = { matrix: "/videos/matrix-background.mp4" };
    const videoBackground = videoBackgrounds[value];
    videoBackground
      ? createVideoBackground(videoBackground)
      : clearVideoBackground();

    setPreferenceClass("background", value, "shell");
  },
  pointer: (value: boolean) => {
    setPreferenceClass("pointer", value ? "yellow" : "default");
  },
  lang: (lang: Lang) => {
    const alreadyOnDefinedLang = lang === getCurrentLocale();
    if (!lang || alreadyOnDefinedLang) return;

    redirectToLocalizedPage(lang as Lang);
  },
};

export default featuresExecutors;
