function generateMenu () {

    const content = document.querySelector('#content');
    const section = document.createElement('div');

    const head = document.createElement('h1');
    head.textContent = 'Menu';
    section.appendChild(head);

    const splash = document.createElement('div');
    splash.classList.add('splash-contact');

    const info = document.createElement('p');
    info.textContent = 'This is where the menu goes';
    splash.appendChild(info);

    section.appendChild(splash);

    content.appendChild(section);


    console.log('from generateMenu');
}

export default generateMenu;