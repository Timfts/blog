import elementController from "@lib/elementController";
import { events } from "src/constants";

elementController("settings-window", ({ root, on, query }) => {
  const settingsForm = query("#settings-form") as HTMLFormElement;

  setupEvents();

  function setupEvents() {
    on(events.OPEN_SETTINGS, openSettings);
    on(events.CLOSE_WINDOW, closeSettings);
    on("click", checkClosableElements);
    on("submit", handleFormSubmit);
    on("change", handleOptionChange);
  }

  function openSettings() {
    root.style.display = "block";
  }

  function closeSettings() {
    root.style.display = "none";
  }

  function checkClosableElements(ev: Event) {
    const element = ev.target as HTMLElement;
    const backdrop = ".settings-backdrop";
    const cancelBtn = "#settings-cancel";

    if (element.matches(backdrop) || element.matches(cancelBtn)) {
      closeSettings();
    }
  }

  function handleOptionChange(ev: Event) {
    const field = (ev.target as any)?.name;
    if (!field) return;
    const formdata = new FormData(settingsForm);
    const value = formdata.get(field);
    console.log(value);
  }

  function handleFormSubmit(ev: SubmitEvent) {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const formData = new FormData(form);
    console.log(formData.get("ui-filter"));
  }
});
