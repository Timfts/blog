import { BuilderFunction, ControllerOpts } from "./types";
import {
  getOnFunction,
  getQueryAllFunction,
  getQueryFunction,
  getEmitFunction,
} from "./factories";

export default function elementController(
  fragmentName: string,
  builderFunction: BuilderFunction,
  opts: ControllerOpts = {}
) {
  const { rerun = false } = opts;

  if (!fragmentName && typeof fragmentName !== "string") {
    throw new TypeError("fragment name is required");
  }

  const runInstances = () => {
    const elementInstancesNodes =
      document.querySelectorAll(`[data-fragment=${fragmentName}]`) || [];
    const elementInstances = [...elementInstancesNodes] as HTMLElement[];

    elementInstances.forEach((element) => {
      builderFunction({
        root: element,
        on: getOnFunction(element),
        query: getQueryFunction(element),
        queryAll: getQueryAllFunction(element),
        emit: getEmitFunction(element),
      });
    });
  };

  if (rerun === "changeroute" || rerun === "sameroute") {
    const createdRoute = location.pathname;
    document.addEventListener("astro:page-load", (ev) => {
      const newRoute = location.pathname;
      const enteredOriginalRoute = newRoute === createdRoute;
      const mustRerunController =
        rerun === "changeroute" ||
        (rerun === "sameroute" && enteredOriginalRoute);

      if (mustRerunController) {
        runInstances();
      }
    });
  } else {
    runInstances();
  }
}
