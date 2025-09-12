/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // FiduFlow brand (Charte Graphique)
        ff: {
          blue: "#2563EB",      // Bleu Techno
          green: "#10B981",     // Vert Croissance
          black: "#111827",     // Noir Profond
          gray: "#F9FAFB"       // Gris Clair
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Arial", "sans-serif"],
        display: ["Montserrat", "Inter", "system-ui", "sans-serif"]
      },
      borderRadius: {
        xl2: "1rem"
      },
      boxShadow: {
        soft: "0 8px 30px rgb(0 0 0 / 0.07)"
      }
    }
  },
  plugins: []
};
