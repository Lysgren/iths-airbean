import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/mock.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [],
    userName: 'Anon',
    userEmail: null,
    orderHistory: [],
    cart: [
      {id: 1,
        title: "svart kaffe",
        price:40,
        amount: 2,

      },

      {id: 2,
        title: "kaffe",
        price: 45,
        amount: 3,

      },

      {id: 6,
        title: "kaffe latte",
        price:60,
        amount: 1,

      },


    ],
    // övrig kund info i localstorage inloggad user
  },
  getters: {
    getMenu: state => state.menu,
    getCart: state => state.cart,
    getName: state => state.userName,
    getEmail: state => state.userEmail
  },
  mutations: {
    setMenu: (state, menuAPI) => state.menu = menuAPI.menu,
    setUser: (state, user) => {
      state.userName = user.name
      state.userEmail = user.email
    },
    addItem: (state, change) => state.cart.push(change)
  },
  actions: {
    fetchPosts: async ({ commit }) => {
      // Up and running
      await API.fetchProducts().then(data => commit('setMenu', data))
    },
    registerUser: async ({ commit }, userData) => {
      // Up and running
      const registration = await API.registerUser(userData.name, userData.email)
      if (registration == false) {
        // Temporary, need refinement
        console.log('Email already registered...')
      } else {
        commit('setUser', userData)
      }
    },
    login: ({ commit }, loginData) => { 
      let login = API.login(loginData.name, loginData.email)
      login = true // komma runt,
      if (login == true) {
        commit('setUser', loginData)
      } else {
        console.log('Failed to login')
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