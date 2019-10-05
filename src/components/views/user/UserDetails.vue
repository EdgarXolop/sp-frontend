<template>
  

  <div id="app" class="is-fullheight">

    <navbar />

    <div class="container">


      <section class="main-content columns">

        <main-left-menu />

        <edit-account /> 

      </section>
    </div>

  </div>
</template>

<script>
import EditAccount from '@/components/views/user/EditAccount'
import MainLeftMenu from "@/components/navigation/MainLeftMenu"
import Navbar from "@/components/navigation/Navbar"

export default {
    name: "UserDetails",
    components:{
      "main-left-menu" : MainLeftMenu,
      "navbar" : Navbar,
      "edit-account" : EditAccount
    }
}
</script>

<style>

</style>