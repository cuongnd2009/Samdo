<template>
  <header class="header-bar">
    <div class="branding">
      <div id="site-title" class="assistive-text">samdoacc</div>
      <div id="site-description" class="assistive-text">삼도회계법인</div>
      <nuxt-link to="/"><img class=" preload-me" src="/images/samdologo-02-01.png"
          srcset="http://samdoacc.com/wp-content/uploads/2018/10/samdologo-02-01.png 215w, http://samdoacc.com/wp-content/uploads/2018/10/samdologo-01.png 447w"
          width="215" height="35" sizes="215px" alt="samdoacc"><img class="mobile-logo preload-me"
          src="/images/samdologo03.png"
          srcset="http://samdoacc.com/wp-content/uploads/2018/02/samdologo03.png 92w, http://samdoacc.com/wp-content/uploads/2018/02/samdologo03.png 92w"
          width="92" height="44" sizes="92px" alt="samdoacc"></nuxt-link>
      <div class="mini-widgets"></div>
      <div class="mini-widgets">
        <div class="mini-nav hide-on-desktop hide-on-first-switch hide-on-second-switch list-type-menu display-none">
          <ul id="top-menu">
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2253 first"><a
                href="http://santafe-associates.com/" data-level="1"><span class="menu-item-text"><span
                    class="menu-text">santafe-associates.com</span></span></a></li>
          </ul>
          <div class="menu-select"><span class="customSelect1" style="visibility: visible;"><span
                class="customSelectInner">Top Bar Link</span></span></div>
        </div>
      </div>
    </div>
    <nav class="navigation">
      <ul id="primary-menu" class="main-nav underline-decoration upwards-line level-arrows-on" role="menu">
        <li
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1601 first has-children act">
          <a href="#1594" data-level="1"><span class="menu-item-text"><span class="menu-text">About
                Samdo</span></span></a><i class="next-level-button"></i>
          <ul class="sub-nav level-arrows-on">
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2247 first"><a href="#1594"
                data-level="2"><span class="menu-item-text"><span class="menu-text">인사말</span></span></a></li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2391"><a href="#2375"
                data-level="2"><span class="menu-item-text"><span class="menu-text">법인소개</span></span></a></li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2390"><a href="#2377"
                data-level="2"><span class="menu-item-text"><span class="menu-text">Samdo’s
                    Way</span></span></a></li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2389"><a href="#2379"
                data-level="2"><span class="menu-item-text"><span class="menu-text">구성원 소개</span></span></a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2388"><a href="#2381"
                data-level="2"><span class="menu-item-text"><span class="menu-text">SFAI
                    Network</span></span></a></li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2124"><a href="#2122"
                data-level="2"><span class="menu-item-text"><span class="menu-text">윤리경영</span></span></a></li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3293"><a href="#3289"
                data-level="2"><span class="menu-item-text"><span class="menu-text">투명성 보고서</span></span></a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2387"><a href="#2385"
                data-level="2"><span class="menu-item-text"><span class="menu-text">Contact Us</span></span></a>
            </li>
          </ul>
        </li>
        <li
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1601 first has-children act">
          <a href="#7" data-level="1"><span class="menu-item-text"><span class="menu-text">Our
                Services</span></span></a><i class="next-level-button"></i>
          <ul class="sub-nav level-arrows-on">
            <li
              class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-408 current_page_item menu-item-1604 act first">
              <nuxt-link to="/service" data-level="2"><span class="menu-item-text"><span class="menu-text">감사 및
                    회계자문</span></span></nuxt-link></li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1766"><a href="#1752"
                data-level="2"><span class="menu-item-text"><span class="menu-text">세무 서비스</span></span></a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1765"><a href="#1754"
                data-level="2"><span class="menu-item-text"><span class="menu-text">컨설팅 서비스</span></span></a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1764"><a href="#1756"
                data-level="2"><span class="menu-item-text"><span class="menu-text">아웃소싱 서비스</span></span></a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1763"><a href="#1758"
                data-level="2"><span class="menu-item-text"><span class="menu-text">기업금융 서비스</span></span></a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1762"><a href="#1760"
                data-level="2"><span class="menu-item-text"><span class="menu-text">리스크 관리 서비스</span></span></a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2394"><a href="#2392"
                data-level="2"><span class="menu-item-text"><span class="menu-text">해외 진출입 서비스</span></span></a>
            </li>
          </ul>
        </li>
        <li
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2681 has-children">
          <a href="#2397" data-level="1"><span class="menu-item-text"><span
                class="menu-text">Professionals</span></span></a><i class="next-level-button"></i>
          <ul class="sub-nav level-arrows-on">
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2408 first"><a href="#2397"
                data-level="2"><span class="menu-item-text"><span class="menu-text">Our
                    Strength</span></span></a></li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2407"><a href="#2399"
                data-level="2"><span class="menu-item-text"><span class="menu-text">Our
                    Credential</span></span></a></li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2406"><a href="#2401"
                data-level="2"><span class="menu-item-text"><span class="menu-text">One Stop
                    Service</span></span></a></li>
          </ul>
        </li>
        <li
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2779 has-children">
          <a href="#2411" data-level="1"><span class="menu-item-text"><span class="menu-text">Board</span></span></a><i
            class="next-level-button"></i>
          <ul class="sub-nav level-arrows-on">
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2780 first"><a href="#2411"
                data-level="2"><span class="menu-item-text"><span class="menu-text">News</span></span></a></li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3236"><a href="#3234"
                data-level="2"><span class="menu-item-text"><span class="menu-text">Article</span></span></a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2418"><a href="#2413"
                data-level="2"><span class="menu-item-text"><span class="menu-text">자주 묻는
                    질문(FAQ)</span></span></a></li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2417"><a href="#2415"
                data-level="2"><span class="menu-item-text"><span class="menu-text">인재채용</span></span></a></li>
          </ul>
        </li>
        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2421"><a href="#2403"
            data-level="1"><span class="menu-item-text"><span class="menu-text">Link</span></span></a></li>
      </ul>
    </nav>
  </header>
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
    mounted() {
        $(document).ready(function() {
        })
    },
    methods: {}
  }

</script>
<style scoped>
    ul#primary-menu li:hover > ul.sub-nav {
        left: 0px;
        visibility: visible;
        opacity: 1;
    }

</style>
