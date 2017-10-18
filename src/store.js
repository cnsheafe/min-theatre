import Vuex from "vuex";
import Vue from "vue";

import {fetchSearchResults, updateSearchResults} from "./model/search";


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        searchResults: [],
        currentVideo: {}
    },
    mutations: {
        updateSearchResults
    },
    actions: {
        fetchSearchResults
    }
});

export default store;