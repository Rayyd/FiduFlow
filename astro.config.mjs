import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const isVercel = process.env.VERCEL === "1";

// IMPORTANT: laissez TOUJOURS un slash final pour la base non-root
const site = isVercel
  ? `https://${process.env.VERCEL_URL || "localhost:4321"}/`
  : "https://rayyd.github.io/astro-site-starter/"; // <- slash final

export default defineConfig({
  site,
  base: isVercel ? "/" : "/astro-site-starter/", // <- slash final
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  output: "static",
  prefetch: { defaultStrategy: "viewport" },
});
