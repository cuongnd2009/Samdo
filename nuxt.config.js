const getAppRoutes = require('./utils/getRoutes')
const path = require('path')
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  server: {
    port: 3001,
    host: '0.0.0.0'
  },
  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.API_URL,
    },
    API_URL: process.env.API_URL,
    BASE_DOMAIN: process.env.BASE_DOMAIN
  },
  head: {
    title: 'SAM-DO',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    link: [
      { rel: 'icon', href: '/images/icon.png' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.4.1/css/all.css' },
      { rel: 'stylesheet', href: '/css/notifications/toastr/toastr.css' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/style(1).css' },
      { rel: 'stylesheet', href: '/css/bootstrap3-grid.css' },
      { rel: 'stylesheet', href: '/css/jcarousel.swipe.css' },
      { rel: 'stylesheet', href: '/css/style.min.css' },
      { rel: 'stylesheet', href: '/css/styles.css' },
      { rel: 'stylesheet', href: '/css/style(2).css' },
      { rel: 'stylesheet', href: '/css/the7.css' },
      { rel: 'stylesheet', href: '/css/settings.css' },
      { rel: 'stylesheet', href: '/css/Defaults.css' },
      { rel: 'stylesheet', href: '/css/icomoon-icomoonfree-16x16.css' },
      { rel: 'stylesheet', href: '/css/icomoon-numbers-32x32.css' },
      { rel: 'stylesheet', href: '/css/js_composer_front_custom.css' },
      { rel: 'stylesheet', href: '/css/custom.css' },
      { rel: 'stylesheet', href: '/css/css.css' },
      { rel: 'stylesheet', href: '/css/main.min.css' },
      { rel: 'stylesheet', href: '/css/back-compat.min.css' },
      { rel: 'stylesheet', href: '/css/all.min.css' },
      { rel: 'stylesheet', href: '/css/fontello.min.css' },
      { rel: 'stylesheet', href: '/css/custom(1).css' },
      { rel: 'stylesheet', href: '/css/media.css' },
      { rel: 'stylesheet', href: '/css/style(3).css' },
      { rel: 'stylesheet', href: '/css/style.min(1).css' },
      { rel: 'stylesheet', href: '/css/headings.min.css' },
      { rel: 'stylesheet', href: '/css/css(1).css' }
    ],
    script: [
      { src: '/js/vendors.bundle.js' },
      { src: '/js/notifications/toastr/toastr.js' },
      { src: 'https://cdn.jsdelivr.net/hls.js/latest/hls.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js' },
      { src: '/js/common/jquery.js' },
      { src: '/js/bootstrap.min.js' },
      { src: 'https://www.google.com/recaptcha/api.js' },
      { src: '/js/common/wp-emoji-release.min.js' },
      { src: '/js/common/jquery-migrate.min.js' },
      { src: '/js/common/jquery.jcarousel.min.js' },
      { src: '/js/common/jquery.tipTip.min.js' },
      { src: '/js/common//jquery.number.min.js' },
      { src: '/js/common/jquery.touchSwipe.min.js' },
      { src: '/js/common/json2.js' },
      { src: '/js/common/jcarousel.swipe.js' },
      { src: '/js/common/jquery.themepunch.tools.min.js' },
      { src: '/js/common/jquery.themepunch.revolution.min.js' },
      { src: '/js/common/above-the-fold.min.js' },
      { src: '/js/common/ultimate-params.min.js' },
      { src: '/js/common/headings.min.js' },
      { src: '/js/common/main.min.js' },
      { src: '/js/common/jquery.form.min.js' },
      { src: '/js/common/core.min.js' },
      { src: '/js/common/scripts.js' },
      { src: '/js/common/wp-embed.min.js' },
      { src: '/js/common/js_composer_front.min.js' },
      { src: '/js/common/dt-contact-form.min.js' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~plugins/app.js' },
    { src: '~config/constant.js' },
    { src: '~plugins/gtm.js', mode: 'client' },
    { src: '~plugins/ga.js', mode: 'client' },
    { src: '~plugins/vueGoogleMap' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: {
    dirs: [
      '~/components',
      '~/node_modules/@grooo/nuxt',
      { path: '~/pages', pattern: '**/components/*.vue' }
    ]
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/moment'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    'nuxt-i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  sitemap: {
    routes() {
      return getAppRoutes()
    },
    exclude: ['/404'],
    path: '/sitemap.xml',
    cacheTime: 1000 * 60 * 60,
    gzip: true
  },

  i18n: {
    locales: [
      {
        code: 'vn',
        iso: 'vn-VN',
        name: 'Vietnamese',
        file: 'vn.json'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json'
      }
    ],
    defaultLocale: 'vn',
    seo: true,
    lazy: true,
    detectBrowserLanguage: false,
    // detectBrowserLanguage: {
    //   cookieKey: 'redirected',
    //   useCookie: true
    // },
    langDir: 'config/locales/',
    parsePages: false,
    pages: {},
    // strategy: 'prefix_except_default',
    vueI18n: {
      fallbackLocale: 'vn',
      locale: 'vn',
      silentTranslationWarn: true, // Disable warning
      silentFallbackWarn: true, // Disable warning
    }
  },
  env: {
    API_URL: process.env.API_URL,
    BASE_DOMAIN: process.env.BASE_DOMAIN,
    UA: process.env.UA,
    GTM: process.env.GTM
  },


  axios: {
    // proxy: true
    baseURL: process.env.API_URL,
  },

  moment: {
    defaultTimezone: 'Asia/Ho_Chi_Minh',
    locales: ['vi']
  },

  router: {
    mode: 'history',
    extendRoutes(routes, resolve) {
      // routes.push({
      //   name: '',
      //   path: '',
      //   component: resolve(__dirname, 'pages/')
      // })
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      presets({isServer}) {
        const targets = isServer ? { node: 'current' } : { ie: 11 }
        return [
          [ require.resolve("@babel/preset-env"), { targets } ]
        ]
      },
      plugins: [
        "@babel/syntax-dynamic-import",
        "@babel/transform-runtime",
        "@babel/transform-async-to-generator"
      ]
    },
    transpile:[/^vue2-google-maps($|\/)/],
    extend (config, ctx) {
      config.module.rules.splice(0, 0, {
        test: /\.js$/,
        include: [path.resolve(__dirname, './node_modules/vue2-google-maps')],
        loader: 'babel-loader',
      })
    }
  }
}
