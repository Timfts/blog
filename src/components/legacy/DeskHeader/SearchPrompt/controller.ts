import elementController from "@lib/elementController";

elementController("search-prompt", ({ query, on }) => {
  const input = query(".search-field-input") as HTMLInputElement;
  const ghostText = query(".ghost-text") as HTMLParagraphElement;
  const cursor = query(".text-cursor");

  on("input", handleCustomCursor);

  function handleCustomCursor(ev: Event) {
    const value = input.value;
    ghostText.innerHTML = value;
    const originalLeftSpace = 60;
    const txtWidth = ghostText.offsetWidth;
    const newLeft = originalLeftSpace + txtWidth + 5;
    cursor.style.left = `${newLeft}px`;

    // TODO - fix on finish space (blink at the end)
    // TODO - fix arrows
    // TODO - fix space
  }
});
