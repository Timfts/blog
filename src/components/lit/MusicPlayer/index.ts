import { getCurrentLocale } from "@helpers/i18n";
import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import * as THREE from "three";
import i18n from "./i18n";
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

  render() {
    return html`<div>${this.data.hello}</div>`;
  }
}
