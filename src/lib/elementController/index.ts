import { BuilderFunction, ControllerOpts } from "./types";
import { getOnFunction, getQueryAllFunction, getQueryFunction, getEmitFunction } from "./factories";

type ElementsRegistry = Record<string, BuilderFunction>;
let elementsRegistry: ElementsRegistry = {};
(window as any).elementsRegistry = elementsRegistry;
let isFirstPageLoad = true;

document.addEventListener("astro:page-load", (ev) => {
  if (!isFirstPageLoad) {
    Object.entries(elementsRegistry).forEach(([fragmentName, builderFunction]) => {
      runElementInstances(fragmentName, builderFunction);
    });
  }
  isFirstPageLoad = false;
});

export default function elementController(fragmentName: string, builderFunction: BuilderFunction, opts: ControllerOpts = {}) {
  const { rerun = false } = opts;

  if (!fragmentName && typeof fragmentName !== "string") {
    throw new TypeError("fragment name is required");
  }

  if (rerun) {
    const existingRegistry = elementsRegistry[fragmentName];
    if (existingRegistry) {
      console.warn(`Fragment ${fragmentName} is already registered.`);
      return;
    }

    elementsRegistry[fragmentName] = builderFunction;
  }
  runElementInstances(fragmentName, builderFunction);
}

function runElementInstances(fragmentName: string, builderFunction: BuilderFunction) {
  const elementInstancesNodes = document.querySelectorAll(`[data-fragment=${fragmentName}]`) || [];
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
}
