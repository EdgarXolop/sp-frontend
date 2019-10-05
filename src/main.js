import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './components/App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser,faSignOutAlt,faHome,faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser,faSignOutAlt,faHome,faInfo)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

window.api = axios.create({
  baseURL: process.env.VUE_APP_API
})



Vue.use(VueAxios, window.api)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
