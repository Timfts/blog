import elementController from "@lib/elementController";
import { events } from "src/constants";
import { navigate } from 'astro:transitions/client';

elementController("search-bar", ({ query, emit }) => {
  const searchForm = query(".search-form") as HTMLFormElement;
  const searchField = query("#search-field") as HTMLInputElement;

  searchForm.addEventListener("submit", handleSearch);

  function handleSearch(ev: SubmitEvent) {
    ev.preventDefault();
    const fieldValue = searchField.value;

    if (!fieldValue) {
      emit(events.OPEN_ALERT, { message: "No value provided to search field" });
      return;
    }

    navigate(`/posts?search=${fieldValue}`);
  }
});
