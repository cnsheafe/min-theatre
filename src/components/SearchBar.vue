<template>
  <form action="" @submit="fetchSearchResults">
    <div class="search">
      <label for="search-input">Search Youtube Videos</label>
      <input 
        type="text" 
        id="search-input" 
        formaction="submit"
        placeholder="Cat videos, dank memes, Vue tutorials..."
        @focus="clearSearch">
    </div>
    <div class="button-container">
      <button type="submit">Search</button>
    </div>
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

          store.dispatch("fetchResultInfo", videoIds);
        }
      });
      document.getElementById("search-input").blur();
    },
    clearSearch(event) {
      event.target.value = "";
    }
  }
};
</script>

<style lang="scss" scoped>

* {
  font-family: "Oswald", sans-serif;
}

label {
  margin-bottom: 5px;
}

.search {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  margin-bottom: 5px;
  input {
    padding-left: 6px;
  }
}

.button-container {
  display: flex;
  justify-content: flex-end;
  width: 80%;
  margin: auto;
}

</style>
