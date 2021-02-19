<template>
  <div>
    <div class="shopping-cart">
      <h1>Din beställning</h1>
      <CartItem v-for="item in cartItems" :key="item.id" v-bind:item="item" />
      
      <div class="summary"> 
        <span class="total"><p>Total</p><p>{{ totalPrice }} kr</p></span>
        <p>Inklusive moms + drönarleverans</p>
        
      </div>

      <button @click="submitOrder">Take my money!</button>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
export default {
  components: { CartItem },

  computed: {
    cartItems() {
      return this.$store.getters.getCart;
    },

    // totalPrice() {
    //   return this.$store.getters.totalPrice
    // },

    //flytta till getters i store

    totalPrice() {
      let prices = [];
      let total = 0;
      this.$store.state.cart.forEach((coffee) => prices.push(coffee.price * coffee.amount));

      total = prices.reduce((newValue, current) => newValue + current);
      return total;
    },
  },

  methods: {
    // submitOrder() {
    //   this.$store.mutations.makeOrder
    // },
    //flytta till mutations i store och commita via method ovan
    submitOrder() {

      let order = this.$store.state.cart.filter(item => item.amount >0)
      //push order till databasen
      console.log(order);
    },
  
  },
};
</script>

<style scoped>
.shopping-cart {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 85%;
  height: fit-content;
  background-color: white;
  border-radius: 4px;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  padding: 16px;
}
button{
  border-radius: 20px;
  width: fit-content;
  border: none;
  background-color: #2F2926;
  padding: 12px;
  color: white;
  align-self: center;

}


.total{
  font-weight: bold;
  font-size: 1.8rem;
  display: flex;
  justify-content: space-between;
}



</style>