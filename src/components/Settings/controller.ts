import elementController from "@lib/elementController";
import { events } from "src/constants";

elementController("settings-window", ({ root, on, query }) => {
  const backdrop = query(".settings-backdrop");
  console.log(root);

  setupEvents();

  function setupEvents() {
    on(events.OPEN_SETTINGS, openSettings);
    on(events.CLOSE_WINDOW, closeSettings);
    backdrop.addEventListener("click", closeSettings);
  }

  function openSettings() {
    root.style.display = "block";
  }

  function closeSettings() {
    root.style.display = "none";
  }
});
