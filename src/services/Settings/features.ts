import { getCurrentLocale, redirectToLocalizedPage } from "@helpers/i18n";

// TODO - avoid unecessary logic run when none is select

const featuresExecutors = {
  theme: () => {
    console.log("changed theme");
  },
  filter: async (option: string) => {
    const clear = () => {
      document.body.style.filter = "none";
      document.body.classList.remove("crt-tv");
    };

    clear();
    switch (option) {
      case "vintage-monitor":
        document.body.style.filter = "blur(0.05em) hue-rotate(0)";
        break;
      case "crt-tv":
        const plugin = await import("./plugins/crt-tv");
        plugin.default();
        break;
    }
  },
  "text-size": (value) => {
    const currentSize = Array.from(document.body.classList.values()).find(
      (item) => item.startsWith("font-size")
    );
    const newSize = `font-size-${value}`;
    document.body.classList.replace(currentSize, newSize);
  },

  "desk-background": (value) => {
    const backgroundId = "video-background";
    const shell = document.querySelector(".shell");

    if (value === "matrix") {
      const video = document.createElement("video");
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.id = backgroundId;
      video.style.cssText = "inset:0; position:fixed; z-index:0;";
      const source = document.createElement("source");
      source.src = "/videos/matrix-background.mp4";
      source.type = "video/mp4";
      video.appendChild(source);
      shell.appendChild(video);
      return;
    } else {
      const videoBackground = document.querySelector(`#${backgroundId}`);
      videoBackground && shell.removeChild(videoBackground);
    }
  },
  pointer: async (value: boolean) => {
    if (value) {
      const plugin = await import("./plugins/custom-pointer");
      plugin.default();
    } else {
      document.body.classList.remove("custom-pointer");
    }
  },
  lang: (lang: Lang) => {
    const alreadyOnDefinedLang = lang === getCurrentLocale();
    if (!lang || alreadyOnDefinedLang) return;

    redirectToLocalizedPage(lang as Lang);
  },
};

export default featuresExecutors;
