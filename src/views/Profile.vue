<template>
  <div>
    <Navbar/>
    <h1>Profile</h1>


    <label>Name</label>
    <input v-model="name" type="text" placeholder="Name">

    <label>Email</label>
    <input v-model="email" type="email" placeholder="Email">

    <button v-on:click="registerUser">Register user</button>

    <h1>Profile Logged in</h1>¨

  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  data() { return {
    name: '',
    email: ''
  }},
  methods: {
    registerUser() {
      if (this.name != '' && this.email != '') {
        this.$store.dispatch('registerUser', {name: this.name, email: this.email})
      }
    }
  },
  components: {Navbar}
}
</script>

<style scoped>
</style>