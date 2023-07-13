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
const title = document.querySelector('.title');

let timer;
let totalSeconds = 1500;

function startTimer() {
    timer = setInterval(() => {
      totalSeconds--;
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = totalSeconds % 60;

      minutesOnDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
      secondsOnDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;

      if (totalSeconds === 0) {
        clearInterval(timer);
        alert('Время вышло!');
      }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    focusTime.style.backgroundColor = '#BA4949';
    title.textContent = 'Время поработать!'
    setTimer(25);
}

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
    title.textContent = 'Время поработать!';
})

shortBreakButton.addEventListener('click', () =>  {
    setTimer(5);
    focusTime.style.backgroundColor = '#38858A';
    title.textContent = 'Короткий перерыв';
});

longBreakButton.addEventListener('click', () => {
    setTimer(15);
    focusTime.style.backgroundColor = '#397097';
    title.textContent = 'Длинный перерыв';
});

setButton.addEventListener('click', setUserTimer);