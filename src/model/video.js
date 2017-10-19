export function loadVideo(context, videoId, playerWidth) {
  let player = new YT.Player("player", {
    videoId: videoId,
    width: `${playerWidth}`,
    height: `${playerWidth * 9/16}`,
    events: {
      "onReady": event => event.target.playVideo(),
      "onStateChange": event => {}
    }
  });
  context.commit("showNewVideo", videoId);
}

export function showNewVideo(state, videoId) {
  state.currentVideo = {
    show: true,
    id: videoId
  }
}