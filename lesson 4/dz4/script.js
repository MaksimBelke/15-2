let num = 0;
let increment = document.querySelector('.inc');
let result = document.querySelector('.result');
let decrement = document.querySelector('.dec');

increment.onclick = () => {
    num--;
    result.innerText = num;
}
decrement.onclick = () => {
    num++;
    result.innerText = num;
}
