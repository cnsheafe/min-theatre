<template>
    <section>
        <search-bar/>
        <router-view/>
    </section>
</template>

<script>
import store from "../store";
import SearchBar from "./SearchBar";

export default {
  name: "app",
  components: {
    SearchBar: SearchBar
  },
  store: store
};
</script>
