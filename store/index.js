export const state = () => ({
})

export const mutations = {
  setState(state, obj) {
    state[obj.state] = obj.data
  }
}
