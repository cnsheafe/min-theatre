<template>
  <div>
  <header @click="backToHome">MinTheatre</header>
  <main>
    <section>
        <search-bar/>
        <router-view/>
    </section>
  </main>
  <footer>
    <p>Made by Christofer Sheafe</p>
    <ul>
      <li><a href="https://github.com/cnsheafe/min-theatre" target="_blank"><img src="static/github.min.png" alt="Github Repo"></a></li>
      <li><a href="https://vuejs.org/" target="_blank"><img src="static/vue.min.png" alt="Vue website"></a></li>
      <li><a href="https://developers.google.com/youtube/" target="_blank"><img src="static/youtube.min.png" alt="Youtube Developer API"></a></li>
    </ul>
  </footer>
  </div>
</template>

<script>
import store from "../store";
import SearchBar from "./SearchBar";

export default {
  name: "app",
  methods: {
    backToHome(event) {
      event.preventDefault();
      this.$router.push({ path: "/" });
    }
  },
  components: {
    SearchBar: SearchBar
  },
  store: store
};
</script>

<style lang="scss" scoped>
header {
  &:hover {
    cursor: pointer;
  }
}
</style>

