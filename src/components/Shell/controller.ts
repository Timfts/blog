import { events } from "@constants/index";
import elementController from "@lib/elementController";
import SettingsService from "@services/Settings";
import { LitElement, html } from "lit-element";

// create global state
let alreadyLoadMusicPlayer = false;
let alreadyLoadedPrefs = false;

elementController(
  "shell",
  ({ root, query, on }) => {
    setup();

    function setup() {
      if (!alreadyLoadedPrefs) {
        SettingsService.loadSavedPrefs();
      }
      on(events.OPEN_MEDIA_PLAYER, handleLoadMusicPlayer);
      on("change", handleLangChange);
    }

    function handleLangChange(e: Event) {
      console.log("changed", e);
      const target = e.target as HTMLSelectElement;
      const elementId = target.id;
      const isLangChange = elementId === "language-selector";

      if (!isLangChange) return;
      const lang = target.value as Lang;
      SettingsService.setPref("lang", lang);
    }

    async function handleLoadMusicPlayer() {
      const elementTag = "music-player";
      const playerSlot = query("#music-player-slot");

      if (!alreadyLoadMusicPlayer) {
        const { MusicPlayer } = await import("@components/lit/MusicPlayer");
        customElements.define(elementTag, MusicPlayer);
      }

      const instance = document.createElement(elementTag);
      playerSlot.appendChild(instance);
    }
  },
  { rerun: "changeroute" }
);
