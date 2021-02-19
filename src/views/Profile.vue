<template>
  <div>
    <Navbar/>

    <div v-if="loggedIn == false">
      <ProfileLogin/>
    </div>

    <div v-if="loggedIn == true">
      <ProfileLoggedIn/>
    </div>

    <h1>Profile</h1>
  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ProfileLogin from '@/components/ProfileLogIn.vue'
import ProfileLoggedIn from '@/components/ProfileLoggedIn.vue'

export default {
  computed: {
    loggedIn() {
      return this.$store.getters.getActiveUser == null ? false : true
    }
  },
  components: { Navbar, ProfileLogin, ProfileLoggedIn }
}
</script>

<style scoped>
</style>