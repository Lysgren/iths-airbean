<template>
<div class="info">
    <p class="close" v-on:click="click">X</p>
    <p class="text">{{coffee}}</p>
</div>
</template>

<script>
export default {
    props: {
        coffee: String
    },
    methods: {
        click(){
            this.$emit('clicked', true)
        }
    }
}
</script>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  height: auto;
  background-color: white;
  border: 1px solid black;
  position: absolute;
}

.text{
    padding: 2em;
}

.close{
    font-weight: 700;
    align-self: flex-end;
    padding: 10px;
    cursor: pointer;
}
</style>