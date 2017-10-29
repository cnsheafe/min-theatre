<template>
<div v-show="!currentVideo.show" class="search-results">
  <ul>
    <li v-for="(result, index) in searchResults" :key="index">
      <result-card :result="result"></result-card>
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
  mounted: function() {
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
  width: 90%;
  margin: auto;
  font-family: "Catamaran", sans-serif;
  margin-bottom: 100px;
}

ul {
  display: grid;
  padding-left: 0;
  list-style: none;
  grid-row-gap: 20px;
  margin: auto;
  grid-template-columns: 320px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: 320px 320px;
    grid-template-rows: 100fr;
    justify-content: space-around;
  }
}
</style>
