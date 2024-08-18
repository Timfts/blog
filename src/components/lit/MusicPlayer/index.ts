import { getCurrentLocale } from "@helpers/i18n";
import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import * as THREE from "three";
import i18n from "./i18n";
import { events } from "@constants/index";
export class MusicPlayer extends LitElement {
  @property({ attribute: false })
  currentLang = getCurrentLocale();

  @property({ attribute: false })
  data = i18n[this.currentLang];

  static get styles() {
    return css`
      div {
        background-color: red;
        position: fixed;
        inset: 0;
        z-index: 1000;
      }
    `;
  }

  connectedCallback(): void {
    super.connectedCallback();
    console.log(THREE);
  }

  _handleClose() {
    const closeEvent = new CustomEvent(events.CLOSE_MEDIA_PLAYER, {bubbles: true});
    this.dispatchEvent(closeEvent);
  }

  render() {
    return html` <div>
      ${this.data.hello}
      <button @click="${this._handleClose}">close</button>
    </div>`;
  }
}
