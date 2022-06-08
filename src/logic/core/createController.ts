import {
  BuilderFunction,
  GenericFunction,
  Queryfunction,
  QueryAllFunction,
  EmitFunction,
} from "./createController.types";

function getOnFunction(rootElement: HTMLElement) {
  return (eventName: string, handler: GenericFunction) => {
    const globalEventDirective = "global:";
    const isGlobalEvent = eventName.startsWith(globalEventDirective);
    const eventRoot = isGlobalEvent ? window : rootElement;
    const formattedEventName = isGlobalEvent
      ? eventName.replace(globalEventDirective, "")
      : eventName;

    eventRoot.addEventListener(formattedEventName, handler);
  };
}

function getQueryFunction(rootElement: HTMLElement): Queryfunction {
  return (query: string) => rootElement.querySelector(query);
}

function getQueryAllFunction(rootElement: HTMLElement): QueryAllFunction {
  return (query: string) => rootElement.querySelectorAll(query);
}

function getEmitFunction(rootElement: HTMLElement): EmitFunction {
  return (eventName, payload) => {
    const event = new CustomEvent(eventName, {
      bubbles: true,
      detail: { ...payload },
    });
    rootElement.dispatchEvent(event);
  };
}

export default function createController(
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
