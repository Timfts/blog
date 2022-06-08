import { BuilderFunction } from "./types";
import {
  getOnFunction,
  getQueryAllFunction,
  getQueryFunction,
  getEmitFunction,
} from "./factories";

export default function pageController(
  fragmentName: string,
  builderFunction: BuilderFunction
) {
  if (!fragmentName && typeof fragmentName !== "string") {
    throw new TypeError("fragment name is required");
  }

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
}
