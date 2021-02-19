<template>
  <div class="page">
    
      <p>Ordernummer {{order}}</p>
      <div>
        <img src="@/assets/drone.svg" alt="">
      </div>
      <h1>Din beställning är på väg!</h1>
      <p> {{timeLeft}} minuter</p>
      <button v-on:click="clicked">Ok, cool!</button>
    
    
  </div>
  
</template>

<script>

export default {
  data(){return{
    timeLeft: 3,
    order: "#125767868"
  }},
  methods: {
    timer: function () {
      setInterval(() => {
        (this.timeLeft == 0) ? clearInterval(this.timer) : (this.timeLeft = this.timeLeft - 1) 
      }, 60000);
    },
    clicked(){
      this.$router.push('/coffeemenu')
    }
  },
  mounted(){
    this.timer()
  }
}
</script>

<style scoped>

* {
  margin: 0;
  
}

.page{
  background-color: #E5674E;
  color: white;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1em 1em;
}

button {
  width: 200px;
  height: 50px;
  border-radius: 2em;
  border: none;
  background-color: white;
  color: black;
  font-size: 1.2em;
  font-weight: 700;
  cursor: pointer;
}

</style>