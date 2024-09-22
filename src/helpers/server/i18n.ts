import { CollectionEntry } from "astro:content";
import pagePaths from "src/constants/pagePaths";

type PageKeys = keyof (typeof pagePaths)[Lang]

/**
 * This function creates a json map that contains the path to different internationalized versions
 * of the current page. this json is used by client-side javascript on the language selector
 * @param pageName
 * @returns
 */
export function getPageI18NPathMap(pageName: PageKeys) {
  let pathMap: I18NPagePaths = {};
  Object.entries(pagePaths).forEach(([lang, pages]) => {
    pathMap[lang] = pages[pageName];
  });

  return pathMap;
}


