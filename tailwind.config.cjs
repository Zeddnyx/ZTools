/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        pop:  ['Poppins', 'sans-serif'],
      },
      colors: {
        mainBg: '#eee',
        mainText: '#555555',
        mainBtn: '#376ae7',
        btnHover: '#3066e2',
      },
    },
  },
  plugins: [],
}
