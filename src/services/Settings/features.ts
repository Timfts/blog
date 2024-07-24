import { getCurrentLocale, redirectToLocalizedPage } from "@helpers/i18n";

const featuresExecutors = {
  theme: () => {
    console.log("changed theme");
  },
  filter: (option: string) => {
    if (option === "vintage-monitor") {
      document.body.style.filter = "blur(0.05em) hue-rotate(0)";
    } else {
      document.body.style.filter = "none";
    }
  },
  "text-size": () => {
    console.log("changed textSize");
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
