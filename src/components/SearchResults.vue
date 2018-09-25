<template>
<div class="search-results">
  <ul>
    <li v-for="(result, index) in searchResults" :key="index">
      <result-card :result="result"/>
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
  computed: mapState(["searchResults"]),
  created() {
    this.fetchResults(this.$route.query.q);
  },
  watch: {
    $route: function(route) {
      this.fetchResults(route.query.q);
    }
  },
  methods: {
    fetchResults(query) {
      store.dispatch("fetchSearchResults", query).then(success => {
        if (success) {
          let videoIds = "";
          this.searchResults.forEach(result => {
            videoIds += result.id + ",";
          });
          videoIds = videoIds.trim();
          videoIds = videoIds.slice(0, videoIds.length - 1);

          store.dispatch("fetchResultInfo", videoIds);
        }
      });
    }
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
  row-gap: 80px;
  margin: auto;
  grid-template-columns: 320px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, 320px);
    column-gap: 80px;
    grid-template-rows: 100fr;
    justify-content: space-around;
  }
}
</style>
