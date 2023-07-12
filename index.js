const pomodoroButton = document.querySelector('.pomodoro-button');
const shortBreakButton = document.querySelector('.sb-button');
const longBreakButton = document.querySelector('.lb-button');
const focusTime = document.querySelector('.focus-time');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const resetButton = document.querySelector('.reset-button');
const minutesInput = document.querySelector('.input-minutes');
const secondsInput = document.querySelector('.input-seconds');

const beginMinutes = minutesInput.value = 25;

shortBreakButton.addEventListener('click', () => {
    focusTime.classList.add('short-break');
    focusTime.classList.remove('long-break');
    const hardMinutes = minutes.textContent = 5;
    minutesInput.value = hardMinutes;
})

longBreakButton.addEventListener('click', () => {
    focusTime.classList.add('long-break');
    focusTime.classList.remove('short-break');
    const hardMinutes = minutes.textContent = 15;
    minutesInput.value = hardMinutes;
})

pomodoroButton.addEventListener('click', () => {
    focusTime.classList.remove('long-break');
    focusTime.classList.remove('short-break');
    const hardMinutes =  minutes.textContent = 25;
    minutesInput.value = hardMinutes;
})

// startButton.addEventListener('click', () => {
//     setInterval(subtractTime, 1000)
// })

// function subtractTime() {
//     if (minutes > 0) {
//         minutes.value--;
//     }
// }