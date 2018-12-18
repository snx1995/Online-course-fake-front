import Vue from "vue";
import Vuex from "vuex";
import userStore from "./userStore";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {

    },
    modules: {
        userStore,
    }
})

export default store;