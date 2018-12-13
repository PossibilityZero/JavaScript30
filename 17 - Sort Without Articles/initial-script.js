const articles = ['A', 'An', 'The'];

function populateListWithItems(list, items) {
    for (let i = 0; i < items.length; i++) {
        let band = document.createElement('li');
        band.textContent = items[i];
        list.appendChild(band);
    }
}

function compareWithoutArticles(title1, title2) {
    reducer = function(acc, word) {
        if (articles.includes(word)){
            return acc;
        } else {
            return acc + word;
        }
    }
    noArticles1 = title1.split(' ').reduce(reducer, '');
    noArticles2 = title2.split(' ').reduce(reducer, '');

    if (noArticles1 < noArticles2) {
        return -1;
    } else if (noArticles1 == noArticles2) {
        return 0;
    } else {
        return 1;
    }
}

const bandsList = document.querySelector('#bands');
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

bands.sort(compareWithoutArticles);
populateListWithItems(bandsList, bands);
