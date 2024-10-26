/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"campton-xb"', "sans-serif"],
        customFont: ['"campton-sb"', "sans-serif"],
        customFont: ['"oliver"', "serif"],
        customFont: ['"tiempos"', "serif"],
        customFont: ['"tiempos-italic"', "serif"],
      },

      colors: {
        /* Farver - skriv disse værdier: hvid, sort osv., når de skal bruges i HTML*/
        hvid: "var(--vista-white-50)",
        pink: "var(--cerise-red-600)",
        turq700: "var(--pine-green-700)",
        turq800: "var(--pine-green-800)",
        sort700: "var(--wood-smoke-700)",
        sort950: "var(--wood-smoke-950)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
