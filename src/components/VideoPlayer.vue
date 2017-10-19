<template>
  <div id="player"></div>
</template>

<script>
import store from "../store";
import {mapState} from "vuex";

export default {
  name: "VideoPlayer",
  computed: mapState(['currentVideo'])
}
</script>

