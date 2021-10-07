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
      spacing: {
        '1/24': '4.166667%',
        '26': '6.5rem',
        '58': '14.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '100': '25rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '140': '35rem',
        '144': '36rem',
        '148': '37rem',
        '152': '38rem',
        '160': '40rem',
        '176': '44rem',
        '180': '45rem',
        '192': '48rem',
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
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