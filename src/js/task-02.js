
"use strict";
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newItem = document.createElement('li');
newItem.textContent = `${ingredients[0]}`;
newItem.classList.add('item');

const newListItems = [];


ingredients.forEach((element) => {
    const newItem = document.createElement('li');
    newItem.textContent = `${element}`;
    newItem.classList.add('item');

    return newListItems.push(newItem);

});
const ingredientsRef = document.querySelector('#ingredients');
ingredientsRef.append(...newListItems);
console.log(newListItems);




// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.