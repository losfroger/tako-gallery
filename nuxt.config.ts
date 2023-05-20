// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-quasar-ui',
    '@nuxt/devtools',
    '@nuxtjs/eslint-module',
    '@nuxt/image-edge',
    'nuxt-icon',
  ],
  css: ['@/assets/styles/global.scss'],
  quasar: {
    iconSet: 'mdi-v7',
    extras: {
      animations: 'all',
      fontIcons: ['mdi-v7']
    },
    config: {
      brand: {
        primary: '#564f68',
        secondary: '#a198b3',
        accent: '#fba147',
        dark: '#1d1d1d',
        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037',
      }
    }
  },
  image: {
    provider: 'ipx',
    screens: {
      'xs': '0px',
      'sm': '600px',
      'md': '1024px',
      'lg': '1440px',
      'xl': '1920px',
    },
  },
})
