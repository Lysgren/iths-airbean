<template>
<div>
    <div class="wrapper-card">
        <div class="icon">
            <img src="@/assets/add.svg" alt="add" class="addIcon">
        </div>
        <div class="card-info">
            <div class="heading">
                <h2>{{menuItem.title}}</h2>
                <h2>{{menuItem.price}}</h2>  
            </div>
            <h4>{{menuItem.desc}}</h4>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
    menuItem: Object
  }
}
</script>

<style scoped>

*{
    margin: 0;
}

.wrapper-card{
    justify-content: center;
    display: flex;
    flex-direction: row;
    padding: 1em;
}

.card-info{
    display: flex;
    flex-direction: column;
}

.heading{
    width: 20em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.icon{
    background-color: black;
    padding: 10px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2em;
    cursor: pointer;
}
.addIcon{
    height: 15px;
    width: auto;
}


</style>