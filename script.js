// Get video and control elements
const video = document.getElementById('player__video');
const playButton = document.getElementById('togglePlay');
const rewindButton = document.getElementById('rewind');
const fastForwardButton = document.getElementById('fastForward');
const progressBar = document.getElementById('progressBar');
const progressFilled = document.getElementById('progressFilled');
const volumeControl = document.getElementById('volume');
const playbackSpeedControl = document.getElementById('playbackSpeed');
const speedLabel = document.getElementById('speedLabel');

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
