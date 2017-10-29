<template>
  <form action="" @submit="fetchSearchResults">
    <div class="search">
      <label for="search-input">Search Youtube Videos</label>
      <input 
        type="text" 
        id="search-input" 
        formaction="submit"
        placeholder="Cat videos, dank memes, Vue tutorials..."
        >
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
    }
  }
};
</script>

<style lang="scss" scoped>

* {
  font-family: "Catamaran", sans-serif;
}

.search {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  margin-bottom: 5px;
}

label {
  padding-left: 1px;
  margin-bottom: 5px;
}

input {
  padding-left: 6px;
  border: 1px solid black;
  border-radius: 2px;
  font-size: 22px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  width: 90%;
  margin: auto;
}

button {
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  background-color: #FCFFEB;
  font-size: 18px;
  cursor: pointer;
}
button:hover {
  background-color: #F2FCAE;
}

</style>
