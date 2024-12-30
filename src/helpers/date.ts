export const fmtDate = (date: Date, locale: string) =>
  date.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
