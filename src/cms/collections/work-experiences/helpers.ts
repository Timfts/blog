import { getCollection } from "astro:content";

export async function getWorkExperiencesByLang(lang: Lang) {
  const allExps = await getCollection("work-experiences", (i) =>
    i.slug.startsWith(`${lang}/`)
  );

  const safeExps = allExps || [];
  return safeExps.sort((a, b) => b.data.start_date - a.data.start_date);
}
