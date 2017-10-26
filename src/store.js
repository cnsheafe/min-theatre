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

import {
  changeThumbnailSize,
  updateThumbnailSize
} from "./model/sizing";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    searchResults: [],
    currentVideo: {
      show: false,
      id: null
    },
    thumbnailSize: 0
  },
  mutations: {
    updateSearchResults,
    addExtraInfo,
    showNewVideo,
    clearVideo,
    updateThumbnailSize
  },
  actions: {
    fetchSearchResults,
    fetchResultInfo,
    loadVideo,
    destroyVideo,
    changeThumbnailSize
  }
});

export default store;
