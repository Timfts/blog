import { getCurrentLocale, redirectToLocalizedPage } from "@helpers/i18n";

import { clearVideoBackground, createVideoBackground, loadPublicCSSFile } from "./helpers";

const prefsHandlers = {
  filter: (option: string) => {
    if (option !== "none") loadPublicCSSFile("filters.css");
  },

  background: (value) => {
    const videoBackgrounds = { matrix: "/videos/matrix-background.mp4" };
    const videoBackground = videoBackgrounds[value];
    videoBackground ? createVideoBackground(videoBackground) : clearVideoBackground();
  },

  lang: (lang: Lang) => {
    const alreadyOnDefinedLang = lang === getCurrentLocale();
    if (!lang || alreadyOnDefinedLang) return;

    redirectToLocalizedPage(lang as Lang);
  },

  theme: (theme: string) => {
    const themeColor = {
      default: "#d3e5fa",
      dark: "#404040",
    }[theme];
    const themeMeta = document.querySelector("meta[name=theme-color]");
    themeMeta.setAttribute("content", themeColor);
  },

  ads: async (value) => {
    const adElementName = "app-ad";
    const isAlreadyRegistered = customElements.get(adElementName);
    const holder = document.querySelector("#banner-slot");
    if (!value) {
      holder.innerHTML = "";
      return;
    }

    if (!isAlreadyRegistered) {
      const { AdsBanner } = await import("@components/lit/AdsBanner");
      customElements.define(adElementName, AdsBanner);
    }

    const bannerInst = document.createElement(adElementName);
    holder.appendChild(bannerInst);
  },
};

export default prefsHandlers;
