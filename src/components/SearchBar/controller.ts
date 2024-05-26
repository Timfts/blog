import goTo from "@helpers/goTo";
import elementController from "@lib/elementController";
import { events } from "src/constants";

elementController("search-bar", ({ query, emit }) => {
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
      emit(events.OPEN_ALERT, { message: "No value provided to search field" });
      return;
    }

    goTo(`/posts?search=${fieldValue}`);
  }
});
