AOS.init();

function scroll() {
    var navbar = document.getnavbarElementsByClassName('')[0];
    if (window.scrollY >= 500)
        navbar.style.backgroundColor = 'transparent!important';
    else {
        navbar.style.backgroundColor = '#343a40!important';
    }
}
const soundBtn = document.querySelector('.play-sound-btn');
let myAudio = document.querySelector('#audio');
soundBtn.addEventListener('click', () => {
    myAudio.play();
})