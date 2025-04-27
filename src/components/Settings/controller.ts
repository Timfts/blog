import { addSearchQuery, hasSearchQuery, removeSearchQuery } from "@helpers/navigation";
import elementController from "@lib/elementController";
import SettingsService from "@services/Settings";
import { events } from "src/constants";

elementController("settings-window", ({ root, on, query }) => {
  const settingsForm = query("#settings-form") as HTMLFormElement;
  const settingsQuery = "settings";

  onStart();

  function onStart() {
    setupEvents();
    if (hasSearchQuery(settingsQuery)) openSettings();
  }

  function setupEvents() {
    on(events.OPEN_SETTINGS, openSettings);
    on(events.CLOSE_WINDOW, closeSettings);
    on("click", checkClosableElements);
    on("change", handleOptionChange);
  }

  function openSettings() {
    root.style.display = "block";
    addSearchQuery(settingsQuery, "open");
    loadCurrentPreferences();
  }

  function closeSettings() {
    root.style.display = "none";
    removeSearchQuery(settingsQuery);
  }

  function checkClosableElements(ev: Event) {
    const element = ev.target as HTMLElement;
    const backdrop = ".settings-backdrop";
    const cancelBtn = "#settings-ok";

    if (element.matches(backdrop) || element.matches(cancelBtn)) {
      closeSettings();
    }
  }

  function loadCurrentPreferences() {
    const prefs = SettingsService.getCurrentPreferences();
    const formElements = settingsForm.elements;

    for (const [key, value] of Object.entries(prefs)) {
      const field = formElements[key];

      if (field.type === "checkbox") {
        field.checked = !!value;
      }
      field.value = value;
    }
  }

  function handleOptionChange(ev: Event) {
    const fieldRoot = ev.target as any;
    const field = fieldRoot?.name;
    if (!field) return;
    const formdata = new FormData(settingsForm);
    const value = fieldRoot.type === "checkbox" ? fieldRoot.checked : formdata.get(field);

    SettingsService.setPref(field, value);
  }
});
