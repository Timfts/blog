import {
  GenericFunction,
  Queryfunction,
  QueryAllFunction,
  EmitFunction,
} from "./types";

export function getOnFunction(rootElement: HTMLElement) {
  return (eventName: string, handler: GenericFunction) => {
    const globalEventDirective = "global:";
    const documentEventDirective = "document:";

    const isGlobalEvent = eventName.startsWith(globalEventDirective);
    const isDocumentEvent = eventName.startsWith(documentEventDirective);

    const eventRoot = (() => {
      if (isGlobalEvent) {
        return window;
      } else if (isDocumentEvent) {
        return document;
      }
      return rootElement;
    })();

    const formattedEventName = (() => {
      if (isGlobalEvent) {
        return eventName.replace(globalEventDirective, "");
      } else if (isDocumentEvent) {
        return eventName.replace(globalEventDirective, "");
      }
      return eventName;
    })();

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
