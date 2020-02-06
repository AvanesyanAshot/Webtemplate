export default {
    state: {
        message: 'Hello vuex'
    },
    mutations: {},
    actions: {},
    getters: {
        getMessage(state) {
            return state.message
        }
    }
}