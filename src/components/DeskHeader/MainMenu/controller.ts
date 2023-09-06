import elementController from "@lib/elementController";

elementController("desk-menu", ({ queryAll, on }) => {
  const linkClass = "desk-main-menu__list-link";
  const linkActiveClass = `${linkClass}--active`;
  const links = queryAll(`.${linkClass}`) as HTMLAnchorElement[];

  on("document:astro:page-load", updateActiveLink);

  function updateActiveLink() {
    links.forEach((link) => {
      const isLinkActive = link.classList.contains(linkActiveClass);
      const currentPath = location.pathname;
      const linkPath = link.getAttribute("href");
      const linkShouldBeActive = linkPath === currentPath;

      if (linkShouldBeActive && !isLinkActive) {
        link.classList.add(linkActiveClass);
      } else if (isLinkActive && !linkShouldBeActive) {
        link.classList.remove(linkActiveClass);
      }
    });
  }
});
