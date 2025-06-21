import { events } from "@constants/index";
import { getCurrentLocale } from "@helpers/i18n";
import randomInArray from "@helpers/randomInArray";
import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

const EN_ONLY_BANNERS = ["chow-chow", "him", "javascript", "xpmagazine"];

const PT_ONLY_BANNERS = ["anuncie", "cartao", "dinheiro", "mp3", "promova-site", "renda-online"];

const COMMON_BANNERS = [
  "alone",
  "avp",
  "diablo2",
  "dont-click",
  "emails",
  "enlarge",
  "habbo",
  "matrix",
  "meet",
  "rats",
  "tahiti",
  "vice-city",
  "visa",
  "win-dvd-player",
  "xfiles",
];

export class AdsBanner extends LitElement {
  @property({ attribute: false })
  currentLang = getCurrentLocale();

  @property({ attribute: false })
  usedBanners = [...COMMON_BANNERS, ...(this.currentLang === "en" ? EN_ONLY_BANNERS : []), ...(this.currentLang === "pt-br" ? PT_ONLY_BANNERS : [])];

  @property({ attribute: false })
  currentBanner = randomInArray(this.usedBanners);

  @property({ attribute: false })
  changeLabel = {
    "pt-br": "Mudar",
    en: "Shuffle",
  }[this.currentLang];

  static styles = css`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    .banner-holder {
      display: inline-block;
      height: 80px;
      margin-top: 20px;
      align-items: center;
      position: relative;
      justify-content: center;
    }

    .banner-img {
      height: 100%;
      width: auto;
      flex-shrink: 0;
      flex-grow: 0;
      cursor: pointer;
    }

    .shuffle-btn {
      position: absolute;
      top: 0;
      right: 0;
    }
  `;

  private _randomizeAd() {
    const newAd = randomInArray(this.usedBanners);
    if (newAd === this.currentBanner) return this._randomizeAd();
    this.currentBanner = newAd;
  }

  private _callAdClick() {
    const closeEvent = new CustomEvent(events.OPEN_AD, {
      bubbles: true,
    });
    this.dispatchEvent(closeEvent);
  }

  render() {
    return html`<div class="banner-holder">
      <button class="shuffle-btn" @click=${this._randomizeAd}>${this.changeLabel}</button>
      <img class="banner-img" @click=${this._callAdClick} src=${`/images/banners/${this.currentBanner}.gif`} alt="fake ad banner" />
    </div>`;
  }
}
