import goTo from "@helpers/goTo";
import elementController from "@lib/elementController";

elementController("search-bar", ({ query }) => {
  const searchForm = query(".search-form");
  const searchField = query("#search-field") as HTMLInputElement;

  onStart();

  function onStart() {
    searchForm.addEventListener("submit", handleSearch);
  }

  function handleSearch(ev: SubmitEvent) {
    ev.preventDefault();
    const fieldValue = searchField.value;

    if (!fieldValue) {
      alert("No value provided"); // TODO - add alert modal
      return 
    }

    goTo(`/posts?search=${fieldValue}`);
  }
});
