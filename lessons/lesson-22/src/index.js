import './styles/style.scss';

import App from './app';

const app = new App();

// function testRegularStyle() {
//     fetch('http://localhost:3000/items')
//         .then(res => res.json())
//         .then(data => console.log('testRegularStyle', data))
//         .catch(error => {
//             console.warn(error);
//             alert(error.message);
//         });
// }

// async function testModernStyle() {
//     try {
//         let res = await fetch('http://localhost:3000/items');
//         let data = await res.json();
//         console.log('testModernStyle', data);
//     } catch (error) {
//         console.warn(error);
//         alert(error.message);
//     }
// }

// window.testRegularStyle = testRegularStyle;
// window.testModernStyle = testModernStyle;