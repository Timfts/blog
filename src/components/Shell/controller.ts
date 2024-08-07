import elementController from "@lib/elementController";
import SettingsService from "@services/Settings";

elementController(
  "shell",
  ({ root, query }) => {
    const shellContent = query(".shell-content");


    SettingsService.loadSavedPrefs();
    shellContent.addEventListener("change", handleLangChange);

    function handleLangChange(e: Event) {
      const target = e.target as HTMLSelectElement;
      const elementId = target.id;
      const isLangChange = elementId === "language-selector";

      if (!isLangChange) return;
      const lang = target.value as Lang;
      SettingsService.setPref("lang", lang);
    }
  },
  { rerun: "changeroute" }
);
