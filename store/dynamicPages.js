export const state = () => ({
  current: {
    pagina: null,
    navMenuNivel0: null
  },
  paginas: [],
  navegacao: []
})

export const mutations = {
  SET_CURRENT_PAGINA (state, payload) {
    state.current = payload
  },
  ADD_PAGINA (state, pagina) {
    state.paginas.push(pagina)
  }
}

export const getters = {
  current: state => state.current
}
