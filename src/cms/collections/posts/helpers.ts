import { CollectionEntry, getCollection } from "astro:content";

type Post = CollectionEntry<"posts">;

type PostsMap = {
  [slug: string]: Record<string, Post>;
};

/**
 * Creates a map that groups different language versions of the same post
 * under the same slug
 */
export function getPostsMap(allPosts: Post[]) {
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

async function getAllPosts(externalPosts = true) {
  const blogPosts = await getCollection(
    "posts",
    (post) => !!post?.data?.enabled
  );
  if (!externalPosts) {
    return blogPosts.filter((post) => !post.data.external_link);
  }
  return blogPosts;
}

export async function getPostsByLang(lang: Lang, externalPosts = true) {
  const blogPosts = await getAllPosts(externalPosts);
  const langPosts = blogPosts.filter((post) => {
    return post.slug.startsWith(`${lang}/`);
  });
  return langPosts;
}

export async function getPostsPathsByLanguage(
  lang: Lang,
  externalPosts = true
) {
  const blogPosts = await getAllPosts(externalPosts);
  const allPostsMap = getPostsMap(blogPosts);
  const langPosts = blogPosts.filter((post) =>
    post.slug.startsWith(`${lang}/`)
  );

  return langPosts.map((entry) => {
    const [, rawPostSlug] = entry.slug.split("/");
    const postEntries = allPostsMap[rawPostSlug];

    return {
      params: { slug: entry.data.page_url },
      props: { entries: postEntries },
    };
  });
}

export function getI18NPostPaths(
  postVersions: Record<string, Post>
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
