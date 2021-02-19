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
  align-items: center;
  justify-content: center;
  background-color: #0E927D;
  background-image: url(~@/assets/intro-graphic-left.svg), url(~@/assets/intro-graphic-right.svg);
  background-position: top left, top right;
  background-repeat: no-repeat, no-repeat;
  height: 100vh;
}
</style>
