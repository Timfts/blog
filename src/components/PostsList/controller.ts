import { addSearchQuery, getSearchQuery, removeSearchQuery } from "@helpers/navigation";
import elementController from "@lib/elementController";

elementController(
  "search-posts",
  ({ query, queryAll, root }) => {
    const showTopics = !!root.dataset.showTopics;
    const searchInput = query(".search-input") as HTMLInputElement;
    const list = query(".posts-list") as HTMLUListElement;
    const originalPosts = queryAll(".post-link") as HTMLLIElement[];

    const searchTopics = query("[data-filter-form]") as HTMLFormElement;
    const allTopics = showTopics && root.dataset.topics.split(",");
    const topicsChecks = queryAll('input[name="search-topics"]') as HTMLInputElement[];

    const searchQuery = "search";
    const topicsQuery = "topics";

    setup();

    function setup() {
      checkQueries();
      searchInput.addEventListener("input", handleFiltering);
      if (showTopics) searchTopics.onchange = handleFiltering;
    }

    function checkQueries() {
      const searchQueryValue = getSearchQuery(searchQuery);
      const topicsSearchValue = getSearchQuery(topicsQuery);
      const shouldFilterByTopics = showTopics && validateTopicsQuery(topicsSearchValue);

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
      const searchValue = (searchInput.value || "").toLowerCase().trim();
      const topicsValues = topicsChecks.filter((topic) => topic.checked).map((topic) => topic.value);

      searchValue ? addSearchQuery(searchQuery, searchValue) : removeSearchQuery(searchQuery);
      topicsValues.length ? addSearchQuery(topicsQuery, topicsValues.join(",")) : removeSearchQuery(topicsQuery);

      const searchPosts = searchValue ? filterPostsByText(searchValue, originalPosts) : originalPosts;
      const withTopics = topicsValues.length ? filterPostsByTopics(topicsValues, searchPosts) : searchPosts;

      renderPosts(withTopics, searchValue);
    }

    function filterPostsByText(searchText: string, posts: HTMLLIElement[]) {
      const filteredPosts = posts.filter((post) => {
        const title = post?.dataset?.postTitle;
        const excerpt = post?.dataset?.postExcerpt;
        return title.toLowerCase().includes(searchText) || excerpt.toLowerCase().includes(searchText);
      });

      return filteredPosts;
    }

    function filterPostsByTopics(topics: string[], posts: HTMLLIElement[]) {
      return posts.filter((post) => {
        const itemTopics: string[] = JSON.parse(post?.dataset?.topics || "[]");
        return topics.every((topic) => itemTopics.includes(topic));
      });
    }

    function renderPosts(posts: HTMLLIElement[], searchText?: string) {
      list.innerHTML = "";
      if (!posts.length) {
        renderNotFound();
        return;
      }

      posts.forEach((post) => {
        const clonnedNode = post.cloneNode(true) as HTMLLIElement;
        const formattedPost = applySearchHighlight(searchText, clonnedNode);
        list.appendChild(formattedPost);
      });
    }

    function applySearchHighlight(searchText: string, post: HTMLLIElement) {
      if (!searchText) return post;

      const title = post?.querySelector("[data-title]");
      const excerpt = post?.querySelector("[data-excerpt]");
      title.innerHTML = emphasizeText(searchText, title.innerHTML);
      excerpt.innerHTML = emphasizeText(searchText, excerpt.innerHTML);
      return post;
    }

    function emphasizeText(searchText: string, text: string) {
      const regex = new RegExp(searchText, "gi");
      return text.replace(regex, (match) => {
        return `<strong>${match}</strong>`;
      });
    }

    function renderNotFound() {
      const notFoundTemplate = query("#not-found-template") as HTMLTemplateElement;
      const instance = notFoundTemplate.content.cloneNode(true);
      list.appendChild(instance);
    }
  },
  { rerun: "changeroute" }
);
