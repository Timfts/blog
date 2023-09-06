import elementController from "@lib/elementController";
import goTo from "@helpers/goTo";

elementController("home-page", ({ query }) => {
  const btn = query("#mybtn");

  btn.addEventListener("click", () => {
    goTo("/projects");
  });
});
