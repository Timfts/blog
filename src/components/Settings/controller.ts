import elementController from "@lib/elementController";
import { events } from "src/constants";

elementController("settings-window", ({ root, on }) => {
  setupEvents();

  function setupEvents() {
    on(events.OPEN_SETTINGS, openSettings);
    on(events.CLOSE_WINDOW, closeSettings);
    on("click", checkClosableElements);
    on("submit", handleFormSubmit);
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

  function handleFormSubmit(ev: SubmitEvent) {
    ev.preventDefault();
    const formData = new FormData(event.target as any);
    console.log(formData.get("ui-filter"));
  }
});
