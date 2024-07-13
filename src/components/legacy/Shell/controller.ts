import { isMobile } from "@helpers/device";
import elementController from "@lib/elementController";

elementController("app-shell", ({ on, query }) => {
  const mobileHeader = query(".mobile-header");
  const mobileNav = query(".mobile-nav");
  const headerCollapseClass = "mobile-header--hidden";
  const navCollapseClass = "mobile-nav--hidden";
  let previousDistanceFromTop = 0;

  //onStart
  fixFullHeight();

  //events
  on("global:resize", fixFullHeight);
  on("global:scroll", handlePageScroll);

  function handlePageScroll(e: Event) {
    const distanceFromTop = window.scrollY;
    handleHUDCollapse(distanceFromTop);
  }

  function handleHUDCollapse(distanceFromTop: number) {
    const isHUDHidden = getIsHUDHidden();
    const isGoingUp = distanceFromTop < previousDistanceFromTop;
    const shouldHideHud =
      !isHUDHidden && !isGoingUp && isMobile() && distanceFromTop > 34;

    const shouldShowHud = isHUDHidden && isGoingUp;

    if (shouldHideHud) hideHUD();
    if (shouldShowHud) showHUD();

    previousDistanceFromTop = distanceFromTop;
  }

  function getIsHUDHidden(): boolean {
    const isHeaderHidden = mobileHeader.classList.contains(headerCollapseClass);
    const isNavHidden = mobileNav.classList.contains(navCollapseClass);

    return isHeaderHidden && isNavHidden;
  }

  function hideHUD() {
    mobileHeader.classList.add(headerCollapseClass);
    mobileNav.classList.add(navCollapseClass);
  }

  function showHUD() {
    mobileHeader.classList.remove(headerCollapseClass);
    mobileNav.classList.remove(navCollapseClass);
  }

  function fixFullHeight() {
    const docRef = document.documentElement;
    const windowHeight = window.innerHeight;
    docRef.style.setProperty("--app-height", `${windowHeight}px`);
  }
});
