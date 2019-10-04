import { SET_USER } from './mutationns_name'

export default {
    setUser({
        commit
    }, user) {
        commit(SET_USER, {
            user
        })
    }
}