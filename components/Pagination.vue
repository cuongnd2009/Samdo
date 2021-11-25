<template>
  <nav aria-label="Page navigation example" :id="`pagination_${_uid}`">
    <ul class="pagination justify-content-end">
      <li class="page-item" v-show="parseInt(current) !== 1">
        <a class="page-link" @click="gotoPrevPage(current)">{{ $t('Prev') }}</a>
      </li>
      <li class="page-item" v-show="!listPages.includes(1)">
        <a class="page-link" @click="gotoPage(1)">{{ $t('1') }}</a>
      </li>
      <li class="page-item a-disabled" v-show="!listPages.includes(1)">
        <a class="page-link a-disabled" disabled="disabled">{{ $t('...') }}</a>
      </li>
      <li class="page-item" v-for="page in listPages" :class="parseInt(current) === parseInt(page) ? 'active' : ''">
        <a class="page-link" @click="gotoPage(page)">{{page}}</a>
      </li>
      <li class="page-item a-disabled" v-show="!listPages.includes(lastPage)">
        <a class="page-link a-disabled" disabled="disabled">{{ $t('...') }}</a>
      </li>
      <li class="page-item" v-show="!listPages.includes(lastPage)">
        <a class="page-link" @click="gotoNextPage(lastPage)">{{ lastPage }}</a>
      </li>
      <li class="page-item" v-show="parseInt(current) !== parseInt(totalPages)">
        <a class="page-link" @click="gotoNextPage(current)">{{ $t('Next') }}</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    totalPages: Number,
    currentPage: {
      type: Number,
      default: 1
    },
    showNumberPages: {
      type: Number,
      default: 7
    },
    lastPage: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      startPage: null,
      endPage: null,
      listPages: [],
      paramQuery: 'page',
      current: 1
    }
  },
  watch:{
    $route (to, from){
      this.current = this.$route.query.page ?   this.$route.query.page : 1
      this.generateStartAndEndPage()
    }
  },
  mounted () {
    this.current = this.currentPage
    if (!this.totalPages) {
      return
    }
    if (!this.current) {
      this.current = 1
    }
    this.currentLink = window.location.href
    this.generateStartAndEndPage()
  },
  methods: {
    generateStartAndEndPage() {
      let startPage = this.current - (Math.floor(this.showNumberPages/2))
      this.startPage = startPage>1?startPage:1

      let endPage = this.startPage + this.showNumberPages - 1
      if (endPage < this.totalPages) {
        this.endPage = endPage
      } else {
        this.endPage = this.totalPages
      }
      if (this.endPage - this.showNumberPages + 1 >= 1 && this.endPage - this.showNumberPages + 1 < this.startPage) {
        this.startPage = this.endPage - this.showNumberPages + 1
      }
      if (this.endPage - this.showNumberPages <= 1) {
        this.startPage = 1
      }
      this.listPages = []
      for (let i=this.startPage; i<= this.endPage; i++) {
        this.listPages.push(i)
      }
    },

    gotoPage(page) {
      this.current = page
      this.generateStartAndEndPage()
      let currentQueries = new URL(window.location.href)
      if (page > 1) {
        currentQueries.searchParams.set(this.paramQuery, page)
      } else {
        currentQueries.searchParams.delete(this.paramQuery)
      }
      let pathName = currentQueries.pathname
      if (currentQueries.pathname.indexOf('/admin') === 0) {
        pathName = currentQueries.pathname.replace('/admin', '')
      }
      this.$router.push(pathName+currentQueries.search)
    },

    gotoNextPage(current) {
      let nextPage = parseInt(current) +1
      if (nextPage > this.totalPages) {
        nextPage = this.totalPages
      }
      this.gotoPage(nextPage)
    },

    gotoPrevPage(current) {
      let prevPage = parseInt(current) -1
      if (prevPage < 1) {
        prevPage = 1
      }
      this.gotoPage(prevPage)
    }
  }
}
</script>
<style scoped>
.page-item .page-link {
  cursor: pointer;
}
.a-disabled {
  background: #d2def3;
  cursor: not-allowed;
}
.a-disabled:hover {
  background: #d2def3 !important;
  cursor: not-allowed;
}
</style>
