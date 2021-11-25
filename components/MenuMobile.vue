<template>
  <div class="menu-right">
    <div class="menu-right__inner">
      <div class="menu-right__close" @click="menuClose()"><img src="/images/svg/delete-icon.svg" alt=""></div>
      <div class="menu-right__top">
        <div class="menu-right__login">
          <a href="#" class="header__top__item"> {{ $t('Đăng nhập') }} </a>
          |
          <a href="#" class="header__top__item"> {{ $t('Đăng ký') }} </a>
        </div>
      </div>
      <ul class="menu-right__nav">
        <li v-for="(menu, index) in menus" :key="menu.id">
          <nuxt-link-locale v-if="menu.type === $c.MENU_TYPE_NONE">{{$h.vt(menu.name)}}</nuxt-link-locale>
          <nuxt-link-locale v-else-if="menu.type === $c.MENU_TYPE_INTERNAL" :new-tab="!!menu.open_tab" :to="getInternalLink(menu)">{{$h.vt(menu.name)}}</nuxt-link-locale>
          <a  v-else-if="menu.type === $c.MENU_TYPE_EXTERNAL" :target="!!menu.open_tab ? '_blank' : ''" :href="menu.link">{{$h.vt(menu.name)}}</a>
        </li>
      </ul>
      <div class="menu-right__bottom">
        <a :href="static.phone ? `tel:${static.phone}` : ''" class="header__top__item"><img src="/images/svg/phone.svg" alt=""> {{ static.phone }} </a>
        <a :href="static.email ? `mailto:${static.email}` : ''" class="header__top__item"><img src="/images/svg/email.svg" alt=""> {{ static.email }} </a>
        <div class="dropdown">
          <LanguageSelector />
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      static: state => state.common.content,
      menus: state => state.common.menu
    })
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
      let current = $('.menu-right__nav .nuxt-link-exact-active.nuxt-link-active')
      if (current.length == 0 && this.$route.path == '/') {
        $('.menu-right__nav li a').first().addClass('active')
      }
      current.each(function () {
        const id = $(this).attr('id')
        if (!id) return
        const level = id.replace('menu-level-', '')
        for (let i = 1; i < level; i++) {
          $(this).parents(`#menu-level-${i}`).addClass('active')
        }
      })
    },
    menuClose() {
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
.nuxt-link-exact-active.nuxt-link-active, .active > a {
  font-weight: 600;
  color: #F58220;
}
</style>
