import elementController from "@lib/elementController";
import { events } from "src/constants";
import { navigate } from "astro:transitions/client";

elementController("search-bar", ({ query, emit, root }) => {
  const searchForm = query(".search-form") as HTMLFormElement;
  const searchField = query("#search-field") as HTMLInputElement;
  const emptyFieldMessage = root.dataset.errorMsg;

  searchForm.addEventListener("submit", handleSearch);

  function handleSearch(ev: SubmitEvent) {
    ev.preventDefault();
    const fieldValue = searchField.value;

    if (!fieldValue) {
      emit(events.OPEN_ALERT, { message: emptyFieldMessage });
      return;
    }

    navigate(`/posts?search=${fieldValue}`);
  }
});
