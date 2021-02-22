<template>
<div class="page-container">
  <img src="@/assets/close.svg" alt="close" class="navigation" @click="goBack">
  


  <nav>
      
      <router-link class="navigation" to="/coffeemenu">Meny</router-link><hr>
      <router-link class="navigation" to="/about">Vårt kaffe</router-link><hr>
      <router-link class="navigation" to="/profile">Min profil</router-link><hr>
      <router-link class="navigation" to="/orderstatus">Orderstatus</router-link>


    </nav>
   
    </div>
</template>

<script>
export default {

  methods:{

    goBack(){
this.$router.go(-1)

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
  margin-top:128px;

 
}
.navigation{
  color:white;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  padding: 8px;
  
}

hr{
  width: 64px;
  border-top: 0;
  border-color: grey;
}

img{
  width: 32px;
  background-color: white;
  padding: 16px;
  border-radius: 50%;
  margin: 16px;
  align-self: flex-start;
}
</style>