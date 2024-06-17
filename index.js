let timer;
let elapsedTime = 0;
let running = false;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function formatTime(time) {
    const hour = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) /60);
    const seconds = time % 60;
    return `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateTimer() {
    if (running) {
        elapsedTime += 1;
        timerDisplay.textContent = formatTime(elapsedTime);
    }
}

startButton.addEventListener('click', () => {
    if (!running) {
        running = true;
        timer = setInterval(updateTimer, 1000);
    }
});

stopButton.addEventListener('click', () => {
    if (running) {
        running = false;
        clearInterval(timer);
    }
});

resetButton.addEventListener('click', () => {
    running = false;
    clearInterval(timer);
    elapsedTime = 0;
    timerDisplay.textContent = formatTime(elapsedTime);
});
