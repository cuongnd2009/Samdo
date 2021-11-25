<template>
  <aside id="sidebar" class="sidebar bg-under-widget">
    <div class="sidebar-content widget-divider-off">
      <section id="presscore-custom-menu-one-2" class="widget widget_presscore-custom-menu-one">
        <div class="widget-title">Our Services</div>
        <ul class="custom-menu enable-bold">
          <li
            class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-408 current_page_item menu-item-1969 act first">
            <a href="#408">감사 및 회계자문</a></li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1968"><a href="#1752">세무
              서비스</a></li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1967"><a href="#1754">컨설팅
              서비스</a></li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1970"><a href="#1756">아웃소싱
              서비스</a></li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1966"><a href="#1758">기업금융
              서비스</a></li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1965"><a href="#1760">리스크 관리
              서비스</a></li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2678"><a href="#2392">해외
              진출입 서비스</a></li>
        </ul>
      </section>
      <section id="presscore-contact-form-widget-2" class="widget widget_presscore-contact-form-widget">
        <div class="widget-title">Any Questions?</div>
        <div class="widget-info">Please let me know if you have any questions.
          I will answer you sincerely.<br>
          궁금하신점이 있으시면 연락주세요.<br>
          성실히 답변해드리겠습니다.</div>
        <form class="dt-contact-form dt-form" action="http://samdoacc.com/" method="post">
          <input type="hidden" name="widget_id" value="presscore-contact-form-widget-2"><input type="hidden"
            name="send_message" value="">
          <div class="form-fields"><span class="form-name"><label class="assistive-text">Name</label><input type="text"
                placeholder="Name" name="name" value="" aria-required="false">
            </span><span class="form-mail"><label class="assistive-text">E-mail *</label><input type="text"
                class="validate[required,custom[email]]" placeholder="E-mail *" name="email" value=""
                aria-required="true">
            </span><span class="form-telephone"><label class="assistive-text">Telephone</label><input type="text"
                placeholder="Telephone" name="telephone" value="" aria-required="false">
            </span></div><span class="form-message"><label class="assistive-text">Message *</label><textarea
              class="validate[required]" placeholder="Message *" name="message" rows="4"
              aria-required="true"></textarea>
          </span>
          <p><a href="#408#" class="dt-btn dt-btn-m dt-btn-submit" rel="nofollow"><span>Submit</span></a><input
              class="assistive-text" type="submit" value="submit">
          </p>
        </form>
      </section>
      <section id="search-3" class="widget widget_search">
        <div class="widget-title">Search</div>
        <form class="searchform" role="search" method="get" action="http://samdoacc.com/">
          <label for="search" class="screen-reader-text">Search:</label>
          <input type="text" class="field searchform-s" name="s" value="" placeholder="Type and hit enter …">
          <input type="submit" class="assistive-text searchsubmit" value="Go!">
          <a href="#408#go" class="submit"></a>
        </form>
      </section>
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


</style>
