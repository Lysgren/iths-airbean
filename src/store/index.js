import Vue from "vue";
import Vuex from "vuex";
import * as API from "@/api/mock.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: [],
    activeUser: window.localStorage.getItem("activeUser"),
    currentOrder: [],
    cart: [],
    orderHistory: [],
  },
  getters: {
    getMenu: (state) => state.menu,
    getCart: (state) => state.cart,
    getActiveUser: (state) => state.activeUser,
    getCurrentOrder: (state) => state.currentOrder,
  },
  mutations: {
    setMenu: (state, menuAPI) => (state.menu = menuAPI.menu),
    loginUser: (state, user) => {
      window.localStorage.setItem("activeUser", JSON.stringify(user));
      state.activeUser = user;
    },
    addItem: (state, item) => {
      const find = state.cart.findIndex((element) => {
        if (element.id == item.id) {
          return true;
        }
      });

      find != -1 ? state.cart[find].amount++ : state.cart.push(item);
    },

    changeAmount(state, payload) {
      let item = payload.item;
      let option = payload.option;

      if (option == "inc") {
        item.amount += 1;
      } else if (option == "dec") {
        item.amount -= 1;
      }
    },

    setOrder(state, order) {
      state.currentOrder = order;
      state.cart = [];
    },

    userOrders(state, orders) {
      state.orderHistory = orders;
    },

    resetActiveUser(state) {
      window.localStorage.removeItem("activeUser");
      state.activeUser = null;
    },
  },
  actions: {
    fetchPosts: async ({ commit }) => {
      await API.fetchProducts().then((data) => commit("setMenu", data));
    },
    registerUser: async ({ commit }, userData) => {
      const registration = await API.registerUser(
        userData.name,
        userData.email
      );
      if (registration == false) {
        console.log("Failed to register (email already registered)");
      } else {
        commit("loginUser", registration);
      }
    },
    login: async ({ commit }, loginData) => {
      const login = await API.login(loginData);
      if (login == false) {
        console.log("Failed to login (user not found)");
      } else {
        commit("loginUser", login);
      }
    },

    makeOrder: async ({ commit, getters }, order) => {
      commit("setOrder", order);

      if (getters.getActiveUser != null) {
        let updatedUser = await API.makeOrder(order, getters.getActiveUser);
        console.log("inloggad");
        return updatedUser;
      } else {
        console.log("inte inloggad");
      }
    },

    fetchHistory: async ({ commit, state }) => {
      let orders = await API.fetchOrderHistory(state.activeUser);
      commit("userOrders", orders);
    },
  },
});
