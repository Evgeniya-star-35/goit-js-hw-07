'use strict';
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// const listElem = document.querySelector('#ingredients');

// const showGallery = ingredients.reduce((acc, el) => acc + `<li>${el}</li>`, '');

// listElem.insertAdjacentHTML('beforeend', showGallery);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const listEl = document.querySelector('#ingredients');
const vegList = ingredients.map(el => {
  const itemVegs = document.createElement('li');
  itemVegs.append(el);

  return itemVegs;
});

listEl.append(...vegList);
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// const listEl = document.querySelector('#ingredients');
// const makeIngredients = elements => {
//   return elements.map(el => {
//     const itemVegs = document.createElement('li');
//     itemVegs.append(el);

//     return itemVegs;
//   });
// };
// const listIngredients = makeIngredients(ingredients);

// listEl.append(...listIngredients);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//вариант

// const ulList = document.querySelector('#ingredients');
// const ingredientsEl = ingredients.map((el) => {
//   const li = document.createElement('li');
//   li.innerHTML = `<p> ${el} </p>`;
//   return li;
