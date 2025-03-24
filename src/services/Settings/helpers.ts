export function loadPublicCSSFile(file: string) {
  const filePath = `/plugins/${file}`;
  const loadedCSSFiles = Array.from(document.querySelectorAll("link"));
  const alreadyLoadedThisFile = loadedCSSFiles.find(
    (f) => f.rel === "stylesheet" && f.href.includes(filePath)
  );
  if (alreadyLoadedThisFile) return;

  const linkRel = document.createElement("link");
  linkRel.rel = "stylesheet";
  linkRel.href = filePath;

  document.head.appendChild(linkRel);
}

const backgroundId = "video-background";

export function createVideoBackground(path: string) {
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

  const shell = document.querySelector<HTMLDivElement>(".shell");
  shell.appendChild(video);
}

export function clearVideoBackground() {
  const videoBackground = document.querySelector(`#${backgroundId}`);
  if (!videoBackground) return;
  const shell = document.querySelector<HTMLDivElement>(".shell");
  shell.removeChild(videoBackground);
  shell.style.cssText = "";
}

export function setPreferenceClass(pref: string, option: string) {
  const rootEl = document.querySelector("html");
  const bodyClasses = Array.from(rootEl.classList);
  const newClass = `${pref}-${option}`;
  const current = bodyClasses.find((i) => i.startsWith(pref));
  if (current === newClass) return;
  if (current) rootEl.classList.remove(current);

  rootEl.classList.add(newClass);
}
