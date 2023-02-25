/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        pop:  ['Poppins', 'sans-serif'],
      },
      fontSize: {
        sm: '18px',
      },
      colors: {
        mainBg: '#96bfff',
        mainBTn: '#75aeee',
        mainBgDark: '#2d3e57',
        
        mainText: '#071529',
        mainTextDark: '#eee'
      },
    },
  },
  plugins: [],
}
