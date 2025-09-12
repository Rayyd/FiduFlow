import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// --- ROBUSTE ---
// 1) Si on est sur Vercel => base = "/" (racine)
// 2) Sinon (ex: GitHub Pages) => base = "/astro-site-starter/"
// 3) Possibilité de forcer via variable d'env ASTRO_BASE
const isVercel = !!(process.env.VERCEL || process.env.VERCEL_URL);
const forcedBase = process.env.ASTRO_BASE; // ex: "/" sur Vercel Project Settings → Environment Variables

// TOUJOURS mettre un slash final pour les bases non-root
function ensureTrailingSlash(path) {
  if (!path) return "/";
  return path.endsWith("/") ? path : path + "/";
}

const site = isVercel
  ? `https://${process.env.VERCEL_URL || "localhost:4321"}/`
  : "https://rayyd.github.io/astro-site-starter/";

const base = ensureTrailingSlash(
  forcedBase ?? (isVercel ? "/" : "/astro-site-starter/")
);

// (Optionnel mais conseillé) mets ASTRO_BASE="/" dans Vercel → Project Settings → Environment Variables
export default defineConfig({
  site,
  base,
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  output: "static",
  prefetch: { defaultStrategy: "viewport" },
});
