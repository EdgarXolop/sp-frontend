import Vue from 'vue'
import Router from 'vue-router'
import cookies from 'js-cookie'

import Authentication from './components/views/auth/Authentication'
import MyAccount from './components/views/user/UserDetails'
import Home from './components/views/Home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/authentication',
      name: 'authentication',
      component: Authentication
    },
    {
      path: '/my-account',
      name: 'my-account',
      component: MyAccount
    }
  ]
})

router.beforeEach((to, from, next) => {
  const access_token = cookies.get("access_token")

  if (to.fullPath === '/' || to.fullPath === '/my-account') {
    if (!access_token) {
      next('/authentication');
    }
  }
  if (to.fullPath === '/authentication') {
    if (access_token) {
      next('/home');
    }
  }
  next();
});

export default router