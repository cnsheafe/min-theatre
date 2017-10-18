<template>
<div>
  <ul>
    <li v-for="(result, index) in searchResults" :key="index">
      <div class="result-left">
        <div class="result-row">
          <p>{{result.title}}</p>
          <p>{{result.channelName}}</p>
        </div>
        <div class="result-row">
          <p>{{result.description}}</p>
        </div>
        <div class="result-row">
          <div class="likes"></div>
          <div class="dislikes"></div>
          <div class="views"></div>
        </div>
      </div>
      <div role="photo" class="search-result-right">
        <img :src="result.thumbnails.small.url" :alt="result.title">
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "results",
  computed: mapState(['searchResults']),
}
</script>

