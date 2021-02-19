<template>
<div>
    <div>
        <h1>Register user</h1>
        <label>Name</label>
        <input v-model="registerName" type="text" placeholder="Name">
        <label>Email</label>
        <input v-model="registerEmail" type="email" placeholder="Email">
        <button v-on:click="registerUser">Register user</button>
    </div>

    <div>
        <h1>Login</h1>
        <label>Name</label>
        <input v-model="loginName" type="text" placeholder="Name">
        <label>Email</label>
        <input v-model="loginEmail" type="email" placeholder="Email">
        <button v-on:click="login">Login</button>
    </div>

</div>
</template>

<script>

export default {
    data() { return {
        registerName: '',
        registerEmail: '',
        loginName: '',
        loginEmail: ''
    }},
    methods: {
        registerUser() {
            if (this.registerName != '' && this.registerEmail != '') {
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
</style>