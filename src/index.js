import {buildHomepage} from './homePage';
import {buildContact} from './contactPage';
import {buildMenu} from './menu';

const tabone = document.getElementById('tabone');
const tabtwo = document.getElementById('tabtwo');
const tabthree = document.getElementById('tabthree');

buildHomepage();

tabone.addEventListener('click', () => {
    buildHomepage();
});

tabtwo.addEventListener('click', () => {
    buildMenu();
})

tabthree.addEventListener('click', () => {
    buildContact();
})