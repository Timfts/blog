const easing = "cubic-bezier(0.76, 0, 0.24, 1)";

const transition = {
  forwards: {
    old: [
      {
        name: "customFadeOut",
        duration: 700,
        easing: easing,
        fillMode: "both",
      },
      {
        name: "customSlideToBottom",
        duration: 600,
        easing: easing,
        fillMode: "both",
      },
    ],
    new: [
      {
        name: "customFadeIn",
        duration: 600,
        easing: easing,
        fillMode: "both",
      },
      {
        name: "customSlideFromRight",
        duration: 700,
        easing: easing,
        fillMode: "both",
      },
    ],
  },
  backwards: {
    old: [
      {
        name: "customFadeOut",
        duration: 700,
        easing: easing,
        fillMode: "both",
      },
      {
        name: "customSlideToRight",
        duration: 600,
        easing: easing,
        fillMode: "both",
      },
    ],
    new: [
      {
        name: "customFadeIn",
        duration: 600,
        easing: easing,
        fillMode: "both",
      },
      {
        name: "customSlideFromBottom",
        duration: 700,
        easing: easing,
        fillMode: "both",
      },
    ],
  },
};

export default transition
