const video = document.querySelector('.viewer');
const playButton = document.querySelector('.toggle');
const volumeControl = document.querySelector('[name="volume"]');
const playbackRateControl = document.querySelector('[name="playbackRate"]');
const progressBar = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const jumpBackButton = document.querySelector('#jump-back');
const jumpForwardButton = document.querySelector('#jump-forward');

function setVolume(e) {
    const volume = e.target.value;
    video.volume = volume;
}
function setPlaybackRate(e) {
    const rate = e.target.value;
    video.playbackRate = rate;
}
function togglePlayback() {
    if (!video.paused) {
        video.pause();
        playButton.textContent = "►"
    } else {
        video.play();
        playButton.textContent = "❚❚"
    }
}
function updateProgressBar(){
    let progress = video.currentTime / video.duration;
    let progressPercentage = (progress * 100).toString() + '%';
    progressFilled.style.flexBasis = progressPercentage;
}
function skipTo(e) {
    video.currentTime = (e.offsetX /this.offsetWidth) * video.duration;
}
function jumpPlayback(e) {
    video.currentTime += +e.target.dataset.skip;
}
playButton.addEventListener('click', togglePlayback);
volumeControl.addEventListener('input', setVolume);
playbackRateControl.addEventListener('input', setPlaybackRate);
progressBar.addEventListener('click', skipTo);
jumpBackButton.addEventListener('click', jumpPlayback);
jumpForwardButton.addEventListener('click', jumpPlayback);
video.addEventListener('timeupdate', updateProgressBar);

// start playback on load
togglePlayback();
