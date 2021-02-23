<template>
  <div id="app">

    <router-view/>
    
  </div>
</template>
<script>
export default {
  created(){
    this.$store.commit('resetActiveUser')
  }
}
</script>
<style lang="scss">
body{
  margin: 0;
  box-sizing: border-box;
  height: 100vh;
}
</style>
