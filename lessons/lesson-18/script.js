// function createPromise(success) {
//     return new Promise((resolve, reject) => {
//         setTimeout();
//     });
// }

// function getCurrency(valcode) {
//     return fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${valcode}&date=20230531&json`)
//         .then(response => response.json())
//         .then(data => data[0]);
// }

// console.log('start');
// console.log('get usd currency');
// getCurrency('USD')
//     .then(data => {
//         console.log('got USD', data);
//         return getCurrency('EUR');
//     })
//     .then(data => {
//         console.log('got EUR', data);
//         return getCurrency('PLN');
//     })
//     .then(data => {
//         console.log('got PLN', data);
//     })
//     .catch(e => console.warn('Error while getting some of currencies'));

// let promises = [getCurrency('USD'), getCurrency('EUR'), getCurrency('PLN')];

// Promise.all(promises)
//     .then(data => {
//         console.log('all promises completed');
//         console.log(data);
//     });

// Promise.race(promises)
//     .then(data => {
//         console.log('first promise completed');
//         console.log(data);
//     });

// console.log('get eur currency');
// getCurrency('EUR')
//     .then(data => {
//         console.log('got EUR', data);
//     })
//     .catch(e => console.warn('Error while getting EUR'));

// console.log('get pln currency');
// getCurrency('PLN')
//     .then(data => {
//         console.log('got PLN', data);
//     })
//     .catch(e => console.warn('Error while getting PLN'));



// function getFakePromise(success) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (success) {
//                 resolve();
//             } else {
//                 reject('some error');
//             }
//         }, 1000);
//     });
// }


// getFakePromise(false)
//     .then(data => {
//         console.log('promise 1 got', data);
        
//         console.log('first then returns false');
//         return false;
//     })
//     .catch(error => {
//         console.warn('promise 1 failed', error);
//         throw new Error('test');
//     })
//     .then(data => {
//         console.log('promise 2 got', data);
//         return getFakePromise(true);
//     })
//     .then(data => {
//         console.log('promise 3 got', data);
//     })
//     .then(data => {
//         console.log('promise 4 got', data);
//     })
//     .catch(error => {
//         console.warn('some promise failed', error);
//     });






// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), 2000);
// });

// console.log('then before')
// promise2
//     .then(data => {
//         console.log('then');
//     });
// console.log('then after')




// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

// https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&date=20230531&json