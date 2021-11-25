<template>
  <nav class="header__content--left navbar navbar-default" role="navigation">
    <div class="navbar-header">
      <h1 class="navbar-brand">
        <nuxt-link to="/"><img class="header__logo" :src="$h.getImg(static.logo)"></nuxt-link>
      </h1>
      <a href="#" style="clear: left"></a>
      <button type="button" id="nav_res_btn" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" @click="openMenuMobile()">
        <span class="sr-only"></span>
        <span> <img src="/images/svg/menu.svg"> </span>
      </button>
    </div>
    <div class="topRight">
      <ul class="nav navbar-nav navbarTop">
        <li v-for="(menu, index) in menus" :key="menu.id">
          <nuxt-link-locale v-if="menu.type === $c.MENU_TYPE_NONE">{{$h.vt(menu.name)}}</nuxt-link-locale>
          <nuxt-link-locale v-else-if="menu.type === $c.MENU_TYPE_INTERNAL" :new-tab="!!menu.open_tab" :to="getInternalLink(menu)">{{$h.vt(menu.name)}}</nuxt-link-locale>
          <a  v-else-if="menu.type === $c.MENU_TYPE_EXTERNAL" :target="!!menu.open_tab ? '_blank' : ''" :href="menu.link">{{$h.vt(menu.name)}}</a>
        </li>
      </ul>
      <!-- /.navbar-collapse -->
    </div>
  </nav>
</template>
<script>
export default {
  props: {
    menus: {
      type: Array,
      default: null
    },
    static: {
      type: Object,
      default: null
    }
  },
  watch:{
    $route (to, from){
      this.getActive()
    }
  },
  mounted() {
    this.getActive()
  },
  methods: {
    // get Active menu
    getActive() {
      let current = $('.navbarTop .nuxt-link-exact-active.nuxt-link-active')
      current.each(function () {
        const id = $(this).attr('id')
        if (!id) return
        const level = id.replace('menu-level-', '')
        for (let i = 1; i < level; i++) {
          $(this).parents(`#menu-level-${i}`).addClass('active')
        }
      })
      if (current.length == 0 && this.$route.path == '/') {
        $('.navbarTop li a').first().addClass('active')
      }
    },
    openMenuMobile() {
      if ($('body').hasClass('menu-push')) {
        $('body').removeClass('menu-push')
      } else {
        $('body').addClass('menu-push')
      }
    },
    // get link for menu
    getInternalLink(item) {
      if(item.type === this.$c.MENU_TYPE_INTERNAL) {
        let link = ''
        if (item.cate_slug) {
          link = '/c/' + this.$h.vt(item.cate_slug)
        } else if(item.post_slug) {
          link = '/p/' + this.$h.vt(item.post_slug)
        } else {
          link = item.link
        }
        return link
      }
      return '/'
    }
  }
}
</script>

<style>
.menu-header ul {
  border: 1px solid;
}
.navbarTop .nuxt-link-exact-active.nuxt-link-active, .navbarTop.active > a {
  font-weight: 600;
  color: #F58220;
}

nav li.router-link-active,
nav li.router-link-exact-active {
  background-color: indianred;
  cursor: pointer;
}
</style>
