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
   background-image: url(~@/assets/graphics-header.svg);
  background-position: top;
  background-repeat: no-repeat;
}

.menu-wrapper{
   background-image: url(~@/assets/graphics-footer.svg);
  background-position: bottom;
  background-repeat: no-repeat;
  height: 100vh;
}

h1{
  text-align: center;
}
</style>