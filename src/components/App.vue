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
