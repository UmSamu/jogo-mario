const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 750)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition > 0 && pipePosition <= 120 && marioPosition < 80) {  
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
    }
},10)

document.addEventListener('keydown', jump);