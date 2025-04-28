import { getSearchQuery } from "@helpers/navigation";
import elementController from "@lib/elementController";

elementController(
  "categories-filter",
  ({ query }) => {
    const filterBtn = query("[data-filter]") as HTMLButtonElement;
    const filtersForm = query("[data-filter-form]") as HTMLFormElement;
    const showFilterTxt = filterBtn.getAttribute("data-show");
    const hideFilterTxt = filterBtn.getAttribute("data-hide");
    const searchQuery: string | undefined = filterBtn.getAttribute("data-search-query");
    let isShowingFilters = false;

    initialize();

    function initialize() {
      filterBtn.onclick = toggleFilters;
      checkQuery();
    }

    function checkQuery() {
      if (!searchQuery) return;
      const openWithQuery = getSearchQuery(searchQuery);
      if (!!openWithQuery) {
        showFilters();
      }
    }

    function toggleFilters() {
      isShowingFilters ? hideFilters() : showFilters();
    }

    function showFilters() {
      filterBtn.innerHTML = hideFilterTxt;
      filtersForm.style.display = "block";
      isShowingFilters = true;
    }

    function hideFilters() {
      filterBtn.innerHTML = showFilterTxt;
      filtersForm.style.display = "none";
      isShowingFilters = false;
    }
  },
  { rerun: true }
);
