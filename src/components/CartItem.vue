<template>
  <div class="cart-item">
    <span>
      <p class="larger-font">{{ item.title }}</p>
      <hr />
      <p>{{ item.price * item.amount }} kr</p>
    </span>
    <span class="amount">
      <img
        class="event"
        @click="changeAmount(item, 'inc')"
        src="@/assets/arrow-up.svg"
        alt="arrow up"
      />

      <p>{{ item.amount }}</p>

      <img
        v-if="displayDec"
        class="event"
        @click="changeAmount(item, 'dec')"
        src="@/assets/arrow-down.svg"
        alt="arrow down"
      />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },

  data() {
    return {
      displayDec: true,
    };
  },

  methods: {
    changeAmount(item, option) {
      
      let payload = {item, option}
      this.$store.commit("changeAmount", payload);
      
            
            if (item.amount == 0) {
              this.displayDec = false;
            } else if (item.amount > 0) {
              this.displayDec = true;
            }
    },
  },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.cart-item p {
  margin: 0;
  padding: 2px;
}

.event {
  cursor: pointer;
}

.larger-font {
  font-size: 1.6rem;
  font-weight: bold;
  display: inline-block;
}

.amount {
  font-weight: bold;
  display: flex;
  flex-direction: column;
}

hr {
  display: inline-block;
  width: 60px;
  margin: 0;
  border: 0;
  border-top: 1px dotted black;
}
</style>