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
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
