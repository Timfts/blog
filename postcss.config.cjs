const path = require("path");
const autoprefixer = require("autoprefixer");
const postcssUrl = require("postcss-url");
const cssNano = require("cssnano");

const inlineUrl = postcssUrl({
  filter: (filename) => {
    const file = filename?.url || "";
    const hasAllowedExtension = file.endsWith("png") || file.endsWith("svg");
    const isFromCustomTheme = file.includes("zune");
    return hasAllowedExtension && !isFromCustomTheme;
  },
  url: "inline",
  basePath: path.resolve("public"),
});

module.exports = {
  plugins: [autoprefixer, inlineUrl, cssNano],
};
