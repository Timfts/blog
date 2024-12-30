import { html } from "lit";

const filterStyle = `
@keyframes flicker {
  0% {
    opacity: 0.94763;
  }
  5% {
    opacity: 0.08062;
  }
  10% {
    opacity: 0.84418;
  }
  15% {
    opacity: 0.76842;
  }
  20% {
    opacity: 0.04228;
  }
  25% {
    opacity: 0.66851;
  }
  30% {
    opacity: 0.69668;
  }
  35% {
    opacity: 0.27828;
  }
  40% {
    opacity: 0.29208;
  }
  45% {
    opacity: 0.72248;
  }
  50% {
    opacity: 0.21854;
  }
  55% {
    opacity: 0.54498;
  }
  60% {
    opacity: 0.91607;
  }
  65% {
    opacity: 0.00856;
  }
  70% {
    opacity: 0.40372;
  }
  75% {
    opacity: 0.91298;
  }
  80% {
    opacity: 0.51993;
  }
  85% {
    opacity: 0.83811;
  }
  90% {
    opacity: 0.10633;
  }
  95% {
    opacity: 0.21635;
  }
  100% {
    opacity: 0.38487;
  }
}

.crt-tv {
    position: relative;
}

.crt-tv::after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(18, 16, 16, 0.1);
    opacity: 0;
    z-index: 2000;
    pointer-events: none;
    animation: flicker 0.15s infinite;
}

.crt-tv::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        rgba(18, 16, 16, 0) 50%,
        rgba(0, 0, 0, 0.25) 50%
      ),
      linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.06),
        rgba(0, 255, 0, 0.02),
        rgba(0, 0, 255, 0.06)
      );
    z-index: 2000;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
  }

`;

export default function loadCRTTV() {
  const style = document.createElement("style");
  style.textContent = filterStyle;

  document.head.appendChild(style);
  document.body.classList.add("crt-tv");
}