<template>
  <div id="main" class="sidebar-none sidebar-divider-off" style="padding-top:0px; padding-bottom:0px;">
    <div class="main-gradient"></div>
    <div class="wf-wrap">
      <div class="wf-container-main">
        <div id="content" class="content pt-5" role="main">
          <div class="card-deck">
            <div class="card">
              <div class="bg-fusion-50 rounded-top" style="padding:40px 0 0px;">
                  <img src="/images/samdologo03.png">
              </div>
              <div class="card-body text-center">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                  content.</p>
                <p>
                    <a href="#"><i class="fal fa-envelope fa-lg"></i></a>
                    <a href="#"><i class="fab fa-twitter fa-lg"></i></a>
                </p>
              </div>
            </div>
            <div class="card">
              <div class="bg-fusion-50 rounded-top" style="padding:40px 0 40px;"></div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wf-wrap">
    </div>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    components: {},
    computed: {
      ...mapState({})
    },
    data() {
      return {}
    },
    async asyncData(context) {},
    methods: {},
    head() {
      return {
        title: this.$store.state.common.content.text,
        meta: [{
          hid: 'description',
          name: 'description',
          content: ''
        }, ]
      }
    }
  }

</script>
<style scoped>
  .card-deck img {
    width: 200px;
    height: 200px;
    display: block;
    margin: 0px auto;
    border: 1px solid #fff;
    border-radius: 50%;
  }


</style>
