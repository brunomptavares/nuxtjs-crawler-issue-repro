export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'issue-repro',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet', type:"text/css", href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.2/css/bulma.min.css'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/staticAPI.js', mode: 'server' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@/modules/staticAPIGenerator',
    '@/modules/dynamicRoutesGenerator'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    //Enable 'fs' module
    extend (config, { isDev, isClient }) {
      config.node = { fs: 'empty' }
    }
  },

  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'dynamicPage',
        path: '*',
        component: resolve(__dirname, 'pages/dynamicPage.vue')
      })
    }
  },

  generate: {
    //crawler: false
  },
}
