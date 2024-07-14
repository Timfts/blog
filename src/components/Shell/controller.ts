import { getCurrentLocale, redirectToLocalizedPage } from "@helpers/i18n";
import elementController from "@lib/elementController";

const langLocalStorageKey = "I18N_LANG"; // TODO - temp

elementController("shell", ({ root }) => {

  identifyPredefinedLang();
  root.addEventListener("change", handleLangChange);

  function identifyPredefinedLang() {
    const definedLang = localStorage.getItem(langLocalStorageKey);
    const alreadyOnDefinedLang = definedLang === getCurrentLocale();
    if (!definedLang || alreadyOnDefinedLang) return;

    redirectToLocalizedPage(definedLang as Lang);
  }

  function handleLangChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    const elementId = target.id;
    const isLangChange = elementId === "language-selector";

    if (!isLangChange) return;
    const lang = target.value as Lang;
    localStorage.setItem(langLocalStorageKey, lang);
    redirectToLocalizedPage(lang);
  }
});
