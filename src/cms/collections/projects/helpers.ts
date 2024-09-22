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
