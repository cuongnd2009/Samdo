<template>

</template>

<script>
export default {
  props: {
    id: String,
    value: [String,Number],
    list: Object,
    label: String
  },
  data: () => ({
    iValue: ''
  }),
  watch: {
    iValue(newVal) {
      this.$emit('input', newVal)
    },
    value(newVal) {
      this.iValue = newVal
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
};
</script>
