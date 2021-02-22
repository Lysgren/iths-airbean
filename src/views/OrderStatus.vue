<template>
  <div class="page">
    <p>Ordernummer {{ order }}</p>
    <div>
      <img src="@/assets/drone.svg" alt="" />
    </div>
    <h1>Din beställning är på väg!</h1>

    <p>{{ countDown }} minuter</p>

    <button v-on:click="clicked">Ok, cool!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countDown: 0,
    };
  },
  methods: {
    timer: function () {
      setInterval(() => {
        this.countDown == 0
          ? clearInterval(this.countDown)
          : (this.countDown = this.countDown - 1);
      }, 60000);
    },
    clicked() {
      this.$router.push("/coffeemenu");
    },
  },
  created() {
    this.countDown = this.timeLeft;

    this.timer();
  },
  computed: {
    order() {
      return this.$store.getters.getCurrentOrder.orderId;
    },

    timeLeft() {
      return this.$store.getters.getCurrentOrder.orderETA;

      // let dataBase = JSON.parse(window.localStorage.getItem("dataBase"));

      // let activeUser = this.$store.getters.getActiveUser;

      // let userId = activeUser.id;

      // let user = dataBase.find((user) => user.id == userId);

      // let orders = user.orderHistory;

      // let lastOrder = orders.length - 1;

      // let eta = orders[lastOrder].orderETA;

      // return eta;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
}

.page {
  background-color: #e5674e;
  color: white;
  height: 100vh;
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

h1 {
  text-align: center;
}
</style>