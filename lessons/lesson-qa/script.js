// "Поясніть будь-ласка  уривок з конспекту, бо наче зміст класу суперечить поясненню під ним. Або я чогось не розумію. В батьківському класі  показана приватна властивість і вона наслідується дочірнім класом.         

// class User {
//     #email;

//     constructor(email) {
//         this.#email = email;
//     }

//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }
// class ContentEditor extends User {
//     #email = '123';

//     logEmail() {
//         console.log('my email is ' + this.email);
//     }
//     logThisEmail() {
//         console.log('my email is ' + this.#email);
//     }
// }
// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { email: ""mango@mail.com"" }
// console.log(editor.email); // ""mango@mail.com""
  
// Клас ContentEditor наслідує від класу User його конструктор, геттер і сеттер email, а також однойменну публічну властивість. Важливо пам'ятати, що приватні властивості і методи батьківського класу не наслідуються дочірнім класом"






// Питання трохи з запізненням (замикання), але чому при такому виклиці лексічне оточення bar не прив'язується(не зберігається) у foo? 
// Думав, що це може бути пов'язано якось з контекстом, але спробував різні варанти прив'язування / наслідування контексту,
// let globalTest = false;
// const object = {
//   foo: function () {
//     console.log(someVar);
//   },
//   bar: function () {
//     const someVar = 'Mango';
//     return function () {
//         console.log(someVar);
//     };
//     // return this.foo;
//   },
// };

// const myFunc = object.bar();
// myFunc();





// let a = 123;

// let obj = {
//     // a: a,
//     a,
// };

// // function test({a ,b}) {
// //     console.log(a, b);
// // }
// function test(arg) {
//     console.log(arg.a, arg.b);
// }

// test({ a: 123, b: 321 });





// for (let i = 0; i <= 100; i++) {
//     console.log('Hello');
// }

// let arr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     // arr[i]
// }
// for (let i = 5; i < arr.length - 5; i++) {
//     // arr[i]
// }
// for (let i = 0; i < arr.length; i += 2) {
//     // arr[i]
// }
// for (let item of array) {
//     // item
// }
// arr.forEach(item => {
//     // item
// });

// let someObj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     // ...
// };
// for (let key in someObj) {
//     // key
//     // someObj[key]
// }

// let tree = {
//     // ...
//     isEmpty() {
//         return true; // or false
//     },
//     doSmth() {
//         // ...
//     }
// };
// while (!tree.isEmpty()) {
//     tree.doSmth();
// }
// do {
//     tree.doSmth();
// } while (!tree.isEmpty());






// class Plant {
//   constructor(name) {
//     this.name = name;
//   }
//   logName() {
//     console.log('my name is ' + this.name);
//   }
// }
// function Plant(name) {
//     this.name = name;
// };
// Plant.prototype = {
//     logName: function() {
//         console.log('my name is ' + this.name);
//     },
// };

// class Berry extends Plant {
//   constructor(name, color) {
//     super(name);
//     this.color = color;
//   }
//   logColor() {
//     console.log('my color is ' + this.color);
//   }
// }
// function Berry(name, color) {
//     Plant.call(this, name);
//     this.color = color;
// };
// Berry.prototype = Object.create(Plant.prototype);
// Berry.prototype.constructor = Berry;
// Berry.prototype.logColor = function() {
//     console.log('my color is ' + this.color);
// };

// let plantCactus = new Plant('cactus');
// plantCactus.logName();

// let rapsberry = new Berry('rapsberry', 'pink');
// rapsberry.logName();
// rapsberry.logColor();


// 





// let obj = {
//     a: 1, 
//     b: 2,
//     c: 3,
// };
// for (let key in obj) {
//     if (!obj.hasOwnProperty(key)) continue;
//     // obj[key]
// }   





// // Натрапив на таку задачку:
// var a = 5;
// var writeA = function () {
//     console.log(a);
//     var a = 10;
// };
// writeA(); // undefined

// // Відповідь зрозуміла, більш менш, але не повністю.

// // Уривоки з пояснення chatGPT:
// // ChatGPT: ""Цей приклад демонструє поняття ""змінна, оголошена на рівні функції"".
// // ChatGPT: ""Ця поведінка змінних, оголошених на рівні функції, виникає через те, що в JavaScript використовується функціональна область видимості, яка означає, що змінні, оголошені в середині функції, не будуть доступні за межами цієї функції, але будуть доступні у всій області видимості цієї функції.""

// // Розкажіть про те, як виконується ""всплитие"" в цьому випадку. 
// // Чому javascript почав шукати і виконувати код з ""глибини"", а не так, як з let та const? 
// // Як при цьому заповнювався стек?

// // Будь ласка поясніть з малюнками, бо довелось голову поламати трохи)





// function funcA() {
//     console.log('hello from funcA');
// }

// let funcB = funcA;
// // funcA();
// // funcB();

// function funcWithCallback(callback) {
//     callback();
// } 
// funcWithCallback(funcA);




