const backgroundId = "video-background";

export default function loadVideoBackground(value: string) {
  const shell = document.querySelector<HTMLDivElement>(".shell");

  if (value === "matrix") {
    const newVideoBg = createVideoBackground(
      "matrix",
      "/videos/matrix-background.mp4"
    );

    shell.appendChild(newVideoBg);
    return;
  }

  const videoBackground = document.querySelector(`#${backgroundId}`);
  if (videoBackground) shell.removeChild(videoBackground);

  if (value === "cat") {
    shell.style.backgroundImage = "url(images/cathacker.gif)";
    return;
  }

  if (value === "dog") {
    shell.style.backgroundImage = "url(images/dog-hacker.gif)";
    return;
  }

  shell.style.cssText = "";
}

function createVideoBackground(name: string, path: string) {
  const video = document.createElement("video");
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.id = backgroundId;
  video.style.cssText = "inset:0; position:fixed; z-index:0;";
  const source = document.createElement("source");
  source.src = path;
  source.type = "video/mp4";
  video.appendChild(source);

  return video;
}
