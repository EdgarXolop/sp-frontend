<template>
  <router-view/>
</template>

<script>

import 'bulma'

export default {
  name: "App",
}
</script>

<style lang="scss">


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