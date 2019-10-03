export default {
    SET_CREDENTIALS(state, payload) {

        state.credentials = payload.credentials
    },
    SET_USER(state, payload) {

        state.user = payload.user
    }
}