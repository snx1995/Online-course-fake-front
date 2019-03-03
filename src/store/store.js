import Vue from "vue";
import Vuex from "vuex";
import userStore from "./userStore";
import videoStore from "./videoStore";
import courseStore from './courseStore';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {

    },
    modules: {
        userStore,
        videoStore,
        courseStore
    }
})

export default store;