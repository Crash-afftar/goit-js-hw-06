// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputText = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output');

inputText.addEventListener('input', onInputChange)

function onInputChange(event) {
    spanText.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
       spanText.textContent = 'Anonymous'; 
    }
}
