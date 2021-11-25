<template>
  <aside id="sidebar" class="sidebar bg-under-widget">
    <div class="sidebar-content widget-divider-off">
      <div class="wpb_column vc_column_container vc_col-12">
        <div class="vc_column-inner vc_custom_1490364540235 p-0">
          <div class="wpb_wrapper">
            <div class="wpb_text_column wpb_content_element ">
              <div class="wpb_wrapper">
                <div class="mb-widget">
                  <div class="mb-latest-basic mb-widget-shortcode">
                    <div class="mb-latest-title"><a href="#page_id=2411" title="NEWS">LATEST
                        NEWS</a>
                    </div>
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                            <small>3 days ago</small>
                            <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">List group item heading</h5>
                            </div>
                            <p class="mb-1">Some placeholder content in a paragraph.</p>
                            <small>And some small print.</small>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                            <small class="text-muted">3 days ago</small>
                            <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">List group item heading</h5>
                            </div>
                            <p class="mb-1">Some placeholder content in a paragraph.</p>
                            <small class="text-muted">And some muted small print.</small>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                            <small class="text-muted">3 days ago</small>
                            <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">List group item heading</h5>
                            </div>
                            <p class="mb-1">Some placeholder content in a paragraph.</p>
                            <small class="text-muted">And some muted small print.</small>
                        </a>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>

</template>
<script>
  import {
    mapState
  } from 'vuex'

  export default {
    computed: {
      ...mapState({})
    },
    created() {},
    methods: {}
  }

</script>
<style scoped>
.list-group-item {
    border: none;
    padding: 1rem 0rem;
}

</style>
