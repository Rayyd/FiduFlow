import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// 1) Si on est sur Vercel => base "/"
// 2) Sinon (ex: GitHub Pages) => "/astro-site-starter/"
// 3) Possibilité de forcer via variable d'env ASTRO_BASE
const isVercel = !!(process.env.VERCEL || process.env.VERCEL_URL);
const forcedBase = process.env.ASTRO_BASE; // mets ASTRO_BASE="/" dans Vercel (Production + Preview)

const site = isVercel
  ? `https://${process.env.VERCEL_URL || "localhost:4321"}/`
  : "https://rayyd.github.io/astro-site-starter/"; // slash final

function ensureSlash(p) {
  if (!p) return "/";
  return p.endsWith("/") ? p : p + "/";
}

const base = ensureSlash(forcedBase ?? (isVercel ? "/" : "/astro-site-starter/"));

export default defineConfig({
  site,
  base,
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  output: "static",
  prefetch: { defaultStrategy: "viewport" },
});
