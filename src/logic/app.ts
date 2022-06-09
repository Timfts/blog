import setupSwup from "./config/setupSwup";
import pageController from "./core/pageController";
import runControllerByPath from "./helpers/runControllerByPath";
import pageControllers from "./route-controllers";

pageController("app-shell", ({ on }) => {
  //onStart
  fixFullHeight();
  runCurrentPageController();
  setupRouteChanges();

  //events
  on("global:resize", fixFullHeight);
  on("swup:pageView", runCurrentPageController);

  // methods
  function setupRouteChanges() {
    setupSwup();
  }

  function runCurrentPageController() {
    const currentPathName = window.location.pathname;
    runControllerByPath(currentPathName, pageControllers);
  }

  function fixFullHeight() {
    const docRef = document.documentElement;
    const windowHeight = window.innerHeight;
    docRef.style.setProperty("--app-height", `${windowHeight}px`);
  }
});
