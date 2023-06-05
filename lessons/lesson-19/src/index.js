import './styles/style.scss';

let dateInput = document.getElementById('date');
let amountInput = document.getElementById('amount');
let formEl = document.getElementById('form');

let placeholderEl = document.getElementById('placeholder');
let resultEl = document.getElementById('result');
let totalEl = document.getElementById('total');
let currencyEl = document.getElementById('currency');

function prepareResult(amount, currency) {
    resultEl.classList.remove('hidden');
    currencyEl.innerText = currency.toFixed(2);

    let total = amount * currency;
    totalEl.innerText = total.toFixed(2);
}

function onFormSubmit(event) {
    event.preventDefault();
    let date = new Date(dateInput.value);
    let amount = Number(amountInput.value);
    
    getCurrencyByDate(date)
        .then(currency => {
            prepareResult(amount, currency);
        })
        .catch(error => alert('Упс, трапилась помилка!'));
}

function getCurrencyByDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let formattedDate = year.toString() + month.toString().padStart(2, '0') + day.toString().padStart(2, '0');
    // https://bank.gov.ua/ua/open-data/api-dev
    let url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&date=${formattedDate}&json`;

    placeholderEl.classList.remove('hidden');
    resultEl.classList.add('hidden');

    return fetch(url)
        .then(response => {
            placeholderEl.classList.add('hidden');
            resultEl.classList.remove('hidden');
            return response.json()
        })
        .then(data => data[0].rate);
}

function initDefaultValues() {
    let date = new Date();
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear();
    let formattedDate = `${year}-${month}-${day}`;

    dateInput.value = formattedDate;
    dateInput.max = formattedDate;
    amountInput.value = 100;
}

formEl.addEventListener('submit', onFormSubmit);
initDefaultValues();