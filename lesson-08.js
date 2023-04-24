// # Модуль 4. Заняття 8. Перебираючі методи масиву

// ## Колекція об'єктів для всіх прикладів з автомобілями

// ```js
const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 13, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
];
console.table(cars);
// ```

// function testArray() {
//     console.log('original');
//     console.table(cars);
//     let newArray = [];
//     for (let car of cars) {
//         let modifiedResult = {...car};

//         modifiedResult.result = car.model === 'F-150';

//         newArray.push(modifiedResult);
//     }
//     console.log('testing');
//     console.table(newArray);
// }
// testArray();

// ## Example 1 - Метод map

// Нехай функція `getModels` повертає масив моделей (поле model) всіх
// автомобілів.

// ```js
// const getModels = cars => {
//     return cars.map(car => car.model);
// };

// console.log(getModels(cars));
// // ['CR-V', 'Accord', ...]
// ```

// ## Example 2 - Метод map

// Нехай функція `makeCarsWithDiscount` повертає новий масив об'єктів із змінним
// значенням властивості `price` залежно від переданої знижки.

// ```js
// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map(car => {
//         return {
//             ...car,
//             price: car.price * ((100 - discount) / 100)
//         };
//     });
// };

// console.table(makeCarsWithDiscount(cars, 20));
// console.table(makeCarsWithDiscount(cars, 40));
// ```

// ## Example 3 - Метод filter

// Нехай функція `filterByPrice` повертає масив автомобілів ціна яких менша
// ніж значення параметра `maxPrice`.

// ```js
// const filterByPrice = (cars, maxPrice) => {
//     return cars.filter(car => car.price <= maxPrice);
// };

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));
// ```

// ## Example 4 - Метод filter

// Нехай функція `getCarsOnSale` повертає масив автомобілів властивість
// onSale яких true.

// ```js
// function getCarsOnSale(cars) {
//     return cars.filter(car => car.onSale);
// }

// console.table(getCarsOnSale(cars));
// ```

// ## Example 5 - Метод filter

// Нехай функція `getCarsByType` повертає масив автомобілів тип яких
// збігається зі значенням параметра `type`.

// ```js
// function getCarsByType(cars, type) {
//     return cars.filter(car => car.type === type);
// };

// console.table(getCarsByType(cars, 'suv'));
// console.table(getCarsByType(cars, 'sedan'));
// ```

// ## Example 6 - Метод find

// ```js
// function getCarByModel(cars, model) {
//     return cars.find(car => car.model === model);
// }

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));
// ```

// ## Example 7 - Метод sort

// Нехай функція `sortByAscendingAmount` повертає новий масив автомобілів відсортований за 
// зростанням значення якості `amount`.

// ```js
// function sortByAscendingAmount(cars) {
//     let carsCopy = [...cars];

//     carsCopy.sort((a, b) => {
//         if (a.amount > b.amount) {
//             return 1;
//         }
//         if (a.amount < b.amount) {
//             return -1;
//         }
//         return 0;
//     });

//     return carsCopy;
// }

// console.table(sortByAscendingAmount(cars));
// ```

// ## Example 8 - Метод sort

// Нехай функція `sortByDescendingPrice` повертає новий масив автомобілів
// відсортований за зменшенням значення властивості `price`.

// ```js
// function sortByDescendingPrice(cars) {
//     let carsCopy = [...cars];

//     carsCopy.sort((a, b) => {
//         if (a.price < b.price) {
//             return 1;
//         }
//         if (a.price > b.price) {
//             return -1;
//         }
//         return 0;
//     });

//     return carsCopy;
// }

// console.table(sortByDescendingPrice(cars));
// ```

// ## Example 9 - Метод sort

// Нехай функція `sortByModel` повертає новий масив автомобілів відсортований
// за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від
// значення параметра `order`.

// ```js
// function sortByModel(cars, order) {
//     let carsCopy = [...cars];

//     carsCopy.sort((a, b) => {
//         if (a.model > b.model) {
//             return order === 'asc' ? 1 : -1;
//         }
//         if (a.model < b.model) {
//             return order === 'asc' ? -1 : 1;
//         }
//         return 0;
//     });

//     return carsCopy;
// }

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));
// ```

// ## Example 10 - Метод reduce

// Нехай функція `getTotalAmount` повертає загальну кількість автомобілів (значення
// властивостей `amount`).

// ```js
// function getTotalAmountOldSchool(cars) {
//     let sum = 0;

//     for (let car of cars) {
//         sum += car.amount;
//     }

//     return sum;
// }
// function getTotalAmount(cars) {
//     return cars.reduce((sum, car) => sum + car.amount, 0);
// }

// console.log(getTotalAmountOldSchool(cars));
// console.log(getTotalAmount(cars));
// ```

// ## Example 11 - Ланцюжки методів

// Нехай функція `getAvailableCarNames` повертає масив моделей автомобілів, але
// тільки тих, які зараз на розпродажі.

// ```js
// function getModelsOnSale(cars) {
//     return cars
//         .filter(car => car.onSale)
//         .map(car => car.model);
// }

// console.log(getModelsOnSale(cars));
// ```

// ## Example 12 - Ланцюжки методів

// Нехай функція `getSortedCarsOnSale` повертає масив автомобілів на розпродажі
// (Властивість onSale), відсортованих за зростанням ціни.

// ```js
// function getSortedCarsOnSale(cars) {
//     return cars
//         .filter(car => car.onSale)
//         .sort((a, b) => {
//             if (a.price > b.price) {
//                 return 1;
//             }
//             if (a.price < b.price) {
//                 return -1;
//             }
//             return 0;
//         });
// }

// console.table(getSortedCarsOnSale(cars));
// ```