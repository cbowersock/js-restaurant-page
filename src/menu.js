const buildItem = (name, desc, pic) => {
    const item = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const image = document.createElement('img');

    h2.innerText = name;
    p.innerText = desc;
    image.setAttribute('src', `./images/${pic}.jpg`);
    image.setAttribute('class', 'menuItems');
    item.setAttribute('class', 'menuEntries')

    item.appendChild(h2);
    item.appendChild(image);
    item.appendChild(p);

    return item;
}

const buildMenu = () => {
    const content = document.getElementById('content2');
    const itemDiv = document.createElement('div');
    const h1 = document.createElement('h1');
    content.innerHTML = "";
    const varietyPlatter = buildItem('Variety Platter', 'A delicious sampling of jungle delights. $15.99', 'variety');
    const italian = buildItem('Italian Sampler', 'Yummy Authentic food from Italia. $22.99', 'italian');
    const chips = buildItem('Forest Chips', 'Delightful chips from the forest. $6.75', 'hand');

    itemDiv.appendChild(varietyPlatter);
    itemDiv.appendChild(italian);
    itemDiv.appendChild(chips);
    
    h1.innerText = 'This is our delicious menu! Y U M';
    content.appendChild(h1);
    content.appendChild(itemDiv);
}

export {buildMenu};