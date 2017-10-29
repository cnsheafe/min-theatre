<template>
<div>
  <div class="result-header">
    <p @click="loadVideo" :data-id="result.id">{{result.title}}</p>
    <p>by {{result.channelName}}</p>
    <img :src="result.thumbnails.medium.url" :alt="result.title"
      @click="loadVideo" 
      :data-id="result.id"
    >
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
      store.dispatch("loadVideo", event.target.dataset.id);
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
  p:first-child:hover {
    color: #F2FCAE;
  }
  p:last-child {
    font-size: 16px;
    line-height: normal;
  }
}

img {
  cursor: pointer;
}

.result-stats {
  display: grid;
  grid-template-columns: 33fr 33fr 33fr;
  justify-items: center;
  i {
    margin-right: 5px;
  }
}
</style>
