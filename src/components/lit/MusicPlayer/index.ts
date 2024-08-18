import { LitElement, html, css } from "lit-element";
import * as THREE from "three";
export class MusicPlayer extends LitElement {
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
    return html`<div>Hello from MyElement!</div>`;
  }
}
