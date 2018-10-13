const keyHistory = []
function handleInput(e) {
    keyHistory.push(e.key);
    if (keyHistory.length > 6) {
        keyHistory.shift();
    }
    console.log(e.key);
    console.log(keyHistory);
}

document.addEventListener('keyup', handleInput);
