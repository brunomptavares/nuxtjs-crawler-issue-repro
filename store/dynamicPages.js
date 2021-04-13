export const state = () => ({
  current: {
    _id: null,
    navMenuNivel0: null
  }
})

export const mutations = {
  setCurrentPage (state, payload) {
    state.current = payload
  }
}

export const getters = {
  current: state => state.current
}
