import Vue from 'vue';
import Router from 'vue-router';
import App from "@/components/App";
import SearchResults from "@/components/SearchResults";
import VideoPlayer  from "@/components/VideoPlayer";

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'App',
      component: App,
      children: [
        {
        path: "results",
        component: SearchResults, 
        },
        {
          path: "video",
          component: VideoPlayer
        }
      ]
    },
  ],
  mode: "history"
});
