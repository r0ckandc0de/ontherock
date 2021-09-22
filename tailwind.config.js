const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
     './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cWhite': '#fffcf1',
        'cBlack': '#171717',
        'cRed': '#DC2626',
        'cPink': '#ff006f',
        'cLemon': '#d2d200',
        'cGreen': '#00a096',
        'cBlue': '#00a5dd',
        'cPurple': '#b50099',
        'cYellow': '#ffbf1f',
        'cBase': '#171717',
        'cMain': '#fffcf1',
        'cAcc': '#DC2626',
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
  ],
}