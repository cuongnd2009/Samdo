<template>
    <div class="dropdown">
      <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <p v-if="$i18n.locale == 'vn'"><img src="/images/svg/vietnam.svg" class="header__content__flag" alt=""> {{ $t('VNI') }} </p>
        <p v-if="$i18n.locale == 'en'"><img src="/images/svg/england.svg" class="header__content__flag" alt=""> {{ $t('English') }} </p>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li @click="changeLocale('vn')"><img src="/images/svg/vietnam.svg" alt=""> {{ $t('VNI') }} </li>
        <li @click="changeLocale('en')"><img src="/images/svg/england.svg" alt=""> {{ $t('English') }} </li>
      </ul>
    </div>
</template>
<script>
export default {
  methods: {
    changeLocale(locale) {
      this.$axios.setHeader('locale', locale)
      this.$moment.locale(locale)
      console.log(this.$route)

      if (this.$route.name.includes('p-slug___') && this.$route.path.includes('/p/')) {
        this.$nuxt.$emit('change-language-post', locale)
      } else if (this.$route.name.includes('c-slug___') && this.$route.path.includes('/c/')) {
        this.$nuxt.$emit('change-language-cate', locale)
      } else if(this.$route.path.includes('/course/') && this.$route.name.includes('course-detail-slug___')) {
        this.$nuxt.$emit('change-language-lesson-detail', locale)
      }
      else {
        this.$i18n.setLocale(locale)
      }
    }
  }
}
</script>
