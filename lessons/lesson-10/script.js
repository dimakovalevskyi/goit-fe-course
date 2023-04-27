// # Модуль 5. Заняття 10. Прототипи та класи

// ## Example 1 - Блогер

// Напиши клас `Blogger` для створення об'єкта блогера з наступними властивостями:

// - `email` - пошта, рядок
// - `age` - вік, число
// - `numberOfPosts` - кількість постів, число
// - `topics` - масив тем на яких спеціалізується блогер

// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод `getInfo()`, який, повертає рядок:
// `User ${пошта} is ${вік} years old and has ${кількість постів} posts`.

// Додай метод `updatePostCount(value)`, який у параметрі `value` приймає
// кількість постів, які потрібно додати користувачеві.

// ```js
// class User {
//     constructor({ name, age, numberOfPosts = 0, topics = [] }) {
//         this.name = name;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }

//     getInfo() {
//         return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//     }

//     addPostCount(value) {
//         return this.numberOfPosts += value;
//     }
// }

// const mango = new User({
//     name: 'Mango',
//     age: 24,
//     numberOfPosts: 20,
//     topics: ['tech', 'cooking'],
// });

// console.log('mango', mango);

// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.addPostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   name: 'Poly',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.addPostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
// ```

// class User {
//     static Gender = {
//         Male: 'm',
//         Female: 'f',
//         Other: 'o',
//     };

//     #birthDate;
//     #email;

//     constructor({ firstName, lastName, email, gender, birthDate }) {
//         this.firstName = firstName;
//         this.lastName = lastName;

//         this.#email = email;

//         this.gender = gender; // 'm' or 'f'

//         this.#birthDate = birthDate;
//     }

//     get fullName() {
//         return this.firstName + ' ' + this.lastName;
//     }

//     get birthDate() {
//         if (this.gender === User.Gender.Male) {
//             return this.#birthDate;
//         }
//         return this.#birthDate.substring(0, 5);
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(value) {
//         if (value.includes('@')) {
//             this.#email = value;
//         } else {
//             console.error('invalid value');
//         }
//     }
// }

// let dima = new User({
//     firstName: 'Dima',
//     lastName: 'Kovalevskyi',
//     email: 'dimakovalevskyi@gmail.com',
//     gender: User.Gender.Male,
//     birthDate: '20.08.1996',
// });

// let vika = new User({
//     firstName: 'Viktoria',
//     lastName: 'Kovalevska',
//     gender: User.Gender.Female,
//     birthDate: '23.03.1997',
// });

// ## Example 2 - Сховище

// Напиши клас `Storage` який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме
// його властивість `items`.

// Додай методи класу:

// - `getItems()` - повертає масив товарів.
// - `addItem(item)` - отримує новий товар і додає його до поточних.
// - `removeItem(item)` - отримує товар і, якщо він є, видаляє його з поточних.

// ```js
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
// ```

// ## Example 3 - User

// Напиши клас `User` який створює об'єкт із властивостями `login` та `email`.
// Оголоси приватні властивості `#login` та `#email`, доступ до яких зроби через
// гетер та сетер `login` та `email`.

// ```js
// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie
// ```

// ## Example 4 - Нотатки

// Напиши клас `Notes` який керує колекцією нотаток у властивості `items`.
// Замітка це об'єкт із властивостями `text` та `priority`. Додай класу статичну
// властивість `Priority`, у якому зберігатиметься об'єкт із пріоритетами.

// class Note {
//     static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high',
//     };

//     constructor (text, priority) {
//         this.text = text;
//         this.priority = priority;

//         this.createdAt = new Date();
//         this.id = Math.round(Math.random() * 100000);
//     }

//     update({ text, priority }) {
//         if (text) {
//             this.text = text;
//         }
//         if (priority) {
//             this.priority = priority;
//         }
//     }
// }

// class Notes {
//     constructor(name, items = []) {
//         this.name = name;
//         this.items = items;
//     }

//     addNote({ text, priority }) {
//         let newNote = new Note(text, priority);
//         this.items.push(newNote);
//     }

//     removeNote(noteId) {
//         let noteIndex = this.items.findIndex(note => note.id === noteId);
//         if (noteIndex > -1) {
//             this.items.splice(noteIndex, 1);
//         }
//     }

//     updateNote(noteId, newValue) {
//         let note = this.items.find(note => note.id === noteId);
//         if (note) {
//             note.update(newValue);
//         }
//     }
// }

// const myNotes = new Notes('Recipes');

// myNotes.addNote({
//     text: 'Моя перша замітка', 
//     priority: Note.Priority.LOW 
// });
// myNotes.addNote({
//     text: 'Моя друга замітка',
//     priority: Note.Priority.NORMAL,
//   });
// myNotes.addNote({
//     text: 'Моя третя замітка',
//     priority: Note.Priority.NORMAL,
// });

// console.log(myNotes);
// ```

// ## Example 5 - Toggle

// Напишіть клас `Toggle` який приймає об'єкт налаштувань `{isOpen: boolean}` і
// оголошує одну властивість `on` - стан вкл/викл (true/false). За замовчуванням
// значення властивості `on` повинно бути `false`.

// ```js
// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
// ```