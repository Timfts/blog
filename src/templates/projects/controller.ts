import { addSearchQuery, getSearchQuery, removeSearchQuery } from "@helpers/navigation";
import elementController from "@lib/elementController";

elementController(
  "projects-page",
  ({ query, queryAll }) => {
    const filtersForm = query(".filters-form") as HTMLFormElement;
    const projectsGrid = query(".projects-grid") as HTMLUListElement;
    const allProjects = Array.from(projectsGrid.querySelectorAll(".project")) as HTMLLIElement[];
    const learningsChecks = queryAll('input[name="learnings"]') as HTMLInputElement[];

    const filterQuery = "learnings";

    initialize();

    function initialize() {
      checkQueries();
      filtersForm.onchange = handleChangeFilter;
    }

    function checkQueries() {
      const learningsQuery = getSearchQuery(filterQuery);

      if (learningsQuery) {
        const learnings = learningsQuery.split(",");
        learningsChecks.forEach((check) => {
          const learning = check.value;
          if (learnings.includes(learning)) check.checked = true;
        });
        handleChangeFilter();
      }
    }

    function handleChangeFilter() {
      const checkedFilters = learningsChecks.filter((learning) => learning.checked).map((learning) => learning.value);

      checkedFilters.length ? addSearchQuery(filterQuery, checkedFilters.join(",")) : removeSearchQuery(filterQuery);

      const filteredProjects = allProjects.filter((item) => {
        const projectLearnings = JSON.parse(item.getAttribute("data-learnings") || "[]");
        return checkedFilters.every((learning) => projectLearnings.includes(learning));
      });

      renderProjects(filteredProjects);
    }

    function renderProjects(projects: HTMLLIElement[]) {
      projectsGrid.innerHTML = "";
      if (!projects.length) {
        // TODO render not found
      }
      projects.forEach((proj) => {
        projectsGrid.appendChild(proj);
      });
    }
  },
  {
    rerun: "sameroute",
  }
);
