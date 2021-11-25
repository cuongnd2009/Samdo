<template>
<ol class="breadcrumb page-breadcrumb">
  <li class="breadcrumb-item">
    <nuxt-link to="/" :title="$t('Bảng điều khiển')">
      <i class="fal fa-home-alt"></i>
      <span class="nav-link-text">{{$t('Bảng điều khiển')}}</span>
    </nuxt-link>
  </li>
  <li v-for="item in items" class="breadcrumb-item">
    <nuxt-link v-if="item.link" :to="item.link" :title="item.name">
      <i v-if="item.icon" :class="item.icon"></i>
      <span class="nav-link-text">{{item.name}}</span>
    </nuxt-link>
    <span v-else>
      <i v-if="item.icon" :class="item.icon"></i>
      {{item.name}}
    </span>
  </li>
</ol>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: null,
    },
  },
  mounted() {},
}
</script>
