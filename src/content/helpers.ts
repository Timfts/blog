import { CollectionEntry, getCollection } from "astro:content";

type PostsMap = {
  [slug: string]: Record<string, CollectionEntry<"posts">>;
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
