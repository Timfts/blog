import { isMobile } from "@helpers/device";
import elementController from "@lib/elementController";

elementController("main-page", ({ query }) => {
  const imageHolder = query(".main-image-holder") as HTMLDivElement;

  handleImageShow();

  function handleImageShow() {
    const mobileTemplate =
      imageHolder.querySelector<HTMLTemplateElement>("#main-image-mobile");

    const desktopTemplate = imageHolder.querySelector<HTMLTemplateElement>(
      "#main-video-desktop"
    );

    const usedTemplate = isMobile() ? mobileTemplate : desktopTemplate;
    const newNode = usedTemplate.content.cloneNode(true);
    imageHolder.appendChild(newNode);
  }
});
