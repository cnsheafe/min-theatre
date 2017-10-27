<template>
    <section>
        <search-bar></search-bar>
        <search-results></search-results>
        <video-player></video-player>
    </section>
</template>

<script>
import store from "../store";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import VideoPlayer from "./VideoPlayer";

export default {
  name: "app",
  components: {
    SearchBar: SearchBar,
    SearchResults: SearchResults,
    VideoPlayer: VideoPlayer
  },
  store: store
};
</script>

<style lang="scss">
header {
  text-align: center;
  font-family: "Crete Round", serif;
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>

