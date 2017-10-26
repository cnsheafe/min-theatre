<template>
<div>
  <div class="result-header">
    <p @click="loadVideo" :data-id="result.id">{{result.title}}</p>
    <p>by {{result.channelName}}</p>
    <img :src="result.thumbnails.small.url" :alt="result.title">
  </div>
  <div class="result-stats">
    <div class="likes"><i class="fa fa-thumbs-up" aria-hidden="true"></i>
      <span>{{result.likes}}</span>
    </div>
    <div class="dislikes"><i class="fa fa-thumbs-down" aria-hidden="true"></i>
    <span>{{result.dislikes}}</span></div>
    <div class="duration"><i class="fa fa-clock-o" aria-hidden="true"></i>
    <span>{{result.duration}}</span></div>
  </div>

</div>
      
  
</template>

<script>
import store from "../store";
export default {
  name: "resultCard",
  props: ["result"],
  methods: {
    loadVideo(event) {
      const videoId = event.target.dataset["id"];
      store.dispatch("loadVideo", videoId, Math.floor(window.outerWidth * 0.8));
    }
  }
};
</script>

<style lang="scss" scoped>
.result-header {
  margin-bottom: 10px;
  p {
    margin-top: 0;
    margin-bottom: 10px;
  }
  p:first-child {
    font-size: 20px;
    text-decoration: underline;
    cursor: pointer;
    display: inline-block;
    margin-right: 10px;
  }
  p:last-child {
    font-size: 16px;
    line-height: normal;
  }
.result-stats {
  display: flex;
  flex-direction: row;
  div {
    display: flex;
    margin-right: 15px;
  }
  span {
    margin-left: 15px;
  }
}

}

</style>
