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
    fontSize: {
      'xxs': '.5rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
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