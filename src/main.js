import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created() {
    this.$store.dispatch('fetchPosts')
    // this.$store.dispatch('registerUser', {name:"skurt", email: "skurt@yahoo"})
    // this.$store.dispatch('login', {name:"skurt", email: "skurt@yahoo"})
  },
  render: h => h(App)
}).$mount('#app')
