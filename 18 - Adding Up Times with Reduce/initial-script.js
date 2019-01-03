const videos = Array.from(document.querySelectorAll(".videos li"));
const durations = videos.map(element => element.dataset.time);

function convertToSeconds(duration) {
    let seconds = 0;
    hms = duration.split(':');
    for (let i = 1; i <= hms.length; i++) {
        seconds += +hms[hms.length - i] * (60 ** (i - 1));
    }
    return seconds;
}

function convertToHMS(seconds) {
    const hours = Math.floor(seconds / (60 * 60));
    const mins = Math.floor((seconds - hours * 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function addDuration(total, additional) {
    return convertToHMS(convertToSeconds(total) + convertToSeconds(additional));
}

const totalDuration = durations.reduce(addDuration);

console.log(totalDuration);
