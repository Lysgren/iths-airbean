<template>
<div class="wrapper">
    
    <div class="links">
        <div class="nav">
            <div>
                <router-link to="/navigation">
                <img src="@/assets/navicon.svg" class="icon">
                </router-link> 
            </div>
           
        </div>
        
        <div :class="checkEmptyCart" class="on-top">
            <span class="itemsnr" v-if="incart > 0">{{incart}}</span>
            <img src="@/assets/bag.svg" class="icon" @click="toggleCart">
        </div>
    </div>
    <Shopping-cart v-if="active"/>
</div>
</template>

<script>
import ShoppingCart from '@/components/ShoppingCart.vue'
export default {
    components: {ShoppingCart},
    data(){return{
        active: false
    }},
    methods: {
        toggleCart(){
            if(!this.active){
                this.active = true
            } else {
                this.active = false
            }
        }
    },
    computed: {
        incart(){
            let tot = 0
            this.$store.state.cart.forEach(coffee => {
                tot += coffee.amount               
            });
            return tot
        },
        checkEmptyCart(){
            if(this.incart > 0) {
                return "cart"
            } else {
                return "cart-hidden"
            }
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
    background-color: cadetblue;
    padding: 2em;
}

.links{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.icon {
    cursor: pointer;
    margin: 0;
    padding: 0;
    

}

.on-top{
    z-index: 1;
}

.nav {
    background-color: white;
    height: 2em;
    width: 2em;
    padding: 0.7em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cart{
    background-color: black;
    height: 2em;
    width: 2em;
    padding: 0.7em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.itemsnr{
    background-color: #E5674E;
    color: white;
    padding: 5px 10px;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    right: 25px;
}

.cart-hidden{
    visibility: hidden;
}

</style>