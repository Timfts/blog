import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import msnEmoticons from "./plugins/msn-emoticons/index.js";

// https://astro.build/config
export default defineConfig({
  site: "https://timfontes.com",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-br"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  //one dark pro vitesse-black
  markdown: {
    remarkPlugins: [
      msnEmoticons
    ],
    shikiConfig: {
      theme: "github-dark-default",
    },
  },
  scopedStyleStrategy: "class",
  vite: {
    build: {
      inlineStylesheets: "always",
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "src/scss/mixins";',
        },
      },
    },
  },
  integrations: [sitemap()],
});
