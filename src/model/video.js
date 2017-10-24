let player;

export function loadVideo(context, videoId) {
  player = new YT.Player("player", {
    videoId: videoId,
    width: `600`,
    height: `${600 * 9/16}`,
    events: {
      "onReady": event => {
        event.target.playVideo();
        context.commit("showNewVideo", videoId);
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