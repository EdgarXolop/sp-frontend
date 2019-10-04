import { SET_USER } from './mutationns_name'

export default {
    [SET_USER] (state, payload) {

        state.user = payload.user
    }
}