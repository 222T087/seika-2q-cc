import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  delay: 500,
});
var player1;

window.onYouTubeIframeAPIReady = function () {
  player1 = new YT.Player('movie1', {
    videoId: 'S_msdXWYQ38',
    playerVars: {
      mute: 1,
    },
  });
};
