const pomodoroButton = document.querySelector('.pomodoro-button');
const shortBreakButton = document.querySelector('.sb-button');
const longBreakButton = document.querySelector('.lb-button');
const focusTime = document.querySelector('.focus-time');
const minutesOnDisplay = document.querySelector('.minutes');
const secondsOnDisplay= document.querySelector('.seconds');
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const resetButton = document.querySelector('.reset-button');
const setButton = document.querySelector('.set-button')
const minutesInput = document.querySelector('.input-minutes');
// const secondsInput = document.querySelector('.input-seconds');

let timer;
let totalSeconds = 1500;
// let initialSeconds = 1500;
// let totalSeconds = initialSeconds;

function startTimer() {
    timer = setInterval(() => {
      totalSeconds--;
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = totalSeconds % 60;

      minutesOnDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
      secondsOnDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;

      if (totalSeconds === 0) {
        clearInterval(timer);
        alert('Время вышло, отдохните!');
      }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    totalSeconds = 1500;
    minutesOnDisplay.textContent = '25';
    secondsOnDisplay.textContent = '00';
}

// function resetTimer() {
//     clearInterval(timer);
//     if (!shortBreakButton.disabled && !longBreakButton.disabled) {
//       setTimer(25);
//     } else if (!longBreakButton.disabled && !pomodoroButton.disabled) {
//       setTimer(15);
//     } else {
//       setTimer(5);
//     }

//     // return 
// }


function setTimer(time) {
    clearInterval(timer);
    totalSeconds = time * 60;
    minutesOnDisplay.textContent = time < 10 ? '0' + time : time;
    secondsOnDisplay.textContent = '00';
}

function setUserTimer() {
    let minutes = parseInt(minutesInput.value, 10);
    if (isNaN(minutes) || minutes < 1 || minutes > 60) {
        alert('Введите секунды от 1 до 60');
    } else {
        setTimer(minutes);
        minutesInput.value = '';
    }
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

pomodoroButton.addEventListener('click', () => {
    setTimer(25);
    focusTime.style.backgroundColor = '#BA4949';
})

shortBreakButton.addEventListener('click', () =>  {
    setTimer(5);
    focusTime.style.backgroundColor = '#38858A';
});

longBreakButton.addEventListener('click', () => {
    setTimer(15);
    focusTime.style.backgroundColor = '#397097';
});

setButton.addEventListener('click', setUserTimer);


// const beginMinutes = minutesInput.value = 25;

// shortBreakButton.addEventListener('click', () => {
//     focusTime.classList.add('short-break');
//     focusTime.classList.remove('long-break');
//     const hardMinutes = minutes.textContent = 5;
//     minutesInput.value = hardMinutes;
// })

// longBreakButton.addEventListener('click', () => {
//     focusTime.classList.add('long-break');
//     focusTime.classList.remove('short-break');
//     const hardMinutes = minutes.textContent = 15;
//     minutesInput.value = hardMinutes;
// })

// pomodoroButton.addEventListener('click', () => {
//     focusTime.classList.remove('long-break');
//     focusTime.classList.remove('short-break');
//     const hardMinutes =  minutes.textContent = 25;
//     minutesInput.value = hardMinutes;
// })

// startButton.addEventListener('click', () => {
//     setInterval(subtractTime, 1000)
// })

// function subtractTime() {
//     if (minutes > 0) {
//         minutes.value--;
//     }
// }