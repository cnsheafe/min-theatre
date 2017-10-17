<template>
<div>
  <ul>
    <li v-for="(results, index) in searchResults" :key="index">{{results}}</li>
  </ul>
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "results",
  computed: mapState(['searchResults']),
  mounted() {
      console.log(this.searchResults);
  }
}
</script>

