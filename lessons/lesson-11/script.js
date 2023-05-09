// - Урок 11

const bodyEl = document.getElementById('root');

// 1. Створити список технологій що вивчаються на курсі Fullstack за допомогою js
    
//     ```jsx
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
//     ```

// let technologiesEl = document.createElement('ul');
// bodyEl.append(technologiesEl);

// let technologiesMarkup = technologies
//     .map(technology => `<li>${technology}</li>`)
//     .join('\n');

// let technologiesMarkup = technologies.reduce((acc, technology, index) => {
//     return acc + `<li>${technology}</li>`;
// }, '');

// technologiesEl.innerHTML = technologiesMarkup;

// Показати як це робиться через innerHTML:map/reduce.

// 1. Створити кілька кнопок на основі масива з обєктами використовуючи createElement. map+append(...items)/map+forEach/forEach

// ```jsx
// const colors = [
//     {
//         label: "red",
//         color: "#FF0000",
//     },
//     {
//         label: "green",
//         color: "#00FF00",
//     },
//     {
//         label: "blue",
//         color: "#0000FF",
//     },
//     {
//         label: "yellow",
//         color: "#FFFF00",
//     },
// ];
// v1
// const colorsButtons = colors.map(color => {
//     let colorButton = document.createElement('button');
//     colorButton.textContent = color.label;
//     colorButton.style.backgroundColor = color.color;
//     return colorButton;
// });
// bodyEl.append(...colorsButtons);

// v2
// colors
//     .map(color => {
//         let colorButton = document.createElement('button');
//         colorButton.textContent = color.label;
//         colorButton.style.backgroundColor = color.color;
//         return colorButton;
//     })
//     .forEach(btn => bodyEl.append(btn));

// v3
// colors
//     .forEach(color => {
//         let colorButton = document.createElement('button');
//         colorButton.textContent = color.label;
//         colorButton.style.backgroundColor = color.color;
//         bodyEl.append(colorButton);
//     });
// ```

// 1. Створити сайт з такою розміткою використовуючи лише JS в html файлі має бути пусто

// see example.html

function createElementByConfig({tag, id, text, html, src, alt, children}) {
    let element = document.createElement(tag);
    if (id) {
        element.id = id;
    }
    if (text) {
        element.textContent = text;
    }
    if (html) {
        element.innerHTML = html;
    }
    if (src) {
        element.src = src;
    }
    if (alt) {
        element.alt = alt;
    }
    if (children) {
        children.forEach(childConfig => {
            element.append(createElementByConfig(childConfig));
        });
    }
    return element;
}

let mainElConfig = {
    tag: 'main',
    id: 'main',
    children: [
        {
            tag: 'h1',
            id: 'title',
            text: '- Michel Legrand -',
        },
        {
            tag: 'figure',
            id: 'img-div',
            children: [
                {
                    tag: 'img',
                    id: 'image',
                    src: 'https://i.discogs.com/LGcISJRXQR30Q--KBtFgh8nf5bAY-UT9PfVp4mPM4_8/rs:fit/g:sm/q:90/h:788/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTg0MjM2/LTE0Nzc2ODIxNDgt/NDUyOC5qcGVn.jpeg',
                    alt: 'Michel Legrand conducting his orchestra',
                },
                {
                    tag: 'figcaption',
                    id: 'img-caption',
                    text: 'Michel Legrand conducting his orcherstra.',
                }
            ]
        },
        {
            tag: 'article',
            id: 'tribute-info',
            children: [
                {
                    tag: 'div',
                    id: 'intro',
                    children: [
                        {
                            tag: 'p',
                            html: '&bull; Michel Legrand (1932 - 2019) was a famous French musician. &bull;',
                        }
                    ]
                },
                {
                    tag: 'p',
                    children: [
                        {
                            tag: 'u',
                            text: 'Here are some major facts about him:',
                        }
                    ]
                },
                {
                    tag: 'ul',
                    children: [
                        {
                            tag: 'li',
                            html: 'He was born in Paris, France on February 24<sup>th</sup>, 1932.'
                        },
                        {
                            tag: 'li',
                            text: 'His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of a conductor.'
                        },
                        // { ... }
                        {
                            tag: 'li',
                            html: 'He was interred at the P&egrave;re Lachaise Cemetery in Paris, France.'
                        }
                    ]
                },
                {
                    tag: 'hr'
                },
                {
                    tag: 'p',
                    html: `To find out more about him, feel free to have a look at his biography on <a id="tribute-link" href="https://en.wikipedia.org/wiki/Michel_Legrand" target="_blank">Wikipedia</a>.`
                },
            ]
        }
    ]
};

let mainEl = createElementByConfig(mainElConfig);
console.log(mainElConfig);
bodyEl.append(mainEl);