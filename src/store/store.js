import Vue from "vue";
import Vuex from "vuex";
import userStore from "./userStore";
import videoStore from "./videoStore";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {

    },
    modules: {
        userStore,
        videoStore,
    }
})

export default store;