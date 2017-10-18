<template>
  <form action="" @submit="fetchSearchResults">
    <label for="search-input">Search Youtube Videos</label>
    <input type="text" id="search-input" formaction="submit">
    <button type="submit">Search</button>
  </form>
</template>

<script>
import store from "../store";

export default {
  name: "SearchBar",
  methods: {
    fetchSearchResults(event) {
      event.preventDefault();
      const query = document.getElementById("search-input").value;
      store.dispatch("fetchSearchResults", query)
        .then(success => {
          if (success) {
            console.log("success");
          }
        });
    }
  }
}
</script>


