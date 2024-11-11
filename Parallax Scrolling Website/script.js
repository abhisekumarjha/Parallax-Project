let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let audio = document.querySelector('audio');
let isPlaying = false;

let body = document.querySelector('body');




window.addEventListener('scroll', function () {
    let value = window.scrollY;

    text.style.marginTop = (value * 2.5) + 'px';
    text.style.marginTop = (value * 2.5) + 'px';
    leaf.style.top = (value * -1.5) + 'px';
    leaf.style.left = (value * 1.5) + 'px';
    hill5.style.left = (value * 1.5) + 'px';
    hill4.style.left = (value * -1.5) + 'px';
    hill1.style.top = (value * 1) + 'px';

    audio.play();
})

setInterval(() => {
    let color = ("#" + (Math.floor(Math.random() * 1000000)));
    text.style.color = color;
    body.style.backgroundColor = color;
}, 2500);


