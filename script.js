// Get video and control elements
let video, playButton, rewindButton, fastForwardButton, progressBar, progressFilled, volumeControl, playbackSpeedControl, speedLabel;

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get references to the elements
  video = document.getElementById('video');
  playButton = document.getElementById('togglePlay');
  rewindButton = document.getElementById('rewind');
  fastForwardButton = document.getElementById('fastForward');
  progressBar = document.getElementById('progressBar');
  progressFilled = document.getElementById('progressFilled');
  volumeControl = document.getElementById('volume');
  playbackSpeedControl = document.getElementById('playbackSpeed');
  speedLabel = document.getElementById('speedLabel');

  // Play/Pause Toggle
  playButton.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playButton.textContent = '❚ ❚'; // Pause symbol
    } else {
      video.pause();
      playButton.textContent = '►'; // Play symbol
    }
  });

  // Rewind 10 seconds
  rewindButton.addEventListener('click', () => {
    video.currentTime -= 10;
  });

  // Fast forward 25 seconds
  fastForwardButton.addEventListener('click', () => {
    video.currentTime += 25;
  });

  // Update progress bar
  video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.value = percent;
    progressFilled.style.width = `${percent}%`;
  });

  // Scrub progress bar
  progressBar.addEventListener('input', () => {
    const time = (progressBar.value / 100) * video.duration;
    video.currentTime = time;
  });

  // Update volume
  volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value / 100;
  });

  // Update playback speed
  playbackSpeedControl.addEventListener('input', () => {
    video.playbackRate = playbackSpeedControl.value;
    speedLabel.textContent = `${playbackSpeedControl.value}×`;
  });
});
