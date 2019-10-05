<template>

  <div id="app" class="is-fullheight">

    <navbar />

    <div class="container">


      <section class="main-content columns">

        <main-left-menu />

        <post-list />

        <chat-list />

      </section>
    </div>

  </div>
</template>

<script>

import {
  mapActions
} from "vuex"

import MainLeftMenu from "@/components/navigation/MainLeftMenu"
import Navbar from "@/components/navigation/Navbar"
import ChatList from "@/components/chat/ChatList"
import PostList from "@/components/post/PostList"


export default {
  name: 'home',
  methods: {
    ...mapActions(
      [
        "loadUserInfo"
      ]
    ),
  },
  mounted() {
    this.loadUserInfo()
  },
  components: {
    "main-left-menu": MainLeftMenu,
    "chat-list": ChatList,
    "post-list": PostList,
    "navbar": Navbar
  }
}
</script>

<style lang="scss" scoped>
</style>