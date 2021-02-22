<template>
<div class="register-wrapper">
    <img src="@/assets/A.png" class="icon">
    <h1>Välkommen till AirBean-familjen!</h1>
    <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>

    <form>
        <label>Namn</label>
        <input v-model="registerName" type="text" required placeholder="Name">
        <label>Epost</label>
        <input v-model="registerEmail" type="email" required placeholder="Email">
        <label class="control control-checkbox">GDBR Ok!
            <input v-model="checkbox" type="checkbox" required />
            <div class="control_indicator"></div>
        </label>
        <button v-on:click="registerUser">Brew me a cup!</button>
    </form>


    <form>
        <label>Name</label>
        <input v-model="loginName" type="text" required placeholder="Name">
        <label>Email</label>
        <input v-model="loginEmail" type="email" required placeholder="Email">
        <button v-on:click="login">Login</button>
    </form>

</div>
</template>

<script>

export default {
    data() { return {
        registerName: '',
        registerEmail: '',
        loginName: '',
        loginEmail: '',
        checkbox: false
    }},
    methods: {
        registerUser() {
            if (this.registerName != '' && this.registerEmail != '' && this.checkbox == true) {
                console.log('register user')
                this.$store.dispatch('registerUser', {name: this.registerName, email: this.registerEmail})
            }
        },
        login() {
            if (this.loginName != '' && this.loginEmail != '') {
                this.$store.dispatch('login', {name: this.loginName, email: this.loginEmail})
            }
        }
    },
}
</script>

<style scoped>

img {
    margin-top: 30px;
    width: 50px
}

.register-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #F3E4E1;
    color: #2F2926;
    border-radius: 5px;
    margin: 5% 6% 0 6%;
}

.register-wrapper h1 {
    width: 80%;
}

.register-wrapper p {
    width: 80%;
    margin-top: -12px;
    font-size: 20px;
    opacity: 0.9;
}

.register-wrapper form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85%;
}

.register-wrapper form label {
    margin-left: -85%;
    margin-bottom: 5px;
    margin-top: 12px;
    font-size: 16px;
    opacity: 0.8;
}

.register-wrapper input {
    width: 95%;
    height: 30px;
    padding: 6px 16px;
    border-radius: 8px;
    border-width: 2px;
    border-style: solid;
    border-color: #2F2926;
    background: #F3E4E1;
    font-size: 16px;
    outline: none;
}

.register-wrapper button {
    width: 80%;
    height: 65px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 50px;
    border-style: solid;
    background: #2F2926;
    color: white;
    font-size: 20px;
    outline: none;
    cursor: pointer;
}
.control {
    display: block;
    position: relative;
    padding-left: 34px;
    margin-right: -50px;
    margin-bottom: 5px;
    padding-top: 3px;
    cursor: pointer;
    font-size: 12px;
}
    .control input {
        position: absolute;
        opacity: 0;
    }
.control_indicator {
    position: absolute;
    padding: 2px;
    top: 0px;
    left: 0;
    height: 20px;
    width: 20px;
    background: #e6e6e6;
    border: 1px solid #000000;
    border-radius: 20px;
}
.control:hover input, .control input:focus {
    background: #cccccc;
}

.control input:checked ~ .control_indicator {
    background: #0E927D;
}

.control input:disabled {
    background: #F3E4E1;
    opacity: 0;
    pointer-events: none;
}


</style>