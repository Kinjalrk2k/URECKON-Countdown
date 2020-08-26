var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    videoId: "oxICyKA-TxI",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerStateChange(event) {
  event.target.mute();
  event.target.playVideo();
}

function onPlayerReady(event) {
  event.target.mute();
  event.target.playVideo();
}

// setInterval(function () {
//   $("#overlay").toggleClass("overlay-change")
// }, 500);
