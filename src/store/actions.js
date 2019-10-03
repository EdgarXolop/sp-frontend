export default {
    setCredentials({
        commit
    }, credentials) {
        commit("SET_CREDENTIALS", {
            credentials
        })
    },
    setUser({
        commit
    }, user) {
        commit("SET_CREDENTIALS", {
            user
        })
    }
}