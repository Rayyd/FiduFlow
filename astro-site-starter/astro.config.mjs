// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const isVercel = process.env.VERCEL === "1";
const site = isVercel
  ? `https://${process.env.VERCEL_URL || "localhost:4321"}`
  : "https://rayyd.github.io/astro-site-starter/";

export default defineConfig({
  site,
  base: isVercel ? "/" : "/astro-site-starter",
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  output: "static",
  prefetch: { defaultStrategy: "viewport" }
});
