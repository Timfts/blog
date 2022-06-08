import Swup from "swup";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupJsPlugin from "@swup/js-plugin";
import SwupA11yPlugin from "@swup/a11y-plugin";
import SwupPreloadPlugin from "@swup/preload-plugin";
import createController from "./core/createController";

createController("app-shell", () => {
  setupRouteChange();

  function setupRouteChange() {
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
        import("./pages/secondPageController")
    })

  }
});
