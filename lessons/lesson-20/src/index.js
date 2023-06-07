import './styles/style.scss';
import { apiKey } from './credentials';

let formEl = document.getElementById('form');
let listEl = document.getElementById('list');
let loadMoreBtn = document.getElementById('loadMore');

let currentPage = 1;
let total = 0;

function getRequestUrl(country, perPage, page) {
    let searchParams = new URLSearchParams();
    searchParams.append('country', country);
    searchParams.append('apiKey', apiKey);
    searchParams.append('pageSize', perPage);
    searchParams.append('page', page);

    let baseUrl = `https://newsapi.org/v2/top-headlines?`;
    return baseUrl + searchParams.toString();
}

function loadHeadlines(country, perPage, page) {
    return fetch(getRequestUrl(country, perPage, page))
        .then(response => response.json());
}

function renderHeadline({ url, title, urlToImage, description }) {
    let articleEl = document.createElement('article');
    let headerTemplate = `<h2><a href="${url}" target="_blank">${title}</a></h2>`;
    let imageTemplate = '';
    let descriptionTemplate = '';

    if (urlToImage) {
        imageTemplate = `<img class="cover" src="${urlToImage}" alt="${title}">`;
    }
    if (description) {
        descriptionTemplate = `<p class="description">${description}</p>`;
    }

    let template = headerTemplate + imageTemplate + descriptionTemplate;
    articleEl.innerHTML = template;
    listEl.append(articleEl);
}

function renderAllHeadlines(headlines) {
    listEl.innerHTML = '';
    renderHeadlines(headlines);
}

function renderHeadlines(headlines) {
    headlines.forEach(headline => {
        renderHeadline(headline);
    });
}

function onFormSubmit(event) {
    event.preventDefault();
    let countryInput = this.elements.country;
    let perPageInput = this.elements.perPage;
    let country = countryInput.value;
    let perPage = perPageInput.value;

    currentPage = 1;
    
    loadHeadlines(country, perPage, currentPage)
        .then(data => {
            checkAndDisableLoadMoreBtn(data);
            renderAllHeadlines(data.articles);
        });
}

function loadMore() {
    currentPage++;
    let country = formEl.elements.country.value;
    let perPage = formEl.elements.perPage.value;

    loadHeadlines(country, perPage, currentPage)
        .then(data => {
            checkAndDisableLoadMoreBtn(data);
            renderHeadlines(data.articles);
        });
}

function checkAndDisableLoadMoreBtn(data) {
    let perPage = formEl.elements.perPage.value;
    total = data.totalResults;
    let canBeLoadedMore = (perPage * currentPage) < total;
    loadMoreBtn.disabled = !canBeLoadedMore;
}

formEl.addEventListener('submit', onFormSubmit);
loadMoreBtn.addEventListener('click', loadMore);