<<<<<<< HEAD
<template>
  <div class="home" @click="enter">
    <img src="@/assets/airbean-landing.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Home',
  
  methods:{

    enter(){

      this.$router.push('/coffeemenu')
    }
  }
}
</script>

<style scoped>
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('~@/assets/intro-graphic-left.svg'), url('~@/assets/intro-graphic-right.svg');
  background-position: left top, right top;
  background-repeat: no-repeat, no-repeat;
  background-color: #0E927D;
  height: 100vh;
}
</style>
=======
<template>
  <div class="home" @click="enter">
    <h1>Air bean delivered coffee</h1>
 
    



  </div>
</template>

<script>
export default {
  name: 'Home',

  methods:{

    enter(){

      this.$router.push('/coffeemenu')
    }
  }
}
</script>

<style scoped>
.home{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
  height: 100vh;
}
</style>
>>>>>>> fc99f8e3c888748bae6c133ec1f1d8155b803282
