<template>
  <div class="wrapper">
    <Navbar/>
    
      <h1>Meny</h1>
       <CoffeeMenuItem :menuItem="item" v-for="item in menu" :key="item.id"/>
    
    
  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CoffeeMenuItem from '@/components/CoffeeMenuItem.vue'
export default {
  components: { Navbar, CoffeeMenuItem},
  computed: {
    menu(){
      return this.$store.getters.getMenu
    }
  }
}
</script>

<style scoped>

*{
  margin: 0;
  box-sizing: border-box;
}

.wrapper{
  background-color: #F3E4E1;
  color: #2F2926;
}


</style>