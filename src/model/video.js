let player;

/**
 * 
 * @param {*} context - Vuex context for calling mutations
 * @param {*} payload - Consists of two properties: videoId and width
 */
export function loadVideo(context, payload) {
  player = new YT.Player("player", {
    videoId: payload.videoId,
    width: `${payload.width}`,
    height: `${payload.width * 9/16}`,
    events: {
      "onReady": event => {
        event.target.playVideo();
        context.commit("showNewVideo", payload.videoId);
      },
      "onStateChange": event => {}
    }
  });
}

export function destroyVideo(context) {
  player.destroy();
  context.commit("clearVideo");
}

export function showNewVideo(state, videoId) {
  state.currentVideo = {
    show: true,
    id: videoId
  }
}

export function clearVideo(state) {
  state.currentVideo = {
    show: false,
    id: null
  }
}