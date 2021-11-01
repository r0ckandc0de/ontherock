const { API_KEY, SERVICE_DOMAIN, API_URL } = process.env;

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'On the Rock',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'On the Rock' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto:wght@400;500&display=swap'},
      { rel: 'stylesheet', href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-microcms-module',
    '@nuxtjs/pwa',
  ],

  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['@nuxtjs/i18n', {
      locales: [
        {
          code: 'en',
          file: 'en.js',
          iso: 'en-US'
        },
        {
          code: 'ja',
          file: 'ja.js',
          iso: 'ja_JP',
        }
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'en'
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  publicRuntimeConfig: {
    apiUrl: API_URL,
    apiKey: API_KEY,
    // apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined
  },
  privateRuntimeConfig: {
    apiKey: API_KEY,
  },
  
  manifest: {
    name: "On the Rock",
    lang: "en",
    short_name: "On the Rock",
    title: "On the Rock",
    "og:title": "On the Rock",
    description: "Climbing Movies Collection in the World",
    "og:description": "Climbing Movies Collection in the World",
    theme_color: "#fffcf1",
    background_color: "#171717",
    display: 'standalone',
    orientation: 'portrait',
    scope: '/',
    start_url: '/',
  },
  pwa: {
    icon: {
      source: 'static/icon_pwa.png',
      fileName: 'icon_pwa.png'
    }
  },
  workbox: {
    dev: false, // Service Workerを開発環境で使用するかどうか
    runtimeCaching: [
      {
        urlPattern: '^https://ontherock-climbing.com/.*',
        handler: 'staleWhileRevalidate',
        strategyOptions: {
          cacheName: 'site-cache',
        },
        strategyPlugins: [
          {
            use: 'Expiration',
            config: {
              maxAgeSeconds: 24 * 60 * 60 * 30
            }
          }
        ]
      }
    ]
  }
}
