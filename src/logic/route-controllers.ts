const pageControllers: IControllersList = {
  "/": () => import("./pages/HomeController"),
  "/second-page": () => import("./pages/SecondPageController"),
};

export default pageControllers;
