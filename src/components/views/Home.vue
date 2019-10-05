<template>

  <div id="app" class="is-fullheight">

    <navbar />

    <div class="container">


      <section class="main-content columns">

        <main-left-menu />

        <post-list />

        <chat-list/>

      </section>
    </div>

  </div>
</template>

<script>

  import MainLeftMenu from "@/components/navigation/MainLeftMenu"
  import Navbar from "@/components/navigation/Navbar"
  import ChatList from "@/components/chat/ChatList"
  import PostList from "@/components/post/PostList"


  export default {
    name: 'home',
    components:{
      "main-left-menu" : MainLeftMenu,
      "chat-list" : ChatList,
      "post-list" : PostList,
      "navbar" : Navbar
    }
  }
</script>

<style lang="scss" scoped>

  html,
  body,
  #app {
    height: 100%;
  }

  #app {
    min-height: 100%;
    //display: flex;
    //flex-direction: column;
  }

  .main-content {
    //flex: 1;
    padding-top: 65px
  }

  .footer {
    margin-top: -12px;
  }

  @media screen and (max-width: 768px) {
    #menu-toggle:checked+.nav-menu {
      display: block;
    }
  }

  .is-vertical-center {
    display: flex;
    align-items: center;
  }
</style>