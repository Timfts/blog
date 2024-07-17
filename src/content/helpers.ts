import { CollectionEntry, getCollection } from "astro:content";

type PostVersionMap = {
  [slug: string]: CollectionEntry<"posts">;
};

type PostsMap = {
  [slug: string]: PostVersionMap;
};

/**
 * Creates a map that groups different language versions of the same post
 * under the same slug
 */
export function getPostsMap(allPosts: CollectionEntry<"posts">[]) {
  const allPostsMap: PostsMap = allPosts.reduce((acc, entry) => {
    const [lang, postID] = entry.slug.split("/");
    const postEntry = acc[postID];
    const newPostEntry = postEntry
      ? { ...postEntry, [lang]: entry }
      : { [lang]: entry };

    return { ...acc, [postID]: newPostEntry };
  }, {});

  return allPostsMap;
}

export function getI18NPostPaths(postVersions: PostVersionMap): I18NPagePaths {
  const postLangs = Object.keys(postVersions);
  let pathsMap: Record<string, string> = {};

  postLangs.forEach((lang) => {
    const rootPath = lang === "en" ? "" : `/${lang}`;
    const versionUrl = postVersions[lang]?.data?.page_url;
    pathsMap[lang] = `${rootPath}/posts/${versionUrl}`;
  });

  return pathsMap;
}

export async function getPostsPathsByLanguage(lang: Lang) {
  const blogPosts = await getCollection("posts");
  const allPostsMap = getPostsMap(blogPosts);
  const ptPosts = blogPosts.filter((post) => {
    return post.slug.startsWith(`${lang}/`);
  });

  return ptPosts.map((entry) => {
    const [, rawPostSlug] = entry.slug.split("/");
    const postEntries = allPostsMap[rawPostSlug];

    return {
      params: { slug: entry.data.page_url },
      props: { entries: postEntries },
    };
  });
}
