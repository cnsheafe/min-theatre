<template>
<div v-show="!currentVideo.show" class="search-results">
  <ul>
    <li v-for="(result, index) in searchResults" :key="index">
      <div class="result-left">
        <div class="result-header">
          <p @click="loadVideo" :data-index="index">{{result.title}}</p>
          <p>by {{result.channelName}}</p>
        </div>
        <div class="result-description">
          <p>{{result.description}}</p>
        </div>
        <div class="result-stats">
          <div class="likes"><i class="fa fa-thumbs-up" aria-hidden="true"></i>{{result.likes}}</div>
          <div class="dislikes"><i class="fa fa-thumbs-down" aria-hidden="true"></i>{{result.dislikes}}</div>

          <!-- <div class="views">{{result.views}}</div> -->
          <div class="duration"><i class="fa fa-clock-o" aria-hidden="true"></i>{{result.duration}}</div>
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
      store.dispatch("loadVideo", videoId);
    }
  }
}
</script>

<style lang="scss" scoped>
.search-results {
  width: 80%;
  margin: auto;
  font-family: "Oswald", sans-serif;
}

ul {
  padding-left: 0;
  list-style: none;
}

li {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-between;
}

p {
  margin-top: 0;
  margin-bottom: 0;
}

.result-header {
  display: flex;
  flex-direction: column;
  p {
    margin-top: 0;
    margin-bottom: 10px;
  }
  p:first-child {
    font-size: 20px;
    text-decoration: underline;
    cursor: pointer;
    display: inline-block;
  }
  p:last-child {
    font-size: 16px;
  }
}
.result-stats {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  div {
    margin-right: 15px;
  }
  i {
    margin-right: 5px;
  }
}

.result-description {
  width: 70%;
}

</style>
