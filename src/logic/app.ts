import setupSwup from "./config/setupSwup";
import pageController from "./core/pageController";
import runControllerByPath from "./helpers/runControllerByPath";
import pageControllers from "./route-controllers";

pageController("app-shell", ({ query }) => {
  runCurrentPageController();
  setupRouteChanges();

  function setupRouteChanges() {
    setupSwup();
    document.addEventListener("swup:pageView", (ev) => {
      runCurrentPageController();
    });
  }

  function runCurrentPageController() {
    const currentPathName = window.location.pathname;
    runControllerByPath(currentPathName, pageControllers);
  }
});
