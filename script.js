const calabreso = document.querySelector('.calabreso');
const pipe = document.querySelector('.pipe');

const performJump = () => {
    if(calabreso.classList.contains('jump')) {
        return
    }
    calabreso.classList.add('jump')
}

calabreso.addEventListener('animationend', () => {
    calabreso.classList.remove('jump')
})

document.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
        event.preventDefault();
        performJump();
    }
});

document.addEventListener('touchstart', () => {
    performJump();
});

const loop = setInterval(function() {
    const pipePosition = pipe.offsetLeft;


    if (pipePosition <= 175) {
        pipe.style.animation = 'none';
        pipe.style.left = pipePosition + 'px';
    }
}, 10) 