import './styles/style.scss';
import Timer from './timer';

let timer = new Timer('#timer_1', {
    label: 'До нового року',
    target: new Date('2024-01-01'),
});

let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timer.start();
});
stopBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    timer.stop();
});

new Timer('#timer_2', {
    label: 'До мого ДН',
    target: new Date('2023-08-20'),
});
new Timer('#timer_3', {
    label: 'До ДН Art',
    target: new Date('2024-03-23'),
});