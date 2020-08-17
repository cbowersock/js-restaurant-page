const buildContact = () => {
    const content = document.getElementById('content3');
    content.innerHTML = "";
    const h1 = document.createElement('h1');
    const image = document.createElement('img');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    image.setAttribute("src", "./images/contactus.jpg");
    image.setAttribute("id", "logo");
    h1.innerText = 'This is our contact us page';
    h3.innerText = 'Our Phone Number: 1-800-RAINFOREST-CAFE';
    p.innerText = 'Our Website: You are on it';
    
    content.appendChild(h1);
    content.appendChild(image);
    content.appendChild(h3);
    content.appendChild(p);
}

export {buildContact};