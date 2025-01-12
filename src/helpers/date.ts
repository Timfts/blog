export const fmtDate = (date: Date, locale: string) =>
  date.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export function fmtYYYYMMDD(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
