let interval;
let timeLeft;
let isRunning = false;

const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const timeDisplay = document.getElementById('time');

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startButton.textContent = 'Pause';
    startButton.style.backgroundColor = 'red';
    const startTime = Date.now();
    const endTime = startTime + timeLeft * 60000;

    updateTimer(endTime);

    interval = setInterval(() => {
      updateTimer(endTime);
    }, 1000);
  } else {
    isRunning = false;
    startButton.textContent = 'Resume';
    startButton.style.backgroundColor = '';
    clearInterval(interval);
  }
}

function updateTimer(endTime) {
  const timeDifference = endTime - Date.now();
  if (timeDifference <= 0) {
    clearInterval(interval);
    isRunning = false;
    startButton.textContent = 'Start';
    startButton.style.backgroundColor = '';
    timeDisplay.textContent = '00:00';
  } else {
    const minutes = Math.floor(timeDifference / 60000);
    const seconds = Math.floor((timeDifference % 60000) / 1000);
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timeDisplay.textContent = formattedTime;
  }
}

function resetTimer() {
  clearInterval(interval);
  isRunning = false;
  startButton.textContent = 'Start';
  startButton.style.backgroundColor = '';
  timeDisplay.textContent = '25:00';
  timeLeft = 25;
}
