"use strict";

// const inputListRef = document.querySelectorAll('.js-username-input');

// const inputBlur = (event) => {
//   const { dataset, value } = event.target;
//   const requiredLength = Number(dataset.length);

//   event.target.classList.remove('focus');

//   if (requiredLength === value.length) {
//     changeClass('valid', 'invalid', event.target);
//   } else {
//     changeClass('invalid', 'valid', event.target);
//   }
// };

// function changeClass(add, remove, elem) {
//   elem.classList.add(add);
//   elem.classList.remove(remove);
// }

// inputListRef.forEach((input) => {
//   input.addEventListener('blur', inputBlur);
//   input.addEventListener('focus', onInputFocus);
// });

const inputRef = document.querySelectorAll('#validation-input');
//const inputRefLength = inputRef.getAttribute('data-length');
console.log(inputRef);
inputRef.addEventListener(blur ,onInputBlur);

function onInputBlur(event) {
    const requiredLength = event.currentTarget.data-length === Number(inputRefLength);

    if (requiredLength === value.data-length) {
        changeClass('valid', 'invalid', event.target);
        // event.currentTarget.classList.add('valid');
        // event.currentTarget.classList.remove('invalid');
} 
    else {
       changeClass('invalid', 'valid', event.target);
        // event.currentTarget.classList.remove('valid');
        // event.currentTarget.classList.add('invalid');
    }
}


// if (requiredLength === value.length) {
//     changeClass('valid', 'invalid', event.target);
//   } else {
//     changeClass('invalid', 'valid', event.target);
//   }
//


// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.


// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }