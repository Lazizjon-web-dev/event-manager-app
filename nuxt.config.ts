// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Global page headers
  app: {
    head: {
      title: 'Event Manager App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'An app to manage events' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' },
      ],
    },
  },

  // Tailwind CSS integration
  modules: ['@nuxtjs/tailwindcss','@vueuse/nuxt'],
  plugins:['@/plugins/vuex'],
  // Build Configuration
  build: {
    transpile: [],
  },

  // Define environment variables (if needed)
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8000',
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
});