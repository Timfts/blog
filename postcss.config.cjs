const path = require("path");
const autoprefixer = require("autoprefixer");
const postcssUrl = require("postcss-url");
const cssNano = require("cssnano");

const inlineUrl = postcssUrl({
  filter: (filename) => {
    const file = filename?.url || "";
    return file.endsWith("png") || file.endsWith("svg");
  },
  url: "inline",
  basePath: path.resolve("public"),
});

module.exports = {
  plugins: [autoprefixer, inlineUrl, cssNano],
};
