interface IControllersList {
  [key: string]: () => void;
}

type Lang = "pt-br" | "en";

interface IPublication {
  title: string;
  created_date: string;
  updated_date: string;
  lang: "pt" | "en";
  excerpt: string;
}

interface IPost extends IPublication {
  topics: string[];
  thumbnail?: string;
  "external-link"?: string;
}

interface ISnippet extends IPublication {
  "snippet-type": string[];
}

interface I18NPagePaths {
  [lang: string]: string;
}
interface I18NMap {
  currentLang: string;
  paths: I18NPagePaths;
}

interface IProject extends IPublication {
  thumbnail: string;
  learnings: string[];
}
type AnyPublication = IPost | ISnippet | IProject;
