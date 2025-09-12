import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// IMPORTANT: GitHub Pages base path
const site = "https://rayyd.github.io/astro-site-starter/";

export default defineConfig({
  site,
  base: "/astro-site-starter",
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  output: "static",
  prefetch: { defaultStrategy: "viewport" }
});
