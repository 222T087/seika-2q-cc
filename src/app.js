import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 800,
  once: true,
});
var player1;
var player2;
var Player3;

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

  Player3 = new YT.Player('movie3', {
    videoId: 'tEqA0iL52dM',
    playerVars: {
      autoplay: 0,
      mute: 1,
      controls: 1,
      rel: 0,
      modestbranding: 1,
    },
  });
};

const linksdata = [
  {
    href: 'https://x.com/Shiira_P',
    label: 'X',
    iconClass: 'fa-brands fa-x-twitter',
  },
  {
    href: 'https://www.instagram.com/shiira_favo/',
    label: 'Instagram',
    iconClass: 'fa-brands fa-instagram',
  },
  {
    href: 'https://www.youtube.com/@shiira_P',
    label: 'YouTube',
    iconClass: 'fa-brands fa-youtube',
  },
  {
    href: 'https://www.nicovideo.jp/user/129544334',
    label: 'Niconico',
    iconClass: 'fa-solid fa-n',
  },
];

const linkContainer = document.getElementById('links-container');

linksdata.forEach((data) => {
  const link = document.createElement('a');
  link.href = data.href;
  link.target = '_blank';
  link.setAttribute('aria-label', data.label);
  const icon = document.createElement('i');
  icon.className = data.iconClass;
  link.appendChild(icon);
  linkContainer.appendChild(link);
});
