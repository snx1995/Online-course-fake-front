export default {
    state: {
        user: {
            test: "this is a test for store"
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    }
}