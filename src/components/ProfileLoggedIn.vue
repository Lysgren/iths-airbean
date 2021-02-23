<template>
  <div class="wrapperLoggedin">
    <div class="user">
      <img src="@/assets/profile.png" alt="" />
      <h2 class="name">{{ getUser.name }}</h2>
      <p class="email">{{ getUser.email }}</p>
    </div>
    <div class="orders">
      <h2>Orderhistorik</h2>
      <Orders
        :order="order"
        :orderContent="order.orderContent"
        v-for="order in orderHistory"
        :key="order.orderId"
      />
      <hr />
      <div class="tot">
        <p>Totalt spenderat</p>
        <p>{{ orderTot }} kr</p>
      </div>
      <p>{{ userOrderHistory }}</p>
    </div>
  </div>
</template>

<script>
import Orders from "@/components/Orders.vue";

export default {
  components: { Orders },

  computed: {
    orderHistory() {
      let data = JSON.parse(localStorage.getItem("dataBase"));
      return data[0].orderHistory;
    },
    getUser() {
      let data = JSON.parse(localStorage.getItem("dataBase"));
      return data[0];
    },
    orderTot() {
      let sum = 0;
      this.orderHistory.forEach((order) => {
        sum += order.orderTotal;
      });
      return sum;
    },
    userOrderHistory() {
      return this.$store.state.orderHistory;
    },
  },
  created() {
    this.$store.dispatch("fetchHistory");
  },
};
</script>

<style scoped>
* {
  margin: 0;
}

.wrapperLoggedin {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.user {
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3em;
}

img {
  height: 100px;
  widows: 100px;
}

.name {
  margin-top: 0.5em;
  margin-bottom: 0.3em;
}
.email {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.788);
}

.tot {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
}

.orders {
  padding: 2em;
}
</style>