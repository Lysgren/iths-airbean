<template>

<div class="cart-item">
<span>
<p>{{item.title}}</p>
<p>{{item.price}} kr</p>
</span>
<span>
<p class="event" @click="changeAmount('inc')">+</p>
<p>{{item.amount}}</p>
<p class="event" @click="changeAmount('dec')">-</p>

</span>


</div>

</template>

<script>
export default {

    props:{
        item: Object,
    },

    methods:{

        changeAmount(option){
console.log(option)
         //   this.$commit('changeAmount', option)
        },

//flytta till mutations i store
        // changeAmount(option){
        //     if (option == 'inc'){

        //         this.store.state.cart.amount +=1
        //     } else if( option == 'dec'){
        //         this.store.state.cart.amount -=1
        //     }
            
        // },
    }

    

}
</script>

<style scoped>

.cart-item{

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

}

.cart-item p{
    margin: 0;
    padding: 2px;
}

.event{
    cursor: pointer;
}
</style>