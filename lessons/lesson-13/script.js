// 2 - Створити гелерею з картинок використовуючи масив
const bodyEl = document.getElementById('root');
const images = [
	{
		"title": "Коник стрибунець",
		"src": "https://cdn.pixabay.com/photo/2022/11/07/00/27/grasshopper-7575278_1280.jpg" 
	},
	{
		"title": "Фрукт",
		"src": "https://cdn.pixabay.com/photo/2022/10/22/18/10/quince-7539818_1280.jpg"
	},
	{
		"title": "Люди",
		"src": "https://cdn.pixabay.com/photo/2022/11/05/22/43/against-light-7572922_1280.jpg"
	},
	{
		"title": "Годиник",
		"src": "https://cdn.pixabay.com/photo/2022/11/06/13/36/architecture-7574031_1280.jpg" 
	},
	{
		"title": "Метро",
		"src": "https://cdn.pixabay.com/photo/2022/10/31/17/57/subway-7560452_1280.jpg"
	},
	{
		"title": "Хмари",
		"src": "https://cdn.pixabay.com/photo/2022/10/24/09/54/switzerland-7543063_1280.jpg"
	},
];

function createGalleryElement(items) {
    let galleryEl = document.createElement('div');
    galleryEl.classList.add('gallery');

    let galleryElements = items.map(item => {
        let itemEl = document.createElement('div');
        itemEl.classList.add('gallery-item');
        itemEl.dataset.url = item.src;
        itemEl.dataset.title = item.title;
        
        let imgEl = document.createElement('img');
        imgEl.classList.add('gallery-picture');
        imgEl.src = item.src;
        itemEl.appendChild(imgEl);

        let titleEl = document.createElement('p');
        titleEl.classList.add('gallery-title');
        titleEl.innerText = item.title;
        itemEl.appendChild(titleEl);

        return itemEl;
    });

    galleryEl.append(...galleryElements);
    bodyEl.append(galleryEl);

    return galleryEl;
}

function closeModal() {
    let modalEl = document.querySelector('.modal-wrapper');
    if (modalEl) {
        modalEl.remove();
    }
}

function openModal(url, title) {
    let MODAL_TEMPLATE = '<div class="modal-wrapper"><div class="modal-backdrop" data-close-modal=""></div><div class="modal-body"><div class="modal-close" data-close-modal="">&times;</div></div></div>';
    bodyEl.insertAdjacentHTML('afterbegin', MODAL_TEMPLATE);
    let modalBodyEl = document.querySelector('.modal-body');
    
    let headerEl = document.createElement('h1');
    headerEl.innerText = title;
    modalBodyEl.append(headerEl);
    
    let imgEl = document.createElement('img');
    imgEl.src = url;
    modalBodyEl.append(imgEl);
}

function onGalleryItemClick(event) {
    let clickedItemEl = event.target.closest('.gallery-item');
    if (!clickedItemEl) {
        return;
    }
    let {url, title} = clickedItemEl.dataset;
    openModal(url, title);
}

function bindEvents(galleryEl) {
    galleryEl.addEventListener('click', onGalleryItemClick);
}

function initGallery(items) {
    let galleryEl = createGalleryElement(items);
    bindEvents(galleryEl);
}

initGallery(images);

bodyEl.addEventListener('click', (event) => {
    let targetEl = event.target;
    if ('closeModal' in targetEl.dataset) {
        closeModal();
    }
});

// 1 - Шашличний калькулятор
// Створити калькурялтор вартості продукту взалежності від ціни. При роботі з подіями використовувати делагування. Відрендерити всю розмітку через JS
// При змінні данних в інпуті №1 чи №2 автоматично має перераовуватися загальна вартість
// Завжди має відображатися валюта - гривня
// Загальна сума відображається з копійками (2 знаки після коми)
// В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.
// Кольрова підказка має змінювати своє значення при перетягувані повзунка.
// В інпуті №2 мін і мах поріг встановлюєте самостійно.
// При завантаженні сторінки скрип має автоматично розрахувати вартість на основі данних за замовчуванням які ви встановите в розмітці.