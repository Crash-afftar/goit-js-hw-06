const inputFrame = document.querySelector('#validation-input');

inputFrame.addEventListener('blur', onInputChange)

function onInputChange(event) {
    event.currentTarget.value.length === inputFrame.getAttribute('data-length')
    
    if (event.currentTarget.value.length == inputFrame.getAttribute('data-length')) {
        inputFrame.classList.add('valid');
        if (inputFrame.classList.contains('invalid')) {
            inputFrame.classList.remove('invalid')
        }
    } else {
        inputFrame.classList.remove('valid')
        inputFrame.classList.add('invalid')};
   }

// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.