const featuresExecutors = {
  theme: () => {
    console.log("changed theme");
  },
  filter: (option: string) => {
    if (option === "vintage-monitor") {
      document.body.style.filter = "blur(0.05em) hue-rotate(0)";
    } else {
      document.body.style.filter = "none";
    }
  },
  "text-size": () => {
    console.log("changed textSize");
  },
  pointer: () => {
    console.log("changed pointer");
  },
  lang: () => {
    console.log("changed lang");
  },
};

export default featuresExecutors;
