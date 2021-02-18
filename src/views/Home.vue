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
