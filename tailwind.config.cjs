/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  important: true,
  corePlugins: {
    preflight: false
  },
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      'xs': '0px',
      'sm': '600px',
      'md': '1024px',
      'lg': '1440px',
      'xl': '1920px',
    },
    extend: {
      colors: {
        primary: '#564f68',
        secondary: '#a198b3',
        accent: '#fba147',
        dark: '#1d1d1d',
        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037'
      }
    }
  },
  plugins: [],
}
