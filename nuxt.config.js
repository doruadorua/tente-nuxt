import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,700' },
      { rel: 'stylesheet', href: 'fonts/icomoon/style.css' }
    ],
    script: [
      {src: "js/jquery-3.3.1.min.js", body: true},
      {src: "js/jquery-migrate-3.0.1.min.js", body: true},
      {src: "js/jquery-ui.js", body: true},
      {src: "js/popper.min.js", body: true},
      {src: "js/bootstrap.min.js", body: true},
      {src: "js/owl.carousel.min.js", body: true},
      {src: "js/jquery.stellar.min.js", body: true},
      {src: "js/jquery.countdown.min.js", body: true},
      {src: "js/bootstrap-datepicker.min.js", body: true},
      {src: "js/jquery.easing.1.3.js", body: true},
      {src: "js/aos.js", body: true},
      {src: "js/jquery.fancybox.min.js", body: true},
      {src: "js/jquery.sticky.js", body: true},
      {src: "js/main.js", body: true}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/static/css/aos.css',
    '@/static/css/bootstrap-datepicker.css',
    '@/static/css/bootstrap.min.css',
    //'@/static/css/bootstrap.min.css.map',
    '@/static/css/jquery-ui.css',
    '@/static/css/jquery.fancybox.min.css',
    '@/static/css/magnific-popup.css',
    '@/static/css/mediaelementplayer.css',
    '@/static/css/owl.carousel.min.css',
    '@/static/css/owl.theme.default.min.css',
    '@/static/css/style.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    }
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
