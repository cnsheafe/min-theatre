<template>
  <div id="player"></div>
</template>

<script>
import store from "../store";
import { mapState } from "vuex";

export default {
  name: "VideoPlayer",
  computed: mapState(["currentVideo"]),
  watch: {
    currentVideo: {
      handler: function() {
        if (!this.currentVideo.show && this.currentVideo.id !== null) {
          store.dispatch("destroyVideo");
        }
        else if (this.currentVideo.show && this.currentVideo.id) {
          document.getElementsByTagName("iframe")[0].scrollIntoView(true);
        }
      },
      deep: true
    }
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
