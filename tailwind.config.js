/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark0: "#282828",
        dark1: "#3c3836",
        dark2: "#504945",
        light0: "#fbf1c7",
        light1: "#ebdbb2",
        light2: "#d5c4a1",
        light3: "#bdae93",
        yellow: "#fabd2f",
        green: "#b8bb26",
        blue: "#83a598",
        aqua: "#8ec07c",
        aqua_alt: "#689d6a",
        red: "#fb4934",
        red_alt: "#cc241d",
      },
    },
  },
  plugins: [],
};
