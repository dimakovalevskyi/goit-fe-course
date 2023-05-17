let bodyEl = document.getElementById('root');

// function simulateLib() {
//     let oldListEl = document.getElementById('list');
//     if (oldListEl) {
//         oldListEl.remove();
//     }
//     let listEl = document.createElement('ul');
//     bodyEl.append(listEl);
//     listEl.id = 'list';
//     for (let i = 1; i <= 1000; i++) {
//         let itemEl = document.createElement('li');
//         itemEl.innerText = `Item ${i}`;
//         listEl.append(itemEl);
//     }
// }
// function onResize() {
//     console.log('onResize');
//     simulateLib();
// }
// simulateLib();
// window.addEventListener('resize', _.throttle(onResize, 300));




// let searchEl = document.getElementById('search');
// function onInput(event) {
//     console.log(event.target.value);
// }
// searchEl.addEventListener('input', _.debounce(onInput, 500));



// let formEl = document.getElementById('form');
// let loginEl = document.getElementById('login');
// let passwordEl = document.getElementById('password');
// let MAX_LOGIN_LENGTH = 20;
// let MAX_PASSWORD_LENGTH = 20;
// function onFormInput() {
//     console.log('onFormInput');
//     let login = loginEl.value;
//     let password = passwordEl.value;
//     if (login.length > MAX_LOGIN_LENGTH) {
//         loginEl.classList.add('input_invalid');
//     } else {
//         loginEl.classList.remove('input_invalid');
//     }
//     if (password.length > MAX_PASSWORD_LENGTH) {
//         passwordEl.classList.add('input_invalid');
//     } else {
//         passwordEl.classList.remove('input_invalid');
//     }
// }
// formEl.addEventListener('input', _.debounce(onFormInput, 400));



// function onIntersect(entries) {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('in-viewport');
//         } else {
//             entry.target.classList.remove('in-viewport');
//         }
//       });
// }
// let observer = new IntersectionObserver(onIntersect, {
//     threshold: 0
// });
// let wrapperEl = document.querySelector('.wrapper');
// Array.from(wrapperEl.children).forEach(child => observer.observe(child));






// 1. Підключити бібліотеку lodash через скрипт 
// 2. Показати як працює тротл на основі події **resize** та **scroll**
// 3. Показати як працює дебаунс на основі роботи з інпутом
// 4. Написати форму логіна та пароля де буде відбуватися валідація полів на довжину після закінчення введення тексту. (Використати дебаунс)
// 5. Показати як працює intersection observer на основі прикладів з цієї статті -
// https://medium.com/@ryanfinni/the-intersection-observer-api-practical-examples-7844dfa429e9