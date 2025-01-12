export const DEFAULT_WIDTH = 600;

export const FPS = 60;

export const IS_HIDPI = window.devicePixelRatio > 1;

export const IS_IOS =
  window.navigator.userAgent.indexOf("UIWebViewForStaticFileContent") > -1;

export const IS_MOBILE =
  window.navigator.userAgent.indexOf("Mobi") > -1 || IS_IOS;

export const IS_TOUCH_ENABLED = "ontouchstart" in window;
