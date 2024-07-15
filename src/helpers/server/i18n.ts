import pagePaths from "src/constants/pagePaths";

export function getPageI18NPathMap(pageName: string) {
  let pathMap: I18NPagePaths = {};
  Object.entries(pagePaths).forEach(([lang, pages]) => {
    pathMap[lang] = pages[pageName];
  });

  return pathMap;
}
