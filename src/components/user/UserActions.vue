<template>
    <div class="navbar-end nav-menu">
        <router-link to="/" class="navbar-item is-tab is-hidden-tablet">
            <span class="icon">
                <font-awesome-icon icon="home" /></span> Home
        </router-link>

        <router-link to="/my-account" class="navbar-item is-tab is-hidden-tablet">
            <span class="icon">
                <font-awesome-icon icon="user" /></span>
        </router-link>
        <a class="navbar-item is-tab" @click="signOut">
            <span class="icon">
                <font-awesome-icon icon="sign-out-alt" /></span>
        </a>
    </div>
  
</template>

<script>
import cookies from "js-cookie"

export default {
    name: "UserActions",
    methods: {
        signOut(){
            
            cookies.remove("access_token")
            cookies.remove("refresh_token")
            window.location.reload()
        }
    }
}
</script>

<style>

</style>