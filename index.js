const stopBtn = document.querySelector('#stop');
const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('#reset');

const ring = document.querySelector('.timer__progress-ring');


let $counter = document.querySelector('#time');
let counter = 0;

let flag;

function padNum(num) {
    return num.toString().padStart(2,0);
}

function printTime(counter){
    $counter.innerHTML = `${padNum(Math.floor(counter/60))}:${padNum(counter%60)}`
}

function printRing(counter){
    let i=counter%60;
    ring.style.strokeDasharray = `${i*10.46666} ${628-i*10.46666}`;
    ring.style.stroke = `rgb(149,199,210,${1-i*0.0155})`;
}

function resetTimer(){
    $counter.innerHTML = '00:00';
    ring.style.strokeDasharray = `none`;
    ring.style.stroke = `rgb(149,199,210,1)`;
}

function setNewTime() {
    printTime(counter);
    printRing(counter);
    counter++;
}

setTimeout(function timer() {
    if(flag) {
        setNewTime();
    } 
    setTimeout(timer, 1000);
}, 1000);

startBtn.addEventListener('click', () => {
    flag = true;
});

resetBtn.addEventListener('click', () => {
    flag = false
    counter = 0;
    resetTimer();
 });

stopBtn.addEventListener('click', () => {
    flag = false;
});
