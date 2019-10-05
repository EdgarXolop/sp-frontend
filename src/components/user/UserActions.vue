<template>
    <div class="navbar-end nav-menu">
        <a class="navbar-item is-tab is-hidden-tablet">
            <span class="icon">
                <font-awesome-icon icon="home" /></span> Home
        </a>

        <a class="navbar-item is-tab">
            <span class="icon">
                <font-awesome-icon icon="user" /></span>
        </a>
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