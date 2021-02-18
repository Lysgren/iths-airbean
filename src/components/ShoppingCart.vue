<<<<<<< HEAD
<template>
  <div>
    <div class="shopping-cart">
      <h1>Din beställning</h1>
      <CartItem v-for="item in cartItems" :key="item.id" v-bind:item="item" />
      <span>
        <p>Totalt: {{ totalPrice }} kr</p>
        <p>Inklusive moms + drönarleverans</p>
      </span>

      <button @click="submitOrder">take my money</button>
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
      this.$store.state.cart.forEach((coffee) => prices.push(coffee.price));

     total = prices.reduce((newValue, current) => newValue + current)
      return total
    },
  },

  methods: {
    submitOrder() {
      console.log("place order");
      //this.$store.actions.makeOrder
    },
  },
};
</script>

<style scoped>
.shopping-cart {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 200px;
  height: fit-content;
  background-color: white;
  border: 2px solid black;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
}
=======
<template>
<div>
    <div class="shopping-cart">
    <h1>Shopping Cart</h1>
    <CartItem/>
    </div>
</div>

</template>

<script>
import CartItem from '@/components/CartItem.vue'
export default {
    components: {CartItem}
}
</script>

<style scoped>



.shopping-cart {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 200px;
  height: 350px;
  background-color: white;
  border: 2px solid black;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
}
>>>>>>> register
</style>