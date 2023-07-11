const pomodoroButton = document.querySelector('.pomodoro-button');
const shortBreakButton = document.querySelector('.sb-button');
const longBreakButton = document.querySelector('.lb-button');
const focusTime = document.querySelector('.focus-time');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const resetButton = document.querySelector('.reset-button');

shortBreakButton.addEventListener('click', () => {
    focusTime.classList.add('short-break');
    focusTime.classList.remove('long-break');
    minutes.textContent = 5;
})

longBreakButton.addEventListener('click', () => {
    focusTime.classList.add('long-break');
    focusTime.classList.remove('short-break');
    minutes.textContent = 15;
})

pomodoroButton.addEventListener('click', () => {
    focusTime.classList.remove('long-break');
    focusTime.classList.remove('short-break');
    minutes.textContent = 25;
})

startButton.addEventListener('click', () => {
    setInterval(subtractTime, 1000)
})

function subtractTime() {
    if (minutes > 0) {
        minutes.value--;
    }
}