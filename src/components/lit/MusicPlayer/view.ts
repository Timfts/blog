import litView from "@lib/litView";
import { html } from "lit";

type MusicPlayerArgs = {
  label: string;
  onClick: () => void;
  onAlert: () => void;
};

export default litView(
  ({ label, onClick, onAlert }: MusicPlayerArgs) => html`
    <div>
      <p>Under construction</p>
      <button @click="${onClick}">close</button>
      <button @click=${onAlert}>alert</button>
    </div>
  `
);
