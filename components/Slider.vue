<template>
  <div class="home-banner">
    <div class="flexslider flexslider-banner">
      <ul class="slides">
        <li v-for="(item, index) in banners" :key="index">
          <div class="container">
            <div class="row flexslider-banner__item">
              <div class="col-6">
                <p class="flexslider-banner__item__text1"> {{ $h.vt(item.title) }} </p>
                <p class="flexslider-banner__item__text2" v-html="dataConvert($h.vt($h.nl2br(item.description)))">
                </p>
                <button class="btn btn-orange"> {{ $t('Tham gia miễn phí ngay') }} </button>
              </div>
              <div class="col-6">
                <img :src="$h.getImg(item.image)" alt="">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banners: []
    }
  },
  async fetch() {
    let banners = [];
    const res = await this.$axios.$get('banner/fe')
    if (res.data) {
      this.banners = res.data
      banners = res.data
    }
    return { banners }
  },
  async mounted() {
    // await this.initVideo()
    setTimeout(() => {
      $('.flexslider-banner').flexslider({
        animation: "slide"
      });
    }, 1000)
  },
  methods: {
    dataConvert(data) {
      const array =data.split(" ")
      const dataConvert = array.length > 1 ? data.substring(0, data.lastIndexOf(" ")) + " <span class=\"orange\">" + array[array.length-1] + "</span>" : data
      return dataConvert
    }
  }
}
</script>
