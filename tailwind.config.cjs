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
      fontSize: {
        sm: '18px',
      },
      colors: {
        mainBg: '#3e4451',
        mainText: '#abb2bf',
        mainBtn: '#282c34'
      },
    },
  },
  plugins: [],
}
