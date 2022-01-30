class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
    }, 1000)
    return;
  }

  getMinutes() {
    return (Math.floor(this.currentTime / 60))
  }

  getSeconds() {
    return (this.currentTime % 60)
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
    this.currentTime = 0;
  }

  split() {
    let minutes = this.getMinutes()
    let seconds = this.getSeconds()
    let formatMin = this.computeTwoDigitNumber(minutes)
    let formatSec = this.computeTwoDigitNumber(seconds)
    return (formatMin + ":" + formatSec)
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
