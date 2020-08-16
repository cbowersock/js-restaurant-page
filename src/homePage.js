const buildHomepage = () => {
    const content = document.getElementById('content');
    const h1 = document.createElement('h1');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    h1.innerText = 'Welcome to Rainforest Cafe';
    h3.innerText = 'Its a wild place to Shop and Eat';
    p.innerText = 'They can Hurt You Now';
    content.appendChild(h1);
    content.appendChild(h3);
    content.appendChild(p);
}

export {buildHomepage};