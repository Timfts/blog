import { isMobile } from "@helpers/device";
import elementController from "@lib/elementController";

elementController("main-menu", ({ root, query, on }) => {
  const header = query(".header") as HTMLHeadElement;
  const menuList = query(".menu-list") as HTMLMenuElement;
  const menuBtn = query(".menu-button") as HTMLButtonElement;
  const menuOpenClass = "menu-open";
  const headerHideClass = "header-hide";
  let previousDistanceFromTop = 0;

  setupEvents();

  function setupEvents() {
    if (isMobile()) {
      on("global:scroll", handleHeaderHide);
      menuBtn.addEventListener("click", handleMenuClick);
    }

    menuList.addEventListener("click", handleMenuItemClick);
  }

  function getIsMenuOpen() {
    return root.classList.contains(menuOpenClass);
  }

  function handleMenuClick(ev: MouseEvent) {
    const isMenuOpen = getIsMenuOpen();
    isMenuOpen ? hideMobileMenu() : openMobileMenu();
  }

  function handleHeaderHide() {
    const distanceFromTop = window.scrollY;
    const isHeaderHidden = header.classList.contains(headerHideClass);
    const isGoingUp = distanceFromTop < previousDistanceFromTop;
    const shouldHideHeader =
      !isHeaderHidden &&
      !isGoingUp &&
      isMobile() &&
      distanceFromTop > 34 &&
      !getIsMenuOpen();
    const shouldShowHeader = isHeaderHidden && isGoingUp;

    if (shouldHideHeader) header.classList.add(headerHideClass);
    if (shouldShowHeader) header.classList.remove(headerHideClass);

    previousDistanceFromTop = distanceFromTop;
  }

  function openMobileMenu() {
    root.classList.add(menuOpenClass);
    document.body.style.overflow = "hidden";
  }

  function hideMobileMenu() {
    root.classList.remove(menuOpenClass);
    document.body.style.overflow = "";
  }

  function handleMenuItemClick(ev: MouseEvent) {
    const target = ev.target as HTMLElement;
    const menuItemClass = ".menu-content-item";
    const clickedItem = target.closest(menuItemClass);
    if (clickedItem.id === "configItem") {
      ev.preventDefault();
      alert("open configs");
    }
  }
});
