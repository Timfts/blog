import {
  addSearchQuery,
  getSearchQuery,
  removeSearchQuery,
} from "@helpers/navigation";
import elementController from "@lib/elementController";

elementController(
  "search-posts",
  ({ query, queryAll, root }) => {
    const searchInput = query(".search-input") as HTMLInputElement;
    const list = query(".posts-list") as HTMLUListElement;
    const originalPosts = queryAll(".post-link") as HTMLLIElement[];
    let currentPosts = originalPosts;
    const searchTopics = query(".search-topics") as HTMLFormElement;
    const searchQuery = "search";

    setup();

    function setup() {
      searchInput.addEventListener("input", handleSearch);
      if (searchTopics) {
        searchTopics.addEventListener("change", handleTopicsForm);
      }
      checkQuerySearch();
    }

    function handleFiltering(){
        // triggered when type in field
        // triggered when change in inputs topics

    }

    function applyFilters(search: string, topics: string[]){
        //empty search and empty topics -> original

        // filter by search
        // filter by topics

        // nothing is found, render not found
    }

    function checkQuerySearch() {
      const searchQueryCheck = getSearchQuery(searchQuery);
      if (searchQueryCheck) {
        searchInput.value = searchQueryCheck;
        searchInput.dispatchEvent(new Event("input"));
      }
    }

    function handleSearch(ev: Event) {
      const inputedValue = (ev.target as HTMLInputElement).value;
      if (!inputedValue) {
        removeSearchQuery(searchQuery);
        return renderOriginalList();
      }

      const filteredPosts = originalPosts.filter((post) => {
        const title = post?.dataset?.postTitle;
        const excerpt = post?.dataset?.postExcerpt;
        return (
          title.toLowerCase().includes(inputedValue) ||
          excerpt.toLowerCase().includes(inputedValue)
        );
      });

      addSearchQuery(searchQuery, inputedValue);
      renderPosts(filteredPosts);
    }

    function renderOriginalList() {
      renderPosts(originalPosts);
    }

    function renderPosts(posts: HTMLLIElement[]) {
      currentPosts = posts;
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

    function handleTopicsForm() {
      const checked = Array.from(
        searchTopics.querySelectorAll('input[name="topics"]:checked')
      ) as HTMLInputElement[];

      const values = checked.map((field) => field.value);
      filterPostsByTopics(values);
    }

    function filterPostsByTopics(topics: string[]) {
      const newPosts = currentPosts.filter((post) => {
        const itemTopics = JSON.parse(post?.dataset?.topics || "[]");
        return itemTopics.some((topic) => topics.includes(topic));
      });

      console.log(newPosts);
    }
  },
  { rerun: "sameroute" }
);
