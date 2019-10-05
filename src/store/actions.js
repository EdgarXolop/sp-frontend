import {
  SET_USER
} from './mutationns_name'
import cookies from 'js-cookie'
import {
  login,
  register,
  updateUserInfo,
  getUserInfo,
  getPosts,
} from "../api"

export default {
  loginUser(_, {
    email,
    password
  }) {

    return login(email, password)
      .then(response => {

        cookies.set("access_token", response.data.access_token)
        cookies.set("refresh_token", response.data.refresh_token)

        window.location.reload();

      })
  },
  registerUser({
    dispatch
  }, data) {

    return register(data)
      .then(() => {
        dispatch("loginUser", data)
      })
  },
  changeUserInfo({
    dispatch
  }, data) {

    return updateUserInfo(data)
      .then(() => {
        dispatch("loadUserInfo")
      })
  },
  loadUserInfo({
    commit
  }) {
    return getUserInfo()
      .then(response => {

        commit(SET_USER, {
          user: response.data
        })
      })

  }

}