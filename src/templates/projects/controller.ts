import {
  addSearchQuery,
  getSearchQuery,
  removeSearchQuery,
} from "@helpers/navigation";
import elementController from "@lib/elementController";

elementController(
  "projects-page",
  ({ query, queryAll }) => {
    const filterBtn = query("[data-filter]") as HTMLButtonElement;
    const filtersBox = query(".filters-box") as HTMLFormElement;
    const projectsGrid = query(".projects-grid") as HTMLUListElement;
    const allProjects = Array.from(
      projectsGrid.querySelectorAll(".project")
    ) as HTMLLIElement[];
    const showFilterTxt = filterBtn.getAttribute("data-show");
    const hideFilterTxt = filterBtn.getAttribute("data-hide");
    const learningsChecks = queryAll(
      'input[name="learnings"]'
    ) as HTMLInputElement[];

    const filterQuery = "learnings";
    let isShowingFilters = false;

    initialize();

    function initialize() {
      checkQueries();
      filterBtn.onclick = toggleFilters;
      filtersBox.onchange = handleChangeFilter;
    }

    function checkQueries() {
      const learningsQuery = getSearchQuery(filterQuery);

      if (learningsQuery) {
        showFilters();
        const learnings = learningsQuery.split(",");
        learningsChecks.forEach((check) => {
          const learning = check.value;
          if (learnings.includes(learning)) check.checked = true;
        });
        handleChangeFilter();
      }
    }

    function toggleFilters() {
      isShowingFilters ? hideFilters() : showFilters();
    }

    function showFilters() {
      filterBtn.innerHTML = hideFilterTxt;
      filtersBox.style.display = "block";
      isShowingFilters = true;
    }

    function hideFilters() {
      filterBtn.innerHTML = showFilterTxt;
      filtersBox.style.display = "none";
      isShowingFilters = false;
    }

    function handleChangeFilter() {
      const checkedFilters = learningsChecks
        .filter((learning) => learning.checked)
        .map((learning) => learning.value);

      checkedFilters.length
        ? addSearchQuery(filterQuery, checkedFilters.join(","))
        : removeSearchQuery(filterQuery);

      const filteredProjects = allProjects.filter((item) => {
        const projectLearnings = JSON.parse(
          item.getAttribute("data-learnings") || "[]"
        );
        return checkedFilters.every((learning) =>
          projectLearnings.includes(learning)
        );
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
