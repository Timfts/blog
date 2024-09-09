import { getCurrentLocale } from "@helpers/i18n";
import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import * as THREE from "three";
import i18n from "./i18n";
import { events } from "@constants/index";

import View from "./view";
import styles from "./styles";

export class MusicPlayer extends LitElement {
  @property({ attribute: false })
  currentLang = getCurrentLocale();

  @property({ attribute: false })
  data = i18n[this.currentLang];

  static styles = styles;
  render = View({
    label: this.data.hello,
    onClick: this.handleClose,
    onAlert: this.showAlert,
  });

  connectedCallback(): void {
    super.connectedCallback();
    console.log(THREE);
  }

  handleClose() {
    const closeEvent = new CustomEvent(events.CLOSE_MEDIA_PLAYER, {
      bubbles: true,
    });
    this.dispatchEvent(closeEvent);
  }

  showAlert() {
    alert("lulu");
  }
}
