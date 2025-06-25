import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import pagePaths from "@constants/pagePaths";
import { getCurrentLocale } from "@helpers/i18n";
import randomInArray from "@helpers/randomInArray";
import { COMMON_BANNERS, EN_NAUGHTY_BANNERS, EN_ONLY_BANNERS, PT_ONLY_BANNERS } from "./banners";

import styles from "./styles";

export class AdsBanner extends LitElement {
  @property({ attribute: false })
  currentLang = getCurrentLocale();

  @property({ attribute: false })
  usedBanners = [
    ...COMMON_BANNERS,
    ...EN_NAUGHTY_BANNERS,
    ...(this.currentLang === "en" ? EN_ONLY_BANNERS : []),
    ...(this.currentLang === "pt-br" ? PT_ONLY_BANNERS : []),
  ];

  @property({ attribute: false })
  currentBanner = randomInArray(this.usedBanners);

  @property({ attribute: false })
  changeLabel = {
    "pt-br": "Mudar",
    en: "Shuffle",
  }[this.currentLang];

  @property({ attribute: false })
  changeHistory: string[] = [];

  static styles = styles;

  private _randomizeAd() {
    const newAd = randomInArray(this.usedBanners);
    const lastShowedAds = this.changeHistory.slice(0, 4);
    if (lastShowedAds.includes(newAd)) return this._randomizeAd();
    this.changeHistory.unshift(newAd);
    this.currentBanner = newAd;
  }

  private _callAdClick() {
    const isNaughty = EN_NAUGHTY_BANNERS.includes(this.currentBanner);
    const pagePath = pagePaths[this.currentLang as Lang].anf;
    const fmtPath = `${pagePath}${isNaughty ? "?type=naughty" : ""}`;
    window.open(fmtPath, "_blank");
  }

  render() {
    return html` <div class="banner-holder">
      <button class="shuffle-btn" @click=${this._randomizeAd}>${this.changeLabel}</button>
      <img class="banner-img" @click=${this._callAdClick} src=${`/images/banners/${this.currentBanner}.gif`} alt="fake ad banner" />
    </div>`;
  }
}
