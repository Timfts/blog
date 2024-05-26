import {
  GenericFunction,
  Queryfunction,
  QueryAllFunction,
  EmitFunction,
} from "./types";

export function getOnFunction(rootElement: HTMLElement) {
  return (eventName: string, handler: GenericFunction) => {
    const { eventRoot, formattedEventName } = getEventBase(
      eventName,
      rootElement
    );
    eventRoot.addEventListener(formattedEventName, handler);
  };
}

export function getQueryFunction(rootElement: HTMLElement): Queryfunction {
  return (query: string) => rootElement.querySelector(query);
}

export function getQueryAllFunction(
  rootElement: HTMLElement
): QueryAllFunction {
  return (query: string) => Array.from(rootElement.querySelectorAll(query));
}

export function getEmitFunction(rootElement: HTMLElement): EmitFunction {
  return (eventName, payload) => {
    const { eventRoot, formattedEventName } = getEventBase(
      eventName,
      rootElement
    );

    const event = new CustomEvent(formattedEventName, {
      bubbles: true,
      detail: { ...payload },
    });
    eventRoot.dispatchEvent(event);
  };
}

function getEventBase(
  eventName: string,
  rootElement: HTMLElement
): {
  formattedEventName: string;
  eventRoot: HTMLElement | Document | (Window & typeof globalThis);
} {
  const globalEventDirective = "global:";
  const documentEventDirective = "document:";
  const isGlobalEvent = eventName.startsWith(globalEventDirective);
  const isDocumentEvent = eventName.startsWith(documentEventDirective);
  if (isGlobalEvent) {
    return {
      formattedEventName: eventName.replace(globalEventDirective, ""),
      eventRoot: window,
    };
  } else if (isDocumentEvent) {
    return {
      formattedEventName: eventName.replace(documentEventDirective, ""),
      eventRoot: document,
    };
  }

  return {
    formattedEventName: eventName,
    eventRoot: rootElement,
  };
}
