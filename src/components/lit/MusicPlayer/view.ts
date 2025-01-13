import litView from "@lib/litView";
import { html } from "lit";

type MusicPlayerArgs = {
  label: string;
  onClick: () => void;
  onAlert: () => void;
};

export default litView(
  ({ label, onClick, onAlert }: MusicPlayerArgs) => html`
    <div class="hold">
      <div class="content">
        <img
          class="image"
          src="/images/under-construction.gif"
          alt="under construction gif"
        />
        <div>
          <button @click="${onClick}">close</button>
          <button @click=${onAlert}>alert</button>
        </div>
      </div>
    </div>
  `
);
