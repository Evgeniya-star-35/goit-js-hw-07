'use strict';
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const ingredientsEl = ingredients.forEach(elem => {
//   const listElem = document.querySelector('#ingredients');
//   let itemElem = document.createElement('li');

//   itemElem.append(elem);
//   // console.log(itemElem);

//   const fullIngredient = listElem.appendChild(itemElem);
//   // console.log(fullIngredient);
//   return fullIngredient;
// });
const listElem = document.querySelector('#ingredients');

const showGallery = ingredients.reduce((acc, el) => acc + `<li>${el}</li>`, '');

listElem.insertAdjacentHTML('beforeend', showGallery);
