const elementControllers: IControllersList = {
  "/": () => import("./HomeController"),
  "/second-page": () => import("./SecondPageController"),
};

export default elementControllers;
