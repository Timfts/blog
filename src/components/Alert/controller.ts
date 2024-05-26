import elementController from "@lib/elementController";
import { events } from "src/constants";

elementController("main-alert", ({ root, on, query }) => {
  const defaultErrorMessage = "Unknown error";
  const messageHolder = query(".alert-message");
  setupEvents();

  function setupEvents() {
    on(events.OPEN_ALERT, openAlert);
    on(events.CLOSE_WINDOW, closeAlert);
  }

  function closeAlert() {
    root.style.display = "none";
    messageHolder.innerHTML = "";
  }

  function openAlert(payload) {
    const message = payload?.detail?.message || defaultErrorMessage;
    messageHolder.innerHTML = message;
    root.style.display = "block";
  }
});
