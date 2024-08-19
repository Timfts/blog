import { events } from "@constants/index";
import elementController from "@lib/elementController";
import SettingsService from "@services/Settings";

// create global state
let alreadyLoadMusicPlayer = false;
let alreadyLoadedPrefs = false;

elementController(
  "shell",
  ({ root, query, on }) => {
    const playerSlot = query("#music-player-slot");

    setup();

    function setup() {
      if (!alreadyLoadedPrefs) {
        SettingsService.loadSavedPrefs();
      }
      on(events.OPEN_MEDIA_PLAYER, handleLoadMusicPlayer);
      on(events.CLOSE_MEDIA_PLAYER, handleCloseMusicPlayer);
      on("change", handleLangChange);
    }

    function handleLangChange(e: Event) {
      const target = e.target as HTMLSelectElement;
      const elementId = target.id;
      const isLangChange = elementId === "language-selector";

      if (!isLangChange) return;
      const lang = target.value as Lang;
      SettingsService.setPref("lang", lang);
    }

    async function handleLoadMusicPlayer() {
      const elementTag = "music-player";

      if (!alreadyLoadMusicPlayer) {
        const { MusicPlayer } = await import("@components/lit/MusicPlayer");
        customElements.define(elementTag, MusicPlayer);
        alreadyLoadMusicPlayer = true;
      }

      const instance = document.createElement(elementTag);
      playerSlot.appendChild(instance);
    }

    function handleCloseMusicPlayer() {
      playerSlot.innerHTML = "";
    }
  },
  { rerun: "changeroute" }
);
