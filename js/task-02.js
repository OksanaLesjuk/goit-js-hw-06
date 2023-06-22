// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// ВАРІАНТ 1
// const listIngredients = document.querySelector('#ingredients');

// const makeListIngredients = (ingredients) => {
//   return ingredients.map(ingredient => {
//     const ingredientEl = document.createElement('li');
//     ingredientEl.textContent = ingredient;
//     ingredientEl.classList.add("item");
//     return ingredientEl;
//   });
// }

// const createListIngredients = makeListIngredients(ingredients);

// listIngredients.append(...createListIngredients)


// ВАРІАНТ2

document.querySelector('#ingredients').append(...(ingredients.map(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item");
  return ingredientEl;
})))

