import elementController from "@lib/elementController";

elementController("tab", ({ root, queryAll, query }) => {
  const firstItem = root.getAttribute("data-first-item");
  const btns = queryAll(".tab-btn") as HTMLButtonElement[];
  const tabs = queryAll(".tab-panel");
  const menu = query(".menu");

  onStart();

  function onStart() {
    activateTab(firstItem);
    menu.addEventListener("click", handleMenuClick);
  }

  function activateTab(id: string) {
    btns.forEach((btn) => {
      const isSelected = btn.ariaSelected;
      const itemId = btn.getAttribute("aria-controls");
      const mustActivate = itemId === id;
      if (mustActivate && !isSelected) {
        btn.ariaSelected = "true";
      } else if (!mustActivate && isSelected) {
        btn.ariaSelected = null;
      }
    });

    tabs.forEach((tab) => {
      const isHidden = tab.hidden;
      const tabId = tab.id;
      const mustShow = tabId === id;
      if (mustShow && isHidden) {
        tab.hidden = false;
      } else if (!mustShow && !isHidden) {
        tab.hidden = true;
      }
    });
  }

  function handleMenuClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const btnElement = target.closest("button");
    if (!btnElement) return;
    const tabId = btnElement.getAttribute("aria-controls");
    if (tabId) {
      activateTab(tabId);
    }
  }
});
