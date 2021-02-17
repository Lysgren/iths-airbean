import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/mock.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [],
    userName: 'Anon',
    userEmail: null


    // övrig kund info i localstorage inloggad user
  },
  getters: {
    getMenu: (state) => state.menu,
  },
  mutations: {
    setMenu: (state, menuAPI) => state.menu = menuAPI,
    setUser: (state, user) => {
      state.userName = user.name
      state.userEmail = user.email
    }
  },
  actions: {
    fetchPosts: async commit => {
      await API.fetchProducts().then(data => commit('setMenu', data))
    },
    registerUser: async (commit, userData) => {
      API.registerUser(userData.name, userData.email)
      commit('setUser', userData)
    },
    makeOrder: async (commit, orderData) => {
      API.makeOrder(orderData.id, orderData.items)
    },
    fetchHistory: async (commit, userId) => {
      API.fetchOrderHistory(userId)
    }
  }
})