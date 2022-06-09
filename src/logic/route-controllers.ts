
const pageControllers: IControllersList = {
  // mocked
  "/nested/*": () => console.log("imported nested"),
  "/nested": () => console.log("shouldn't be imported"),
  "/nested/potato": () => console.log("imported potato"),
  //real routes
  "/": () => import("./pages/HomeController"),
  "/second-page": () => import("./pages/HomeController"),
};
