import { getCurrentLocale, redirectToLocalizedPage } from "@helpers/i18n";

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
  pointer: () => {
    console.log("changed pointer");
  },
  lang: (lang: Lang) => {
    const alreadyOnDefinedLang = lang === getCurrentLocale();
    if (!lang || alreadyOnDefinedLang) return;

    redirectToLocalizedPage(lang as Lang);
  },
};

export default featuresExecutors;
