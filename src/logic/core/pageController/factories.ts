import {
  GenericFunction,
  Queryfunction,
  QueryAllFunction,
  EmitFunction,
} from "./types";

export function getOnFunction(rootElement: HTMLElement) {
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

export function getQueryFunction(rootElement: HTMLElement): Queryfunction {
  return (query: string) => rootElement.querySelector(query);
}

export function getQueryAllFunction(
  rootElement: HTMLElement
): QueryAllFunction {
  return (query: string) => rootElement.querySelectorAll(query);
}

export function getEmitFunction(rootElement: HTMLElement): EmitFunction {
  return (eventName, payload) => {
    const event = new CustomEvent(eventName, {
      bubbles: true,
      detail: { ...payload },
    });
    rootElement.dispatchEvent(event);
  };
}
