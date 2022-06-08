export type GenericFunction = (...any: any[]) => any

type ControllerEventHandler = (
  eventName: string,
  eventHandler: GenericFunction
) => void;

export type Queryfunction = (queryStrirng: string) => HTMLElement | null;
export type QueryAllFunction = (queryStrirng: string) => NodeListOf<HTMLElement>;
export type EmitFunction =  (eventName: string, payload?: Object) => void;

export interface IBuilderFunctionArgs {
  root: HTMLElement;
  on: ControllerEventHandler;
  query: Queryfunction;
  queryAll: QueryAllFunction;
  emit: EmitFunction
}

export type BuilderFunction = (args: IBuilderFunctionArgs) => void;
