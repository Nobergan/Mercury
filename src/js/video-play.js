// const videoRef = document.querySelector('#myVideo');
// const playBtnRef = document.querySelector('.play-btn__img');
// const playBtnDesktopRef = document.querySelector('.play-btn__img-desktop');

// playBtnRef.addEventListener('click', playVid);
// playBtnDesktopRef.addEventListener('click', playVidDesktop);

// function playVidDesktop() {
//   videoRef.play();
//   playBtnDesktopRef.classList.add('is-hidden');
//   videoRef.controls = 'controls';
// }

// function playVid() {
//   videoRef.play();
//   playBtnRef.classList.add('is-hidden');
//   videoRef.controls = 'controls';
// }

const videoRef = document.querySelector('#myVideo');

// Mob
const playBtnRef = document.querySelector('.play-btn__img');

playBtnRef.addEventListener('click', handlePlayButtonMob, false);
// playVideoMob();

async function playVideoMob() {
  try {
    await videoRef.play();
    playBtnRef.classList.add('is-hidden');
    videoRef.controls = 'controls';
  } catch (err) {
    playBtnRef.classList.remove('playing');
  }
}

function handlePlayButtonMob() {
  if (videoRef.paused) {
    playVideoMob();
  } else {
    videoRef.pause();
  }
}

// Desk
const playBtnDesktopRef = document.querySelector('.play-btn__img-desktop');

playBtnDesktopRef.addEventListener('click', handlePlayButton, false);
// playVideo();

async function playVideo() {
  try {
    await videoRef.play();
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
  }
}
