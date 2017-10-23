<template>
<div v-show="!currentVideo.show">
  <ul>
    <li v-for="(result, index) in searchResults" :key="index">
      <div class="result-left">
        <div class="result-row">
          <p @click="loadVideo" :data-index="index">{{result.title}}</p>
          <p>{{result.channelName}}</p>
        </div>
        <div class="result-row">
          <p>{{result.description}}</p>
        </div>
        <div class="result-row">
          <div class="likes">{{result.likes}}</div>
          <div class="dislikes">{{result.dislikes}}</div>
          <div class="views">{{result.views}}</div>
          <div class="duration">{{result.duration}}</div>
        </div>
      </div>
      <div role="photo" class="search-result-right">
        <img :src="result.thumbnails.small.url" :alt="result.title">
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import store from "../store";
import { mapState } from "vuex";

export default {
  name: "results",
  computed: mapState(["searchResults", "currentVideo"]),
  methods: {
    loadVideo(event) {
      const id = event.target.dataset.index;
      const videoId = this.searchResults[event.target.dataset.index].id;
      store.dispatch("loadVideo", videoId, 500);
    }
  }
}
</script>