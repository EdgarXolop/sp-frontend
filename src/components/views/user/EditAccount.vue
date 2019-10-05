<template>
<div class="container-fluid column is-radiusless">
  <div id="login">
    <div class="login-card">
      <div class="content">
        <form @submit.stop.prevent="submitForm">

          <input class="auth-input" type="text" name="first_name" title="nombre" placeholder="Nombre" required autofocus
            v-model="first_name">
          <input class="auth-input" type="text" name="last_name" title="apellido" placeholder="Apellido" required
            v-model="last_name">
          <input class="auth-input" type="email" name="email" title="email" placeholder="Correo" disabled
            v-model="email">
          <input class="auth-input" type="text" name="user_name" title="user_name" placeholder="Nombre de usuario"
            disabled v-model="user_name">

          <!--div class="level options">
<div class="checkbox level-left">
<input type="checkbox" id="checkbox" class="regular-checkbox">
<label for="checkbox"></label>
<span>Remember me</span>
</div>

<a class="btn btn-link level-right" href="#">Forgot Password?</a>
</div-->
          <p class="help is-danger">{{error_message}}</p>

          <button type="submit" class="btn btn-primary">Actualizar</button>

        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import cookies from 'js-cookie'

import {
  mapActions,
  mapState
} from 'vuex'

export default {
  name: 'EditAccount',
  data: () => ({
    user_name: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "abc123",
    password_confirm: "abc123",
    date_of_birth: null,
    error_message: ""
  }),
  computed: mapState(['user']),
  watch: {
    user(newValue, oldValue){

      this.mapUserInfo(newValue)
    }
  },
  methods: {
    ...mapActions(
      [
        "changeUserInfo",
        "loadUserInfo"
      ]
    ),
    submitForm() {
      this.changeUserInfo({
          user_name:this.user_name,
          email:this.email,
          first_name:this.first_name,
          last_name:this.last_name,
          date_of_birth:this.date_of_birth,
          phone_number:this.phone_number,
          password:this.password,
          password_confirm:this.password_confirm
        })
        .then(response => {
          this.setUser(response.data)
        })
        .catch(error => {
          if(error.response && error.response.data && error.response.data.errors){
            this.error_message = error.response.data.errors.join(", ")
          }
        })
    },
    mapUserInfo(data){

      if(!data) return null
      
      this.user_name = data.user_name
      this.email = data.email
      this.first_name = data.first_name
      this.last_name = data.last_name
      this.date_of_birth = data.date_of_birth
      this.phone_number = data.phone_number     

    }
  },
  mounted(){
    this.loadUserInfo()
  }
}
</script>


<style lang="scss" scoped >
  $primary: hsl(171, 100%, 41%);
  $grey-darker: hsl(0, 0%, 21%);
  $grey-dark: hsl(0, 0%, 29%);
  $grey: hsl(0, 0%, 48%);
  $grey-light: hsl(0, 0%, 71%);
  $grey-lighter: hsl(0, 0%, 86%);


  #login {
    display: flex;
    align-items: center;
    justify-content: center;

    .login-card {
      background: #fff;
      width: 24rem;
      box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.11);

      .card-title {
        background-color: darken($primary, 5%);
        padding: 2rem;

        h1 {
          color: #fff;
          text-align: center;
          font-size: 1.2rem;
        }
      }

      .content {
        padding: 3rem 2.5rem 5rem;
      }

      .auth-input {
        display: block;
        width: 100%;
        font-size: 1rem;
        margin-bottom: 1.75rem;
        padding: 0.25rem 0;
        border: none;
        border-bottom: 1px solid $grey-lighter;
        transition: all .5s;

        &:hover {
          border-color: $grey;
        }

        &:active,
        &:focus {
          border-color: $primary;
        }
      }

      .checkbox {
        color: $grey-light;
        font-size: 0.8rem;

        span {
          margin-left: 0.5rem;
        }
      }

      a {
        font-size: 0.8rem;
      }

      .options {
        color: $grey-light;
        margin-bottom: 1.5rem;
      }

      button {
        cursor: pointer;
        font-size: 1.2rem;
        color: $primary;
        border-radius: 4rem;
        display: block;
        width: 100%;
        background: transparent;
        border: 2px solid $primary;
        padding: 0.9rem 0 1.1rem;
        transition: color .5s, border-color .5s;

        &:hover,
        &:focus {
          color: darken($primary, 10%);
          border-color: darken($primary, 10%);
        }

        &:active {
          transform: translateY(1px);
        }
      }
    }
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
</style>