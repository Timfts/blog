import Swup from "swup";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupJsPlugin from "@swup/js-plugin";
import SwupA11yPlugin from "@swup/a11y-plugin";
import SwupPreloadPlugin from "@swup/preload-plugin";
import pageController from "./core/pageController";

pageController("app-shell", ({query}) => {
  const visitedPages: string[] = [];

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
      import("./pages/SecondPageController");
    });
  }

  function runCurrentPageController() {
    const currentPathName = window.location.pathname
    console.log(window.location.pathname)
    // detect current route
    // check if already loaded controller
    // get controller by map
    // import
  }
});
