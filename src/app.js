import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  delay: 500,
});
var player1;
var player2;

window.onYouTubeIframeAPIReady = function () {
  player1 = new YT.Player('movie1', {
    videoId: 'S_msdXWYQ38',
    playerVars: {
      autoplay: 0,
      mute: 1,
      controls: 1,
      rel: 0,
      modestbranding: 1,
    },
  });

  player2 = new YT.Player('movie2', {
    videoId: 'GyMj5K4g0H4',
    playerVars: {
      autoplay: 0,
      mute: 1,
      controls: 1,
      rel: 0,
      modestbranding: 1,
    },
  });
};
