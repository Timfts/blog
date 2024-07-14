/** Client side only */

function getI18NMap() {
  const i18nMap = document.querySelector("#i18nMap");
  const map = JSON.parse(i18nMap?.textContent) as I18NMap;
  return map;
}

export function getCurrentLocale() {
  const map = getI18NMap();
  return map?.currentLang;
}

export function redirectToLocalizedPage(lang: Lang) {
  const map = getI18NMap();
  const newPath = map.paths[lang];
  location.href = newPath;
}
