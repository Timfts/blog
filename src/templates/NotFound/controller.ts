import { isMobile } from "@helpers/device";
import elementController from "@lib/elementController";

elementController("not-found-disclaimer", ({ query }) => {
  const mobileMessage = query(
    ".not-found-message--mobile"
  ) as HTMLParagraphElement;
  const deskMessage = query(".not-found-message--desk") as HTMLParagraphElement;

  initialize();

  function initialize() {
    const usedMessage = isMobile() ? mobileMessage : deskMessage;
    usedMessage.style.display = "block";
  }
});
