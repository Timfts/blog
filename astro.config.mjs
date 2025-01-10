import { defineConfig } from "astro/config";

// import lit from "@astrojs/lit";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  /* integrations: [lit()] */
  site: "https://timfontes.com",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-br"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  //one dark pro vitesse-black
  markdown: {
    shikiConfig: {
      theme: "github-dark-default"
    }
  },
  scopedStyleStrategy: "class",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "src/scss/colors";
            @import "src/scss/mixins";
          `
        }
      }
    }
  },
  integrations: [sitemap()]
});