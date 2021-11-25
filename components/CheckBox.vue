<template>
  <div class="frame-wrap" :id="'checkbox' + _uid" style="margin-top: 10px">
    <div class="demo">
      <div class="custom-control" :class="multiple ? 'custom-checkbox' : 'custom-radio'" v-for="item in list">
        <input :type="multiple ? 'checkbox' : 'radio'" class="custom-control-input" :id="_uid + item.id" :value="item.id"
               v-model="iValue" :disabled="disableList.includes(item.id)" :name="$attrs.name">
        <label class="custom-control-label" :for="_uid + item.id">{{ item.name }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number, Array],
    list: [Object, Array],
    multiple: Boolean,
    disableList: {
      type: Array,
      default: () => { return [] }
    }
  },
  data: () => ({
    iValue: []
  }),
  watch: {
    iValue(newVal) {
      this.$emit('input', newVal)
    },
    value(newVal) {
      if (this.multiple && !this.value) this.iValue = []
      else this.iValue = newVal
    }
  },
  created() {
    if (this.multiple && !this.value) this.iValue = []
    else this.iValue = this.value
  }
};
</script>
