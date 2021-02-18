<template>
<div class="wrapper">
  <Navbar/>
  <div class="info-text">
    <h1>Vårt kaffe</h1>
    <p class="strong">
      Organic aftertaste variety cortado cultivar white cup medium flavour barista cinnamon. Milk coffee coffee coffee caffeine cappuccino filter so redeye. Robust grounds variety single origin arabica grinder body aroma decaffeinated extra. Dripper skinny, galão grounds est dripper black doppio beans.
    </p>
    <p>
      Chicory flavour, caramelization cultivar trifecta shop irish whipped. Id lungo, grounds skinny extra  single origin java. Sugar et ut, percolator, saucer single origin coffee café au lait roast. Java, froth, aged milk siphon cappuccino to go doppio cultivar.
      Robust, siphon pumpkin spice, plunger pot extra  irish cinnamon ut seasonal breve sweet. Cortado caffeine, decaffeinated robust rich coffee decaffeinated café au lait rich. Froth, aroma, white, frappuccino, organic dark to go decaffeinated half and half plunger pot. Mocha instant aroma a dark extraction fair trade that caramelization sit wings.
    </p>
    <p>Organic irish strong and barista trifecta body. Kopi-luwak affogato siphon at instant sugar breve. Sit a, barista ristretto beans and french press, whipped aged irish redeye frappuccino. Cinnamon caffeine, decaffeinated est, galão cream shop cinnamon café au lait.
    </p>
    
      <img src="@/assets/eva-cortado.jpg" alt="Grundare och VD">
      <h2>Eva Cortado</h2>
      <h4>VD och grundare</h4>
    
  </div>
  
  
  
</div>

</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {Navbar}
}
</script>

<style scoped>
.wrapper{
  background-color: #F3E4E1;
  display: flex;
  flex-direction: column;
}

.strong{
  font-weight: 700;
}

.info-text{
  max-width: 500px;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2em;
}

img{
  margin-top: 2em;
  border-radius: 50%;
}

h2, h4{
  margin: 0;
}

h4{
  font-weight: 300;
  font-size: smaller;
}

h1{
  align-self: flex-start;
}

</style>