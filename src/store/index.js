import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/mock.js'

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
    getMenu: (state) => state.menu,
  },
  mutations: {
    setMenu: (state, menuAPI) => state.menu = menuAPI.menu,
    setUser: (state, user) => {
      state.userName = user.name
      state.userEmail = user.email
    }
  },
  actions: {
    fetchPosts: async ({ commit }) => {
      await API.fetchProducts().then(data => commit('setMenu', data))
    }, // Up and running
    registerUser: async ({ commit }, userData) => {
      API.registerUser(userData.name, userData.email)
      commit('setUser', userData)
    },
    login: ({ commit }, loginData) => { 
      let login = API.login(loginData.name, loginData.email)

      if (login == true) {
        commit('setUser', loginData)
      } else {
        console.log('Failed to login')
      }
    },
    makeOrder: async (commit, orderData) => {
      API.makeOrder(orderData.id, orderData.items)
    },
    fetchHistory: async (commit, userId) => {
      API.fetchOrderHistory(userId)
    }
  }
})