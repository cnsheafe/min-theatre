let player;

/**
 * 
 * @param {*} context - Vuex context for calling mutations
 * @param {*} payload - Consists of two properties: videoId and width
 */
export function loadVideo(context, videoId) {
  try {
    player.destroy()
  } catch (e) {
    // Player is unitialized. GOTO finally.
  } finally {
    player = new YT.Player("player", {
      videoId: videoId,
      events: {
        "onReady": event => {
          event.target.playVideo();
          context.commit("showNewVideo", videoId);
        },
        "onStateChange": event => {}
      }
    });
    return player;
  }
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
