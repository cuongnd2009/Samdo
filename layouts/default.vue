<template>
  <body class="page-template-default page page-id-408 page-child parent-pageid-7 fancy-header-on disabled-hover-icons dt-responsive-on srcset-enabled btn-flat custom-btn-color custom-btn-hover-color bold-icons phantom-fade phantom-shadow-decoration phantom-logo-off sticky-mobile-header mobile-hide-sidebar top-header first-switch-logo-left first-switch-menu-right second-switch-logo-left second-switch-menu-right right-mobile-menu layzr-loading-on popup-message-style dt-fa-compatibility the7-ver-7.1.2 wpb-js-composer js-comp-ver-5.5.5 vc_responsive mb-level-0 mb-desktop2 is-webkit no-mobile closed-overlay-mobile-header">
    <div id="page" class="closed-mobile-header">
      <a class="skip-link screen-reader-text" href="#408#content">Skip to content</a>

      <div class="mobile-header-space"></div>
      <div
        class="masthead classic-header justify full-width-line widgets surround small-mobile-menu-icon dt-parent-menu-clickable show-mobile-logo"
        role="banner">
        <div class="top-bar top-bar-empty top-bar-line-hide">
          <div class="top-bar-bg"></div>
          <div class="mini-widgets left-widgets"></div>
          <div class="mini-widgets right-widgets"></div>
        </div>
        <Header />
        <MobileHeaderBar></MobileHeaderBar>
      </div>
      <div class="dt-close-mobile-menu-icon" @click="showHideMenuRight()"><span></span></div>
      <MenuMobile></MenuMobile>
      <nuxt />
      <Footer />
    </div>
  </body>
</template>

<script>
import MobileHeaderBar from '@/components/Mobile/MobileHeaderBar.vue';
import MenuMobile from '@/components/Mobile/Menu.vue';
  export default {
  components: { MobileHeaderBar, MenuMobile },
    data() {
      return {}
    },
    async fetch() {},
    created() {},
    mounted() {},
    beforeDestroy() {},
    methods: {
      showHideMenuRight() {
        $('div.show-mobile-header').toggleClass('closed-mobile-header show-mobile-header')
      },
      loadGA() {
        const UA = this.GA
        // GA
        if (process.env.NODE_ENV === 'production')
          return
        /*
         ** Include Google Analytics Script
         */
        ;
        (function (i, s, o, g, r, a, m) {
          i.GoogleAnalyticsObject = r;
          (i[r] =
            i[r] ||
            function () {
              ;
              (i[r].q = i[r].q || []).push(arguments)
            }),
          (i[r].l = 1 * new Date());
          (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
          a.async = 1
          a.src = g
          m.parentNode.insertBefore(a, m)
        })(
          window,
          document,
          'script',
          'https://www.google-analytics.com/analytics.js',
          'ga'
        )
        /*
         ** Set the current page
         */
        ga('create', UA, 'auto')
        /*
         ** Every time the route changes (fired on initialization too)
         */
        this.$router.afterEach((to, from) => {
          /*
           ** We tell Google Analytics to add a `pageview`
           */
          ga('set', 'page', to.fullPath)
          ga('send', 'pageview')
        })
      },
      loadGaTags() {
        window.dataLayer = window.dataLayer || [];

        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', process.env.UA);
      }
    },
    head() {
      return {
        script: [{
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.UA}`,
          async: true
        }]
      }
    }
  }

</script>
