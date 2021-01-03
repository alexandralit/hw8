let html = document.querySelector('html');
html.setAttribute('lang', 'en');

let script = document.querySelector('script');

let meta = document.createElement('meta');
meta.setAttribute('charset', 'UTF-8');
document.head.insertBefore(meta, document.head.firstElementChild);

let title = document.createElement('title');
title.innerHTML = 'Choose Your Option';
document.head.insertBefore(title, script);

let link1 = document.createElement('link');
link1.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans&display=swap');
link1.setAttribute('rel', 'stylesheet');
document.head.insertBefore(link1, script);

let link2 = document.createElement('link');
link2.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&display=swap');
link2.setAttribute('rel', 'stylesheet');
document.head.insertBefore(link2, script);


let body = document.body;
body.classList.add('body');

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
h1.classList.add('h1');
body.appendChild(h1);

let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p1.classList.add('p');
body.appendChild(p1);

let block = document.createElement('div');
body.appendChild(block);
block.classList.add('block');

let blockLeft = document.createElement('div');
block.appendChild(blockLeft);
blockLeft.classList.add('blockLeft');

let h2 = document.createElement('h2');
h2.innerHTML = 'Freelancer';
h2.classList.add('h2');
blockLeft.appendChild(h2);

let h3 = document.createElement('h3');
h3.innerHTML = 'Initially designed to';
h3.classList.add('h3');
blockLeft.appendChild(h3);

let p2 = document.createElement('p');
p2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p2.classList.add('p');
blockLeft.appendChild(p2);

let a = document.createElement('a');
a.innerHTML = 'Start here';
a.setAttribute('href', '#');
a.classList.add('a');
blockLeft.appendChild(a);


let blockRight = blockLeft.cloneNode(true);
block.appendChild(blockRight);
blockRight.classList.add('blockRight');
blockRight.classList.remove('blockLeft');

let h2Right = document.querySelectorAll('.h2');
h2Right[1].innerHTML = 'Studio';


let style = document.createElement('style');
style.innerHTML = `
    * {
        padding: 0;
        margin: 0;
    }

    .body {
        background-color: #FFFFFF;
    }

    .h1 {
        font-family: 'Arvo', serif;
        font-weight: normal;
        font-size: 36px;
        line-height: 48px;
        text-align: center;
        color: #212121;
        padding-top: 120px;
        padding-bottom: 10px;
    }

    .p {
        font-family: 'Open Sans', serif;
        font-weight: normal;
        font-size: 14px;
        line-height: 26px;
        color: #9FA3A7;
        text-align: center;
    }

    .block {
        display: flex;
        justify-content: center;
        margin-top: 55px;
        margin-bottom: 140px;
    }

    .blockLeft {
        width: 400px;
        background-color: #FFFFFF;
        padding-bottom: 115px;
        border: 1px solid #E8E9ED;
    }

    .blockRight {
        width: 400px;
        background-color: #8F75BE;
        padding-bottom: 115px;
        border: 1px solid #8F75BE;
    }

    .h2 {
        text-transform: uppercase;
        font-family: 'Montserrat', serif;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 2.4px;
        padding-top: 80px;
    }

    .blockLeft .h2 {
        color: #9FA3A7;
    }

    .blockRight .h2 {
        color: #FFC80A;
    }

    .h3 {
        font-family: 'Arvo', serif;
        font-weight: normal;
        font-size: 36px;
        line-height: 46px;
        text-align: center;
        padding: 20px 95px 25px 95px;
    }

    .blockLeft .h3 {
        color: #212121;
    }

    .blockRight .h3 {
        color: #FFFFFF;
    }

    .block .p {
        font-size: 12px;
        line-height: 22px;
        padding: 0 95px 50px 95px;
    }

    .blockLeft .p {
        color: #9FA3A7;
    }

    .blockRight .p {
        color: #FFFFFF;
    }

    .block .a {
        text-transform: uppercase;
        text-decoration: none;
        padding: 20px 30px;
        font-family: 'Montserrat', serif;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
        border: 3px solid #FFC80A;
        border-radius: 35px;
        margin: 0 115px;
    }

    .blockLeft .a {
        color: #212121;
    }

    .blockRight .a {
        color: #FFFFFF;
    }
`;

document.head.appendChild(style);