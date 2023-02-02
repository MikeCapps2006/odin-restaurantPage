function generateContact () {
    const content = document.querySelector('#content');
    const section = document.createElement('div');

    const head = document.createElement('h1');
    head.textContent = 'Contact Me';
    section.appendChild(head);

    const splash = document.createElement('div');
    splash.classList.add('splash-contact');

    const info = document.createElement('p');
    info.innerHTML = "Email: <a href='#'>michaelcapps1772@yahoo.com</a>";
    splash.appendChild(info);

    const info2 = document.createElement('p');
    info2.innerHTML = 'Phone: <span class="phNumber">843-798-0019</span>';
    splash.appendChild(info2);

    section.appendChild(splash);

    

    content.appendChild(section);
}

export default generateContact;