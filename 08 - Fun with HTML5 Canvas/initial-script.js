function setCanvasSize() {
    const canvas = document.querySelector('canvas#draw');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');

const pen = {
    radiusPhase: 0,
    hue: 0,
    getColor: function() {
        return `hsl(${this.hue}, 100%, 50%)`
    },
    getRadius: function() {
        // oscillate output between 2 and 50
        return 26 + 24 * Math.cos(2* Math.PI * this.radiusPhase / 360);
    },
    updateHue: function() {
        this.hue += 3;
        this.hue %= 360;
    },
    updateRadiusPhase: function() {
        this.radiusPhase += 2;
        this.radiusPhase %= 360;
    },
    updatePen: function() {
        this.updateHue();
        this.updateRadiusPhase();
    },
}

function drawCircle(x, y, radius, color) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
}

function drawOnCanvas(e) {
    if (mouseIsDown) {
        const coords = [e.clientX, e.clientY];
        const color = pen.getColor();
        const radius = pen.getRadius();
        drawCircle(...coords, radius, color);
        pen.updatePen();
    }
}

let mouseIsDown = false;
document.addEventListener('mousedown', () => mouseIsDown = true);
document.addEventListener('mouseup', () => mouseIsDown = false);
canvas.addEventListener('mousemove', drawOnCanvas);
