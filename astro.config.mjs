import { defineConfig } from "astro/config";

// import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  /* integrations: [lit()] */
  site: "https://timfontes.com",
  scopedStyleStrategy: "class",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "src/scss/colors";
            @import "src/scss/mixins";
          `,
        },
      },
    },
  },
});
