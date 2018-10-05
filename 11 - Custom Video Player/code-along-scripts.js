const video = document.querySelector('.viewer');
const playButton = document.querySelector('.toggle');
const rangeInputs = document.querySelectorAll('input[type="range"]');
const progressBar = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const jumpButtons = document.querySelectorAll('[data-skip]');

function handleRangeInput() {
    video[this.name] = this.value;
}
function updateButton() {
    const icon = video.paused? '►' : '❚❚';
    playButton.textContent = icon;
}
function togglePlayback() {
    if (!video.paused) {
        video.pause();
    } else {
        video.play();
    }
}
function updateProgressBar(){
    let progress = video.currentTime / video.duration;
    let progressPercentage = (progress * 100).toString() + '%';
    progressFilled.style.flexBasis = progressPercentage;
}
function scrub(e) {
    console.log("click: " + e.offsetX);
    console.log("total: " + e.target.offsetWidth);
    video.currentTime = (e.offsetX / this.offsetWidth) * video.duration;
}
function jumpPlayback() {
    video.currentTime += +this.dataset.skip;
}
playButton.addEventListener('click', togglePlayback);
rangeInputs.forEach(input => input.addEventListener('input', handleRangeInput));
jumpButtons.forEach(button => button.addEventListener('click', jumpPlayback));

video.addEventListener('click', togglePlayback);
video.addEventListener('timeupdate', updateProgressBar);
video.addEventListener('pause', updateButton);
video.addEventListener('play', updateButton);

progressBar.addEventListener('click', scrub);

// start playback on load
togglePlayback();
