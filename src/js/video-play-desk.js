const videoRef = document.querySelector('#myVideo');
const playBtnDesktopRef = document.querySelector('.play-btn__img-desktop');

// Desk
playBtnDesktopRef.addEventListener('click', handlePlayButton, false);
// playVideo();

async function playVideo() {
  try {
    await videoRef.play();
    playBtnDesktopRef.classList.add('playing');
    playBtnDesktopRef.classList.add('is-hidden');
    videoRef.controls = 'controls';
  } catch (err) {
    playBtnDesktopRef.classList.remove('playing');
  }
}

function handlePlayButton() {
  if (videoRef.paused) {
    playVideo();
  } else {
    videoRef.pause();
    playBtnDesktopRef.classList.remove('playing');
  }
}
