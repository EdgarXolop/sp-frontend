import Vue from 'vue'
import Router from 'vue-router'
import cookies from 'js-cookie'

import Login from './components/views/auth/Login'
import Home from './components/views/Home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

router.beforeEach((to, from, next) => {
  const access_token = cookies.get("access_token")

  if (to.fullPath === '/') {
    if (!access_token) {
      next('/login');
    }
  }
  if (to.fullPath === '/login') {
    if (access_token) {
      next('/home');
    }
  }
  next();
});

export default router