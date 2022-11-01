/* Get DOM Elements */
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const resetBtn = document.getElementById('resetBtn');
const redDoll = document.getElementById('red-doll');
const blueDoll = document.getElementById('blue-doll');
const greenDoll = document.getElementById('green-doll');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

/* State */
let wins = 0;
let total = 0;

/* Events */
// for some reason only button 1 works. Tried copying code below for buttons 2 & 3.
// also tried adding event listeners alone for other buttons. Also didn't work.
button1.addEventListener('click', () => {
    total++;
    resetBabies();
    const babyLocation = Math.ceil(Math.random() * 3);
    if (babyLocation === 1) {
        wins++;
        redDoll.classList.add('reveal');
    } else if (babyLocation === 2) {
        blueDoll.classList.add('reveal');
    } else {
        greenDoll.classList.add('reveal');
    }
    displayResults();
});

function resetBabies() {
    redDoll.classList.remove('reveal');
    blueDoll.classList.remove('reveal');
    greenDoll.classList.remove('reveal');
}

/* Display Functions */
function displayResults() {
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;
}

resetBtn.addEventListener('click', () => {
    wins = 0;
    total = 0;
    resetBabies();
    displayResults();
});
