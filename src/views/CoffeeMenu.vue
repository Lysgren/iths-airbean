<template>
  <div class="wrapper">
    <Navbar/>
    <div class="menu-wrapper">
      <h1>Meny</h1>
       <CoffeeMenuItem :menuItem="item" v-for="item in menu" :key="item.id"/>
    </div>
    
  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CoffeeMenuItem from '@/components/CoffeeMenuItem.vue'
export default {
  components: {Navbar, CoffeeMenuItem},
  computed: {
    menu(){
      return this.$store.getters.getMenu
    }
  }
}
</script>

<style scoped>

.wrapper{
  background-color: #F3E4E1;
  color: #2F2926;
}

.menu-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>