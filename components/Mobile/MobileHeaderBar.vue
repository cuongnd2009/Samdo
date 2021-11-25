<template>
  <div class="mobile-header-bar" @click="showHideMenuRight()">
    <div class="mobile-navigation"><a href="#408#" class="dt-mobile-menu-icon"><span class="lines"></span></a>
    </div>
    <div class="mobile-mini-widgets"></div>
    <div class="mobile-branding"><a href="http://samdoacc.com/"><img class=" preload-me"
          src="/images/samdologo-02-01.png"
          srcset="http://samdoacc.com/wp-content/uploads/2018/10/samdologo-02-01.png 215w, http://samdoacc.com/wp-content/uploads/2018/10/samdologo-01.png 447w"
          width="215" height="35" sizes="215px" alt="samdoacc"><img class="mobile-logo preload-me"
          src="/images/samdologo03.png"
          srcset="http://samdoacc.com/wp-content/uploads/2018/02/samdologo03.png 92w, http://samdoacc.com/wp-content/uploads/2018/02/samdologo03.png 92w"
          width="92" height="44" sizes="92px" alt="samdoacc"></a></div>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    computed: {
      ...mapState({})
    },
    data() {
      return {}
    },
    async asyncData(context) {},
    methods: {
        showHideMenuRight() {
          $('div.closed-mobile-header').toggleClass('closed-mobile-header show-mobile-header')
        }
    },
  }

</script>
<style>
  .mb-20 {
    margin-bottom: 20px;
  }

</style>
