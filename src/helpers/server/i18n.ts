import { CollectionEntry } from "astro:content";
import pagePaths from "src/constants/pagePaths";

/**
 * This function creates a json map that contains the path to different internationalized versions
 * of the current page. this json is used by client-side javascript on the language selector
 * @param pageName
 * @returns
 */
export function getPageI18NPathMap(pageName: string) {
  let pathMap: I18NPagePaths = {};
  Object.entries(pagePaths).forEach(([lang, pages]) => {
    pathMap[lang] = pages[pageName];
  });

  return pathMap;
}

export function getI18NPostPaths(
  postVersions: Record<string, CollectionEntry<"posts">>
): I18NPagePaths {
  const postLangs = Object.keys(postVersions);
  let pathsMap: Record<string, string> = {};

  postLangs.forEach((lang) => {
    const rootPath = lang === "en" ? "" : `/${lang}`;
    const versionUrl = postVersions[lang]?.data?.page_url;
    pathsMap[lang] = `${rootPath}/posts/${versionUrl}`;
  });

  return pathsMap;
}
