const content = document.getElementById('content');
const heading = "Mike's Italian Ice";
const headline = 'This is the best Italian Ice you will ever try';
const img = './ice1.jpg';

function generateHome() {
    content.innerHTML = '';
    const splashImg = document.createElement('img');
    splashImg.src = img;
    splashImg.style.width = '50%';
    const div = createElement('div');
    const head = createElement('h1');
    head.innerHTML = heading;
    const review = createElement('h2');
    review.innerHTML = headline;
    div.appendChild(head);
    div.appendChild(splashImg);
    div.appendChild(review);
    content.appendChild(div);
    
}

function createElement(element){
    const el = document.createElement(element);
    return el;
}

export default generateHome;