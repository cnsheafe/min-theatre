<template>
<div v-show="!currentVideo.show" class="search-results">
  <ul>
    <li v-for="(result, index) in searchResults" :key="index">
      <result-card :result="result"></result-card>
      <!-- <div class="result-left">
        <div class="result-header">
          <p @click="loadVideo" :data-index="index">{{result.title}}</p>
          <p>by {{result.channelName}}</p>
        </div>
        <div v-if="thumbnailSize > 0" class="result-description">
          <p>{{result.description}}</p>
        </div>
        <div v-if="thumbnailSize > 0" class="result-stats">
          <div class="likes"><i class="fa fa-thumbs-up" aria-hidden="true"></i>{{result.likes}}</div>
          <div class="dislikes"><i class="fa fa-thumbs-down" aria-hidden="true"></i>{{result.dislikes}}</div>
          <div class="duration"><i class="fa fa-clock-o" aria-hidden="true"></i>{{result.duration}}</div>
        </div>
      </div>
      <div role="photo" class="result-right">
        <img v-if="thumbnailSize < 2" :src="result.thumbnails.small.url" :alt="result.title">
        <img v-if="thumbnailSize===2" :src="result.thumbnails.large.url" :alt="result.title">
      </div>
      <div v-if="thumbnailSize === 0" class="result-stats">
        <div class="likes"><i class="fa fa-thumbs-up" aria-hidden="true"></i>{{result.likes}}</div>
        <div class="dislikes"><i class="fa fa-thumbs-down" aria-hidden="true"></i>{{result.dislikes}}</div>
        <div class="duration"><i class="fa fa-clock-o" aria-hidden="true"></i>{{result.duration}}</div>
      </div> -->

    </li>
  </ul>
</div>
</template>

<script>
import store from "../store";
import { mapState } from "vuex";
import ResultCard from "./ResultCard";

export default {
  name: "results",
  components: {
    ResultCard: ResultCard
  },
  computed: mapState(["searchResults", "currentVideo", "thumbnailSize"]),
  methods: {
    loadVideo(event) {
      const id = event.target.dataset.index;
      const videoId = this.searchResults[event.target.dataset.index].id;
      store.dispatch("loadVideo", videoId);
    }
  },
  mounted: function() {
    console.log("hello");
    function mediaMatcher(e) {
      let size;
      if (e.matches) {
        size = "small";
      } else {
        if (window.outerWidth < 992) {
          size = "medium";
        } else {
          size = "large";
        }
      }
      console.log(size);
      store.dispatch("changeThumbnailSize", size);
    }
    const mql = window.matchMedia("(max-width: 768px)");

    mediaMatcher(mql);
    mql.onchange = mediaMatcher;
  }
};
</script>

<style lang="scss" scoped>
.search-results {
  width: 80%;
  margin: auto;
  font-family: "Oswald", sans-serif;
}

ul {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  list-style: none;
  justify-content: space-around;
}

li {
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  margin-bottom: 20px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
}
li:last-child {
}

// p {
//   margin-top: 0;
//   margin-bottom: 0;
// }

// .result-left,
// .result-right {
//   display: flex;
//   justify-content: center;
// }

// .result-right {
// }

// .result-description {
//   width: 70%;
// }
</style>
