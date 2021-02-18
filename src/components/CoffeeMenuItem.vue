<template>
<div>
    <div class="wrapper-card">
        <div class="icon" v-on:click="addToCart">
            <img src="@/assets/add.svg" alt="add" class="addIcon">
        </div>
        <div class="card-info">
            <div class="heading" v-on:click="toggleInfo">
                <h2 >{{menuItem.title}}</h2>
                <h2>{{menuItem.price}}</h2>  
            </div>
            <h4>{{menuItem.desc}}</h4>
        </div>
    </div>
    <CoffeeInfo v-if="active" :coffee="menuItem.details" v-on:clicked="toggleInfo"/>
</div>
</template>

<script>
import CoffeeInfo from './CoffeeInfo.vue'
export default {
    props: {
    menuItem: Object
  },
  components: {CoffeeInfo},
  data(){return{
      active: false
  }},
  methods: {
      toggleInfo(){
          if(!this.active){
              this.active = true
          } else{this.active = false}
      },
      addToCart(){
          this.$store.commit("addItem",this.menuItem)
      }
  }
}
</script>

<style scoped>

*{
    margin: 0;
}

.wrapper-card{
    justify-content: center;
    display: flex;
    flex-direction: row;
    padding: 1em;
}

.card-info{
    display: flex;
    flex-direction: column;
}

.heading{
    width: 20em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
}

.icon{
    background-color: black;
    padding: 10px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2em;
    cursor: pointer;
}
.addIcon{
    height: 15px;
    width: auto;
}


</style>