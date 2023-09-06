export default function goTo(path: string) {
  const ghostAnchor = findExistingGhostAnchor(path) || createGhostAnchor(path);
  ghostAnchor.click();
}

function findExistingGhostAnchor(path: string) {
  return document.querySelector<HTMLAnchorElement>(
    `a[href="${path}"][data-redirect]`
  );
}

function createGhostAnchor(path: string) {
  const ga = document.createElement("a");
  ga.href = path;
  ga.setAttribute("data-redirect", "");
  ga.style.display = "none";
  document.body.append(ga);
  return ga;
}
