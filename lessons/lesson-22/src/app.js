// import axios from 'axios';

import { create, loadAll, removeById } from "./api";

export default class App {
    #items = [];

    constructor() {
        this.addInput = document.querySelector('#addInput');
        this.addButton = document.querySelector('#addButton');
        this.listEl = document.querySelector('#list');

        this.#bindEvents();

        this.load();
    }

    #bindEvents() {
        this.addButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.addItem(this.addInput.value.trim());
            this.addInput.value = '';
        });
        this.listEl.addEventListener('click', event => {
            if (event.target.dataset.removeItem) {
                this.removeItem(event.target.dataset.removeItem);
            }
        });
        this.listEl.addEventListener('change', event => {
            if (event.target.dataset.itemId) {
                if (event.target.checked) {
                    this.markItemAsChecked(event.target.dataset.itemId);
                } else {
                    this.markItemAsUnchecked(event.target.dataset.itemId);
                }
            }
        });
    }

    async addItem(item) {
        if (!item) {
            return;
        }
        let itemData = {
            completed: false,
            content: item,
        };
        try {
            let item = await create(itemData);
            this.addItemInView(item);
        } catch (e) {
            alert('Error while creating item');
        }

        // fetch(this.baseApiUrl + '/items', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(body)
        // }).then(res => res.json())
        //     .then(item => this.addItemInView(item))
        //     .catch(e => alert('Error while creating item'));

        // axios.post(this.baseApiUrl + '/items', body)
        //     .then(res => this.addItemInView(res.data))
        //     .catch(e => alert('Error while creating item'));
    }

    // doRequest(this.baseApiUrl + '/items', 'POST', body)
    //     .then(item => this.addItemInView(item))
    //     .catch(e => alert('Error while creating item'));
    // doRequest(url, method = 'GET', body = null) {
    //     let params = {
    //         method: method,
    //     };

    //     if (body && typeof body === 'object') {
    //         params.headers = {
    //             'Content-Type': 'application/json'
    //         };
    //         params.body = JSON.stringify(body);
    //     }

    //     return fetch(url, params)
    //         .then(res => res.json());
    // }

    addItemInView(item) {
        this.#items.push(item);
        let element = this.createElForItem(item);
        this.listEl.append(element);
    }

    async removeItem(id) {
        if (typeof id === 'string') {
            id = Number(id);
        }

        try {
            await removeById(id);
            this.removeItemFromView(id);
        } catch (e) {
            alert('Error while removing item');
        }

        // let res = await fetch(`${this.baseApiUrl}/items/${id}`, {
        //     method: 'DELETE'
        // });
        // if (res.ok) {
        //     this.removeItemFromView(id);
        // } else {
        //     alert('Error while removing item');
        // }

        // fetch(`${this.baseApiUrl}/items/${id}`, {
        //     method: 'DELETE'
        // }).then(res => {
        //     if (res.ok) {
        //         this.removeItemFromView(id);
        //     } else {
        //         alert('Error while removing item');
        //     }
        // });

        // fetch(`${this.baseApiUrl}/itemsss/${id}`, {
        //     method: 'DELETE'
        // }).then(res => {
        //     if (!res.ok) {
        //         throw new Error();
        //     }
        // })
        // .then(() => this.removeItemFromView(id))
        // .catch(() => alert('Error while removing item'));
    }

    removeItemFromView(id) {
        let itemIndex = this.#items.findIndex(i => i.id === id);
        if (itemIndex >= 0) {
            this.#items.splice(itemIndex, 1);
        }
        let itemEl = document.querySelector(`[data-item-id="${id}"]`);
        if (itemEl) {
            itemEl.remove();
        }
    }

    markItemAsChecked(id) {
        if (typeof id === 'string') {
            id = Number(id);
        }

        let item = this.#items.find(i => i.id === id);
        if (item) {
            item.completed = true;
            let itemEl = document.querySelector(`[data-item-id="${id}"]`);
            if (itemEl) {
                itemEl.classList.add('item_done');
            }
        }
    }

    markItemAsUnchecked(id) {
        if (typeof id === 'string') {
            id = Number(id);
        }

        let item = this.#items.find(i => i.id === id);
        if (item) {
            item.completed = false;
            let itemEl = document.querySelector(`[data-item-id="${id}"]`);
            if (itemEl) {
                itemEl.classList.remove('item_done');
            }
        }
    }

    async load() {
        try {
            let items = await loadAll();
            items.forEach(i => this.addItemInView(i));
        } catch(e) {
            alert('Error while loading all items');
        }
    }

    createElForItem(item) {
        let element = document.createElement('div');
        element.classList.add('item');
        element.dataset.itemId = item.id;
        if (item.completed) {
            element.classList.add('item_done');
        }

        element.innerHTML = `
        <input type="checkbox" class="item-checkbox" data-item-id="${item.id}" ${item.completed ? 'checked' : ''}>
        <div class="item-content">${item.content}</div>
        <button type="button" class="item-remove-button" data-remove-item="${item.id}">&times;</button>
        `;
        
        return element;
    }
}