const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  let rawSec = chronometer.getSeconds();
  let formSec = chronometer.computeTwoDigitNumber(rawSec);
  secDecElement.innerHTML = formSec[0];
  secUniElement.innerHTML = formSec[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  switch (btnLeftElement.innerHTML) {
    case 'START':
      btnLeftElement.innerHTML = 'STOP';
      btnRightElement.innerHTML = 'SPLIT';
      chronometer.start();
      printSeconds();
      break;
    case 'STOP':
      btnLeftElement.innerHTML = 'START';
      btnRightElement.innerHTML = 'RESET';
      chronometer.stop();
      break;
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
