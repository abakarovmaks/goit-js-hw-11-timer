export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.days = document.querySelector(`${selector} [data-value="days"]`);
    this.hours = document.querySelector(`${selector} [data-value="hours"]`);
    this.minutes = document.querySelector(`${selector} [data-value="mins"]`);
    this.seconds = document.querySelector(`${selector} [data-value="secs"]`);
    this.startTimer();
  }

  startTimer() {
    this.getTime();
    setInterval(() => {
      this.getTime();
    }, 1000);
  }

  getTime() {
    const currentTime = Date.now();
    const deltaTime = this.targetDate - currentTime;
    const time = this.getTimeComponents(deltaTime);
    this.timerInterface(time);
  }

  getTimeComponents(date) {
    const days = this.pad(Math.floor(date / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((date % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((date % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  timerInterface(data) {
    this.days.textContent = String(data.days);
    this.hours.textContent = String(data.hours);
    this.minutes.textContent = String(data.mins);
    this.seconds.textContent = String(data.secs);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}
