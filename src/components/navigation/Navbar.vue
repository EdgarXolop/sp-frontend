<template>
  

    <nav class="navbar is-primary has-shadow is-fixed-top ">
      <div class="container">
        <a role="button" :class="['navbar-burger',{'is-active':showMenu}]" data-target="navMenu" aria-label="menu"
          aria-expanded="false" @click="toggleNavbarBurger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <div :class="['navbar-menu',{'is-active':showMenu}]">
          <div class="navbar-start">
            <a class="navbar-item">
              Red Social
            </a>
          </div>
          <user-actions />
        </div>
      </div>
    </nav>
</template>

<script>
import UserActions from "@/components/user/UserActions"

export default {
    name: "NavbarApp",
    data: () => ({
      showMenu: false
    }),
    methods: {
      toggleNavbarBurger() {
        this.showMenu = !this.showMenu
      }
    },
    components:{
      "user-actions" : UserActions
    }
}
</script>

<style>

</style>