const btn = document.querySelector('#btn');
const count = document.querySelector('#count');
let x = 0;
btn.addEventListener('click', function(){
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