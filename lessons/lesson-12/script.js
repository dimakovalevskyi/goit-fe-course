// let paragraphEl = document.getElementById('paragraph1');
// function paragpraphClicked() {
//     console.log('clicked!!!');
// }
// paragraphEl.addEventListener('click', paragpraphClicked);

// let inputEl = document.querySelector('#input1');
// inputEl.addEventListener('input', () => {
//     console.log('input!!!');
// });
// inputEl.addEventListener('change', () => {
//     console.log('change!!!');
// });

// let buttonEl = document.getElementById('button1');
// buttonEl.addEventListener('mousedown', () => {
//     console.log('mousedown!!!');
// });
// buttonEl.addEventListener('mouseup', () => {
//     console.log('mouseup!!!');
// });
// buttonEl.addEventListener('click', () => {
//     console.log('click!!!');
// });


// let inputEl = document.querySelector('#input1');
// function inputChanged() {
//     console.log('value', this.value);
// }
// inputEl.addEventListener('change', inputChanged);



// document.getElementById('paragraph1').addEventListener('click', () => {
//     console.log('div clicked!!');
// });
// document.getElementById('button1').addEventListener('click', () => {
//     console.log('button1 clicked!!');
// });
// document.getElementById('button2').addEventListener('click', (event) => {
//     event.stopPropagation();
//     console.log('button2 clicked!!');
// });


// document.getElementById('link1').addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('link clicked!!');
// });


// - Урок 12
// 1. Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега ******************body.****************** Модальне вікно має закриватися при кліку на напівпрозорий оверлей, та на іконку хрестика всередині модалки
// 2. Додати в модалку логіку закриття при натисканні на кнопку **Escape**
// 3. Створити форму реєстрації користувача за допомогою js де буде 2 поля 
//     1. Поле логіна
//     2. Поле пароль
//     3. Захаркодити вірні логін і пароль в константах
//     4. Додати логіку сабміта форми, при сабміті перевіряємо введені логін і пароль.
//         1. Якщо логін і пароль співпадають - видаляємо форму з документа і показуємо **h2**  з написом **“Вхід успішний”**
//         2. Якщо логі і пароль не співпадають з даними з констант в пункті 3с - показуємо під формою помилку червоним кольором **“Логін або пароль не вірні”**



const MODAL_TEMPLATE = '<div class="modal-wrapper"><div class="modal-backdrop"></div><div class="modal-body"><button class="modal-close">&times;</button></div></div>';
const LOGIN = 'root';
const PASSWORD = '1234';


let bodyEl = document.getElementById('root');
let openBtn = document.getElementById('openBtn');

function authorizeUser() {
    let headerEl = document.createElement('h2');
    headerEl.innerText = 'Вхід успішний';
    bodyEl.append(headerEl);
}

function showError(formEl) {
    if (document.querySelector('.modal-body p.error')) {
        return;
    }
    let errorTextEl = document.createElement('p');
    errorTextEl.innerText = 'Логін або пароль не вірні';
    errorTextEl.classList.add('error');
    formEl.append(errorTextEl);
}

function formSubmitted(event) {
    event.preventDefault();

    // let formEl = event.target;
    let formEl = this;
    
    let loginInput = formEl.elements.login;
    let passwordInput = formEl.elements.password;
    let login = loginInput.value;
    let password = passwordInput.value;

    if (login === LOGIN && password === PASSWORD) {
        closeModal();
        authorizeUser();
    } else {
        showError(formEl);
    }
}

function prepareForm() {
    let modalBodyEl = document.querySelector('.modal-body');

    let formEl = document.createElement('form');
    modalBodyEl.append(formEl);
    
    let loginInput = document.createElement('input');
    loginInput.type = 'text';
    loginInput.placeholder = 'Your Login';
    loginInput.name = 'login';
    formEl.append(loginInput);
    
    let passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Your Password';
    passwordInput.name = 'password';
    formEl.append(passwordInput);
    
    let submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.innerText = 'Submit';
    formEl.append(submitBtn);
    
    formEl.addEventListener('submit', formSubmitted);
}

function openModal() {
    bodyEl.insertAdjacentHTML('afterbegin', MODAL_TEMPLATE);
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
    prepareForm();
}
function closeModal() {
    let modalEl = document.querySelector('.modal-wrapper');
    if (modalEl) {
        modalEl.remove();
    }
}
openBtn.addEventListener('click', openModal);
document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeModal();
    }
});
