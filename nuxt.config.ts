// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@nuxt/eslint', '@nuxt/content', '@nuxt/ui'],

  css: ['~/assets/scss/main.scss'],

  ssr: true,

  // Permite auto-import de composables em subpastas
  imports: {
    dirs: ['composables/**'],
  },

  // Modo light como padrão (Tailwind, NuxtUI)
  colorMode: {
    preference: 'light',
  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'pt',
        class: 'light',
      },
    },
  },

  // Habilita compatibilidade com o Nuxt 4
  future: {
    compatibilityVersion: 4,
  },

  // Habilita o uso de componentes próprios em <component :is="">
  components: {
    global: true,
    dirs: ['~/components'],
  },

  // Fix: https://github.com/nuxt/content/issues/1622
  content: {
    api: {
      baseURL: '/_content',
    },
    watch: false,
  },
})
