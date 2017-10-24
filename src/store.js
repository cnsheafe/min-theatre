import Vuex from "vuex";
import Vue from "vue";

import {
  fetchSearchResults,
  fetchResultInfo,
  updateSearchResults,
  addExtraInfo
} from "./model/search";
import {
  loadVideo,
  showNewVideo,
  destroyVideo,
  clearVideo
} from "./model/video";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    searchResults: [],
    currentVideo: {
      show: false,
      id: null
    }
  },
  mutations: {
    updateSearchResults,
    addExtraInfo,
    showNewVideo,
    clearVideo
  },
  actions: {
    fetchSearchResults,
    fetchResultInfo,
    loadVideo,
    destroyVideo
  }
});

export default store;
