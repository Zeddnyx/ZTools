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
        mainBg: '#282828',
        mainText: '#555555',
        mainBtn: '#61697b',
        btnHover: '#344353',
      },
    },
  },
  plugins: [],
}
