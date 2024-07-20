import elementController from "@lib/elementController";
import { events } from "src/constants";

elementController("window", ({ query, emit, root }) => {
  const controls = query(".title-bar-controls");

  setupEvents();

  function setupEvents() {
    controls.addEventListener("click", handleControlClicks);
  }

  function handleControlClicks(ev: MouseEvent) {
    const target = ev.target as HTMLElement;
    const actionBtn = target.closest("button");
    if (!actionBtn) return;
    const action = actionBtn.getAttribute("aria-label");

    if (action === "Close") {
      emit(events.CLOSE_WINDOW, { id: root.id });
    }
  }
});
