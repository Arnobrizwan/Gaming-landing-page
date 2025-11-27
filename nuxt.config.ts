// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      'Vollkorn+SC': [600, 700],
      Signika: [300, 400, 600],
      Figtree: [400, 600]
    },
    display: 'swap',
    preload: true
  }
})
