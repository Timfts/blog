export type GenericFunction = (...any: any[]) => any;

export type RerunOpts = "changeroute" | "sameroute" | false;

export interface ControllerOpts {
  rerun?: RerunOpts;
}

type ControllerEventHandler = (
  eventName: string,
  eventHandler: GenericFunction
) => void;

export type Queryfunction = (queryStrirng: string) => HTMLElement | null;
export type QueryAllFunction = (
  queryStrirng: string
) => HTMLElement[];
export type EmitFunction = (eventName: string, payload?: Object) => void;

export interface IBuilderFunctionArgs {
  root: HTMLElement;
  on: ControllerEventHandler;
  query: Queryfunction;
  queryAll: QueryAllFunction;
  emit: EmitFunction;
}

export type BuilderFunction = (args: IBuilderFunctionArgs) => void;
