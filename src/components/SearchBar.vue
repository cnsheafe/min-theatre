<template>
  <form action="" @submit="fetchSearchResults">
    <label for="search-input">Search Youtube Videos</label>
    <input type="text" id="search-input" formaction="submit">
    <button type="submit">Search</button>
  </form>
</template>

<script>
import store from "../store";
import { mapState } from "vuex";

export default {
  name: "SearchBar",
  computed: mapState(["searchResults"]),
  methods: {
    fetchSearchResults(event) {
      event.preventDefault();
      const query = document.getElementById("search-input").value;
      store.dispatch("fetchSearchResults", query).then(success => {
        if (success) {
          let videoIds = "";
          this.searchResults.forEach(result => {
            videoIds += result.id + ",";
          });
          videoIds = videoIds.trim();
          videoIds = videoIds.slice(0, videoIds.length - 1);

          console.log(videoIds);
          store.dispatch("fetchResultInfo", videoIds);
        }
      });
    }
  }
};
</script>
