// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import critters from "astro-critters";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://m1chal-tkac.com",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    critters({}),
    sitemap(),
  ],
});
