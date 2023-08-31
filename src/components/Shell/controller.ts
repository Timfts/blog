import elementController from "@lib/elementController";
import Swup from "swup";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupJsPlugin from "@swup/js-plugin";
import SwupA11yPlugin from "@swup/a11y-plugin";
import SwupPreloadPlugin from "@swup/preload-plugin";
import runControllerByPath from "@helpers/runControllerByPath";
import elementControllers from "./page-controllers";

elementController("app-shell", ({ on, query }) => {
  const mobileHeader = query(".mobile-header");
  const mobileNav = query(".mobile-nav");
  const headerCollapseClass = "mobile-header--hidden";
  const navCollapseClass = "mobile-nav--hidden";
  let previousDistanceFromTop = 0;

  //onStart
  fixFullHeight();
  runCurrentelementController();
  /* setupRouteChanges(); */

  //events
  on("global:resize", fixFullHeight);
  /* on("swup:pageView", runCurrentelementController); */
  on("global:scroll", handlePageScroll);

  // methods
  /* function setupRouteChanges() {
    setupSwup();
  } */

  function runCurrentelementController() {
    const currentPathName = window.location.pathname;
    runControllerByPath(currentPathName, elementControllers);
  }

  function handlePageScroll(e: Event) {
    const isMobile = screen.width < 1000;
    const distanceFromTop = window.scrollY;
    handleHUDCollapse(isMobile, distanceFromTop);
  }

  function handleHUDCollapse(isMobile: boolean, distanceFromTop: number) {
    const isHUDHidden = getIsHUDHidden();
    const isGoingUp = distanceFromTop < previousDistanceFromTop;
    const shouldHideHud =
      !isHUDHidden && !isGoingUp && isMobile && distanceFromTop > 34;

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

  function setupSwup() {
    new Swup({
      plugins: [
        new SwupHeadPlugin(),
        new SwupA11yPlugin(),
        new SwupPreloadPlugin(),
        new SwupJsPlugin([
          {
            from: "(.*)",
            to: "(.*)",
            out: (next) => next(),
            in: (next) => next(),
          },
        ]),
      ],
    });
  }
});
