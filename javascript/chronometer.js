class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    setInterval(() => {
      this.currentTime += 1
    }, 1000)
    return;
  }

  getMinutes() {
    let minutes = 0;
    minutes = Math.floor(this.currentTime / 60)
    return minutes;
  }

  getSeconds() {
    let seconds = 0;
    if (this.currentTime < 0) {
      return this.currentTime
    } else return (this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    if (value > 9) {
      return String(value);
    } else return ("0" + String(value))
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
