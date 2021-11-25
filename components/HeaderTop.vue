<template>
  <div class="header__top">
    <div class="container">
      <div class="header__top--left">
        <a :href="static.phone ? `tel:${static.phone}` : ''" class="header__top__item"><img src="/images/svg/phone.svg" alt=""> {{ static.phone }} </a>
        |
        <a :href="static.email ? `mailto:${static.email}` : ''" class="header__top__item"><img src="/images/svg/email.svg" alt=""> {{ static.email }} </a>
      </div>
      <div class="header__top--right">
        <a href="#" class="header__top__item"> {{ $t('Đăng nhập') }} </a>
        |
        <a href="#" class="header__top__item"> {{ $t('Đăng ký') }} </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    static: {
      type: Object,
      default: null
    }
  }
}
</script>
