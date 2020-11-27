import Countdown from '../scripts/countdown.js';

const CountdownToNatal = new Countdown('24 December 2020 23:59:59 GMT-0300');

const daysEl = document.querySelector('.days');
const hoursEl = document.querySelector('.hours');

daysEl.innerText = 'Faltam ' + CountdownToNatal.total.days + ' dias!';

setInterval(() => {
  hoursEl.innerText = CountdownToNatal.total.hours + ':' + CountdownToNatal.total.minutes + ':' + CountdownToNatal.total.seconds + ' horas!';
}, 1000);
