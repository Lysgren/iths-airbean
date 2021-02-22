<template>
  <div class="wrapper">
    <Navbar/>
<div class="profile-wrapper">
    <div v-if="loggedIn == false">
      <ProfileLogin/>
    </div>

    <div v-if="loggedIn == true">
      <ProfileLoggedIn/>
    </div>

    <h1>Profile</h1>

    </div>
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

.wrapper{
  background-color: #2F2926;
   background-image: url(~@/assets/graphics-header.svg);
  background-position: top;
  background-repeat: no-repeat;
  color:white;

}

.profile-wrapper{
  height: 100vh;


}

</style>