import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [],
    userName: 'Anon',
    userEmail: null,
    orderHistory: {}
    // övrig kund info i localstorage inloggad user
  },
  getters: {
    getMenu: state => state.menu
  },
  mutations: {
  },
  actions: {
  },
})