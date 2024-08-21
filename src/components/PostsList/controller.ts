import {
  addSearchQuery,
  getSearchQuery,
  removeSearchQuery,
} from "@helpers/navigation";
import elementController from "@lib/elementController";

elementController(
  "search-posts",
  ({ query, queryAll, root }) => {
    const showTopics = !!root.dataset.showTopics;
    const searchInput = query(".search-input") as HTMLInputElement;
    const list = query(".posts-list") as HTMLUListElement;
    const originalPosts = queryAll(".post-link") as HTMLLIElement[];

    const searchTopics = query(".search-topics") as HTMLFormElement;
    const allTopics = showTopics && searchTopics.dataset.topics.split(",");
    const topicsChecks = queryAll('input[name="topics"]') as HTMLInputElement[];

    const searchQuery = "search";
    const topicsQuery = "topics";

    setup();

    function setup() {
      checkQueries();
      searchInput.addEventListener("input", handleFiltering);
      if (showTopics) searchTopics.addEventListener("change", handleFiltering);
    }

    function checkQueries() {
      const searchQueryValue = getSearchQuery(searchQuery);
      const topicsSearchValue = getSearchQuery(topicsQuery);
      const shouldFilterByTopics =
        showTopics && validateTopicsQuery(topicsSearchValue);

      if (searchQueryValue) {
        searchInput.value = searchQueryValue;
      }

      if (shouldFilterByTopics) {
        const searchTopics = topicsSearchValue.split(",");
        topicsChecks.forEach((input) => {
          const topic = input.value;
          if (searchTopics.includes(topic)) {
            input.checked = true;
          }
        });
      }

      if (searchQueryValue || shouldFilterByTopics) {
        handleFiltering();
      }
    }

    function validateTopicsQuery(topicsSearch: string) {
      if (!topicsSearch) return false;
      const items = topicsSearch.split(",");
      return items.some((topic) => allTopics.includes(topic));
    }

    function handleFiltering() {
      const searchValue = searchInput.value;
      const topicsValues = topicsChecks
        .filter((topic) => topic.checked)
        .map((topic) => topic.value);

      searchValue
        ? addSearchQuery(searchQuery, searchValue)
        : removeSearchQuery(searchQuery);

      topicsValues.length
        ? addSearchQuery(topicsQuery, topicsValues.join(","))
        : removeSearchQuery(topicsQuery);

      const searchPosts = searchValue
        ? filterPostsByText(searchValue, originalPosts)
        : originalPosts;

      const withTopics = topicsValues.length
        ? filterPostsByTopics(topicsValues, searchPosts)
        : searchPosts;

      renderPosts(withTopics);
    }

    function filterPostsByText(searchText: string, posts: HTMLLIElement[]) {
      return posts.filter((post) => {
        const title = post?.dataset?.postTitle;
        const excerpt = post?.dataset?.postExcerpt;
        return (
          title.toLowerCase().includes(searchText) ||
          excerpt.toLowerCase().includes(searchText)
        );
      });
    }

    function filterPostsByTopics(topics: string[], posts: HTMLLIElement[]) {
      return posts.filter((post) => {
        const itemTopics: string[] = JSON.parse(post?.dataset?.topics || "[]");
        return topics.every((topic) => itemTopics.includes(topic));
      });
    }

    function renderPosts(posts: HTMLLIElement[]) {
      list.innerHTML = "";
      if (!posts.length) {
        renderNotFound();
        return;
      }

      posts.forEach((post) => {
        list.appendChild(post);
      });
    }

    function renderNotFound() {
      const notFoundTemplate = query(
        "#not-found-template"
      ) as HTMLTemplateElement;
      const instance = notFoundTemplate.content.cloneNode(true);
      list.appendChild(instance);
    }
  },
  { rerun: "changeroute" }
);
