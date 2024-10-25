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
        sort: "var(--wood-smoke-950)",
        // ER IKKE DONE ENDNU!!!
        // --cerise-red-600: #ff1054;
        // --pine-green-700: #007c79;
        // --pine-green-800: #066968;
        // --wood-smoke-700: #4f4f4f;
        // --wood-smoke-950: #1a1a1a;
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
