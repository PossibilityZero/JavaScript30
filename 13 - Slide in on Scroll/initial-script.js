function getSlideBoundaries(image) {
    // slide in or out when 40 percent of the image is visible
    const highest = image.y - window.innerHeight + image.height * 0.4;
    const lowest = image.y + image.height * 0.6;
    return {highest, lowest}
}

function checkSlide(e) {
    sliderImages.forEach(function(image) {
        const bounds = getSlideBoundaries(image);
        const position = this.scrollY;
        if (position > bounds.highest && position < bounds.lowest) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

const sliderImages = document.querySelectorAll('.slide-in');
window.addEventListener('scroll', debounce(checkSlide));
