// # Модуль 3. Заняття 1. Об'єкти

// ## Example 1 - Основи об'єктів

// Напиши скрипт, який для об'єкта `user`, послідовно:

// - додає поле `mood` зі значенням `'happy'`
// - замінює значення `hobby` на `'skydiving'`
// - замінює значення `premium` на `false`
// - виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи
//   `Object.keys()` та `for...of`

// ### Код

// ```js
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user['premium'] = false;

// console.log('user', user);

// let userKeys = Object.keys(user);
// console.group();
// for (let key of userKeys) {
//     console.log(`${key}:${user[key]}`);
// }
// console.groupEnd();
// ```

// ## Example 2 - метод Object.values()

// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
// підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно
// вийти 390. Якщо об'єкт `salaries` порожній, то результат має бути 0.

// ### Код

// ```js
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (let salary of Object.values(salaries)) {
//     sum += salary;
// }
// console.log('sum', sum);
// ```

// ## Example 3 - Масив об'єктів

// Напишіть функцію `calcTotalPrice(stones, stoneName)`, яка приймає масив
// об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість
// каміння з таким ім'ям, ціною та кількістю з об'єкта

// ### Код

// ```js
// function calcTotalPrice(stones, stoneName) {
//     for (let stone of stones) {
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity;
//         }
//     }
//     return null;
// }

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// console.log(calcTotalPrice(stones, 'Сапфір'));
// console.log(calcTotalPrice(stones, 'Смарагд'));
// console.log(calcTotalPrice(stones, 'Рубін'));
// ```

// ## Example 4 - Комплексні завдання

// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт `account`
// в якому необхідно реалізувати методи для роботи з балансом та історією
// транзакцій.

// // ```js
// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {
//     return {
//         id: this.transactions.length + 1,
//         type,
//         amount,
//     };
//   },

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {
//     let transaction = this.createTransaction(amount, Transaction.DEPOSIT);

//     this.transactions.push(transaction);
//     this.balance += amount;
//   },

//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//         console.error('Недостатньо коштів');
//         return;
//     }
//     let transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//     this.balance -= amount;
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     for (let transaction of this.transactions) {
//         if (transaction.id === id) {
//             return transaction;
//         }
//     }
//     return null;
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     let sum = 0;
//     for (let transaction of this.transactions) {
//         if (transaction.type === type) {
//             sum += transaction.amount;
//         }
//     }
//     return sum;
//   },
// };

// account.deposit(1000);
// account.withdraw(300);
// account.withdraw(100);
// account.deposit(200);
// // ```