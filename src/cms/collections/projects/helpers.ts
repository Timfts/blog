import { CollectionEntry, getCollection } from "astro:content";

type Project = CollectionEntry<"projects">;

type ProjectsMap = {
  [slug: string]: Record<string, Project>;
};

export async function getAllProjects() {
  const items = await getCollection("projects");
  return items;
}

export function getProjectsMap(allProjects: Project[]) {
  const projectsMap: ProjectsMap = allProjects.reduce((acc, entry) => {
    const [lang, postID] = entry.slug.split("/");
    const projectEntry = acc[postID];
    const newProjectEntry = projectEntry
      ? { ...projectEntry, [lang]: entry }
      : { [lang]: entry };
    return { ...acc, [postID]: newProjectEntry };
  }, {});

  return projectsMap;
}

export function getFeaturedProjects() {}

export async function getProjectsByLanguage(lang: Lang) {
  const allProjects = await getAllProjects();
  const langProjects = allProjects.filter((proj) => {
    return proj.slug.startsWith(`${lang}/`);
  });

  return langProjects;
}

export async function getProjectsPathsByLanguage(lang: Lang) {
  const projects = await getAllProjects();
  const allProjectsMap = getProjectsMap(projects);
  const langProjects = projects.filter((proj) =>
    proj.slug.startsWith(`${lang}/`)
  );

  return langProjects.map((entry) => {
    const [, rawProjSlug] = entry.slug.split("/");
    const projsEntries = allProjectsMap[rawProjSlug];
    return {
      params: { slug: rawProjSlug },
      props: { entries: projsEntries },
    };
  });
}

export function getI18NProjectPaths(projVersions: Record<string, Project>) {
  const projLangs = Object.keys(projVersions);
  let pathsMap: Record<string, string> = {};

  projLangs.forEach((lang) => {
    const rootPath = lang === "en" ? "" : `/${lang}`;
    const proj = projVersions[lang];
    const [, slug] = proj.slug.split("/");
    const segment = {
      en: "projects",
      "pt-br": "projetos",
    }[lang];
    pathsMap[lang] = `${rootPath}/${segment}/${slug}`;
  });

  return pathsMap;
}
