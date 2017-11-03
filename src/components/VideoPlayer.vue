<template>
  <div id="player"></div>
</template>

<script>
import store from "../store";
import { mapState } from "vuex";

export default {
  name: "VideoPlayer",
  computed: mapState(["currentVideo"]),
  mounted() {
    setTimeout(() => {
      store.dispatch("loadVideo", this.$route.query.id);
    }, 500);
  },
  watch: {
    $route: function(route) {
      if (route.query.id !== this.currentVideo.id) {
        store.dispatch("loadVideo", route.query.id);
      }
    },
    currentVideo: {
      handler: function() {
        document.getElementsByTagName("iframe")[0].scrollIntoView(true);
      }
    },
    deep: true
  },
  beforeRouteLeave(to, from, next) {
    store.dispatch("destroyVideo");
    next();
  }
};
</script>


<style lang="scss">
iframe {
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 100px;
  width: 90%;
  height: 80%;
}
</style>
