let shiftIsDown = false;
document.addEventListener('keydown', function(e) {
    if (e.keyCode === 16) {
        shiftIsDown = true;
    }
});
document.addEventListener('keyup', function(e) {
    if (e.keyCode === 16) {
        shiftIsDown = false;
    }
});

const checkboxes = Array.from(document.querySelectorAll('.item input'));

function checkAdditionalRows(e) {
    let thisIndex = checkboxes.indexOf(e.target);
    let checkFrom = 0;
    for (let i = thisIndex - 1; i >= 0; i--) {
        if (checkboxes[i].checked) {
            checkFrom = i;
            break;
        }
    }
    const extraCheckboxes = [];
    if (e.target.checked && shiftIsDown) {
        extraCheckboxes.push(...checkboxes.slice(checkFrom, thisIndex));
    }
    extraCheckboxes.forEach(checkbox => checkbox.checked = true);
}

Array.from(checkboxes).forEach(function(checkbox) {
    checkbox.addEventListener('click', checkAdditionalRows);
});

