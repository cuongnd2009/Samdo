<template>
  <a v-if="newTab" :href="localePath(to)"> <slot /> </a>
  <nuxt-link v-else :to="localePath(to)" v-bind="$attrs"> <slot /> </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '/'
    },
    newTab: {
      type: Boolean,
      default: false
    }
  }
}
</script>
