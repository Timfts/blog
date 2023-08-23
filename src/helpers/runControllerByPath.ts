export default function runControllerByPath(
  currentPathName: string,
  routesMap: IControllersList
): void {
  const cleanRoute = (path: string): string => {
    const isRootPath = path === "/";
    const pathStartsWithSlash = path.startsWith("/");
    const pathEndsWithSlash = path.endsWith("/");
    const withStartSlash = pathStartsWithSlash ? path : `/${path}`;
    const withoutLastSlash =
      pathEndsWithSlash && !isRootPath
        ? withStartSlash.slice(0, -1)
        : withStartSlash;
    return withoutLastSlash;
  };
  const cleannedCurrentPath = cleanRoute(currentPathName);
  const routes = Object.entries(routesMap);

  routes.forEach(([route, controller]) => {
    const cleannedRoute = cleanRoute(route);
    const isWildCard = cleannedRoute.endsWith("*");
    const withoutStar = isWildCard ? cleannedRoute.slice(0, -1) : cleannedRoute;
    const isValidMatch =
      (!isWildCard && withoutStar === cleannedCurrentPath) ||
      (isWildCard && cleannedCurrentPath.startsWith(withoutStar));

    if (isValidMatch) {
      controller();
    }
  });
}
