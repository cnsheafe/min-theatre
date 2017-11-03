<template>
    <section>
        <search-bar></search-bar>
        <router-view/>
        <video-player></video-player> 
    </section>
</template>

<script>
import store from "../store";
import SearchBar from "./SearchBar";
import VideoPlayer from "./VideoPlayer";

export default {
  name: "app",
  components: {
    SearchBar: SearchBar,
    VideoPlayer: VideoPlayer
  },
  store: store
};
</script>
