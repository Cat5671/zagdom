// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Open Sans': [400, 700],
        Montserrat: true,
      }
    }],
  ],
  css: ['@/assets/global.scss'],
  compatibilityDate: '2025-04-12'
})