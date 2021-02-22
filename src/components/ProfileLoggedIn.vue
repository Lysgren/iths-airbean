<template>
<div class="wrapper">
    <div class="user">
        <img src="@/assets/profile.png" alt="">
        <h2 class="name">User Username</h2>
        <p class="email">sixten@coffeelover.com</p> 
    </div>
    <div class="orders">
        <h2>Orderhistorik</h2>
        <Orders :order="order" :orderContent="order.orderContent" v-for="order in orderHistory" :key="order.orderId"/>
        <hr>
        <div class="tot">
            <p>Totalt spenderat</p>
            <p>{{orderTot}} kr</p>
        </div> 
    </div>
    
</div>
</template>

<script>
import Orders from '@/components/Orders.vue'

export default {
    components: {Orders},
    data(){return{
        orderHistory: [
            {
                orderContent: [{amount: 3, title: "Bryggkaffe", id: 1, price: 39}, {amount: 2, title: "Bryggkaffe XL", id: 4, price: 45}],
                orderDate: "Mon Feb 22 2021 10:19:17 GMT+0100 (centraleuropeisk normaltid)",
                orderId: "1613985557875",
                orderTotal: 117
            },
            {
                orderContent: [{amount: 2, title: "Bryggkaffe delux", id: 2, price: 50}],
                orderDate: "Mon Feb 22 2021 10:19:17 GMT+0100 (centraleuropeisk normaltid)",
                orderId: "233485557875",
                orderTotal: 150
            }
        ]
    }},
    computed: {
        orderTot(){
            let sum = 0
            this.orderHistory.forEach(order => {
                sum += order.orderTotal
            })
            return sum
        }
    }
}
</script>

<style scoped>

*{
    margin: 0;
}

.wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    
}

.user{
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3em;
}

img{
    height: 100px;
    widows: 100px;
}

.name{
    margin-top: 0.5em;
    margin-bottom: 0.3em;
}
.email{
  font-size: 14px;
  color: rgba(255, 255, 255, 0.788);
}

.tot{
    display: flex;
    justify-content: space-between;
    font-weight: 700;
}

.orders{
    padding: 2em;
}

</style>