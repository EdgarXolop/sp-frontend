import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations,
  actions,
  getters: {
    user: state => state.user,
    auth_error: state => state.auth_error
  }
})