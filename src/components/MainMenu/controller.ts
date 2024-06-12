import elementController from "@lib/elementController";

elementController("main-menu", ({ root, query, on }) => {
  const header = query(".header") as HTMLHeadElement;
  const menuBtn = query(".menu-button") as HTMLButtonElement;
  const menuOpenClass = "menu-open";
  const headerHideClass = "header-hide";
  let previousDistanceFromTop = 0;

  setupEvents();

  function setupEvents() {
    if (getIsMobile()) {
      on("global:scroll", handleHeaderHide);
      menuBtn.addEventListener("click", handleMenuClick);
    }
  }

  function getIsMobile() {
    return screen.width < 1000;
  }

  function getIsMenuOpen() {
    return root.classList.contains(menuOpenClass);
  }

  function handleMenuClick(ev: MouseEvent) {
    const isMenuOpen = getIsMenuOpen();

    isMenuOpen ? hideMobileMenu() : openMobileMenu();
  }

  function handleHeaderHide() {
    const isMobile = screen.width < 1000;
    const distanceFromTop = window.scrollY;
    const isHeaderHidden = header.classList.contains(headerHideClass);
    const isGoingUp = distanceFromTop < previousDistanceFromTop;
    const shouldHideHeader =
      !isHeaderHidden &&
      !isGoingUp &&
      isMobile &&
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
});