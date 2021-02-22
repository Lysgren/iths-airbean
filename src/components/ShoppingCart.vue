<template>
  <div>
    <div class="shopping-cart">
      <h1>Din beställning</h1>
      <CartItem v-for="item in cartItems" :key="item.id" v-bind:item="item" />

      <div class="summary">
        <span class="total"
          ><p>Total</p>
          <p>{{ totalPrice }} kr</p></span
        >
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

    totalPrice() {
      let prices = [];
      let total = 0;
      this.$store.state.cart.forEach((coffee) =>
        prices.push(coffee.price * coffee.amount)
      );

      total = prices.reduce((newValue, current) => newValue + current);
      return total;
    },
  },
  methods: {
    submitOrder() {
      let order = this.$store.state.cart.filter((item) => item.amount > 0);
      let id = Date.now().toString();
      let date = new Date().toString();
      let sum = this.totalPrice;
      let fullOrder = {
        orderId: id,
        orderDate: date,
        orderContent: order,
        orderTotal: sum,
      };

      this.$store.dispatch("makeOrder", fullOrder);
      this.$router.push("/orderstatus");
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
  border-radius: 0.2em;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.8em;
  padding: 0.8em;
  color: #2f2926;
  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.733);
}

.summary{
  margin-top: 4em;
}

button {
  width: 200px;
  height: 50px;
  border-radius: 2em;
  border: none;
   background-color: #2f2926;
  color: white;
  font-size: 1.2em;
  font-weight: 700;
  cursor: pointer;
  align-self: center;
  margin: 1rem;
}

.total {
  font-weight: bold;
  font-size: 1.8rem;
  display: flex;
  justify-content: space-between;
  
}

p{
  margin: 0.2rem;
  
}
</style>