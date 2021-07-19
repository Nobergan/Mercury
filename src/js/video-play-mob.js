// // const videoRef = document.querySelector('#myVideo');
// // const playBtnRef = document.querySelector('.play-btn__img');
// // const playBtnDesktopRef = document.querySelector('.play-btn__img-desktop');

// // playBtnRef.addEventListener('click', playVid);
// // playBtnDesktopRef.addEventListener('click', playVidDesktop);

// // function playVidDesktop() {
// //   videoRef.play();
// //   playBtnDesktopRef.classList.add('is-hidden');
// //   videoRef.controls = 'controls';
// // }

// // function playVid() {
// //   videoRef.play();
// //   playBtnRef.classList.add('is-hidden');
// //   videoRef.controls = 'controls';
// // }

// const videoRef = document.querySelector('#myVideo');
// const playBtnRef = document.querySelector('.play-btn__img');

// // Mob
// playBtnRef.addEventListener('click', handlePlayButtonMob, false);
// // playVideoMob();

// async function playVideoMob() {
//   try {
//     await videoRef.play();
//     playBtnRef.classList.add('is-hidden');
//     videoRef.controls = 'controls';
//   } catch (err) {
//     playBtnRef.classList.remove('playing');
//   }
// }

// function handlePlayButtonMob() {
//   if (videoRef.paused) {
//     playVideoMob();
//   } else {
//     videoRef.pause();
//   }
// }
