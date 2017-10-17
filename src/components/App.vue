<template>
    <section>
        <search-bar></search-bar>
        <search-results></search-results>
    </section>
</template>

<script>
import store from "../store";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
export default {
  name: "app",
  components: {SearchBar: SearchBar, SearchResults: SearchResults},
  store: store
}
</script>
