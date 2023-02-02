import pageLoad from './pageLoad';
import generateHome from './generateHome';
import generateMenu from './generateMenu';
import generateContact from './generateContact';

pageLoad();

function clearContent(){
    content.innerHTML = '';
}

const content = document.querySelector('#content');
const btnMenu = document.querySelector('#btnMenu');
const btnHome = document.querySelector('#btnHome');
const btnContact = document.querySelector('#btnContact');

btnMenu.addEventListener('click', () => {
    clearContent();
    generateMenu();
});

btnHome.addEventListener('click', () => {
    clearContent();
    generateHome();
});

btnContact.addEventListener('click', () => {
    clearContent();
    generateContact();
});


console.log('Hey im working');