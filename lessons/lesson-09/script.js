// 'use strict';



// arows fn + this
// let obj = {
//     testValue: 123,
//     testFn1: function() {
//         console.log(this);
//     },
//     testFn2: () => {
//         console.log(this);
//     },
// };

// context in deep objects
// let objParent = {
//     parent: true,
//     logCtx: function() {
//         console.log(this);
//     },

//     child: {
//         parent: false,
//         logCtx: function() {
//             console.log(this);
//         },
//     }
// };



// what is context
// function logContext(arg1, arg2) {
//     console.group('logContext');
//     console.log('context is', this);
//     console.log('arg1 is', arg1);
//     console.log('arg2 is', arg2);
//     console.groupEnd();
// }

// logContext(1, 2);

// let exampleCtx1 = {
//     example: 1
// };
// let exampleCtx2 = {
//     example: 2
// };
// let exampleCtx3 = {
//     example: 3
// };

// logContext.call(exampleCtx1, 1, 2);
// logContext.apply(exampleCtx2, [1, 2]);

// let logContextBinded = logContext.bind(exampleCtx3);
// logContextBinded(1, 2);

// document.addEventListener('DOMContentLoaded', logContext);

// # Модуль 5. Заняття 9. Контекст виклику функції та this

// ## Example 1 - Майстерня коштовностей

// Напишіть метод `calcTotalPrice(stoneName)`, який приймає назву каменю і
// розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
// кількістю з властивості `stones`.

// ```js
// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     let stone = this.stones.find(stone => stone.name === stoneName);
//     if (!stone) {
//         return null;
//     }
//     return stone.price * stone.quantity;
//   },
// };
// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// ```

// ## Example 2 - Телефонна книга

// Виконайте рефакторинг методів об'єкту `phonebook` щоб код запрацював.

// ```js
// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };

//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
// });
// phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
// });
// console.log(phonebook.contacts);
// ```

// ## Example 3 - Калькулятор

// Створіть об'єкт `calculator` з трьома методами:

// - `read(a, b)`- приймає два значення та зберігає їх як властивості об'єкта.
// - `add()` - повертає суму збережених значень.
// - `mult()` - перемножує збережені значення та повертає результат.

// ```js
// const calculator = {
//     a: 0,
//     b: 0,
//     read(a, b) {
//         this.a = a;
//         this.b = b;
//     },
//     add() {
//         return this.a + this.b;
//     },
//     mult() {
//         return this.a * this.b;
//     },
// };

// calculator.read(1, 6);
// console.log('add result', calculator.add());
// console.log('mult result', calculator.mult());

// calculator.a = 5;
// ```

// todo:
// - kahoot 4
// - kahoot 5