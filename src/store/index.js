import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/mock.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [],
    activeUser: window.localStorage.getItem('activeUser'),
    orderHistory: [],
    cart: []
    // övrig kund info i localstorage inloggad user
  },
  getters: {
    getMenu: state => state.menu,
    getCart: state => state.cart,
    getActiveUser: state => state.activeUser
  },
  mutations: {
    setMenu: (state, menuAPI) => state.menu = menuAPI.menu,
    loginUser: (state, user) => {
      window.localStorage.setItem('activeUser', JSON.stringify(user))
      state.activeUser = user
    },
    addItem: (state, change) => state.cart.push(change)
  },
  actions: {
    fetchPosts: async ({ commit }) => {
      await API.fetchProducts().then(data => commit('setMenu', data))
    },
    registerUser: async ({ commit }, userData) => {
      const registration = await API.registerUser(userData.name, userData.email)
      if (registration == false) {
        console.log('Failed to register (email already registered)')
      } else {
        commit('loginUser', registration)
      }
    },
    login: async ({ commit }, loginData) => {
      const login = await API.login(loginData)
      if (login == false) {
        console.log('Failed to login (user not found)')
      } else {
        commit('loginUser', login)
      }
    },
    addItem: (commit, item) => commit('addItem', item),
    makeOrder: async (commit, orderData) => {
      API.makeOrder(orderData.id, orderData.items)
    },
    fetchHistory: async (commit, userId) => {
      API.fetchOrderHistory(userId)
    }
  }
})