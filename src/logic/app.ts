import Swup from "swup";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupJsPlugin from "@swup/js-plugin";
import SwupA11yPlugin from "@swup/a11y-plugin";
import SwupPreloadPlugin from "@swup/preload-plugin";

import pageController from "./core/pageController";
import runControllerByPath from "./helpers/runControllerByPath";
import pageControllers from "./route-controllers";

pageController("app-shell", ({ query }) => {
  runCurrentPageController();
  setupRouteChanges();

  function setupRouteChanges() {
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

    document.addEventListener("swup:pageView", (ev) => {
      runCurrentPageController();
    });
  }

  function runCurrentPageController() {
    const currentPathName = window.location.pathname;
    console.log(currentPathName)
    runControllerByPath(currentPathName, pageControllers);
  }
});
