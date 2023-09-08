export function getLang(pageURL: URL) {
  const langs: Lang[] = ["pt-br", "en"];
  const [, lang] = pageURL.pathname.split("/");
  const isKnownLanguage = langs.includes(lang as Lang);
  const usedLang = isKnownLanguage ? lang : "en";
  return usedLang as Lang;
}
