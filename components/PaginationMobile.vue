<template>
  <nav aria-label="Page navigation example" :id="`pagination_${_uid}`">
    <ul class="pagination justify-content-end ">
      <li class="page-item" v-show="currentPage !== 1">
        <a class="page-link" @click="gotoPrevPage(currentPage)">{{ $t('Prev') }}</a>
      </li>
      <li class="page-item" v-for="page in listPages" :class="currentPage === page ? 'active' : ''">
        <a class="page-link" @click="gotoPage(page)">{{page}}</a>
      </li>
      <li class="page-item" v-show="currentPage !== totalPages">
        <a class="page-link" @click="gotoNextPage(currentPage)">{{ $t('Next') }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    totalPages: Number,
    currentPage: Number,
    showNumberPages: {
      type: Number,
      default: 7
    }
  },
  data () {
    return {
      startPage: null,
      endPage: null,
      listPages: [],
      paramQuery: 'page'
    }
  },
  computed: {

  },
  mounted () {
    if (!this.totalPages) {
      return
    }
    if (!this.currentPage) {
      this.currentPage = 1
    }
    this.currentLink = window.location.href
    this.generateStartAndEndPage()
  },
  methods: {
    generateStartAndEndPage() {
      let startPage = this.currentPage - (Math.floor(this.showNumberPages/2))
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
      this.currentPage = page
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

    gotoNextPage(currentPage) {
      let nextPage = parseInt(currentPage) +1
      if (nextPage > this.totalPages) {
        nextPage = this.totalPages
      }
      this.gotoPage(nextPage)
    },

    gotoPrevPage(currentPage) {
      let prevPage = parseInt(currentPage) -1
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
