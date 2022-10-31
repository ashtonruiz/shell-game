/* Get DOM Elements */
const button1 = document.getElementById('button-1');
const redDoll = document.getElementById('#red-doll');
const blueDoll = document.getElementById('#blue-doll');
const greenDoll = document.getElementById('#green-greenDoll');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

/* State */
let wins = 0;
let total = 0;

/* Events */
button1.addEventListener('click', () => {
    total++;
    resetBabies();

    const babyLocation = Math.ceil(Math.random() * 3);

    if (babyLocation) === 1) {
        wins++;
        redDoll.classList.add('reveal');
    } else if (babyLocation === 2) {
        blueDoll.classList.add(reveal);
    } else {
        greenDoll.classList.add('reveal');
    }
    displayResults();
});

function resetBabies() {
    redDoll.classList.remove('reveal');
    blueDoll.classList.remove('reveal');
    greenDoll.classList.remove('remove');
}

/* Display Functions */
function displayResults() {
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;
}

// (don't forget to call any display functions you want to run on page load!)
