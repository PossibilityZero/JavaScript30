const checkboxes = Array.from(document.querySelectorAll('.inbox input[type="checkbox"]'));

let lastCheckedIndex;
function checkBetween(index1, index2) {
    if (index1 < index2) {
        checkboxes.slice(index1, index2+1).forEach(checkbox => checkbox.checked = true);
    } else {
        checkboxes.slice(index2, index1+1).forEach(checkbox => checkbox.checked = true);
    }
}
function handleCheck(e) {
    // Check if shift is down, the user is checking the box,
    // and that a box has been checked before
    if (e.shiftKey && this.checked && lastCheckedIndex) {
        checkBetween(checkboxes.indexOf(this), lastCheckedIndex);
    }
    lastCheckedIndex = checkboxes.indexOf(e.target);
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
