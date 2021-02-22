<template>
<div class="wrapper">
  <div class="content">
  <p class="bold transparent1">{{order.orderId}}</p>
  <p class="transparent1">{{getDate}}</p>
  </div>
  
    <div class="content" v-for="content in orderContent" :key="content.id">
      <p class="transparent2 part">{{content.amount}} st. {{content.title}}</p>
      <p class="transparent2 part">{{content.price}} kr/st</p>
    </div>
  
  <div class="content tot">
  <p class="transparent2">total ordersumma</p>
  <p class="transparent2">{{order.orderTotal}} kr</p>
  </div>
  <hr class="line">
</div>

</template>

<script>
export default {
    props: {
      order: Object,
      orderContent: Array
    },
    computed: {
      getDate(){
        return this.order.orderDate.slice(2, 10).replaceAll("-", "/")
      }
    }
}
</script>

<style scoped>

*{
  margin: 0;
}

.wrapper{
  padding: 1em 0;
}

.bold{
  font-weight: 700;
}

.transparent1{
  font-size: 14px;
  color: rgba(255, 255, 255, 0.788);
}
.transparent2{
  color: rgba(255, 255, 255, 0.719);
  font-size: 12px;
}

.content{
  display: flex;
  justify-content: space-between;
}

.tot{
  margin-top: 0.4em;
}

.line{
  color: rgba(255, 255, 255, 0.788);
  color: blue;
}

</style>