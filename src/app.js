//import anime from 'animejs'
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init({
  delay: 500,
});

var player1;
var player2;

window.onYouTubeIframeAPIReady = function() {
  player1 = new YT.Player('movie1', {
    videoId: 'jufay6azJNQ',
    playerVars: {
      'mute': 1,
    },
  });

  player2 = new YT.Player('movie2', {
    videoId: 'k_dti40s_HY',
    playerVars: {
      'mute': 1,
    },
  });
};


console.log("これはappのコードです。");