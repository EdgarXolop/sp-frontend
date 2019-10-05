<template>

  <div id="app">

    <nav class="navbar is-white has-shadow is-fixed-top">
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
          <div class="navbar-end nav-menu">
            <a class="navbar-item is-tab is-hidden-tablet">
              <span class="icon">
                <font-awesome-icon icon="home" /></span> Home
            </a>

            <a class="navbar-item is-tab">
              <span class="icon">
                <font-awesome-icon icon="user" /></span>
            </a>
            <a class="navbar-item is-tab">
              <span class="icon">
                <font-awesome-icon icon="sign-out-alt" /></span>
            </a>
          </div>
        </div>
      </div>
    </nav>

    <div class="container">


      <section class="main-content columns is-fullheight">

        <aside class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
          <ul class="menu-list">
            <li>
              <a href="#" class="">
                <span class="icon">
                  <font-awesome-icon icon="home" /></span> Home
              </a>
            </li>
          </ul>
        </aside>

        <div class="container column is-10">
          <div class="section">

            <div class="card">
              <div class="card-header">
                <p class="card-header-title">Header</p>
              </div>
              <div class="card-content">
                <div class="content">Content</div>
              </div>
            </div>
            <br />

            <div class="card is-hidden1">
              <div class="card-header">
                <p class="card-header-title">Header</p>
              </div>
              <div class="card-content">
                <div class="content">Content</div>
              </div>
            </div>
            <br />

            <div class="card is-hidden1">
              <div class="card-header">
                <p class="card-header-title">Header</p>
              </div>
              <div class="card-content">
                <div class="content">Content</div>
              </div>
            </div>
            <br />

            <div class="card is-hidden1">
              <div class="card-header">
                <p class="card-header-title">Header</p>
              </div>
              <div class="card-content">
                <div class="content">Content</div>
              </div>
            </div>
            <br />

            <div class="card is-hidden1">
              <div class="card-header">
                <p class="card-header-title">Header</p>
              </div>
              <div class="card-content">
                <div class="content">Content</div>
              </div>
            </div>
            <br />

            <div class="card is-hidden1">
              <div class="card-header">
                <p class="card-header-title">Header</p>
              </div>
              <div class="card-content">
                <div class="content">Content</div>
              </div>
            </div>
            <br />

          </div>
        </div>

      </section>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'home',
    data: () => ({
      showMenu: false
    }),
    methods: {
      toggleNavbarBurger() {
        this.showMenu = !this.showMenu
      }
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
    margin-top: 60px
  }

  .footer {
    margin-top: -12px;
  }

  @media screen and (max-width: 768px) {
    #menu-toggle:checked+.nav-menu {
      display: block;
    }
  }
</style>