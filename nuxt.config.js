const { API_KEY, SERVICE_DOMAIN, API_URL } = process.env;

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'On The Rock',
    titleTemplate: '%s - On The Rock',
    htmlAttrs: {
      lang: 'en',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "On The Rock is a climbing video app and website where you can find world's best climbing videos." },
      { hid: 'og:site_name', property: 'og:site_name', content: 'On The Rock' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://ontherock-climbing.com/' },
      { hid: 'og:title', property: 'og:title', content: 'On The Rock' },
      { hid: 'og:description', property: 'og:description', content: "On The Rock is a climbing video app and website where you can find world's best climbing videos." },
      { hid: 'og:image', property: 'og:image', content: 'https://ontherock-climbing.com/images/ogp/logo_ogp.png' },
      // { property: 'article:publisher', content: 'FacebookURL' },
      // { property: 'fb:app_id', content: 'FacebookAppID' },
      // { name: 'twitter:card', content: 'summary' },
      // { name: 'twitter:site', content: '@Twitter' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'On The Rock' },
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
    name: "On The Rock",
    lang: "en",
    short_name: "On The Rock",
    title: "On The Rock",
    "og:title": "On The Rock",
    description: "On The Rock is a climbing video app and website where you can find world's best climbing videos.",
    "og:description": "On The Rock is a climbing video app and website where you can find world's best climbing videos.",
    theme_color: "#fffcf1",
    background_color: "#171717",
    display: 'standalone',
    orientation: 'portrait',
    scope: '/',
    start_url: '/',
  },
  pwa: {
    icon: {
      source: 'static/icon_pwa_small.png',
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
