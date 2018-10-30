const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function updateShadow(e) {
    const walk = 500;
    const height = this.offsetHeight;
    const width = this.offsetWidth;
    let x = e.offsetX;
    let y = e.offsetY;
    if (this != e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }

    const xWalk = walk * ((x / width) - 0.5);
    const yWalk = walk * ((y / height) - 0.5);

    setShadow(xWalk, yWalk);
}

function setShadow(x, y) {
    const shadow1 = `${x}px ${y}px 0 rgba(255,0,255,0.8)`
    const shadow2 = `${-x}px ${-y}px 0 rgba(0,255,0,0.8)`
    const shadow3 = `${y}px ${x}px 0 rgba(0,0,255,0.8)`
    const shadow4 = `${-y}px ${-x}px 0 rgba(0,255,255,0.8)`
    const textShadow = [shadow1, shadow2, shadow3, shadow4].join(',');
    text.style.textShadow = textShadow;
}

hero.addEventListener('mousemove', updateShadow);
