<template>
<div class="page-container">
  <img src="@/assets/close.svg" alt="close" class="navigation" @click="goBack">
  


  <nav>
      
      <router-link class="navigation" to="/coffeemenu">Meny</router-link><hr>
      <router-link class="navigation" to="/about">Vårt kaffe</router-link><hr>
      <router-link class="navigation" to="/profile">Min profil</router-link><hr>
      <router-link v-if="checkCurrentOrder" class="navigation" to="/orderstatus">Orderstatus</router-link>


    </nav>
   
    </div>
</template>

<script>
export default {
  methods:{
    goBack(){
      this.$router.go(-1)
    },
    
  },
  computed: {
    checkCurrentOrder() {
      if(this.$store.state.currentOrder.length != []) {
        return true
        } else {
          return false
        }
    }
  }

}
</script>

<style scoped>

.page-container{
  
  background-color: #2F2926;
  height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  
  
}
nav{

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:8em;

 
}
.navigation{
  color:white;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  padding: 0.2em;
  
}

hr{
  width: 3em;
  border-top: 0;
  border-color: grey;
}

img{
  width: 0.9em;
  background-color: white;
  padding: 0.5em;
  border-radius: 50%;
  margin: 0.5em;
  align-self: flex-start;
}
</style>