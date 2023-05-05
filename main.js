const btn = document.querySelector('#btn');
const count = document.querySelector('#count');
let x = 0;
btn.addEventListener('click', () => {
    x++;
    count.innerText = x;
    localStorage.setItem('x', x);
})
x = localStorage.getItem('x');
if (x == null) {
    x = 0;
} else {
    x = localStorage.getItem('x');
}
count.innerText = x;
const musicbtn = document.querySelector('#musicbtn');
const music = document.querySelector('#music');
let musicStatus = true, shopStatus = false, upStatus = false;
musicbtn.addEventListener('click', () => {
    if (musicStatus) {
        music.pause();
        musicStatus = !musicStatus;
        musicbtn.setAttribute('src','Play.svg');
    } else {
        music.play();
        musicStatus = !musicStatus;
        musicbtn.setAttribute('src','Pause.svg');
    }
})
const sup = document.querySelector('#sup');
sup.addEventListener('click', () => {
    alert("Sorry, it's not working yet");
})
const up = document.querySelector('#up');
const upmenu = document.querySelector('#upmenu');
const shop = document.querySelector('#shop');
const shopmenu = document.querySelector('#shopmenu');
up.addEventListener('click', () => {
    if (upStatus) {
        upmenu.classList.add('none');
        upStatus = !upStatus;
    } else if (shopStatus) {
        shopmenu.classList.add('none');
        shopStatus = !shopStatus;
        upmenu.classList.remove('none');
        upStatus = !upStatus;
    } else {
        upmenu.classList.remove('none');
        upStatus = !upStatus;
    }
})
shop.addEventListener('click', () => {
    if (shopStatus) {
        shopmenu.classList.add('none');
        shopStatus = !shopStatus;
    } else if (upStatus) {
        upmenu.classList.add('none');
        upStatus = !upStatus;
        shopmenu.classList.remove('none');
        shopStatus = !shopStatus;
    } else {
        shopmenu.classList.remove('none');
        shopStatus = !shopStatus;
    }
})