const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const resetButton = document.querySelector('#reset');
const storage = window.localStorage;
const items = JSON.parse(storage.getItem('items')) || [];

function clearList() {
    while (itemsList.firstChild) {
        itemsList.removeChild(itemsList.firstChild);
    }
}

function createNewListItem(index, text, done=false) {
    let newItem = document.createElement('li');
    let label = document.createElement('label');
    label.htmlFor = `${index}_${text}`;
    label.appendChild(document.createTextNode(text));
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `${index}_${text}`;
    if (done) {checkbox.checked = true}
    newItem.appendChild(checkbox);
    newItem.appendChild(label);
    return newItem;
}

function handleClickOnItem(e) {
    if (e.target.type === "checkbox") {
        markDone(e.currentTarget, e.target);
    }
}

function markDone(list, checkbox) {
    let position = Array.from(list.childNodes).indexOf(checkbox.parentNode);
    items[position].done = checkbox.checked;
    updateLocalStorage();
}

function updateList(items) {
    clearList();
    items.forEach(function(item, index) {
        let newItem = createNewListItem(index, item.text, item.done);
        itemsList.appendChild(newItem);
    });
}

function updateLocalStorage() {
    storage.setItem('items', JSON.stringify(items));
}

function storeItem(text, done=false) {
    let newItem = {text, done};
    items.push(newItem);
    updateLocalStorage();
}

function submitNewItem(e) {
    e.preventDefault();
    let itemName = e.target.querySelector('input[name="item"]').value
    storeItem(itemName);
    updateList(items);
    addItems.reset();
}

function resetItems() {
    storage.setItem('items', JSON.stringify([]));
    addItems.reset();
    clearList();
    while (items.length > 0) {
        items.pop();
    }
}

itemsList.addEventListener('input', handleClickOnItem);
addItems.addEventListener('submit', submitNewItem);
resetButton.addEventListener('click', resetItems);
updateList(items);
