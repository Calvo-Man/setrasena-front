import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
export default createStore({
  state: {
    user: null,
    isAuthenticated: false,
  },
  getters: {
    getUser: state => state.user,
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false
    },
  },
  actions: {
    login({ commit }) {
      commit('login')
      commit('cambiar')
    },
    logout({ commit }) {
      commit('logout')
      commit('reset')
    },
  },
  plugins: [createPersistedState()],
})