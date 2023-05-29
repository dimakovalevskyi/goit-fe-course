for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {

    }
}

export default class {
    #element;
    #options;
    #secondsEl;
    #minutesEl;
    #hoursEl;
    #daysEl;
    #intervalId;

    constructor (elementSelector, options) {
        this.#element = document.querySelector(elementSelector);
        this.#options = options;

        this.initMarkup();
        this.start();
    }

    initMarkup() {
        const TEMPLATE = `
            <h2 class="timer-label">${this.#options.label}</h2>
            <div class="timer">
                <div class="timer-part">
                    <div class="timer-value timer-value_days">00</div>
                    <div class="timer-desc">Days</div>
                </div>
                <div class="timer-part">
                    <div class="timer-value timer-value_hours">00</div>
                    <div class="timer-desc">Hours</div>
                </div>
                <div class="timer-part">
                    <div class="timer-value timer-value_minutes">00</div>
                    <div class="timer-desc">Minutes</div>
                </div>
                <div class="timer-part">
                    <div class="timer-value timer-value_seconds">00</div>
                    <div class="timer-desc">Seconds</div>
                </div>
            </div>`;
        this.#element.insertAdjacentHTML('afterbegin', TEMPLATE);

        this.#secondsEl = this.#element.querySelector('.timer-value_seconds');
        this.#minutesEl = this.#element.querySelector('.timer-value_minutes');
        this.#hoursEl = this.#element.querySelector('.timer-value_hours');
        this.#daysEl = this.#element.querySelector('.timer-value_days');
    }

    update() {
        let now = Date.now();
        let target = this.#options.target.getTime();
        let delta = Math.round((target - now) / 1000);
        
        let seconds = delta % 60;
        
        let minutesTotal = Math.floor((delta / 60));
        let minutes = minutesTotal % 60;

        let hoursTotal = Math.floor(minutesTotal / 60);
        let hours = hoursTotal % 24;

        let days = Math.floor(hoursTotal / 24);

        this.#secondsEl.innerText = seconds.toString().padStart(2, '0');
        this.#minutesEl.innerText = minutes.toString().padStart(2, '0');
        this.#hoursEl.innerText = hours.toString().padStart(2, '0');
        this.#daysEl.innerText = days.toString().padStart(2, '0');
    }

    start() {
        this.update();
        this.#intervalId = setInterval(() => this.update(), 1000);
    }

    stop() {
        clearInterval(this.#intervalId);
    }
}