export const state = () => ({
  env: [],
  content: [],
  post: [],
  list: [],
  menu: [],
  domain: process.env.BASE_DOMAIN,
  categories: []
})

export const mutations = {
  SET_COMMON_DATA(state, data) {
    state.env = data.env
    state.content = data.content
    state.post = data.post
    state.list = data.list
    state.menu = data.menu
  },
  SET_CATEGORIES(state, data) {
    state.categories = data
  }
}

export const actions = {
  async getCommonData({ commit }) {
    const res = await this.$axios.$get('common/data', { params: { active: 1 } })
    if (res.data) {
      commit('SET_COMMON_DATA', res.data)
    }
  },
  async getCategories({ commit }) {
    const res = await this.$axios.$get('category')
    if (res.data) {
      commit('SET_CATEGORIES', res.data)
    }
  }
}
