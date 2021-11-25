<template>
  <div :id="'language-input-' + _uid" v-if="iValue" :class="countLocale < 3 ? 'languages_box_inline' : ''">
    <div class="languages_box">
      <span
        v-for="item in $i18n.locales"
        :key="item.code"
        :title="item.name"
        :class="getFlagClass(item)"
        @click="showInput(item.code)"
        :id="`flag-${_uid}-${item.code}`"
      >
        <i :class="`flag flag-${item.code}`"></i>
      </span>
    </div>
    <div
      v-for="item of $i18n.locales"
      :key="item.code"
      :style="item.code !== currentLanguage ? 'display: none;' : ''"
      class="input_box"
    >
      <textarea
        v-if="eleType === 'textarea'"
        :class="`form-control input_${_uid}_${item.code}`"
        v-model="iValue[item.code]"
        v-bind="$attrs"
      />
      <input
        v-else
        :class="`form-control input_${_uid}_${item.code}`"
        v-model="iValue[item.code]"
        v-bind="$attrs"
      >
    </div>
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: null,
      default: ''
    },
    eleType: {
      type: String,
      default: 'input'
    }
  },
  data: () => ({
    iValue: null,
    currentLanguage: '',
    groupRules: {},
    initFormat: {}
  }),
  watch: {
    // Handles internal model changes.
    iValue: {
      deep: true,
      handler(newVal) {
        this.genEmitData(newVal)
      }
    },
    // Handles external model changes.
    value(newVal) {
      this.genPropData(newVal)
    }
  },
  computed: {
    countLocale() {
      return this.$i18n.locales.length
    }
  },
  async created() {
    await this.$i18n.locales.forEach(e => {
      this.initFormat[e.code] = ''
    })
    this.iValue = { ...this.initFormat }

    this.currentLanguage = this.$i18n.locale
    if (this.value) {
      this.genPropData(this.value)
    }
  },
  methods: {
    async genPropData(value) {
      try {
        const data = JSON.parse(value)
        await this.$i18n.locales.forEach(e => {
          this.initFormat[e.code] = data[e.code]
        })
        this.iValue = { ...this.initFormat }
      } catch (e) {}
    },
    genEmitData(newData) {
      let output = ''
      if (Object.keys(newData).length) {
        Object.keys(newData).forEach(k => {
          if (!newData[k]) delete newData[k]
          if (newData[k] && !newData[k].trim().length) {
            delete newData[k]
          }
        })
        if (Object.keys(newData).length) {
          output = JSON.stringify(newData)
        }
      }
      if (output !== this.value) this.$emit('input', output)
    },
    getFlagClass(item) {
      let className = ''
      if (item.code === this.currentLanguage) className += 'current'
      if (this.iValue && this.iValue[item.code]) className += className ? ' active' : 'active'
      return className
    },
    showInput(language) {
      this.currentLanguage = language
      $(`.input_${this._uid}_${language}`).focus()
    }
  }
}
</script>
