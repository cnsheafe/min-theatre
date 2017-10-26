let player;

export function loadVideo(context, videoId, width) {
  player = new YT.Player("player", {
    videoId: videoId,
    width: `${width}`,
    height: `${width * 9/16}`,
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